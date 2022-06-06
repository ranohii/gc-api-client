"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccessTokenPromptLauncher = void 0;

var _oauth2client = require("google-auth-library/build/src/auth/oauth2client");

var _tokenRepository = require("../domain/models/token/tokenRepository");

var _readline = _interopRequireDefault(require("readline"));

var _inversify = require("inversify");

var _types = require("../config/types");

var _token = require("../domain/models/token/token");

var _googleApis = require("../config/googleApis");

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AccessTokenPromptLauncher = (_dec = (0, _inversify.injectable)(), _dec2 = function _dec2(target, key) {
  return (0, _inversify.inject)(_types.TYPES.OAuth2Client)(target, undefined, 0);
}, _dec3 = function _dec3(target, key) {
  return (0, _inversify.inject)(_types.TYPES.TokenRepository)(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _oauth2client.OAuth2Client === "undefined" ? Object : _oauth2client.OAuth2Client, typeof _tokenRepository.TokenRepository === "undefined" ? Object : _tokenRepository.TokenRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = /*#__PURE__*/function () {
  function AccessTokenPromptLauncher(oAuth2Client, tokenFileRepository) {
    _classCallCheck(this, AccessTokenPromptLauncher);

    this.oAuth2Client = oAuth2Client;
    this.tokenFileRepository = tokenFileRepository;

    _defineProperty(this, "readlineInterface", _readline["default"].createInterface({
      input: process.stdin,
      output: process.stdout
    }));
  }
  /**
   * query new token after prompting for user authorization
   */


  _createClass(AccessTokenPromptLauncher, [{
    key: "query",
    value: function () {
      var _query = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  var authUrl = _this.oAuth2Client.generateAuthUrl({
                    access_type: 'offline',
                    scope: _googleApis.SCOPES
                  });

                  console.log('Authorize this app by visiting this url:', authUrl);

                  _this.readlineInterface.question('Enter the code from that page here: ', function (code) {
                    _this.readlineInterface.close();

                    _this.oAuth2Client.getToken(code, function (err, token) {
                      if (err) return reject(err);
                      if (!token) return reject("Token is not defined.");

                      _this.oAuth2Client.setCredentials(token);

                      resolve(new _token.Token(token));
                    });
                  });
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function query() {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "save",
    value: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(token) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.tokenFileRepository.write(_googleApis.TOKEN_PATH, token);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function save(_x) {
        return _save.apply(this, arguments);
      }

      return save;
    }()
  }]);

  return AccessTokenPromptLauncher;
}()) || _class) || _class) || _class) || _class) || _class);
exports.AccessTokenPromptLauncher = AccessTokenPromptLauncher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBY2Nlc3NUb2tlblByb21wdExhdW5jaGVyIiwiaW5qZWN0YWJsZSIsImluamVjdCIsIlRZUEVTIiwiT0F1dGgyQ2xpZW50IiwiVG9rZW5SZXBvc2l0b3J5Iiwib0F1dGgyQ2xpZW50IiwidG9rZW5GaWxlUmVwb3NpdG9yeSIsInJlYWRsaW5lIiwiY3JlYXRlSW50ZXJmYWNlIiwiaW5wdXQiLCJwcm9jZXNzIiwic3RkaW4iLCJvdXRwdXQiLCJzdGRvdXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF1dGhVcmwiLCJnZW5lcmF0ZUF1dGhVcmwiLCJhY2Nlc3NfdHlwZSIsInNjb3BlIiwiU0NPUEVTIiwiY29uc29sZSIsImxvZyIsInJlYWRsaW5lSW50ZXJmYWNlIiwicXVlc3Rpb24iLCJjb2RlIiwiY2xvc2UiLCJnZXRUb2tlbiIsImVyciIsInRva2VuIiwic2V0Q3JlZGVudGlhbHMiLCJUb2tlbiIsIndyaXRlIiwiVE9LRU5fUEFUSCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHBsaWNhdGlvbi9hY2Nlc3NUb2tlblByb21wdExhdW5jaGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T0F1dGgyQ2xpZW50fSBmcm9tIFwiZ29vZ2xlLWF1dGgtbGlicmFyeS9idWlsZC9zcmMvYXV0aC9vYXV0aDJjbGllbnRcIjtcbmltcG9ydCB7VG9rZW5SZXBvc2l0b3J5fSBmcm9tIFwiQC9kb21haW4vbW9kZWxzL3Rva2VuL3Rva2VuUmVwb3NpdG9yeVwiO1xuaW1wb3J0IHJlYWRsaW5lIGZyb20gXCJyZWFkbGluZVwiO1xuaW1wb3J0IHtpbmplY3QsIGluamVjdGFibGV9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCB7VFlQRVN9IGZyb20gXCJAL2NvbmZpZy90eXBlc1wiO1xuaW1wb3J0IHtUb2tlbn0gZnJvbSBcIkAvZG9tYWluL21vZGVscy90b2tlbi90b2tlblwiO1xuaW1wb3J0IHtTQ09QRVMsIFRPS0VOX1BBVEh9IGZyb20gXCJAL2NvbmZpZy9nb29nbGVBcGlzXCI7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlblByb21wdExhdW5jaGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSByZWFkbGluZUludGVyZmFjZTogcmVhZGxpbmUuSW50ZXJmYWNlID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcbiAgICBpbnB1dDogcHJvY2Vzcy5zdGRpbixcbiAgICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0LFxuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KFRZUEVTLk9BdXRoMkNsaWVudClcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9BdXRoMkNsaWVudDogT0F1dGgyQ2xpZW50LFxuICAgIEBpbmplY3QoVFlQRVMuVG9rZW5SZXBvc2l0b3J5KVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG9rZW5GaWxlUmVwb3NpdG9yeTogVG9rZW5SZXBvc2l0b3J5XG4gICkge31cblxuICAvKipcbiAgICogcXVlcnkgbmV3IHRva2VuIGFmdGVyIHByb21wdGluZyBmb3IgdXNlciBhdXRob3JpemF0aW9uXG4gICAqL1xuICBhc3luYyBxdWVyeSgpOiBQcm9taXNlPFRva2VuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBhdXRoVXJsID0gdGhpcy5vQXV0aDJDbGllbnQuZ2VuZXJhdGVBdXRoVXJsKHtcbiAgICAgICAgYWNjZXNzX3R5cGU6ICdvZmZsaW5lJyxcbiAgICAgICAgc2NvcGU6IFNDT1BFUyxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ0F1dGhvcml6ZSB0aGlzIGFwcCBieSB2aXNpdGluZyB0aGlzIHVybDonLCBhdXRoVXJsKTtcbiAgICAgIHRoaXMucmVhZGxpbmVJbnRlcmZhY2UucXVlc3Rpb24oJ0VudGVyIHRoZSBjb2RlIGZyb20gdGhhdCBwYWdlIGhlcmU6ICcsIChjb2RlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5yZWFkbGluZUludGVyZmFjZS5jbG9zZSgpO1xuICAgICAgICB0aGlzLm9BdXRoMkNsaWVudC5nZXRUb2tlbihjb2RlLCAoZXJyLCB0b2tlbikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICBpZiAoIXRva2VuKSByZXR1cm4gcmVqZWN0KFwiVG9rZW4gaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICAgIHRoaXMub0F1dGgyQ2xpZW50LnNldENyZWRlbnRpYWxzKHRva2VuKTtcbiAgICAgICAgICByZXNvbHZlKG5ldyBUb2tlbih0b2tlbikpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIHNhdmUodG9rZW46IFRva2VuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy50b2tlbkZpbGVSZXBvc2l0b3J5LndyaXRlKFRPS0VOX1BBVEgsdG9rZW4pXG4gIH1cbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7K0NBTEEsb0o7Ozs7Ozs7Ozs7Ozs7O0lBUWFBLHlCLFdBRFosSUFBQUMscUJBQUEsRztTQVFJLElBQUFDLGlCQUFBLEVBQU9DLFlBQUEsQ0FBTUMsWUFBYixDOztTQUVBLElBQUFGLGlCQUFBLEVBQU9DLFlBQUEsQ0FBTUUsZUFBYixDOztFQUhILG1DQUVtQkMsWUFGbkIsRUFJbUJDLG1CQUpuQixFQUtFO0lBQUE7O0lBQUEsS0FIaUJELFlBR2pCLEdBSGlCQSxZQUdqQjtJQUFBLEtBRGlCQyxtQkFDakIsR0FEaUJBLG1CQUNqQjs7SUFBQSwyQ0FWdURDLG9CQUFBLENBQVNDLGVBQVQsQ0FBeUI7TUFDaEZDLEtBQUssRUFBRUMsT0FBTyxDQUFDQyxLQURpRTtNQUVoRkMsTUFBTSxFQUFFRixPQUFPLENBQUNHO0lBRmdFLENBQXpCLENBVXZEO0VBQUU7RUFFSjtBQUNGO0FBQ0E7Ozs7Ozs4RUFDRTtRQUFBOztRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBLGlDQUNTLElBQUlDLE9BQUosQ0FBYSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7a0JBQ3ZDLElBQU1DLE9BQU8sR0FBRyxLQUFJLENBQUNaLFlBQUwsQ0FBa0JhLGVBQWxCLENBQWtDO29CQUNoREMsV0FBVyxFQUFFLFNBRG1DO29CQUVoREMsS0FBSyxFQUFFQztrQkFGeUMsQ0FBbEMsQ0FBaEI7O2tCQUlBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQ0FBWixFQUF3RE4sT0FBeEQ7O2tCQUNBLEtBQUksQ0FBQ08saUJBQUwsQ0FBdUJDLFFBQXZCLENBQWdDLHNDQUFoQyxFQUF3RSxVQUFDQyxJQUFELEVBQWU7b0JBQ3JGLEtBQUksQ0FBQ0YsaUJBQUwsQ0FBdUJHLEtBQXZCOztvQkFDQSxLQUFJLENBQUN0QixZQUFMLENBQWtCdUIsUUFBbEIsQ0FBMkJGLElBQTNCLEVBQWlDLFVBQUNHLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtzQkFDL0MsSUFBSUQsR0FBSixFQUFTLE9BQU9iLE1BQU0sQ0FBQ2EsR0FBRCxDQUFiO3NCQUNULElBQUksQ0FBQ0MsS0FBTCxFQUFZLE9BQU9kLE1BQU0sQ0FBQyx1QkFBRCxDQUFiOztzQkFDWixLQUFJLENBQUNYLFlBQUwsQ0FBa0IwQixjQUFsQixDQUFpQ0QsS0FBakM7O3NCQUNBZixPQUFPLENBQUMsSUFBSWlCLFlBQUosQ0FBVUYsS0FBVixDQUFELENBQVA7b0JBQ0QsQ0FMRDtrQkFNRCxDQVJEO2dCQVNELENBZk0sQ0FEVDs7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUEsQzs7Ozs7Ozs7Ozs7NkVBbUJBLGtCQUFXQSxLQUFYO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUEsT0FDUSxLQUFLeEIsbUJBQUwsQ0FBeUIyQixLQUF6QixDQUErQkMsc0JBQS9CLEVBQTBDSixLQUExQyxDQURSOztjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDIn0=