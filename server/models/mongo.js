import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/jblog');
// create instance of Schema
let mongoSchema = mongoose.Schema;
// create schema
let userSchema = {
  "userEmail" : String,
  "userPassword" : String
};
// create model if not exists
export default mongoose.model('userLogin', userSchema);