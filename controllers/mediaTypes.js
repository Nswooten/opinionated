import { MediaType } from "../models/mediaType.js"
import { Opinion } from "../models/opinion.js"

function index(req, res) {
  console.log(req.query.type)
  
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





export{
  index,
}