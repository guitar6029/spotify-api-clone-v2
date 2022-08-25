//useful spotify dev documents :
//https://developer.spotify.com/documentation/web-api/

/****
 * 
 * login button , when the user clicks
 * the button, the link takes it to the
 * spotify login page, the spotify api
 *  does the authentication 
 * if the user input is valid, then the 
 * api redirects the user back to my app
 * which is the localhost for now

***/

//spotify login link
//const spotifyAuthEndPoint = "https://accounts.spotify.com/en/login";
const spotifyAuthEndPoint = "https://accounts.spotify.com/authorize";

//redirects back to our home page
const redirectUri = "http://localhost:3000/callback";

//for api id and token
const client_id = "5c336d5ba3d0480b849dd26ea9b2aba9";

//spotify's CRUD api
const spotifyScopes = [

    "user-top-read",
    "user-library-modify",
    "user-read-private",
    "user-follow-read",
    "user-library-read",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-modify-playback-state",
    
];

export const tokenResponseUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        //#accessToken=........=
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginUrl = `${spotifyAuthEndPoint}?client_id=${client_id}&redirect_uri=${redirectUri}&scope=${spotifyScopes.join("%20")}&response_type=token&show_dialog=true`;