import  express from "express";
const router = express.Router();
import userController from "../controller/userController.js";
import upload from "../middlewares/uploadfiles.js";

router.use('/resume', upload.fields([
    { name: "pimage", maxCount: 1 },
    { name: "rdoc", maxCount: 1 }
  ])
)


router.post('/resume', userController.createProfile);

export default router;