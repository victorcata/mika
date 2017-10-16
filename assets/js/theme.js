/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = prestashop;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */


class ProductMinitature {
  init() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-product-miniature').each((index, element) => {
      const FLAG_MARGIN = 10;
      let $percent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).find('.discount-percentage');
      let $onsale = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).find('.on-sale');
      let $new = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).find('.new');
      if ($percent.length) {
        $new.css('top', $percent.height() * 2 + FLAG_MARGIN);
        $percent.css('top', -__WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).find('.thumbnail-container').height() + __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).find('.product-description').height() + FLAG_MARGIN);
      }
      if ($onsale.length) {
        $percent.css('top', parseFloat($percent.css('top')) + $onsale.height() + FLAG_MARGIN);
        $new.css('top', $percent.height() * 2 + $onsale.height() + FLAG_MARGIN * 2);
      }
      if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).find('.color').length > 5) {
        let count = 0;
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).find('.color').each((index, element) => {
          if (index > 4) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).hide();
            count++;
          }
        });
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).find('.js-count').append(`+${count}`);
      }
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductMinitature;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */


class DropDown {
  constructor(el) {
    this.el = el;
  }
  init() {
    this.el.on('show.bs.dropdown', function (e, el) {
      if (el) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`#${el}`).find('.dropdown-menu').first().stop(true, true).slideDown();
      } else {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).find('.dropdown-menu').first().stop(true, true).slideDown();
      }
    });

    this.el.on('hide.bs.dropdown', function (e, el) {
      if (el) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`#${el}`).find('.dropdown-menu').first().stop(true, true).slideUp();
      } else {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).find('.dropdown-menu').first().stop(true, true).slideUp();
      }
    });

    this.el.find('select.link').each(function (idx, el) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).on('change', function (event) {
        window.location = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).val();
      });
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DropDown;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(19);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"expose-loader?Tether!tether\"");
throw new Error("Cannot find module \"bootstrap/dist/js/bootstrap.min\"");
throw new Error("Cannot find module \"flexibility\"");
throw new Error("Cannot find module \"bootstrap-touchspin\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__responsive__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__listing__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_drop_down__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_form__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_product_miniature__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_product_select__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_top_menu__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_prestashop__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_prestashop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_prestashop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_events__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lib_bootstrap_filestyle_min__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lib_bootstrap_filestyle_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__lib_bootstrap_filestyle_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lib_jquery_scrollbox_min__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lib_jquery_scrollbox_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__lib_jquery_scrollbox_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_block_cart__ = __webpack_require__(18);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */


























// "inherit" EventEmitter
for (var i in __WEBPACK_IMPORTED_MODULE_16_events___default.a.prototype) {
  __WEBPACK_IMPORTED_MODULE_15_prestashop___default.a[i] = __WEBPACK_IMPORTED_MODULE_16_events___default.a.prototype[i];
}

$(document).ready(() => {
  let dropDownEl = $('.js-dropdown');
  const form = new __WEBPACK_IMPORTED_MODULE_11__components_form__["a" /* default */]();
  let topMenuEl = $('.js-top-menu ul[data-depth="0"]');
  let dropDown = new __WEBPACK_IMPORTED_MODULE_10__components_drop_down__["a" /* default */](dropDownEl);
  let topMenu = new __WEBPACK_IMPORTED_MODULE_14__components_top_menu__["a" /* default */](topMenuEl);
  let productMinitature = new __WEBPACK_IMPORTED_MODULE_12__components_product_miniature__["a" /* default */]();
  let productSelect = new __WEBPACK_IMPORTED_MODULE_13__components_product_select__["a" /* default */]();
  dropDown.init();
  form.init();
  topMenu.init();
  productMinitature.init();
  productSelect.init();
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prestashop__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prestashop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prestashop__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */



__WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive = __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive || {};

__WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive.current_width = window.innerWidth;
__WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive.min_width = 768;
__WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive.mobile = __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive.current_width < __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive.min_width;

function swapChildren(obj1, obj2) {
	var temp = obj2.children().detach();
	obj2.empty().append(obj1.children().detach());
	obj1.append(temp);
}

function toggleMobileStyles() {
	if (__WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive.mobile) {
		__WEBPACK_IMPORTED_MODULE_0_jquery___default()("*[id^='_desktop_']").each(function (idx, el) {
			var target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + el.id.replace('_desktop_', '_mobile_'));
			if (target.length) {
				swapChildren(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(el), target);
			}
		});
	} else {
		__WEBPACK_IMPORTED_MODULE_0_jquery___default()("*[id^='_mobile_']").each(function (idx, el) {
			var target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + el.id.replace('_mobile_', '_desktop_'));
			if (target.length) {
				swapChildren(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(el), target);
			}
		});
	}
	__WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.emit('responsive update', {
		mobile: __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive.mobile
	});
}

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('resize', function () {
	var _cw = __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive.current_width;
	var _mw = __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive.min_width;
	var _w = window.innerWidth;
	var _toggle = _cw >= _mw && _w < _mw || _cw < _mw && _w >= _mw;
	__WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive.current_width = _w;
	__WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive.mobile = __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive.current_width < __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive.min_width;
	if (_toggle) {
		toggleMobileStyles();
	}
});

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(function () {
	if (__WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.responsive.mobile) {
		toggleMobileStyles();
	}
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prestashop__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prestashop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prestashop__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */



function setUpCheckout() {
  if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-cancel-address').length !== 0) {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.checkout-step:not(.js-current-step) .step-title').addClass('not-allowed');
  }

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-terms a').on('click', event => {
    event.preventDefault();
    var url = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).attr('href');
    if (url) {
      // TODO: Handle request if no pretty URL
      url += `?content_only=1`;
      __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.get(url, content => {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#modal').find('.js-modal-content').html(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(content).find('.page-cms').contents());
      }).fail(resp => {
        __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.emit('handleError', { eventType: 'clickTerms', resp: resp });
      });
    }

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#modal').modal('show');
  });

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-gift-checkbox').on('click', event => {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#gift').collapse('toggle');
  });
}

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(() => {
  if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('body#checkout').length === 1) {
    setUpCheckout();
  }

  __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.on('updatedDeliveryForm', params => {
    if (typeof params.deliveryOption === 'undefined' || 0 === params.deliveryOption.length) {
      return;
    }
    // Hide all carrier extra content ...
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".carrier-extra-content").hide();
    // and show the one related to the selected carrier
    params.deliveryOption.next(".carrier-extra-content").slideDown();
  });
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */


