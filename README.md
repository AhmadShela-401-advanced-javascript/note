# Notes Application

## Problem Domain : 

We need to create a CLI app using node js connected to mango database
that takes in a note from the user and store it in the database

## app features

the app will contain 4 featurers

* Add new note with category `node index.js --Add 'my note' --cat 'work'`
* List all my notes using `node index.js --list`
* list all my notes by category `node index.js --list work`
* delete note by id `node index.js --delete 'NoteId'`

## solution

first we create the index file that runs at the beginning of the program
then we create the input module that handels all the users input
the input module is a class that contain tow 3 properties method and note and category
and also 3 other methods that check if the user is adding a valid input
after that we export the module class to the index where we can create new instance
of the input class and pass it to the 'Notes constructor'
note is a class that contain of main method which is the execute method
this method will be the router to the other methods that deals with the database
like the add and get and delete methods
at the top of the Notes module we should require the data collection which is a class that 
contains the `CURD` methods whech also require to have the schema of the mongo DB document

## UML Diagram

![UML][assets/UML.PNG]
