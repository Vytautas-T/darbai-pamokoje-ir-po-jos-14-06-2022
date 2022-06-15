window.onload = function() {
    const skarry = [5, 12, 3, 6, 8, 14, 15, 5, 6, 10];
    const isRingtiSkaiciai = didesniSkaiciaiUz10(skarry);
    console.log(isRingtiSkaiciai);
}

function didesniSkaiciaiUz10(skaicius){
    const masyvas = [];
    let skaiciuSuma = 0;
    for (let i = 0; i < skaicius.length; i++) {
        if(arSkaiciusDaugiauUz10(skaicius[i])){
            skaiciuSuma++;
        }
    }
    return skaiciuSuma;
}

function arSkaiciusDaugiauUz10(x) {
    return x > 10;
}