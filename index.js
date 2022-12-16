const todoList = () => {
  all = [];
  const add = (todoTask) => {
    all.push(todoTask);
    console.log(all);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
    console.log(all);
  };
  return { all, add, markAsComplete };
};
const todos = todoList();
todos.add({
  title: "I need to prepare",
  dueDate: "05-12-2022",
  completed: false,
});
todos.add({
  title: "Renew insurance",
  dueDate: "08-12-2022",
  completed: false,
});

todos.markAsComplete(1);
todos.all;
todos.all;
// const http = require("http");
// const fs = require("fs");

// let port = require("minimist")(process.argv.slice(2));
// port = port._;
// port = port[0];

// let homeContent = "";
// let projectContent = "";
// let registrationContent = "";

// fs.readFile("home.html", (err, home) => {
//   if (err) {
//     throw err;
//   }
//   homeContent = home;
// });

// fs.readFile("project.html", (err, project) => {
//   if (err) {
//     throw err;
//   }
//   projectContent = project;
// });

// fs.readFile("registration.html", (err, registration) => {
//   if (err) {
//     throw err;
//   }
//   registrationContent = registration;
// });

// http
//   .createServer((request, response) => {
//     let url = request.url;
//     response.writeHeader(200, { "Content-Type": "text/html" });
//     switch (url) {
//       case "/project":
//         response.write(projectContent);
//         response.end();
//         break;
//       case "/registration":
//         response.write(registrationContent);
//         response.end();
//         break;
//       default:
//         response.write(homeContent);
//         response.end();
//         break;
//     }
//   })
//   .listen(5000, () => {
//     console.log("server is listening");
//   });
