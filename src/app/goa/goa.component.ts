import { Component, ViewChild } from '@angular/core';
import { CommonData } from '../Models/models';

@Component({
  selector: 'app-goa',
  templateUrl: './goa.component.html',
  styleUrl: './goa.component.scss'
})
export class GoaComponent {
  rjdata: CommonData [] = [];
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
  this.rjdata.push(
    {
      state: "Goa",
      locationName: "Goa",
      locationDescription: "Goa is the most popular destination for beachside holidays in India. It is the smallest state in the country by area, located on the southwestern coast. The region is blessed with beautiful scenic views, magnificent beaches, glorious natural landforms, tons of popular tourist attractions, and much more. It was also a major site of Portuguese colonial settlement in Asia, which reigned from 1510 to 1961. Now, Goa is one of Indias most visited tourist places, with visitors flocking to the region all year round. Alongside domestic travelers, tourists from around the globe visit Goa to witness its rich flora and fauna, incredible white-sand beaches, religious and historical landmarks, vibrant nightlife, delicious regional cuisine, and much more. Goa has everything you would hope for in terms of adventure. It is a paradise for tourists who want to participate in exciting activities during their trip, like beach hopping, water sports, dolphin spotting, hot-air ballooning, etc. Adding to its aspect of fun activities, tourists can also spend time exploring the local culture and tradition, trying out street food, going on a shopping spree, and much more during their visit. There are many wonderful places to see in Goa, including forts, churches, famous restaurants and pubs, wildlife reserves, etc. For example, you can find rare animal species at the Mandovi-Zuari Wildlife Sanctuary, go on a religious trip to the Se Cathedral, check out the historical background of the Chapora Fort, and so on. It also acts as a great starting point for a long tour of Indias southwestern region. Some popular places to visit near Goa include Dandeli, Gokarna, Panchgani, Malvan, etc. All of these aspects make Goa a must-visit holiday destination in the country.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/goa/goa0.jpg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/goa/goa.jpg",
         
     },
     {  
      imgDesc: "", 
      imgSrc: "../../assets/images/goa/goa1.jpg",
       
     },
      {  
        imgDesc: "", 
        imgSrc: "../../assets/images/goa/goa3.jpg",
        
    }
    ,
      {  
        imgDesc: "", 
        imgSrc: "../../assets/images/goa/goa4.jpg",
        
    },

      ]
    },{
      state: "Goa",
      locationName: "Dudhsagar",
      locationDescription: "The magnificent Dudhsagar Waterfall is perched in the high peaks of the Western Ghats and is a sight to behold especially in the monsoons when it is in full and furious flow. From a distance, the waterfall appears like streams of milk rushing down the mountainside. The exhuberent and spectacular waterfall is located in the Sanguem taluka.Measuring a mighty 600m from head to foot, this waterfall on the Goa-Karnataka border, attracts a steady stream of visitors from the coast into the rugged Western Ghats. After pouring across the Deccan plateau, the headwaters of the Mandovi River form a foaming torrent that splits into three streams to cascade down a near-vertical cliff face into a deep green pool.The Konkani name for the falls, which literally translated means “sea of milk”, derives from clouds of milky foam which rises up at the bottom of the falls. Dudhsagar is set amidst breathtaking scenery overlooking a steep, crescent-shaped head of a valley carpeted with pristine tropical forest, which is only accessible on foot or by train.Like most places in Goa, the Dudhsagar waterfall too has a legend attached to its name. The legend tells the story of this powerful and wealthy king who ruled a kingdom in the Western Ghats. His lavish and opulent palace in the hills was surrounded by vast gardens which were full of deers and gazelles.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/goa/dudhsagar1.jpg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/goa/dudhsagar2.jpg",
         
     },
     {  
      imgDesc: "", 
      imgSrc: "../../assets/images/goa/dudhsagar3.jpg",
       
     }
      ]
    },
 
    
  )
}

}
