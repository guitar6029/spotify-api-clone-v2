import { useEffect, useState } from 'react';
import './RecommendedArtists.css';

function RecommendedArtists({title, spotify, similarTo}) {


  const [errMessage, setErrMessage] = useState(null);
  let [recommendedArtists, setRecommendedArtists] = useState([]);


  // beach fossils id : 1bwUhKRmEkOZ1wuTnV9XjC
  //.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', { limit: 10, offset: 20 })
  // search artists which contains the word love
  //searchArtists('Love')
     useEffect(()=>{
       spotify.getArtistRelatedArtists('3Sz7ZnJQBIHsXLUSo0OQtM').then(data => {
        //name , id, images
         let _recommendedArtists =  data.artists.map(item => {
          return {
            artistID : item.id,
            name : item.name,
            images : item.images
          }
         });
         setRecommendedArtists(_recommendedArtists);
          //console.log(_recommendedAlbums);
      }
        , (err)=>{
        console.log(err);
       })
        
     }, [])

     recommendedArtists = recommendedArtists.slice(0, 6);
     //console.log(recommendedAlbums);

  return (
    <div>
      
      </div>
  )
}

export default RecommendedArtists