import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DNA';
  cname = 'rudy';


  currentStyles: Record<string, string> = {};
  canSave=true;
  isUnchanged=true;;
  isSpecial=true;
  
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave? 'italic': 'normal',
      'font-weight': this.isUnchanged? 'bold': 'normal',
      'font-size': this.isSpecial? '24px': '12px',
    };
  }
  //constructor
  ngonInit()
  {
    this.setCurrentStyles();
  }
}

