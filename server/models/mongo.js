import mongoose from 'mongoose';

// create instance of Schema
let Schema = mongoose.Schema;
// create schema
let userSchema = new Schema({
  "username" : String,
  "password" : String
});
// create model if not exists
export default mongoose.model('userLogin', userSchema);