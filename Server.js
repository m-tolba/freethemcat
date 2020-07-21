var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/adult-learning-across-cultures",function(req,res){
  res.sendFile(path + "adult-learning-across-cultures.html");
});

router.get("/antenatal-depression-and-anxiety-in-pakistan",function(req,res){
  res.sendFile(path + "antenatal-depression-and-anxiety-in-pakistan.html");
});

router.get("/buddhism-and-pessimism",function(req,res){
  res.sendFile(path + "buddhism-and-pessimism.html");
});

router.get("/censorship--an-unnecessary-evil",function(req,res){
  res.sendFile(path + "censorship--an-unnecessary-evil.html");
});

router.get("/deconstructionism-and-literature",function(req,res){
  res.sendFile(path + "deconstructionism-and-literature.html");
});

router.get("/designing-courthouses",function(req,res){
  res.sendFile(path + "designing-courthouses.html");
});

router.get("/disaster-risk-knowledge-in-nepal",function(req,res){
  res.sendFile(path + "disaster-risk-knowledge-in-nepal.html");
});

router.get("/does-free-will-exist",function(req,res){
  res.sendFile(path + "does-free-will-exist.html");
});

router.get("/energy-and-sustainable-development-in-nigeria",function(req,res){
  res.sendFile(path + "energy-and-sustainable-development-in-nigeria.html");
});

router.get("/film-adaptation-of-chinese-literature",function(req,res){
  res.sendFile(path + "film-adaptation-of-chinese-literature.html");
});

router.get("/huns-and-eurasian-history",function(req,res){
  res.sendFile(path + "huns-and-eurasian-history.html");
});

router.get("/let-s-stop-playing-politics-with-vaccines",function(req,res){
  res.sendFile(path + "let-s-stop-playing-politics-with-vaccines.html");
});

router.get("/living-in-a-rational-society",function(req,res){
  res.sendFile(path + "living-in-a-rational-society.html");
});

router.get("/maternal-psychology",function(req,res){
  res.sendFile(path + "maternal-psychology.html");
});

router.get("/physical-education-in-the-uk",function(req,res){
  res.sendFile(path + "physical-education-in-the-uk.html");
});

router.get("/political-attitudes",function(req,res){
  res.sendFile(path + "political-attitudes.html");
});

router.get("/post-colonialism-in-papuan-culture",function(req,res){
  res.sendFile(path + "post-colonialism-in-papuan-culture.html");
});

router.get("/primordial-and-complex-jealousy",function(req,res){
  res.sendFile(path + "primordial-and-complex-jealousy.html");
});

router.get("/puritan-society",function(req,res){
  res.sendFile(path + "puritan-society.html");
});

router.get("/reflections-on-leaving-facebook",function(req,res){
  res.sendFile(path + "reflections-on-leaving-facebook.html");
});

router.get("/seeing-color-through-homer-s-eyes",function(req,res){
  res.sendFile(path + "seeing-color-through-homer-s-eyes.html");
});

router.get("/sociology-of-participation",function(req,res){
  res.sendFile(path + "sociology-of-participation.html");
});

router.get("/the-ethics-of-drug-induced-happiness",function(req,res){
  res.sendFile(path + "the-ethics-of-drug-induced-happiness.html");
});

router.get("/the-happy-american",function(req,res){
  res.sendFile(path + "the-happy-american.html");
});

router.get("/the-honest-truth-about-dishonesty",function(req,res){
  res.sendFile(path + "the-honest-truth-about-dishonesty.html");
});

router.get("/the-human-footprint-in-mexico",function(req,res){
  res.sendFile(path + "the-human-footprint-in-mexico.html");
});

router.get("/the-roots-of-capitalism",function(req,res){
  res.sendFile(path + "the-roots-of-capitalism.html");
});

router.get("/the-ultimatum-game",function(req,res){
  res.sendFile(path + "the-ultimatum-game.html");
});

router.get("/tools-for-thought",function(req,res){
  res.sendFile(path + "tools-for-thought.html");
});

router.get("/understanding-thomas-hardy",function(req,res){
  res.sendFile(path + "understanding-thomas-hardy.html");
});

router.get("/utilitarianism-ethics",function(req,res){
  res.sendFile(path + "utilitarianism-ethics.html");
});

router.get("/walt-whitman--poet-of-the-people",function(req,res){
  res.sendFile(path + "walt-whitman--poet-of-the-people.html");
});

router.get("/what-is-life",function(req,res){
  res.sendFile(path + "what-is-life.html");
});

router.get("/what-separates-science-from-art",function(req,res){
  res.sendFile(path + "what-separates-science-from-art.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
