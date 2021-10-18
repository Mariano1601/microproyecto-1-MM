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

window.onload = function () {
  const img = [
    "./img/LOGO_HOJALDRE_BAKERY.png",
    "./img/Logo_Playmor1.png",
    "./img/zkygo_black.png",
  ];

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

  const loadSkills = () => {
    const valores = document.getElementById("valores");
    const nameSkills = document.getElementById("name-skills");
    const colors = [
      "green",
      "#1352D1",
      "red",
      "#D9F038",
      "orange",
      "brown",
      "#3F54BB",
      "#2F9B5A",
      "#58D1EC",
      "#7CEA66",
    ];
    const skills = {
      Diseñador_Web: 7,
      Excel_Word_PP: 8,
      Autocad: 6,
      Python_y_Java: 7,
      Español_Inglés: 10,
      Liderazgo: 9,
      Trabajo_Equipo: 9,
    };
    for (const e in skills) {
      let skill = document.createElement("div");
      skill.classList.add("skill");
      skill.style.height = skills[e] * 40 + "px";
      skill.style.backgroundColor = colors[skills[e] - 1];
      valores.appendChild(skill);

      let nameSkill = document.createElement("div");
      nameSkill.innerHTML = e;
      nameSkill.classList.add("skill-name");
      nameSkills.appendChild(nameSkill);
    }
  };

  loadSkills();
};
