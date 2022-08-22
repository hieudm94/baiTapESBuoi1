let jumpText = () =>{
    let text = document.querySelector(".heading").innerHTML;
    let textArray = [...text];
    textArray.map((alpha)=>{
        document.querySelector(".heading").innerHTML += `<span>${alpha}</span> `
    })
}

jumpText();