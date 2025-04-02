import { Router } from "express";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
const router = Router();
import {
  getAllJobs,
  getJob,
  createJob,
  editJob,
  deleteJob,
  showStats,
} from "../controllers/jobController.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

//router routes from / get ? getAllJobs || post ? createJob
router
  .route("/")
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route("/stats").get(showStats);
//router routes from / get ? getJob || patch ? editJob || delete ? deleteJob
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(checkForTestUser, validateIdParam, validateJobInput, editJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
