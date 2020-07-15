const kinveyUsername = 'guest';
const kinveyPassword = 'guest';
const appKey = 'kid_HJwvdSVGH';
const appSecret = 'b18c4bb7df4c47b5aa98737f14f806a9';

const baseUrl = 'https://baas.kinvey.com/appdata/kid_HJwvdSVGH/books';

const elements = {
    btnSubmit: document.querySelector('body form button'),
    btnLoadBooks: document.getElementById('loadBooks'),
    inputTitle: document.getElementById('title'),
    inputAuthor: document.getElementById('author'),
    inputIsbn: document.getElementById('isbn'),
    tableBody: document.querySelector('body table tbody'),
    formName: document.querySelector("body form h3")
};

elements.btnLoadBooks.addEventListener('click', loadBooks);
elements.btnSubmit.addEventListener('click', addBook);

function addBook(event) {
    event.preventDefault();

    let title = elements.inputTitle.value;
    let author = elements.inputAuthor.value;
    let isbn = elements.inputIsbn.value;

    if (title && author && isbn) {
        const dataObject = {
            title,
            author,
            isbn
        };

        const headers = {
            method: 'POST',
            body: JSON.stringify(dataObject),
            credentials: 'include',
            Authorization: 'Basic' + btoa(`${kinveyUsername}:${kinveyPassword}`),
            headers: {
                "Content-type": "application/json"
            }
        };

        fetch(baseUrl, headers)
            .then(handler)
            .then(loadBooks)
            .catch(err => console.log(err));
    }

    clearInputFields();
}

function loadBooks() {
    const headers = {
        credentials: 'include',
        Authorization: 'Kinvey' + localStorage.getItem('authToken')
    };

    fetch(baseUrl, headers)
        .then(handler)
        .then((data) => {
            elements.tableBody.innerHTML = '';

            data.forEach(book => {
                let trNextBook = document.createElement('tr');
                trNextBook.setAttribute('id', book._id);

                trNextBook.innerHTML =
                    `<td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td>
                        <button class="btnEdit" value=${book._id}>Edit</button>
                        <button class="btnDelete" value=${book._id}>Delete</button>
                    </td>`;

                trNextBook.querySelector('button.btnEdit')
                    .addEventListener('click', () => loadEditForm(book._id));

                trNextBook.querySelector('button.btnDelete')
                    .addEventListener('click', () => deleteBook(book._id));

                elements.tableBody.appendChild(trNextBook);
            });
        })
        .catch(err => console.error(err));
}

function loadEditForm(bookId) {
    //първо намираме реда с даденото ИД, трябва да вземем данните от всяка клетка
    let dataToEdit = document.getElementById(bookId).querySelectorAll('td');

    elements.inputTitle.value = dataToEdit[0].textContent;
    elements.inputAuthor.value = dataToEdit[1].textContent;
    elements.inputIsbn.value = dataToEdit[2].textContent;

    elements.formName.textContent = 'EDIT BOOK';
    elements.btnSubmit.style.display = 'none';

    let doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.setAttribute('class', 'done');
    doneBtn.setAttribute('value', bookId);
    doneBtn.addEventListener('click', editBook);
    document.querySelector('body form').appendChild(doneBtn);

    let cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.setAttribute('class', 'cancel');
    cancelBtn.setAttribute('value', bookId);
    cancelBtn.addEventListener('click', cancelBook);
    document.querySelector('body form').appendChild(cancelBtn);
}

function editBook(event) {
    event.preventDefault();

    //console.log(event.target.value);

    let bookId = event.target.value;

    const bookData = {
        'title': elements.inputTitle.value,
        'author': elements.inputAuthor.value,
        'isbn': elements.inputIsbn.value
    };

    let editUrl = `${baseUrl}/${bookId}`;

    let headers = {
        method: 'PUT',
        body: JSON.stringify(bookData),
        credentials: 'include',
        Authorization: 'Kinvey' + localStorage.getItem('authToken'),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch(editUrl, headers)
        .then(handler)
        .then(loadBooks)
        .catch(err => console.error(err));

    fromEditToSubmitForm();
}

function cancelBook(event) {
    event.preventDefault();
    fromEditToSubmitForm();
}

function deleteBook(bookId) {
    let deleteUrl = `${baseUrl}/${bookId}`;

    let headers = {
        method: 'DELETE',
        credentials: 'include',
        Authorization: 'Kinvey' + localStorage.getItem('authToken'),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch(deleteUrl, headers)
    .then(handler)
    .then(loadBooks)
    .catch(err => console.error(err));
}

function fromEditToSubmitForm() {
    clearInputFields();

    elements.formName.textContent = 'FORM';
    elements.btnSubmit.style.display = 'block';
    document.querySelector("button.done").style.display = 'none';
    document.querySelector("button.cancel").style.display = 'none';
}

function clearInputFields() {
    elements.inputTitle.value = '';
    elements.inputAuthor.value = '';
    elements.inputIsbn.value = '';
}

function handler(response) {
    if (response.status >= 400) {
        throw new Error(response.status);
    }

    return response.json();
}