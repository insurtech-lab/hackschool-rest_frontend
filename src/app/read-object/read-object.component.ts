import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {HttpRestService} from '../../services/http-rest.service';

@Component({
  selector: 'app-read-object',
  templateUrl: './read-object.component.html',
  styleUrls: ['./read-object.component.css']
})
export class ReadObjectComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'quantity', 'category-name', 'category-unit', 'actions'];
  dataSource = new MatTableDataSource<Ingredient>();
  categories = [];
  selectedRowIndex = -1;

  constructor(private ds: HttpRestService) { }

  // subscribe to data service for data updates
  ngOnInit() {
    this.ds.getCart().subscribe((ingredient: Ingredient[]) => this.dataSource.data = ingredient);
    this.ds.getCats().subscribe(cats => this.categories = cats);
  }

  // used for searching thru the table:
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
