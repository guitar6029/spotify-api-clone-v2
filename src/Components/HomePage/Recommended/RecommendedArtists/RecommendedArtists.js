import { useEffect, useState } from 'react';
import './RecommendedArtists.css';

function RecommendedArtists({title, spotify, artistID}) {


  const [errMessage, setErrMessage] = useState(null);
  let [recommendedArtists, setRecommendedArtists] = useState([]);

     useEffect(()=>{
      console.log('artistID');
      console.log(artistID);
       spotify.getArtistRelatedArtists({artistID}).then(data => {
        //name , id, images
        console.log('data');
        console.log(data);
      //    let _recommendedArtists =  data.artists.map(item => {
      //     return {
      //       artistID : item.id,
      //       name : item.name,
      //       images : item.images
      //     }
      //    });
      //    setRecommendedArtists(_recommendedArtists);
      //     console.log(_recommendedArtists);
      // }
      //   , (err)=>{
      //   console.log(err);
      //  })
       })  
     }, [])

     recommendedArtists = recommendedArtists.slice(0, 6);
     console.log(recommendedArtists);

  return (
    <div>
       <h3>Similar To {title} , {artistID}</h3>
      </div>
  )
}

export default RecommendedArtists