import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showLoader: boolean = false;

  constructor(private router: Router) {}

  simulateService(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 5000));
  }

  async simulateRequest(): Promise<void> {
    this.showLoader = true;
    await this.simulateService();
    this.showLoader = false;

    this.router.navigate(['/sobre-nosotros']);
  }
}
