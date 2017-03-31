window.onload=function(){


  document.getElementById("login").addEventListener("click",function(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var usuarios=[{correo:"janine@vega.com", contrasena:123456}];
    var advertencia=document.getElementById("advertencia");
    for(var prop in usuarios){
      if(usuarios[prop].correo==email && usuarios[prop].contrasena==password){
        window.location.href="publicar.html";
      }else{
        advertencia.innerHTML="Usuario no registrado";
      }
    }

  });
}
