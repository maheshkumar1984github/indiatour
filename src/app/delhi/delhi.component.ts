import { Component, ViewChild } from '@angular/core';
import { CommonData } from '../Models/models';

@Component({
  selector: 'app-delhi',
  templateUrl: './delhi.component.html',
  styleUrl: './delhi.component.scss'
})
export class DelhiComponent {
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
      state: "Delhi",
      locationName: "Lotus Temple",
      locationDescription: "It belongs to the Bahai religion, which aims at the unity of all the races and people in a universal cause and a common faith. People from all religions and faith can enter this temple, regardless of their gender, and can chant their respective religious mantras.      Designed by Iranian-Canadian architect, Fariburz Sahba in 1986, the temple is shaped like a lotus flower with 27 white marble petals. There are nine doors that open into a central hall that is approximately 40 m high and has a capacity to host 2,500 people. There are nine pools of water that look breathtaking at dusk. The temple is famous all over the world for its architectural design.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/delhi/delhi-lotas.jpg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/delhi/lotus1.jpg",
         
     },
     {  
      imgDesc: "", 
      imgSrc: "../../assets/images/delhi/lotus2.jpg",
       
     },
      {  
        imgDesc: "", 
        imgSrc: "../../assets/images/delhi/lotus3.jpg",
        
    },

      ]
    },
    {
      state: "Delhi",
      locationName: "Swaminarayan Akshardham",
      locationDescription: "Akshardham Temple is a spiritual complex nestled in New Delhi and is a popular Hindu temple of Delhi. This marvelous temple was constructed in the year 2005 at Noida Mor region of New Delhi and is referred as Akshardham Temple of Swaminarayam Akshardham. The term Akshardham is the combination of two words ‘Akshar’ means ‘eternal’ and ‘Dham’ means ‘abode’.  On a whole it actually means the abode of eternal values, virtues and principles which are mentioned in Vedas and Puranas of Hindu mythology.   Apart from all this, the complex of Akshardham Temple in Delhi displays numerous traditional aspects, beautiful architecture, Indian culture and spirituality. In the centre the main complex is built on the principles of Vastu Shastra and Pancharatra Shashtra which is called as Akshardham Mandir. Akshardham Temple of Delhi is one of the prime attractions in Delhi where one can witness exclusive architectural charm with more than 234 beautifully carved pillars, 9 elaborate domes, 20 quadrangle spires and 20000 sculptures of spiritual personalities from India. It is one of the major attractions for history buffs and art lovers as one can here easily enjoy intricate art and flawless craftsmanship. Moreover, the whole temple is build using Italian Carrara marble and pink sandstone.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/delhi/akshardham1.jpg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/delhi/akshardham2.jpg",
         
     },
     {  
      imgDesc: "", 
      imgSrc: "../../assets/images/delhi/akshardham3.jpg",
       
     },
      {  
        imgDesc: "", 
        imgSrc: "../../assets/images/delhi/akshardham4.jpg",
        
    },
      {  
        imgDesc: "", 
        imgSrc: "../../assets/images/delhi/akshardham7.jpg",
        
    },  
      {  
        imgDesc: "", 
        imgSrc: "../../assets/images/delhi/akshardham5.jpg",
        
    },    
      {  
        imgDesc: "", 
        imgSrc: "../../assets/images/delhi/akshardham6.jpg",
        
    },

      ]
    },
    {
      state: "Delhi",
      locationName: "Red Fort",
      locationDescription: "The Red Fort is one of the most significant monuments in the country. India's Prime Minister hoists the National Flag from the ramparts of the Red Fort each year on Independence Day. Believed to be a resort for royal women, the Rang Mahal at the Red Fort was a part of the women's quarters or the zenana.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/delhi/redfort1.jpg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/delhi/redfort2.jpg",
         
     },
     {  
      imgDesc: "", 
      imgSrc: "../../assets/images/delhi/redfort3.jpg",
       
     },
      {  
        imgDesc: "", 
        imgSrc: "../../assets/images/delhi/redfort4.jpg",
        
    },
      {  
        imgDesc: "", 
        imgSrc: "../../assets/images/delhi/redfort5.jpg",
        
    }

      ]
    },
    {
      state: "Delhi",
      locationName: "India Gate",
      locationDescription: "India Gate, monumental sandstone arch in New Delhi, dedicated to the troops of British India who died in wars fought between 1914 and 1919. India Gate, which is located at the eastern end of the Rajpath (formerly called the Kingsway), is about 138 feet (42 metres) in height.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/delhi/indiagate3.jpg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/delhi/indiagate2.jpg",
         
     },
     {  
      imgDesc: "", 
      imgSrc: "../../assets/images/delhi/indiagate1.jpg",
       
     }

      ]
    },
    {
      state: "Delhi",
      locationName: "Qutub Minar",
      locationDescription: "Qutb-Minar in red and buff standstone is the highest tower in India. It has a diameter of 14.32 m at the base and about 2.75 m on the top with a height of 72.5 m. Qutbu'd-Din Aibak laid the foundation of Minar in AD 1199 for the use of the mu'azzin (crier) to give calls for prayer and raised the first storey, to which were added three more storeys by his successor and son-in-law, Shamsu'd-Din Iltutmish (AD 1211-36). All the storeys are surrounded by a projected balcony encircling the minar and supported by stone brackets, which are decorated with honey-comb design, more conspicuously in the first storey..",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/delhi/Qutub_Minar.jpg",
           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/delhi/QutubMinar1.jpg",
         
     },
     {  
      imgDesc: "", 
      imgSrc: "../../assets/images/delhi/QutubMinar2.jpg",
       
     }

      ]
    },
    {
      state: "Delhi",
      locationName: "Jantar-Mantar",
      locationDescription: "Jantar Mantar (Yantra - instruments, mantra - formulae) was constructed in 1724. Maharaja Jai Singh of Jaipur who built this observatory went on to build other observatories in Ujjain , Varanasi and Mathura. Jai Singh had found the existing astronomical instruments too small to take correct measurements and so he built these larger and more accurate instruments.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/delhi/Jantar-Mantar.jpeg",
           
       }

      ]
    },
    {
      state: "Delhi",
      locationName: "Rashtrapati Bhavan",
      locationDescription: "Rashtrapati Bhavan, home to the President of the world’s largest democracy, is emblematic of Indian democracy and its secular, plural and inclusive traditions. It was designed by Sir Edwin Lutyens and Herbert Baker and stands on a 330 acre estate. It took seventeen years to build this presidential palace which was completed in the year 1929. Almost seven hundred million bricks and three million cubic feet of stone were used in building this architectural marvel that has 2.5 kilometers of corridors and 190 acres of garden area. The main building covers an area of 5 acres and has 340 rooms spread over four floors. The famous Mughal Gardens of the Rashtrapati Bhavan cover an area of 15 acres and have 159 celebrated varieties of roses, 60 varieties of bougainvillea and many other verities of flowers. The Estate also has a state-of-the-art Rashtrapati Bhavan Museum Complex (RBMC) comprising the Clock Tower, the Stables and the Garages showcasing past as well as current presidencies, the regal ceremonies, and the rich flora and fauna of Rashtrapati Bhavan, amongst other things. The RBMC was inaugurated by President Pranab Mukherjee on 25th July, 2016.",
      childImage: [
        {  
          imgDesc: "", 
          imgSrc: "../../assets/images/delhi/RashtrapatiBhavan1.jpg",           
       },
       {  
        imgDesc: "", 
        imgSrc: "../../assets/images/delhi/RashtrapatiBhavan2.jpg",           
     },{  
      imgDesc: "", 
      imgSrc: "../../assets/images/delhi/RashtrapatiBhavan3.jpg",           
   }

      ]
    }
    
  )
}

}
