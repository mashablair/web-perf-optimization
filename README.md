Website Performance Optimization portfolio project

The challenge: optimize this very troublesome online portfolio in terms of critical rendering path and FPS based on techniques we learned in our Udacity classes: WEBSITE PERFORMANCE OPTIMIZATION and BROWSER RENDERING OPTIMIZATION.

Part 1: Optimize PageSpeed Insights score for index.html

The Goal: a Google PageSpeed Insights score of 90 or higher for mobile and desktop.

The live page can be viewed at https://mashablair.github.io/web-perf-optimization/. Copy the URL and paste it in the analyze field at PageSpeed Insights (https://developers.google.com/speed/pagespeed/insights/) to view the scores.

Optimizations:

Using Grunt, I resized and compressed all images
Using Grunt, I minified my JS code of perfmatters.js and linked it to index.html
Inlined all css styles to defer loading the external css files
Inlined my google font by pasting only the relevant fonts in the head of index.html
Asynchronous loading of Javascript files by adding <async>

Part 2: Optimize Frames per Second in pizza.html

The Goal: Page renders at 60 frames per second when scrolling, the pizza size slider resizes pizza images in under 5ms.

The live page can be viewed at https://mashablair.github.io/web-perf-optimization/ By using Chrome's devTools to record a timeline, trace the scrolling and changing the pizza sizes with the slider. The trace will show the frames per second for scrolling. The console will also display information about the frame generation rates.

Optimizations:

Changes made in views/js/main.js.

1. Replaced all `querySelectorAll` with `getElementsByClassName` for a more specific and time-saving query
2. Refactored the function changePizzaSizes following Cameron's advice in Browser Rendering Optimization class. 
3. Refactored the function updatePositions by taking the var scrollPosition out of the loop, changed var phase using the var scrollPosition (see comments in the main.js).  
4. For the function addEventListener (lines 522-547), created var movingPizzas and put it outside the loop, changed i < 200 to i < 12 (pizzas actually seen on the screen).  
