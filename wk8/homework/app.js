console.log('count me!');

const incrementValue = () => {
    let value = partseInt(document.getElementById('number').value);
    value++;
    document.getElementById('number').value = value;
};

const decrementValue = () => {
    let value = parseInt(document.getElementById('number').value);
    value--;
    document.getElementById('number').value = value;
};