import { useState, useEffect } from 'react';
import './TopMenu.css';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function TopMenu({ spotify }) {

    const [user, displayUsername] = useState(null);

    //get username
    useEffect(() => {
        const getDisplayName = () => {
            spotify.getMe().then(data => { displayUsername(data.display_name) }, (err) => { console.log(err) });
        }

        getDisplayName();
    }, []);


    const [inputSearchValue, setInputSearchValue] = useState(null);

    //returns search query from the user's input
    const handleSearch = () => {
        spotify.getArtist('2hazSY4Ef3aB9ATXW7F5w3').then((data) => {
            console.log(data);
        }, (err) => {
            console.log(err);
        })
    }

    // takes user's input and the input value is used for the search query
    const handleInput = (e) => {
        setInputSearchValue(e.target.value);
    }

    return (
        <div className='topMenu'>
            <div className='search'>
                <SearchIcon onClick={handleSearch} />
                <input type='text' placeholder='Search for artists, songs, or podcasts...' onChange={handleInput} />
            </div>

            <div className='avatar'>
                <AccountCircleIcon />
                <h5>{user}</h5>
            </div>
        </div>
    )
}

export default TopMenu