function initRmaItemSelector() {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#order-return-form table thead input[type=checkbox]').on('click', function () {
    var checked = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).prop('checked');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#order-return-form table tbody input[type=checkbox]').each(function (_, checkbox) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(checkbox).prop('checked', checked);
    });
  });
}

function setupCustomerScripts() {
  if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('body#order-detail')) {
    initRmaItemSelector();
  }
}

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(setupCustomerScripts);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prestashop__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prestashop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prestashop__);
throw new Error("Cannot find module \"velocity-animate\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_product_miniature__ = __webpack_require__(2);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */






__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(() => {
  __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.on('clickQuickView', function (elm) {
    let data = {
      'action': 'quickview',
      'id_product': elm.dataset.idProduct,
      'id_product_attribute': elm.dataset.idProductAttribute
    };
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.post(__WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.urls.pages.product, data, null, 'json').then(function (resp) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').append(resp.quickview_html);
      let productModal = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`#quickview-modal-${resp.product.id}-${resp.product.id_product_attribute}`);
      productModal.modal('show');
      productConfig(productModal);
      productModal.on('hidden.bs.modal', function () {
        productModal.remove();
      });
    }).fail(resp => {
      __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.emit('handleError', { eventType: 'clickQuickView', resp: resp });
    });
  });

  var productConfig = qv => {
    const MAX_THUMBS = 4;
    var $arrows = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-arrows');
    var $thumbnails = qv.find('.js-qv-product-images');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-thumb').on('click', event => {
      if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-thumb').hasClass('selected')) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-thumb').removeClass('selected');
      }
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget).addClass('selected');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-qv-product-cover').attr('src', __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).data('image-large-src'));
    });
    if ($thumbnails.find('li').length <= MAX_THUMBS) {
      $arrows.hide();
    } else {
      $arrows.on('click', event => {
        if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).hasClass('arrow-up') && __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-qv-product-images').position().top < 0) {
          move('up');
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.arrow-down').css('opacity', '1');
        } else if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).hasClass('arrow-down') && $thumbnails.position().top + $thumbnails.height() > __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-qv-mask').height()) {
          move('down');
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.arrow-up').css('opacity', '1');
        }
      });
    }
    qv.find('#quantity_wanted').TouchSpin({
      verticalbuttons: true,
      verticalupclass: 'material-icons touchspin-up',
      verticaldownclass: 'material-icons touchspin-down',
      buttondown_class: 'btn btn-touchspin js-touchspin',
      buttonup_class: 'btn btn-touchspin js-touchspin',
      min: 1,
      max: 1000000
    });
  };
  var move = direction => {
    const THUMB_MARGIN = 20;
    var $thumbnails = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-qv-product-images');
    var thumbHeight = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-qv-product-images li img').height() + THUMB_MARGIN;
    var currentPosition = $thumbnails.position().top;
    $thumbnails.velocity({
      translateY: direction === 'up' ? currentPosition + thumbHeight : currentPosition - thumbHeight
    }, function () {
      if ($thumbnails.position().top >= 0) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.arrow-up').css('opacity', '.2');
      } else if ($thumbnails.position().top + $thumbnails.height() <= __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-qv-mask').height()) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.arrow-down').css('opacity', '.2');
      }
    });
  };
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').on('click', '#search_filter_toggler', function () {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#search_filters_wrapper').removeClass('hidden-sm-down');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#content-wrapper').addClass('hidden-sm-down');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#footer').addClass('hidden-sm-down');
  });
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#search_filter_controls .clear').on('click', function () {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#search_filters_wrapper').addClass('hidden-sm-down');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#content-wrapper').removeClass('hidden-sm-down');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#footer').removeClass('hidden-sm-down');
  });
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#search_filter_controls .ok').on('click', function () {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#search_filters_wrapper').addClass('hidden-sm-down');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#content-wrapper').removeClass('hidden-sm-down');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#footer').removeClass('hidden-sm-down');
  });

  const parseSearchUrl = function (event) {
    if (event.target.dataset.searchUrl !== undefined) {
      return event.target.dataset.searchUrl;
    }

    if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).parent()[0].dataset.searchUrl === undefined) {
      throw new Error('Can not parse search URL');
    }

    return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).parent()[0].dataset.searchUrl;
  };

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').on('change', '#search_filters input[data-search-url]', function (event) {
    __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.emit('updateFacets', parseSearchUrl(event));
  });

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').on('click', '.js-search-filters-clear-all', function (event) {
    __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.emit('updateFacets', parseSearchUrl(event));
  });

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').on('click', '.js-search-link', function (event) {
    event.preventDefault();
    __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.emit('updateFacets', __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).closest('a').get(0).href);
  });

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').on('change', '#search_filters select', function (event) {
    const form = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).closest('form');
    __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.emit('updateFacets', '?' + form.serialize());
  });

  __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.on('updateProductList', data => {
    updateProductListDOM(data);
  });
});

