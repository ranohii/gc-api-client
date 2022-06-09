"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("./config/types");

var _inversify = require("./config/inversify.config");

var _DateUtils = require("./shared/util/DateUtils");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GoogleCalendarApiClient = /*#__PURE__*/function () {
  function GoogleCalendarApiClient() {
    _classCallCheck(this, GoogleCalendarApiClient);

    _defineProperty(this, "dayOffChecker", null);
  }

  _createClass(GoogleCalendarApiClient, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var oAuth2ClientManager;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                oAuth2ClientManager = _inversify.container.get(_types.TYPES.OAuth2ClientManager);
                _context.next = 3;
                return oAuth2ClientManager.init();

              case 3:
                // NOTE: Keep this container.get order because the dependency of dayOffChecker cannot be resolved until oAuth2Client is initialized.
                this.dayOffChecker = _inversify.container.get(_types.TYPES.DayOffChecker);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "isDayOff",
    value: function () {
      var _isDayOff = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var date,
            _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                date = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : _DateUtils.DateUtils.today();

                if (this.dayOffChecker) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 4;
                return this.init();

              case 4:
                _context2.next = 6;
                return this.isDayOff(date);

              case 6:
                return _context2.abrupt("return", _context2.sent);

              case 7:
                _context2.next = 9;
                return this.dayOffChecker.execute(date);

              case 9:
                return _context2.abrupt("return", _context2.sent);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function isDayOff() {
        return _isDayOff.apply(this, arguments);
      }

      return isDayOff;
    }()
  }]);

  return GoogleCalendarApiClient;
}();

var gcApiClient = new GoogleCalendarApiClient();
var _default = gcApiClient;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJHb29nbGVDYWxlbmRhckFwaUNsaWVudCIsIm9BdXRoMkNsaWVudE1hbmFnZXIiLCJjb250YWluZXIiLCJnZXQiLCJUWVBFUyIsIk9BdXRoMkNsaWVudE1hbmFnZXIiLCJpbml0IiwiZGF5T2ZmQ2hlY2tlciIsIkRheU9mZkNoZWNrZXIiLCJkYXRlIiwiRGF0ZVV0aWxzIiwidG9kYXkiLCJpc0RheU9mZiIsImV4ZWN1dGUiLCJnY0FwaUNsaWVudCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgWXVkYWkgSGlyYW5vLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7VFlQRVN9IGZyb20gXCJAL2NvbmZpZy90eXBlc1wiO1xuaW1wb3J0IHtjb250YWluZXJ9IGZyb20gXCJAL2NvbmZpZy9pbnZlcnNpZnkuY29uZmlnXCI7XG5pbXBvcnQge09BdXRoMkNsaWVudE1hbmFnZXJ9IGZyb20gXCJAL2FwcGxpY2F0aW9uL29BdXRoMkNsaWVudE1hbmFnZXJcIjtcbmltcG9ydCB7RGF5T2ZmQ2hlY2tlcn0gZnJvbSBcIkAvYXBwbGljYXRpb24vZGF5T2ZmQ2hlY2tlclwiO1xuaW1wb3J0IHtEYXlqc30gZnJvbSBcImRheWpzXCI7XG5pbXBvcnQge0RhdGVVdGlsc30gZnJvbSBcIkAvc2hhcmVkL3V0aWwvRGF0ZVV0aWxzXCI7XG5cbmNsYXNzIEdvb2dsZUNhbGVuZGFyQXBpQ2xpZW50IHtcbiAgcHJpdmF0ZSBkYXlPZmZDaGVja2VyOiBEYXlPZmZDaGVja2VyIHwgbnVsbCA9IG51bGxcblxuICBhc3luYyBpbml0KCkge1xuICAgIGNvbnN0IG9BdXRoMkNsaWVudE1hbmFnZXIgPSBjb250YWluZXIuZ2V0PE9BdXRoMkNsaWVudE1hbmFnZXI+KFRZUEVTLk9BdXRoMkNsaWVudE1hbmFnZXIpO1xuICAgIGF3YWl0IG9BdXRoMkNsaWVudE1hbmFnZXIuaW5pdCgpXG4gICAgLy8gTk9URTogS2VlcCB0aGlzIGNvbnRhaW5lci5nZXQgb3JkZXIgYmVjYXVzZSB0aGUgZGVwZW5kZW5jeSBvZiBkYXlPZmZDaGVja2VyIGNhbm5vdCBiZSByZXNvbHZlZCB1bnRpbCBvQXV0aDJDbGllbnQgaXMgaW5pdGlhbGl6ZWQuXG4gICAgdGhpcy5kYXlPZmZDaGVja2VyID0gY29udGFpbmVyLmdldDxEYXlPZmZDaGVja2VyPihUWVBFUy5EYXlPZmZDaGVja2VyKTtcbiAgfVxuXG4gIGFzeW5jIGlzRGF5T2ZmKGRhdGU6IERheWpzID0gRGF0ZVV0aWxzLnRvZGF5KCkpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICghdGhpcy5kYXlPZmZDaGVja2VyKSB7XG4gICAgICBhd2FpdCB0aGlzLmluaXQoKVxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaXNEYXlPZmYoZGF0ZSlcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZGF5T2ZmQ2hlY2tlci5leGVjdXRlKGRhdGUpXG4gIH1cbn1cblxuY29uc3QgZ2NBcGlDbGllbnQgPSBuZXcgR29vZ2xlQ2FsZW5kYXJBcGlDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2NBcGlDbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWdCQTs7QUFDQTs7QUFJQTs7K0NBcEJBLG9KOzs7Ozs7Ozs7Ozs7OztJQXNCTUEsdUI7Ozs7MkNBQzBDLEk7Ozs7Ozs2RUFFOUM7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUNRQyxtQkFEUixHQUM4QkMsb0JBQUEsQ0FBVUMsR0FBVixDQUFtQ0MsWUFBQSxDQUFNQyxtQkFBekMsQ0FEOUI7Z0JBQUE7Z0JBQUEsT0FFUUosbUJBQW1CLENBQUNLLElBQXBCLEVBRlI7O2NBQUE7Z0JBR0U7Z0JBQ0EsS0FBS0MsYUFBTCxHQUFxQkwsb0JBQUEsQ0FBVUMsR0FBVixDQUE2QkMsWUFBQSxDQUFNSSxhQUFuQyxDQUFyQjs7Y0FKRjtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUEsQzs7Ozs7Ozs7Ozs7aUZBT0E7UUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQWVDLElBQWYsOERBQTZCQyxvQkFBQSxDQUFVQyxLQUFWLEVBQTdCOztnQkFBQSxJQUNPLEtBQUtKLGFBRFo7a0JBQUE7a0JBQUE7Z0JBQUE7O2dCQUFBO2dCQUFBLE9BRVUsS0FBS0QsSUFBTCxFQUZWOztjQUFBO2dCQUFBO2dCQUFBLE9BR2lCLEtBQUtNLFFBQUwsQ0FBY0gsSUFBZCxDQUhqQjs7Y0FBQTtnQkFBQTs7Y0FBQTtnQkFBQTtnQkFBQSxPQUtlLEtBQUtGLGFBQUwsQ0FBbUJNLE9BQW5CLENBQTJCSixJQUEzQixDQUxmOztjQUFBO2dCQUFBOztjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDOzs7Ozs7Ozs7Ozs7O0FBU0YsSUFBTUssV0FBVyxHQUFHLElBQUlkLHVCQUFKLEVBQXBCO2VBRWVjLFcifQ==