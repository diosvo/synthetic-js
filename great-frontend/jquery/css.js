/**
 * @param {string} selector
 * @return {{css: Function}}
 */
export default function $(selector) {
  const element = document.querySelector(selector);

  return {
    /**
     * @param {string} prop
     * @param {boolean|string|number} value
     * @return {Object|void|string}
     */
    css: function (prop, value) {
      // Getter case.
      if (value === undefined) {
        // No matching elements.
        if (element == null) {
          return undefined;
        }

        const value = element.style[prop];
        return value === '' ? undefined : value;
      }

      // Setter case.
      if (element != null) {
        element.style[prop] = value;
      }

      return this;
    },
  };
}

// [Vanilla]
// const buttonEl = document.querySelector('button');
// buttonEl.style.color = 'red';
// buttonEl.style.backgroundColor = 'tomato';
// buttonEl.style.fontSize = '16px';

// [jQuery]
// const buttonEl = $('button');
// buttonEl.css('color', 'red');
// buttonEl.css('backgroundColor', 'tomato');
// buttonEl.css('fontSize', '16px');

$('button')
  .css('color', 'red')
  .css('backgroundColor', 'tomato')
  .css('fontSize', '16px');
