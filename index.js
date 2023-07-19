const gameBoard=(function()
{ 
   const Player=(name, marker)=> 
{
  const getMarker = () =>
  {
    return marker;
  }
  
  const getName = () =>
  {
    return name;
  }
  
  return {getMarker,getName};
}

const gameboard=["","","","","","","","",""];

function display()
{   
	let count=0;
	const myBoard=document.createElement("table");
	for(let i=0;i<3;i++)
	{
		const myRow=document.createElement("tr");
		for(let j=0;j<3;j++)
		{
			const myCell=document.createElement("td");
			myCell.innerText=gameboard[count];
			count++;
			myRow.appendChild(myCell);
		}
	    myBoard.appendChild(myRow);
	}	
	document.querySelector("main").appendChild(myBoard);
}

function removeAllChildren(contain)
{
	const myContainer=document.querySelector(contain);
	let child=myContainer.lastElementChild;
	while (child) 
	{
            myContainer.removeChild(child);
            child = myContainer.lastElementChild;
    }
	myContainer.remove();
}

function checkWhoWins()
{
	const checkMatrix=[];
	
	checkMatrix.push(gameboard[0]===gameboard[1]&&gameboard[1]===gameboard[2]&&gameboard[1]!=="");
	checkMatrix.push(gameboard[3]===gameboard[4]&&gameboard[4]===gameboard[5]&&gameboard[4]!=="");
	checkMatrix.push(gameboard[6]===gameboard[7]&&gameboard[7]===gameboard[8]&&gameboard[7]!=="");
	checkMatrix.push(gameboard[0]===gameboard[3]&&gameboard[3]===gameboard[6]&&gameboard[3]!=="");
	checkMatrix.push(gameboard[1]===gameboard[4]&&gameboard[4]===gameboard[7]&&gameboard[4]!=="");
	checkMatrix.push(gameboard[2]===gameboard[5]&&gameboard[5]===gameboard[8]&&gameboard[5]!=="");
	checkMatrix.push(gameboard[0]===gameboard[4]&&gameboard[4]===gameboard[8]&&gameboard[4]!=="");
	checkMatrix.push(gameboard[2]===gameboard[4]&&gameboard[4]===gameboard[6]&&gameboard[4]!=="");
	console.log(checkMatrix);
	console.log(gameboard);
	
	return checkMatrix.findIndex( (aWin)=>aWin===true );
}

document.querySelector("button").addEventListener("click",function()
															{
																if(document.querySelector("table")!==null)
																{
		                                                           removeAllChildren("table");
																   display();
															    }
																document.querySelector("form").style.visibility = "hidden";
																document.querySelector("button").style.visibility = "hidden";
																
																const chooseMarkers=document.querySelectorAll("input[name='markers']");
																let playerMarker,computerMarker="";
																if(chooseMarkers[0].checked)
																{
																	playerMarker=chooseMarkers[0].value;
																	computerMarker=chooseMarkers[1].value;
																}
																else
																{
																	playerMarker=chooseMarkers[1].value;
																	computerMarker=chooseMarkers[0].value;
																}
																const player1=Player(prompt("Welcome.Please enter your name:","anonymous"),playerMarker);
																const computer = Player('MegaComputer', computerMarker);
																document.querySelector("aside p").innerText="Your marker is '"+playerMarker+"'"+"\nComputers marker is '"+computerMarker+"'";
																
																cells=document.querySelectorAll("td");
																let counter=0,continueGame=true;
																let theWinner="It is a tie. No one wins!";
																for(let i=0;i<cells.length;i++)
                                                                    cells[i].addEventListener("click",function()
										                                                              {
																										  const howMany=gameboard.filter(gameboardEl=>gameboardEl!=="");
																										  
																										  if(this.innerText===""&&continueGame===true&&howMany.length%2===0)
																										  {
																											  
																											  this.innerText=player1.getMarker();
																											  gameboard[i]=player1.getMarker();
																											  counter++;
																											  if(counter>4)
																											  {
																												 if(checkWhoWins()!==-1)
																												 {
																													  
																													  console.log(gameboard);
																													  console.log(checkWhoWins());
																													  continueGame=false;
																													  theWinner=player1.getName()+" you won! Congratulations\n";
																													  switch(checkWhoWins())
																													  {
																														  case 0:
																															cells[0].style.backgroundColor="yellow";
																															cells[1].style.backgroundColor="yellow";
																															cells[2].style.backgroundColor="yellow";
																															break;
																														  case 1:
																															cells[3].style.backgroundColor="yellow";
																															cells[4].style.backgroundColor="yellow";
																															cells[5].style.backgroundColor="yellow";
																															break;
																														  case 2:
																															cells[6].style.backgroundColor="yellow";
																															cells[7].style.backgroundColor="yellow";
																															cells[8].style.backgroundColor="yellow";
																															break;
																														  case 3:
																															cells[0].style.backgroundColor="yellow";
																															cells[3].style.backgroundColor="yellow";
																															cells[6].style.backgroundColor="yellow";
																															break;
																														  case 4:
																															cells[1].style.backgroundColor="yellow";
																															cells[4].style.backgroundColor="yellow";
																															cells[7].style.backgroundColor="yellow";
																															break;
																														  case 5:
																															cells[2].style.backgroundColor="yellow";
																															cells[5].style.backgroundColor="yellow";
																															cells[8].style.backgroundColor="yellow";
																															break;
																														  case 6:
																															cells[0].style.backgroundColor="yellow";
																															cells[4].style.backgroundColor="yellow";
																															cells[8].style.backgroundColor="yellow";
																															break;
																														  case 7:
																															cells[2].style.backgroundColor="yellow";
																															cells[4].style.backgroundColor="yellow";
																															cells[6].style.backgroundColor="yellow";
																															break;
																														  default:
																															console.log("Something is wrong!");
																													  }
																												  }
																											   } 
																											  
																											  
																												  
																											  // Computers turn
																											  
																											  let cpPlay=true;
																											  if(counter<9&&continueGame===true)
																											  {
																												  function delayPC()
																												  {
																													do
																											        {
																												     let randomPosition= Math.floor(Math.random() * 9);
																												    console.log("Random "+randomPosition);
																												    if(cells[randomPosition].innerText==="")
																												    {
																													  cells[randomPosition].innerText=computer.getMarker();
																													  gameboard[randomPosition]=computer.getMarker();
																													  cpPlay=false;
																												     }	 
																											        }while(cpPlay); 
																													counter++; 
																												 console.log("My counter is "+counter);
																												 if(counter>4)
																											     {
																												  if(checkWhoWins()!==-1)
																												  {
																													  switch(checkWhoWins())
																													  {
																														  case 0:
																															cells[0].style.backgroundColor="yellow";
																															cells[1].style.backgroundColor="yellow";
																															cells[2].style.backgroundColor="yellow";
																															break;
																														  case 1:
																															cells[3].style.backgroundColor="yellow";
																															cells[4].style.backgroundColor="yellow";
																															cells[5].style.backgroundColor="yellow";
																															break;
																														  case 2:
																															cells[6].style.backgroundColor="yellow";
																															cells[7].style.backgroundColor="yellow";
																															cells[8].style.backgroundColor="yellow";
																															break;
																														  case 3:
																															cells[0].style.backgroundColor="yellow";
																															cells[3].style.backgroundColor="yellow";
																															cells[6].style.backgroundColor="yellow";
																															break;
																														  case 4:
																															cells[1].style.backgroundColor="yellow";
																															cells[4].style.backgroundColor="yellow";
																															cells[7].style.backgroundColor="yellow";
																															break;
																														  case 5:
																															cells[2].style.backgroundColor="yellow";
																															cells[5].style.backgroundColor="yellow";
																															cells[8].style.backgroundColor="yellow";
																															break;
																														  case 6:
																															cells[0].style.backgroundColor="yellow";
																															cells[4].style.backgroundColor="yellow";
																															cells[8].style.backgroundColor="yellow";
																															break;
																														  case 7:
																															cells[2].style.backgroundColor="yellow";
																															cells[4].style.backgroundColor="yellow";
																															cells[6].style.backgroundColor="yellow";
																															break;
																														  default:
																															console.log("Something is wrong!");
																													  }
																													  console.log(checkWhoWins());
																													  
																													  continueGame=false;
																													  theWinner=computer.getName()+" won! Too bad. Try again\n";
																													  document.querySelector("form").style.visibility = "visible";
																												     document.querySelector("button").style.visibility = "visible"; 
																												     document.querySelector("aside p").innerText=theWinner+"The game has ended! If want to start a new game press the button.";
																												 
																												     for(let i=0;i<gameboard.length;i++)
																													    gameboard[i]="";
																												      
																												    }
																											      }
																												}
																												  
																												  const myDelay=setTimeout(delayPC,2000);
																												  
																											     
																											  }
																											  else
																											  {
																												 document.querySelector("form").style.visibility = "visible";
																												 document.querySelector("button").style.visibility = "visible"; 
																												 document.querySelector("aside p").innerText=theWinner+"The game has ended! If want to start a new game press the button.";
																												 continueGame=false;
																												 for(let i=0;i<gameboard.length;i++)
																													gameboard[i]="";
																												 
																											  }  
																										  }
																										  else
																										  {
																											  if(continueGame===false)
																											  {
																												 alert("The game has ended! Please press the button for a new one!");
																											  } 
																											  else if(howMany.length%2!==0)
																											  {
																												  alert("Please wait for computers turn!");
																											  }
																											  else
																												  alert("This position is already taken. Please choose another!");
																										  }
																										
																										
										                                                              });
															});



display();
}
)();
