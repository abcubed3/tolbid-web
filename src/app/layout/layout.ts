import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation';
import { FooterComponent } from '../footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [NavigationComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class LayoutComponent {
  toggleDarkMode() {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark');
    }
  }
}
