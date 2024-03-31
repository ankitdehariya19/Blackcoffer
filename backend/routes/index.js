
import express from "express"
import InsightRoute from './insighRoute.js'

const router = express.Router();

router.use('/dashboard', InsightRoute);

export default router
