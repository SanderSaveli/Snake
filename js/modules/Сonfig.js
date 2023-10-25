const config = {
    cellSize : 16,
    startSize : 3,
    fieldSize: [],
    gameSpeed : 170,
    startDir : [0, -1],
}
export default config;
 
function changeFieldSize(n){
    config.fieldSize =n;
}