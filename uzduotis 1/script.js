window.onload = function() {
    const pazymiai = [5,8,6,4,7,5,10,8,10,9]
    console.log(pazymiuVidurkis(pazymiai))

}

function pazymiuVidurkis(masyvas) {
    let suma = 0;
    for (let i = 0; i < masyvas.length; i++) {
        suma += masyvas[i];
}
return suma /= masyvas.length

}