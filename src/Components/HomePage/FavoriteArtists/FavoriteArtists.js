import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import './FavoriteArtists.css';

function FavoriteArtists({ spotify }) {

    const [favoriteArtists, setFavoriteArtists] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {

        const getFavoriteArtists = () => {

            spotify.getMyTopArtists().then(data => {
                let _favoriteArtists = data.items.map(item => {
                    return {
                        artist: item.name,
                        image: item.images[1].url
                    }
                });
                //console.log(_favoriteArtists);
                setFavoriteArtists(_favoriteArtists);
            }, (err) => {
                console.log(err.message);
                setErrorMessage(err);
            });


        }

        getFavoriteArtists();

    }, [])

    return (
        <div className='favoriteArtists__container'>
            <h4>FavoriteArtists</h4>
            {favoriteArtists.map( (artist) => {
                return (
                    <div key={uuid()} className="favoriteArtist__container">
                            <img src={artist.image}  alt={artist.name}/>
                            <h5>{artist.name}</h5>
                    </div>
                )
            }  )}
        </div>
    )
}

export default FavoriteArtists