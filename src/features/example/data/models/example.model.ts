import mongoose, { Schema } from "mongoose";

import ExampleType from "../types/example.type.js";

const exampleSchema: Schema = new Schema<ExampleType>({
  message: { type: String, required: true },
});

const ExampleModel = mongoose.model<ExampleType>("Example", exampleSchema);

export default ExampleModel;
