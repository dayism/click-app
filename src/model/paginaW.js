
const { Schema , model } = require("mongoose");
const paginaW= new Schema(
  {
    category: { type: String },
    name: {type: String},
    description: {type: String},
    link: {type: String},
  },
  {
    timestamps: true
  }
);


module.exports = model("paginaW", paginaW);