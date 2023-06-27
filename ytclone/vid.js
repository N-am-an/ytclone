const userform=document.querySelector("#user");
const commentform=document.querySelector("#comment");
const submit=document.querySelector(".sub");
const container=document.querySelector(".comment-container")

commentarr=[];
submit.addEventListener('click',submitcomment)

function submitcomment(event){ 

    const user=userform.value;
    const comment=commentform.value;
    if(user && comment !==''){
        newcomment={
            "username":user,
            "usercomment":comment
        }
        commentarr.push(newcomment);
        console.log(newcomment);  
        reset();
        addcomment(newcomment);
    }
   event.preventDefault();

}
function reset(){
    userform.value="";
    commentform.value="";
}
function addcomment(item) {
    const letter=(item.username).charAt(0);
    const div=document.createElement('div');
    div.classList="comment-card";
    div.innerHTML=`   <div class="letter">
    ${letter}
  </div>
  <div class="uname">
    ${item.username}
  </div>
  <div class="card">
   ${item.usercomment}
  </div>
`
container.insertAdjacentElement('beforeend',div);
}