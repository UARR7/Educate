// import mongoose from "mongoose";

// const CommunitySchema = new mongoose.Schema({
//   userId: mongoose.Schema.Types.ObjectId,
//   type: { type: String, enum: ["poll", "question", "post"] },
//   content: String,
//   upvotes: { type: Number, default: 0 },
//   downvotes: { type: Number, default: 0 },
//   comments: [{ userId: mongoose.Schema.Types.ObjectId, text: String }]
// });

// export default mongoose.model("Community", CommunitySchema);


import mongoose from "mongoose";

const CommunitySchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  type: { type: String, enum: ["poll", "question", "post"] },
  content: String,
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  comments: [{ userId: mongoose.Schema.Types.ObjectId, text: String }]
});

export default mongoose.model("Community", CommunitySchema);
