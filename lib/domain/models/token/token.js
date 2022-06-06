"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Token = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Token = /*#__PURE__*/function () {
  function Token(value) {
    _classCallCheck(this, Token);

    _defineProperty(this, "_value", void 0);

    this._value = value;
  }

  _createClass(Token, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }]);

  return Token;
}();

exports.Token = Token;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUb2tlbiIsInZhbHVlIiwiX3ZhbHVlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi9tb2RlbHMvdG9rZW4vdG9rZW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDcmVkZW50aWFsc30gZnJvbSBcImdvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2F1dGgvY3JlZGVudGlhbHNcIjtcblxuZXhwb3J0IGNsYXNzIFRva2VuIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfdmFsdWU6IENyZWRlbnRpYWxzXG5cbiAgY29uc3RydWN0b3IodmFsdWU6IENyZWRlbnRpYWxzKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBDcmVkZW50aWFscyB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsSztFQUdYLGVBQVlDLEtBQVosRUFBZ0M7SUFBQTs7SUFBQTs7SUFDOUIsS0FBS0MsTUFBTCxHQUFjRCxLQUFkO0VBQ0Q7Ozs7U0FFRCxlQUF5QjtNQUN2QixPQUFPLEtBQUtDLE1BQVo7SUFDRCJ9