import { Router } from 'express'
import * as mediaTypesCtrl from '../controllers/mediaTypes.js'

const router = Router()

router.get('/', mediaTypesCtrl.index)
router.get('/new', mediaTypesCtrl.new)
router.get('/:mediaTypeId', mediaTypesCtrl.show) 



router.post("/", mediaTypesCtrl.create)

export {
  router
}