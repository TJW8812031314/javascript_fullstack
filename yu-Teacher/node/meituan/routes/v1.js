// 输出一个路由对象
import express from 'express'
import Cities from '../controller/vi/cities';// 中间件
const router = express.Router();
// mvc controller
router.get('/suggestion', Cities.suggestion)

export default router;