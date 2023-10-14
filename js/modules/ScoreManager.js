export default class ScoreManager{
    constructor(){
        this.scoreView = document.getElementById('score');
        this.score =0;
        this.scoreView.textContent = this.score;
    }

    increaseScore(){
        this.score++;
        this.scoreView.textContent = this.score;
    }
}