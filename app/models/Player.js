

export class Player {
    constructor(name, imgUrl) {
        this.name = name;
        this.url = imgUrl
        this.score = 0;
    }
    get PlayerCard() {
        return `
        <div class="col-12 p-5">
        <div>
        <img src="
        ${this.imgUrl}">
        <p>${this.name}</p>
        <button class="btn btn-success" onclick="app.PlayerController.increasePlayeScore('ryan')">+</button>
        </div>
    </div>`
    }
}


