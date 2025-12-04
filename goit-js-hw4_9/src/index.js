const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

const addBtn = document.getElementById("addBtn");
const list = document.getElementById("contactList");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let editIndex = null;

renderContacts();

addBtn.addEventListener("click", () => {
  if (!firstName.value || !lastName.value || !phone.value || !email.value)
    return alert("Заповніть усі поля!");

  const newContact = {
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
    email: email.value,
  };

  if (editIndex === null) {
    contacts.push(newContact);
  } else {
    contacts[editIndex] = newContact;
    editIndex = null;
    addBtn.textContent = "Додати";
  }

  save();
  renderContacts();
  clearForm();
});

function renderContacts() {
  list.innerHTML = "";

  contacts.forEach((c, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div>
        <strong>${c.firstName} ${c.lastName}</strong><br>
        📞 ${c.phone}<br>
        ✉️ ${c.email}
      </div>
    `;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Редагувати";
    editBtn.className = "edit";
    editBtn.onclick = () => editContact(index);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Видалити";
    delBtn.className = "delete";
    delBtn.onclick = () => deleteContact(index);

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function deleteContact(i) {
  contacts.splice(i, 1);
  save();
  renderContacts();
}

function editContact(i) {
  const c = contacts[i];

  firstName.value = c.firstName;
  lastName.value = c.lastName;
  phone.value = c.phone;
  email.value = c.email;

  editIndex = i;
  addBtn.textContent = "Зберегти зміни";
}

function clearForm() {
  firstName.value = "";
  lastName.value = "";
  phone.value = "";
  email.value = "";
}

function save() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}
