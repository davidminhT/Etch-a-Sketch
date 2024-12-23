
function setupGrid(num)
{
    const ContainerDiv = document.querySelector("#container");
    ContainerDiv.style.width = `${Math.sqrt(num) * 52}px`;
    ContainerDiv.style.height = `${Math.sqrt(num) * 52}px`;
    for(let i = 0; i < num; i++)
    {
        const gridSquare = document.createElement("div");

        gridSquare.className = "square";
        gridSquare.style.width= "50px";
        gridSquare.style.height = "50px";
        ContainerDiv.appendChild(gridSquare);
    }
}

setupGrid(64);