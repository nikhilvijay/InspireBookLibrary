# InspireBookLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

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