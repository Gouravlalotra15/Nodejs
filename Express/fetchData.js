const result = document.getElementById("result");

const fetchPeople = async () => {
  const data = await axios.get("/people");
  console.log(data);
  try {
  } catch (err) {
    console.log("get error", err.response);
  }
};

fetchPeople();

const btn = document.getElementById("btn");
const input = document.getElementById("firstName");

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log(input.value);
  const nameValue = input.value;
  try {
    const { data } = await axios.post("/people", { id: 4, name: nameValue });

    let h3 = document.createElement("h1");
    console.log(h3);
    h3.innerHTML = data.map((item) => item.name);

    result.appendChild(h3);
    fetchPeople();
  } catch (err) {
    console.log(err.message);
  }
});
