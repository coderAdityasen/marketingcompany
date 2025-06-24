import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	description : {
		type : String,
		required : true
	},
	image : {
		type : String,
		required : true
	}

} , {timestamps: true})

export const Project = mongoose.model("Project" , projectSchema)