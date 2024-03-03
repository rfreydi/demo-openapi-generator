import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiModule, DefaultService } from '../api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApiModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  defaultService = inject(DefaultService);
  test() {
    this.defaultService.userControllerFindOne('123').subscribe(user => {
      console.log(user.isEnabled);
    });
  }
}
