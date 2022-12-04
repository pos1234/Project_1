   $('#togglei').click(()=>{
   $('#togglei').toggleClass('fa-x');
   });
let mybutton = $('#backtop');
window.onscroll = ()=>{
    scrollback();
};
let scrollback = ()=>{
if(document.body.scrollTop>550||document.documentElement.scrollTop>550){
    mybutton.css('display','block');
}else{
    mybutton.css('display','none');
}
}
mybutton.click(()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
});
