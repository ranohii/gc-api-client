"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleApisCalendarPrivateEventRepositoryImpl = void 0;

var _inversify = require("inversify");

var _types = require("../../../config/types");

var _oauth2client = require("google-auth-library/build/src/auth/oauth2client");

var _googleapis = require("googleapis");

var _privateEvent = require("../../../domain/models/calendarEvent/privateEvent");

var _dec, _dec2, _dec3, _dec4, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var GoogleApisCalendarPrivateEventRepositoryImpl = (_dec = (0, _inversify.injectable)(), _dec2 = function _dec2(target, key) {
  return (0, _inversify.inject)(_types.TYPES.OAuth2Client)(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _oauth2client.OAuth2Client === "undefined" ? Object : _oauth2client.OAuth2Client]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = /*#__PURE__*/function () {
  function GoogleApisCalendarPrivateEventRepositoryImpl(oAuth2Client) {
    _classCallCheck(this, GoogleApisCalendarPrivateEventRepositoryImpl);

    this.oAuth2Client = oAuth2Client;
  } // NOTE: This method has not been used yet.


  _createClass(GoogleApisCalendarPrivateEventRepositoryImpl, [{
    key: "getList",
    value: function getList(maxResults) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var calendar = _googleapis.google.calendar({
          version: 'v3',
          auth: _this.oAuth2Client
        });

        calendar.events.list({
          calendarId: 'primary',
          timeMin: new Date().toISOString(),
          maxResults: maxResults,
          singleEvents: true,
          orderBy: 'startTime'
        }, function (err, res) {
          if (err) return reject('The API returned an error: ' + err);
          var events = res.data.items;

          if (events.length) {
            console.log('Upcoming 10 events:');
            events.map(function (event) {
              var start = event.start.dateTime;
              console.log("".concat(start, " - ").concat(event.summary));
              console.log({
                event: event
              });
            });
          } else {
            console.log('No upcoming events found.');
          }

          resolve();
        });
      });
    }
  }, {
    key: "findListByDate",
    value: function findListByDate(start, end) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var calendar = _googleapis.google.calendar({
          version: 'v3',
          auth: _this2.oAuth2Client
        });

        calendar.events.list({
          calendarId: 'primary',
          timeMin: start + "+09:00",
          timeMax: end + "+09:00",
          singleEvents: true,
          orderBy: 'startTime'
        }, function (err, res) {
          if (err) return reject('The API returned an error: ' + err);
          var events = res.data.items;
          if (events.length === 0) return reject('No upcoming events found.');
          var results = events.map(function (event) {
            return _privateEvent.PrivateEvent.fromDefaultEvent(event);
          });
          resolve(results);
        });
      });
    }
  }]);

  return GoogleApisCalendarPrivateEventRepositoryImpl;
}()) || _class) || _class) || _class) || _class);
exports.GoogleApisCalendarPrivateEventRepositoryImpl = GoogleApisCalendarPrivateEventRepositoryImpl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJHb29nbGVBcGlzQ2FsZW5kYXJQcml2YXRlRXZlbnRSZXBvc2l0b3J5SW1wbCIsImluamVjdGFibGUiLCJpbmplY3QiLCJUWVBFUyIsIk9BdXRoMkNsaWVudCIsIm9BdXRoMkNsaWVudCIsIm1heFJlc3VsdHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNhbGVuZGFyIiwiZ29vZ2xlIiwidmVyc2lvbiIsImF1dGgiLCJldmVudHMiLCJsaXN0IiwiY2FsZW5kYXJJZCIsInRpbWVNaW4iLCJEYXRlIiwidG9JU09TdHJpbmciLCJzaW5nbGVFdmVudHMiLCJvcmRlckJ5IiwiZXJyIiwicmVzIiwiZGF0YSIsIml0ZW1zIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImV2ZW50Iiwic3RhcnQiLCJkYXRlVGltZSIsInN1bW1hcnkiLCJlbmQiLCJ0aW1lTWF4IiwicmVzdWx0cyIsIlByaXZhdGVFdmVudCIsImZyb21EZWZhdWx0RXZlbnQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5mcmEvcGVyc2lzdGVuY2UvZ29vZ2xlQXBpcy9nb29nbGVBcGlzQ2FsZW5kYXJQcml2YXRlRXZlbnRSZXBvc2l0b3J5SW1wbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ByaXZhdGVFdmVudFJlcG9zaXRvcnl9IGZyb20gXCJAL2RvbWFpbi9tb2RlbHMvY2FsZW5kYXJFdmVudC9wcml2YXRlRXZlbnRSZXBvc2l0b3J5XCI7XG5pbXBvcnQge2luamVjdCwgaW5qZWN0YWJsZX0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IHtUWVBFU30gZnJvbSBcIkAvY29uZmlnL3R5cGVzXCI7XG5pbXBvcnQge09BdXRoMkNsaWVudH0gZnJvbSBcImdvb2dsZS1hdXRoLWxpYnJhcnkvYnVpbGQvc3JjL2F1dGgvb2F1dGgyY2xpZW50XCI7XG5pbXBvcnQge2dvb2dsZX0gZnJvbSBcImdvb2dsZWFwaXNcIjtcbmltcG9ydCB7RGVmYXVsdEV2ZW50fSBmcm9tIFwiQC9kb21haW4vbW9kZWxzL2NhbGVuZGFyRXZlbnQvZGVmYXVsdEV2ZW50XCI7XG5pbXBvcnQge1ByaXZhdGVFdmVudH0gZnJvbSBcIkAvZG9tYWluL21vZGVscy9jYWxlbmRhckV2ZW50L3ByaXZhdGVFdmVudFwiO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlQXBpc0NhbGVuZGFyUHJpdmF0ZUV2ZW50UmVwb3NpdG9yeUltcGwgaW1wbGVtZW50cyBQcml2YXRlRXZlbnRSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdChUWVBFUy5PQXV0aDJDbGllbnQpXG4gICAgcHJpdmF0ZSByZWFkb25seSBvQXV0aDJDbGllbnQ6IE9BdXRoMkNsaWVudCxcbiAgKSB7fVxuXG4gIC8vIE5PVEU6IFRoaXMgbWV0aG9kIGhhcyBub3QgYmVlbiB1c2VkIHlldC5cbiAgZ2V0TGlzdChtYXhSZXN1bHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgY2FsZW5kYXIgPSBnb29nbGUuY2FsZW5kYXIoe3ZlcnNpb246ICd2MycsIGF1dGg6IHRoaXMub0F1dGgyQ2xpZW50fSk7XG4gICAgICBjYWxlbmRhci5ldmVudHMubGlzdCh7XG4gICAgICAgIGNhbGVuZGFySWQ6ICdwcmltYXJ5JyxcbiAgICAgICAgdGltZU1pbjogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIG1heFJlc3VsdHM6IG1heFJlc3VsdHMsXG4gICAgICAgIHNpbmdsZUV2ZW50czogdHJ1ZSxcbiAgICAgICAgb3JkZXJCeTogJ3N0YXJ0VGltZScsXG4gICAgICB9LCAoZXJyOiBhbnksIHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoJ1RoZSBBUEkgcmV0dXJuZWQgYW4gZXJyb3I6ICcgKyBlcnIpO1xuICAgICAgICBjb25zdCBldmVudHMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgaWYgKGV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnVXBjb21pbmcgMTAgZXZlbnRzOicpO1xuICAgICAgICAgIGV2ZW50cy5tYXAoKGV2ZW50OiBEZWZhdWx0RXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gZXZlbnQuc3RhcnQuZGF0ZVRpbWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtzdGFydH0gLSAke2V2ZW50LnN1bW1hcnl9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7ZXZlbnR9KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdObyB1cGNvbWluZyBldmVudHMgZm91bmQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgZmluZExpc3RCeURhdGUoc3RhcnQ6IHN0cmluZywgZW5kOiBzdHJpbmcpOiBQcm9taXNlPFByaXZhdGVFdmVudFtdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBjYWxlbmRhciA9IGdvb2dsZS5jYWxlbmRhcih7dmVyc2lvbjogJ3YzJywgYXV0aDogdGhpcy5vQXV0aDJDbGllbnR9KTtcbiAgICAgIGNhbGVuZGFyLmV2ZW50cy5saXN0KHtcbiAgICAgICAgY2FsZW5kYXJJZDogJ3ByaW1hcnknLFxuICAgICAgICB0aW1lTWluOiBzdGFydCArIFwiKzA5OjAwXCIsXG4gICAgICAgIHRpbWVNYXg6IGVuZCArIFwiKzA5OjAwXCIsXG4gICAgICAgIHNpbmdsZUV2ZW50czogdHJ1ZSxcbiAgICAgICAgb3JkZXJCeTogJ3N0YXJ0VGltZScsXG4gICAgICB9LCAoZXJyOiBhbnksIHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoJ1RoZSBBUEkgcmV0dXJuZWQgYW4gZXJyb3I6ICcgKyBlcnIpO1xuICAgICAgICBjb25zdCBldmVudHMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgaWYgKGV2ZW50cy5sZW5ndGggPT09IDApIHJldHVybiByZWplY3QoJ05vIHVwY29taW5nIGV2ZW50cyBmb3VuZC4nKTtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGV2ZW50cy5tYXAoKGV2ZW50OiBEZWZhdWx0RXZlbnQpID0+IFByaXZhdGVFdmVudC5mcm9tRGVmYXVsdEV2ZW50KGV2ZW50KSk7XG4gICAgICAgIHJlc29sdmUocmVzdWx0cylcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztJQUdhQSw0QyxXQURaLElBQUFDLHFCQUFBLEc7U0FHSSxJQUFBQyxpQkFBQSxFQUFPQyxZQUFBLENBQU1DLFlBQWIsQzs7RUFESCxzREFFbUJDLFlBRm5CLEVBR0U7SUFBQTs7SUFBQSxLQURpQkEsWUFDakIsR0FEaUJBLFlBQ2pCO0VBQUUsQyxDQUVKOzs7OztXQUNBLGlCQUFRQyxVQUFSLEVBQTBDO01BQUE7O01BQ3hDLE9BQU8sSUFBSUMsT0FBSixDQUFhLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtRQUN2QyxJQUFNQyxRQUFRLEdBQUdDLGtCQUFBLENBQU9ELFFBQVAsQ0FBZ0I7VUFBQ0UsT0FBTyxFQUFFLElBQVY7VUFBZ0JDLElBQUksRUFBRSxLQUFJLENBQUNSO1FBQTNCLENBQWhCLENBQWpCOztRQUNBSyxRQUFRLENBQUNJLE1BQVQsQ0FBZ0JDLElBQWhCLENBQXFCO1VBQ25CQyxVQUFVLEVBQUUsU0FETztVQUVuQkMsT0FBTyxFQUFHLElBQUlDLElBQUosRUFBRCxDQUFhQyxXQUFiLEVBRlU7VUFHbkJiLFVBQVUsRUFBRUEsVUFITztVQUluQmMsWUFBWSxFQUFFLElBSks7VUFLbkJDLE9BQU8sRUFBRTtRQUxVLENBQXJCLEVBTUcsVUFBQ0MsR0FBRCxFQUFXQyxHQUFYLEVBQXdCO1VBQ3pCLElBQUlELEdBQUosRUFBUyxPQUFPYixNQUFNLENBQUMsZ0NBQWdDYSxHQUFqQyxDQUFiO1VBQ1QsSUFBTVIsTUFBTSxHQUFHUyxHQUFHLENBQUNDLElBQUosQ0FBU0MsS0FBeEI7O1VBQ0EsSUFBSVgsTUFBTSxDQUFDWSxNQUFYLEVBQW1CO1lBQ2pCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtZQUNBZCxNQUFNLENBQUNlLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQXlCO2NBQ2xDLElBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFFBQTFCO2NBQ0FMLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRyxLQUFmLGdCQUEwQkQsS0FBSyxDQUFDRyxPQUFoQztjQUNBTixPQUFPLENBQUNDLEdBQVIsQ0FBWTtnQkFBQ0UsS0FBSyxFQUFMQTtjQUFELENBQVo7WUFDRCxDQUpEO1VBS0QsQ0FQRCxNQU9PO1lBQ0xILE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaO1VBQ0Q7O1VBQ0RwQixPQUFPO1FBQ1IsQ0FwQkQ7TUFxQkQsQ0F2Qk0sQ0FBUDtJQXdCRDs7O1dBRUQsd0JBQWV1QixLQUFmLEVBQThCRyxHQUE5QixFQUFvRTtNQUFBOztNQUNsRSxPQUFPLElBQUkzQixPQUFKLENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO1FBQ3ZDLElBQU1DLFFBQVEsR0FBR0Msa0JBQUEsQ0FBT0QsUUFBUCxDQUFnQjtVQUFDRSxPQUFPLEVBQUUsSUFBVjtVQUFnQkMsSUFBSSxFQUFFLE1BQUksQ0FBQ1I7UUFBM0IsQ0FBaEIsQ0FBakI7O1FBQ0FLLFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQkMsSUFBaEIsQ0FBcUI7VUFDbkJDLFVBQVUsRUFBRSxTQURPO1VBRW5CQyxPQUFPLEVBQUVjLEtBQUssR0FBRyxRQUZFO1VBR25CSSxPQUFPLEVBQUVELEdBQUcsR0FBRyxRQUhJO1VBSW5CZCxZQUFZLEVBQUUsSUFKSztVQUtuQkMsT0FBTyxFQUFFO1FBTFUsQ0FBckIsRUFNRyxVQUFDQyxHQUFELEVBQVdDLEdBQVgsRUFBd0I7VUFDekIsSUFBSUQsR0FBSixFQUFTLE9BQU9iLE1BQU0sQ0FBQyxnQ0FBZ0NhLEdBQWpDLENBQWI7VUFDVCxJQUFNUixNQUFNLEdBQUdTLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxLQUF4QjtVQUNBLElBQUlYLE1BQU0sQ0FBQ1ksTUFBUCxLQUFrQixDQUF0QixFQUF5QixPQUFPakIsTUFBTSxDQUFDLDJCQUFELENBQWI7VUFDekIsSUFBTTJCLE9BQU8sR0FBR3RCLE1BQU0sQ0FBQ2UsR0FBUCxDQUFXLFVBQUNDLEtBQUQ7WUFBQSxPQUF5Qk8sMEJBQUEsQ0FBYUMsZ0JBQWIsQ0FBOEJSLEtBQTlCLENBQXpCO1VBQUEsQ0FBWCxDQUFoQjtVQUNBdEIsT0FBTyxDQUFDNEIsT0FBRCxDQUFQO1FBQ0QsQ0FaRDtNQWFELENBZk0sQ0FBUDtJQWdCRCJ9