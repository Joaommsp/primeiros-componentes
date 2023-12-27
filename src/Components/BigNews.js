class BigNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componenteRoot = document.createElement("div");
    componenteRoot.setAttribute("class", "big-card");

    const newsInfos = document.createElement("div");
    newsInfos.setAttribute("class", "news-infos");

    const authorPhoto = document.createElement("img");
    authorPhoto.setAttribute("class", "authorImg");
    authorPhoto.src = this.getAttribute("author-img") || "assets/img/default-profile-picture.jpg";

    const author = document.createElement("span");
    author.setAttribute("class", "author");
    author.textContent = "by " + (this.getAttribute("author") || "Anônimo");

    const newsContent = document.createElement("div");
    newsContent.setAttribute("class", "newsContent");

    const newsAbout = document.createElement("span")
    newsAbout.textContent = this.getAttribute("about")

    const newsMainImg = document.createElement("img");
    newsMainImg.setAttribute("class", "newsImg");
    newsMainImg.src = this.getAttribute("image");

    const title = document.createElement("a");
    title.setAttribute("class", "news-title");
    title.href = "https://quatrorodas.abril.com.br/noticias/dodge-encerra-producao-de-charger-e-challenger-a-espera-da-eletrificacao/"
    title.setAttribute("target", "_blank")
    title.textContent = this.getAttribute("title");

    const content = document.createElement("p");
    content.textContent = this.getAttribute("content");

    newsInfos.append(authorPhoto, author);
    newsContent.append(newsAbout, newsMainImg, title, content);

    componenteRoot.appendChild(newsInfos);
    componenteRoot.appendChild(newsContent);

    return componenteRoot;
  }

  styles() {
    const styles = document.createElement("style")
    styles.textContent = `
    .big-card {
      width: 720px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow:
      0px 0px 1.3px rgba(0, 0, 0, 0.085),
      0px 0px 4.5px rgba(0, 0, 0, 0.125),
      0px 0px 20px rgba(0, 0, 0, 0.21)
    ;
    }

    .news-infos {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem;
    }

    .authorImg {
      width: 25px;
      border-radius: 100%;
      margin-left: 1rem;
      margin-right: .5rem;
    }

    .newsImg {
      width: 356px;
      border-radius: 5px;
    }

    .author {
      font-weight: 400;
    }

    .newsContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .newsContent > span {
      color: #e22020;
      margin-bottom: 1rem;
    }

    .news-title {
      text-decoration: none;
      color: #000;
      font-size: 1.5rem;
      padding: 0 2rem;
      margin-top: 1rem;
      text-align: center;
      font-weight: 500;
    }

    p {
      text-align: justify;
    }
    `

    return styles
  }
}

customElements.define("big-news", BigNews);
