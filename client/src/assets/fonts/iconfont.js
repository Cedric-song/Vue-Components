;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-location" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 76.893274c-166.310793 0-301.120129 131.966591-301.120129 294.746978 0 162.794713 201.146183 378.601804 301.120129 575.46545 104.244202-196.863646 301.120129-412.671761 301.120129-575.46545C813.120129 208.859865 678.30977 76.893274 512 76.893274zM512 539.77253c-93.547583 0-169.382758-74.593905-169.382758-166.639275 0-92.021833 75.835176-166.637228 169.382758-166.637228 93.545536 0 169.382758 74.615395 169.382758 166.637228C681.382758 465.177602 605.545536 539.77253 512 539.77253zM512 299.084773c-41.588187 0-75.290777 33.157167-75.290777 74.048483 0 40.913828 33.70259 74.070996 75.290777 74.070996 41.566698 0 75.270311-33.157167 75.270311-74.070996C587.270311 332.242963 553.567721 299.084773 512 299.084773z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-number" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M195.183 317.791c0-175.517 141.836-317.791 316.817-317.791s316.817 142.275 316.817 317.791c0 175.469-316.817 706.209-316.817 706.209 0 0-316.817-530.741-316.817-706.209z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-up" viewBox="0 0 1171 1024">' +
    '' +
    '<path d="M566.312485 618.082487 198.037943 986.357029 146.289371 934.645029 568.945371 511.989029 620.657371 563.7376 618.134199 566.260773 1005.202286 953.362286 953.380571 1005.184 566.312485 618.082487 566.312485 618.082487ZM566.292846 106.080329 51.712 620.628114 0 568.952686 568.941714 0.010971 620.653714 51.722971 618.116242 54.260297 1151.488 587.666286 1099.666286 639.488 566.292846 106.080329 566.292846 106.080329Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-submit" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 1024C229.216 1024 0 794.752 0 512 0 229.216 229.216 0 512 0s512 229.248 512 512C1024 794.752 794.752 1024 512 1024zM512 64C264.576 64 64 264.576 64 512c0 247.424 200.576 448 448 448s448-200.576 448-448C960 264.576 759.392 64 512 64zM457.92 690.272c-1.056 1.504-1.696 3.232-3.04 4.608-6.304 6.304-14.624 9.216-22.88 8.992-8.256 0.192-16.576-2.688-22.848-8.992-1.344-1.344-1.984-3.072-3.04-4.576l-156.992-156.96c-12.192-12.224-12.192-32 0-44.192 12.224-12.192 32-12.192 44.192 0l138.656 138.688 298.656-298.688c12.192-12.192 32-12.192 44.192 0 12.224 12.192 12.224 32 0 44.192L457.92 690.272z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cancel" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M282.781014 740.755417C289.105421 747.079824 297.1018 750.278375 305.025484 750.278375 312.94917 750.278375 320.945546 747.079824 327.269956 740.755417L511.768214 556.257156 696.19378 740.755417C702.590882 747.079824 710.514566 750.278375 718.510945 750.278375 726.507324 750.278375 734.431008 747.079824 740.82811 740.755417 753.549621 727.96121 753.549621 708.915292 740.82811 696.19378L556.257156 511.768214 740.755417 327.342651C753.476926 314.621139 753.476926 295.502526 740.755417 282.781014 727.96121 270.059503 708.915292 270.059503 696.19378 282.781014L511.768214 467.279273 327.269956 282.781014C314.548444 270.059503 295.42983 270.059503 282.781014 282.781014 270.059503 295.502526 270.059503 314.621139 282.781014 327.342651L467.279273 511.768214 282.781014 696.19378C270.059503 708.987985 270.059503 728.033905 282.781014 740.755417L282.781014 740.755417 282.781014 740.755417ZM511.768214 1020.628661C646.907011 1020.628661 775.721398 968.14334 871.096385 871.096385 966.544066 775.721398 1020.628661 646.907011 1020.628661 511.768214 1020.628661 376.629418 968.14334 247.815031 871.096385 152.367351 775.721398 55.393088 646.907011 2.907768 511.768214 2.907768 376.629418 2.907768 247.815031 55.393088 152.367351 152.367351 55.393088 247.815031 2.907768 376.629418 2.907768 511.768214 2.907768 646.907011 55.393088 775.721398 152.367351 871.096385 247.815031 968.14334 376.629418 1020.628661 511.768214 1020.628661L511.768214 1020.628661 511.768214 1020.628661ZM196.928987 196.928987C281.181737 112.603541 392.476787 66.515324 511.768214 66.515324 631.059643 66.515324 742.354691 112.603541 826.607442 196.928987 910.860194 281.181737 957.021106 392.476787 957.021106 511.768214 957.021106 631.059643 910.860194 742.354691 826.607442 826.607442 742.354691 910.860194 631.059643 957.021106 511.768214 957.021106 392.476787 957.021106 281.181737 910.860194 196.928987 826.607442 112.603541 742.354691 66.515324 631.059643 66.515324 511.768214 66.515324 392.476787 112.603541 281.181737 196.928987 196.928987L196.928987 196.928987 196.928987 196.928987Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-down" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M508.333312 490.831916 974.392832 44.16745 919.864832 3.621926 485.98016 409.719196 53.742336 21.164022 0 63.238772 463.404672 490.593523 486.244224 512 486.428416 511.823916 486.616704 512 508.333312 490.831916ZM508.333312 1002.83191 974.392832 556.16745 919.864832 515.621926 485.98016 921.719194 53.742336 533.164022 0 575.238772 463.404672 1002.593523 486.244224 1024 486.428416 1023.82391 486.616704 1024 508.333312 1002.83191Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)