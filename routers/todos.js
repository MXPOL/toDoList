const sanitizeHtml = require('sanitize-html');
const router = require('express').Router();
db = require("../models") ;


router.route("/")
    .get(async (req,res)=>{
        const todos = await db.Todo.find({});
        res.json(todos.map(todo => todo.toJSON()));
        })
    .post((req,res,next)=>{
        const body = req.body

        try{
            if (sanitizeHtml(body.name).length === 0 ){
                throw 'todo length cant be zero!';
            }
            const newTodo = new db.Todo ({
                name : sanitizeHtml(body.name),
            })
            newTodo.save()
                .then(newtodo =>{
                    res.status(201).json(newTodo);
                })
        }catch(error){
            next(error);
        } 
    })

router.route("/:id")
    .get((req,res)=>{
        const {id} = req.params;
        db.Todo.findById(id).then(todo =>{
            res.json(todo);
        });
    })    
    .patch((req,res)=>{
        const {id} = req.params;
        db.Todo.findById(id).then(todo =>{
            const {completed } = todo;
            db.Todo.findByIdAndUpdate(id,{completed : !completed}, { new: true } )
            .then(updatedTodo =>res.json(updatedTodo))
        });
    })
    .delete((req,res)=>{
        const { id }= req.params;
        db.Todo.findByIdAndRemove(id)
            .then(removed => res.status(204).end())
            .catch(error => console.error(error))
    });


module.exports = router ;