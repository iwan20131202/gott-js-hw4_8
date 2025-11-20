import { save, load, remove, clear } from "../storage/storage";

const form = document.querySelector(".form");

const userData = load("userData");

if (userData) {
  form.username.value = userData.username;
  form.password.value = userData.password;
}

const handleSaveData = (event) => {
  const userData = {
    username: event.currentTarget.username.value,
    password: event.currentTarget.password.value,
  };
  save("userData", userData);
};

form.addEventListener("input", handleSaveData);