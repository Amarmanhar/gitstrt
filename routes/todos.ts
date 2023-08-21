import { Router } from "express";
import { Todos } from "../models/todos";

const router = Router();
let todos :Todos[]  = [];

router.get('/' ,(req, res, next) =>{
   res.status(200).json({todo: todos});
})

router.post('todos', (req,res)=>{
    const newTodos : Todos = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodos);
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