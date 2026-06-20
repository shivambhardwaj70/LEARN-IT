
import express from "express";
import { addLecture, createCourse, deleteCourse, deleteLecture, getAllCourses, getCourseLectures } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import { isAuthenticated, authorizeAdmin, authorizeSubscribers } from "../middlewares/auth.js"



// abhay singh singh
const router = express.Router();

// router.get("/courses",getAllCourses);
router.route("/courses").get(getAllCourses);
router.route("/createcourse").post(isAuthenticated, authorizeSubscribers, singleUpload, createCourse);
router.route("/course/:id").get(isAuthenticated, authorizeAdmin, getCourseLectures)
                           .post(isAuthenticated,authorizeAdmin, singleUpload, addLecture)
                           .delete(isAuthenticated,authorizeAdmin,deleteCourse);

router.route("/lecture").delete(isAuthenticated,authorizeAdmin,deleteLecture);

export default router;