let observers = [];

const Observable = Object.freeze({
  // Notify all registered observers
  notify: (data) => observers.forEach((observer) => observer(data)),
  // New observer functions to be registered
  subscribe: (func) => observers.push(func),
  unscubscribe: (func) =>
    (observers = observers.filter((observer) => observer !== func)),
});

window.Observable = Observable;
