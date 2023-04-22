import { MediaType } from "../models/mediaType.js"
import { Opinion } from "../models/opinion.js"

function index(req, res) {
  MediaType.find(req.query)
  .then(mediaTypes => {
    res.render('mediaTypes/index', {
      mediaTypes: mediaTypes,      
      title: req.query.type,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies/new')
  })
}

function create(req, res){
  MediaType.create(req.body)
  .then(mediaType => {
    res.redirect("/mediaTypes/new")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/mediaTypes")
  })
}

function newMediaType(req, res){
  res.render('mediaTypes/new.ejs', {
    title: "Media",
  })
  .catch(err => {
    console.log(err)
    res.redirect("/mediaTypes")
  })
}

function show(req, res){
  MediaType.findById(req.params.mediaTypeId)
  .populate('opinions')
  .then(mediaType => {
    res.render('mediaTypes/show', {
      mediaType,
      title: mediaType.title
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/mediaTypes")
  })
}




export{
  index,
  create,
  newMediaType as new,
  show,
}