import uuid from 'react-uuid';
import {User} from '../../../../Context/UserContext';
import './FavoriteArtists.css';

function FavoriteArtists() {

    const [{favoriteArtists}, dispatch] = User();
    console.log(favoriteArtists[3].images);
    return (

        <div className='section__flex__direction__column'>
            <div className='section__title'><h4>Favorite Artists</h4></div>
            <div className='section__flex__direction__row'>{favoriteArtists?.map((artist) => {
                return (
                    <div key={uuid()} className="section__card background__effect__on__hover section__card__height__sm flex__alignItems__center text__center">
                        <img className='margin__bottom' src={artist.image[2].url} alt={artist.artist} />
                        <h5 className='textOverflow'>{artist.artist}</h5>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default FavoriteArtists