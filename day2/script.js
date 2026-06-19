const postsContainer = document.getElementById("postsContainer");
const searchInput = document.getElementById("searchInput");

let allPosts = [];


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        allPosts = data;
        displayPosts(allPosts);
    })
    .catch(error => {
        console.error("Error fetching posts:", error);
    });


function displayPosts(posts) {
    postsContainer.innerHTML = "";

    posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;

        postsContainer.appendChild(postDiv);
    });
}


searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();

    const filteredPosts = allPosts.filter(post =>
        post.title.toLowerCase().includes(keyword)
    );

    displayPosts(filteredPosts);
});