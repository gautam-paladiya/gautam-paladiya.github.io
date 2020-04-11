$(document).ready(function (e) {
  $win = $(window)
  $navbar = $('#header')
  $toggle = $('.tgl-btn')
  var width = $navbar.width()
  toggle($win, $navbar, width)

  $win.resize(function () {
    toggle($win, $navbar, width)
  })

  $toggle.click(function () {
    $navbar.toggleClass('toggle-left')
  })
})

function toggle ($win, $navbar, width) {
  if ($win.width() <= 774) {
    $navbar.css({ left: `-${width}px` })
  } else {
    $navbar.css({ left: '0px' })
  }
}

var typed = new Typed('#typed', {
  strings: ['Web Developer', 'Freelancer'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
})

var typed2 = new Typed('#typed_2', {
  strings: ['Web Developer', 'Freelancer'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
})
