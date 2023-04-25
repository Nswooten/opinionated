import { MediaType } from "../models/mediaType.js"
import { Opinion } from "../models/opinion.js"
import { Profile } from "../models/profile.js"


function updateOpinion(req, res){
  Opinion.findByIdAndUpdate(
    req.params.opinionId,
    req.body,
    {new: true}
  ).then((opinion) => {
    console.log(opinion)
    res.redirect('/')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteOpinion(req,res){
  Opinion.findByIdAndDelete(req.params.opinionId)
  .then((opinion) => {
    console.log(opinion)
    res.redirect('/')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}



export{
  updateOpinion,
  deleteOpinion,
}