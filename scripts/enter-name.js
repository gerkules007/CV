function insertData() {
    let input = window.prompt("Введите свое имя");
    document.getElementById("reg-line").innerHTML = 'Здравствуйте, ' + (input === null || input === ''? 'User': input);
}