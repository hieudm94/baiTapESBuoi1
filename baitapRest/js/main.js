let tongDiem = (...total) =>{
    let sum = 0;
    total.map((scores) =>{
        sum += scores;
    });

    return sum/(total.length);
}

let diemKhoi1 = () =>{
    let toan = Number(document.querySelector("#inpToan").value);
    let ly = Number(document.querySelector("#inpLy").value);
    let hoa = Number(document.querySelector("#inpHoa").value);

    document.querySelector("#tbKhoi1").innerHTML = tongDiem(toan, ly, hoa)
}

let diemKhoi2 = () =>{
    let van = Number(document.querySelector("#inpVan").value);
    let su = Number(document.querySelector("#inpSu").value);
    let dia = Number(document.querySelector("#inpLy").value);
    let tiengAnh = Number(document.querySelector("#inpEnglish").value);

    document.querySelector("#tbKhoi2").innerHTML = tongDiem(van, su, dia, tiengAnh);
}