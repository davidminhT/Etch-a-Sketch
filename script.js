
//Opacity
const OpacitySlider = document.getElementById("ColorIntensityRange");
let UserSetOpacity = parseFloat(OpacitySlider.value);
let OpacityLabel = document.getElementById("ColorIntensityLabel");
OpacitySlider.addEventListener("input", () => {
    UserSetOpacity = parseFloat(OpacitySlider.value);
    OpacityLabel.textContent = UserSetOpacity.toFixed(1);
});


//Pause Duration
//Last Update
var PauseDuration = 50;
var LastOpacityUpdateTime = 0;
function setupGrid(num)
{
    const ContainerDiv = document.querySelector("#container");
    const GridSizeLabel = document.getElementById("GridSizeLabel")
    GridSizeLabel.textContent = num;
    GlobalGridSize = num;

    ContainerDiv.innerHTML = '';
    const length = 706;
    ContainerDiv.style.maxWidth = `${length}px`;
    ContainerDiv.style.maxHeight = `${length}px`;
    ContainerDiv.style.backgroundColor = "white";
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
        GridSquare.style.outline = "0.8px solid grey";
        
        //Event listener
        GridSquare.addEventListener('mousemove', (e) => {
            const StartTime = Date.now();
            const CurrentColor = document.getElementById("favcolor").value;
            if (KeyPressed)     
            {
                GridSquare.style.backgroundColor = CurrentColor;
                if(GridSquare.style.opacity === "0.1")
                {
                    GridSquare.style.opacity = UserSetOpacity;
                }
                if(StartTime - LastOpacityUpdateTime > PauseDuration) 
                {
                    const currentOpacity = parseFloat(window.getComputedStyle(GridSquare).opacity);
                    GridSquare.style.opacity = Math.min(currentOpacity + 0.1, 1);  
                    LastOpacityUpdateTime = StartTime;
                }
                
                GridSquare.classList.add("pop-effect");
                setTimeout(() => {
                    GridSquare.classList.remove("pop-effect");
                }, 200);
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

document.addEventListener("keydown", (e) => {
    if(e.key === "r")
    {
        setupGrid(GlobalGridSize);
    }
});



