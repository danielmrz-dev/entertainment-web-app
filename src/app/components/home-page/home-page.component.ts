import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  private readonly authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.verifyToken().subscribe(console.log)
    
  }
}
