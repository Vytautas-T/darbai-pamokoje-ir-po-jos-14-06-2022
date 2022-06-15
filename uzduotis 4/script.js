window.onload = function() {
    const a = nelyginiaiSkaiciai();
    console.log(a)
}

function nelyginiaiSkaiciai() {
    const masyvas = [];
    for (let i = 107; i <= 309; i++) {
        if (arLyginiai(i)) {
            masyvas.push(i);
        }
    }
    return masyvas;
}

function arLyginiai(x) {
    return x % 2 === 1;
}