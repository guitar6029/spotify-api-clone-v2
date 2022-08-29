import { useEffect, useState } from 'react';
import './RecommendedArtists.css';

function RecommendedArtists({title, spotify, artistID}) {

  let [recommendedArtists, setRecommendedArtists] = useState([]);

     useEffect(()=>{
      
       spotify.getArtistRelatedArtists({artistID}).then(data => {
       
        console.log('similar artists to : ' + {title})
        console.log(data);
       })  
     }, [])

     //setRecommendedArtists()
     //recommendedArtists = recommendedArtists.slice(0, 6);
     //console.log(recommendedArtists);

  return (
    <div>
       <h3>Similar To {title}</h3>
      </div>
  )
}

export default RecommendedArtists