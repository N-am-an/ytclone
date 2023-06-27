var suggestion=[
    'Raja Jait Singh Diwali fest vlog',
    'Another one bites the dust -Queen',
    'Hotel California Live -The Eagles',
    'Something in the way -Nirvana',
    'Kya leke aya jagat mein - Kabir cafe',
    'Kal ho Na Ho SRK Speech-BEST of SRK',
    'Kindi chale tu Pahadi folk',
    'Let it be -The Beatles',
    'A man without love(MOON KNIGHT) -Engelbert Hemperdinck',
    'Me at the zoo',
    'Playing with time',
    'Youtube clone project',
    'Traffic Rule awareness at RJGP neemka',
    'AI vs AI two chatbots talking to each other',
    'Universe size comparison'
]
const resultbox=document.querySelector('.result-box');
const searchbox=document.querySelector('#searchbox');
const searchbtn=document.querySelector('#searchbtn');

searchbox.onkeyup=function(){
    let result=[];
    let input=searchbox.value;
    if(input.length){
        result=suggestion.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase())
        });
     display(result);
    }
}
function display(result){
    const content=result.map((list)=>{
        return "<li onclick=select(this)>"+list+"</li>";
    })
    resultbox.innerHTML="<ul>"+content.join("")+"</ul";
}
function select(list){
 searchbox.value=list.innerHTML;
 resultbox.innerHTML="";
 console.log(searchbox.value);
}
 searchbtn.addEventListener('click',function(){
    if(searchbox.value==='Raja Jait Singh Diwali fest vlog'){
        window.location.href="/video.html";
    }
  else if(searchbox.value=='Another one bites the dust -Queen'){
        window.location.href="/video2.html";
    }
   else if(searchbox.value=='Hotel California Live -The Eagles'){
        window.location.href="/video3.html";
    }
    else if(searchbox.value=='Something in the way -Nirvana'){
        window.location.href="/video4.html";
    }
   else if(searchbox.value=='Kya leke aya jagat mein - Kabir cafe'){
       window.location.href="/video5.html";
    }
    else if(searchbox.value==  'Kal ho Na Ho SRK Speech-BEST of SRK'){
        window.location.href="/video6.html";
    }
   else if(searchbox.value== 'Kindi chale tu Pahadi folk'){
        window.location.href="/video7.html";
    }
    else if(searchbox.value== 'Let it be -The Beatles'){
        window.location.href="/video8.html";
    }
    else if(searchbox.value=='A man without love(MOON KNIGHT) -Engelbert Hemperdinck'){
        window.location.href="/video9.html";
    }
    else if(searchbox.value=='Me at the zoo'){
        window.location.href="/video10.html";
    }
    else if(searchbox.value=='Traffic Rule awareness at RJGP neemka'){
        window.location.href="/video11.html";
    }
    else if(searchbox.value=='Playing with time'){
        window.location.href="/video12.html";
    }
    else if(searchbox.value== 'Youtube clone project'){
        window.location.href="/video13.html";
    }
    else if(searchbox.value== 'AI vs AI two chatbots talking to each other'){
        window.location.href="/video14.html";
    }
    else if(searchbox.value== 'Universe size comparison'){
        window.location.href="/video15.html";
    }
    else{
        window.location.href="error.html";
    }

});
