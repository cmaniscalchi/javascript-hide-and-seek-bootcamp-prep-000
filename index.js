function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('.ranked-list li')
  for (let li of lis) {
    li.innerHTML = (parseInt(li.innerHTML) + n).toString()
  }
  return lis
}
