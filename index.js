function getFirstSelector(selector) {
  return document.querySelector(selector); 
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
 var rankedLists = document.querySelectorAll('.ranked-list');
 
 for (let i = 0, n < rankedLists.length, n++) {
   rankedLists[n].innerHTML = (n + 1).toString()
 }
 return rankedLists;
}