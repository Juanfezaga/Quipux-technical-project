import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'technical-project';
  ngOnInit(): void {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    // var offcanvasElementList = [].slice.call(
    //   document.querySelectorAll('.offcanvas')
    // );
    // var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
    //   return new bootstrap.Offcanvas(offcanvasEl);
    // });
  }
}
