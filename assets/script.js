function loguear()
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if(user=="321" && pass=="123")
    {
        window.location="assets/welcome.html";
    }
    else
    {
        alert("Datos incorrectos");
    }
}