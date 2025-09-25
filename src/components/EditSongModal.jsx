import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {

        let title, artist, year, youTubeId;
        const {editSong, hideEditSongModalCallback} = this.props;
        if (editSong){
            console.log("yes" + editSong.title);
            title = editSong.title;
            artist = editSong.artist;
            year = editSong.year;
            youTubeId = editSong.youTubeId;
        }
        else {
            title = "Untitled";
            artist = "???";
            year = 2000;
            youTubeId = "dQw4w9WgXcQ";
        }
        return (
            <div
                class="modal"
                id="edit-song-modal"
                data-animation="slideInOutLeft">
                    <div class="modal-root" id="song-edit-modal-root">
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div class="modal-center">
                            Title:
                            <input type="text"
                                id="title-textfield"
                                class="modal-textfield"
                                value= {title} /> 
                            Artist:
                            <input type="text"
                                id="artist-textfield"
                                class="modal-textfield"
                                value={artist} />
                            Year:
                            <input type="text"
                                id="year-textfield"
                                class="modal-textfield"
                                value={year} />
                            Youtube Id:
                            <input type="text"
                                id="youtubeId-textfield"
                                class="modal-textfield"
                                value={youTubeId} />
                        </div>
                        <div class="modal-south">
                            <input type="button"
                                id="edit-song-confirm-button"
                                class="modal-button" 
                                value="Confirm"/>
                            <input type="button"
                                id="edit-song-cancel-button"
                                class="modal-button"
                                onClick={hideEditSongModalCallback}
                                value="Cancel"/>
                        </div>
                    </div>
            </div>

        );

    }


}