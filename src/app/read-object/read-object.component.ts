import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {HttpRestService, Order} from '../../services/http-rest.service';

@Component({
  selector: 'app-read-object',
  templateUrl: './read-object.component.html',
  styleUrls: ['./read-object.component.css']
})
export class ReadObjectComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'forename', 'position', 'street', 'zip', 'town'];
  dataSource = new MatTableDataSource<Order>();
  error = null;

  constructor(private http: HttpRestService) {
  }

  // subscribe to data service for data updates
  ngOnInit() {
    this.http.getAllOrders().subscribe(
      (data: any) => {
        this.dataSource.data = data.orders;
        console.log(data.orders);
      },
      error => this.error = error
    );
  }

  // used for searching thru the table:
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
