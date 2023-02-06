import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'title';
  show = false;
  change(){
    this.title="New title";
    
  }
  toggle(){
    this.show=!this.show;
  }
}
