import { Component, ViewChild } from '@angular/core';
import { CommonData } from '../Models/models';

@Component({
  selector: 'app-himachal',
  templateUrl: './himachal.component.html',
  styleUrl: './himachal.component.scss'
})
export class HimachalComponent {
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
      state: "Himachal",
      locationName: "Dalhousie",
      locationDescription: "Dalhousie is a hill station full of colonial charm that holds lingering echoes of the Raj. Spread out over five hills (Kathlog Potreys, Tehra, Bakrota & Bolun) the town is named after the 19th century British governor general Lord Dalhousie. The town’s varying altitude shades it with a variety of vegetation that includes stately grooves of pines, deodars, oaks and flowering rhododendrons. Rich in colonial architecture, the town preserves some beautiful churches. Its marvelous forest trails overlook vistas of wooded hills, water falls, springs and rivulets. Like a silver snake finding its way out of the mountains, the twists and turns of river Ravi are a treat to watch from many vantage points. There are also magnificent views of Chamba valley and the mighty Dhauladhar range with its awe-inspiring snow covered peaks filling an entire horizon. A veneer of Tibetan culture has added a touch of the exotic to this serene resort and along road sides are huge rocks carved in low relief painted in the Tibetan style. By road Dalhousie is 555 Km from Delhi, 45 KM from Chamba and the closest railhead at Pathankot is 85 KM away",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/Himachal/dalhousie1.jpg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/Himachal/dalhousie2.jpg",
         
     },
     {  
      imgDesc: "", 
      imgSrc: "../../assets/images/Himachal/dalhousie3.jpg",
       
     }
      ]
    },
    {
      state: "Himachal",
      locationName: "Manali",
      locationDescription: "Situated near the end of valley, Manali is one of the most attractive tourist spot not only of Himachal Pradesh, but of International fame also. Manali is synonymous streams and birdsong, forests and orchards and grandees of snow-capped mountains.Manali is the real starting point of an ancient trade route which crosses the Rohtang and Baralacha passes, and runs via Lahul and Ladakh to Kashmir while divergent road connects it with Spiti. Now the motor link have been provided up to Leh in Jammu & Kashmir, Pangi valley in Chamba and Kaza of Lahul & Spiti. There are regular bus services to these places from Manali during summer season. It is situated at a distance of 45 kms from Kullu.There is an interesting legend about Manali which goes to say that Manu, the author of ’Manu Samhita’, after the great deluge first stepped on the earth from the celestial boat at a place in this land. The particular spot where he established his abode was the present Manali which is regarded as the changed name of ’Manu-Alaya’, the abode of Manu. The temple dedicated to Manu is still existing in the Manali village.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/Himachal/Manali1.jpg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/Himachal/Manali2.jpeg",
         
     },
     {  
      imgDesc: "", 
      imgSrc: "../../assets/images/Himachal/Manali3.jpg",
       
     },
      {  
        imgDesc: "", 
        imgSrc: "../../assets/images/Himachal/Manali4.jpg",
        
    },
      {  
        imgDesc: "", 
        imgSrc: "../../assets/images/Himachal/Manali5.jpeg",
        
    },  
      {  
        imgDesc: "", 
        imgSrc: "../../assets/images/Himachal/Manali6.jpg",
        
    },    
      {  
        imgDesc: "", 
        imgSrc: "../../assets/images/Himachal/Manali7.jpg",
        
    },

      ]
    },
    {
      state: "Himachal",
      locationName: "Shimla",
      locationDescription: "Shimla District lies between the longitude 77o-0″ and 78o-19″ east and latitude 30o-45″ and 31o-44″ north. It is bounded by Mandi and Kullu in the north, Kinnaur in the east, the state of Uttaranchal in the south, Sirmaur, district in the west. The elevation of the district ranges from 300 to 6000 metres. The topology of the district is rugged and tough. Shimla district derives its name from Shimla town which was once a small village. Shimla district in its present form came into existence from 1st Sept,1972 on the reorganisation of the districts of the state.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/Himachal/shimla1.jpeg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/Himachal/shimla2.jpg",
         
     },
     {  
      imgDesc: "", 
      imgSrc: "../../assets/images/Himachal/shimla3.jpg",
       
     },
      {  
        imgDesc: "", 
        imgSrc: "../../assets/images/Himachal/shimla4.jpg",
        
    }

      ]
    },
    {
      state: "Himachal",
      locationName: "Rohtang",
      locationDescription: "Perched at an altitude of 3979m, Rohtang Pass is located at a distance of about 51kms from Manali. You have to pass Rohtang to enter Lahaul-Spiti, Pangi, and Leh valleys. Lying on the highway to Keylong/Leh, this pass remains closed during the winters only to open from June to October. Rohtang swarms with the crowd for these five months. Rohtang also serves as a hotspot for adventure enthusiasts, offering several sports like snow scooters, skiing, and mountain biking. This place has a picture-perfect backdrop for the photography buffs. But make sure that you hire a local cab driver or take a bus because the roads are very slippery and can be difficult if the driver is not accustomed to the topography. This pass has been named Rohtang, meaning ‘ground of corpses’ after all those people who lost their lives here in tragic incidents. Lying on the Pir Panjal range, this pass also offers spectacular views of the twin peaks of Geypan.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/Himachal/Rohtang1.jpg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/Himachal/Rohtang4.jpeg",
         
     },
     {  
      imgDesc: "", 
      imgSrc: "../../assets/images/Himachal/Rohtang5.jpeg",
       
     } ]
    }
    
    
  )
}
}
