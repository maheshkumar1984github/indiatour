import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { RegistrationComponent } from '../app/registration/registration.component'
import {MediaObserver, MediaChange} from '@angular/flex-layout'
import {Subscription} from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'india-tour-with-ravi-ang';
 
  constructor(public dialog: MatDialog, public mediaObserver:MediaObserver,
    private router:Router
  ){
    
  }
  MoreDetails(){
    // let dialogRef = this.dialog.open(RegistrationComponent, {
    //   height: '780px',
    //   width: '1150px',
    // });
    this.router.navigateByUrl('/registration');

  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    
  }
}
