let output = document.getElementById('output-value');

let value = '';

document.getElementById('1').addEventListener('click', function () {
    if (value == '0') {
        value = '1';
    } else {
        value += '1';
    }
    output.innerHTML = value;
});

document.getElementById('2').addEventListener('click', function () {
    if (value == '0') {
        value = '2';
    } else {
        value += '2';
    }
    output.innerHTML = value;
});

document.getElementById('3').addEventListener('click', function () {
    if (value == '0') {
        value = '3';
    } else {
        value += '3';
    }
    output.innerHTML = value;
});

document.getElementById('4').addEventListener('click', function () {
    if (value == '0') {
        value = '4';
    } else {
        value += '4';
    }
    output.innerHTML = value;
});

document.getElementById('5').addEventListener('click', function () {
    if (value == '0') {
        value = '5';
    } else {
        value += '5';
    }
    output.innerHTML = value;
});

document.getElementById('6').addEventListener('click', function () {
    if (value == '0') {
        value = '6';
    } else {
        value += '6';
    }
    output.innerHTML = value;
});

document.getElementById('7').addEventListener('click', function () {
    if (value == '0') {
        value = '7';
    } else {
        value += '7';
    }
    output.innerHTML = value;
});

document.getElementById('8').addEventListener('click', function () {
    if (value == '0') {
        value = '8';
    } else {
        value += '8';
    }
    output.innerHTML = value;
});

document.getElementById('9').addEventListener('click', function () {
    if (value == '0') {
        value = '9';
    } else {
        value += '9';
    }
    output.innerHTML = value;
});

document.getElementById('0').addEventListener('click', function () {
    if (value == '0') {
        value = '0'
    } else {
        value += '0';
    }
    output.innerHTML = value;
});

document.getElementById('clear').addEventListener('click', function () {
    output.innerHTML = '';
    value = ''
});


