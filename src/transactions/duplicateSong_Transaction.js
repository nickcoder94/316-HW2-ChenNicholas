import { jsTPS_Transaction } from "jstps";

export default class duplicateSong_Transaction extends jsTPS_Transaction {
    constructor(app,initSong,id){
        super();
        this.app = app;
        this.song = initSong;
        this.ind = id;
        this.newSong ={
            title: initSong.title + "(Copy)",
            artist: initSong.artist,
            year: initSong.year,
            youTubeId: initSong.youTubeId
        };

    }


    executeDo(){
        console.log(this.ind);
        this.app.addSong(this.newSong,this.ind);
    }

    executeUndo(){
        this.app.deleteSong(this.song.id+1);
    }
}