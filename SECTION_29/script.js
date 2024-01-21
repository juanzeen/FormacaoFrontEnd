const getData = async () => {
  try {
    const response = await postFetch.get(
     "/users",
      {
        headers: {
          "Content-Type": "application/json",
          custom: "header",
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const container = document.querySelector("#user-container");

const printData = async () => {
  const data = await getData();

  data.forEach((element) => {
    const div = document.createElement("div");

    const nameElement = document.createElement("h2");

    nameElement.textContent = element.name;

    div.appendChild(nameElement);

    const emailElement = document.createElement("h3");

    emailElement.textContent = element.email;

    div.appendChild(emailElement);

    container.appendChild(div);
  });
};

printData();

const form = document.querySelector("#post-form");
const titleInp = document.querySelector("#title");
const bodyInp = document.querySelector("#body");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  postFetch.post("/posts", {
    title: titleInp.value,
    body: bodyInp.value,
    userId: 1,
  });
});
