import {Component, OnInit} from '@angular/core';
import {CreateObjectComponent} from './create-object/create-object.component';
import {ReadObjectComponent} from './read-object/read-object.component';
import {DetailViewOrderComponent} from './detail-view-order/detail-view-order.component';
import {UpsertObjectComponent} from './upsert-object/upsert-object.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SVI-Leckerbissen';
  links: Array<{ text: string, path: string }> = [];


  ngOnInit(): void {
    this.links.push({text: 'Neue Lieferung', path: 'order'}, {text: 'Alle Lieferungen', path: 'allorders'},
      {text: 'Bestehende Lieferung aktualisieren', path: 'order/update'});
    console.log('Willkommen beim ' + this.title);
  }
}
