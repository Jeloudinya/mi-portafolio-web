$(document).ready(function () {
  console.log('jQuery FUNCIONANDO');

  $('#formContacto').on('submit', function (e) {
    e.preventDefault();

    const nombre = $('#nombre').val().trim();
    const email = $('#email').val().trim();
    const mensaje = $('#mensaje').val().trim();

    if (nombre === '' || email === '' || mensaje === '') {
      $('#resultado').html('Todos los campos son obligatorios.')
                     .css('color', 'red');
    } else {
      $('#resultado').html('Gracias por tu mensaje. Te contactaré pronto.')
                     .css('color', 'green');
      this.reset();
    }
  });
  
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    const destino = $(this.getAttribute('href'));

    if (destino.length) {
      $('html, body').animate(
        {
          scrollTop: destino.offset().top
        },
        800
      );
    }
  });

});