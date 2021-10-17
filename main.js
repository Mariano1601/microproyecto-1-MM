window.onload = function () {
  const img = ["", "", ""];

  const intervalo_img = 3000;
  let actual_position = 0;
  let $img = document.querySelector("#img");
  let intervalo;

  function next_img() {
    if (actual_position >= img.length - 1) {
      actual_position = 0;
    } else {
      actual_position++;
    }
    render_img();
  }
  function last_img() {
    if (actual_position <= 0) {
      actual_position = img.length - 1;
    } else {
      actual_position--;
    }
    render_img();
  }

  function render_img() {
    $img.style.backgroundImage = `url(${img[actual_position]}`;
  }

  function carousel() {
    intervalo = setInterval(next_img, intervalo_img);
  }

  render_img();
  carousel();
};

const validatedEmail = (email) => {
  return /^[a-zA-Z0-9!#$%&'*+/=?¿^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
    email
  );
};

const validateName = (name) => {
  return /^[a-zA-Z\s]+(?![0-9!#$%&'*+/=?¿^_`{|}~-])$/.test(name);
};

const validateName2 = (name) => {
  validate = true;
  name.split("").forEach((e) => {
    if (!isNaN(e) || e == "'" || e == "(" || e == "@") {
      validate = false;
    }
  });
  console.log(validate);
  return validate;
};

const resetForm = (email, nombre) => {
  email.style.borderColor = "gray";
  nombre.style.borderColor = "gray";
};

const submitForm = (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const nombre = document.getElementById("name");
  const mensaje = document.getElementById("mensaje");

  const valueEmail = email.value;
  const valueNombre = nombre.value;
  const valueMensaje = mensaje.value;

  resetForm(email, nombre);

  if (validatedEmail(valueEmail) && validateName(valueNombre)) {
    console.log({
      Nombre: valueNombre,
      email: valueEmail,
      mensaje: valueMensaje,
    });
    alert("Formulario envido con exito");
  } else if (!validateName(valueNombre) && !validatedEmail(valueEmail)) {
    email.style.borderColor = "red";
    nombre.style.borderColor = "red";
    alert("correo y nombre no validos");
  } else if (!validatedEmail(valueEmail)) {
    alert("Correo no valido");
    email.style.borderColor = "red";
    console.log("formulario no enviado");
  } else if (!validateName(valueNombre)) {
    console.log("formulario no enviado");
    nombre.style.borderColor = "red";
    alert("Nombre no valido");
  }
};
