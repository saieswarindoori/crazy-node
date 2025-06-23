import { Request, Response } from "express";
import { Router } from "express";
import { getUser, userList } from "../controllers/useController";
const router = Router();

router.get("/user", getUser);
router.get("/list", userList);
router.get("/list-list", userList);

export default router;
