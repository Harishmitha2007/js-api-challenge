const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    message.textContent = "Logging in...";
    message.style.color = "black";

    try {
        const response = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
    "Content-Type": "application/json",
    "x-api-key": "free_user_3FnVKCHRNwsUQGjn86AgHNer6KL"
},
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();

        if (response.ok) {
            message.style.color = "green";
            message.textContent = "Login Successful!";
            console.log("Token:", data.token);
        } else {
            message.style.color = "red";
            message.textContent = data.error;
        }

    } catch (error) {
        message.style.color = "red";
        message.textContent = "Something went wrong!";
    }
});