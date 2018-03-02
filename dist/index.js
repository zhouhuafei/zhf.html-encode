'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else {
        // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('htmlEncode', function () {
    function htmlEncode(html) {
        if (Object.prototype.toString.call(html).slice(8, -1).toLowerCase() !== 'string') {
            return '';
        }
        var arr = html.split('');
        arr.forEach(function (v, i, a) {
            if (v === '>') {
                a[i] = '&#62;';
            }
            if (v === '<') {
                a[i] = '&#60;';
            }
        });
        return arr.join('');
    }

    return htmlEncode;
});