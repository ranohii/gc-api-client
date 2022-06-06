"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OAuth2ClientManager = void 0;

var _googleApis = require("../config/googleApis");

var _googleapis = require("googleapis");

var _inversify = require("../config/inversify.config");

var _types = require("../config/types");

var _inversify2 = require("inversify");

var _credentialsRepository = require("../domain/models/credentials/credentialsRepository");

var _tokenRepository = require("../domain/models/token/tokenRepository");

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var OAuth2ClientManager = (_dec = (0, _inversify2.injectable)(), _dec2 = function _dec2(target, key) {
  return (0, _inversify2.inject)(_types.TYPES.CredentialsRepository)(target, undefined, 0);
}, _dec3 = function _dec3(target, key) {
  return (0, _inversify2.inject)(_types.TYPES.TokenRepository)(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _credentialsRepository.CredentialsRepository === "undefined" ? Object : _credentialsRepository.CredentialsRepository, typeof _tokenRepository.TokenRepository === "undefined" ? Object : _tokenRepository.TokenRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = /*#__PURE__*/function () {
  function OAuth2ClientManager(credentialsRepository, tokenRepository) {
    _classCallCheck(this, OAuth2ClientManager);

    this.credentialsRepository = credentialsRepository;
    this.tokenRepository = tokenRepository;
  }

  _createClass(OAuth2ClientManager, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var credentials, oAuth2Client, token;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.credentialsRepository.read(_googleApis.CREDENTIALS_PATH);

              case 3:
                credentials = _context.sent;
                oAuth2Client = new _googleapis.google.auth.OAuth2(credentials.client_id, credentials.client_secret, credentials.redirect_uris[0]);

                _inversify.container.bind(_types.TYPES.OAuth2Client).toConstantValue(oAuth2Client);

                _context.next = 8;
                return this.tokenRepository.read(_googleApis.TOKEN_PATH);

              case 8:
                token = _context.sent;
                oAuth2Client.setCredentials(token.value);
                _context.next = 17;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);
                _context.next = 17;
                return OAuth2ClientManager.retryInit();

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }], [{
    key: "retryInit",
    value: function () {
      var _retryInit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var accessTokenPromptLauncher, token, oAuth2Client;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                accessTokenPromptLauncher = _inversify.container.get(_types.TYPES.AccessTokenPromptLauncher);
                _context2.next = 3;
                return accessTokenPromptLauncher.query();

              case 3:
                token = _context2.sent;
                _context2.next = 6;
                return accessTokenPromptLauncher.save(token);

              case 6:
                oAuth2Client = _inversify.container.get(_types.TYPES.OAuth2Client);
                oAuth2Client.setCredentials(token.value);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function retryInit() {
        return _retryInit.apply(this, arguments);
      }

      return retryInit;
    }()
  }]);

  return OAuth2ClientManager;
}()) || _class) || _class) || _class) || _class) || _class);
exports.OAuth2ClientManager = OAuth2ClientManager;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPQXV0aDJDbGllbnRNYW5hZ2VyIiwiaW5qZWN0YWJsZSIsImluamVjdCIsIlRZUEVTIiwiQ3JlZGVudGlhbHNSZXBvc2l0b3J5IiwiVG9rZW5SZXBvc2l0b3J5IiwiY3JlZGVudGlhbHNSZXBvc2l0b3J5IiwidG9rZW5SZXBvc2l0b3J5IiwicmVhZCIsIkNSRURFTlRJQUxTX1BBVEgiLCJjcmVkZW50aWFscyIsIm9BdXRoMkNsaWVudCIsImdvb2dsZSIsImF1dGgiLCJPQXV0aDIiLCJjbGllbnRfaWQiLCJjbGllbnRfc2VjcmV0IiwicmVkaXJlY3RfdXJpcyIsImNvbnRhaW5lciIsImJpbmQiLCJPQXV0aDJDbGllbnQiLCJ0b0NvbnN0YW50VmFsdWUiLCJUT0tFTl9QQVRIIiwidG9rZW4iLCJzZXRDcmVkZW50aWFscyIsInZhbHVlIiwiY29uc29sZSIsImVycm9yIiwicmV0cnlJbml0IiwiYWNjZXNzVG9rZW5Qcm9tcHRMYXVuY2hlciIsImdldCIsIkFjY2Vzc1Rva2VuUHJvbXB0TGF1bmNoZXIiLCJxdWVyeSIsInNhdmUiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwbGljYXRpb24vb0F1dGgyQ2xpZW50TWFuYWdlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NSRURFTlRJQUxTX1BBVEgsIFRPS0VOX1BBVEh9IGZyb20gXCJAL2NvbmZpZy9nb29nbGVBcGlzXCI7XG5pbXBvcnQge2dvb2dsZX0gZnJvbSBcImdvb2dsZWFwaXNcIjtcbmltcG9ydCB7Y29udGFpbmVyfSBmcm9tIFwiQC9jb25maWcvaW52ZXJzaWZ5LmNvbmZpZ1wiO1xuaW1wb3J0IHtPQXV0aDJDbGllbnR9IGZyb20gXCJnb29nbGUtYXV0aC1saWJyYXJ5L2J1aWxkL3NyYy9hdXRoL29hdXRoMmNsaWVudFwiO1xuaW1wb3J0IHtUWVBFU30gZnJvbSBcIkAvY29uZmlnL3R5cGVzXCI7XG5pbXBvcnQge2luamVjdCwgaW5qZWN0YWJsZX0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IHtDcmVkZW50aWFsc1JlcG9zaXRvcnl9IGZyb20gXCJAL2RvbWFpbi9tb2RlbHMvY3JlZGVudGlhbHMvY3JlZGVudGlhbHNSZXBvc2l0b3J5XCI7XG5pbXBvcnQge1Rva2VuUmVwb3NpdG9yeX0gZnJvbSBcIkAvZG9tYWluL21vZGVscy90b2tlbi90b2tlblJlcG9zaXRvcnlcIjtcbmltcG9ydCB7QWNjZXNzVG9rZW5Qcm9tcHRMYXVuY2hlcn0gZnJvbSBcIkAvYXBwbGljYXRpb24vYWNjZXNzVG9rZW5Qcm9tcHRMYXVuY2hlclwiO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT0F1dGgyQ2xpZW50TWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoVFlQRVMuQ3JlZGVudGlhbHNSZXBvc2l0b3J5KVxuICAgIHByaXZhdGUgcmVhZG9ubHkgY3JlZGVudGlhbHNSZXBvc2l0b3J5OiBDcmVkZW50aWFsc1JlcG9zaXRvcnksXG4gICAgQGluamVjdChUWVBFUy5Ub2tlblJlcG9zaXRvcnkpXG4gICAgcHJpdmF0ZSByZWFkb25seSB0b2tlblJlcG9zaXRvcnk6IFRva2VuUmVwb3NpdG9yeSxcbiAgKSB7fVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gYXdhaXQgdGhpcy5jcmVkZW50aWFsc1JlcG9zaXRvcnkucmVhZChDUkVERU5USUFMU19QQVRIKVxuICAgICAgY29uc3Qgb0F1dGgyQ2xpZW50ID0gbmV3IGdvb2dsZS5hdXRoLk9BdXRoMihjcmVkZW50aWFscy5jbGllbnRfaWQsIGNyZWRlbnRpYWxzLmNsaWVudF9zZWNyZXQsIGNyZWRlbnRpYWxzLnJlZGlyZWN0X3VyaXNbMF0pO1xuICAgICAgY29udGFpbmVyLmJpbmQ8T0F1dGgyQ2xpZW50PihUWVBFUy5PQXV0aDJDbGllbnQpLnRvQ29uc3RhbnRWYWx1ZShvQXV0aDJDbGllbnQpO1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLnRva2VuUmVwb3NpdG9yeS5yZWFkKFRPS0VOX1BBVEgpXG4gICAgICBvQXV0aDJDbGllbnQuc2V0Q3JlZGVudGlhbHModG9rZW4udmFsdWUpXG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgIGF3YWl0IE9BdXRoMkNsaWVudE1hbmFnZXIucmV0cnlJbml0KClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBhc3luYyByZXRyeUluaXQoKSB7XG4gICAgY29uc3QgYWNjZXNzVG9rZW5Qcm9tcHRMYXVuY2hlciA9IGNvbnRhaW5lci5nZXQ8QWNjZXNzVG9rZW5Qcm9tcHRMYXVuY2hlcj4oVFlQRVMuQWNjZXNzVG9rZW5Qcm9tcHRMYXVuY2hlcilcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGFjY2Vzc1Rva2VuUHJvbXB0TGF1bmNoZXIucXVlcnkoKVxuICAgIGF3YWl0IGFjY2Vzc1Rva2VuUHJvbXB0TGF1bmNoZXIuc2F2ZSh0b2tlbilcbiAgICBjb25zdCBvQXV0aDJDbGllbnQgPSBjb250YWluZXIuZ2V0PE9BdXRoMkNsaWVudD4oVFlQRVMuT0F1dGgyQ2xpZW50KVxuICAgIG9BdXRoMkNsaWVudC5zZXRDcmVkZW50aWFscyh0b2tlbi52YWx1ZSlcbiAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7K0NBTkEsb0o7Ozs7Ozs7Ozs7OztJQVVhQSxtQixXQURaLElBQUFDLHNCQUFBLEc7U0FHSSxJQUFBQyxrQkFBQSxFQUFPQyxZQUFBLENBQU1DLHFCQUFiLEM7O1NBRUEsSUFBQUYsa0JBQUEsRUFBT0MsWUFBQSxDQUFNRSxlQUFiLEM7O0VBSEgsNkJBRW1CQyxxQkFGbkIsRUFJbUJDLGVBSm5CLEVBS0U7SUFBQTs7SUFBQSxLQUhpQkQscUJBR2pCLEdBSGlCQSxxQkFHakI7SUFBQSxLQURpQkMsZUFDakIsR0FEaUJBLGVBQ2pCO0VBQUU7Ozs7OzZFQUVKO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUU4QixLQUFLRCxxQkFBTCxDQUEyQkUsSUFBM0IsQ0FBZ0NDLDRCQUFoQyxDQUY5Qjs7Y0FBQTtnQkFFVUMsV0FGVjtnQkFHVUMsWUFIVixHQUd5QixJQUFJQyxrQkFBQSxDQUFPQyxJQUFQLENBQVlDLE1BQWhCLENBQXVCSixXQUFXLENBQUNLLFNBQW5DLEVBQThDTCxXQUFXLENBQUNNLGFBQTFELEVBQXlFTixXQUFXLENBQUNPLGFBQVosQ0FBMEIsQ0FBMUIsQ0FBekUsQ0FIekI7O2dCQUlJQyxvQkFBQSxDQUFVQyxJQUFWLENBQTZCaEIsWUFBQSxDQUFNaUIsWUFBbkMsRUFBaURDLGVBQWpELENBQWlFVixZQUFqRTs7Z0JBSko7Z0JBQUEsT0FLd0IsS0FBS0osZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEJjLHNCQUExQixDQUx4Qjs7Y0FBQTtnQkFLVUMsS0FMVjtnQkFNSVosWUFBWSxDQUFDYSxjQUFiLENBQTRCRCxLQUFLLENBQUNFLEtBQWxDO2dCQU5KO2dCQUFBOztjQUFBO2dCQUFBO2dCQUFBO2dCQVFJQyxPQUFPLENBQUNDLEtBQVI7Z0JBUko7Z0JBQUEsT0FTVTNCLG1CQUFtQixDQUFDNEIsU0FBcEIsRUFUVjs7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUEsQzs7Ozs7Ozs7Ozs7a0ZBYUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUNRQyx5QkFEUixHQUNvQ1gsb0JBQUEsQ0FBVVksR0FBVixDQUF5QzNCLFlBQUEsQ0FBTTRCLHlCQUEvQyxDQURwQztnQkFBQTtnQkFBQSxPQUVzQkYseUJBQXlCLENBQUNHLEtBQTFCLEVBRnRCOztjQUFBO2dCQUVRVCxLQUZSO2dCQUFBO2dCQUFBLE9BR1FNLHlCQUF5QixDQUFDSSxJQUExQixDQUErQlYsS0FBL0IsQ0FIUjs7Y0FBQTtnQkFJUVosWUFKUixHQUl1Qk8sb0JBQUEsQ0FBVVksR0FBVixDQUE0QjNCLFlBQUEsQ0FBTWlCLFlBQWxDLENBSnZCO2dCQUtFVCxZQUFZLENBQUNhLGNBQWIsQ0FBNEJELEtBQUssQ0FBQ0UsS0FBbEM7O2NBTEY7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBLEMifQ==