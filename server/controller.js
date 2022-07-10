const tasks = [];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getAFortune: (req, res) => {
    console.log(req);
    const fortunes = [
      "A fresh start will put you on your way.",
      "A friend asks only for your time not your money.",
      "A friend is a present you give yourself.",
      "A gambler not only will lose what he has, but also will lose what he doesn’t have.",
      "A golden egg of opportunity falls into your lap this month.",
    ];
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
    res.status(200).send(randomFortune);
  },
  addTask: (req, res) => {
    const { task } = req.body.params;
    if (task === "") {
      return res.status(400).send({ error: "No task provided" });
    }
    const newTask = {
      complete: false,
      message: task,
    };
    tasks.push(newTask);
    res.status(200).send(tasks);
  },
  updateTask: (req, res) => {
    const { updatedTask, index } = req.body.params;
    tasks.splice(index, 1, updatedTask);
    res.status(200).send(tasks);
  },
  deleteTask: (req, res) => {
    const indexToDelete = req.params.index;
    tasks.splice(indexToDelete, 1)
    res.status(200).send(tasks);
  },
};
