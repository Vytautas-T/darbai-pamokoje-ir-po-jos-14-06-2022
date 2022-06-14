window.onload = function() {
    const skaiciai = [5, 3, 2, 1];
    console.log(sandauga(skaiciai))
}

function sandauga(masyvas) {
    let suma = masyvas[0];
    for (let i = 1; i < masyvas.length; i++) {
        suma = suma * masyvas[i]
        
    }
    return suma;
}