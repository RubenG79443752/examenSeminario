import express from "express";
import IndexController from "../controller/indexController.js";
import UserController from "../controller/userController.js";
import RolesController from "../controller/rolesContoller.js";
import TodoController from "../controller/ToDoController.js"
import JsonWebTokenManagement from "../middleware/JsonWebTokenManagement.js";

var router = express.Router();
var indexControler = new IndexController();
var userController = new UserController();
var rolesController = new RolesController();
var ToDoController = new TodoController();
var jsonwebtokenmanagement = new JsonWebTokenManagement();
/* GET home page. */
/**
 * Endpoints de los usuarios
 * // Servicios de los usuarios
 */
router.get("/", indexControler.index);
router.post("/login", indexControler.login);
/**
 * SERVICIO PROTEGIDO
 */
router.get("/user", userController.getUsers);
/* FIN DE SERVICIO PROTEGIDO */
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
router.post("/addRol", userController.addRol);
router.post("/uploadAvatar/:id", userController.uploadAvatar);
router.get("/showavatar/:name", userController.getAvatar);
/* GET home page. */
/**
 * Endpoints de los usuarios
 * // Servicios de los ROLES
 */
router.post("/roles", rolesController.createRol);
router.get("/roles", rolesController.getRol);
router.get("/roles/:key", rolesController.getRol);
router.put("/roles/:id", rolesController.updateRol);
router.delete("/roles/:id", rolesController.deleteRol);

router.get("/ToDoS", ToDoController.getToDo);
router.post("/ToDoS", ToDoController.createToDo);
router.get("/ToDoS/:id", ToDoController.getToDo);
router.put("/ToDoS/:id", ToDoController.updateToDo);
router.delete("/ToDoS/:id", ToDoController.deleteToDo);

/* 
Implemente 
*/

export default router;
