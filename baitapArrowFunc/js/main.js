const colorList = ["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];

let showColor = () =>{ 
    for(let i in colorList){
        document.querySelector("#colorContainer").innerHTML +=`
        <button class="color-button ${colorList[i]}" onclick="clickColorList(${i}) " ></button>
        `
    }
}

showColor();

let clickColorList = (param) => {
    colorList.map( (element) => {
        document.querySelector('#house').classList.remove(element);
    })
    document.querySelector('#house').classList.add(colorList[param])

}

