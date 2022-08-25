import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {User} from '../../../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import './TopMenu.css';

function TopMenu({ spotify}) {

    const [{user}, dispatch] = User();
    const navigate = useNavigate();

    //returns search query from the user's input
    const handleSearch = () => {
        //spotify.searchTracks(`${inputSearchValue}`).then(data => {console.log(data)}, (err) => console.log(err));
        navigate('/search');
    }

    // takes user's input and the input value is used for the search query
    const handleInput = (e) => {
        //setInputSearchValue(e.target.value);
        const userInput = e.target.value;
        dispatch({
            type: 'SET_SEARCH_INPUT',
            savedInput : userInput
        })
    }

    return (
        <div className='topMenu'>
            <form className='search' onSubmit={handleSearch}>
                <SearchIcon onClick={handleSearch} />
                <input type='text' placeholder='Search for artists, songs, or podcasts...' onChange={handleInput} required />
            </form>

            <div className='avatar'>
                <AccountCircleIcon />
                <h5>{user?.display_name }</h5>
            </div>
        </div>
    )
}

export default TopMenu