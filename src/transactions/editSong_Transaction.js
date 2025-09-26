import { jsTPS_Transaction } from "jstps";


export default class editSong_Transaction extends jsTPS_Transaction {
    constructor(app,initSong,newTitle,newArtist,newYear,newYouTubeId) {
        super();
        this.app = app;
        this.song = initSong;
        this.newTitle = newTitle;
        this.newArtist = newArtist;
        this.newYear = newYear;
        this.newYouTubeId = newYouTubeId;
        this.edittedSong = null;
    }

    executeDo() {
        let list = this.app.state.currentList;
        let ind = this.song.id;
        this.edittedSong = {
            title: `{this.newTitle}`,
            artist: `{this.newArtist}`,
            year: `{this.newYear}`,
            youTubeId: `{this.newYouTubeId}`
        };
        list.songs.splice(ind,1,this.edittedSong);
    }

    executeUndo() {
        let list = this.app.state.currentList;
        list.songs.splice(this.song.id,1,song);
    }

    
}