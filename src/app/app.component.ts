import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title: string|undefined;
  subTitle: string|undefined;

  ngOnInit() {
    this.title = "Freiheitstexte"
    this.subTitle = 'Ideen für Leipzig';
  }
}
