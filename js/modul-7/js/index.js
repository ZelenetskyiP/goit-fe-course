"use strict";

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-1.com"
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-2.com"
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-3.com"
  }
];

function createPostCard({
  imgCard = "",
  titleCard = "",
  textCard = "",
  linkCard = ""
}) {
  const card = document.querySelector(".card");
  const divCard = document.createElement("div");
  divCard.classList.add("post");

  const img = document.createElement("img");
  img.classList.add("post__image");
  img.setAttribute("src", imgCard);
  img.setAttribute("alt", "post image");

  const h2 = document.createElement("h2");
  h2.classList.add("post__title");
  h2.textContent = titleCard;

  const p = document.createElement("p");
  p.classList.add("post__text");
  p.textContent = textCard;

  const btn = document.createElement("a");
  btn.classList.add("button");
  btn.setAttribute("href", linkCard);
  btn.textContent = "Read more";

  card.append(divCard);
  divCard.append(img, h2, p, btn);

  return divCard;
}

function createCards(arr) {
  const a = arr.map(item => {
    const element = createPostCard({
      imgCard: item.img,
      titleCard: item.title,
      textCard: item.text,
      linkCard: item.link
    });
    return element;
  });
}

createCards(posts);
