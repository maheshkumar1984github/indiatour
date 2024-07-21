import { Component, ViewChild } from '@angular/core';
import { CommonData } from '../Models/models';

@Component({
  selector: 'app-jk',
  templateUrl: './jk.component.html',
  styleUrl: './jk.component.scss'
})
export class JkComponent {
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
    }
  
  )
}
}
