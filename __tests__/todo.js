/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("Todolist Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    var date1 = new Date();
    date1.setDate(date1.getDate() - 1);
    var due = date1.toLocaleDateString("en-CA");
    var date2 = new Date();
    date2.setDate(date2.getDate() + 1);
    var duelater = date2.toLocaleDateString("en-CA");
    add({
      title: "Test todo",
      completed: false,
      dueDate: due,
    });
    add({
      title: "Test todo",
      completed: false,
      dueDate: duelater,
    });
  });
  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });
  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Checks retrieval of overdue items", () => {
    var due = overdue();
    expect(all[1].title).toBe(due[0].title);
    expect(all[1].dueDate).toBe(due[0].dueDate);
  });
  test("Checks retrieval of dueLater items", () => {
    var later = dueLater();
    expect(all[2].title).toBe(later[0].title);
    expect(all[2].dueDate).toBe(later[0].dueDate);
  });
  test("Checks retrieval of due today items", () => {
    var today = dueToday();
    expect(all[0].title).toBe(today[0].title);
    expect(all[0].dueDate).toBe(today[0].dueDate);
  });
});