function updateProductListDOM(data) {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#search_filters').replaceWith(data.rendered_facets);
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#js-active-search-filters').replaceWith(data.rendered_active_filters);
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#js-product-list-top').replaceWith(data.rendered_products_top);
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#js-product-list').replaceWith(data.rendered_products);
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#js-product-list-bottom').replaceWith(data.rendered_products_bottom);

  let productMinitature = new __WEBPACK_IMPORTED_MODULE_3__components_product_miniature__["a" /* default */]();
  productMinitature.init();
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */


__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(function () {
  createProductSpin();
  createInputFile();
  coverImage();
  imageScrollBox();

  prestashop.on('updatedProduct', function (event) {
    createInputFile();
    coverImage();
    if (event && event.product_minimal_quantity) {
      const minimalProductQuantity = parseInt(event.product_minimal_quantity, 10);
      const quantityInputSelector = '#quantity_wanted';
      let quantityInput = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(quantityInputSelector);

      // @see http://www.virtuosoft.eu/code/bootstrap-touchspin/ about Bootstrap TouchSpin
      quantityInput.trigger('touchspin.updatesettings', { min: minimalProductQuantity });
    }
    imageScrollBox();
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.tabs .nav-link.active').attr('href')).addClass('active').removeClass('fade');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-product-images-modal').replaceWith(event.product_images_modal);
  });

  function coverImage() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-thumb').on('click', event => {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-product-cover').attr('src', __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).data('image-large-src'));
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.selected').removeClass('selected');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).addClass('selected');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-qv-product-cover').prop('src', __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget).data('image-large-src'));
    });
  }

  function imageScrollBox() {
    if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#main .js-qv-product-images li').length > 2) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#main .js-qv-mask').addClass('scroll');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.scroll-box-arrows').addClass('scroll');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#main .js-qv-mask').scrollbox({
        direction: 'h',
        distance: 113,
        autoPlay: false
      });
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.scroll-box-arrows .left').click(function () {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#main .js-qv-mask').trigger('backward');
      });
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.scroll-box-arrows .right').click(function () {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#main .js-qv-mask').trigger('forward');
      });
    } else {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#main .js-qv-mask').removeClass('scroll');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.scroll-box-arrows').removeClass('scroll');
    }
  }

  function createInputFile() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-file-input').on('change', event => {
      let target, file;

      if ((target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget)[0]) && (file = target.files[0])) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(target).prev().text(file.name);
      }
    });
  }

  function createProductSpin() {
    let quantityInput = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#quantity_wanted');
    quantityInput.TouchSpin({
      verticalbuttons: true,
      verticalupclass: 'material-icons touchspin-up',
      verticaldownclass: 'material-icons touchspin-down',
      buttondown_class: 'btn btn-touchspin js-touchspin',
      buttonup_class: 'btn btn-touchspin js-touchspin',
      min: parseInt(quantityInput.attr('min'), 10),
      max: 1000000
    });

    var quantity = quantityInput.val();
    quantityInput.on('keyup change', function (event) {
      const newQuantity = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).val();
      if (newQuantity !== quantity) {
        quantity = newQuantity;
        let $productRefresh = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.product-refresh');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget).trigger('touchspin.stopspin');
        $productRefresh.trigger('click', { eventType: 'updatedProductQuantity' });
      }
      event.preventDefault();

      return false;
    });
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prestashop__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prestashop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prestashop__);



__WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.cart = __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.cart || {};

__WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.cart.active_inputs = null;

var spinnerSelector = 'input[name="product-quantity-spin"]';

/**
 * Attach Bootstrap TouchSpin event handlers
 */
