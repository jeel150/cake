import { Schema, model } from 'mongoose';

const courseApplicationSchema = new Schema({
  courseId: {
    type: String,
    required: true
  },
  courseName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  preferredDate: {
    type: String,
    required: true
  },
  attendees: {
    type: Number,
    required: true
  },
  message: {
    type: String,
    default: ''
  },
  submissionDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
});

export default model('CourseApplication', courseApplicationSchema);