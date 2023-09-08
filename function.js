function addtoDisplay(value) {

    document.getElementById('display').value += value;
}

function allClear() {

    document.getElementById('display').value = '';
}

function deleteButton() {

    let output = document.getElementById('display');
    output.value = output.value.slice(0, -1);
}

function calculate() {
    let output = document.getElementById('display');

    try {
        output.value = eval(output.value);
    } catch (error) {
        output.value = 'Error';
    }
}
