const express=require('express'); //instancia do express
const router=express.Router();//modulariza
const db=require('../db');//conecta com banco de dados
/*=criar as rotas=*/
/*cadastrar usuário*/
//POST -> insert 
router.post('/cadastrar',(req,res)=>{//caminho> /api/users
    const {nome,email}=req.body;
    db.query('insert into users (nome,email) values (?,?)', [nome,email], 
        (err,result)=>{
            if(err)return res.status(500).send(err);
            res.status(201).json({id:result.insertId,nome,email});
        }
    );
})

/*editar usuário*/
/*listar usuário*/
router.get('/listar',(req,res)=>{
    db.query('select*from users',(err,results)=>{
        if(err) return res.status(500).send(err);
        res.json(results);
    })
})
/*excluir usuário*/
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    db.query('delete from users where id=?',[id],
        (err,result)=>{
            if(err)return res.status(500).send(err);
            res.status(204);
        }
    )
})
module.exports=router;