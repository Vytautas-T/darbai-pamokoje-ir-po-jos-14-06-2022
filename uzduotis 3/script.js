window.onload = function() {
    const skaiciai = [15, 20, 17, 30, 25, 18, 9, 8, 48, 45, 47, 42]
    console.log(everysecand(skaiciai))
}

function everysecand(masyvas) {
    const num = [];
    for (let i = 0; i < masyvas.length; i += 2) {
        num.push(masyvas[i]);
    }
return num;
}