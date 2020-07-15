//за да направим кода по-абстрактен, първо създаваме само селекторите
const SELECTORS = {
    //така селектираме по атрибути
    email: '[name=email]',
    rows: '#customers tbody tr',
    emailCell: '.email-cell',
    notification: '#result'
};

const NOTIFICATION_TEXTS = {
    success: 'Deleted.',
    error: 'Not found.'
};

const getEmail = () => document.querySelector(SELECTORS.email).value;

const getRows = () => document.querySelectorAll(SELECTORS.rows);

const getRowToDelete = (rows, email) =>
    [...rows].find(row => row.querySelector(SELECTORS.emailCell).innerHTML == email);
//1 option:
//for each row
//second td of row
//check innerHTML
//по-правилния метод е да се добави към всяка клетка идентификатор, в самия HTML файл
//но тогава няма да важи в джъдж и трябва да се използва горния    

const deleteRow = (row) => row.remove();

const clearEmail = () => document.querySelector(SELECTORS.email).value = '';

const setNotification = (text) =>
    document.querySelector(SELECTORS.notification)
        .innerHTML = text;

const setSuccessfulNotification = () => setNotification(NOTIFICATION_TEXTS.success);

const setErrorNotification = () => setNotification(NOTIFICATION_TEXTS.error);

const deleteByEmail = () => {
    //console.log(getEmail()); проверяваме, дали взимаме правилно мейла
    const email = getEmail();
    const rows = getRows();

    //трябва да намерим реда, който трябва да изтрием
    const rowToDelete = getRowToDelete(rows, email);
    if (rowToDelete) {
        //последна стъпка - да изтрием реда
        deleteRow(rowToDelete);
        setSuccessfulNotification();
    } else {
        setErrorNotification();
    }
    clearEmail();
};