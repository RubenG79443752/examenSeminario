import mongoose from "../connection/connect.js";
import modelenum from "../utils/enumModel.js";

class ToDoModel {
    constructor() {
      var Schema = mongoose.Schema;
      this.todoSchema = new Schema({
        name:{ type:String, required: true },
  
        description: String ,
  
        date: {
          type: Date,
          default: Date.now,
        },
  
        hour: String ,
  
        done: {
          type: Boolean,
          default: false,
        },
      });
      if (modelenum["todo_T"] == null) {
        this.mymodel = mongoose.model("todo_T", this.todoSchema);
        modelenum["todo_T"] = this.mymodel;
      } else {
        this.mymodel = modelenum["todo_T"];
      }
    }
    getModel() {
      return this.mymodel;
    }
    getSchema() {
      return this.todoSchema;
    }
   createToDo(ToDoData) {
        var ToDo_N = new this.mymodel(ToDoData);
        var ToDo_E = ToDo_N.validateSync();
        return new Promise((resolve, reject) => {
          if (ToDo_E) {
            console.log("ERROR: +++++Nombre Obligatorio ++++++");
            resolve(ToDo_E);
            return;
          }
          ToDo_N.save().then((docs) => {
            console.log("MSG: ------++ Tarea Creada ++--------");
            resolve(docs);
          });
        });
      }
      // getToDo(filterdata) {
      //   var filter = {};
      //   if (filterdata != null) {
      //     filter = filterdata;
      //   }
      //   return new Promise((resolve, reject) => {
      //     this.mymodel.find(filter, (err, docs) => {
      //       if (err) {
      //         console.log(err);
      //         resolve(err);
      //         return;
      //       }
      //       resolve(docs);
      //     });
      //   });
      // }
      // updateModel(id, ToDoUpdate) {
      //   return new Promise((resolve, reject) => {
      //     this.mymodel.update({ _id: id }, { $set: ToDoUpdate }, (err, docs) => {
      //       if (err) {
      //         console.log(err);
      //         resolve(err);
      //         return;
      //       }
      //       resolve(docs);
      //     });
      //   });
      // }
      //  deleteToDo(id) {
      //   return new Promise((resolve, reject) => {
      //     this.mymodel.remove({ _id: id }).then((err, docs) => {
      //      if (err) {
      //         console.log(err);
      //         resolve(err);
      //         return;
      //     }
      //      resolve(docs);
      //     });
      //    });
      // }
      async deleteToDo(id) {
         const result = await this.mymodel.remove({ _id: id });
         console.log("MSG: ---*Tarea Eliminada-*---");
         return result;
      }
      async updateToDo(id, updatedata) {
        const result = await this.mymodel.update({ _id: id }, { $set: updatedata });
        console.log("MSG: ---*Tarea Actualizada *----");
        return result;
      }
      async getToDo(key) {
        var filter = {};
        if (key != null) {
          filter = key;
        }
        const result = await this.mymodel.find(filter);
        console.log("---------- MODEL -----------");
        console.log(result);
        console.log("---------- END MODEL -----------");
    
        return result;
      }
    }
    export default ToDoModel;