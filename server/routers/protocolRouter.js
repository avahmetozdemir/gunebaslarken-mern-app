import express from 'express'

import {getAllProtocols,getProtocol} from '../controllers/protocolController.js'

const router = express.Router()


router.get('/', getAllProtocols)
router.get('/:id', getProtocol)
export default router