import express from 'express'
import {getAllNotes,getNote,addNote,delNote} from './db.mjs';
const app = express()
const PORT=3000;
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.get('/', (req, res) => {
  
  res.render('index.ejs',{string:"hi"})
})


app.get('/notes',(req,res)=>{
  const search=req.query.search
  const notes=getAllNotes(search)
  
  res.render("notes.ejs",{notes,})
})
app.get('/notes/:id',(req,res)=>{
  const id= +req.params.id
  
  const note=getNote(id)
  if(note)
    res.render("singleNote.ejs",{note,})
  else
    res.render("errMessage.ejs")
})
app.get('/createNote',(req,res)=>{
  res.render("createNote.ejs")
})

app.post('/notes',(req,res)=>{
  const data=req.body
  
  addNote(data)
  res.redirect("/notes")
})
app.post('/notes/:id/delete',(req,res)=>{
  const id= +req.params.id;
  delNote(id);
  res.redirect("/notes")

})
app.use(express.static("public"))
app.listen(PORT,()=>{console.log(`runnin @ http://localhost:${PORT}`)})