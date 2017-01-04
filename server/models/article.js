import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let ArticleSchema = new Schema({
  title: String,
  description: String
});

export default mongoose.model('Article', ArticleSchema);