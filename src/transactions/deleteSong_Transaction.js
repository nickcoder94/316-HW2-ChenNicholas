import { jsTPS_Transaction } from "jstps";


export default class deleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp,songId){
        super();
        this.app = initApp;
        this.songId = songId;
    }

    executeDo() {
        this.app.deleteSong(this.songId);
    }

    executeUndo() {

    }
}