function createSpin() {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(spinnerSelector), function (index, spinner) {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(spinner).TouchSpin({
      verticalbuttons: true,
      verticalupclass: 'material-icons touchspin-up',
      verticaldownclass: 'material-icons touchspin-down',
      buttondown_class: 'btn btn-touchspin js-touchspin js-increase-product-quantity',
      buttonup_class: 'btn btn-touchspin js-touchspin js-decrease-product-quantity',
      min: parseInt(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(spinner).attr('min'), 10),
      max: 1000000
    });
  });
}

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(() => {
  let productLineInCartSelector = '.js-cart-line-product-quantity';
  let promises = [];

  __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.on('updateCart', () => {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.quickview').modal('hide');
  });

  __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.on('updatedCart', () => {
    createSpin();
  });

  createSpin();

  let $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body');

  function isTouchSpin(namespace) {
    return namespace === 'on.startupspin' || namespace === 'on.startdownspin';
  }

  function shouldIncreaseProductQuantity(namespace) {
    return namespace === 'on.startupspin';
  }

  function findCartLineProductQuantityInput($target) {
    var $input = $target.parents('.bootstrap-touchspin').find(productLineInCartSelector);

    if ($input.is(':focus')) {
      return null;
    } else {
      return $input;
    }
  }

  function camelize(subject) {
    let actionTypeParts = subject.split('-');
    let i;
    let part;
    let camelizedSubject = '';

    for (i = 0; i < actionTypeParts.length; i++) {
      part = actionTypeParts[i];

      if (0 !== i) {
        part = part.substring(0, 1).toUpperCase() + part.substring(1);
      }

      camelizedSubject = camelizedSubject + part;
    }

    return camelizedSubject;
  }

  function parseCartAction($target, namespace) {
    if (!isTouchSpin(namespace)) {
      return {
        url: $target.attr('href'),
        type: camelize($target.data('link-action'))
      };
    }

    let $input = findCartLineProductQuantityInput($target);
    if (!$input) {
      return;
    }

    let cartAction = {};
    if (shouldIncreaseProductQuantity(namespace)) {
      cartAction = {
        url: $input.data('up-url'),
        type: 'increaseProductQuantity'
      };
    } else {
      cartAction = {
        url: $input.data('down-url'),
        type: 'decreaseProductQuantity'
      };
    }

    return cartAction;
  }

  let abortPreviousRequests = () => {
    var promise;
    while (promises.length > 0) {
      promise = promises.pop();
      promise.abort();
    }
  };

  var getTouchSpinInput = $button => {
    return __WEBPACK_IMPORTED_MODULE_0_jquery___default()($button.parents('.bootstrap-touchspin').find('input'));
  };

  var handleCartAction = event => {
    event.preventDefault();

    let $target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget);
    let dataset = event.currentTarget.dataset;

    let cartAction = parseCartAction($target, event.namespace);
    let requestData = {
      ajax: '1',
      action: 'update'
    };

    if (typeof cartAction === 'undefined') {
      return;
    }

    abortPreviousRequests();
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.ajax({
      url: cartAction.url,
      method: 'POST',
      data: requestData,
      dataType: 'json',
      beforeSend: function (jqXHR) {
        promises.push(jqXHR);
      }
    }).then(function (resp) {
      var $quantityInput = getTouchSpinInput($target);
      $quantityInput.val(resp.quantity);

      // Refresh cart preview
      __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.emit('updateCart', {
        reason: dataset
      });
    }).fail(resp => {
      __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.emit('handleError', {
        eventType: 'updateProductInCart',
        resp: resp,
        cartAction: cartAction.type
      });
    });
  };

  $body.on('click', '[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]', handleCartAction);

  $body.on('touchspin.on.startdownspin', spinnerSelector, handleCartAction);
  $body.on('touchspin.on.startupspin', spinnerSelector, handleCartAction);

  function sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, requestData, $target) {
    abortPreviousRequests();

    return __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.ajax({
      url: updateQuantityInCartUrl,
      method: 'POST',
      data: requestData,
      dataType: 'json',
      beforeSend: function (jqXHR) {
        promises.push(jqXHR);
      }
    }).then(function (resp) {
      $target.val(resp.quantity);

      var dataset;
      if ($target && $target.dataset) {
        dataset = $target.dataset;
      } else {
        dataset = resp;
      }

      // Refresh cart preview
      __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.emit('updateCart', {
        reason: dataset
      });
    }).fail(resp => {
      __WEBPACK_IMPORTED_MODULE_1_prestashop___default.a.emit('handleError', { eventType: 'updateProductQuantityInCart', resp: resp });
    });
  }

  function getRequestData(quantity) {
    return {
      ajax: '1',
      qty: Math.abs(quantity),
      action: 'update',
      op: getQuantityChangeType(quantity)
    };
  }

  function getQuantityChangeType($quantity) {
    return $quantity > 0 ? 'up' : 'down';
  }

  function updateProductQuantityInCart(event) {
    let $target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget);
    let updateQuantityInCartUrl = $target.data('update-url');
    let baseValue = $target.attr('value');

    // There should be a valid product quantity in cart
    let targetValue = $target.val();
    if (targetValue != parseInt(targetValue) || targetValue < 0 || isNaN(targetValue)) {
      $target.val(baseValue);

      return;
    }

    // There should be a new product quantity in cart
    let qty = targetValue - baseValue;
    if (qty == 0) {
      return;
    }

    var requestData = getRequestData(qty);

    sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, requestData, $target);
  }

  $body.on('focusout', productLineInCartSelector, event => {
    updateProductQuantityInCart(event);
  });

  $body.on('keyup', productLineInCartSelector, event => {
    if (event.keyCode == 13) {
      updateProductQuantityInCart(event);
    }
  });

  $body.on('click', '.js-discount .code', event => {
    event.stopPropagation();

    var $code = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget);
    var $discountInput = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[name=discount_name]');

    $discountInput.val($code.text());

    return false;
  });
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */


class Form {
  init() {
    this.parentFocus();
    this.togglePasswordVisibility();
  }

