// DEPENDENCIES & IMPORTS
import mongoose from 'mongoose';

// Setup Schema
const ImageSchema = new mongoose.Schema({
  url: String,
  hdurl: String,
  description: String,
  title: String,
  date: String
});

// Compile model from schema
const ImageModel = mongoose.model('IamgeModel', ImageScehma);