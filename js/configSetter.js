let ranges = [];
ranges.push(fillRangeObject("fieldSize"));
function setSize(event){
    console.log(event.target);
    ranges.forEach(element => {
        if(event.target.id == element.range.id){
            console.log(element.range.value);
            let min = element.range.min;
            let max = element.range.max;
            let value = element.range.value;
            localStorage.setItem(element.range.id, value);
            let persent = ((value-min)/(max-min))*100;
            element.value.style.left = persent+"%";
            element.pointer.style.left = persent+"%";
            element.text.textContent = value;
        }
    });
}

function addStaticState(event){
    ranges.forEach(element => {
        if(event.target.id == element.range.id){
            element.value.classList.remove("range__value-dynamic");
            element.value.classList.add("range__value-static");
        }
    });
}

function addDunamicState(event){
    ranges.forEach(element => {
        if(event.target.id == element.range.id){
            element.value.classList.remove("range__value-static");
            element.value.classList.add("range__value-dynamic");
        }
    });
}

function fillRangeObject(name){
    const obj = {
        range: document.getElementById(name),
        value: document.getElementById(name+"Value"),
        text: document.getElementById(name+"Text"),
        pointer: document.getElementById(name+"Pointer"),
    }
    obj.range.addEventListener("input", setSize);
    return obj;
}

const range = document.querySelectorAll(".range");

range.forEach(element => {
    element.addEventListener("mouseover", addDunamicState);
    element.addEventListener("mouseout", addStaticState);
});

ranges.forEach(element => {
    element.value.style.left = 50+"%";
    element.pointer.style.left = 50+"%";
    element.text.textContent = 13;
});