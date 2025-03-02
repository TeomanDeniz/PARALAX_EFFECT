# Paralax Effect

A lightweight JavaScript function that applies a parallax effect to a given element based on mouse movement.

## Usage

### 1. Include the Script
Add the following script tag in your HTML file to include `PARALAX_EFFECT.js`:

```html
<SCRIPT SRC="PARALAX_EFFECT.js"></SCRIPT>
```

### 2. Initialize the Effect
Call `PARALAX_EFFECT()` on any element you want to apply the effect to.

```javascript
var WINDOW_CENTER_X = window.innerWidth / 2;
var WINDOW_CENTER_Y = window.innerHeight / 2;

window.addEventListener('resize', function () {
    WINDOW_CENTER_X = window.innerWidth / 2;
    WINDOW_CENTER_Y = window.innerHeight / 2;
});

PARALAX_EFFECT(document.getElementById("myElement"), 0.05, 0.01);
```

## Parameters
The `PARALAX_EFFECT` function takes three arguments:

- `ELEMENT` *(HTMLElement)* - The element to apply the parallax effect to.
- `FRICTION` *(Number, optional)* - Determines the smoothness of movement (default: `0.05`).
- `SENSITIVITY` *(Number, optional)* - Controls how much the element moves relative to the cursor (default: `0.01`).

## Functionality
1. The function continuously updates the element's position based on mouse movement.
2. `FRICTION` controls how smoothly the element follows the target position.
3. `SENSITIVITY` adjusts the strength of the movement effect.

## Example
```html
<HTML>
 <HEAD>
  <STYLE>
#test_element
{
    POSITION: ABSOLUTE;
    WIDTH: 100PX;
    HEIGHT: 100PX;
    BACKGROUND-COLOR: RED;
    TOP: 50%;
    LEFT: 50%;
    TRANSFORM: TRANSLATE(-50%, -50%);
}
  </STYLE>
 </HEAD>
 <BODY>
  <DIV ID="test_element"></DIV>
  <SCRIPT TYPE="TEXT/JAVASCRIPT" SRC="PARALAX_EFFECT.js"></SCRIPT>
  <SCRIPT TYPE="TEXT/JAVASCRIPT">
PARALAX_EFFECT(document.getElementById("test_element"), 0.08, 0.02);
// or
PARALAX_EFFECT(document.getElementById("test_element"));
  </SCRIPT>
 </BODY>
</HTML>
```

## License
This project is open-source and available under the MIT License.
