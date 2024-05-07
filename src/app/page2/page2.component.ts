import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css',
})
export class Page2Component {}
