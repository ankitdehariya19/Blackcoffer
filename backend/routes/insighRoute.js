

import express from "express"
import {getAlldatas,createdata,getdataById} from "./../controllers/InsightController.js";

const router = express.Router();



router.get('/', getAlldatas);
router.post('/', createdata);
router.get('/:id', getdataById);

export default router
