export const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);

    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Упс, помилочка при збережені даних в сховищі!", error);
  }
};

export const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (error) {
    console.error("Упс, помилочка при завантаженні даних з сховища!", error);
  }
};

export const remove = (key) => {
  try {
    const serializedState = localStorage.removeItem(key);
  } catch (error) {
    console.error("Упс, помилочка при видаленні даних з сховища!", error);
  }
};

export const clear = () => {
  try {
    const serializedState = localStorage.clear();
  } catch (error) {
    console.error("Упс, помилочка при очищені сховища!", error);
  }
};