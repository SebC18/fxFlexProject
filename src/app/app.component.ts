import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'GenericWebFlex';

constructor(private cdRef: ChangeDetectorRef, 
            private mediaObserver: MediaObserver){
}

  ngOnInit(){

  }

  ngAfterViewInit(){

  }
}
