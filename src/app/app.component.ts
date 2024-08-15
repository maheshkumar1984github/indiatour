import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { RegistrationComponent } from '../app/registration/registration.component'
import {MediaObserver, MediaChange} from '@angular/flex-layout'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'india-tour-with-ravi-ang';
  // mediaSub :Subscription;
  constructor(public dialog: MatDialog, public mediaObserver:MediaObserver){
    
  }
  MoreDetails(){
    let dialogRef = this.dialog.open(RegistrationComponent, {
      height: '550px',
      width: '900px',
    });
  }
  ngOnInit(): void {
    // this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{

    // });
  }
  ngOnDestroy(): void {
    
  }
}
