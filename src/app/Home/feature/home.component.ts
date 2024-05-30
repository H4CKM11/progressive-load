import { Component } from '@angular/core';
import { ImageCarouselComponent } from '../../Shared/Carousel/image-carousel/image-carousel.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageCarouselComponent],
  providers: [CookieService],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private cookieService: CookieService) {
    this.cookieService.set('Test', 'Hello World');
    console.log(this.cookieService.get('SessionID'));
    console.log(this.cookieService.get('Test'));
  }
}
