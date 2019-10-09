import {Component, OnInit} from '@angular/core';

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
