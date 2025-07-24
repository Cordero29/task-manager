import mongoose, {Schema} from "mongoose";

const taskSchema = new Schema({
	title: {type: String, required: true},
	priority: {
		type: String,
		enum: ['low', 'medium', 'high'],
		default: 'medium'
	},
	columnId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Column',
		required: true
	}
}, {
	collection: 'tasks',
	timestamps: true
})

const Task = mongoose.model("Task", taskSchema);

export default Task;