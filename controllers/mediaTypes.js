import { MediaType } from "../models/mediaType.js"
import { Opinion } from "../models/opinion.js"
import { Profile } from "../models/profile.js"

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
    res.redirect('/mediaTypes/new')
  })
}

function create(req, res){
  MediaType.create(req.body)
  .then(mediaType => {
    res.redirect(`/mediaTypes?type=${req.body.type}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect("/mediaTypes")
  })
}

function newMediaType(req, res){
  res.render('mediaTypes/new.ejs', {
    title: req.query.type
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
      title: mediaType.title,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/mediaTypes")
  })
}

function addOpinion(req, res){
  req.body.owner = req.user.profile._id
  Opinion.create(req.body)
  .then((opinion) => {
    MediaType.findById(req.params.mediaTypeId)
    .then(mediaType => {
      mediaType.opinions.push(opinion)
      Profile.findById(req.user.profile._id)
      .then(profile => {
        profile.opinions.push(opinion)
        profile.save()
        mediaType.save()
        .then(() => {
          res.redirect(`/mediaTypes/${mediaType._id}`)
          console.log(opinion)
          console.log(req.user.profile.opinions)
        })
        .catch(err => {
          console.log(err)
          res.redirect('/mediaTypes')
        })
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/mediaTypes')
  })
}
  



export{
  index,
  create,
  newMediaType as new,
  show,
  addOpinion,
}