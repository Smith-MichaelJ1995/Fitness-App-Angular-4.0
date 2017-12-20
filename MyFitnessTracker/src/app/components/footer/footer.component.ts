import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  /*On click of the 'top' button, scroll to coordinates (0,0) of page*/
  onEdit()
  {
     window.scrollTo(0,0);
  }
}
