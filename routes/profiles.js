import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page' })
})

router.put('/:mediaTypeId/opinions/:opinionId', profilesCtrl.updateOpinion)
router.delete('/:mediaTypeId/opinions/:opinionId', profilesCtrl.deleteOpinion)
export {
  router
}
