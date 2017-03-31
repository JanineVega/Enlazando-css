window.onload=function(){
  document.getElementById("publicar").addEventListener("click",function(){
    var nombre=document.getElementById("nombre").value;
    var textPost=document.getElementById("textPost").value;
    var createTexto=document.createTextNode(nombre +" "+ "dice:"+" "+textPost);
    var p=document.createElement("p");
    p.appendChild(createTexto);
    var pbl=document.getElementById("contenedor");
    pbl.insertBefore(p,pbl.childNodes[0]);
    formulario.reset();
  });
}
