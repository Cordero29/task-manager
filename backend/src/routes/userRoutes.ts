import express from 'express';
import {addUserToDB, deleteUser} from "../controllers/userControllers";
import checkJwt from "../middleware/auth/checkJwt";
import ensureUser from "../middleware/auth/ensureUser";

const router = express.Router();

router.post('/add', addUserToDB);
router.delete('/delete', checkJwt, ensureUser, deleteUser);

export default router