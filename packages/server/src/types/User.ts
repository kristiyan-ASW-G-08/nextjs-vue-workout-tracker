import  { Document } from 'mongoose';

export default interface User extends Document {
  password: string;
  email: string;
}
