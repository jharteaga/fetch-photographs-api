const button = document.getElementById("photosBtn");
const container = document.getElementById("photos-container");

button.addEventListener("click", (e) => {
  fetch("https://picsum.photos/v2/list")
    .then((res) => res.json())
    .then((data) => {
      let photos = "";
      data.forEach((photo, i) => {
        photos += `
            <div class='photo'>
                <img src='${photo.download_url}' alt='Image ${i}' />
            </div>
        `;
      });
      container.innerHTML = photos;
    });
});
