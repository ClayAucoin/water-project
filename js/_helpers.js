/**
 * helpers.js
 * A helper library for HTML/JS projects.
 * 
 * This version includes error checking and info messages.
 * Students should use this as a reference for writing safe, 
 * user-friendly code in the browser.
 */

/**
 * Attach an event listener to a UI element.
 * @param {string} id - The id of the element.
 * @param {string} event - The event type (e.g. "click").
 * @param {Function} handler - The function to run on the event.
 * 
 * @example
 * function sayHello() { console.log("Hello!"); }
 * onEvent("myButton", "click", sayHello);
 */
function onEvent(id, event, handler) {
    var el = document.getElementById(id);
    if (!el) {
      console.warn("onEvent: Element with id '" + id + "' not found.");
      return;
    }
    el.addEventListener(event, function(e) { handler(e); });

    console.info("onEvent: Listening for '" + event + "' on #" + id);
  }
  
  /**
   * Change a CSS property of an element.
   * @param {string} id - The id of the element.
   * @param {string} property - CSS property (e.g. "color", "backgroundColor").
   * @param {string|number} value - The new value.
   * 
   * @example
   * setProperty("myDiv", "color", "blue");
   */
  function setProperty(id, property, value) {
    var el = document.getElementById(id);
    if (!el) {
      console.warn("setProperty: Element with id '" + id + "' not found.");
      return;
    }
    el.style[property] = value;
    console.info("setProperty: #" + id + " → " + property + " = " + value);
  }
  
  /**
   * Play a sound from a given URL.
   * @param {string} url - The sound file URL.
   * @param {boolean} [loop=false] - Whether to loop the sound.
   * 
   * @example
   * playSound("beep.mp3");
   */
  function playSound(url, loop) {
    if (!url) {
      console.warn("playSound: No URL provided.");
      return;
    }
    var audio = new Audio(url);
    audio.loop = loop || false;
    audio.play();
    console.info("playSound: Playing " + url + (loop ? " (looping)" : ""));
  }
  
  /**
   * Change the text of an element (not inputs).
   * @param {string} id - The id of the element.
   * @param {string} text - The text to display.
   * 
   * @example
   * setText("myLabel", "Hello World!");
   */
  function setText(id, text) {
    var el = document.getElementById(id);
    if (!el) {
      console.warn("setText: Element with id '" + id + "' not found.");
      return;
    }
    el.textContent = text;
    console.info("setText: #" + id + " → \"" + text + "\"");
  }
  
  /**
   * Get the text from an element (not inputs).
   * @param {string} id - The id of the element.
   * @returns {string|null} The element's text, or null if not found.
   * 
   * @example
   * var msg = getText("myLabel");
   */
  function getText(id) {
    var el = document.getElementById(id);
    if (!el) {
      console.warn("getText: Element with id '" + id + "' not found.");
      return null;
    }
    return el.textContent;
  }
  
  /**
   * Set the value of an input element.
   * @param {string} id - The id of the input.
   * @param {string} value - The value to set.
   * 
   * @example
   * setValue("nameInput", "Alice");
   */
  function setValue(id, value) {
    var el = document.getElementById(id);
    if (!el) {
      console.warn("setValue: Input with id '" + id + "' not found.");
      return;
    }
    // @ts-ignore
    el.value = value;
    console.info("setValue: #" + id + " → \"" + value + "\"");
  }
  
  /**
   * Get the value of an input element.
   * @param {string} id - The id of the input.
   * @returns {string|null} The input's value, or null if not found.
   * 
   * @example
   * var name = getValue("nameInput");
   */
  function getValue(id) {
    var el = document.getElementById(id);
    if (!el) {
      console.warn("getValue: Input with id '" + id + "' not found.");
      return null;
    }
    // @ts-ignore
    return el.value;
  }
  
  /**
   * Set the URL of an image element.
   * @param {string} id - The id of the image element.
   * @param {string} url - The image URL.
   * 
   * @example
   * setImageURL("logo", "logo.png");
   */
  function setImageURL(id, url) {
    var el = document.getElementById(id);
    if (!el) {
      console.warn("setImageURL: Image with id '" + id + "' not found.");
      return;
    }
    // @ts-ignore
    el.src = url;
    console.info("setImageURL: #" + id + " → " + url);
  }
  