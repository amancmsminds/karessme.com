/**
 * @file
 * Bootstrap Basic Image Gallery - hovering over thumbnails changes main.
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.bootstrap_basic_image_gallery_hover_preview = {
    attach: function attach(context, settings) {

      // Find each thumbnail.
      $.each($(context).find('.bootstrap-basic-image-gallery .thumb').once('hover_preview'), function (index, item) {
        // On hover, exchange the main image with the thumbnail image.
        $(item).on('mouseover', function(ev) {
          // Get the thumbnail being hovered.
          var thumbnailContainer = $(ev.currentTarget);
          // Find the main image div.
          var mainContainer = $(item).parent().parent().find('.main-image');
          // Set the source to be the source from the thumbnail.
          mainContainer.find('img').attr('src', thumbnailContainer.find('img').data('mainsrc'));
          // Set the slide-to.
          mainContainer.attr('data-slide-to', thumbnailContainer.attr('data-slide-to'));
        });
      });

    }
  };
})(jQuery, Drupal);
;
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/docs/3.3/customize/?id=b0d4688f6e2aab1720ebddcc971322df)
 * Config saved to config.json and https://gist.github.com/b0d4688f6e2aab1720ebddcc971322df
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var s=t(this),n=s.data("bs.carousel"),o=t.extend({},i.DEFAULTS,s.data(),"object"==typeof e&&e),r="string"==typeof e?e:o.slide;n||s.data("bs.carousel",n=new i(this,o)),"number"==typeof e?n.to(e):r?n[r]():o.interval&&n.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.7",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),s="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(s&&!this.options.wrap)return e;var n="prev"==t?-1:1,o=(i+n)%this.$items.length;return this.$items.eq(o)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,s){var n=this.$element.find(".item.active"),o=s||this.getItemForDirection(e,n),r=this.interval,a="next"==e?"left":"right",d=this;if(o.hasClass("active"))return this.sliding=!1;var l=o[0],h=t.Event("slide.bs.carousel",{relatedTarget:l,direction:a});if(this.$element.trigger(h),!h.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var c=t(this.$indicators.children()[this.getItemIndex(o)]);c&&c.addClass("active")}var u=t.Event("slid.bs.carousel",{relatedTarget:l,direction:a});return t.support.transition&&this.$element.hasClass("slide")?(o.addClass(e),o[0].offsetWidth,n.addClass(a),o.addClass(a),n.one("bsTransitionEnd",function(){o.removeClass([e,a].join(" ")).addClass("active"),n.removeClass(["active",a].join(" ")),d.sliding=!1,setTimeout(function(){d.$element.trigger(u)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(n.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(u)),r&&this.cycle(),this}};var s=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=s,this};var n=function(i){var s,n=t(this),o=t(n.attr("data-target")||(s=n.attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,""));if(o.hasClass("carousel")){var r=t.extend({},o.data(),n.data()),a=n.attr("data-slide-to");a&&(r.interval=!1),e.call(o,r),a&&o.data("bs.carousel").to(a),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e,s){return this.each(function(){var n=t(this),o=n.data("bs.modal"),r=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);o||n.data("bs.modal",o=new i(this,r)),"string"==typeof e?o[e](s):r.show&&o.show(s)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.7",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var s=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){s.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(s.$element)&&(s.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&s.$element.hasClass("fade");s.$element.parent().length||s.$element.appendTo(s.$body),s.$element.show().scrollTop(0),s.adjustDialog(),n&&s.$element[0].offsetWidth,s.$element.addClass("in"),s.enforceFocus();var o=t.Event("shown.bs.modal",{relatedTarget:e});n?s.$dialog.one("bsTransitionEnd",function(){s.$element.trigger("focus").trigger(o)}).emulateTransitionEnd(i.TRANSITION_DURATION):s.$element.trigger("focus").trigger(o)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var s=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=t.support.transition&&n;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;o?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var r=function(){s.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):r()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var s=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=s,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var s=t(this),n=s.attr("href"),o=t(s.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),r=o.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},o.data(),s.data());s.is("a")&&i.preventDefault(),o.one("show.bs.modal",function(t){t.isDefaultPrevented()||o.one("hidden.bs.modal",function(){s.is(":visible")&&s.trigger("focus")})}),e.call(o,r,this)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,s=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(s).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);;
/**
 * @file
 * Bootstrap Basic Image Gallery - lazy load carousel images.
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.bootstrap_basic_image_gallery_lazyload = {
    attach: function attach(context, settings) {

      // Find each lazy modal.
      $.each($(context).find('.bootstrap-basic-image-gallery .modal.lazy').once('lazyload'), function (index, item) {
        // When the modal is shown, lazy load the active image.
        $(item).on('show.bs.modal', function(ev) {
          var slideToDelta = $(ev.relatedTarget).data('slide-to');
          var lazyElement = $(ev.currentTarget).find(".item.slide-" + slideToDelta + " img[data-src]");
          lazyElement.attr("src", lazyElement.data('src'));
          lazyElement.removeAttr("data-src");
        });
      });

      // Find each lazy carousel.
      $.each($(context).find('.bootstrap-basic-image-gallery .carousel.lazy').once('lazyload'), function (index, item) {
        // When the carousel slides, lazy load the image.
        $(item).on('slide.bs.carousel', function(ev) {
          var lazyElement = $(ev.relatedTarget).find("img[data-src]");
          lazyElement.attr("src", lazyElement.data('src'));
          lazyElement.removeAttr("data-src");
        });
      });

    }
  };
})(jQuery, Drupal);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function (Drupal) {
  Drupal.behaviors.flagAttach = {
    attach: function attach(context) {
      var links = [].concat(_toConsumableArray(context.querySelectorAll('.flag a')));
      links.forEach(function (link) {
        return link.addEventListener('click', function (event) {
          return event.target.parentNode.classList.add('flag-waiting');
        });
      });
    }
  };

  Drupal.AjaxCommands.prototype.actionLinkFlash = function (ajax, response, status) {
    if (status === 'success') {
      var para = document.createElement('P');
      para.innerText = response.message;

      para.setAttribute('class', 'js-flag-message');

      para.addEventListener('animationend', function (event) {
        return event.target.remove();
      }, false);

      document.querySelector(response.selector).appendChild(para);
    } else {
      var links = [].concat(_toConsumableArray(document.querySelectAll('.flag-waiting')));
      links.forEach(function (link) {
        return link.classList.remove('flag-waiting');
      });
    }
  };
})(Drupal);;
