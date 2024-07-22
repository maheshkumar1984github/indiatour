import { Component } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrl: './adv.component.scss'
})
export class AdvComponent {
public advList = [];
ngOnInit() {}

constructor(public dialog: MatDialog){

}
BookNow(){
  let dialogRef = this.dialog.open(RegistrationComponent, {
    height: '550px',
    width: '860px',
  });
}
}
