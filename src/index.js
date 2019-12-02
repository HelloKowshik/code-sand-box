var result = document.querySelector('.result');
var btn = document.querySelector('.btn');
// btn.addEventListener('click',function(){
//   result.innerHTML = Math.ceil(Math.random()*6);
// });

btn.onclick = function(){
  result.innerHTML = Math.ceil(Math.random()*6);
};