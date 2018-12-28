import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      // Page scrolling feature
      $('a.page-scroll').bind('click', function (event) {
        var link = $(this);
        $('html, body').stop().animate({
          scrollTop: $(link.attr('href')).offset().top - 50
        }, 500);
        event.preventDefault();
        if ($('body').hasClass('body-small')) {
          $('#navbar').collapse('toggle');
        }
      });

      // Activate WOW.js plugin for animation on scrol
      // new WOW().init();
    });
  }

  cbpAnimatedHeader = (function () {
    var docElem = document.documentElement,
      header = document.querySelector('.navbar-default'),
      didScroll = false,
      changeHeaderOn = 200;
    function init() {
      window.addEventListener('scroll', function (event) {
        if (!didScroll) {
          didScroll = true;
          setTimeout(scrollPage, 250);
        }
      }, false);
    }
    function scrollPage() {
      var sy = scrollY();
      if (sy >= changeHeaderOn) {
        $(header).addClass('navbar-scroll')
      }
      else {
        $(header).removeClass('navbar-scroll')
      }
      didScroll = false;
    }
    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }
    init();

  })();
}