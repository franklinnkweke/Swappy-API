const nameContainer = document.querySelector(".list_container");
const modal = document.querySelector(".pop_up");

async function fetchData() {
    const res = await fetch("https://swapi.dev/api/people");
    const data = await res.json();
    const results = data.results;
    const imagex = ["https://i.pinimg.com/originals/50/8a/3d/508a3d1dbcb81f634e27ce9787bd0c1e.jpg", "https://i.pinimg.com/564x/62/74/6d/62746d80c8d6d2bbfdebb2933b4e1495.jpg",
        "https://i.pinimg.com/564x/5d/ff/9f/5dff9f05c8bce0bc4bf4e589b9c23c33.jpg", "https://i.pinimg.com/564x/59/9d/a7/599da74a399a1d815bb0a6a97cfb04c7.jpg", "https://i.pinimg.com/564x/6e/07/c9/6e07c96dc2c31829d5760ff216618910.jpg",
        "https://i.pinimg.com/564x/62/ea/c1/62eac1e2d79c994db0b880f27bbab36e.jpg", "https://i.pinimg.com/564x/91/5f/44/915f44c5eea8bb9bc5263aac05c3a5c3.jpg", "https://i.pinimg.com/564x/dc/35/29/dc3529acada4e3bcea18700736a33002.jpg",
        "https://i.pinimg.com/564x/71/3a/58/713a58fd1876e756aee43d72e21c6a8a.jpg", "https://i.pinimg.com/564x/0d/d5/16/0dd516e2644a1e9110d6662e0c093e17.jpg"
    ]

    for (let i = 0; i < results.length; i++) {
        const singleperson = results[i];
        const singleList = document.createElement("li");
        singleList.innerText = singleperson.name;
        singleList.onclick = () => {
            const divContainer = document.createElement("div");
            divContainer.setAttribute("class", "contentContainer");
            modal.classList.add("show-modal");
            modal.appendChild(divContainer);
            const closeBtn = document.createElement('button')
            closeBtn.innerText = "X";
            closeBtn.setAttribute("class", "close_btn");
            divContainer.appendChild(closeBtn);

            const image = document.createElement("img");
            image.setAttribute(
                "src",
                imagex[i]
            );
            image.setAttribute("class", "image")
            divContainer.appendChild(image);
            const name = document.createElement("p");
            name.setAttribute("class", "name");
            name.innerHTML = `<h3 style="font-size: 24px;"> Name: ${singleperson.name}</h3>`;
            divContainer.appendChild(name);

            const height = document.createElement("p");
            height.innerHTML = `<h3 style="font-size: 24px;"> Height: ${singleperson.height}</h3>`;
            divContainer.appendChild(height);

            const gender = document.createElement("p");
            gender.innerHTML = `<h3 style="font-size: 24px;"> Gender: ${singleperson.gender}</h3>`;
            divContainer.appendChild(gender);

            closeBtn.addEventListener("click", () => {
                modal.classList.remove("show-modal");
            })
        };
        nameContainer.appendChild(singleList);
    }
}
fetchData();