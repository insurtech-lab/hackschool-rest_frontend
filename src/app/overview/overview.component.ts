import {Component, OnInit} from '@angular/core';
import {HttpRestService} from '../../services/http-rest.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  form: FormGroup;
  actions = [{id: 0, action: 'GET', name: 'Holen'}, {id: 1, action: 'DELETE', name: 'Löschen'}];

  constructor(private http: HttpRestService, private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: [''],
      action: ['']
    });
  }

  // handle submit
  onSubmit() {
    if (this.form.status === 'VALID') {
      console.log(this.form.value);
      // no error. form data is valid. now create recipe and add it.
      if (this.form.value.action.toUpperCase() === 'GET') {
        // GET
        this.http.getObject(this.form.value.id);
      } else {
        // DELETE this.form.value.action === 'DELETE'
        this.http.deleteOrder(this.form.value.id);
      }
    } else {
      // reset all input fields due to a invalid recipe form status
      this.form.reset();
    }
  }

  onCancel(): void {
    this.form.reset();
    this.router.navigate(['/']);
  }

}
