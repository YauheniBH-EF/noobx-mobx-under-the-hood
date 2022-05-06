// Properties
// 1. observable - shallow, deep
// 2. computed - caching computed values
// 3. actions - keep state trigger in the same time
// 3.1 show here that if we change 2 properties render will be called twice

const observers = [];

export const addStoreListener = (listener) => {
  observers.push(listener);
};

export const removeStoreListener = (listener) => {
  observers.splice(observers.indexOf(listener), 1);
};

export const notifyObservers = () => {
  setTimeout(() => {
    observers.forEach((observer) => observer());
  }, 0);
};

export const observable = (obj) => {
  return new Proxy(obj, {
    set(target, name, value) {
      target[name] = value;
      notifyObservers();
      return true;
    }
  });
};
