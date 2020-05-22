import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eyesnsquids';

  contructor(){}
  genthreedie(){
    // tslint:disable-next-line:max-line-length
    return Math.floor(Math.random() * Math.floor(6)) + Math.floor(Math.random() * Math.floor(6)) + Math.floor(Math.random() * Math.floor(6));
  }
}
