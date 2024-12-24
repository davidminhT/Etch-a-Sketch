
function setupGrid(num)
{
    const ContainerDiv = document.querySelector("#container");
    ContainerDiv.innerHTML = '';
    const length = 600;
    ContainerDiv.style.width = `${length}px`;
    ContainerDiv.style.height = `${length}px`;

    let SquareSize = Math.floor(length / Math.ceil(Math.sqrt(num)));

    for(let i = 0; i < num; i++)
    {
        const GridSquare = document.createElement("div");
        GridSquare.className = "square";

        //styling
        GridSquare.style.width = `${SquareSize}px`;
        GridSquare.style.height = `${SquareSize}px`;
        GridSquare.style.backgroundColor = "lightcyan";
        GridSquare.style.border = "1px solid black";
        GridSquare.style.boxSizing = "border-box";

        //Event listeners
        GridSquare.addEventListener("mouseover", () => {
            if(KeyPressed) 
                GridSquare.style.backgroundColor = "red";
        });

        //Append the GridSquare
        ContainerDiv.appendChild(GridSquare);
    }
}

var GlobalGridSize = 64;
setupGrid(64);

const button = document.querySelector("#btn1");
button.addEventListener("click", () => {
    NewGridSize = prompt("Enter the new size of grid!");
    if(NewGridSize > 100)
        GlobalGridSize = 100;
    else if(NewGridSize < 1)
        GlobalGridSize = 1;
    else
        GlobalGridSize = NewGridSize;
    setupGrid(GlobalGridSize);
});

document.addEventListener("keydown", (e) => {
    if(e.key === "r")
    {
        setupGrid(GlobalGridSize);
    }
});

let KeyPressed = false;

document.addEventListener('keydown', (e) => {
    if (e.key === "Shift")      
    {
        KeyPressed = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === "Shift")      
    {
        KeyPressed = false;
    }
});

