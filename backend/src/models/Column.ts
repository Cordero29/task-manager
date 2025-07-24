import mongoose, {Schema} from "mongoose";


const columnSchema = new Schema({
	title: {type: String, required: true},
	boardId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Board',
		required: true,
	}
}, {
	collection: 'columns',
	timestamps: true
});


const Column = mongoose.model("Board", columnSchema);

export default Column;