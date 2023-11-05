// This is the Angular environment configuration file for the production environment.
// It specifies production-related settings and values used throughout the application.
// As we don't have seperate production and local api service both production and local environment configuration will be same
export const environment = {
    production: false, // Set to true to indicate that the application is in production mode.
    apiUrl: 'https://s3.amazonaws.com/api-fun/books.json', // The URL of the production API endpoint.
    toastTime: 3000, // Duration in milliseconds. Toast visibilty time.
    toastButtonText: "Hide" // Text for toast close button
}  