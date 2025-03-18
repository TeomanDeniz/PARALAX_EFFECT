# Paralax Effect

<p align="center">
 <img src="https://raw.githubusercontent.com/TeomanDeniz/TeomanDeniz/refs/heads/main/images/repo_projects/paralax_effect/preview.gif">
</p>

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
<!DOCTYPE HTML>
<HTML LANG="EN">
 <HEAD>
  <META charset="UTF-8"/>
  <STYLE>
HTML,
BODY
{
	WIDTH: 100%;
	HEIGHT: 100%;
}

BODY
{
	MARGIN: 0;
	DISPLAY: FLEX;
	JUSTIFY-CONTENT: CENTER;
	BACKGROUND-COLOR: #222;
}

#test_element
{
	WIDTH: 100PX;
	MARGIN: AUTO;
	HEIGHT: 100PX;
	POSITION: RELATIVE;
	TRANSFORM: TRANSLATE(-50%, -50%);
	BACKGROUND-COLOR: RED;
}
  </STYLE>
 </HEAD>
 <BODY>
  <DIV ID="test_element"></DIV>
  <SCRIPT TYPE="TEXT/JAVASCRIPT" SRC="PARALAX_EFFECT.js"></SCRIPT>
  <SCRIPT TYPE="TEXT/JAVASCRIPT">
PARALAX_EFFECT(document.getElementById("test_element"));
// or
PARALAX_EFFECT(document.getElementById("test_element"), 0.08, 0.06);
  </SCRIPT>
 </BODY>
</HTML>
```

## License
This project is open-source and available under the MIT License.
