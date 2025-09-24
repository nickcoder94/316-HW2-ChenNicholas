import { jsTPS_Transaction } from "jstps";


export default class addSong_Transaction extends jsTPS_Transaction {
    constructor(initApp){
        super();
        this.app = initApp;
    }
    

    executeDo(){
        let newSong = {
            title: "Untitled",
            year: 2000,
            artist: "???",
            youTubeId: "dQw4w9WgXcQ"
        };

        this.app.addSong(newSong);
    }

    executeUndo() {
        let size = this.app.getPlaylistSize();
        this.app.deleteSong(size-1);
    }

}
