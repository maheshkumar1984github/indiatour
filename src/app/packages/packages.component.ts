import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import {Ipackage} from '../Models/models'

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent {
  panelOpenState = false;
packageData:Ipackage [] =[];
packageDataBKP:Ipackage [] =[];
packageDataOrignal:Ipackage [] =[];

packageDataCity:Ipackage [] =[];
packageDataSpecial:Ipackage [] =[];
packageDataPckgType:Ipackage [] =[];

cityList:string []=['Delhi', 'Aagra','Jaipur','Jhodhpur','Amravati','Manali','Shimla','Srinagar','Sonmarg','Goa'];
specialtourList:string []=['Nature', 'Mountain','National Park','Snow','Historical','City'];
daysList:string [] =['1-2','2-3','3-4','4-5','5-10'];
packageTypeList: string []=['Family Package', 'Group', 'Haneymoon'];
stateList: string []=['Delhi', 'Rajasthan', 'Jammu & Kashmir', 'Goa', 'Himachal','Uttrakhand'];
all_selected_values: string[] = [];
city:any;
public selectedVal: string = '';
public selectedPckgTypeVal: string = '';
public selectedCityValue:string ='';
public selectedspecialValue:string ='';
public selectedSateValue: string ='';
public showfilter: boolean = false;

  constructor(public dialog: MatDialog){}
  MoreDetails(){
    let dialogRef = this.dialog.open(RegistrationComponent, {
      height: '550px',
      width: '900px',
    });
  }

  ngOnInit(){
    this.packageData.push(
      {
        title:'1D/1N',
        citys:[
          {Name:'Delhi',detaillink: '/delhi'},
          {Name:'Aagra',detaillink: '/home'},
        ],
        iconsname:[
          { Name:'free_breakfast',desc:'Breakfast'},
          { Name:'language',desc:'Language Guide'},
          { Name:'business',desc:'Hotels'},
          { Name:'accessibility',desc:'Drive'},
          { Name:'camera',desc:'Sightseeing'},

        ],
        days: '1-2',
        packageType:'Family Package',
        imgurl:'../../assets/images/tajmahal.jpeg',
        routDetails:['Delhi','Mathura','Aagra'],
        state:'Delhi',
        specialtourtype: 'City',
        filterCityName:['Delhi','Aagra']
      },
      {
        title:'3D/2N',
        citys:[
          {Name:'Rishikesh',detaillink: '/uttarakhand'},         
        ],
        iconsname:[
          { Name:'free_breakfast',desc:'Breakfast'},
          { Name:'language',desc:'Language Guide'},
          { Name:'business',desc:'Hotels'},
          { Name:'accessibility',desc:'Drive'},
          { Name:'camera',desc:'Sightseeing'},

        ],
        days: '2-3',
        packageType:'Group',
        imgurl:'../../assets/images/UK/Rishikesh10.jpeg',
        routDetails:['Delhi','Rishikesh'],
        state:'Uttarakhand',
        specialtourtype: 'Nature',
        filterCityName:['Rishikesh']
      },
      {
        title:'3D/2N',
        citys:[
          {Name:'Jim Corbet',detaillink: '/uttarakhand'},
        ],
        iconsname:[
          { Name:'free_breakfast',desc:'Breakfast'},
          { Name:'language',desc:'Language Guide'},
          { Name:'business',desc:'Hotels'},
          { Name:'accessibility',desc:'Drive'},
          { Name:'camera',desc:'Sightseeing'},
        ],
        days: '2-3',
        packageType:'Family Package',
        imgurl:'../../assets/images/UK/jim Corbet7.jpeg',
        routDetails:['Delhi','Jim Corbet National Park'],
         state:'Uttarakhand',
         specialtourtype: 'National Park',
         filterCityName:['Jim Corbet']
      },
      {
        title:'4D/3N',
        citys:[
          {Name:'Manali',detaillink: '/himachal'},
          {Name:'Solang Valley',detaillink: '/himachal'},
        ],
        iconsname:[
          { Name:'free_breakfast',desc:'Breakfast'},
          { Name:'language',desc:'Language Guide'},
          { Name:'business',desc:'Hotels'},
          { Name:'accessibility',desc:'Drive'},
          { Name:'camera',desc:'Sightseeing'},
          
        ],
        days: '3-4',
        packageType:'Family Package',
        imgurl:'../../assets/images/Himachal/Manali7.jpg',
        routDetails:['Delhi','Chandigar','Manali','Solang Valley'],
        state:'Himachal',
        specialtourtype: 'Nature',
        filterCityName:['Manali','Solang Valley']
      },
      {
        title:'4D/3N',
        citys:[
          {Name:'Manali',detaillink: '/himachal'},
          {Name:'Sissu',detaillink: '/himachal'},
          {Name:'Rohtang',detaillink: '/himachal'},
        ],
        iconsname:[
          { Name:'free_breakfast',desc:'Breakfast'},
          { Name:'language',desc:'Language Guide'},
          { Name:'business',desc:'Hotels'},
          { Name:'accessibility',desc:'Drive'},
          { Name:'camera',desc:'Sightseeing'},

        ],
        days: '3-4',
        packageType:'Family Package',
        imgurl:'../../assets/images/Himachal/Rohtang4.jpeg',
        routDetails:['Delhi','Chandigarh','Manali','Solang Valley'],
         state:'Himachal',
         specialtourtype: 'Mountain',
         filterCityName:['Manali','Sissu','Rohtang']
      },
      {
        title:'2D/2N',
        citys:[
          {Name:'Nanital',detaillink: '/uttarakhand'},
         
        ],
        iconsname:[
          { Name:'free_breakfast',desc:'Breakfast'},
          { Name:'language',desc:'Language Guide'},
          { Name:'business',desc:'Hotels'},
          { Name:'accessibility',desc:'Drive'},
          { Name:'camera',desc:'Sightseeing'},

        ],
        days: '2-3',
        packageType:'Family Package',
        imgurl:'../../assets/images/UK/Nanital.jpeg',
        routDetails:['Delhi','Nanital Zoo','Bhimtal','Nanital'],
        state:'Uttarakhand',
        specialtourtype: 'Mountain',
        filterCityName:['Nanital']
      },
       {
        title:'2D/2N',
        citys:[
          {Name:'Mussoorie',detaillink: '/uttarakhand'},
         
        ],
        iconsname:[
          { Name:'free_breakfast',desc:'Breakfast'},
          { Name:'language',desc:'Language Guide'},
          { Name:'business',desc:'Hotels'},
          { Name:'accessibility',desc:'Drive'},
          { Name:'camera',desc:'Sightseeing'},

        ],
        days: '2-3',
        packageType:'Family Package',
        imgurl:'../../assets/images/UK/Massuri1.jpeg',
        routDetails:['Delhi','Dehradun','Mussoorie'],
        state:'Uttarakhand',
        specialtourtype: 'Nature',
        filterCityName:['Mussoorie']
      },
      {
        title:'5D/4N',
        citys:[
          {Name:'Srinagar',detaillink: '/jk'},
          {Name:'Gulmarg',detaillink: '/jk'},
         
        ],
        iconsname:[
          { Name:'free_breakfast',desc:'Breakfast'},
          { Name:'language',desc:'Language Guide'},
          { Name:'business',desc:'Hotels'},
          { Name:'accessibility',desc:'Drive'},
          { Name:'camera',desc:'Sightseeing'},

        ],
        days: '4-5',
        packageType:'Family Package',
        imgurl:'../../assets/images/jk/dallake1.jpeg',
        routDetails:['Delhi','Gulmarg','Srinagar'],
        state:'Jammu & Kashmir',
        specialtourtype: 'Nature',
        filterCityName:['Srinagar','Gulmarg']
      },
      {
        title:'5D/4N',
        citys:[
          {Name:'Srinagar',detaillink: '/jk'},
          {Name:'Sonmarg',detaillink: '/jk'},
         
        ],
        iconsname:[
          { Name:'free_breakfast',desc:'Breakfast'},
          { Name:'language',desc:'Language Guide'},
          { Name:'business',desc:'Hotels'},
          { Name:'accessibility',desc:'Drive'},
          { Name:'camera',desc:'Sightseeing'},
        ],
        days: '4-5',
        packageType:'Family Package',
        imgurl:'../../assets/images/jk/dallake2.jpeg',
        routDetails:['Delhi','Sonmarg','Srinagar'],
        state:'Jammu & Kashmir',
        specialtourtype: 'Nature',
        filterCityName:['Srinagar','Sonmarg']
      },
      {
        title:'3/2N',
        citys:[
          {Name:'Jaipur',detaillink: '/rajasthan'},         
         
        ],
        iconsname:[
          { Name:'free_breakfast',desc:'Breakfast'},
          { Name:'language',desc:'Language Guide'},
          { Name:'business',desc:'Hotels'},
          { Name:'accessibility',desc:'Drive'},
          { Name:'camera',desc:'Sightseeing'},
        ],
        days: '4-5',
        packageType:'Family Package',
        imgurl:'../../assets/images/rajasthan/hawamahal.jpeg',
        routDetails:['Delhi','Jaipur'],
        state:'Rajasthan',
        specialtourtype: 'Historical',
        filterCityName:['Jaipur']
      },
      {
        title:'3/2N',
        citys:[
          {Name:'Ranthambore National Park',detaillink: '/rajasthan'},         
         
        ],
        iconsname:[
          { Name:'free_breakfast',desc:'Breakfast'},
          { Name:'language',desc:'Language Guide'},
          { Name:'business',desc:'Hotels'},
          { Name:'accessibility',desc:'Drive'},
          { Name:'camera',desc:'Sightseeing'},
        ],
        days: '4-5',
        packageType:'Family Package',
        imgurl:'../../assets/images/rajasthan/rantham3.jpeg',
        routDetails:['Delhi','Ranthambore'],
        state:'Rajasthan',
        specialtourtype: 'Historical',
        filterCityName:['Amravati']
      },

    )

    // this.packageDataBKP =this.packageData;
    this.packageDataOrignal =this.packageData;

  }

  
onChange(value: string): void {
  if (this.all_selected_values.includes(value)) {
    this.all_selected_values = this.all_selected_values.filter((item) => item !== value);
  } else {
    this.all_selected_values.push(value);
  }
  console.log(this.all_selected_values);
}

public filterPackage(): void{
  this.packageDataBKP = this.packageDataOrignal;
  /** Day Filter */
  if(this.selectedVal.length > 0){
    const val: any = this.selectedVal;
    this.packageDataBKP  =  this.packageDataBKP.filter(function(item){
      return val.includes(item.days)
    })   
  } 
/** City Filter */
  if(this.selectedCityValue.length > 0){
    const val: any = this.selectedCityValue;
    this.packageDataBKP  =  this.packageDataBKP.filter(function(item){
      return val.some((el:any) => item.filterCityName?.includes(el))
    })  
    
  } 
  /** State Filter */
  if(this.selectedSateValue.length > 0){
    const val: any = this.selectedSateValue;
    this.packageDataBKP  =  this.packageDataBKP.filter(function(item){
      return val.includes(item.state)
    })   
  } 
  this.packageData = this.packageDataBKP;   
  } 

  resetFilter(){
    this.selectedVal = '';
    this.selectedPckgTypeVal = '';
    this.selectedCityValue = '';
    this.selectedspecialValue = '';
    this.selectedSateValue = ''
    // this.packageDataSpecial =[]
    // this.packageDataCity = [];
    // this.packageDataBKP  = []
    // this.packageDataPckgType  = []
    this.packageData = this.packageDataOrignal;
  }

}
