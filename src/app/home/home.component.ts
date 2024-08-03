import { Component, ViewChild } from '@angular/core';
import { CommonData, commonHome } from '../Models/models';
import { SlickCarouselComponent } from "ngx-slick-carousel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  rjdata: CommonData [] = [];
  homedata: commonHome [] = [];
  hoteldata: commonHome [] = [];
  // @ViewChild('slickModal', { static: true });
  @ViewChild('slickModal', { static: true }) slickModal: SlickCarouselComponent;
  slideConfig = {
  "slidesToShow": 1, 
  "slidesToScroll":1,
  arrows: true,
  autoplay: false,
  autoPlaySpeed: 2000,
  dots: true,
  margin: 10,
  nextArrow: '<mat-icon aria-hidden="false" aria-label="Example home icon" fontIcon="free breakfast icon"></mat-icon>',
  prevArrow: '<mat-icon aria-hidden="false" aria-label="Example home icon" fontIcon="free breakfast icon"></mat-icon>',
  
};

constructor(){
  // this.slickModal: any[] = []
}

  ngOnInit(){
    this.hoteldata.push(
      {
        title: "Crowne Plaza, Rohini",       
        imgUrl:"../../assets/images/delhiHotel.jpg",
        description: "Located close to the sprawling Japanese Park in the northwest of Delhi, the Crowne Plaza brings the IHG corporation’s international experience to this huge events property. With 183 rooms, it’s one of the larger hotels in the city and in Spice Art, it has one of the most popular upmarket Indian restaurants on the market. Elsewhere, you’ll find a large outdoor pool (rare for New Delhi), a generously equipped gym and a spa with a suitably sprawling treatment menu"
      },
    )
    this.homedata.push(
      {
        title: "Delhi",
        subtitle: "Akshardham Temple",
        imgUrl:"../../assets/images/delhi/akshardham2.jpg",
        description: "Swaminarayan Akshardham in New Delhi epitomizes 10,000 years of Indian culture in all its breathtaking grandeur, beauty, wisdom an d bliss. It brilliantly showcases the essence of India’s ancient architecture, traditions and timeless spiritual messages."
      },
      {
        title: "Rajasthan",
        subtitle: "Hawa Mahal",
        imgUrl:"../../assets/images/rajasthan/hawamahal.jpeg",
        description: "The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers."
      },
      {
        title: "Goa",
        subtitle: "Goa",
        imgUrl:"../../assets/images/Goa/goa.jpg",
        description:"Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats."
      },
      {
        title: "Jammu & Kashmir",
        subtitle: "Dal Lake",
        imgUrl:"../../assets/images/jk/dallake2.jpeg",
        description: "Dal is a lake in Srinagar (Dal Lake is a misnomer as Dal in Kashmiri means lake), the summer capital of Jammu and Kashmir. The urban lake, is integral to tourism and recreation in Kashmir and is named the “Jewel in the crown of Kashmir” or “Srinagar’s Jewel”."
      },
      {
        title: "Uttrakhand",
        subtitle: "Rishikesh",
        imgUrl:"../../assets/images/UK/Rishikesh1.jpeg",
        description:"Rishikesh is also known for its connection with The Beatles. In February 1968, members of the legendary English rock band visited Maharishi Mahesh Yogi's ashram (now popularly known as the Beatles Ashram) to learn transcendental meditatio"
      },
      {
        title: "Himachal",
        subtitle: "Manali",
        imgUrl:"../../assets/images/Himachal/Manali3.jpg",
        description:"Situated near the end of valley, Manali is one of the most attractive tourist spot not only of Himachal Pradesh, but of International fame also. Manali is synonymous streams and birdsong, forests and orchards and grandees of snow-capped mountains."
      }
    )
    this.rjdata.push(
      {
        state: "",
        locationName: "",
        locationDescription: "",
        childImage: [
          {  
            imgDesc: "", 
            imgSrc: "../../assets/images/tajmahal.jpeg",
             
         },
         {  
          imgDesc: "", 
          imgSrc: "../../assets/images/jk/dallake1.jpeg",
           
        },
          {  
            imgDesc: "", 
            imgSrc: "../../assets/images/delhi/delhi-lotas.jpg",
             
         },
         {  
          imgDesc: "", 
          imgSrc: "../../assets/images/rajasthan/hawamahal2.jpeg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/rajasthan/jalmahal4.jpeg",
         
       },
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/rajasthan/rantham3.jpeg", 
          
        },
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/UK/Massuri5.jpeg", 
          
        },
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/jk/gulmarg1.jpeg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/sonmarg3.jpeg",         
       }
   
        ]
      },
    )
  }
  
  next() {
    //this.slickModal.slickNext();
  }
  prev() {
   // this.slickModal.slickPrev();
  }
}
