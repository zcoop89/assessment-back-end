const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("getAFortune");

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

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getAFortune);
