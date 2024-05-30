import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent {

  imagesPaths = [{ id: 0, name: '../../../assets/images/loginImage3.jpg'},
                 {id: 1, name: '../../../assets/images/loginImage1.jpg'}]
                 
  currentIndex = 0;

  private xStart = 0;
  private xEnd = 0;
  

  onStartTouch(event: TouchEvent): void {
    this.xStart = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent): void {
    this.xEnd = event.touches[0].clientX;
  }

  onTouchEnd(): void {
    if(this.xStart - this.xEnd > 50) {
      this.nextImage();
    } else if(this.xEnd - this.xStart > 50) {
      this.previousImage();
    }
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  nextImage(): void {
    console.log('next image');
    if(this.currentIndex === this.imagesPaths.length - 1) {
      this.currentIndex = 0;
      return;
    } else{ this.currentIndex = this.currentIndex + 1; }
  }

  previousImage(): void {
    console.log('previous image');
    if(this.currentIndex === 0) {
      this.currentIndex = this.imagesPaths.length - 1;
      return;
    } else{ this.currentIndex = this.currentIndex - 1; }
  }



}
