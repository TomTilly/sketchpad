Sketchpad
========
by Tom Tillistrand

### Overview

This website contains a virtual sketchpad. By default, the sketchpad is composed of a 16x16 set of small boxes, each of which change color when you hover your mouse over them. The effect and color depends on which "Drawing Style" you have selected.

### Resetting the sketchpad

Pressing "Reset" allows you to resize the resolution of the sketchpad. The higher the resolution, the smaller the individual box size and greater fine grain control you have.

After pressing "Reset", you'll be prompted to input the resolution you'd like to work with. Since the sketchpad is a square, you only need to enter one of the dimensions. For example, for a sketchpad that's 40 x 40, you would enter "40" into the input.

### Hover Effects

There are four different hover effects.

1. Standard - Each box turns blue.
2. Random Colors - Each box turns a semi-random color.
3. Trail - Each box fades in to black and fades out to white.
4. Shading - Each box increases in opacity by 10%.

The selected effect will activate once "Reset" is pressed.

### Build Notes

This site was created as an exercise in JavaScript and jQuery DOM manipulation. Each individual box within the sketchpad is generated in JavaScript using jQuery. The ability to resize the resolution of the sketchpad within the same confines, and to change the effects on mouse over, also required JavaScript and jQuery.

### Credits

Created by Tom Tillistrand. Contact at ny.prosource@gmail.com