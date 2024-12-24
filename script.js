
function setupGrid(num)
{
    const ContainerDiv = document.querySelector("#container");
    ContainerDiv.innerHTML = '';
    const length = 700;
    ContainerDiv.style.maxWidth = `${length}px`;
    ContainerDiv.style.maxHeight = `${length}px`;
    ContainerDiv.style.border = "1px solid black";

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

    let ErasedKeyPressed = false;

    document.addEventListener('keydown', (e) => {
        if (e.key === "q") {
            ErasedKeyPressed = true;
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === "q") {
            ErasedKeyPressed = false;
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
        GridSquare.style.backgroundColor = "white";
        GridSquare.style.opacity = 0.1;
        GridSquare.style.outline = "0.5px solid grey";
        
        //Event listener
        GridSquare.addEventListener('mousemove', (e) => {
            var CurrentColor = document.getElementById("favcolor").value;
            if (KeyPressed)     
            {
                const currentOpacity = parseFloat(window.getComputedStyle(GridSquare).opacity);
                if(currentOpacity < 1) 
                {
                    GridSquare.style.backgroundColor = CurrentColor;
                    GridSquare.style.opacity = currentOpacity + 0.1;
                }
            }
            else if (ErasedKeyPressed)
            {
                GridSquare.style.backgroundColor = "white";
                GridSquare.style.opacity = 0.1;
            }
        });

        //Append the GridSquare
        ContainerDiv.appendChild(GridSquare);
    }
}

var GlobalGridSize = 32;
setupGrid(32);

const button = document.querySelector("#btn1");
button.addEventListener("click", () => {
    NewGridSize = prompt("Enter the new size of grid!");
    if(NewGridSize > 64)
        GlobalGridSize = 64;
    else if(NewGridSize < 1 || NewGridSize == " ")
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



