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
         locationName: "Ranthambore National Park" ,
         locationDescription : "Nestled in the heart of Rajasthan, Ranthambore National Park is a paradise for nature lovers and wildlife enthusiasts. Spread over 1,334 square kilometers, this vast expanse of wilderness is one of India’s premier tiger reserves, offering a unique blend of history and biodiversity. The park, once a royal hunting ground, was declared a wildlife sanctuary in 1955 and later became a Project Tiger reserve in 1973."
          +"The highlight of any Ranthambore safari is the chance to spot the majestic Bengal tiger in its natural habitat. With a little luck and patience, visitors can witness these magnificent creatures prowling through the dense forests or lounging near water bodies. Apart from tigers, the park is home to a rich variety of wildlife, including leopards, sloth bears, sambar deer, nilgai, and over 270 species of birds.One of the park’s unique features is the presence of the ancient Ranthambore Fort, a UNESCO World Heritage Site, which adds a historical charm to the landscape. The fort, perched atop a hill, offers breathtaking views of the surrounding jungle and is a reminder of Rajasthan’s glorious past."
          +"The best time to visit Ranthambore is from October to June, with peak sightings during the dry summer months of April and May when animals gather around water sources. Safari tours in open jeeps or canters provide an exhilarating experience, making every moment an adventure."
          +"Ranthambore’s rugged terrain, picturesque lakes, and dense forests create an unforgettable wildlife experience. Whether you are a nature enthusiast, a wildlife photographer, or an adventurer seeking the thrill of the wild, Ranthambore National Park promises an extraordinary journey into the heart of nature.",
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
       } ,
      { 
        state : 'Rajasthan',
        locationName: "HawaMahal" ,
        locationDescription : "Located in the heart of Jaipur, Rajasthan, Hawa Mahal is an architectural marvel that captivates visitors with its intricate beauty. Built in 1799 by Maharaja Sawai Pratap Singh, this five-story palace is made of stunning red and pink sandstone, reflecting the grandeur of Rajput architecture. Its unique honeycomb-like façade, featuring 953 small windows or 'jharokhas,' was designed to allow royal women to observe city life while maintaining their privacy."

      +"As I stood before this magnificent structure, the delicate latticework and the play of light and shadow left me mesmerized. Inside, the palace offers a network of narrow corridors and winding staircases, leading to stunning views of Jaipur’s bustling streets. The breeze flowing through the windows gives the palace its name, Hawa Mahal or 'Palace of Winds'."

  +"The nearby City Palace and Jantar Mantar add to the historic charm of this location. Exploring Hawa Mahal at sunrise or sunset enhances its beauty, as the warm hues of the sun complement its pink sandstone walls. A visit to this iconic landmark is a journey into Rajasthan’s rich heritage, making it an unforgettable experience for history and architecture enthusiasts alike.",
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
        locationDescription : "Nestled in the heart of Rajasthan, Pushkar is a charming town known for its rich cultural heritage, vibrant markets, and spiritual aura. Home to the sacred Pushkar Lake and the rare Brahma Temple, this town is a major pilgrimage site for Hindus. The ghats surrounding the lake are bustling with devotees performing rituals, creating an atmosphere of serenity and devotion."
         +"Pushkar is also famous for its annual Pushkar Camel Fair, one of the world’s largest livestock fairs. Held in November, this vibrant event attracts travelers from around the globe, offering a spectacle of camel races, folk performances, and colorful bazaars. The town’s bustling streets are lined with handicraft shops, cafes, and rooftop restaurants, providing a perfect blend of tradition and modernity."
         +"A visit to Savitri Temple, perched on a hilltop, rewards visitors with breathtaking views of the town and the desert landscape. Adventure enthusiasts can also enjoy camel safaris through the golden sand dunes. Whether you seek spirituality, culture, or adventure, Pushkar has something to offer. Its peaceful vibe, warm hospitality, and mystical charm make it a must-visit destination in Rajasthan.",
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
