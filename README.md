Sketchpad
========
by Tom Tillistrand

### Overview

This website contains a virtual "sketchpad" with an adjustable grid. By default, the grid is composed of a 16x16 set of small boxes, each of which activate when you hover your mouse over them. The effect that's activated depends on which "Hover Effect" you have selected.

### Resetting the Grid

Pressing "Reset Grid" allows you to resize the dimensions of the grid. The higher the dimensions, the smaller the individual box size and greater fine grain control you have.

After pressing "Reset Grid", you'll be prompted to input the size of the grid you want to work with. Since the grid is a square, you only need to enter one of the dimensions. For example, if you wanted to work with a grid of 40x40 boxes, you would enter "40" into the input.

### Hover Effects

There are four different hover effects.

1. Standard - Each box turns blue.
2. Random Colors - Each box turns a semi-random color.
3. Trail - Each box fades in to black and fades out to white.
4. Shading - Each box increases in opacity by 10%.

The selected effect will activate once "Reset Grid" is pressed.

### Build Notes

This site was created as an exercise in JavaScript and jQuery DOM manipulation. Each individual box within the grid is generated in JavaScript using jQuery. The ability to resize the dimensions of the grid within the same confines, and to change the effects on mouse over, also required JavaScript and jQuery.