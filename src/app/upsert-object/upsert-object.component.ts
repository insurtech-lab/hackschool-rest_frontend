import { Component, OnInit } from '@angular/core';
import {HttpRestService, Order, POSITIONS} from '../../services/http-rest.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upsert-object',
  templateUrl: './upsert-object.component.html',
  styleUrls: ['./upsert-object.component.css']
})
export class UpsertObjectComponent implements OnInit {

  orderForm: FormGroup;
  positions = POSITIONS; // const from data service -- not good but works!

  constructor(private http: HttpRestService, private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.orderForm = this.formBuilder.group({
      id: ['-1'],
      name: [''],
      forename: [''],
      positions: [''],
      street: [''],
      zip: [''],
      town: [''],
    });
  }

  // handle submit
  onSubmit() {
    if (this.orderForm.status === 'VALID') {
      console.log(this.orderForm.value);
      // no error. form data is valid. now create recipe and add it.
      const order: Order = {
        id: this.orderForm.value.id,
        name: this.orderForm.value.name,
        forename: this.orderForm.value.forename,
        position: this.orderForm.value.positions,
        street: this.orderForm.value.street,
        zip: this.orderForm.value.zip,
        town: this.orderForm.value.town
      };
      // PUT
      this.http.putOrder(order).subscribe(data => console.log(data));
    } else {
      // reset all input fields due to a invalid recipe form status
      this.orderForm.reset();
    }
  }

  onCancel(): void {
    this.orderForm.reset();
    this.router.navigate(['/']);
  }

}
