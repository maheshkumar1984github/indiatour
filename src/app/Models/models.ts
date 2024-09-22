export interface CommonData{
state?: string;
locationName?: string;
locationDescription?: string;
locationLat?: string;
locationLong?: string;
category?: string;
imgId?: string;
imgSrc?:string;
imgwidth?: string;
imgheight?: string;
imgDesc?: string;
childImage?: CommonData [];
}

export interface commonHome{
    title?: string;
    subtitle?: string;
    imgUrl?: string; 
    description?: string;
    link?: string;  
    }

export interface Ipackage{
    title?:string;
    iconsname?:Iicons [];
    days?: string;
    citys?:IdestinationLink [];
    packageType?:string;
    imgurl?:string;
    routDetails?:string [];
    state?:string;
    specialtourtype?:string;
    filterCityName? :string [];
   

}

export interface IdestinationLink{
    Name?: string;
    detaillink?:string;
}

export interface stopingpoints{
    Name?: string;
    desc?:string;
}

export interface Iicons{
    Name?: string;
    desc?:string;
}
