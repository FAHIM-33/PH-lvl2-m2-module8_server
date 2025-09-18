import { Student } from "../student.model";
import { IStudent } from "./student.interface";

const createStudentIntoDB = async (student: IStudent) => {
  const result = await Student.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getAllStudentByIdFromDB = async (id: string) => {
  // finds by name lol
  const result = await Student.findOne({ name: id });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getAllStudentByIdFromDB,
};
