import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { RegistrationComponent } from '../app/registration/registration.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'india-tour-with-ravi-ang';

  constructor(public dialog: MatDialog){}
  MoreDetails(){
    let dialogRef = this.dialog.open(RegistrationComponent, {
      height: '550px',
      width: '900px',
    });
  }
}
