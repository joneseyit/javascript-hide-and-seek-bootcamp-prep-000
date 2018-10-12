function getFirstSelector(selector){
  return document.querySelector(selector);
}

// function nestedTarget(){
//   const nestedList = document.querySelector('#ndiv div div div );
 
// return  nestedList;
// }

function increaseRankBy(n){
  const currentRank = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  console.log(currentRank.length, 'length of ranks');
  for(let i = 0; i < currentRank.length; i++){
    console.log(currentRank[i].innerHTML, 'rankHTML');
    console.log(currentRank[i],'this is I plus stuff')
  currentRank[i].innerHTML = n + parseInt(currentRank[i].innerHTML, 10);
    console.log(currentRank[i].innerHTML, 'rankHTML');
  }
}

function deepestChild(){
  const grandNode = document.getElementById('grand-node').querySelectorAll('div');
  
}