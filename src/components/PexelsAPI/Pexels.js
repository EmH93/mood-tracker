import React, {useState, useEffect} from 'react';
import { createClient } from 'pexels';
import ImageCard from '../ImageCard/ImageCard';
import ImageRow from '../ImageRow/ImageRow';


const client = createClient('6qLANONW99ftTOugLLcsYBhJ7RTNLxm7eJfGSRuK9Q5cdJUoezl2DBSC');
const imageType = ["calm", "peaceful", "nature", "relaxing", "sunset", "flowers", "waterfall", "inspiring", "sunshine", "happy"];


function Pexels (){
   
    let [photoUrl1, setPhotoUrl1] = useState("https://images.pexels.com/photos/1126379/pexels-photo-1126379.jpeg")
    let [photoUrl2, setPhotoUrl2] = useState("https://images.pexels.com/photos/54539/pexels-photo-54539.jpeg") 
    let [photoUrl3, setPhotoUrl3] = useState("https://images.pexels.com/photos/12009316/pexels-photo-12009316.jpeg")

    useEffect(() => {
      
    setInterval(() => {

    let query = imageType[Math.floor(Math.random()*imageType.length)];
   
    client.photos.search({ query, per_page: 80})
    .then((response) => {
        let images = response.photos; 
        setPhotoUrl1(images[Math.floor(Math.random()*images.length)].src.portrait)
    })
    .catch(err => console.error(err))

    query = imageType[Math.floor(Math.random()*imageType.length)];
    client.photos.search({ query, per_page: 80 })
    .then((response) => {
        let images = response.photos; 
        setPhotoUrl2(images[Math.floor(Math.random()*images.length)].src.portrait)
    })
    .catch(err => console.error(err))

    query = imageType[Math.floor(Math.random()*imageType.length)];
    client.photos.search({ query, per_page: 80 })
    .then((response) => {
        let images = response.photos; 
        setPhotoUrl3(images[Math.floor(Math.random()*images.length)].src.portrait)
    })
    .catch(err => console.error(err))

}, 12000);
    },[])

    return (
            <ImageRow >
                <ImageCard url={photoUrl1} />
                <ImageCard url={photoUrl2} />
                <ImageCard url={photoUrl3} /> 
            </ImageRow>
          );
      
}

export default Pexels;