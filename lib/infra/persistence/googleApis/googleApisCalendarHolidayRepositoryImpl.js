"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleApisCalendarHolidayRepositoryImpl = void 0;

var _holiday = require("../../../domain/models/calendarEvent/holiday");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _inversify = require("inversify");

var _dec, _dec2, _dec3, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GoogleApisCalendarHolidayRepositoryImpl = (_dec = (0, _inversify.injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = /*#__PURE__*/function () {
  function GoogleApisCalendarHolidayRepositoryImpl() {
    _classCallCheck(this, GoogleApisCalendarHolidayRepositoryImpl);

    _defineProperty(this, "fetch", _nodeFetch["default"]);

    _defineProperty(this, "url", void 0);

    var BASE_CALENDAR_URL = process.env.BASE_CALENDAR_URL_FOR_PUBLIC_HOLIDAY;
    var BASE_CALENDAR_ID_FOR_PUBLIC_HOLIDAY = process.env.BASE_CALENDAR_ID_FOR_PUBLIC_HOLIDAY; // Calendar Id. This is public but apparently not documented anywhere officially.

    var API_KEY = process.env.API_KEY;
    var CALENDAR_REGION = process.env.CALENDAR_REGION; // This variable refers to region whose holidays do we need to fetch

    this.url = "".concat(BASE_CALENDAR_URL, "/").concat(CALENDAR_REGION, "%23").concat(BASE_CALENDAR_ID_FOR_PUBLIC_HOLIDAY, "/events?key=").concat(API_KEY);
  }

  _createClass(GoogleApisCalendarHolidayRepositoryImpl, [{
    key: "getAll",
    value: function getAll() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        // TODO: error handling.
        _this.fetch(_this.url).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data.error) return reject(data.error);
          var holidays = data.items.map(function (item) {
            return _holiday.Holiday.fromPublicEvent(item);
          });
          resolve(holidays);
        });
      });
    }
  }, {
    key: "findByDate",
    value: function findByDate(start, end) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var url = "".concat(_this2.url, "&timeMin=").concat(start, "Z&timeMax=").concat(end, "Z");

        _this2.fetch(url).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data.error) return reject(data.error);
          if (data.items.length === 0) return reject("No upcoming holidays found.");

          var holiday = _holiday.Holiday.fromPublicEvent(data.items[0]);

          resolve(holiday);
        });
      });
    }
  }]);

  return GoogleApisCalendarHolidayRepositoryImpl;
}()) || _class) || _class) || _class);
exports.GoogleApisCalendarHolidayRepositoryImpl = GoogleApisCalendarHolidayRepositoryImpl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJHb29nbGVBcGlzQ2FsZW5kYXJIb2xpZGF5UmVwb3NpdG9yeUltcGwiLCJpbmplY3RhYmxlIiwiZmV0Y2giLCJCQVNFX0NBTEVOREFSX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJCQVNFX0NBTEVOREFSX1VSTF9GT1JfUFVCTElDX0hPTElEQVkiLCJCQVNFX0NBTEVOREFSX0lEX0ZPUl9QVUJMSUNfSE9MSURBWSIsIkFQSV9LRVkiLCJDQUxFTkRBUl9SRUdJT04iLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJob2xpZGF5cyIsIml0ZW1zIiwibWFwIiwiaXRlbSIsIkhvbGlkYXkiLCJmcm9tUHVibGljRXZlbnQiLCJzdGFydCIsImVuZCIsImxlbmd0aCIsImhvbGlkYXkiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5mcmEvcGVyc2lzdGVuY2UvZ29vZ2xlQXBpcy9nb29nbGVBcGlzQ2FsZW5kYXJIb2xpZGF5UmVwb3NpdG9yeUltcGwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIb2xpZGF5UmVwb3NpdG9yeX0gZnJvbSBcIkAvZG9tYWluL21vZGVscy9jYWxlbmRhckV2ZW50L2hvbGlkYXlSZXBvc2l0b3J5XCI7XG5pbXBvcnQge0hvbGlkYXl9IGZyb20gXCJAL2RvbWFpbi9tb2RlbHMvY2FsZW5kYXJFdmVudC9ob2xpZGF5XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcbmltcG9ydCB7aW5qZWN0YWJsZX0gZnJvbSBcImludmVyc2lmeVwiO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlQXBpc0NhbGVuZGFySG9saWRheVJlcG9zaXRvcnlJbXBsIGltcGxlbWVudHMgSG9saWRheVJlcG9zaXRvcnkge1xuICBwcml2YXRlIHJlYWRvbmx5IGZldGNoID0gZmV0Y2hcbiAgcHJpdmF0ZSByZWFkb25seSB1cmw6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IEJBU0VfQ0FMRU5EQVJfVVJMID0gcHJvY2Vzcy5lbnYuQkFTRV9DQUxFTkRBUl9VUkxfRk9SX1BVQkxJQ19IT0xJREFZIVxuICAgIGNvbnN0IEJBU0VfQ0FMRU5EQVJfSURfRk9SX1BVQkxJQ19IT0xJREFZID0gcHJvY2Vzcy5lbnYuQkFTRV9DQUxFTkRBUl9JRF9GT1JfUFVCTElDX0hPTElEQVkhIC8vIENhbGVuZGFyIElkLiBUaGlzIGlzIHB1YmxpYyBidXQgYXBwYXJlbnRseSBub3QgZG9jdW1lbnRlZCBhbnl3aGVyZSBvZmZpY2lhbGx5LlxuICAgIGNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5BUElfS0VZXG4gICAgY29uc3QgQ0FMRU5EQVJfUkVHSU9OID0gcHJvY2Vzcy5lbnYuQ0FMRU5EQVJfUkVHSU9OIC8vIFRoaXMgdmFyaWFibGUgcmVmZXJzIHRvIHJlZ2lvbiB3aG9zZSBob2xpZGF5cyBkbyB3ZSBuZWVkIHRvIGZldGNoXG4gICAgdGhpcy51cmwgPSBgJHtCQVNFX0NBTEVOREFSX1VSTH0vJHtDQUxFTkRBUl9SRUdJT059JTIzJHtCQVNFX0NBTEVOREFSX0lEX0ZPUl9QVUJMSUNfSE9MSURBWX0vZXZlbnRzP2tleT0ke0FQSV9LRVl9YFxuICB9XG5cbiAgZ2V0QWxsKCk6IFByb21pc2U8SG9saWRheVtdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIFRPRE86IGVycm9yIGhhbmRsaW5nLlxuICAgICAgdGhpcy5mZXRjaCh0aGlzLnVybCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5lcnJvcikgcmV0dXJuIHJlamVjdChkYXRhLmVycm9yKVxuICAgICAgICBjb25zdCBob2xpZGF5cyA9IGRhdGEuaXRlbXMubWFwKChpdGVtOiBhbnkpID0+IEhvbGlkYXkuZnJvbVB1YmxpY0V2ZW50KGl0ZW0pKVxuICAgICAgICByZXNvbHZlKGhvbGlkYXlzKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZmluZEJ5RGF0ZShzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZyk6IFByb21pc2U8SG9saWRheT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLnVybH0mdGltZU1pbj0ke3N0YXJ0fVomdGltZU1heD0ke2VuZH1aYFxuICAgICAgdGhpcy5mZXRjaCh1cmwpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiByZWplY3QoZGF0YS5lcnJvcilcbiAgICAgICAgaWYgKGRhdGEuaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVqZWN0KFwiTm8gdXBjb21pbmcgaG9saWRheXMgZm91bmQuXCIpXG4gICAgICAgIGNvbnN0IGhvbGlkYXkgPSBIb2xpZGF5LmZyb21QdWJsaWNFdmVudChkYXRhLml0ZW1zWzBdKVxuICAgICAgICByZXNvbHZlKGhvbGlkYXkpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUdhQSx1QyxXQURaLElBQUFDLHFCQUFBLEc7RUFLQyxtREFBYztJQUFBOztJQUFBLCtCQUhXQyxxQkFHWDs7SUFBQTs7SUFDWixJQUFNQyxpQkFBaUIsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG9DQUF0QztJQUNBLElBQU1DLG1DQUFtQyxHQUFHSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsbUNBQXhELENBRlksQ0FFaUY7O0lBQzdGLElBQU1DLE9BQU8sR0FBR0osT0FBTyxDQUFDQyxHQUFSLENBQVlHLE9BQTVCO0lBQ0EsSUFBTUMsZUFBZSxHQUFHTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUksZUFBcEMsQ0FKWSxDQUl3Qzs7SUFDcEQsS0FBS0MsR0FBTCxhQUFjUCxpQkFBZCxjQUFtQ00sZUFBbkMsZ0JBQXdERixtQ0FBeEQseUJBQTBHQyxPQUExRztFQUNEOzs7O1dBRUQsa0JBQTZCO01BQUE7O01BQzNCLE9BQU8sSUFBSUcsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtRQUN0QztRQUNBLEtBQUksQ0FBQ1gsS0FBTCxDQUFXLEtBQUksQ0FBQ1EsR0FBaEIsRUFBcUJJLElBQXJCLENBQTBCLFVBQUFDLFFBQVE7VUFBQSxPQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtRQUFBLENBQWxDLEVBQXVERixJQUF2RCxDQUE0RCxVQUFDRyxJQUFELEVBQWU7VUFDekUsSUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCLE9BQU9MLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDQyxLQUFOLENBQWI7VUFDaEIsSUFBTUMsUUFBUSxHQUFHRixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFVBQUNDLElBQUQ7WUFBQSxPQUFlQyxnQkFBQSxDQUFRQyxlQUFSLENBQXdCRixJQUF4QixDQUFmO1VBQUEsQ0FBZixDQUFqQjtVQUNBVixPQUFPLENBQUNPLFFBQUQsQ0FBUDtRQUNELENBSkQ7TUFLRCxDQVBNLENBQVA7SUFRRDs7O1dBRUQsb0JBQVdNLEtBQVgsRUFBMEJDLEdBQTFCLEVBQXlEO01BQUE7O01BQ3ZELE9BQU8sSUFBSWYsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtRQUN0QyxJQUFNSCxHQUFHLGFBQU0sTUFBSSxDQUFDQSxHQUFYLHNCQUEwQmUsS0FBMUIsdUJBQTRDQyxHQUE1QyxNQUFUOztRQUNBLE1BQUksQ0FBQ3hCLEtBQUwsQ0FBV1EsR0FBWCxFQUFnQkksSUFBaEIsQ0FBcUIsVUFBQUMsUUFBUTtVQUFBLE9BQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO1FBQUEsQ0FBN0IsRUFBa0RGLElBQWxELENBQXVELFVBQUNHLElBQUQsRUFBZTtVQUNwRSxJQUFJQSxJQUFJLENBQUNDLEtBQVQsRUFBZ0IsT0FBT0wsTUFBTSxDQUFDSSxJQUFJLENBQUNDLEtBQU4sQ0FBYjtVQUNoQixJQUFJRCxJQUFJLENBQUNHLEtBQUwsQ0FBV08sTUFBWCxLQUFzQixDQUExQixFQUE2QixPQUFPZCxNQUFNLENBQUMsNkJBQUQsQ0FBYjs7VUFDN0IsSUFBTWUsT0FBTyxHQUFHTCxnQkFBQSxDQUFRQyxlQUFSLENBQXdCUCxJQUFJLENBQUNHLEtBQUwsQ0FBVyxDQUFYLENBQXhCLENBQWhCOztVQUNBUixPQUFPLENBQUNnQixPQUFELENBQVA7UUFDRCxDQUxEO01BTUQsQ0FSTSxDQUFQO0lBU0QifQ==