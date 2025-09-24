
import { Schema, model } from 'mongoose';

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: 'View Course ➜'
  },
  image: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  days: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['BASIC', 'INTERMEDIATE', 'ADVANCED', 'WORKSHOPS', 'KIDS WORKSHOPS'],
    required: true
  },
  cloudinaryId: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default model('Course', courseSchema);