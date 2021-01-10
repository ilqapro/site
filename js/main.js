$(function() {
  let header_hat_height =  $('#header').css('position') == 'sticky' ? ($('.header_hat').height() + 1) : 0
  $("body").on("click", 'a[href*="#"]', function(t) {
    t.preventDefault()
    $("html,body").stop().animate({
      scrollTop: $(this.hash).offset().top - header_hat_height
    }, 500)
  })

  $('#input_file').change(function(e) {
    $('.input_file span').text(e.target.files[0].name)
  })

  $('.faq_item').click(function() {
    $(this).toggleClass('active')
  })

  $('.call_popup').click(function() {
    let popup_name = $(this).data('popup');
    $('.popups, popup, .'+popup_name).fadeIn(300)

    if( popup_name == "popup_quiz" ) start_quiz()
    if( popup_name == "popup_info" ) {
      $('.popup_info_wrapper .title').text($(this).data('title'))
      $('.popup_info_wrapper .image_block img').attr('src', $(this).data('image_src'))
    }
  })
  $('.popup .x, .popups_bg').click(function() {
    $('.popups, .popup').fadeOut(300)
  })
  
  // popup quiz
  function start_quiz() {
    let slides_counter = 0, slides_total = $('.questions .question_item').length, process_info_part = 100 / slides_total;
    function active_manage(slides_counter) {
      $('.question_item.active').removeClass('active')
      $('.question_item'+slides_counter).addClass('active')
      $('.process_info span').css('width', (process_info_part * (slides_counter+1))+'%')
      if( slides_counter == (slides_total-1) ) $('.popup_quiz .next').hide();
      else $('.popup_quiz .next').show();
    }
    $('.popup_quiz .next').click(function() {
      if( slides_counter < (slides_total-1) ) slides_counter++;
      $(this).prop('disabled', true)
      active_manage(slides_counter)
    })
    $('.popup_quiz .prev').click(function() {
      if( slides_counter > 0 ) slides_counter--;
      active_manage(slides_counter)
      $('.popup_quiz .next').prop('disabled', false)
    })
    $('.questions .variant').click(function() {
      $('.popup_quiz .next').prop('disabled', false)
    })
  }

  // slider company
  start_slider_company()
  function start_slider_company() {
    let photos_total = $('.company_slider .photos span').length, slider_counter = 0;
    function change_img_active(photo_id) {
      let future_img_active = $('.company_slider .photos span[data-photo_id="'+photo_id+'"]').data('image_src');
      $('.company_slider_info .img_active').attr('src', future_img_active).css('display', 'none').fadeIn(300)
      $('.slider_navigation span.active').removeClass('active')
      $('.slider_navigation span[data-photo_id="'+photo_id+'"]').addClass('active')
    }
    for( let i=0; i<photos_total; i++ ) $('.slider_navigation').append('<span data-photo_id="'+i+'"></span>')
    $('.company_slider_info .sliderarrows .arrow_right').click(function() {
      if( slider_counter < (photos_total-1) ) slider_counter++;
      else slider_counter = 0;
      change_img_active(slider_counter)
    })
    $('.company_slider_info .sliderarrows .arrow_left').click(function() {
      if( slider_counter > 0 ) slider_counter--;
      else slider_counter = (photos_total-1);
      change_img_active(slider_counter)
    })
    $('.company_slider .slider_navigation span').click(function() {
      slider_counter = $(this).data('photo_id')
      change_img_active(slider_counter)
    })

    $('.section_buttons button').click(function() {
      $('.section_buttons button.active').removeClass('active')
      $(this).addClass('active')
      $('.price_table.active').removeClass('active')
      $('.'+$(this).data('table')).addClass('active')
    })
    
    // for quiz popup
    c = new Date,
    p = c.getMonth(),
    d = c.getDate(),
    u = c.getHours(),
    g = c.getMinutes(),
    m = c.getSeconds(),
    month = new Array("01","02","03","04","05","06","07","08","09","10","11","12"),
    d <= 9 && (d = "0" + d),
    u <= 9 && (u = "0" + u),
    g <= 9 && (g = "0" + g),
    m <= 9 && (m = "0" + m),
    date_time7 = d + "." + month[p] + "." + c.getFullYear(),
    document.layers ? (document.layers.time7.document.write(date_time7),
    document.layers.time7.document.close()) : document.getElementById("time7").innerHTML = date_time7,
    function() {
        var t = new Date
          , e = t.getMonth()
          , i = t.getDate() + 9
          , s = t.getHours()
          , n = t.getMinutes()
          , o = t.getSeconds();
        month = new Array("01","02","03","04","05","06","07","08","09","10","11","12"),
        32 == i && (i = "01",
        e += 1),
        33 == i && (i = "02",
        e += 1),
        34 == i && (i = "03",
        e += 1),
        35 == i && (i = "04",
        e += 1),
        36 == i && (i = "05",
        e += 1),
        37 == i && (i = "06",
        e += 1),
        38 == i && (i = "07",
        e += 1),
        39 == i && (i = "08",
        e += 1),
        40 == i && (i = "01",
        e += 1),
        s <= 9 && (s = "0" + s),
        n <= 9 && (n = "0" + n),
        o <= 9 && (o = "0" + o);
        var r = i + "." + month[e] + "." + t.getFullYear();
        document.layers ? (document.layers.time8.document.write(r),
        document.layers.time8.document.close()) : document.getElementById("time8").innerHTML = r
    }()
  }

  // slider works
  start_slider_works()
  function start_slider_works() {
    let sliders_counter = 0, sliders_total = $('.works_photos div').length;
    function change_img_active(sliders_counter) {
      let slide_object = $('.works_photos div[data-id="'+sliders_counter+'"]').data();
      $('.works_single_img').attr('src', slide_object['image_src']).css('display', 'none').fadeIn(300)
      for (item in slide_object) $('.works_slider_content p.'+item+' span').text(slide_object[item]);
      $('.works_photos div.active').removeClass('active')
      $('.works_photos div[data-id="'+sliders_counter+'"]').addClass('active')
    }
    $('.works_photos div').click(function() {
      sliders_counter = $(this).data('id')
      change_img_active(sliders_counter)
    })
    $('.works_single_slide .arrow_right').click(function() {
      if( sliders_counter < (sliders_total-1) ) sliders_counter++;
      else sliders_counter = 0;
      change_img_active(sliders_counter)
    })
    $('.works_single_slide .arrow_left').click(function() {
      if( sliders_counter > 0 ) sliders_counter--;
      else sliders_counter = (sliders_total-1);
      change_img_active(sliders_counter)
    })
  }
})