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
                _favoriteArtists = _favoriteArtists.slice(0, 6);
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

        <div className='section__flex__direction__column'>
            <div className='section__title'><h4>Favorite Artists</h4></div>
            <div className='section__flex__direction__row'>{favoriteArtists.map((artist) => {
                return (
                    <div key={uuid()} className="section__card background__effect__on__hover section__card__height__sm flex__alignItems__center text__center">
                        <img className='margin__bottom' src={artist.image} alt={artist.artist} />
                        <h5 className='textOverflow'>{artist.artist}</h5>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default FavoriteArtists