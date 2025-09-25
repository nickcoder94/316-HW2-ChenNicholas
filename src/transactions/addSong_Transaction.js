import { jsTPS_Transaction } from "jstps";


export default class addSong_Transaction extends jsTPS_Transaction {
    constructor(initApp){
        super();
        this.app = initApp;
        this.newSong = null;
    }
    

    executeDo(){
        this.newSong = {
            title: "Untitled",
            year: 2000,
            artist: "???",
            youTubeId: "dQw4w9WgXcQ"
        };

        let len = this.app.getPlaylistSize();
        this.app.addSong(this.newSong,len);
    }

    executeUndo() {
        let len = this.app.getPlaylistSize();
        this.app.deleteSong(len-1);
        
    }

}
