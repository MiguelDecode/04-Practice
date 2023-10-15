const galleryElement = document.querySelector(".gallery");

let imageUrls = ["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpg"];

const fragment = document.createDocumentFragment();

let initialIndex = 1;

const drawCards = () => {
  imageUrls.forEach((el, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = `./assets/${el}`;
    imgElement.classList.add("image");

    fragment.appendChild(imgElement);

    galleryElement.addEventListener("click", (event) => {
      if (event.target.matches(".image")) {
        console.log("Click");
        event.stopImmediatePropagation();
        initialIndex++;
        event.target.style.zIndex = initialIndex;
        event.target.classList.add("image--animation");
      }
    });
  });

  galleryElement.appendChild(fragment);
};

drawCards();
