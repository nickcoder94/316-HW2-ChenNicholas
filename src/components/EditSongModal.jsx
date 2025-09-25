import React, { Component } from 'react';

export default class EditSongModal extends Component {

    render() {
        const {editSong, hideEditSongModalCallback} = this.props;
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
                                value= "Title" /> 
                            Artist:
                            <input type="text"
                                id="artist-textfield"
                                class="modal-textfield"
                                value="artist" />
                            Year:
                            <input type="text"
                                id="year-textfield"
                                class="modal-textfield"
                                value="year" />
                            Youtube Id:
                            <input type="text"
                                id="youtubeId-textfield"
                                class="modal-textfield"
                                value="abcdefgh" />
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