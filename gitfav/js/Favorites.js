import { GithubUser } from "./GithubUser.js";

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  };

  load() {
    const entries = JSON.parse(localStorage.getItem("@github-favorites:")) || [];
    this.entries = entries;
  };

  save() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.entries));
  };

  async add(username) {
    try {
      const userExissts = this.entries.find(entry => entry.login === username);
      
      if (userExissts) {
        throw new Error("Usuário já cadastrado.");
      };

      const user = await GithubUser.search(username);
      if (user.login === undefined) {
        throw new Error("Usuário não encontrado.");
      };
      this.entries = [user, ...this.entries];
      this.update();
      this.save();
    } catch (error) {
      alert(error);
    };
  };

  delete(user) {
    const filteredEntries = this.entries.filter(entry => entry.login !== user.login);
    this.entries = filteredEntries;
    this.update();
    this.save();
  };
};

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    this.update();
    this.onadd();
  };

  onadd() {
    const addButton = this.root.querySelector(".search button");
    addButton.onclick = () => {
      const { value } = this.root.querySelector(".search input");
      this.add(value);
    };
  };

  update() {
    this.removeAllTr();
    this.entries.forEach(user => {
      const row = this.createRow();
      row.querySelector(".user img").src = `https://github.com/${user.login}.png`;
      row.querySelector(".user img").alt = `Imagem de ${user.name}`;
      row.querySelector(".user p").textContent = user.name;
      row.querySelector(".user a").href = `https://github.com/${user.login}`;
      row.querySelector(".user span").textContent = `/${user.login}`;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;
      row.querySelector(".remove").onclick = (event) => {
        const isOk = confirm("Tem certeza que deseja deletar essa linha?");
        if (isOk) {
          this.delete(user);
        };
      };
      this.tbody.appendChild(row);
    });
    this.handleEmptyContainer();
  };

  createRow() {
    const tr = document.createElement("tr");
    const content = `
      <tr>
        <td class="user">
          <img src="https://github.com/leonardojacomussi.png" alt="Leonardo Jacomussi">
          <a href="https://github.com/leonardojacomussi" target="_blank">
            <p>Leonardo Jacomussi</p>
            <span>leonardojacomussi</span>
          </a>
        </td>
        <td class="repositories">
          8
        </td>
        <td class="followers">
          16
        </td>
        <td>
          <button class="remove">Remover</button>
        </td>
      </tr>
    `;
    tr.innerHTML = content;
    return tr;
  };

  removeAllTr() {
    this.tbody.querySelectorAll("tr")
      .forEach(tr => {
        tr.remove();
      });
  };

  handleEmptyContainer() {
    const emptyContainer = document.querySelector("#empty");
    if (this.entries.length > 0) {
      emptyContainer.classList.add("hide");
    } else {
      emptyContainer.classList.remove("hide");
    }
    console.log("aquii")
  };
};