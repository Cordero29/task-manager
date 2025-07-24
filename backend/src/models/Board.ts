import mongoose, {Schema} from "mongoose";


const boardSchema = new Schema({
	title: {type: String, required: true},
	// userId: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: "User",
	// 	required: true
	// }
}, {
	collection: 'boards',
	timestamps: true
});


const Board = mongoose.model("Board", boardSchema);

export default Board;