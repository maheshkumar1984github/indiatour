import { Component } from '@angular/core';
import {feeddata} from '../Models/mdlfeedback'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FeedbackserviceService} from '../feedbackservice.service'
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
feedbackForm: FormGroup;
public feedbackdata:feeddata[] = [];
public localstorageData:any;
IsAddfeedBack: boolean = false

constructor(private formBuilder: FormBuilder,private httpfeed: FeedbackserviceService) {  

}

ngOnInit(){
  emailjs.init('XfQuclXGziFGOssM1');
this.feedbackForm = this.formBuilder.group({
  from_name : ['', Validators.required],
  feedbackDescription: ['', Validators.required],
})
this.feedbackdata.push({fromName: 'Vinay' ,description: "He is verry nice and honest guy.", entrydate: '9/10/2024, 8:12:24 PM'})
this.localstorageData = localStorage.getItem('dataSource');
if(this.localstorageData){
  this.feedbackdata =[];
  this.feedbackdata= JSON.parse(this.localstorageData)
  this.feedbackdata.sort((a, b) => <any>new Date(b.entrydate) - <any>new Date(a.entrydate));
}

}


 onSubmit() {
  if(this.feedbackForm.valid){
    this.feedbackdata.push({
      fromName: this.feedbackForm.value.from_name,
      description: this.feedbackForm.value.feedbackDescription,
      entrydate: new Date().toISOString(),
    });
    this.feedbackdata.sort((a, b) => <any>new Date(b.entrydate) - <any>new Date(a.entrydate));
    var data= JSON.stringify(this.feedbackdata);
    this.IsAddfeedBack = false;
    localStorage.setItem('dataSource', data);

    emailjs.send("service_75btl4q","template_nnzvwto",{
      from_name: this.feedbackForm.value.from_name,
      feedbackDescription: this.feedbackForm.value.feedbackDescription,
      entrydate: new Date().toISOString()
      });
   
  }
 
 
}

Addfeedback(){
  this.IsAddfeedBack = true;
  this.feedbackForm.reset();
  // this.feedbackForm.rese.controls['from_name'].value('');
  // this.feedbackForm.controls['feedbackDescription'].value('');
  // this.feedbackForm.updateValueAndValidity();
}

get sortData() {
  return this.feedbackdata.sort((a, b) => {
    return <any>new Date(b.entrydate) - <any>new Date(a.entrydate);
  });
}

}
