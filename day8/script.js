async function getUser(){

    const username = document.getElementById("username").value.trim();
    const result = document.getElementById("result");

    if(username === ""){
        result.innerHTML = "<p>Please enter a username.</p>";
        return;
    }

    try{

        const response = await fetch(`https://api.github.com/users/${username}`);

        if(!response.ok){
            throw new Error("User not found");
        }

        const data = await response.json();

        result.innerHTML = `
            <div class="user-card">
                <img src="${data.avatar_url}" alt="Profile Picture">

                <h2>${data.name || data.login}</h2>

                <p><strong>Username:</strong> ${data.login}</p>

                <p><strong>Followers:</strong> ${data.followers}</p>

                <p><strong>Public Repositories:</strong> ${data.public_repos}</p>

                <p><strong>Location:</strong> ${data.location || "Not Available"}</p>

                <a href="${data.html_url}" target="_blank">
                    Visit Profile
                </a>
            </div>
        `;

    }catch(error){

        result.innerHTML = `
            <p style="color:red;">
                User not found!
            </p>
        `;
    }

}