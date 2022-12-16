import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  title: string|undefined;
  content: string|undefined;

  proponents: string[] = []

  // id should be the hash of the content.
  id: string|undefined;
  previous: string|undefined;

  ngOnInit() {
    this.title = "Freiheitstexte"
    this.proponents = ["Tick Duck", "Trick Duck", "Track Duck"]
    this.content = "test";
    this.id = "adkjadkjdasjd";
  }
}
