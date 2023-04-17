const Diary = require("../models/diary.model.js");
const uuid = require("uuid");

const getAllDiaryFields = async (req, res) => {
  try {
    const id = req.params.userId;
    const diaryFields = await Diary.findAll({ where: { user_id: id } });
    res.status(200).json(diaryFields);
  } catch (error) {
    res.json({ error });
  }
};

const getDiaryField = async (req, res) => {
  try {
    const id = req.params.fieldId;
    const diaryField = await Diary.findOne({ where: { id } });
    res.status(200).json(diaryField);
  } catch (error) {
    res.json({ error });
  }
};

const createDiaryField = async (req, res) => {
  try {
    const newDiaryField = req.body;
    const id = uuid.v1();
    const createdDiaryField = await Diary.create({ id, ...newDiaryField });
    res.status(200).json(createdDiaryField);
  } catch (error) {
    res.json({ error });
  }
};

const updateDiaryField = async (req, res) => {
  try {
    const updatedDiaryFieldId = req.params.fieldId;
    const updatedParams = req.body;
    const updatedDiaryField = await Diary.update(
      { ...updatedParams },
      { where: { id: updatedDiaryFieldId } }
    );
    res.status(200).json(updatedDiaryField);
  } catch (error) {
    res.json({ error });
  }
};

const deleteDiaryField = async (req, res) => {
  try {
    const id = req.params.diaryFieldId;
    const deletedDiaryField = await Diary.destroy({ where: { id: id } });
    res.status(200).json(deletedDiaryField);
  } catch (error) {
    res.json({ error });
  }
};

module.exports = {
  getAllDiaryFields,
  getDiaryField,
  createDiaryField,
  updateDiaryField,
  deleteDiaryField,
};
