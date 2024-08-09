import { Component, Input, ViewChild } from '@angular/core';
import {ReadmoreComponent} from '../readmore/readmore.component';
import {CommonData} from '../Models/models'
import { SlickCarouselComponent } from 'ngx-slick-carousel/slick.component';

import { GalleryModule, GalleryComponent, ImageItem, GalleryItem } from 'ng-gallery';
@Component({
  selector: 'app-rajasthan',
  templateUrl: './rajasthan.component.html',
  styleUrl: './rajasthan.component.scss',
})
export class RajasthanComponent {
   images: GalleryItem[] =[];
   
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


  ngOnInit() {
   // this.images = [
   //    new ImageItem({ src: '../../assets/images/rajasthan/hawamahal.jpeg', thumb: '../../assets/images/rajasthan/hawamahal.jpeg' }),
   //    new ImageItem({ src: '../../assets/images/rajasthan/hawamahal2.jpeg', thumb: '../../assets/images/rajasthan/hawamahal2.jpeg' }),

   //    new ImageItem({ src: '../../assets/images/rajasthan/hawamahal3.jpeg', thumb: '../../assets/images/rajasthan/hawamahal3.jpeg' }),
   //    new ImageItem({ src: '../../assets/images/rajasthan/hawamahal4.jpeg', thumb: '../../assets/images/rajasthan/hawamahal4.jpeg' }),

   //    new ImageItem({ src: '../../assets/images/rajasthan/jalmahal2.jpeg', thumb: '../../assets/images/rajasthan/jalmahal2.jpeg' }),
   //    new ImageItem({ src: '../../assets/images/rajasthan/jalmahal3.jpeg', thumb: '../../assets/images/rajasthan/jalmahal3.jpeg' }),

   //    new ImageItem({ src: '../../assets/images/rajasthan/jalmahal4.jpeg', thumb: '../../assets/images/rajasthan/jalmahal4.jpeg' }),
   //    new ImageItem({ src: '../../assets/images/rajasthan/pushkar1.jpeg', thumb: '../../assets/images/rajasthan/pushkar1.jpeg' }),

   //    new ImageItem({ src: '../../assets/images/rajasthan/udaypur1.jpeg', thumb: '../../assets/images/rajasthan/udaypur1.jpeg' }),
   //    new ImageItem({ src: '../../assets/images/rajasthan/udaypur3.jpeg', thumb: '../../assets/images/rajasthan/udaypur3.jpeg' }),

   //    new ImageItem({ src: '../../assets/images/rajasthan/rantham1.jpeg', thumb: '../../assets/images/rajasthan/rantham1.jpeg' }),
   //    new ImageItem({ src: '../../assets/images/rajasthan/rantham2.jpeg', thumb: '../../assets/images/rajasthan/rantham2.jpeg' }),
   //    new ImageItem({ src: '../../assets/images/rajasthan/rantham3.jpeg', thumb: '../../assets/images/rajasthan/rantham3.jpeg' }),
   //    new ImageItem({ src: '../../assets/images/rajasthan/rantham7.jpeg', thumb: '../../assets/images/rajasthan/rantham7.jpeg' }),
   //    // ... more items
   //  ];

    this.rjdata.push(
      { 
        state : 'Rajasthan',
        locationName: "HawaMahal" ,
        locationDescription : "The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers."+
        "The structure was built in 1799 by the Maharaja Sawai Pratap Singh, grandson of Maharaja Sawai Jai Singh, the founder of the city of Jhunjhunu in the state of Rajasthan.He was so inspired by the unique structure of Khetri Mahal that he built this grand and historical palace.",
         childImage: [
          {  
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/hawamahal.jpeg",
              
          },
          {           
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/hawamahal2.jpeg",            
          },
          {            
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/hawamahal3.jpeg",         
          } ,
          { 
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/hawamahal4.jpeg",           
          },
          {             
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/hawamahal5.jpeg",            
          }           
         ]  
      },
      { 
        state : 'Rajasthan',
        locationName: "JalMahal" ,
        locationDescription : "The Jal Mahal Palace is an architectural showcase of the Rajput style of architecture (common in Rajasthan) on a grand scale. The building has a picturesque view of Man Sagar Lake, but owing to its seclusion from land is equally the focus of a viewpoint from the Man Sagar Dam on the eastern side of the lake in front of the backdrop of the surrounding Nahargarh (tiger-abode) hills. The palace, built with local sandstone, is a three-storied building, with the third floor only existing on the eastern side of the palace. The eastern side is not visible from the road side public promenade, which is the Western side of the palace. The additional lower levels of the eastern side remain underwater when the lake is full. The Jal Mahal has a terrace floor with a garden, and the garden has four Tibaris facing north, south, east and west. The Tibaris are designed in the Bengal roof style architecture while the four octagonal Chhatri on the roof mark the corners of the monument. The palace had suffered subsidence in the past and also partial seepage (plaster work and wall damage equivalent to rising damp) because of water logging, which have been repaired under a restoration project of the Government of Rajasthan.",
        category :"",
        locationLat:"", 
        locationLong: "", 
        imgDesc: "",
         childImage: [
          {  
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/jalmahal2.jpeg",
              
          },
          {            
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/jalmahal3.jpeg",         
          } ,
          { 
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/jalmahal4.jpeg",           
          },
          {             
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/jalmahal5.jpeg",            
          }           
         ]  
      } ,
      { 
        state : 'Rajasthan',
        locationName: "Pushkar" ,
        locationDescription : "The Jal Mahal Palace is an architectural showcase of the Rajput style of architecture (common in Rajasthan) on a grand scale. The building has a picturesque view of Man Sagar Lake, but owing to its seclusion from land is equally the focus of a viewpoint from the Man Sagar Dam on the eastern side of the lake in front of the backdrop of the surrounding Nahargarh (tiger-abode) hills. The palace, built with local sandstone, is a three-storied building, with the third floor only existing on the eastern side of the palace. The eastern side is not visible from the road side public promenade, which is the Western side of the palace. The additional lower levels of the eastern side remain underwater when the lake is full. The Jal Mahal has a terrace floor with a garden, and the garden has four Tibaris facing north, south, east and west. The Tibaris are designed in the Bengal roof style architecture while the four octagonal Chhatri on the roof mark the corners of the monument. The palace had suffered subsidence in the past and also partial seepage (plaster work and wall damage equivalent to rising damp) because of water logging, which have been repaired under a restoration project of the Government of Rajasthan.",
        category :"",
        locationLat:"", 
        locationLong: "", 
        imgDesc: "",
         childImage: [
          {  
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/pushkar1.jpeg",
              
          },
          {           
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/pushkar2.jpeg",            
          },
          {            
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/pushkar3.jpeg",         
          }                  
         ]  
      },
      
      { 
        state : 'Rajasthan',
        locationName: "Udaipur" ,
        locationDescription : " Udaipur is a city in the north-western Indian state of Rajasthan, about 415 km (258 mi) south of the state capital Jaipur.[3][4] It serves as the administrative headquarters of Udaipur district. It is the historic capital of the kingdom of Mewar in the former Rajputana Agency. It was founded in 1559 by Udai Singh II of the Sisodia clan of Rajputs,[5] when he shifted his capital from the city of Chittorgarh to Udaipur after Chittorgarh was besieged by Akbar. It remained as the capital city till 1818 when it became a British princely state,[5] and thereafter the Mewar province became a part of Rajasthan when India gained independence in 1947.[6] It is also known as the City of Lakes, as it is surrounded by five major artificial lakes",
        category :"",
        locationLat:"", 
        locationLong: "", 
        imgDesc: "",
         childImage: [
          {  
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/udaypur1.jpeg",
              
          },
          {           
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/udaypur2.jpeg",            
          },
          {            
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/udaypur3.jpeg",         
          } ,
          {           
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/udaypur4.jpeg",            
          },
          {            
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/udaypur5.jpeg",         
          }                  
         ]  
      }    ,
      
      { 
        state : 'Rajasthan',
        locationName: "Ranthambore National Park" ,
        locationDescription : "Ranthambore National Park covers a total area of 392 km2 (151 sq mi), including buffer zone.[2] It harbours dry deciduous forests and open grassy meadow. The core area is about 275 km2 (106 sq mi). Ranthambore Tiger Reserve spreads over an area of 1,334 km2 (515 sq mi) at an elevation range of about 215–505 m (705–1,657 ft). Ranthambore Fort was built in the 10th century by Chauhan rulers at 210 m (700 ft) above the surrounding plain. Inside the fort are three red stone temples devoted to Ganesh, Shiva and Ramlalaji. There is a Digamber Jain temple of Sumatinatha and Sambhavanatha. The temples were constructed in the 12th and 13th centuries. Padam Talao is the largest of the many lakes in the park. A red sandstone Jogi Mahal is at the edge of the lake.",
        category :"",
        locationLat:"", 
        locationLong: "", 
        imgDesc: "",
         childImage: [
          {  
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/rantham1.jpeg",
              
          },
          {           
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/rantham2.jpeg",            
          },
          {            
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/rantham3.jpeg",         
          } ,
          {           
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/rantham4.jpeg",            
          },
          {            
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/rantham5.jpeg",         
          },
          {           
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/rantham6.jpeg",            
          },
          {            
             imgDesc: "", 
             imgSrc: "../../assets/images/rajasthan/rantham7.jpeg",         
          }                      
         ]  
      }                      
    )
    
  }
  constructor() { 
  
 }
  next() {
    this.slickModal.slickNext();
  }
  prev() {
    this.slickModal.slickPrev();
  }

}
