import { Component } from '@angular/core';

// import angular materials modules
import { MatCardModule } from '@angular/material/card';

// import the about text
import { biographyText } from 'src/assets/data/about-info';

@Component({
   selector: 'app-about',
   templateUrl: './about.component.html',
   styleUrls: ['./about.component.scss'],
   standalone: true,
   imports: [MatCardModule],
})
export class AboutComponent {
   bioText = biographyText;
}
