window.onload = function() {
    const pazymiai = [5,8,6,4,7,5,10,8,10,9]
    let suskaiciuotas = masyvoSuma(pazymiai);
    //console.log(suma(pazymiai));
    console.log(dalyba(pazymiai))
    
}

function masyvoSuma(masyvas) {
    let suma = 0;
    for (let i = 0; i < masyvas.length; i++) {
        suma += masyvas[i];
}
return suma;

}
function dalyba (skaicius){
    return masyvoSuma(skaicius) / skaicius.length
}