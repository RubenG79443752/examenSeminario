import mongoose from "../connection/connect.js";
import ToDoModel from "../models/ToDoModel.js";
var ToDoControler = new ToDoModel();
var TODO = new ToDoModel();
class ToDoController {
  constructor() {}
  async createToDo(request, response) {
    var data = request.body;
    var result = await TODO.createToDo(data);
    response.status(200).json({ serverResponse: result });
    
  }

  async deleteToDo(request, response) {
    var id = request.params.id;
    var result = await TODO.deleteToDo(id);
    response.status(200).json({ serverResponse: result });
  }
  async updateToDo(request, response) {
    var id = request.params.id;
    var data = request.body;
    var result = await TODO.updateToDo(id, data);
    response.status(200).json(result);
  }
  async getToDo(req, res) {
  
    var key = null;
    var keysearch = null;
    if (req.params.key != null) {
      key = req.params.key;
      keysearch = {};
      keysearch["name"] = key;
    }

    console.log(keysearch);
    var result = await TODO.getToDo(keysearch);
    console.log("----------------todo CONTROLLER--------------------------");
    console.log(result);
    console.log("----------------END CONTROLLER--------------------------");
    res.status(200).json({ serverResponse: result });
  
  }
 
}
export default ToDoController;