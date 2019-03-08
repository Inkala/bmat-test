This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About this test

To see this test working, clone the repository, type `npm install` from the root folderand then type `npm start`.

### Technologies used

For this test I chose to use [React](https://reactjs.org/) with JSX because it is the JavaScript tool in which I have more knowledge and experience, and makes it realy easy to write markup that works well with the functionalities.

### The test

The page has basically 3 main components. The header that only shows the user icon, the side menu that toggles between the 3 components and main area that shows the conten.

The only content component created was the one that the mock showed. For the other two it only displays a text.

The menu was created using react-router and the calendar dropdown was created with react-dropdown that takes care of the display.

The mock was also showing some green ticks over some of the paper plane icon and I assumed that it was a confirmation that something was sent. The green icons appear when you click on the "send" icon.

### Success

All the functionalities that were added to the app are working as expected. I also decided to make the search bar work to filter the programs by name, even though the specifications said that it wasn't required, because I implemented something very similar a few weeks ago and it was still fresh.

### Challenges
I am not very familiar with WAI ARIA and only added the basic states and properties, but I don't really know how to navigate on a page with screen readers without the mouse to directly click on them, so I am not sure if they work as expected.

### What to improve
There is always things that you want to improve when developing something. For example I want to add more tests, not only for learning purposes but to reduce the time spent checking the existing functionalities while making changes in the app.

I would have liked to include either Redux or React Context but I did not feel confident enough about getting it to work on the time I had estimated.

### Additional notes

The other two parts, the logic test and the programming skills test are sent separately.
