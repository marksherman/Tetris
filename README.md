# Tetris #

_**Statement**_

Our project is a simplified version of Tetris coded with javaScript. It was interesting to see how complex it is to code a seemingly simple game and to learn how to use abstraction to make the code easier to read and easier to work with. It was also cool to use the collide.2D library in order to detect collisions between the tetrominos. The ability to take advantage of a useful tool someone else has already figured out is a great part of coding.

_**Original Goal**_

The original goal of this project was to create a fully funcitonal game of Tetris minus the ability to keep score. This entailed coding the game so that random tetrominos would slowly fall down the screen, could be moved left and right and roated, and stop when they hit the bottom or another object. Once a piece stopped another one should fall and the process would be repeated. When a whole row fills up it should disappear and when the stack reaches the top of the screen the game should end. The game would also be fully colored and have sound effects.

_**Revised Goals**_

Soon after beginning this project, we realized our origingal goals were a little out of reach so we revised our goals to the following: A random tetromino should still fall, be able to move and rotate, and stop when it hits the bottom or another tetromino, but we decided not to have a row disappear once it is full. The pieces will instead stack up and the game will end when they reach the top of the screen. We also decided not to have sound effects since it does not really add to the overall effect of the game and time did not allow for it.

_**What We Accomplished**_

We were able to reach all of our revised goals. As mentioned, we do not have it programmed to delete a row once it is full and the game does not have sound effects.

_**Credits**_

Patrick created the original code for all of the tetrominos. These were originally functions that gave each tetromino their unique shape and color. He also figured out how to have a new tetromino automatically start falling once the previous one stopped.
Emma Refactored the code so that each tetromino was stored as an object within and array and each of these objects had methods that allowed the shapes to move and rotate. Note that this was once again refactored with a lot of help from Prof. Sherman to create a class for the tetrominos. She also determined how to get the pieces to stop at the bottom.
The rest isn't really discernable, we each spent a lot of time trying to figure out different pieces of the overall code. 
