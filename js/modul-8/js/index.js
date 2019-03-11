"use strick";

const galleryItems = [
  {
    preview: "img/img1mini.jpeg",
    fullview: "img/img1.jpeg",
    alt: "alt text 1"
  },
  {
    preview: "img/img2mini.jpeg",
    fullview: "img/img2.jpeg",
    alt: "alt text 2"
  },
  {
    preview: "img/img3mini.jpeg",
    fullview: "img/img3.jpeg",
    alt: "alt text 3"
  },
  {
    preview: "img/img4mini.jpeg",
    fullview: "img/img4.jpeg",
    alt: "alt text 4"
  },
  {
    preview: "img/img5mini.jpeg",
    fullview: "img/img5.jpeg",
    alt: "alt text 5"
  },
  {
    preview: "img/img6mini.jpeg",
    fullview: "img/img6.jpeg",
    alt: "alt text 6"
  }
];

function createImg({ previewImg = "", fullviewImg = "", altImg = "" }) {
  const preview = document.querySelector(".preview");
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.setAttribute("src", previewImg);
  img.setAttribute("data-fullview", fullviewImg);
  img.setAttribute("alt", altImg);

  preview.prepend(li);
  li.prepend(img);

  return li;
}

function createImgCard(arr) {
  arr.map(item => {
    return createImg({
      previewImg: item.preview,
      fullviewImg: item.fullview,
      altImg: item.alt
    });
  });
}
createImgCard(galleryItems);

const listt = document.querySelector(".preview");
listt.addEventListener("click", bigImage);

function bigImage(event) {
  const fullview = document.querySelector(".fullview");

  const target = event.target;
  if (target.nodeName === "IMG") {
    const targetAtribute = target.getAttribute("data-fullview");
    fullview.firstElementChild.setAttribute("src", targetAtribute);
  }
  return;
}

function bigImg() {
  const fullview = document.querySelector(".fullview");
  const newImg = document.createElement("img");

  const img = document.querySelector("img");
  const imgAtribute = img.getAttribute("data-fullview");
  const imgAlt = img.getAttribute("alt");

  newImg.setAttribute("src", imgAtribute);
  newImg.setAttribute("alt", imgAlt);

  fullview.append(newImg);
}

bigImg();
