# React Portfolio

Deployed link: (http://kylebetlach.surge.sh/)

<img width="1098" alt="portfolio" src="https://user-images.githubusercontent.com/53587397/75060308-36dc5300-54a4-11ea-874f-f05183e104c2.png">

## Introduction

This portfolio is a conversion of my existing professional portfolio into a React.js format. 

There is a splash page the user lands on, and they can choose to view the About Me, Portfolio Gallery, or Contact sections by a simple click of the corresponding button. 

The About Me section is aptly named, and the user can read basic information about myself. In the Gallery, the user can see screenshots of selected coding projects completed by me, with links to the deployed applications and the GitHub code repositories. In the Contact section, the user can see a list of ways to get in touch with me.

## Technologies

- React.js
- HTML5 / CSS / JavaScript
- Bootstrap
- Font Awesome
- Google Fonts
- Animate.CSS

## Launch

Nothing too fancy! Simply open it up with your favorite web browser to view it!

## Status

The portfolio, for now, is complete. The idea is that it will evolve over time as more projects are completed and ready to be staged in the gallery.

Check back in the future to see what projects I've added to keep up with what I'm doing!

## Sources and Inspiration

I really enjoy updating this page. It's fun and satsifying to show off things I've worked on, and as someone who really likes design, it's good practice to play with the portfolio and get it to a place I'm happy with.

Converting my existing portfolio into React.js was also good practice, forcing me into thinking about modularizing different components and then connecting them all via routing. I had to think through excluding the Header component from the splash Index page because having two sets of the same buttons would be redundant.
   
Here's my current App.js setup:

![code](https://user-images.githubusercontent.com/53587397/75060328-40fe5180-54a4-11ea-861c-98608c723ffe.png)

The Header is excluded here, and is instead imported on the About Me, Gallery, and Contact sections as a workaround. React.js helps streamline a lot of things, but has definitely forced me into re-thinking what was previously quite simple.
