export default class ScoreManager{
    constructor(){
        this.scoreView = document.getElementById('score');
        this.score =0;
    }

    increaseScore(){
        this.score++;
        this.scoreView.textContent = this.score;
    }
}