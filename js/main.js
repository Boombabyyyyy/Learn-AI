(function ($) {
  'use strict';
  // TOP Menu Sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $('#sticky-header').removeClass('sticky');
      $('#back-top').fadeIn(500);
    } else {
      $('#sticky-header').addClass('sticky');
      $('#back-top').fadeIn(500);
    }
  });

  $(document).ready(function () {
    // mobile_menu
    var menu = $('ul#navigation');
    if (menu.length) {
      menu.slicknav({
        prependTo: '.mobile_menu',
        closedSymbol: '+',
        openedSymbol: '-',
      });
    }
    // blog-menu
    // $('ul#blog-menu').slicknav({
    //   prependTo: ".blog_menu"
    // });

    // review-active
    $('.testmonial_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          dots: false,
          nav: false,
        },
        767: {
          items: 1,
          dots: false,
          nav: false,
        },
        992: {
          items: 1,
          nav: false,
        },
        1200: {
          items: 1,
          nav: false,
        },
        1500: {
          items: 1,
        },
      },
    });

    // for filter
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1,
      },
    });

    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

    // wow js
    new WOW().init();

    // counter
    $('.counter').counterUp({
      delay: 10,
      time: 10000,
    });

    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
    });

    /* magnificPopup img view */
    $('.img-pop-up').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
      type: 'iframe',
    });

    // scrollIt for smoth scroll
    $.scrollIt({
      upKey: 38, // key code to navigate to the next section
      downKey: 40, // key code to navigate to the previous section
      easing: 'linear', // the easing function for animation
      scrollTime: 600, // how long (in ms) the animation takes
      activeClass: 'active', // class given to the active nav element
      onPageChange: null, // function(pageIndex) that is called when page is changed
      topOffset: 0, // offste (in px) for fixed top navigation
    });

    // scrollup bottom to top
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '4500', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // blog-page

    //brand-active
    $('.brand-active').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      autoplay: true,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 4,
        },
        992: {
          items: 7,
        },
      },
    });

    // blog-dtails-page

    //project-active
    $('.project-active').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      // autoplay:true,
      navText: [
        '<i class="Flaticon flaticon-left-arrow"></i>',
        '<i class="Flaticon flaticon-right-arrow"></i>',
      ],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 2,
          nav: false,
        },
        1200: {
          items: 1,
        },
        1501: {
          items: 2,
        },
      },
    });

    if (document.getElementById('default-select')) {
      $('select').niceSelect();
    }

    //about-pro-active
    $('.details_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      // autoplay:true,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 1,
          nav: false,
        },
        1200: {
          items: 1,
        },
      },
    });
  });

  // resitration_Form
  $(document).ready(function () {
    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function () {
          if ($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        },
      },
    });
  });

  // resitration_Form
  $(document).ready(function () {
    $('.dont-hav-acc').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function () {
          if ($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        },
      },
    });
  });

  const homedata = [
    {
      url: 'course_details.html?q=0',
      imageurl: 'py.jpg',
      topic: 'Python',
      name: 'Python&nbsp for beginners',
      diff: 'basic',
      orgprice: 'Rs.150',
      price: 'Free',
      rating: '4.0',
    },
    {
      url: 'course_details.html?q=1',
      imageurl: '1.png',
      topic: 'Python',
      name: `Mobile App design step by step <br />
      from beginner`,
      diff: 'basic',
      rating: '4.5',
      orgprice: 'Rs.150',
      price: 'Free',
    },
    {
      url: 'course_details.html?q=2',
      imageurl: '2.png',
      topic: 'Adobe XD',
      name: `UI/UX design with Adobe XD with Anderson`,
      diff: 'basic',
      rating: '4.5',
      orgprice: 'Rs.150',
      price: 'Free',
    },
    {
      url: 'course_details.html?q=3',
      imageurl: '3.png',
      topic: 'Wordpress',
      name: `Wordpress theme development <br />
      from scratch`,
      diff: 'basic',
      rating: '4.5',
      orgprice: 'Rs.150',
      price: 'Free',
    },
    {
      url: 'course_details.html?q=4',
      imageurl: '4.png',
      topic: 'Photoshop',
      name: `App design step by step <br />
      from beginner`,
      diff: 'basic',
      rating: '4.5',
      orgprice: 'Rs.150',
      price: 'Free',
    },
    {
      url: 'course_details.html?q=5',
      imageurl: '5.png',
      topic: 'UI/UX',
      name: `How to complete user research <br />
      and make work flow`,
      diff: 'basic',
      rating: '4.5',
      orgprice: 'Rs.150',
      price: 'Free',
    },
    {
      url: 'course_details.html?q=6',
      imageurl: '6.png',
      topic: 'UI/UX',
      name: `How to complete user research <br />
      and make work flow`,
      diff: 'basic',
      rating: '4.5',
      orgprice: 'Rs.150',
      price: 'Free',
    },
  ];

  document.getElementById('home').innerHTML = ` <div class="row">
  ${homedata
    .map((d) => {
      return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/${d.url}"
            >${d.name}</a
          >
        </h3>
        <div class="star_prise d-flex justify-content-between">
          <div class="star">
            <i class="flaticon-mark-as-favorite-star"></i>
            <span>(${d.rating})</span>
          </div>
          <div class="prise">
            <span class="offer">${d.orgprice}</span>
            <span class="active_prise"> ${d.price} </span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join('')}
  <div class="col-xl-12"></div>
</div>`;
  document.getElementById('profile').innerHTML = `<div class="row">

  ${homedata
    .filter((c) => c.topic === 'Photoshop')
    .map((d) => {
      return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/${d.url}"
            >${d.name}</a
          >
        </h3>
        <div class="star_prise d-flex justify-content-between">
          <div class="star">
            <i class="flaticon-mark-as-favorite-star"></i>
            <span>(${d.rating})</span>
          </div>
          <div class="prise">
            <span class="offer">${d.orgprice}</span>
            <span class="active_prise"> ${d.price} </span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join('')}
                <div class="col-xl-12">
                  <div class="more_courses text-center">
                    <a href="#" class="boxed_btn_rev">More Courses</a>
                  </div>
                </div>
              </div>
  `;
  document.getElementById('contact').innerHTML = `<div class="row">
  ${homedata
    .filter((c) => c.topic === 'UI/UX')
    .map((d) => {
      return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/${d.url}"
            >${d.name}</a
          >
        </h3>
        <div class="star_prise d-flex justify-content-between">
          <div class="star">
            <i class="flaticon-mark-as-favorite-star"></i>
            <span>(${d.rating})</span>
          </div>
          <div class="prise">
            <span class="offer">${d.orgprice}</span>
            <span class="active_prise"> ${d.price} </span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join('')}
  <div class="col-xl-12">
    <div class="more_courses text-center">
      <a href="#" class="boxed_btn_rev">More Courses</a>
    </div>
  </div>
</div>`;
  document.getElementById('design').innerHTML = `<div class="row">
  ${homedata
    .filter((c) => c.topic === 'Web Design')
    .map((d) => {
      return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/${d.url}"
            >${d.name}</a
          >
        </h3>
        <div class="star_prise d-flex justify-content-between">
          <div class="star">
            <i class="flaticon-mark-as-favorite-star"></i>
            <span>(${d.rating})</span>
          </div>
          <div class="prise">
            <span class="offer">${d.orgprice}</span>
            <span class="active_prise"> ${d.price} </span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join('')}
  <div class="col-xl-12">
    <div class="more_courses text-center">
      <a href="#" class="boxed_btn_rev">More Courses</a>
    </div>
  </div>
</div>`;
  document.getElementById('Web').innerHTML = `<div class="row">
  ${homedata
    .filter((c) => c.topic === 'Web Dev')
    .map((d) => {
      return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/${d.url}"
            >${d.name}</a
          >
        </h3>
        <div class="star_prise d-flex justify-content-between">
          <div class="star">
            <i class="flaticon-mark-as-favorite-star"></i>
            <span>(${d.rating})</span>
          </div>
          <div class="prise">
            <span class="offer">${d.orgprice}</span>
            <span class="active_prise"> ${d.price} </span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join('')}
    <div class="col-xl-12">
      <div class="more_courses text-center">
        <a href="#" class="boxed_btn_rev">More Courses</a>
      </div>
    </div>
  </div>`;
  document.getElementById('Web1').innerHTML = ` <div class="row">
  ${homedata
    .filter((c) => c.topic === 'Wordpress')
    .map((d) => {
      return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/${d.url}"
            >${d.name}</a
          >
        </h3>
        <div class="star_prise d-flex justify-content-between">
          <div class="star">
            <i class="flaticon-mark-as-favorite-star"></i>
            <span>(${d.rating})</span>
          </div>
          <div class="prise">
            <span class="offer">${d.orgprice}</span>
            <span class="active_prise"> ${d.price} </span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join('')}
    <div class="col-xl-12">
      <div class="more_courses text-center">
        <a href="#" class="boxed_btn_rev">More Courses</a>
      </div>
    </div>
  </div>`;
  document.getElementById('Web11').innerHTML = `<div class="row">
  ${homedata
    .filter((c) => c.topic === 'Adobe XD')
    .map((d) => {
      return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/${d.url}"
            >${d.name}</a
          >
        </h3>
        <div class="star_prise d-flex justify-content-between">
          <div class="star">
            <i class="flaticon-mark-as-favorite-star"></i>
            <span>(${d.rating})</span>
          </div>
          <div class="prise">
            <span class="offer">${d.orgprice}</span>
            <span class="active_prise"> ${d.price} </span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join('')}
    <div class="col-xl-12">
      <div class="more_courses text-center">
        <a href="#" class="boxed_btn_rev">More Courses</a>
      </div>
    </div>
  </div>`;
  document.getElementById('Adobe-XD8').innerHTML = `<div class="row">
  ${homedata
    .filter((c) => c.topic === 'AI')
    .map((d) => {
      return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/${d.url}"
            >${d.name}</a
          >
        </h3>
        <div class="star_prise d-flex justify-content-between">
          <div class="star">
            <i class="flaticon-mark-as-favorite-star"></i>
            <span>(${d.rating})</span>
          </div>
          <div class="prise">
            <span class="offer">${d.orgprice}</span>
            <span class="active_prise"> ${d.price} </span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join('')}
    <div class="col-xl-12">
      <div class="more_courses text-center">
        <a href="#" class="boxed_btn_rev">More Courses</a>
      </div>
    </div>
  </div>`;
  document.getElementById('Adobe-XD9').innerHTML = `<div class="row">
  ${homedata
    .filter((c) => c.topic === 'ML')
    .map((d) => {
      return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/${d.url}"
            >${d.name}</a
          >
        </h3>
        <div class="star_prise d-flex justify-content-between">
          <div class="star">
            <i class="flaticon-mark-as-favorite-star"></i>
            <span>(${d.rating})</span>
          </div>
          <div class="prise">
            <span class="offer">${d.orgprice}</span>
            <span class="active_prise"> ${d.price} </span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join('')}
    <div class="col-xl-12">
      <div class="more_courses text-center">
        <a href="#" class="boxed_btn_rev">More Courses</a>
      </div>
    </div>
  </div>`;
  //------- Mailchimp js --------//
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();

  // Search Toggle
  $('#search_input_box').hide();
  $('#search').on('click', function () {
    $('#search_input_box').slideToggle();
    $('#search_input').focus();
  });
  $('#close_search').on('click', function () {
    $('#search_input_box').slideUp(500);
  });
  // Search Toggle
  $('#search_input_box').hide();
  $('#search_1').on('click', function () {
    $('#search_input_box').slideToggle();
    $('#search_input').focus();
  });
})(jQuery);
