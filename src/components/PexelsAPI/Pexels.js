import React, {useState, useEffect} from 'react';
import { createClient } from 'pexels';


const client = createClient('6qLANONW99ftTOugLLcsYBhJ7RTNLxm7eJfGSRuK9Q5cdJUoezl2DBSC');
const imageType = ["calm", "peaceful", "cheery", "nature", "relaxing"];


function Pexels (){
   
    let [photoUrl, setPhotoUrl] = useState("https://images.pexels.com/photos/1126379/pexels-photo-1126379.jpeg")

    useEffect(() => {
      let searchTerm = Math.floor(Math.random()*5);
      const query = imageType[searchTerm];
    
    setInterval(() => {
    client.photos.search({ query, per_page: 80 })
    .then((response) => {

        let images = response.photos; 
        let randomPic = Math.floor(Math.random()*images.length);
        let newImage = images[randomPic].src.original;
    
        setPhotoUrl(newImage)})
        .catch(err => console.error(err));
    }, 12000);
}, [photoUrl])

    return (
        <div> 
            <img src={photoUrl} alt="calm"></img>   
        </div>
          );
      
    }

export default Pexels;