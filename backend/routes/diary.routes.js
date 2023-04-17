const express = require("express");
const Diary = require("../controllers/diary.js");
const verify = require("../middleware/verifyToken.js");
const diaryRouter = express.Router();

diaryRouter.get("/diary-all/:userId", verify.verifyToken, Diary.getAllDiaryFields);
diaryRouter.get("/diary/:fieldId", verify.verifyToken, Diary.getDiaryField);
diaryRouter.post("/diary", verify.verifyToken, Diary.createDiaryField);
diaryRouter.delete("/diary/:fieldId", verify.verifyToken, Diary.deleteDiaryField);
diaryRouter.put("/diary/:fieldId", verify.verifyToken, Diary.updateDiaryField)

module.exports = diaryRouter;