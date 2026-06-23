const gallery = document.getElementById("gallery");

const ACCESS_KEY = "QVeEe_abCKRWaj4dpGh-627zjVQY7mcu6TjRjdbYMi0";

async function loadImages() {
    try {
        const response = await fetch(
            `https://api.unsplash.com/photos/random?count=12&client_id=${ACCESS_KEY}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch images");
        }

        const images = await response.json();

        gallery.innerHTML = "";

        images.forEach((image) => {
            const img = document.createElement("img");

            img.src = image.urls.small;
            img.alt = image.alt_description || "Unsplash Image";
            img.loading = "lazy";

            gallery.appendChild(img);
        });

    } catch (error) {
        gallery.innerHTML = "<h2>No images found</h2>";
        console.error(error);
    }
}

loadImages();