export const initialState = {
    user: null,
    token: null,
    playlists: [],
    favoriteArtists: [],
    playing: false,
    item: null,
    searchInput : null
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_FAVORITE_ARTISTS':
            return {
                ...state,
                favoriteArtists : action.favoriteArtists
            }
        case 'SET_RANDOM_ARTIST_FOR_SIMILAR_RECOMMENDATION':
            return {
                ...state,
                randomArtist : action.randomArtist
            }
        case 'SET_SEARCH_INPUT':
            return {
                ...state,
                searchInput : action.searchInput
            }            
        default:
            return state;
    }


}

export default reducer;