const input = document.getElementById("bookmarkInput");
const addBtn = document.getElementById("addBookmarkBtn");
const list = document.getElementById("bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

renderBookmarks();

addBtn.addEventListener("click", () => {
  const url = input.value.trim();
  if (!url) return;

  bookmarks.push(url);
  input.value = "";
  saveBookmarks();
  renderBookmarks();
});

function renderBookmarks() {
  list.innerHTML = "";

  bookmarks.forEach((url, index) => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = url;
    link.textContent = url;
    link.target = "_blank";

    const editBtn = document.createElement("button");
    editBtn.textContent = "✎";
    editBtn.style.background = "orange";
    editBtn.onclick = () => editBookmark(index);

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.classList.add("delete");
    delBtn.onclick = () => deleteBookmark(index);

    li.appendChild(link);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function deleteBookmark(i) {
  bookmarks.splice(i, 1);
  saveBookmarks();
  renderBookmarks();
}

function editBookmark(i) {
  const newURL = prompt("Редагувати URL:", bookmarks[i]);
  if (newURL) {
    bookmarks[i] = newURL;
    saveBookmarks();
    renderBookmarks();
  }
}

function saveBookmarks() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

const username = document.getElementById("username");
const password = document.getElementById("password");
const saveBtn = document.getElementById("saveBtn");

window.addEventListener("DOMContentLoaded", () => {
  username.value = localStorage.getItem("savedUsername") || "";
  password.value = localStorage.getItem("savedPassword") || "";
});

saveBtn.addEventListener("click", () => {
  localStorage.setItem("savedUsername", username.value);
  localStorage.setItem("savedPassword", password.value);
  alert("Дані збережено!");
});
