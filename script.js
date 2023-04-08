const url = 'https://jsonplaceholder.typicode.com/users';
let totalData; //contiene tutti gli utenti
let actualData = []; //filtra utenti

window.addEventListener('load', async () => {
    await getData(url);
    setEventListener();
    showUsers();
});

//recupera le info dall'API
async function getData(apiAddress) {
    await fetch(apiAddress).then(response => response.json()).then((result) => {
        totalData = result;
        console.log(totalData);
        totalData.forEach(item => actualData.push(item));
    }).catch((e) => { alert("c'è un errore: " + e); });
}

//mostra gli utenti attuali
function showUsers() {
    let row = document.querySelector('main > div.container > div.row');
    let col1 = document.createElement('div');
    col1.classList.add('col', 'col-3', 'col-xl-2', 'fw-bold', 'border', 'py-2');
    col1.innerText = 'Id';
    let col2 = document.createElement('div');
    col2.classList.add('col', 'col-3', 'col-xl-2', 'fw-bold', 'border', 'py-2');
    col2.innerText = 'Name';
    let col3 = document.createElement('div');
    col3.classList.add('col', 'col-3', 'col-xl-2', 'fw-bold', 'border', 'py-2');
    col3.innerText = 'Username';
    let col4 = document.createElement('div');
    col4.classList.add('col', 'col-xl-2', 'd-none', 'd-xl-block', 'fw-bold', 'border', 'py-2');
    col4.innerText = 'Email';
    let col5 = document.createElement('div');
    col5.classList.add('col', 'col-xl-2', 'd-none', 'd-xl-block', 'fw-bold', 'border', 'py-2');
    col5.innerText = 'Phone';
    let col6 = document.createElement('div');
    col6.classList.add('col', 'col-3', 'col-xl-2');
    row.append(col1, col2, col3, col4, col5, col6);
    actualData.forEach(item => {
        let col1 = document.createElement('div');
        col1.classList.add('col', 'col-3', 'col-xl-2', 'border', 'py-2');
        col1.innerText = item.id;
        let col2 = document.createElement('div');
        col2.classList.add('col', 'col-3', 'col-xl-2', 'border', 'py-2');
        col2.innerText = item.name;
        let col3 = document.createElement('div');
        col3.classList.add('col', 'col-3', 'col-xl-2', 'border', 'py-2');
        col3.innerText = item.username;
        let col4 = document.createElement('div');
        col4.classList.add('col', 'col-xl-2', 'd-none', 'd-xl-block', 'border', 'py-2');
        col4.innerText = item.email;
        let col5 = document.createElement('div');
        col5.classList.add('col', 'col-xl-2', 'd-none', 'd-xl-block', 'border', 'py-2');
        col5.innerText = item.phone;
        let col6 = document.createElement('div');
        col6.classList.add('col', 'col-3', 'col-xl-2');
        let anchor = document.createElement('a');
        col6.append(anchor);
        row.append(col1, col2, col3, col4, col5, col6);
    });
}

//cancella la tabella
function deleteTable() {
    let cols = document.querySelectorAll('main > div.container > div.row > div.col');
    cols.forEach(item => {
        item.remove();
    });
}

//filtro agli utenti
function filter(event) {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    if (inputText !== '') {
        let field = event.target.innerHTML.toLowerCase();
        actualData = getArray(inputText, field);
        if (actualData.length > 0) {
            deleteTable();
            showUsers();
            document.getElementsByTagName('input')[0].value = '';
        }
    }
}

//recupera gli utenti filtrati
function getArray(value, field) {
    let array = [];
    totalData.forEach(item => {
        if (item[field].toLowerCase().includes(value)) {
            array.push(item);
        }
    });
    return array;
}

function setEventListener() {
    let listItems = document.getElementsByTagName('li');
    for(let item of listItems) {
        item.addEventListener('click', filter);
    }
    let nameListButton = document.getElementById('nameListButton');
    nameListButton.addEventListener('click', showNameList);
    let addressListButton = document.getElementById('addressListButton');
    addressListButton.addEventListener('click', showAddressList);
    let sortButton = document.getElementById('sortButton');
    sortButton.addEventListener('click', sort);
}

//recupera la lista dei nomi
function getNameList() {
    let array = [];
    actualData.forEach(item => {
        array.push(item.name);
    });
    return array;
}

//ista degli indirizzi
function getAddressList() {
    let array = [];
    actualData.forEach(item => {
        array.push(JSON.stringify(item.address));
    });
    return array;
}

//array della lista dei nomi degli utenti
function showNameList() {
    console.log(getNameList());
}

//array della lista degli indirizzi
function showAddressList() {
    console.log(getAddressList());
}

//funzione che innesca l'ordinamento degli utenti attuali
function sort() {
//metodo sort ordina gli elementi dell'array
    let button = document.getElementById('sortButton');
    if (button.innerText.includes('ASC')) {
        sortActualData(true);
        button.innerText = 'Sort by Name\nDESC';
    } else {
        sortActualData(false);
        button.innerText = 'Sort by Name\nASC';
    }
    deleteTable();
    showUsers();
}

//ordinamento in modo asc o dsc in base al parametro asc
function sortActualData(asc) {
    let value = 1;
    if (!asc) {
        value = -1;
    }
    actualData.sort((a, b) => {
        first = a.name.toLowerCase();
        second = b.name.toLowerCase();
        if (first > second) {
            return value;
        }
        if (first < second) {
            return -value;
        }
        return 0;
    });
}

