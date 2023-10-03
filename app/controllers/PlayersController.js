import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"



export class PlayersController {
    constructor() {
        console.log('player controller is working')
        console.log('looking for player in the AppState')
        drawPlayers
    }
}


function drawPlayers() {
    const players = AppState.players

    let content = ''

    players.forEach(player => content += player.PlayerTemplateCard)

    setHTML('PlayerHTML', content)
}



