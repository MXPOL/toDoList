
const mongoose = require('mongoose');
const supertest = require ('supertest');
const config = require('../utils/config');
const app = require('../app');
const db =require('../models');
const helper = require('./test_helper');

const api = supertest(app);

beforeAll(async () => {
    await db.Todo.deleteMany({});
    helper.initialTodos.forEach(async todo =>{
        let newTodo = new db.Todo(todo);
        await newTodo.save();
    });
});


test('todos are return as json', async ()=>{
    await api
        .get('/api/todo')
        .expect(200)
        .expect('Content-Type', /application\/json/);
});

test('all todos are returned',async () => {
    const response = await api.get('/api/todo')
    expect(response.body.length).toBe(helper.initialTodos.length)
});

test('a sepcific todo is returned', async () => {
    const response = await api.get('/api/todo')
    const content = response.body.map(res => res.name);
    expect(content).toContain(helper.initialTodos[1].name);
});
 
afterAll(async () => {
    await mongoose.connection.close()
  })

