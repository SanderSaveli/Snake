let ranges = [];
ranges.push(fillRangeObject("fieldSize"));
ranges.push(fillRangeObject("gameSpeed"));

ranges.forEach(element => {
    element.value.style.left = 50+"%";
    element.pointer.style.left = 50+"%";
    element.text.textContent = element.range.value;
});

function updateUI(event){
    const element = getRangeByName(event.target.id);

    let min = element.range.min;
    let max = element.range.max;
    let value = element.range.value;
    let persent = ((value-min)/(max-min))*100;
    element.value.style.left = persent+"%";
    element.pointer.style.left = persent+"%";
    element.text.textContent = value;
}

function addStaticState(event){
    const element = getRangeByName(event.target.id);
    element.value.classList.remove("range__value-dynamic");
    element.value.classList.add("range__value-static");
}

function addDunamicState(event){
    const element = getRangeByName(event.target.id);
    element.value.classList.remove("range__value-static");
    element.value.classList.add("range__value-dynamic");
}

function fillRangeObject(name){
    const obj = {
        name: name,
        range: document.getElementById(name),
        value: document.getElementById(name+"Value"),
        text: document.getElementById(name+"Text"),
        pointer: document.getElementById(name+"Pointer"),
    }
    obj.range.addEventListener("input", updateUI);
    obj.range.addEventListener("mouseover", addDunamicState);
    obj.range.addEventListener("mouseout", addStaticState);
    return obj;
}

function getRangeByName(name){
    let el;
    ranges.forEach(element => {
        if(name == element.name){
            el = element;
        }
    });
    return el;
}