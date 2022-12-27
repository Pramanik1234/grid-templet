let more = document.querySelectorAll('.more')
let invisible=document.querySelectorAll('.invisible-text')
console.log(more)

for(let i = 0 ; i<more.length ; i ++){
    more[i].addEventListener('click',function(){
      more[i].parentNode.childNodes[2].classList.toggle('show-more');
      more[i].parentNode.childNodes[1]. classList.toggle('hide-dot');
      if(more[i].innerHTML=="Read more"){
        more[i].innerHTML="Read less"
      }
      else{
        more[i].innerHTML="Read more"
      }
      
    })
}