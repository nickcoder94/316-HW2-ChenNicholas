import { jsTPS_Transaction } from "jstps";


export default class deleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp,songId,initSong){
        super();
        this.app = initApp;
        this.songId = songId;
        this.song = initSong;
    }

    executeDo() {
       this.app.deleteSong(this.songId);
    }

    executeUndo() {
        this.app.addSong(this.song);
    }
}