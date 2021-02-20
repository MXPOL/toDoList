# toDoList

Built with JS, NodeJS , Express and Mongoose 

# Access to the UI

visit ===> https://todolistmxpol.herokuapp.com/

# TODOLIST API

send GET/POST/PATCH request to `https://todolistmxpol.herokuapp.com/api/todo`

## Available Scripts

### `npm start`

Runs the app in prodaction mode
Open [http://localhost:3030](http://localhost:3030) to view it in the browser.
Before run this script you should create a env file with MONGODB_URL 

### `npm start-dev`

Runs the app in dev mode, also here you must attach an env file with MONGODB_URL 
Open [http://localhost:3030](http://localhost:3030) to view it in the browser.

### `npm start-dev`

Runs the test on the server side
attach an env file with TEST_MONGODB_URI before running this script


###### Result for GET ./api/todos:

```
[
  {
    "completed": false,
    "_id": "5eb9e8326a36698371bebe01",
    "name": "Buy Milk",
    "created_at": "2020-05-12T00:05:06.398Z",
    "__v": 0
  },
  {
    "completed": true,
    "_id": "5eb9e9dfcd08500017f9878d",
    "name": "To star this project :)",
    "created_at": "2020-05-13T17:23:26.140Z",
    "__v": 0
  }
]
```

###### Result for GET ./api/todos/:id :

``` 
  {
    "completed": true,
    "_id": "5eb9e9dfcd08500017f9878d",
    "name": "To star this project :)",
    "created_at": "2020-05-13T17:23:26.140Z",
    "__v": 0
  }
```
