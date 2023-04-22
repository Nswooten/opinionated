import { Router } from 'express'
import * as mediaTypesCtrl from '../controllers/mediaTypes.js'

const router = Router()

router.get('/', mediaTypesCtrl.index)

export {
  router
}