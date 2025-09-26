import React, { Component } from 'react';


export default class EditSongModal extends Component {
    constructor(props) {
        super(props);

        if (!props.editSong) {
            console.log("GUH?");
            this.state={
                titleText: "Untitled",
                artistText: "???",
                yearText: "2000",
                youTubeIdText: "dQw4w9WgXcQ"
            }
        }
        else {
            this.state= {
                titleText: this.props.editSong.title,
                artistText: this.props.editSong.artist,
                yearText: this.props.editSong.year,
                youTubeIdText: this.props.editSong.youTubeId
            }
        }
    }

    handleChange = (event) => {
        this.setState ({[event.target.name]: event.target.value});
    }

    handleConfirm = (editSong) => {
        this.changeSong(editSong,
            this.state.titleText,
            this.state.artistText,
            this.state.yearText,
            this.state.youTubeIdText
        );
    }

    render() {

        const {editSong,changeSong, hideEditSongModalCallback} = this.props;


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
                                value= {this.state.titleText} 
                                onChange={this.handleChange}/> 
                            Artist:
                            <input type="text"
                                id="artist-textfield"
                                class="modal-textfield"
                                value={this.state.artistText}
                                onChange={this.handleChange} />
                            Year:
                            <input type="text"
                                id="year-textfield"
                                class="modal-textfield"
                                value={this.state.yearText} 
                                onChange={this.handleChange}/>
                            Youtube Id:
                            <input type="text"
                                id="youtubeId-textfield"
                                class="modal-textfield"
                                value={this.state.youTubeIdText} 
                                onChange={this.handleChange}/>
                        </div>
                        <div class="modal-south">
                            <input type="button"
                                id="edit-song-confirm-button"
                                class="modal-button" 
                                value="Confirm"
                                onClick={this.handleConfirm}/>
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