# Unit 11 Express Homework: Note Taker

## Description

This application can be used to write, save, and delete notes. This NodeJS application uses an Express backend to save and retrieve note data.

## installation

Node is required to run the application. To install the app run the following in the terminal:

* `npm install` to download node modules
* `node server.js` to start the server and run the application

## This project has the following features:
* An Index JS document
  * This provides the logic for the client side (front end) of the app.
* A Server JS document
  * This creates the entry point and routes to LocalHost
* Two HTML documents
  * Index.html - client landing page
  * Notes.html - client interactive page for saved notes
* A CSS document
  * Provides styles for front end
* DB Folder
  * Contains a .JSON file that acts as a supplemental database
* Package.JSON
JSON and NPM packages and dependencies

## Psuedo code:
1 - GET /notes - Should return the notes.html file.
2 - GET * - Should return the index.html file
The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.
The following API routes should be created:
3 - GET /api/notes - Should read the db.json file and return all saved notes as JSON.
4 - POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
5 - DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

## Features:
* Two JS Pages
 * Index.js
 * Server.js
* Two JSON packages
* Node Modules Folder
* TWO HTML Pages
* One CSS Page
* One JSON file
