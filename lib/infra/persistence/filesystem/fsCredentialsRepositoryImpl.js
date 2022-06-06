"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FsCredentialsRepositoryImpl = void 0;

var _credentials = require("../../../domain/models/credentials/credentials");

var _fs = _interopRequireDefault(require("fs"));

var _inversify = require("inversify");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FsCredentialsRepositoryImpl = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function () {
  function FsCredentialsRepositoryImpl() {
    _classCallCheck(this, FsCredentialsRepositoryImpl);

    _defineProperty(this, "filesystem", _fs["default"]);
  }

  _createClass(FsCredentialsRepositoryImpl, [{
    key: "read",
    value: function read(path) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.filesystem.readFile(path, function (err, credentials) {
          if (err) return reject(err);
          var result = JSON.parse(credentials);
          resolve(_credentials.Credentials.fromFile(result));
        });
      });
    }
  }]);

  return FsCredentialsRepositoryImpl;
}()) || _class);
exports.FsCredentialsRepositoryImpl = FsCredentialsRepositoryImpl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGc0NyZWRlbnRpYWxzUmVwb3NpdG9yeUltcGwiLCJpbmplY3RhYmxlIiwiZnMiLCJwYXRoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmaWxlc3lzdGVtIiwicmVhZEZpbGUiLCJlcnIiLCJjcmVkZW50aWFscyIsInJlc3VsdCIsIkpTT04iLCJwYXJzZSIsIkNyZWRlbnRpYWxzIiwiZnJvbUZpbGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5mcmEvcGVyc2lzdGVuY2UvZmlsZXN5c3RlbS9mc0NyZWRlbnRpYWxzUmVwb3NpdG9yeUltcGwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDcmVkZW50aWFsc1JlcG9zaXRvcnl9IGZyb20gXCJAL2RvbWFpbi9tb2RlbHMvY3JlZGVudGlhbHMvY3JlZGVudGlhbHNSZXBvc2l0b3J5XCI7XG5pbXBvcnQge0NyZWRlbnRpYWxzfSBmcm9tIFwiQC9kb21haW4vbW9kZWxzL2NyZWRlbnRpYWxzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQge2luamVjdGFibGV9IGZyb20gXCJpbnZlcnNpZnlcIjtcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZzQ3JlZGVudGlhbHNSZXBvc2l0b3J5SW1wbCBpbXBsZW1lbnRzIENyZWRlbnRpYWxzUmVwb3NpdG9yeSB7XG4gIHByaXZhdGUgZmlsZXN5c3RlbSA9IGZzXG5cbiAgcmVhZChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPENyZWRlbnRpYWxzPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZmlsZXN5c3RlbS5yZWFkRmlsZShwYXRoLCAoZXJyICwgY3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IEpTT04ucGFyc2UoY3JlZGVudGlhbHMgYXMgdW5rbm93biBhcyBzdHJpbmcpXG4gICAgICAgIHJlc29sdmUoQ3JlZGVudGlhbHMuZnJvbUZpbGUocmVzdWx0KSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUdhQSwyQixXQURaLElBQUFDLHFCQUFBLEc7Ozs7d0NBRXNCQyxjOzs7OztXQUVyQixjQUFLQyxJQUFMLEVBQXlDO01BQUE7O01BQ3ZDLE9BQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtRQUN0QyxLQUFJLENBQUNDLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCTCxJQUF6QixFQUErQixVQUFDTSxHQUFELEVBQU9DLFdBQVAsRUFBdUI7VUFDcEQsSUFBSUQsR0FBSixFQUFTLE9BQU9ILE1BQU0sQ0FBQ0csR0FBRCxDQUFiO1VBQ1QsSUFBTUUsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsV0FBWCxDQUFmO1VBQ0FMLE9BQU8sQ0FBQ1Msd0JBQUEsQ0FBWUMsUUFBWixDQUFxQkosTUFBckIsQ0FBRCxDQUFQO1FBQ0QsQ0FKRDtNQUtELENBTk0sQ0FBUDtJQU9EIn0=