// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);

//   res.setHeader("Content-Type", "text/html");

//   let path = "./html/";
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       break;
//     case "/about":
//       path += "about.html";
//       break;
//     default:
//       path += "404.html";
//       break;
//   }

//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.write(data);
//       res.end();
//     }
//   });
// });

// server.listen(8080, "localhost", () => {
//   console.log("listening for requests on port 3000");
// });
