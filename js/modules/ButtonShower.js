export default class ButtonManager{
    constructor(){
        this.restartMenu = document.getElementById('restartMenu');
    }
    setRestartMenuStatys(isAcktive){
        if(isAcktive){
            this.restartMenu.classList.remove("hide");
        }
        else{
            this.restartMenu.classList.add("hide");
        }
    }
}