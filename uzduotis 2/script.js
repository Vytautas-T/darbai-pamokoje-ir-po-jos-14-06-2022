window.onload = function() {
    const skaiciai = [3, 5, 2, 1];
    console.log(sandauga(skaiciai))
}

function sandauga(masyvas) {
    let suma = 0;
    for (let i = 0; i < masyvas.length; i++) {
        suma = suma[i] * masyvas[i]
        
    }
    return suma;
}