import mongoose from "mongoose";

const rubroSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

let Dataset = mongoose.models.rubro || mongoose.model("rubro", rubroSchema);
export default Dataset;
