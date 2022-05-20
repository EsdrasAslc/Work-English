const total = 7;
let corretas = 0;
let erradas = 0;
let q1 = 'none';
let q2 = 'none';
let q3 = 'none';
let q4 = 'none';


function question1(value) {
    const label = document.querySelector('#l1-' + value);
    if (q1 == 'none') {
        q1 = value
        console.log(q1 = value);

        label.classList.add('correct');
    } else {
        document.querySelector('#l1-' + q1).classList.remove('correct');
        q1 = value;
        label.classList.add('correct');
    }
}

function question2(value) {
    const label = document.querySelector('#l2-' + value);
    if (q2 == 'none') {
        q2 = value
        console.log(q2 = value);

        label.classList.add('correct');
    } else {
        document.querySelector('#l2-' + q2).classList.remove('correct');
        q2 = value;
        label.classList.add('correct');
    }
}

function question3(value) {
    const label = document.querySelector('#l3-' + value);
    if (q3 == 'none') {
        q3 = value
        console.log(q3 = value);

        label.classList.add('correct');
    } else {
        document.querySelector('#l3-' + q3).classList.remove('correct');
        q3 = value;
        label.classList.add('correct');
    }
}

function question4(value) {
    const label = document.querySelector('#l4-' + value);
    if (q4 == 'none') {
        q4 = value
        console.log(q4 = value);

        label.classList.add('correct');
    } else {
        document.querySelector('#l4-' + q4).classList.remove('correct');
        q4 = value;
        label.classList.add('correct');
    }
}


function correcao() {

    corretas = 0;
    erradas = 0;

    if (q1 === "a") {
        corretas++
    } else {
        erradas++
    };

    if (q2 === 'a') {
        corretas++
    } else {
        erradas++
    }

    if (q3 === 'd') {
        corretas++
    } else {
        erradas++
    }

    if (q4 === 'b') {
        corretas++
    } else {
        erradas++
    }

    const q5a = document.querySelector('#q5-a').value;
    const q5b = document.querySelector('#q5-b').value;
    const q5c = document.querySelector('#q5-c').value;

    if (q5a.toLowerCase() === "stepped") {
        corretas++
    } else {
        erradas++
    }

    if (q5b.toLowerCase() === "court") {
        corretas++
    } else {
        erradas++
    }

    if (q5c.toLowerCase() === "swear") {
        corretas++
    } else {
        erradas++
    }

    
    
    const media = corretas / total;
    const parcial = media * 100
    alert('média ' + parcial.toFixed(0) + '%' + " | " + 'Certas: ' + corretas + ' | ' + 'Erradas: ' + erradas );
}