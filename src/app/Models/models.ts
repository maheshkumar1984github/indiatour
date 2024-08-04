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

