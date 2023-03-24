const topPlayers = document.getElementById("top-players");
topPlayers.innerText = "Top Player 2022";
topPlayers.style.color = "Red";

const topBlogs = document.getElementById("top-blogs");
topBlogs.innerText = "Top Blog 2022";
topBlogs.style.color = "Red";

const player = document.getElementsByClassName("player");
for(const players of player)
{
    players.style.backgroundColor = "rgba(255, 99, 71, 1)";
}

document.getElementById("add-item").addEventListener('click', function()
{
    const li = document.createElement("li");
    li.innerHTML =
    `
    <li class="list-group-item">Add New Item</li>
    `;
    const listItem = document.getElementById("list-item");
    listItem.appendChild(li);
    listItem.style.listStyleType = "none"; 
});

document.getElementById("add-number").addEventListener("click", function()
{
    const addInput = document.getElementById("input-number");
    const addNewInput = addInput.value;
    addInput.value = parseInt(addNewInput)+1;
});