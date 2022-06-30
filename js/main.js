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
      url: 'course_details.html',
      imageurl: 'py.jpg',
      topic: 'Python',
      name: 'Python&nbsp for beginners',
      diff: 'basic',
      orgprice: '$40',
      price: 'free',
      rating: '4.0',
    },
    {
      url: 'course_details.html',
      imageurl: '1.png',
      topic: 'Python',
      name: `Mobile App design step by step <br />
      from beginner`,
      diff: 'basic',
      rating: '4.5',
      orgprice: '$89',
      price: '$40',
    },
  ];
  const profiledata = [
    {
      url: 'course_details.html',
      imageurl: '1.png',
      topic: 'Python',
      name: `Mobile App design step by step <br />
      from beginner`,
      diff: 'basic',
      rating: '4.5',
      orgprice: '$89',
      price: '$40',
    },
  ];
  const contactdata = [
    {
      url: 'course_details.html',
      imageurl: '1.png',
      topic: 'Python',
      name: `Mobile App design step by step <br />
    from beginner`,
      diff: 'basic',
      rating: '4.5',
      orgprice: '$89',
      price: '$40',
    },
  ];
  const designdata = [
    {
      url: 'course_details.html',
      imageurl: '1.png',
      topic: 'Python',
      name: `Mobile App design step by step <br />
    from beginner`,
      diff: 'basic',
      rating: '4.5',
      orgprice: '$89',
      price: '$40',
    },
  ];
  const Webdata = [
    {
      url: 'course_details.html',
      imageurl: '1.png',
      topic: 'Python',
      name: `Mobile App design step by step <br />
    from beginner`,
      diff: 'basic',
      rating: '4.5',
      orgprice: '$89',
      price: '$40',
    },
  ];
  const Web1data = [
    {
      url: 'course_details.html',
      imageurl: '1.png',
      topic: 'Python',
      name: `Mobile App design step by step <br />
    from beginner`,
      diff: 'basic',
      rating: '4.5',
      orgprice: '$89',
      price: '$40',
    },
  ];
  const Web11data = [
    {
      url: 'course_details.html',
      imageurl: '1.png',
      topic: 'Python',
      name: `Mobile App design step by step <br />
    from beginner`,
      diff: 'basic',
      rating: '4.5',
      orgprice: '$89',
      price: '$40',
    },
  ];
  const Adobe8data = [
    {
      url: 'course_details.html',
      imageurl: '1.png',
      topic: 'Python',
      name: `Mobile App design step by step <br />
    from beginner`,
      diff: 'basic',
      rating: '4.5',
      orgprice: '$89',
      price: '$40',
    },
  ];
  const Adobe9data = [
    {
      url: 'course_details.html',
      imageurl: '1.png',
      topic: 'Python',
      name: `Mobile App design step by step <br />
    from beginner`,
      diff: 'basic',
      rating: '4.5',
      orgprice: '$89',
      price: '$40',
    },
  ];

  document.getElementById('home').innerHTML = ` <div class="row">
  ${homedata.map((d) => {
    return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/course/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/course/${d.url}"
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
  })}
  
  <div class="col-xl-12"></div>
</div>`;
  document.getElementById('profile').innerHTML = `
  <div class="row">

  ${profiledata.map((d) => {
    return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/course/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/course/${d.url}"
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
  })}
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single_courses">
                    <div class="thumb">
                      <a href="#"> <img src="img/courses/1.png" alt="" /> </a>
                    </div>
                    <div class="courses_info">
                      <span>Photoshop</span>
                      <h3>
                        <a href="#"
                          >Mobile App design step by step <br />
                          from beginner</a
                        >
                      </h3>
                      <div class="star_prise d-flex justify-content-between">
                        <div class="star">
                          <i class="flaticon-mark-as-favorite-star"></i>
                          <span>(4.5)</span>
                        </div>
                        <div class="prise">
                          <span class="offer">$89.00</span>
                          <span class="active_prise"> $49 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single_courses">
                    <div class="thumb">
                      <a href="#"> <img src="img/courses/2.png" alt="" /> </a>
                    </div>
                    <div class="courses_info">
                      <span>Adobe XD</span>
                      <h3>
                        <a href="#">UI/UX design with Adobe XD with Anderson</a>
                      </h3>
                      <div class="star_prise d-flex justify-content-between">
                        <div class="star">
                          <i class="flaticon-mark-as-favorite-star"></i>
                          <span>(4.5)</span>
                        </div>
                        <div class="prise">
                          <span class="offer">$89.00</span>
                          <span class="active_prise"> $49 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single_courses">
                    <div class="thumb">
                      <a href="#"> <img src="img/courses/3.png" alt="" /> </a>
                    </div>
                    <div class="courses_info">
                      <span>Wordpress</span>
                      <h3>
                        <a href="#"
                          >Wordpress theme development <br />
                          from scratch</a
                        >
                      </h3>
                      <div class="star_prise d-flex justify-content-between">
                        <div class="star">
                          <i class="flaticon-mark-as-favorite-star"></i>
                          <span>(4.5)</span>
                        </div>
                        <div class="prise">
                          <span class="offer">$89.00</span>
                          <span class="active_prise"> $49 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single_courses">
                    <div class="thumb">
                      <a href="#"> <img src="img/courses/4.png" alt="" /> </a>
                    </div>
                    <div class="courses_info">
                      <span>Photoshop</span>
                      <h3>
                        <a href="#"
                          >Mobile App design step by step <br />
                          from beginner</a
                        >
                      </h3>
                      <div class="star_prise d-flex justify-content-between">
                        <div class="star">
                          <i class="flaticon-mark-as-favorite-star"></i>
                          <span>(4.5)</span>
                        </div>
                        <div class="prise">
                          <span class="offer">$89.00</span>
                          <span class="active_prise"> $49 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single_courses">
                    <div class="thumb">
                      <img src="img/courses/5.png" alt="" />
                    </div>
                    <div class="courses_info">
                      <span>UI/UX</span>
                      <h3>
                        <a href="#"
                          >How to complete user research <br />
                          and make work flow</a
                        >
                      </h3>
                      <div class="star_prise d-flex justify-content-between">
                        <div class="star">
                          <i class="flaticon-mark-as-favorite-star"></i>
                          <span>(4.5)</span>
                        </div>
                        <div class="prise">
                          <span class="offer">$89.00</span>
                          <span class="active_prise"> $49 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single_courses">
                    <div class="thumb">
                      <a href="#"> <img src="img/courses/6.png" alt="" /> </a>
                    </div>
                    <div class="courses_info">
                      <span>Wordpress</span>
                      <h3>
                        <a href="#"
                          >Commitment to dedicated <br />
                          Support</a
                        >
                      </h3>
                      <div class="star_prise d-flex justify-content-between">
                        <div class="star">
                          <i class="flaticon-mark-as-favorite-star"></i>
                          <span>(4.5)</span>
                        </div>
                        <div class="prise">
                          <span class="offer">$89.00</span>
                          <span class="active_prise"> $49 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="more_courses text-center">
                    <a href="#" class="boxed_btn_rev">More Courses</a>
                  </div>
                </div>
              </div>
  `;
  document.getElementById('contact').innerHTML = `<div class="row">
  ${contactdata.map((d) => {
    return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/course/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/course/${d.url}"
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
  })}
  <div class="col-xl-12">
    <div class="more_courses text-center">
      <a href="#" class="boxed_btn_rev">More Courses</a>
    </div>
  </div>
</div>`;
  document.getElementById('design').innerHTML = `<div class="row">
  ${designdata.map((d) => {
    return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/course/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/course/${d.url}"
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
  })}
  <div class="col-xl-12">
    <div class="more_courses text-center">
      <a href="#" class="boxed_btn_rev">More Courses</a>
    </div>
  </div>
</div>`;
  document.getElementById('Web').innerHTML = `<div class="row">
  ${Webdata.map((d) => {
    return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/course/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/course/${d.url}"
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
  })}
    <div class="col-xl-12">
      <div class="more_courses text-center">
        <a href="#" class="boxed_btn_rev">More Courses</a>
      </div>
    </div>
  </div>`;
  document.getElementById('Web1').innerHTML = ` <div class="row">
  ${Web1data.map((d) => {
    return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/course/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/course/${d.url}"
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
  })}
    <div class="col-xl-12">
      <div class="more_courses text-center">
        <a href="#" class="boxed_btn_rev">More Courses</a>
      </div>
    </div>
  </div>`;
  document.getElementById('Web11').innerHTML = `<div class="row">
  ${Web11data.map((d) => {
    return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/course/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/course/${d.url}"
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
  })}
    <div class="col-xl-12">
      <div class="more_courses text-center">
        <a href="#" class="boxed_btn_rev">More Courses</a>
      </div>
    </div>
  </div>`;
  document.getElementById('Adobe-XD8').innerHTML = `<div class="row">
  ${Adobe8data.map((d) => {
    return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/course/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/course/${d.url}"
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
  })}
    <div class="col-xl-12">
      <div class="more_courses text-center">
        <a href="#" class="boxed_btn_rev">More Courses</a>
      </div>
    </div>
  </div>`;
  document.getElementById('Adobe-XD9').innerHTML = `<div class="row">
  ${Adobe9data.map((d) => {
    return `<div class="col-xl-4 col-lg-4 col-md-6">
    <div class="single_courses">
      <div class="thumb">
        <a href="/course/${d.url}"> <img src="img/courses/${d.imageurl}" alt="" /> </a>
      </div>
      <div class="courses_info">
        <span>${d.topic}</span>
        <h3>
          <a href="/course/${d.url}"
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
  })}
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
