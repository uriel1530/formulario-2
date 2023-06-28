var formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  var nombre = document.getElementById("nombre").value;
  var contraseña = document.getElementById("contraseña").value;
  var correo = document.getElementById("correo").value;
  var telefono = document.getElementById("telefono").value;

  if (nombre === "" || contraseña === "" || correo === "") {
    alert("Debes llenar todos los campos obligatorios");
    return;
  }

  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo)) {
    alert("Debes escribir un correo válido");
    return;
  }

  if (
    telefono !== "" &&
    (!/^\d+$/.test(telefono) || telefono.length < 7 || telefono.length > 10)
  ) {
    alert("Debes escribir un teléfono válido");
    return;
  }

  console.log(nombre, contraseña, correo, telefono);
  alert("Datos enviados correctamente");

  formulario.reset();
});
