
const btn = document.getElementById('btn');
const listUpdate = document.getElementById('listUpdate');
const getDiv = document.querySelector("#head")
getDiv.textContent = "LIST OF NEWLY TRANSFERED PLAYERS"

console.log(getDiv);

// When the button is clicked
btn.onclick = () => {
    // Add new items directly to the list using innerHTML
    listUpdate.innerHTML += '<li>RICARDO CALAFIORI</li>';
    listUpdate.innerHTML += '<li>C. RONALDO</li>';
    listUpdate.innerHTML += '<li>MESSI</li>';
};
