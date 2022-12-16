const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    let arr = [];
    let length = all.length;
    for (let i = 0; i < length; i++) {
      if (all[i].dueDate == yesterday) {
        arr.push(all[i]);
      }
    }
    return arr;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    let arr = [];
    let length = all.length;
    for (let i = 0; i < length; i++) {
      if (all[i].dueDate == today) {
        arr.push(all[i]);
      }
    }
    return arr;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    let arr = [];
    let length = all.length;
    for (let i = 0; i < length; i++) {
      if (all[i].dueDate == tomorrow) {
        arr.push(all[i]);
      }
    }
    return arr;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    let OUTPUT_STRING = "";
    let length = list.length;
    for (let i = 0; i < length; i++) {
      if (list[i].completed == false) {
        OUTPUT_STRING = OUTPUT_STRING + "[" + " ] ";
      } else {
        OUTPUT_STRING = OUTPUT_STRING + "[" + "x] ";
      }
      if (list[i].dueDate == today) {
        OUTPUT_STRING += list[i].title + "\n";
      } else {
        if (i == length - 1 && tomorrow == list[i].dueDate) {
          OUTPUT_STRING =
            OUTPUT_STRING + list[i].title + ". " + list[i].dueDate + "\n";
        } else {
          OUTPUT_STRING =
            OUTPUT_STRING + list[i].title + " " + list[i].dueDate + "\n";
        }
      }
    }

    // return OUTPUT_STRING
    return OUTPUT_STRING;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
