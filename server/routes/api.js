const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/NewsController");
const MediaController = require("../controllers/MediaController");
const UserController = require("../controllers/UserController");
const CategoryController = require("../controllers/CategoryController");
const NewsChanelController = require("../controllers/NewsChanelController");
const RateAndRevController = require("../controllers/RateAndRevController");
const CommentController = require("../controllers/CommentControllers");
const WebContentController = require("../controllers/WebContentController");


// News routes
router.post("/news", NewsController.createNews);
router.get("/news", NewsController.getAllNews);
router.get("/news/:id", NewsController.getNewsById);
router.put("/news/:id", NewsController.updateNews);
router.delete("/news/:id", NewsController.deleteNews);

// Media routes
router.post("/media", MediaController.createMedia);
router.get("/media", MediaController.getAllMedia);
router.get("/media/:id", MediaController.getMediaById);
router.put("/media/:id", MediaController.updateMedia);
router.delete("/media/:id", MediaController.deleteMedia);

// User routes
router.get("/user", UserController.getAllUsers);
router.post("/user", UserController.createUser);
router.get("/user/:id", UserController.getUserById);
router.put("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);

// Category routes

router.get("/category", CategoryController.getAllCategories);
router.post("/category", CategoryController.createCategory);
router.get("/category/:id", CategoryController.getCategoryById);
router.put("/category/:id", CategoryController.updateCategory);
router.delete("/category/:id", CategoryController.deleteCategory);

// News chanel routes

router.get("/NewsChanel", NewsChanelController.getAllNewsChanel);
router.post("/NewsChanel", NewsChanelController.createNewsChanel);
router.get("/NewsChanel/:id", NewsChanelController.getNewsChanelById);
router.put("/NewsChanel/:id", NewsChanelController.updateNewsChanel);
router.delete("/NewsChanel/:id", NewsChanelController.deleteNewsChanel);

// RateAndRev routes

router.get("/RateAndRev", RateAndRevController.getAllRateAndRev);
router.post("/RateAndRev", RateAndRevController.createRateAndRev);
router.get("/RateAndRev/:id", RateAndRevController.getRateAndRevById);
router.put("/RateAndRev/:id", RateAndRevController.updateRateAndRev);
router.delete("/RateAndRev/:id", RateAndRevController.deleteRateAndRev);


// Comment routes

router.get("/comment", CommentController.getAllComments);
router.post("/comment", CommentController.createComment);
router.get("/comment/:id", CommentController.getCommentById);
router.put("/comment/:id", CommentController.updateComment);
router.delete("/comment/:id", CommentController.deleteComment);

//WebConten route

router.get("/Webcontent", WebContentController.getAllWebContent);
router.post("/WebContent", WebContentController.createWebContent);
router.get("/WebContent/:id", WebContentController.getWebContentById);
router.put("/WebContent/:id", WebContentController.updateWebContent);
router.delete("/WebContent/:id", WebContentController.deleteWebContent);

module.exports = router;
