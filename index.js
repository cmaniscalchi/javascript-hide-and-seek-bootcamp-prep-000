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
 rankedLists = document.querySelectorAll('.ranked-list');
 
 for (let n = 0, n < rankedLists.length, n++) {
   rankedLists[n].innerHTML = ( n + 1)
 }
}