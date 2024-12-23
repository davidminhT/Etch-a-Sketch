
function setupGrid(num)
{
    const ContainerDiv = document.querySelector("#container");
    ContainerDiv.innerHTML = '';
    ContainerDiv.style.width = `${Math.sqrt(num) * 52}px`;
    ContainerDiv.style.height = `${Math.sqrt(num) * 52}px`;
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

    for(let i = 0; i < num; i++)
    {
        const GridSquare = document.createElement("div");

        //styling
        GridSquare.className = "square";
        GridSquare.style.width= "50px";
        GridSquare.style.height = "50px";
        GridSquare.style.backgroundColor = "lightcyan";
        GridSquare.style.border = "2px solid black";
        GridSquare.tabIndex = 0;

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
    GlobalGridSize = prompt("Enter the new size of grid!");
    setupGrid(GlobalGridSize);
});

document.addEventListener("keydown", (e) => {
    if(e.key === "r")
    {
        setupGrid(GlobalGridSize);
    }
});

