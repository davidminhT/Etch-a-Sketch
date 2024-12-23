
function setupGrid(num)
{
    const ContainerDiv = document.querySelector("#container");
    ContainerDiv.innerHTML = '';
    ContainerDiv.style.width = `${Math.sqrt(num) * 52}px`;
    ContainerDiv.style.height = `${Math.sqrt(num) * 52}px`;
    for(let i = 0; i < num; i++)
    {
        const GridSquare = document.createElement("div");

        GridSquare.className = "square";
        GridSquare.style.width= "50px";
        GridSquare.style.height = "50px";
        GridSquare.backgroundColor = "light-cyan"
        ContainerDiv.appendChild(GridSquare);
    }
}

function turnOn(GridSquare)
{
    GridSquare.
}

setupGrid(64);

const button = document.querySelector("#btn1");
button.addEventListener("click", () => {
    const NewGridSize = prompt("Enter the new size of grid!");
    setupGrid(NewGridSize);


});