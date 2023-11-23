import express from 'express'
import { GET_ALL, GET_BY_ID, NEW, PATCH } from '../controladores/productos.js'

const router = express.Router()


router.post('/nuevo', NEW)
router.get('/', GET_ALL)
router.get('/:id', GET_BY_ID)
router.patch('/:id', PATCH)




export default router;