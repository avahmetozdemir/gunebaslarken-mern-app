import express from 'express'

import {getAllImpOfDay,getImpOfDay} from '../controllers/impOfDayController.js'

const router = express.Router()


router.get('/', getAllImpOfDay)
router.get('/:id', getImpOfDay)

export default router