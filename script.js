// Keycode for the ENTER and ESC keys.
const ENTER_KEY = 13;
const ESC_KEY = 27;

// Initial todo items in a stringified format.
const stringifiedTodoItems = `
    [
        {
            "name": "This item is done",
            "done": true
        },
        {
            "name": "This item is not done",
            "done": false
        }
    ]
`;

/**
* Model describes how todo items are stored and
* specifies the methods that are used to modify the todo list.
*
* Note that model should NOT have interaction with the UI,
* i.e. no DOM manipulation here.
*
* Instead, the DOM should be updated in controller and view.
*/
const model = {
    items: JSON.parse(stringifiedTodoItems),

    /**
    * Count the total number of items
    * and the number of done items.
    * @return {Object} { numItems: ..., numDoneItems: ... }
    */
    countItems: function() {},

    /**
    * Create a todo item, set it as undone and add it to the "items" array.
    * Items should have the following format:
    * { name: ..., done: true/false }
    * @param {string} name - the name of the new item
    */
    createItem: function(name) {},

    /**
    * Change the name of the specified todo item.
    * @param {Number} index - the index of the item in the zero-indexed "items" array
    * @param {string} name - the item's new name
    */
    changeItemName: function(index, name) {},

    /**
    * Delete the specified item.
    * @param {Number} index - the index of the item in the zero-indexed "items" array
    */
    deleteItem: function(index) {},

    /**
    * Delete all items.
    */
    deleteAllItems: function() {},

    /**
    * Toggle the status of the specified item.
    * If it is done, change it to undone.
    * If it is undone, change it to done.
    * @param {Number} index - the index of the item in the zero-indexed "items" array
    */
    toggleItem: function(index) {},

    /**
    * Toggle the status of all items.
    * If an item is done, change it to undone.
    * If an item is undone, change it to done.
    */
    toggleAllItems: function() {},
};

/**
* Controller servers as a bridge between model and view.
*
* In every controller method, remember to update the UI
* by calling view.displayTodoItems().
*
* Difference between controller and view:
* Only event handling methods should be included in controller
* (e.g. methods that respond to an add-item event).
* Pure display methods and methods that are not
* directly related to the todo list
* should be included in view instead.
*/
const controller = {
    /**
    * Read the content from the input field
    * and create a new todo item.
    */
    createItem: function() {},

    /**
    * 2 keyboard events should be monitored:
    * pressing the ENTER key and pressing the ESC key.
    *
    * Update the name of the selected todo item
    * when the ENTER key is pressed.
    *
    * Exit editing mode and revert to the original name
    * when the ESC key is pressed.
    * @param {Event} event - the event paramter that is available to event handlers
    */
    updateItemNameOnKeyUp: function(event) {},

    /**
    * Update the name of the selected todo item
    * when the user clicks on anything
    * that lies outside the input box.
    * @param {Event} event - the event paramter that is available to event handlers
    */
    updateItemNameOnFocusOut: function(event) {},

    /**
    * Change the name of the specified item.
    * @param {Number} index - the index of the item (index starts from zero)
    * @param {string} name - the item's new name
    */
    changeItemName: function(index, name) {},

    /**
    * Delete the specified item.
    * @param {Number} index - the index of the item (index starts from zero)
    */
    deleteItem: function(index) {},

    /**
    * Delete all items.
    */
    deleteAllItems: function() {},

    /**
    * Turn on the updating mode.
    * Display the update input and hide the todo item label.
    * @param {Event} event - the event paramter that is available to event handlers
    */
    turnOnUpdatingMode: function(event) {},

    /**
    * Read the index of the selected item from the UI.
    * Toggle the status of the selected item.
    * If it is done, change it to undone.
    * If it is undone, change it to done.
    * @param {Event} event - the event paramter that is available to event handlers
    */
    toggleItem: function(event) {},

    /**
    * Toggle the status of all items.
    * If an item is done, change it to undone.
    * If an item is undone, change it to done.
    */
    toggleAllItems: function() {},

    /**
    * Clear the input form that is used to add new items.
    */
    clearForm: function() {},
};

/**
* View contains methods that are responsible for displaying only but
* do not handle events (e.g. displayTodoItems).
* View also contains DOM manipulation methods where we can
* modified the appearance of UI elements and/or
* attach event listeners to them.
*/
const view = {
    /**
    * Render all todo items on the webpage.
    * This method is long and complex.
    * I have broken down the method into several smaller steps.
    * See the comments below.
    */
    displayTodoItems: function() {
        /**
        * If there is at least one item,
        * then display a button that is used to toggle the status of all items.
        * Otherwise, do not display.
        *
        * For each todo item, we should do the following:
        *
        * 1️⃣
        * Render a checkbox on the left.
        * If the item is done, the checkbox should be checked.
        * Otherwise, the checkbox should be empty;
        *
        * 2️⃣
        * Add an input box in order to edit the item's name.
        * Initially the input box should be invisible.
        * It becomes visible only when the user clicks on the item's name.
        *
        * 3️⃣
        * Display the item's name.
        * For a done item, its name should be displayed as stricken-through.
        *
        * 4️⃣
        * Display a delete button on the right.
        * Remember to attach appropriate event listener(s) to the button.
        */
    },

    /**
    * Display a DOM element.
    * @param {HTMLElement} domElement - the DOM element that you want to display
    */
    displayDOMElement: function(domElement) {},

    /**
    * Hide a DOM element.
    * @param {HTMLElement} domElement - the DOM element that you want to hide
    */
    hideDOMElement: function(domElement) {}
};

view.displayTodoItems();