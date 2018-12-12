
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function deepestChild(){
  const x = document.getElementById('grand-node')
  const y = x.querySelectorAll("div")
  return y[y.length -1]
}

function increaseRankBy(x){
  debugger
  const items = document.querySelectorAll('ul.ranked-list li');
  for (const item of items){
    item.innerHTML = (parseInt(item.innerHTML) + x).toString();
  }
}
