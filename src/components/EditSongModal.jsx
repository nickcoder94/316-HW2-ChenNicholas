import React, { Component } from 'react';

export default class EditSongModal extends Component {

    render() {
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
                            BLAH BLAH BLAH BLAH BLAH
                        </div>
                        <div class="modal-south">
                            <input type="button"
                                id="edit-song-confirm-button"
                                class="modal-button" 
                                value="Confirm"/>
                            <input type="button"
                                id="edit-song-cancel-button"
                                class="modal-button"
                                value="Cancel"/>
                        </div>
                    </div>
            </div>

        );

    }


}