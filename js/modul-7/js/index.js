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

function createPostCard({ imgF = "", titleF = "", textF = "", linkF = "" }) {
  const main = document.querySelector(".main");
  const divv = document.createElement("div");
  divv.classList.add("post");

  const img = document.createElement("img");
  img.classList.add("post__image");
  img.setAttribute("src", imgF);
  img.setAttribute("alt", "post image");

  const h2 = document.createElement("h2");
  h2.classList.add("post__title");
  h2.textContent = titleF;

  const p = document.createElement("p");
  p.classList.add("post__text");
  p.textContent = textF;

  const btn = document.createElement("a");
  btn.classList.add("button");
  btn.setAttribute("href", linkF);
  btn.textContent = "Read more";

  main.append(divv);
  divv.append(img, h2, p, btn);

  return divv;
}

function createCards(arr) {
  const list = [];
  arr.forEach(item => {
    const element = createPostCard({
      imgF: item.img,
      titleF: item.title,
      textF: item.text,
      linkF: item.link
    });
    list.push(element);
  });
  const rroot = document.querySelector(".main");
  rroot.append(...list);
}

createCards(posts);
