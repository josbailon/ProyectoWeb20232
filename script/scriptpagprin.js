function loguear()
{
    var email=document.getElementById("e1313064816@live.uleam.edu.ec").value;
    var password=document.getElementById("123456789").value;
    if(email=="e1313064816@live.uleam.edu.ec" && password=="123456789")
    {
        window.location="index.html"
    }
    else{
        alert("Datos Incorrectos")
    }
}

function Registrar()
{
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    var email, passwordregis, confpass,nombre;
nombre = document.getElementById("name").value;
    email = document.getElementById("email").value;
    passwordregis = document.getElementById("passwordregis").value
    confpass = document.getElementById("confpass").value

    if(email!=="" && passwordregis!=="" && confpass!==""){
        if(!re.exec(email)){
            alert('email no valido');
        }
        else {
            if(passwordregis==confpass){
                alert("Registro con exito")
                window.location="index.html"
              }
              else{
                alert("las contraseñas no coindicen")
              }
        }
        
    }else {
        alert("Ingrese todos los datos")
    }

}
const signUpButton = document.getElementById('signUp');
            const signInButton = document.getElementById('signIn');
            const container = document.getElementById('container');
            
            signUpButton.addEventListener('click', () => {
                container.classList.add("right-panel-active");
            });
            
            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });