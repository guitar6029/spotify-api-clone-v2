export const initialState = {
  user: null,
  token: null,
  playlists: [],
  favoriteArtists: [],
  playing: false,
  trackItem: null,
  searchInput: null,
  artistID: null,
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
   
    case "SET_RANDOM_ARTIST_FOR_SIMILAR_RECOMMENDATION":
      return {
        ...state,
        randomArtist: action.randomArtist,
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
    default:
      return state;
  }
};

export default reducer;
