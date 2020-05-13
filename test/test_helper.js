const Todo = require('../models/todo');
const db =require('../models');


const initialTodos = [
    {
        name : 'test1'
    },
    {
        name : 'test2'
    },
    {
        name : 'test3'
    }
]

const notValidTodo = {
    name : "<img>"
};

const todoInDb = async () =>{
    const todos =  await db.Todo.find();
    return todos.map(todo => todo.toJSON());
}
module.exports = {
    initialTodos,
    notValidTodo,
    todoInDb,
}