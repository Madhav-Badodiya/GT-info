This app is a basic implementation of a React application that fetches user data from an API and displays it in a grid layout.

It consists of three components:

Navbar: This component is a header component that contains a button labeled "Get Users" to trigger the fetch of user data.

CardGrid: This component is responsible for rendering the grid of user cards, which displays the user data fetched from the API.

App: This component is the root component that manages the state of the application, including the loading state and the user data. It also triggers the fetch of user data using the fetchUsers function when the "Get Users" button is clicked in the Navbar component.

The app makes an API call to the given API to retrieve the user data, and it uses the axios library to handle the HTTP requests.

A loading spinner is displayed while the user data is being fetched from the API.

This application is built using React and styled with SASS CSS. The components are structured in separate files to ensure maintainability and readability of the code.
