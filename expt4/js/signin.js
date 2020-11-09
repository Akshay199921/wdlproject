document.getElementById('reset-btn').addEventListener('click', function(){
    document.getElementById('inputEmail').value = "";
    document.getElementById('inputPassword').value = "";
});

document.getElementById('signup').addEventListener('click',function(){
    window.location.href="./signup.html"
})