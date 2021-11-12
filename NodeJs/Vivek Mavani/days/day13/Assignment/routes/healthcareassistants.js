var express = require("express");
const AssistantDomain = require("../domain/healthcareassistant.domain");
var router = express.Router();

class AssistantController {
  //To get all assistant
  static async get(req, res) {
    const assistantDomain = new AssistantDomain();
    assistantDomain.getAllAssistant(req, res);
  }
  //to get assistant
  static async getAssistant(req, res) {
    const assistantDomain = new AssistantDomain();
    assistantDomain.getAssistant(req, res);
  }
  //To insert assistant
  static async insertAssistant(req, res) {
    const assistantDomain = new AssistantDomain();
    assistantDomain.insertAssistant(req, res);
  }
  //To delete assistant
  static async deleteAssistant(req, res) {
    const assistantDomain = new AssistantDomain();
    assistantDomain.deleteAssistant(req, res);
  }
}

//To get all assistant done
router.get("/", AssistantController.get);
//To get a single assistant by id done
router.get("/:AstId", AssistantController.getAssistant);
//To delete a assistant done
router.delete("/:AstId", AssistantController.deleteAssistant);
//To insert assistant done
router.post("/", AssistantController.insertAssistant);

module.exports = router;
