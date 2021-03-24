'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  dueDate:{
      type:String,
      required: 'Kindly enter due date of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'ongoing', 'completed', 'archive'],
    default: 'pending'
  },
  isDeleted:{
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);