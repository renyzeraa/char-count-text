$('.caracteres').text(0)
$('.palavras').text(0)

$('textarea').on('keyup paste change', function () {
  setTimeout(() => {
    const val = $(this).val()
    $('.caracteres').text(val.length)
    $('.palavras').text($(this).val().split(' ').length)
  }, 100)
})

$('textarea').text('eu estou testando mas sou burro')
setTimeout(() => {
  $('textarea').val('')
}, 1500)
