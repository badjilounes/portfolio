export function LocalStorage<T>() {
  return function (target: Object, propertyDescription: string) {
    const key = propertyDescription;

    Object.defineProperty(target, propertyDescription, {
      get: function () {
        let value: T | undefined;
        const stored = localStorage.getItem(key);

        if (stored) {
          try {
            value = JSON.parse(stored);
          } catch {
            value = undefined;
          }
        }

        return value;
      },
      set: function (value: T) {
        localStorage.setItem(key, JSON.stringify(value));
      },
    });
  };
}

