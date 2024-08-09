import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent {
  constructor(public dialog: MatDialog){}
  MoreDetails(){
    let dialogRef = this.dialog.open(RegistrationComponent, {
      height: '550px',
      width: '900px',
    });
  }
}
