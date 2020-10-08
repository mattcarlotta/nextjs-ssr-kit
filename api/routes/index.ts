import { Router } from "express";
import {
  createUser,
  deleteUser,
  dropDB,
  getUsers,
  seedDB,
  updateUser,
  viewUser,
} from "~controllers/users";

const router = Router();

router.post("/users/create", createUser);

router.get("/users", getUsers);

router.post("/users/seed", seedDB);

router.post("/users/drop", dropDB);

router.get("/users/view/:id", viewUser);

router.put("/users/update/:id", updateUser);

router.delete("/users/delete/:id", deleteUser);

export default router;