  parentFocus() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-child-focus').focus(function () {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).closest('.js-parent-focus').addClass('focus');
    });
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-child-focus').focusout(function () {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).closest('.js-parent-focus').removeClass('focus');
    });
  }

  togglePasswordVisibility() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('button[data-action="show-password"]').on('click', function () {
      var elm = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).closest('.input-group').children('input.js-visible-password');
      if (elm.attr('type') === 'password') {
        elm.attr('type', 'text');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).text(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('textHide'));
      } else {
        elm.attr('type', 'password');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).text(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data('textShow'));
      }
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Form;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
throw new Error("Cannot find module \"velocity-animate\"");
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */



class ProductSelect {
  init() {
    const MAX_THUMBS = 5;
    const FLAG_MARGIN = 10;
    let $arrows = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-arrows');
    let $thumbnails = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-product-images');
    let $onsale = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.on-sale');

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').on('click', '.js-modal-thumb', event => {
      if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-thumb').hasClass('selected')) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-thumb').removeClass('selected');
      }
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget).addClass('selected');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-product-cover').attr('src', __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).data('image-large-src'));
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-product-cover').attr('title', __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).attr('title'));
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-product-cover').attr('alt', __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).attr('alt'));
    }).on('click', 'aside#thumbnails', event => {
      if (event.target.id == 'thumbnails') {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#product-modal').modal('hide');
      }
    });

    if ($onsale.length && __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#product').length) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.new').css('top', $onsale.height() + FLAG_MARGIN);
    }
    if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-product-images li').length <= MAX_THUMBS) {
      $arrows.css('opacity', '.2');
    } else {
      $arrows.on('click', event => {
        if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).hasClass('arrow-up') && $thumbnails.position().top < 0) {
          this.move('up');
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-arrow-down').css('opacity', '1');
        } else if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).hasClass('arrow-down') && $thumbnails.position().top + $thumbnails.height() > __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-mask').height()) {
          this.move('down');
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-arrow-up').css('opacity', '1');
        }
      });
    }
  }

  move(direction) {
    const THUMB_MARGIN = 10;
    var $thumbnails = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-product-images');
    var thumbHeight = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-product-images li img').height() + THUMB_MARGIN;
    var currentPosition = $thumbnails.position().top;
    $thumbnails.velocity({
      translateY: direction === 'up' ? currentPosition + thumbHeight : currentPosition - thumbHeight
    }, function () {
      if ($thumbnails.position().top >= 0) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-arrow-up').css('opacity', '.2');
      } else if ($thumbnails.position().top + $thumbnails.height() <= __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-mask').height()) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-modal-arrow-down').css('opacity', '.2');
      }
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductSelect;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_down__ = __webpack_require__(3);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */



class TopMenu extends __WEBPACK_IMPORTED_MODULE_1__drop_down__["a" /* default */] {
  init() {
    let elmId;
    let self = this;
    this.el.find('li').hover(e => {
      if (this.el.parent().hasClass('mobile')) {
        return;
      }
      if (elmId !== __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.currentTarget).attr('id')) {
        if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data('depth') === 0) {
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`#${elmId} .js-sub-menu`).hide();
        }
        elmId = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.currentTarget).attr('id');
      }
      if (elmId && __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data('depth') === 0) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`#${elmId} .js-sub-menu`).show().css({
          top: __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`#${elmId}`).height() + __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`#${elmId}`).position().top
        });
      }
    });
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#menu-icon').on('click', function () {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#mobile_top_menu_wrapper').toggle();
      self.toggleMobileMenu();
    });
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-top-menu').mouseleave(() => {
      if (this.el.parent().hasClass('mobile')) {
        return;
      }
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(`#${elmId} .js-sub-menu`).hide();
    });
    this.el.on('click', e => {
      if (this.el.parent().hasClass('mobile')) {
        return;
      }
      e.stopPropagation();
    });
    prestashop.on('responsive update', function (event) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-sub-menu').removeAttr('style');
      self.toggleMobileMenu();
    });
    super.init();
  }

  toggleMobileMenu() {
    if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#mobile_top_menu_wrapper').is(":visible")) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#notifications').hide();
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#wrapper').hide();
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#footer').hide();
    } else {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#notifications').show();
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#wrapper').show();
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#footer').show();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TopMenu;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function (n) {
  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function (type) {
  var er, handler, len, args, i, listeners;

  if (!this._events) this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler)) return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++) listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function (type, listener) {
  var m;

  if (!isFunction(listener)) throw TypeError('listener must be a function');

  if (!this._events) this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function (type, listener) {
  if (!isFunction(listener)) throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function (type, listener) {
  var list, position, length, i;

  if (!isFunction(listener)) throw TypeError('listener must be a function');

  if (!this._events || !this._events[type]) return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener || isFunction(list.listener) && list.listener === listener) {
    delete this._events[type];
    if (this._events.removeListener) this.emit('removeListener', type, listener);
  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener) this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function (type) {
  var key, listeners;

  if (!this._events) return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function (type) {
  var ret;
  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function (type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function (emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
(function ($) {
  var nextId = 0;var Filestyle = function (element, options) {
    this.options = options;this.$elementFilestyle = [];this.$element = $(element);
  };Filestyle.prototype = { clear: function () {
      this.$element.val("");this.$elementFilestyle.find(":text").val("");this.$elementFilestyle.find(".badge").remove();
    }, destroy: function () {
      this.$element.removeAttr("style").removeData("filestyle");this.$elementFilestyle.remove();
    }, disabled: function (value) {
      if (value === true) {
        if (!this.options.disabled) {
          this.$element.attr("disabled", "true");this.$elementFilestyle.find("label").attr("disabled", "true");this.options.disabled = true;
        }
      } else {
        if (value === false) {
          if (this.options.disabled) {
            this.$element.removeAttr("disabled");this.$elementFilestyle.find("label").removeAttr("disabled");this.options.disabled = false;
          }
        } else {
          return this.options.disabled;
        }
      }
    }, buttonBefore: function (value) {
      if (value === true) {
        if (!this.options.buttonBefore) {
          this.options.buttonBefore = true;if (this.options.input) {
            this.$elementFilestyle.remove();this.constructor();this.pushNameFiles();
          }
        }
      } else {
        if (value === false) {
          if (this.options.buttonBefore) {
            this.options.buttonBefore = false;if (this.options.input) {
              this.$elementFilestyle.remove();this.constructor();this.pushNameFiles();
            }
          }
        } else {
          return this.options.buttonBefore;
        }
      }
    }, icon: function (value) {
      if (value === true) {
        if (!this.options.icon) {
          this.options.icon = true;this.$elementFilestyle.find("label").prepend(this.htmlIcon());
        }
      } else {
        if (value === false) {
          if (this.options.icon) {
            this.options.icon = false;this.$elementFilestyle.find(".icon-span-filestyle").remove();
          }
        } else {
          return this.options.icon;
        }
      }
    }, input: function (value) {
      if (value === true) {
        if (!this.options.input) {
          this.options.input = true;if (this.options.buttonBefore) {
            this.$elementFilestyle.append(this.htmlInput());
          } else {
            this.$elementFilestyle.prepend(this.htmlInput());
          }this.$elementFilestyle.find(".badge").remove();this.pushNameFiles();this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn");
        }
      } else {
        if (value === false) {
          if (this.options.input) {
            this.options.input = false;this.$elementFilestyle.find(":text").remove();var files = this.pushNameFiles();if (files.length > 0 && this.options.badge) {
              this.$elementFilestyle.find("label").append(' <span class="badge">' + files.length + "</span>");
            }this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn");
          }
        } else {
          return this.options.input;
        }
      }
    }, size: function (value) {
      if (value !== undefined) {
        var btn = this.$elementFilestyle.find("label"),
            input = this.$elementFilestyle.find("input");btn.removeClass("btn-lg btn-sm");input.removeClass("input-lg input-sm");if (value != "nr") {
          btn.addClass("btn-" + value);input.addClass("input-" + value);
        }
      } else {
        return this.options.size;
      }
    }, placeholder: function (value) {
      if (value !== undefined) {
        this.options.placeholder = value;this.$elementFilestyle.find("input").attr("placeholder", value);
      } else {
        return this.options.placeholder;
      }
    }, buttonText: function (value) {
      if (value !== undefined) {
        this.options.buttonText = value;this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText);
      } else {
        return this.options.buttonText;
      }
    }, buttonName: function (value) {
      if (value !== undefined) {
        this.options.buttonName = value;this.$elementFilestyle.find("label").attr({ "class": "btn " + this.options.buttonName });
      } else {
        return this.options.buttonName;
      }
    }, iconName: function (value) {
      if (value !== undefined) {
        this.$elementFilestyle.find(".icon-span-filestyle").attr({ "class": "icon-span-filestyle " + this.options.iconName });
      } else {
        return this.options.iconName;
      }
    }, htmlIcon: function () {
      if (this.options.icon) {
        return '<span class="icon-span-filestyle ' + this.options.iconName + '"></span> ';
      } else {
        return "";
      }
    }, htmlInput: function () {
      if (this.options.input) {
        return '<input type="text" class="form-control ' + (this.options.size == "nr" ? "" : "input-" + this.options.size) + '" placeholder="' + this.options.placeholder + '" disabled> ';
      } else {
        return "";
      }
    }, pushNameFiles: function () {
      var content = "",
          files = [];if (this.$element[0].files === undefined) {
        files[0] = { name: this.$element[0] && this.$element[0].value };
      } else {
        files = this.$element[0].files;
      }for (var i = 0; i < files.length; i++) {
        content += files[i].name.split("\\").pop() + ", ";
      }if (content !== "") {
        this.$elementFilestyle.find(":text").val(content.replace(/\, $/g, ""));
      } else {
        this.$elementFilestyle.find(":text").val("");
      }return files;
    }, constructor: function () {
      var _self = this,
          html = "",
          id = _self.$element.attr("id"),
          files = [],
          btn = "",
          $label;if (id === "" || !id) {
        id = "filestyle-" + nextId;_self.$element.attr({ id: id });nextId++;
      }btn = '<span class="group-span-filestyle ' + (_self.options.input ? "input-group-btn" : "") + '"><label for="' + id + '" class="btn ' + _self.options.buttonName + " " + (_self.options.size == "nr" ? "" : "btn-" + _self.options.size) + '" ' + (_self.options.disabled ? 'disabled="true"' : "") + ">" + _self.htmlIcon() + '<span class="buttonText">' + _self.options.buttonText + "</span></label></span>";html = _self.options.buttonBefore ? btn + _self.htmlInput() : _self.htmlInput() + btn;_self.$elementFilestyle = $('<div class="bootstrap-filestyle input-group">' + html + "</div>");_self.$elementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function (e) {
        if (e.keyCode === 13 || e.charCode === 32) {
          _self.$elementFilestyle.find("label").click();return false;
        }
      });_self.$element.css({ position: "absolute", clip: "rect(0px 0px 0px 0px)" }).attr("tabindex", "-1").after(_self.$elementFilestyle);if (_self.options.disabled) {
        _self.$element.attr("disabled", "true");
      }_self.$element.change(function () {
        var files = _self.pushNameFiles();if (_self.options.input == false && _self.options.badge) {
          if (_self.$elementFilestyle.find(".badge").length == 0) {
            _self.$elementFilestyle.find("label").append(' <span class="badge">' + files.length + "</span>");
          } else {
            if (files.length == 0) {
              _self.$elementFilestyle.find(".badge").remove();
            } else {
              _self.$elementFilestyle.find(".badge").html(files.length);
            }
          }
        } else {
          _self.$elementFilestyle.find(".badge").remove();
        }
      });if (window.navigator.userAgent.search(/firefox/i) > -1) {
        _self.$elementFilestyle.find("label").click(function () {
          _self.$element.click();return false;
        });
      }
    } };var old = $.fn.filestyle;$.fn.filestyle = function (option, value) {
    var get = "",
        element = this.each(function () {
      if ($(this).attr("type") === "file") {
        var $this = $(this),
            data = $this.data("filestyle"),
            options = $.extend({}, $.fn.filestyle.defaults, option, typeof option === "object" && option);if (!data) {
          $this.data("filestyle", data = new Filestyle(this, options));data.constructor();
        }if (typeof option === "string") {
          get = data[option](value);
        }
      }
    });if (typeof get !== undefined) {
      return get;
    } else {
      return element;
    }
  };$.fn.filestyle.defaults = { buttonText: "Choose file", iconName: "glyphicon glyphicon-folder-open", buttonName: "btn-default", size: "nr", input: true, badge: true, icon: true, buttonBefore: false, disabled: false, placeholder: "" };$.fn.filestyle.noConflict = function () {
    $.fn.filestyle = old;return this;
  };$(function () {
    $(".filestyle").each(function () {
      var $this = $(this),
          options = { input: $this.attr("data-input") === "false" ? false : true, icon: $this.attr("data-icon") === "false" ? false : true, buttonBefore: $this.attr("data-buttonBefore") === "true" ? true : false, disabled: $this.attr("data-disabled") === "true" ? true : false, size: $this.attr("data-size"), buttonText: $this.attr("data-buttonText"), buttonName: $this.attr("data-buttonName"), iconName: $this.attr("data-iconName"), badge: $this.attr("data-badge") === "false" ? false : true, placeholder: $this.attr("data-placeholder") };$this.filestyle(options);
    });
  });
})(window.jQuery);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
(function ($) {
  $.fn.scrollbox = function (config) {
    var defConfig = { linear: false, startDelay: 2, delay: 3, step: 5, speed: 32, switchItems: 1, direction: "vertical", distance: "auto", autoPlay: true, onMouseOverPause: true, paused: false, queue: null, listElement: "ul", listItemElement: "li", infiniteLoop: true, switchAmount: 0, afterForward: null, afterBackward: null, triggerStackable: false };config = $.extend(defConfig, config);config.scrollOffset = config.direction === "vertical" ? "scrollTop" : "scrollLeft";if (config.queue) {
      config.queue = $("#" + config.queue);
    }return this.each(function () {
      var container = $(this),
          containerUL,
          scrollingId = null,
          nextScrollId = null,
          paused = false,
          releaseStack,
          backward,
          forward,
          resetClock,
          scrollForward,
          scrollBackward,
          forwardHover,
          pauseHover,
          switchCount = 0,
          stackedTriggerIndex = 0;if (config.onMouseOverPause) {
        container.bind("mouseover", function () {
          paused = true;
        });container.bind("mouseout", function () {
          paused = false;
        });
      }containerUL = container.children(config.listElement + ":first-child");if (config.infiniteLoop === false && config.switchAmount === 0) {
        config.switchAmount = containerUL.children().length;
      }scrollForward = function () {
        if (paused) {
          return;
        }var curLi, i, newScrollOffset, scrollDistance, theStep;curLi = containerUL.children(config.listItemElement + ":first-child");scrollDistance = config.distance !== "auto" ? config.distance : config.direction === "vertical" ? curLi.outerHeight(true) : curLi.outerWidth(true);if (!config.linear) {
          theStep = Math.max(3, parseInt((scrollDistance - container[0][config.scrollOffset]) * .3, 10));newScrollOffset = Math.min(container[0][config.scrollOffset] + theStep, scrollDistance);
        } else {
          newScrollOffset = Math.min(container[0][config.scrollOffset] + config.step, scrollDistance);
        }container[0][config.scrollOffset] = newScrollOffset;if (newScrollOffset >= scrollDistance) {
          for (i = 0; i < config.switchItems; i++) {
            if (config.queue && config.queue.find(config.listItemElement).length > 0) {
              containerUL.append(config.queue.find(config.listItemElement)[0]);containerUL.children(config.listItemElement + ":first-child").remove();
            } else {
              containerUL.append(containerUL.children(config.listItemElement + ":first-child"));
            }++switchCount;
          }container[0][config.scrollOffset] = 0;clearInterval(scrollingId);scrollingId = null;if ($.isFunction(config.afterForward)) {
            config.afterForward.call(container, { switchCount: switchCount, currentFirstChild: containerUL.children(config.listItemElement + ":first-child") });
          }if (config.triggerStackable && stackedTriggerIndex !== 0) {
            releaseStack();return;
          }if (config.infiniteLoop === false && switchCount >= config.switchAmount) {
            return;
          }if (config.autoPlay) {
            nextScrollId = setTimeout(forward, config.delay * 1e3);
          }
        }
      };scrollBackward = function () {
        if (paused) {
          return;
        }var curLi, i, newScrollOffset, scrollDistance, theStep;if (container[0][config.scrollOffset] === 0) {
          for (i = 0; i < config.switchItems; i++) {
            containerUL.children(config.listItemElement + ":last-child").insertBefore(containerUL.children(config.listItemElement + ":first-child"));
          }curLi = containerUL.children(config.listItemElement + ":first-child");scrollDistance = config.distance !== "auto" ? config.distance : config.direction === "vertical" ? curLi.height() : curLi.width();container[0][config.scrollOffset] = scrollDistance;
        }if (!config.linear) {
          theStep = Math.max(3, parseInt(container[0][config.scrollOffset] * .3, 10));newScrollOffset = Math.max(container[0][config.scrollOffset] - theStep, 0);
        } else {
          newScrollOffset = Math.max(container[0][config.scrollOffset] - config.step, 0);
        }container[0][config.scrollOffset] = newScrollOffset;if (newScrollOffset === 0) {
          --switchCount;clearInterval(scrollingId);scrollingId = null;if ($.isFunction(config.afterBackward)) {
            config.afterBackward.call(container, { switchCount: switchCount, currentFirstChild: containerUL.children(config.listItemElement + ":first-child") });
          }if (config.triggerStackable && stackedTriggerIndex !== 0) {
            releaseStack();return;
          }if (config.autoPlay) {
            nextScrollId = setTimeout(forward, config.delay * 1e3);
          }
        }
      };releaseStack = function () {
        if (stackedTriggerIndex === 0) {
          return;
        }if (stackedTriggerIndex > 0) {
          stackedTriggerIndex--;nextScrollId = setTimeout(forward, 0);
        } else {
          stackedTriggerIndex++;nextScrollId = setTimeout(backward, 0);
        }
      };forward = function () {
        clearInterval(scrollingId);scrollingId = setInterval(scrollForward, config.speed);
      };backward = function () {
        clearInterval(scrollingId);scrollingId = setInterval(scrollBackward, config.speed);
      };forwardHover = function () {
        config.autoPlay = true;paused = false;clearInterval(scrollingId);scrollingId = setInterval(scrollForward, config.speed);
      };pauseHover = function () {
        paused = true;
      };resetClock = function (delay) {
        config.delay = delay || config.delay;clearTimeout(nextScrollId);if (config.autoPlay) {
          nextScrollId = setTimeout(forward, config.delay * 1e3);
        }
      };if (config.autoPlay) {
        nextScrollId = setTimeout(forward, config.startDelay * 1e3);
      }container.bind("resetClock", function (delay) {
        resetClock(delay);
      });container.bind("forward", function () {
        if (config.triggerStackable) {
          if (scrollingId !== null) {
            stackedTriggerIndex++;
          } else {
            forward();
          }
        } else {
          clearTimeout(nextScrollId);forward();
        }
      });container.bind("backward", function () {
        if (config.triggerStackable) {
          if (scrollingId !== null) {
            stackedTriggerIndex--;
          } else {
            backward();
          }
        } else {
          clearTimeout(nextScrollId);backward();
        }
      });container.bind("pauseHover", function () {
        pauseHover();
      });container.bind("forwardHover", function () {
        forwardHover();
      });container.bind("speedUp", function (event, speed) {
        if (speed === "undefined") {
          speed = Math.max(1, parseInt(config.speed / 2, 10));
        }config.speed = speed;
      });container.bind("speedDown", function (event, speed) {
        if (speed === "undefined") {
          speed = config.speed * 2;
        }config.speed = speed;
      });container.bind("updateConfig", function (event, options) {
        config = $.extend(config, options);
      });
    });
  };
})(jQuery);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prestashop__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prestashop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prestashop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */



__WEBPACK_IMPORTED_MODULE_0_prestashop___default.a.blockcart = __WEBPACK_IMPORTED_MODULE_0_prestashop___default.a.blockcart || {};

__WEBPACK_IMPORTED_MODULE_0_prestashop___default.a.blockcart.showModal = html => {
  function getBlockCartModal() {
    return __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#blockcart-modal');
  }

  let $blockCartModal = getBlockCartModal();
  if ($blockCartModal.length) {
    $blockCartModal.remove();
  }

  __WEBPACK_IMPORTED_MODULE_1_jquery___default()('body').append(html);

  $blockCartModal = getBlockCartModal();
  $blockCartModal.modal('show').on('hidden.bs.modal', event => {
    __WEBPACK_IMPORTED_MODULE_0_prestashop___default.a.emit('updateProduct', {
      reason: event.currentTarget.dataset
    });
  });
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);