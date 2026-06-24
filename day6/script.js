const apiUrl = "https://jsonplaceholder.typicode.com/posts";

let currentPage = 1;
const postsPerPage = 10;
let posts = [];

async function fetchPosts() {
    const response = await fetch(apiUrl);
    posts = await response.json();
    displayPosts();
}

function displayPosts() {
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;

    const currentPosts = posts.slice(start, end);

    document.getElementById("posts").innerHTML =
        currentPosts.map(post => `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `).join("");

    document.getElementById("pageNumber").textContent = currentPage;
}

function nextPage() {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
        currentPage++;
        displayPosts();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayPosts();
    }
}

fetchPosts();