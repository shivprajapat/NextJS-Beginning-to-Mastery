import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;

  if (req.method === "GET") {
    const comment = comments.filter(
      (comment) => comment.id === parseInt(commentId)
    );
    res.status(200).json(comment);
  }
}
