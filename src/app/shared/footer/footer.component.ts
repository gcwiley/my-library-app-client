import { Component } from '@angular/core';
import { VERSION } from '@angular/material/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  version = VERSION.full;

  year = new Date().getFullYear();
}
