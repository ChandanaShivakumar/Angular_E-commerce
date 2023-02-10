import { Component } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommentsService]
})
export class AppComponent {
  title = 'E-Commerce';

  constructor(private _commentservice : CommentsService){
  }
}
