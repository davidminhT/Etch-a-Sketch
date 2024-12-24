
function setupGrid(num)
{
    const ContainerDiv = document.querySelector("#container");
    ContainerDiv.innerHTML = '';
    const length = 800;
    ContainerDiv.style.maxWidth = `${length}px`;
    ContainerDiv.style.maxHeight = `${length}px`;

    //Event listener for shift key
    let KeyPressed = false;

    document.addEventListener('keydown', (e) => {
        if (e.key === "Shift") {
            KeyPressed = true;
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === "Shift") {
            KeyPressed = false;
        }
    });
    

    let SquareSize = (length / num);

    for(let i = 0; i < num*num; i++)
    {
        const GridSquare = document.createElement("div");
        GridSquare.className = "square";

        //styling
        GridSquare.style.width = `${SquareSize}px`;
        GridSquare.style.height = `${SquareSize}px`;
        GridSquare.style.backgroundColor = "lightcyan";

        //Event listener
        GridSquare.addEventListener('mousemove', (e) => {
            if (KeyPressed)     
            {
                GridSquare.style.backgroundColor = "red";
            }
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
    if(NewGridSize > 600)
        GlobalGridSize = 600;
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



