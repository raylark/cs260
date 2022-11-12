$('.slick').slick({
      mobileFirst: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      focusOnSelect: true,
      responsive: [
            {
              breakpoint: 1024,
              settings: {
                  mobileFirst: true,
                  infinite: true,
                  speed: 300,
                  slidesToShow: 1,
                  centerMode: true,
                  variableWidth: true,
                  focusOnSelect: true
              }
            }
          ]
});