onmouseover

Definition: The onmouseover event fires when the mouse pointer moves onto (i.e., “hovers over”) an HTML element or any of its child elements.

Typical Use: Change the appearance of an element (e.g., highlight a menu item), display a tooltip, or trigger some JavaScript-driven animation whenever the user positions their cursor over a specific area.

Example Behavior:

html
Copy
Edit
<p id="hoverText" onmouseover="handleHover()">Hover over me!</p>

<script>
  function handleHover() {
    alert("Mouse is over the paragraph now.");
  }
</script>
In this snippet, as soon as the pointer enters the <p> element’s region, the handleHover() function is called.

onclick

Definition: The onclick event fires when a user clicks (i.e., presses and releases the primary mouse button) on an element. It works for virtually any HTML element—buttons, images, links, even <div>s or <span>s, as long as they have an onclick handler.

Typical Use: Execute an action when a user clicks a button or link. For example, submitting a form, showing/hiding content, or running any arbitrary JavaScript function.

Conceptual Example:

html
Copy
Edit
<button id="saveButton" onclick="saveData()">Save</button>

<script>
  function saveData() {
    console.log("Data has been saved!");
    // ...additional logic to process or send data...
  }
</script>
Every time the “Save” button is clicked, saveData() runs.

onchange

Definition: The onchange event fires when the value of an input, <select>, or <textarea> element is committed by the user—that is, when the element loses focus and its value has changed since it received focus.

Typical Use: React to a user selecting a different option in a dropdown (<select>), typing new text into an input field and then clicking elsewhere, or modifying a checkbox/state and moving focus away. It’s ideal for validating form fields or updating the page whenever a form control’s value is finalized.

Conceptual Example:

html
Copy
Edit
<label for="favColor">Choose favorite color:</label>
<select id="favColor" onchange="colorChanged(event)">
  <option value="">––select––</option>
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
</select>

<script>
  function colorChanged(event) {
    console.log("User chose:", event.target.value);
    // maybe update some preview area or save preference...
  }
</script>
When the user picks a new color from the dropdown and then clicks away (or tabs out), the colorChanged function prints the chosen value.
