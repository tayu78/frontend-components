
class Player{
    constructor(name,team,position) {
        this.name = name;
        this.team = team;
        this.position = position;
    }
}


   function displayPlayerList(key) {
        if (localStorage.getItem(key)) {
            addPlayerList(JSON.parse(localStorage.getItem(key)))
        }
    }

   function addPlayerList(players) {
        const playerList = document.getElementById("playerList")
        players.forEach(player => {
            const row = document.createElement('tr');
            row.className = "border-y-2";
            row.innerHTML = `
            <td class="py-3">${player.name}</td>
            <td >${player.team}</td>
            <td>${player.position}</td>
            <td><button class="delete-btn">delete</button></td>
            `

            playerList.appendChild(row);
        })
    }

    function removeFromDOM(el) {
        el.parentNode.parentNode.remove()
    }

    function removeInput() {
        const ids = ["name","team","position"]
        ids.forEach((id) => {
            document.getElementById(id).value = ""
        })
        
    }

     function showAlert(message,caseOfAlert) {
        const div = document.createElement("div");
        div.className = `alert-${caseOfAlert}`
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container")
        const form = document.getElementById("playerForm")
        container.insertBefore(div, form);
        setTimeout(() => container.removeChild(div), 3000);
    }




class Storage{
    static getDataFromLocalStorage(key) {
        return localStorage.getItem(key)? JSON.parse(localStorage.getItem(key)) : []
    }

    static addToLocalStorage(players) {
        const playersInStorage = Storage.getDataFromLocalStorage("players");
        const newPlayers = [...playersInStorage,...players]
        localStorage.setItem("players", JSON.stringify(newPlayers));
    }

    
    static removeFromLocalStorage(key, name) {
        const currentPlayers = Storage.getDataFromLocalStorage(key)
        const newPlayers = currentPlayers.filter((el) => el.name !== name);
        localStorage.setItem("players",JSON.stringify(newPlayers))
    }
}

// Event display player
document.addEventListener('DOMContentLoaded', displayPlayerList("players"));

// // Event add a player
document.getElementById("playerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const team = document.getElementById("team").value;
    const position = document.getElementById("position").value;
    if (name && team && position) {
        const player = new Player(name, team, position);
        const players = [player]
        addPlayerList(players);
        Storage.addToLocalStorage(players);
        removeInput();
        showAlert("successfully added!","success")
    } else { 
        showAlert("plese fill in  all input field", "danger");
    }
})

// // event remove a player
document.getElementById("playerList").addEventListener("click",(e) => {
    if (e.target.classList.contains("delete-btn")) {
        removeFromDOM(e.target);
        const playerName = e.target.parentNode.parentNode.firstElementChild.textContent
        Storage.removeFromLocalStorage("players", playerName);
        
        showAlert("successfully deleted player!","success" )
    }
})

document.getElementById("search-player-input").addEventListener("keyup", (e) => {
    const inputValue = e.target.value.toUpperCase()
    const playerList = document.getElementById("playerList").getElementsByTagName("tr")
    for (let i = 0; i < playerList.length; i++){
        const playerName = playerList[i].firstElementChild.textContent.toUpperCase()
        if (playerName.indexOf(inputValue) > -1) {
            playerList[i].style.display = "" 
        } else {
            playerList[i].style.display = "none"
        }
    }

})