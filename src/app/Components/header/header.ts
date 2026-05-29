import { Component } from '@angular/core';
import { Router, RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
