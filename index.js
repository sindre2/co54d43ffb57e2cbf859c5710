const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOneEl = document.getElementById("passBoxOne");
let passTwoEl = document.getElementById("passBoxTwo");


function genPass() 
{
    passOneEl.textContent = "";
    passTwoEl.textContent = "";
    
    for (let x = 0; x < 16; x++)
    {
        let randOne = Math.floor(Math.random() * characters.length);
        let randTwo = Math.floor(Math.random() * characters.length);
        
        passOneEl.textContent += characters[randOne];
        passTwoEl.textContent += characters[randTwo];        
    }
}

// Function for copying a html-element. It does this by first creating another input element. The new input element is then filled with the content of either password 1 or 2 and set to the value of a string. Then the element is selected and copied. Finally the input element is deleted. //

function copyText(htmlElement)
{
    if (!htmlElement) {
        return;
    }  else
    {
        let elementText = htmlElement.innerText;
        let inputElement = document.createElement("input");
        
        inputElement.setAttribute("value", elementText);
        document.body.appendChild(inputElement);
        inputElement.select();
        
        document.execCommand("copy");
        inputElement.parentNode.removeChild(inputElement);
    }
}


// On-click functions to run the copyText function //

function copyOne()
{
    copyText(document.querySelector("#passBoxOne"));
    
}


function copyTwo()
{
    copyText(document.querySelector("#passBoxTwo"));
    
}



