import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css',
})
export class Page1Component {}
