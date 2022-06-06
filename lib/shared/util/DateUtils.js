"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateUtils = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

require("dayjs/locale/ja");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

_dayjs["default"].locale("ja");

var DateUtils = /*#__PURE__*/function () {
  function DateUtils() {
    _classCallCheck(this, DateUtils);
  }

  _createClass(DateUtils, null, [{
    key: "today",
    value: function today() {
      return (0, _dayjs["default"])();
    }
  }, {
    key: "format",
    value: function format(value) {
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "YY/MM/DD/HH:mm";
      return (0, _dayjs["default"])(value).format(template);
    }
  }, {
    key: "addDays",
    value: function addDays(value, days) {
      return (0, _dayjs["default"])(value).add(days, "day");
    }
  }, {
    key: "getStartAndEndAsString",
    value: function getStartAndEndAsString(origin, days) {
      var start = DateUtils.format(origin, "YYYY-MM-DDT00:00:00");
      var end = DateUtils.format(DateUtils.addDays(origin, days - 1), "YYYY-MM-DDT23:59:59");
      return {
        start: start,
        end: end
      };
    }
  }]);

  return DateUtils;
}();

exports.DateUtils = DateUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYXlqcyIsImxvY2FsZSIsIkRhdGVVdGlscyIsInZhbHVlIiwidGVtcGxhdGUiLCJmb3JtYXQiLCJkYXlzIiwiYWRkIiwib3JpZ2luIiwic3RhcnQiLCJlbmQiLCJhZGREYXlzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NoYXJlZC91dGlsL0RhdGVVdGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF5anMsIHtEYXlqc30gZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgXCJkYXlqcy9sb2NhbGUvamFcIlxuXG5kYXlqcy5sb2NhbGUoXCJqYVwiKVxuXG5leHBvcnQgY2xhc3MgRGF0ZVV0aWxzIHtcbiAgc3RhdGljIHRvZGF5KCkge1xuICAgIHJldHVybiBkYXlqcygpXG4gIH1cblxuICBzdGF0aWMgZm9ybWF0KHZhbHVlOiBzdHJpbmcgfCBEYXRlIHwgRGF5anMsIHRlbXBsYXRlOiBzdHJpbmcgPSBcIllZL01NL0REL0hIOm1tXCIpIHtcbiAgICByZXR1cm4gZGF5anModmFsdWUpLmZvcm1hdCh0ZW1wbGF0ZSlcbiAgfVxuXG4gIHN0YXRpYyBhZGREYXlzKHZhbHVlOiBzdHJpbmcgfCBEYXRlIHwgRGF5anMsIGRheXM6IG51bWJlcikge1xuICAgIHJldHVybiBkYXlqcyh2YWx1ZSkuYWRkKGRheXMsIFwiZGF5XCIpXG4gIH1cblxuICBzdGF0aWMgZ2V0U3RhcnRBbmRFbmRBc1N0cmluZyhvcmlnaW46IERheWpzLCBkYXlzOiBudW1iZXIpIHtcbiAgICBjb25zdCBzdGFydCA9IERhdGVVdGlscy5mb3JtYXQob3JpZ2luLCBcIllZWVktTU0tRERUMDA6MDA6MDBcIilcbiAgICBjb25zdCBlbmQgPSBEYXRlVXRpbHMuZm9ybWF0KERhdGVVdGlscy5hZGREYXlzKG9yaWdpbiwgZGF5cyAtIDEpLCBcIllZWVktTU0tRERUMjM6NTk6NTlcIilcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQsXG4gICAgICBlbmRcbiAgICB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0FBRUFBLGlCQUFBLENBQU1DLE1BQU4sQ0FBYSxJQUFiOztJQUVhQyxTOzs7Ozs7O1dBQ1gsaUJBQWU7TUFDYixPQUFPLElBQUFGLGlCQUFBLEdBQVA7SUFDRDs7O1dBRUQsZ0JBQWNHLEtBQWQsRUFBaUY7TUFBQSxJQUFyQ0MsUUFBcUMsdUVBQWxCLGdCQUFrQjtNQUMvRSxPQUFPLElBQUFKLGlCQUFBLEVBQU1HLEtBQU4sRUFBYUUsTUFBYixDQUFvQkQsUUFBcEIsQ0FBUDtJQUNEOzs7V0FFRCxpQkFBZUQsS0FBZixFQUE2Q0csSUFBN0MsRUFBMkQ7TUFDekQsT0FBTyxJQUFBTixpQkFBQSxFQUFNRyxLQUFOLEVBQWFJLEdBQWIsQ0FBaUJELElBQWpCLEVBQXVCLEtBQXZCLENBQVA7SUFDRDs7O1dBRUQsZ0NBQThCRSxNQUE5QixFQUE2Q0YsSUFBN0MsRUFBMkQ7TUFDekQsSUFBTUcsS0FBSyxHQUFHUCxTQUFTLENBQUNHLE1BQVYsQ0FBaUJHLE1BQWpCLEVBQXlCLHFCQUF6QixDQUFkO01BQ0EsSUFBTUUsR0FBRyxHQUFHUixTQUFTLENBQUNHLE1BQVYsQ0FBaUJILFNBQVMsQ0FBQ1MsT0FBVixDQUFrQkgsTUFBbEIsRUFBMEJGLElBQUksR0FBRyxDQUFqQyxDQUFqQixFQUFzRCxxQkFBdEQsQ0FBWjtNQUNBLE9BQU87UUFDTEcsS0FBSyxFQUFMQSxLQURLO1FBRUxDLEdBQUcsRUFBSEE7TUFGSyxDQUFQO0lBSUQifQ==