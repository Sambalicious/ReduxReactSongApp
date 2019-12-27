import React from 'react'
import {connect} from 'react-redux';


const SongDetail = ({selectedSong}) => {
    if(!selectedSong){
        return <div> Select a Song</div>
    }
    
    return (
        <div>
            <h4>Details For the Selected Song: </h4>
            <p>Song Title: {selectedSong.title} </p>
            <p>Artist: {selectedSong.artist} </p>
            <p>Duration: {selectedSong.Duration} </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);