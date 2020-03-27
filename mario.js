printPyramid(5)
function firstProgram(){
  document.getElementById("pyramid").innerHTML = x;
}



function printPyramid(height){
  for(let num = 0; num < height; num++){ 
    let space = "";
    for(let spaces = height - num; spaces > 1; spaces--){
      space += " ";
    }
    for(let hash = 0; hash < num + 2; hash++){
      space += "#";
    }
    console.log(space)




  }
}; 
x = printPyramid();