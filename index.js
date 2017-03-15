function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var lis=document.querySelectorAll('.ranked-list')
  for (var i=0;i<lis.length;i++){
    lis[i].innerHTML=(parseInt(lis[i],10)+n)
  }
  return lis
}

function deepestChild(){
  var lis=document.querySelector('div#grand-node')
  lis=lis.querySelector('div')
  return lis
}
