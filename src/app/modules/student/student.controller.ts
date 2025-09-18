import { Request, Response } from "express";
import { studentServices } from "./student.service";
import { Student } from "../student.model";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: "Created Student Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(400);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Fetched Students Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(400);
  }
};

const getStudentByID = async (req: Request, res: Response) => {
  const id = req.params.studentId;
  try {
    const result = await studentServices.getAllStudentByIdFromDB(id);
    res.status(200).json({
      success: true,
      message: "Fetched the Student Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(400);
  }
};
export const StudentControllers = {
  createStudent,
  getAllStudents,
  getStudentByID,
};
