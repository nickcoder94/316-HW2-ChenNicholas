import React from "react";

export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false,
            editActive: false
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.currentTarget;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        this.props.moveCallback(sourceId, targetId);
    }

    handleDeleteSong = (event) => {
        let songId = this.getItemNum() - 1;
        console.log("delete song id -> " + songId);
        const {song} = this.props;
        console.log(song);
        event.stopPropagation();
        this.props.deleteSongCallback(songId,song);
    }

    handleClick = (event) => {
        if (event.detail === 2){
            this.handleToggleEdit(event);
        }
    }

    handleToggleEdit = (event) => {
        event.stopPropagation();
        let songId = this.getItemNum() - 1;
        // this.setState({
        //     editActive: !this.state.editActive});
        const {song} = this.props;
        console.log(song);
        this.props.editSongCallback(song);
    }

    getItemNum = () => {
        return this.props.id.substring("song-card-".length);
    }

    render() {
        const { song } = this.props;
        let num = this.getItemNum();
        //console.log("num: " + num);
        let itemClass = "song-card";
        if (this.state.draggedTo) {
            itemClass = "song-card-dragged-to";
        }
        return (
            <div
                id={'song-' + num}
                className={itemClass + " unselected-song-card"}
                onClick={this.handleClick}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                draggable="true"
            >   
                <span>{num}.&nbsp; </span>
                <a href={`https://www.youtube.com/watch?v=${song.youTubeId}`}> 
                    <span style={{color: '#d0b96dff'}}> {song.title}&nbsp;</span>
                </a>

                <span>
                    ({song.year}) by 
                </span>
                    
                <span style={{color: 'red'}}>
                   &nbsp;{song.artist}
                </span>

                <input
                    type="button"
                    id={"delete-song-"+ num}
                    className="song-card-button"
                    onClick={this.handleDeleteSong}
                    value={"🗑"}
                />
            </div>
        )
    }
}