import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const {editSong, hideEditSongModalCallback} = this.props;
        if (editSong){
            console.log("yes" + editSong.title);
        }
        else {
            console.log("no");
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
                                value= {editSong.title} /> 
                            Artist:
                            <input type="text"
                                id="artist-textfield"
                                class="modal-textfield"
                                value={editSong.artist} />
                            Year:
                            <input type="text"
                                id="year-textfield"
                                class="modal-textfield"
                                value={editSong.year} />
                            Youtube Id:
                            <input type="text"
                                id="youtubeId-textfield"
                                class="modal-textfield"
                                value={editSong.youTubeId} />
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