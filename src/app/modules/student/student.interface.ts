import { model } from "mongoose";

export interface IStudent {
  name: string;
  email: string;
  avatar?: string;
  gender: "male" | "female" | "fucking gay";
  hobbies: string[]; //"shit", "robbery", "neckshot"
}
