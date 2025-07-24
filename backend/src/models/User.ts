import mongoose, {Schema} from "mongoose";


const userSchema = new Schema({
	username: {type: String, required: true},
	password: {type: String, required: true}
}, {
	collection: 'users',
	timestamps: true
});


const User = mongoose.model("User", userSchema);

export default User;