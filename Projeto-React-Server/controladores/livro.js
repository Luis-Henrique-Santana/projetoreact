const {getLivroPorId, insereLivro, getTodosLivros, modificaLivro,deletarLivro} = require("../servicos/livro.js")

function getLivros(req, res) {
    try{
        const livros = getTodosLivros()
        res.send(livros)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try{
        const id = req.params.id
        const livro = getLivroPorId(id)

        if(id && Number(id)){
            res.send(livro)
        }
        else{
            res.status(422)
            res.send("id invalido")
        }
        
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req,res) {
    try{
        const livroNovo = req.body
        if(req.body.nome){
             insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido meu bro")
        }
        else{
            res.status(422)
            res.send("id invalido")
        }
       
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    } 
}

function patchLivro(req,res) {
    try{
        const id = req.params.id
        const body = req.body

        if(id && Number(id)){
            modificaLivro(body, id)
            res.send("item Modificado")
        }
        else{
            res.status(422)
            res.send("id invalido")
        }

        
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    } 
}

function deleteLivro(req,res) {
    try{
        const id = req.params.id

        if(id && Number(id)){
            deletarLivro(id)
            res.send("livro deletado")
        }
        else{
            res.status(422)
            res.send("id invalido")
        }
        
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    } 
}


module.exports ={
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}