import { combineReducers } from "redux";


const songReducers = () =>{
    return [
      {
        title:'tesumole',
        artist: 'Naira maley',
        Duration: '4:05'
      } ,{
          title:'$1 million',
          artist: 'Davido',
          Duration:'5:09'
      },{
          title: 'Eko',
          artist: 'Kiss Daniel',
          Duration:'3:49'
      },{
          title:'Pawon',
          artist: 'Olamide',
          Duration:'4:15'
      },{
          title:'Soapy',
          artist:'Naira Maley',
          Duration:'5:12',

      }

    ]

};

const selectedSongsReducer = (selectedSong = null, action) =>{
if (action.type === 'SELECT_SONG'){
    return action.payload
};
return{
    selectedSong
}
};



export default combineReducers({
    songs: songReducers,
    selectedSong: selectedSongsReducer
});