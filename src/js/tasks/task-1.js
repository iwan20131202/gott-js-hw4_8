import { save, load, remove, clear } from "../storage/storage";

const bookmarkInput = document.querySelector("#bookmarkInput");
const addBookmarkBtn = document.querySelector("#addBookmarkBtn");
const bookmarkList = document.querySelector("#bookmarkList");

const handleAddingBookmark = () => {
  const inputValue = bookmarkInput.value.trim();
  if (inputValue === "") return alert("Введіть URL!");

  const newItem = document.createElement("li");
  const newLink = document.createElement("a");
  newLink.href = inputValue;
  newLink.classList.add("bookmark-link");
  newLink.textContent = inputValue;

  const newBtn = document.createElement("button");
  newBtn.textContent = "✖";
  newBtn.classList.add("delete");

  const handleRemove = () => {
    newItem.remove();
    const bookmarkData = load("bookmarkData");
    save("bookmarkData", bookmarkData);
  };

  newBtn.addEventListener("click", handleRemove);

  newItem.appendChild(newLink);
  newItem.appendChild(newBtn);
  bookmarkList.append(newItem);

  // const bookmarkData = load("bookmarkData");
  // save("bookmarkData", bookmarkData);
};

addBookmarkBtn.addEventListener("click", handleAddingBookmark);