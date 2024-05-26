document.addEventListener('DOMContentLoaded', function() {
  // Validación del campo Nombre
  const nameInput = document.getElementById('name');
  const nameFeedback = document.getElementById('nameFeedback');

  nameInput.addEventListener('input', function(event) {
      if (nameInput.validity.valid && nameInput.value.length >= 3) {
          nameFeedback.style.display = 'none';
          nameInput.classList.remove('is-invalid');
          nameInput.classList.add('is-valid');
      } else {
          nameFeedback.style.display = 'block';
          nameInput.classList.remove('is-valid');
          nameInput.classList.add('is-invalid');
      }
  });

  // Validación del campo Apellido
  const apellidoInput = document.getElementById('apellido');
  const apellidoFeedback = document.getElementById('apellidoFeedback');

  apellidoInput.addEventListener('input', function(event) {
      if (apellidoInput.validity.valid) {
          apellidoFeedback.style.display = 'none';
          apellidoInput.classList.remove('is-invalid');
          apellidoInput.classList.add('is-valid');
      } else {
          apellidoFeedback.style.display = 'block';
          apellidoInput.classList.remove('is-valid');
          apellidoInput.classList.add('is-invalid');
      }
  });

  // Validación del campo Teléfono
  const telefonoInput = document.getElementById('telefono');
  const telefonoFeedback = document.getElementById('telefonoFeedback');

  telefonoInput.addEventListener('keypress', function(event) {
      const keyCode = event.keyCode;
      if (!(keyCode >= 48 && keyCode <= 57) && keyCode !== 43) {
          event.preventDefault(); 
      }
  });

  telefonoInput.addEventListener('input', function(event) {
      if (telefonoInput.validity.valid) {
          telefonoFeedback.style.display = 'none';
          telefonoInput.classList.remove('is-invalid');
          telefonoInput.classList.add('is-valid');
      } else {
          telefonoFeedback.style.display = 'block';
          telefonoInput.classList.remove('is-valid');
          telefonoInput.classList.add('is-invalid');
      }
  });

  // Validación del campo Correo
  const correoInput = document.getElementById('correo');
  const correoFeedback = document.getElementById('correoFeedback');

  correoInput.addEventListener('input', function(event) {
      if (correoInput.validity.valid) {
          correoFeedback.style.display = 'none';
          correoInput.classList.remove('is-invalid');
          correoInput.classList.add('is-valid');
      } else {
          correoFeedback.style.display = 'block';
          correoInput.classList.remove('is-valid');
          correoInput.classList.add('is-invalid');
      }
  });

  // Validación del campo Comuna
  const comunaInput = document.getElementById('comuna');
  const comunaFeedback = document.getElementById('comunaFeedback');

  comunaInput.addEventListener('input', function(event) {
      if (comunaInput.value.trim() !== '') {
          comunaFeedback.style.display = 'none';
          comunaInput.classList.remove('is-invalid');
          comunaInput.classList.add('is-valid');
      } else {
          comunaFeedback.style.display = 'block';
          comunaInput.classList.remove('is-valid');
          comunaInput.classList.add('is-invalid');
      }
  });

  // Validación del campo Dirección
  const direccionInput = document.getElementById('direccion');
  const direccionFeedback = document.getElementById('direccionFeedback');

  direccionInput.addEventListener('input', function(event) {
      if (direccionInput.value.trim() !== '') {
          direccionFeedback.style.display = 'none';
          direccionInput.classList.remove('is-invalid');
          direccionInput.classList.add('is-valid');
      } else {
          direccionFeedback.style.display = 'block';
          direccionInput.classList.remove('is-valid');
          direccionInput.classList.add('is-invalid');
      }
  });

  // Validación del campo Región
  const regionInput = document.getElementById('region');
  const regionFeedback = document.getElementById('regionFeedback');

  regionInput.addEventListener('change', function(event) {
      if (regionInput.value !== '') {
          regionFeedback.style.display = 'none';
          regionInput.classList.remove('is-invalid');
          regionInput.classList.add('is-valid');
      } else {
          regionFeedback.style.display = 'block';
          regionInput.classList.remove('is-valid');
          regionInput.classList.add('is-invalid');
      }
  });

  // Mostrar mensaje en consola al enviar el formulario
  const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', function(event) {
      event.preventDefault();
      console.log('Formulario enviado');
  });
});
