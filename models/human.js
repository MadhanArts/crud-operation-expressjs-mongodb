import mongoose from "mongoose";

const humanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tech: {
        type: String,
        required: true,
    },
    sub: {
        type: Boolean,
        required: true,
        default: false,
    },
});

export default mongoose.model("Human", humanSchema);
