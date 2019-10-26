
function alertUsername(value){
    alert(value);
};

function alertPassword(event){
    
    var pass = event.target.value;
    var passLength = pass.length;
    if(passLength){
        setTimeout(()=> alert('password is to short'),0);
        event.target.classList.add("error");
    }
}





var elemUsername = document.getElementById("username");
var elemPassword = document.getElementById("password");


elemUsername.addEventListener('blur',(event) =>{
  
    alertUsername(event.target.value)

})
elemPassword.addEventListener('blur',(event)=>{
alertPassword(event);
})