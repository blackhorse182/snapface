import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  title: any;
  imageUrl: any;
  description: any;
  createdAt: any;
  snaps: number = 0;
  userHasSnapped: boolean = false;
  snapButtonText: string = 'Oh Snap!';

  onSnap(): void {
    if (this.userHasSnapped) {
      this.snaps--;
      this.snapButtonText = 'Oh Snap!';
      this.userHasSnapped = false;
    } else {
      this.snaps++;
      this.snapButtonText = 'Oops, unSnap!';
      this.userHasSnapped = true;
    }
  }
}
