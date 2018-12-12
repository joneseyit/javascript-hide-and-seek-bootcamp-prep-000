
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
  for (let i = 0; i < items.length; i++){
    debugger
    items[i].innerHTML = (parseInt(items[i].innerHTML) + x).toString();
  }
  return items
}
