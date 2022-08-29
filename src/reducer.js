export const initialState = {
  user: null,
  token: null,
  playlists: [],
  favoriteArtists: [],
  playing: false,
  trackItem: null,
  searchInput: null,
  artistID: null,
  offset : 20,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_FAVORITE_ARTISTS":
      return {
        ...state,
        favoriteArtists: action.favoriteArtists,
      };
   
    case "SET_SEARCH_INPUT":
      return {
        ...state,
        searchInput: action.searchInput,
      };
    case "SET_ARTIST_ID":
      return {
        ...state,
        artistID: action.artistID,
      };
    case "SET_IS_PLAYING":
      return {
        ...state,
        playing: action.is_playing,
      };
    case "SET_TRACK_ITEM":
      return {
        ...state,
        trackItem: action.item,
      };
    case 'SET_OFFSET':
      return{
        ...state,
        offset : action.offset,
      }  
    default:
      return state;
  }
};

export default reducer;
