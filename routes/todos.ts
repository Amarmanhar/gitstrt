import { Params } from './../node_modules/@types/express-serve-static-core/index.d';
import { Router } from "express";
import { Todos } from "../models/todos";
import { type } from "os";

const router = Router();
let todos :Todos[]  = [];

type reqBody = {text: string};
type params = {id: string};

router.get('/' ,(req, res, next) =>{
   res.status(200).json({todo: todos});
})

router.post('/todos', (req,res)=>{

    const body = req.body as reqBody;

     // Check if the 'text' property exists in the request body
     const newTodos: Todos = {
        id: new Date().toISOString(),
        text: body.text, // Corrected from req.body.text
    };
    todos.push(newTodos);

    // Send a response indicating success
    res.status(201).json({ message: "Todo added successfully", todo: newTodos });
})

router.put('/todo/:todoId', (req,res)=>{
    
    const todosId = req.params.todoId;
    const todoIndex = todos.findIndex((todoItems) =>{
        todoItems.id === todosId ;
    })
    if(todoIndex >= 0){
      todos[todoIndex] = {id: todos[todoIndex].id, text:req.body.text };
      return res.status(200).json({message: "updated", todo: todos});
    }

    res.status(404).json({message: "not found index"});

})

router.delete('/todo/:todoId', (req, res)=>{
      todos = todos.filter((todoItem ) =>{
        todoItem.id !== req.params.todoId;
        res.status(200).json({mesage: "deletd", todo:todos});

      })
})

export default  router;
