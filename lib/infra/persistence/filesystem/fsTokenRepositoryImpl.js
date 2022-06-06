"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FsTokenRepositoryImpl = void 0;

var _token = require("../../../domain/models/token/token");

var fs = _interopRequireWildcard(require("fs"));

var _inversify = require("inversify");

var _dec, _class;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FsTokenRepositoryImpl = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function () {
  function FsTokenRepositoryImpl() {
    _classCallCheck(this, FsTokenRepositoryImpl);

    _defineProperty(this, "filesystem", fs);
  }

  _createClass(FsTokenRepositoryImpl, [{
    key: "read",
    value: function read(path) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.filesystem.readFile(path, function (err, token) {
          if (err) return reject(err);
          var result = JSON.parse(token);
          resolve(new _token.Token(result));
        });
      });
    }
  }, {
    key: "write",
    value: function write(path, token) {
      var _this2 = this;

      return new Promise(function (resolve) {
        // Store the token to disk for later program executions
        _this2.filesystem.writeFile(path, JSON.stringify(token.value), function (err) {
          if (err) return console.error(err);
          console.log('Token stored to', path);
          resolve();
        });
      });
    }
  }]);

  return FsTokenRepositoryImpl;
}()) || _class);
exports.FsTokenRepositoryImpl = FsTokenRepositoryImpl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGc1Rva2VuUmVwb3NpdG9yeUltcGwiLCJpbmplY3RhYmxlIiwiZnMiLCJwYXRoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmaWxlc3lzdGVtIiwicmVhZEZpbGUiLCJlcnIiLCJ0b2tlbiIsInJlc3VsdCIsIkpTT04iLCJwYXJzZSIsIlRva2VuIiwid3JpdGVGaWxlIiwic3RyaW5naWZ5IiwidmFsdWUiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5mcmEvcGVyc2lzdGVuY2UvZmlsZXN5c3RlbS9mc1Rva2VuUmVwb3NpdG9yeUltcGwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUb2tlblJlcG9zaXRvcnl9IGZyb20gXCJAL2RvbWFpbi9tb2RlbHMvdG9rZW4vdG9rZW5SZXBvc2l0b3J5XCI7XG5pbXBvcnQge1Rva2VufSBmcm9tIFwiQC9kb21haW4vbW9kZWxzL3Rva2VuL3Rva2VuXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCB7aW5qZWN0YWJsZX0gZnJvbSBcImludmVyc2lmeVwiO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRnNUb2tlblJlcG9zaXRvcnlJbXBsIGltcGxlbWVudHMgVG9rZW5SZXBvc2l0b3J5IHtcbiAgcHJpdmF0ZSBmaWxlc3lzdGVtID0gZnNcblxuICByZWFkKHBhdGg6IHN0cmluZyk6IFByb21pc2U8VG9rZW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5maWxlc3lzdGVtLnJlYWRGaWxlKHBhdGgsIChlcnIgLCB0b2tlbikgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gSlNPTi5wYXJzZSh0b2tlbiBhcyB1bmtub3duIGFzIHN0cmluZylcbiAgICAgICAgcmVzb2x2ZShuZXcgVG9rZW4ocmVzdWx0KSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHdyaXRlKHBhdGg6IHN0cmluZywgdG9rZW46IFRva2VuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCByZXNvbHZlID0+IHtcbiAgICAgIC8vIFN0b3JlIHRoZSB0b2tlbiB0byBkaXNrIGZvciBsYXRlciBwcm9ncmFtIGV4ZWN1dGlvbnNcbiAgICAgIHRoaXMuZmlsZXN5c3RlbS53cml0ZUZpbGUocGF0aCwgSlNPTi5zdHJpbmdpZnkodG9rZW4udmFsdWUpLCAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIHN0b3JlZCB0bycsIHBhdGgpO1xuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBR2FBLHFCLFdBRFosSUFBQUMscUJBQUEsRzs7Ozt3Q0FFc0JDLEU7Ozs7O1dBRXJCLGNBQUtDLElBQUwsRUFBbUM7TUFBQTs7TUFDakMsT0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO1FBQ3RDLEtBQUksQ0FBQ0MsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUJMLElBQXpCLEVBQStCLFVBQUNNLEdBQUQsRUFBT0MsS0FBUCxFQUFpQjtVQUM5QyxJQUFJRCxHQUFKLEVBQVMsT0FBT0gsTUFBTSxDQUFDRyxHQUFELENBQWI7VUFDVCxJQUFNRSxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxLQUFYLENBQWY7VUFDQUwsT0FBTyxDQUFDLElBQUlTLFlBQUosQ0FBVUgsTUFBVixDQUFELENBQVA7UUFDRCxDQUpEO01BS0QsQ0FOTSxDQUFQO0lBT0Q7OztXQUVELGVBQU1SLElBQU4sRUFBb0JPLEtBQXBCLEVBQWlEO01BQUE7O01BQy9DLE9BQU8sSUFBSU4sT0FBSixDQUFhLFVBQUFDLE9BQU8sRUFBSTtRQUM3QjtRQUNBLE1BQUksQ0FBQ0UsVUFBTCxDQUFnQlEsU0FBaEIsQ0FBMEJaLElBQTFCLEVBQWdDUyxJQUFJLENBQUNJLFNBQUwsQ0FBZU4sS0FBSyxDQUFDTyxLQUFyQixDQUFoQyxFQUE2RCxVQUFDUixHQUFELEVBQWM7VUFDekUsSUFBSUEsR0FBSixFQUFTLE9BQU9TLE9BQU8sQ0FBQ0MsS0FBUixDQUFjVixHQUFkLENBQVA7VUFDVFMsT0FBTyxDQUFDRSxHQUFSLENBQVksaUJBQVosRUFBK0JqQixJQUEvQjtVQUNBRSxPQUFPO1FBQ1IsQ0FKRDtNQUtELENBUE0sQ0FBUDtJQVFEIn0=