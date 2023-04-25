import { Router } from 'express'
import * as mediaTypesCtrl from '../controllers/mediaTypes.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, mediaTypesCtrl.index)
router.get('/new', isLoggedIn, mediaTypesCtrl.new)
router.get('/:mediaTypeId', isLoggedIn, mediaTypesCtrl.show)

router.post('/:mediaTypeId/opinions', isLoggedIn, mediaTypesCtrl.addOpinion)



router.post("/", isLoggedIn, mediaTypesCtrl.create)

export {
  router
}