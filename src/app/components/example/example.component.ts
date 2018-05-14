import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any; // not required
declare var slick: any; // not required

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit {
  slickopts = {
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 6 // Removes the linear order. Would expect card 5 to be on next row, not stacked in groups.
  };

  constructor() {}

  ngOnInit() {
    $('.carousel').slick(this.slickopts);
  }
}
