import { Component, ViewChild } from '@angular/core';
import { CommonData } from '../Models/models';

@Component({
  selector: 'app-uttarakhand',
  templateUrl: './uttarakhand.component.html',
  styleUrl: './uttarakhand.component.scss'
})
export class UttarakhandComponent {
  data: CommonData [] = [];
  @ViewChild('slickModal', { static: true }) slickModal: any;
  slideConfig = {
  "slidesToShow": 1, 
  "slidesToScroll":1,
  autoplay: true,
  autoPlaySpeed: 2000,
  dots: true,
  margin: 10,
  nextArrow: '<i class="fa fa-arrow-right nextArrowBtn"></i>',
 prevArrow: '<i class="fa fa-arrow-left prevArrowBtn"></i>'
};

ngOnInit(){
  this.data.push(
    {
      state: "Uttrakhand",
      locationName: "Jim Corbet National Park",
      locationDescription: "The small yet picture-perfect town of Auli is India's premier ski resort destination. Originally developed as a paramilitary base, Auli's skiing slopes are popular among tourists and professionals alike. In winter, Auli hosts several snow adventure events.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/UK/jim Corbet1.jpeg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/jim Corbet2.jpeg",         
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/jim Corbet3.jpeg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/jim Corbet4.jpeg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/jim Corbet5.jpeg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/jim Corbet6.jpeg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/jim Corbet7.jpeg",         
       }
      ]
    },
    {
      state: "Uttrakhand",
      locationName: "Massuri",
      locationDescription: "The small yet picture-perfect town of Auli is India's premier ski resort destination. Originally developed as a paramilitary base, Auli's skiing slopes are popular among tourists and professionals alike. In winter, Auli hosts several snow adventure events.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/UK/Massuri1.jpeg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Massuri2.jpeg",         
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Massuri3.jpeg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Massuri4.jpeg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Massuri5.jpeg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Massuri6.jpeg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Massuri7.jpeg",         
       }
      ]
    },
    {
      state: "Uttrakhand",
      locationName: "Rishikesh",
      locationDescription: "The small yet picture-perfect town of Auli is India's premier ski resort destination. Originally developed as a paramilitary base, Auli's skiing slopes are popular among tourists and professionals alike. In winter, Auli hosts several snow adventure events.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/UK/Rishikesh1.jpeg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Rishikesh2.jpeg",         
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Rishikesh3.jpeg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Rishikesh4.jpeg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Rishikesh5.jpeg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Rishikesh6.jpeg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Rishikesh7.jpeg",         
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Rishikesh8.jpeg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Rishikesh9.jpeg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Rishikesh10.jpeg",         
       }
      ]
    },
    {
      state: "Uttrakhand",
      locationName: "Kedarnath",
      locationDescription: "The small yet picture-perfect town of Auli is India's premier ski resort destination. Originally developed as a paramilitary base, Auli's skiing slopes are popular among tourists and professionals alike. In winter, Auli hosts several snow adventure events.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/UK/Kedarnath1.jpeg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Kedarnath2.jpeg",

         
     },{  
      imgDesc: "", 
      imgSrc: "../../assets/images/UK/Kedarnath3.jpeg",
       
   },
   {  
    imgDesc: "", 
    imgSrc: "../../assets/images/UK/Kedarnath4.jpg",     
   },
   {  
    imgDesc: "", 
    imgSrc: "../../assets/images/UK/Kedarnath5.jpg",     
   },
   {  
    imgDesc: "", 
    imgSrc: "../../assets/images/UK/Kedarnath6.jpg",     
   }
      ]
    },
    {
      state: "Uttrakhand",
      locationName: "Auli",
      locationDescription: "The small yet picture-perfect town of Auli is India's premier ski resort destination. Originally developed as a paramilitary base, Auli's skiing slopes are popular among tourists and professionals alike. In winter, Auli hosts several snow adventure events.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/UK/Auli1.jpeg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/UK/Auli2.jpg",

         
     }
      ]
    },
  )
}
}
