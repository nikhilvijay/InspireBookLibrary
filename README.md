# InspireBookLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9. This project uses `Angular Material` version 16.2.11 and `Bootstrap` version 5.3.2.

## Setup Project

You can set up this project by running `npm install` on Windows. If you are using macOS, use `sudo npm install`.

Note that for macOS, you should run `sudo chmod -R 775 InspireBookLibrary`.

In some cases, you may also need to add Angular Material (`ng add @angular/material`) and Bootstrap (`npm install bootstrap jquery popper.js`) manually to run or build the application. In most cases, this is not required. This should be done only if you face issues in running or building the application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the development version of the project. For a production build, use `ng build --configuration=production`. The build artifacts will be stored in the `dist/` directory.

## Task Details

The objective of this exercise is to build a small javascript-based web application using javascript, html and css. You should approach this exercise with the same professionalism and attention to detail as you would for a request from a client.
The application should retrieve json-formatted data using the following endpoint:

[https://s3.amazonaws.com/api-fun/books.json](https://s3.amazonaws.com/api-fun/books.json)

The application requirements are as follows:

- Display the author's name, birthday and place of birth followed by a list of books.
- On a desktop view, the list of books should be displayed in two columns.
- On a mobile-size browser, the list of books should be displayed in a single column.
- Each book entry in the list should contain the image, the title linked to the purchase URL, and the date published.
- Provide a sort toggle that gives the user ability to sort data in two ways: alphabetically by title or chronological by publish date.
- Provide functionality for at least one of the following (Implementing this action only needs to modify data in the browser, not the backend storage). All the below features are required:
    - Add a book with an image
    - Delete a book
    - Modify a book

You may use whatever javascript/css/html libraries, tools and frameworks that you are most comfortable with. You may also use whatever server and build tools you prefer.

Please deliver the following items:

1. Your source code.

2. Build instructions. This should run on any webserver, but we will need to know if there are any tools or scripts needed to build your application.

3. Your built/compressed application files (Required), and a link to your running application if you are able to deploy it on a free service (Not Required).

4. Provide a short reason as to why you chose to build the application in your selected framework.

Your submission will be judged on the following criteria:

- Requirements as stated above are all met
- Visual quality
- Code quality, examples are:
    - Comments are provided to explain implementation details
    - There is no redundant or duplicated code
    - There is no duplication of data as stored in the application
    - Correct usage of javascript methods and/or rxjs operators
    - Code is self-reviewed and optimized
- Application responsiveness
    - Mobile requirements as stated above are met
    - Application UI responds well when resized on a browser

If you need more time to complete the submission please let us know. You will not be able to move forward in our recruitment process if your submission does not meet our judging criteria.

Can read more about the task from [here] (https://github.com/Inspire-com/candidate-homework/blob/main/FE_Engineer.md)