import { MediaType } from "../models/mediaType.js"
import { Opinion } from "../models/opinion.js"
import { Profile } from "../models/profile.js"


function updateOpinion(res, req){
  console.log(req.params)
  
  MediaType.findById(req.params.mediaTypeId)
  .then(mediaType => {
    const opinion = mediaType.opinions.id(req.params.opinionId)
    if (opinion.owner.equals(req.user.profile._id)) {
      opinion.set(req.body)
      mediaType.save()
      .then(() => {
        res.redirect('/')
      })
      .catch(err => {
        console.log(err)
        res.redirect('/')
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}



export{
  updateOpinion
}