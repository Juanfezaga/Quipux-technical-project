import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input('brand') brand: boolean = false;

  decomposeUrl: string[] = this.router.url.split('/')

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
  }

}
