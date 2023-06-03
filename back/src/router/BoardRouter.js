import { Router } from "express";
import {
  createBoard,
  deleteBoard,
  deleteBoardName,
  getBoard,
  getBoardList,
  uploadImage
} from "../controller/Boardontroller";
import multer from "multer";
import path from "path";

const boardRouter = Router();

boardRouter.post("/", createBoard);
boardRouter.get("/", getBoard);
boardRouter.get("/list", getBoardList);
boardRouter.delete("/:id", deleteBoard);
boardRouter.delete("/title/:title", deleteBoardName);

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "src/uploads/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
boardRouter.post("/upload/img", upload.single("img"), uploadImage);

export default boardRouter;
