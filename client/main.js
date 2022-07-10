const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("getAFortune");
const submitBtn = document.getElementById("submit");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");

const renderTasks = (tasks) => {
  tasks.forEach((task, index) => {
    const newTask = document.createElement("div");
    newTask.classList.add("list-item");
    newTask.classList.add(`${task.complete ? "complete" : "not-complete"}`);
    newTask.innerText = task.message;
    newTask.addEventListener("click", () => toggleComplete(index, task));
    taskList.appendChild(newTask);
  });
};

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getAFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const fortune = res.data;
    alert(fortune);
  });
};

const toggleComplete = (index, task) => {
  if (task.complete) {
    if (confirm("Do you want to delete this to do?") === true) {
      return axios
        .delete(`http://localhost:4000/api/tasks/${index}`, {
          params: { task },
        })
        .then((res) => {
          taskList.innerHTML = "";
          taskInput.value = "";
          const tasks = res.data;
          renderTasks(tasks);
        });
    }
  }

  const updatedTask = {
    ...task,
    complete: !task.complete,
  };
  axios
    .put(`http://localhost:4000/api/tasks/${index}`, {
      params: { updatedTask, index },
    })
    .then((res) => {
      taskList.innerHTML = "";
      taskInput.value = "";
      const tasks = res.data;
      renderTasks(tasks);
    });
};

const addTask = (e) => {
  e.preventDefault();
  const task = taskInput.value;
  if (task === "") return;
  axios
    .post("http://localhost:4000/api/tasks", {
      params: {
        task,
      },
    })

    .then((res) => {
      taskList.innerHTML = "";
      taskInput.value = "";
      const tasks = res.data;
      renderTasks(tasks);
    });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getAFortune);
submitBtn.addEventListener("click", addTask);
