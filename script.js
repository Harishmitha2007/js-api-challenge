const usersContainer = document.getElementById("users");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const div = document.createElement("div");
            div.classList.add("user-card");

            div.innerHTML = `
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            `;

            usersContainer.appendChild(div);
        });
    })
    .catch(error => {
        console.log("Error:", error);
    });