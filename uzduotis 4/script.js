window.onload = function() {
    let x = 509;
    let y = 603;
    let x1 = 100;
    let y1 = 104;
    const a = nelyginiaiSkaiciai(x1,y1);
    const b = nelyginiaiSkaiciai(x,y);
    console.log(a)
    console.log(b)
}

function nelyginiaiSkaiciai(skaicius1,skaicius2) {
    const masyvas = [];
    for (let i = skaicius1; i <= skaicius2; i++) {
        if (arLyginiai(i)) {
            masyvas.push(i);
        }
    }
    return masyvas;
}

function arLyginiai(x) {
    return x % 2 === 1;
}