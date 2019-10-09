import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {HttpRestService, Order} from '../../services/http-rest.service';

@Component({
  selector: 'app-read-object',
  templateUrl: './read-object.component.html',
  styleUrls: ['./read-object.component.css']
})
export class ReadObjectComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'quantity', 'category-name', 'category-unit', 'actions']; // TODO: hier kommen die kategorien rein, die in orders data type drin sind
  dataSource = new MatTableDataSource<Order>();
  selectedRowIndex = -1;

  error = null;

  constructor(private http: HttpRestService) { }

  // subscribe to data service for data updates
  ngOnInit() {
    this.http.getAllOrders().subscribe(
      (data: Order[]) => this.dataSource.data = data,
      error => this.error = error
    );
  }

  // used for searching thru the table:
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
