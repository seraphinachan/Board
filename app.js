// express
var express = require("express");
var app = express();

// ejs
const path = require("path");
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// bootstrap
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

app.get("/", function (req, res) {
  res.render("index");
});

// POST 로 값을 전송할 때 HTTP 패킷의 Request Body 영역의 값을 가져와야 합니다.
// 그러기 위해서는 Express 내장 함수를 사용하거나 외부 Body-parser 를 사용해야 합니다.
app.use(express.urlencoded({ extended: true }));

// router
var indexRouter = require("./router/");
var resultRouter = require("./router/result");
var boardRouter = require("./router/board");

app.use("/", indexRouter);
app.use("/", resultRouter);
app.use("/", boardRouter);

//jquery
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist")); // jquery JS

var uploadRouter = require("./router/upload");
app.use("/", uploadRouter);

// img
app.use(express.static("upload"));

// app.get('/result', function (req, res) {
//     var val1 = req.query.val1;
//     var val2 = req.query.val2;
//     res.render('result', {'val1': val1, 'val2':val2});
// })

// app.post('/result', function (req, res) {
//     val1 = req.body.val1;
//     val2 = req.body.val2;
//     res.render('result', {'val1': val1, 'val2': val2});
// })

app.listen(3000, function () {
  console.log("3000 포트로 노드 서버 오픈!");
});
