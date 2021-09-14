# Intelygenz. Coding test.

## RSS Reader

This app display all news retrieved by an external RSS file. The app is composed by 2 basic screens:

### Main Screen

This screen displays the news list with title, description and an small descriptive image.

### Details Screen

This is screen display an specific completed information. User can navigates there clicking on its respective info summary in Main screen.

## External libraries

This section tries to explain why I decided to use some external libraries.
### React Router

I decided to use the most used routing library for adding routing to this app.
### Redux

I decided to use the most used store management library for sharing info between screen in this app.

### XML2JS

I decided to use this popular library to make easier the XML response from RSS call.


## Commands

- Run app:  `yarn start`
- Run tests:  `yarn test`



## Additional non-required tasks

- Create Readme
- Add loading and error status
- Add testing and snapshot libraries and make some simple tests
- Add searching feature


## Design patterns

### Stateless components
I used this pattern to implement UI components with no logic.
i.e. Header

### Conditional rendering
I used this pattern to show or hide components depending of component state.
i.e. Loading feature in main screen

### Render props
To communicate parent with children components.
i.e Every component placed in each view
### Event emission
To propagate changes from children to parent component.
i.e Click events from stateless components

### React hooks
I prefered to use functional components and implement hooks pattern to handle state and lifecycle
i.e practically every component, especially non stateless components

### Global state management
I added redux to share state between components far in DOM tree.
i.e to communicate news info from one screen to the other