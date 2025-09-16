import { Schema, model, connect } from "mongoose";
import { IStudent } from "./student/student.interface";

const studentSchema = new Schema<IStudent>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String },
  gender: ["male", "female", "fucking gay"],
  hobbies: { type: [String] },
});

const Student = model<IStudent>("Student", studentSchema);
