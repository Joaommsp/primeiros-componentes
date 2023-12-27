class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componenteRoot = document.createElement("div");
    componenteRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    const autorImg = document.createElement("img");
    autorImg.src = this.getAttribute("autorImgSrc") || "assets/img/default-profile-picture.jpg";
    autor.textContent = "by " + (this.getAttribute("autor") || "Anonymous");
    autor.appendChild(autorImg)

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    newsImage.src =
      this.getAttribute("src") || "assets/img/default-profile-picture.jpg";
    newsImage.alt = this.getAttribute("alt");
    newsImage.setAttribute("class", "darthVaderimg");

    cardRight.appendChild(newsImage);

    componenteRoot.appendChild(cardLeft);
    componenteRoot.appendChild(cardRight);

    return componenteRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
  .card {
    width: 720px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow:
    0px 0px 1.3px rgba(0, 0, 0, 0.085),
    0px 0px 4.5px rgba(0, 0, 0, 0.125),
    0px 0px 20px rgba(0, 0, 0, 0.21)
  ;
  }
  
  .card__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
  }
  
  .card__left > span {
    font-weight: 400;
    width: 164px;
    text-align: center;
    margin-left: 0rem;
    position: relative;
  }
  
  .card__left > span > img {
    width: 20px;
    margin-right: .5rem;
    border-radius: 100%;
    position: absolute;
    left: 0;
  }
  
  .card__left > a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    margin-top: 1rem;
    font-size: 1.6em;
  }
  
  .card__left > p {
    color: #6e6e6e;
  }
  
  .card__right {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  
  .darthVaderimg {
    width: 200px;
    border-radius: 5px;
  }
    `;

    return style;
  }
}

customElements.define("card-news", CardNews);
