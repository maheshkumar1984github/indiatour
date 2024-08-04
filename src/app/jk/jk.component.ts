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
  "slidesToShow": 2, 
  "slidesToScroll":2,
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
      state: "Jammu & Kashmir",
      locationName: "Dal Lake",
      locationDescription: "Dal is a lake in Srinagar (Dal Lake is a misnomer as Dal in Kashmiri means lake), the summer capital of Jammu and Kashmir. The urban lake, is integral to tourism and recreation in Kashmir and is named the “Jewel in the crown of Kashmir” or “Srinagar’s Jewel”.The lake is also an important source for commercial operations in fishing and water plant harvesting.The shore line of the lake, is about 15.5 kilometres (9.6 mi), is encompassed by a boulevard lined with Mughal era gardens, parks, houseboats and hotels. Scenic views of the lake can be witnessed from the shore line Mughal gardens, such as Shalimar Bagh and Nishat Bagh built during the reign of Mughal Emperor Jahangir and from houseboats cruising along the lake in the colourful shikaras. During the winter season, the temperature sometimes reaches −11 °C (12 °F), freezing the lake.The lake covers an area of 18 square kilometres (6.9 sq mi) and is part of a natural wetland which covers 21.1 square kilometres (8.1 sq mi), including its floating gardens. The floating gardens, known as “Raad” in Kashmiri, blossom with lotus flowers during July and August. The wetland is divided by causeways into four basins; Gagribal, Lokut Dal, Bod Dal and Nagin (although Nagin is also considered as an independent lake). Lokut-dal and Bod-dal each have an island in the centre, known as Rup Lank (or Char Chinari) and Sona Lank respectively.The houseboats are closely associated with Dal Lake which provide accommodation to tourists in Srinagar.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/jk/dallake1.jpeg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/dallake2.jpeg",         
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/dallake3.jpg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/dallake4.jpg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/dallake5.jpg",         
       }
      ]
    },
    {
      state: "Jammu & Kashmir",
      locationName: "Gulmarg",
      locationDescription: "Gulmarg literally means “Meadow of flowers”. Gulmarg is located 60 KMs away from Srinagar which is an hour and half journey by car. Gulmarg has attracted millions of tourists throughout its existence with the scenic beauty of the Himalayan Mountains in the back drop. One of the main attractions in Gulmarg is the Gulmarg Gondola, the Highest Cable Car in the world. The 1st phase of the Gondola takes tourists to the height of 8530 ft to Kongdori Station and the second stage of the Gondola goes up to the height of 12293 ft. Tourists can enjoy horse Riding and can go riding to the magnificent “Strawberry Valley” , Leopards Valley and ride up to “Kongdori” to see the frozen lake of “Al- Pathar”. Gulmarg in winter is a magnificent experience, fully covered in a white blanket of Snow which turns it into a skiers paradise. The natural slopes here are untouched and prove to be a challenge to ace skiers! Besides the scenic side to Gulmarg, winter time in Gulmarg is a season of festivities with celebrations of “White Christmas” and New Year parties. Gulmarg has been a resort for the kings like Yousuf Shah Chak and Jahangir who used to visit frequently. The old name of Gulmarg was “Gaurimarg”, the name of Lord Shiva’s wife. Yousuf Shah Chak changed its name to Gulmarg, meaning the place of roses. During the early part of the 20th century the famous Central Asian explorer Sir Marc Aurel Stein (1862–1943), made his home here in a tent between his expeditions. It was a favourite summer holiday destination for the British stationed in India.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/jk/gulmarg1.jpeg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/gulmarg2.jpg",         
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/gulmarg3.jpg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/gulmarg4.webp",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/gulmarg5.jpg",         
       }
      ]
    },
    {
      state: "Jammu & Kashmir",
      locationName: "Pahalgam",
      locationDescription: "Pahalgam is one of the famous health resorts of Jammu and Kashmir State. It is situated in the north east of District Anantnag among lofty hills covered with evergreen forests. Its cool invigorating and pleasant climate, the melodious flow of Lidder Nallah attract tourists not only from within the country but also from abroad as well. It is also an important transit camp on the way to holy Amar Nath Ji Cave, which is 72 Kms away from the District Head-Quarter.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/jk/pahalgam1.jpg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/pahalgam2.jpg",         
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/pahalgam3.jpg",         
       }
       ,
      //  {  
      //   imgDesc: "", 
      //   imgSrc: "../../assets/images/jk/pahalgam4.webp",         
      //  }
      //  ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/pahalgam5.jpg",         
       }
      ]
    },
    {
      state: "Jammu & Kashmir",
      locationName: "Sonmarg",
      locationDescription: "Sonamarg, which means ‘meadow of gold’ has, as its backdrop, snowy mountains against a cerulean sky. The Sindh meanders along here and abounds with trout and mahseer, snow trout can be caught in the main river. In late April when Sonamarg is open for road transport, the visitors can have access to snow which is furnished all over like a white carpet. Private vehicles are not allowed. Visitors have to hire taxi. Ponies can be hired for the trip up to Thajiwas glacier a major attraction during the summer months.The climate of Sonamarg is very bracing; but the rainfall is frequent though not heavy, except for two or three days at a time in July and August with fine spell in between. From Sonamarg, trekking routes lead to the Himalayan lakes of Vishansar Lake, Krishansar Lake, Gangabal Lake and Gadsar Lake, stocked with Snowtrout and Brown trout and Satsar, glacier-fed and surrounded by banks of alpine flowers.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/jk/sonmarg1.jpg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/sonmarg2.jpeg",         
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/sonmarg3.jpeg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/sonmarg4.jpg",         
       }
       ,
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/jk/sonmarg5.jpg",         
       }
      ]
    }
  
  )
}
}
