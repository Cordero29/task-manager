import mongoose, {Schema} from "mongoose";


const userSchema = new Schema({
	auth0Id: {type: String, required: true, unique: true},
	email: {type: String, required: false, default: null, sparse: true, unique: true},
	username: {type: String, required: true, unique: true},
	isAdmin: {type: Boolean, default: false},
}, {
	collection: 'users',
	timestamps: true
});


const User = mongoose.model("User", userSchema);

export default User;