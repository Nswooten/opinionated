import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page' })
})

router.put('/:mediaTypeId/opinions/:opinionId', isLoggedIn, profilesCtrl.updateOpinion)

router.delete('/:mediaTypeId/opinions/:opinionId', isLoggedIn, profilesCtrl.deleteOpinion)

export {
  router
}
