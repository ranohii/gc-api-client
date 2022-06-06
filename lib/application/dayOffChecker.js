"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DayOffChecker = void 0;

var _credentialsRepository = require("../domain/models/credentials/credentialsRepository");

var _types = require("../config/types");

var _tokenRepository = require("../domain/models/token/tokenRepository");

var _holidayRepository = require("../domain/models/calendarEvent/holidayRepository");

var _inversify = require("inversify");

var _DateUtils = require("../shared/util/DateUtils");

var _privateEventRepository = require("../domain/models/calendarEvent/privateEventRepository");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var DayOffChecker = (_dec = (0, _inversify.injectable)(), _dec2 = function _dec2(target, key) {
  return (0, _inversify.inject)(_types.TYPES.CredentialsRepository)(target, undefined, 0);
}, _dec3 = function _dec3(target, key) {
  return (0, _inversify.inject)(_types.TYPES.TokenRepository)(target, undefined, 1);
}, _dec4 = function _dec4(target, key) {
  return (0, _inversify.inject)(_types.TYPES.HolidayRepository)(target, undefined, 2);
}, _dec5 = function _dec5(target, key) {
  return (0, _inversify.inject)(_types.TYPES.PrivateEventRepository)(target, undefined, 3);
}, _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", [typeof _credentialsRepository.CredentialsRepository === "undefined" ? Object : _credentialsRepository.CredentialsRepository, typeof _tokenRepository.TokenRepository === "undefined" ? Object : _tokenRepository.TokenRepository, typeof _holidayRepository.HolidayRepository === "undefined" ? Object : _holidayRepository.HolidayRepository, typeof _privateEventRepository.PrivateEventRepository === "undefined" ? Object : _privateEventRepository.PrivateEventRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = /*#__PURE__*/function () {
  function DayOffChecker(credentialsRepository, tokenRepository, holidayRepository, privateEventRepository) {
    _classCallCheck(this, DayOffChecker);

    this.credentialsRepository = credentialsRepository;
    this.tokenRepository = tokenRepository;
    this.holidayRepository = holidayRepository;
    this.privateEventRepository = privateEventRepository;
  }

  _createClass(DayOffChecker, [{
    key: "execute",
    value: function () {
      var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(date) {
        var isDayOff, _DateUtils$getStartAn, start, end, privateEvents, holiday;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isDayOff = false;
                _DateUtils$getStartAn = _DateUtils.DateUtils.getStartAndEndAsString(date, 1), start = _DateUtils$getStartAn.start, end = _DateUtils$getStartAn.end;
                console.log({
                  start: start,
                  end: end
                });
                _context.prev = 3;
                _context.prev = 4;
                _context.next = 7;
                return this.privateEventRepository.findListByDate(start, end);

              case 7:
                privateEvents = _context.sent;
                console.dir(privateEvents);
                isDayOff = privateEvents.some(function (event) {
                  return event.isDayOff;
                });
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](4);
                console.log({
                  error: _context.t0
                });

              case 15:
                _context.prev = 15;
                _context.next = 18;
                return this.holidayRepository.findByDate(start, end);

              case 18:
                holiday = _context.sent;
                console.dir(holiday);

                if (!isDayOff) {
                  isDayOff = !!holiday;
                }

                return _context.finish(15);

              case 22:
                _context.next = 27;
                break;

              case 24:
                _context.prev = 24;
                _context.t1 = _context["catch"](3);
                console.log({
                  error: _context.t1
                });

              case 27:
                return _context.abrupt("return", isDayOff);

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 24], [4, 12, 15, 22]]);
      }));

      function execute(_x) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }]);

  return DayOffChecker;
}()) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
exports.DayOffChecker = DayOffChecker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEYXlPZmZDaGVja2VyIiwiaW5qZWN0YWJsZSIsImluamVjdCIsIlRZUEVTIiwiQ3JlZGVudGlhbHNSZXBvc2l0b3J5IiwiVG9rZW5SZXBvc2l0b3J5IiwiSG9saWRheVJlcG9zaXRvcnkiLCJQcml2YXRlRXZlbnRSZXBvc2l0b3J5IiwiY3JlZGVudGlhbHNSZXBvc2l0b3J5IiwidG9rZW5SZXBvc2l0b3J5IiwiaG9saWRheVJlcG9zaXRvcnkiLCJwcml2YXRlRXZlbnRSZXBvc2l0b3J5IiwiZGF0ZSIsImlzRGF5T2ZmIiwiRGF0ZVV0aWxzIiwiZ2V0U3RhcnRBbmRFbmRBc1N0cmluZyIsInN0YXJ0IiwiZW5kIiwiY29uc29sZSIsImxvZyIsImZpbmRMaXN0QnlEYXRlIiwicHJpdmF0ZUV2ZW50cyIsImRpciIsInNvbWUiLCJldmVudCIsImVycm9yIiwiZmluZEJ5RGF0ZSIsImhvbGlkYXkiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwbGljYXRpb24vZGF5T2ZmQ2hlY2tlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NyZWRlbnRpYWxzUmVwb3NpdG9yeX0gZnJvbSBcIkAvZG9tYWluL21vZGVscy9jcmVkZW50aWFscy9jcmVkZW50aWFsc1JlcG9zaXRvcnlcIjtcbmltcG9ydCB7VFlQRVN9IGZyb20gXCJAL2NvbmZpZy90eXBlc1wiO1xuaW1wb3J0IHtUb2tlblJlcG9zaXRvcnl9IGZyb20gXCJAL2RvbWFpbi9tb2RlbHMvdG9rZW4vdG9rZW5SZXBvc2l0b3J5XCI7XG5pbXBvcnQge0hvbGlkYXlSZXBvc2l0b3J5fSBmcm9tIFwiQC9kb21haW4vbW9kZWxzL2NhbGVuZGFyRXZlbnQvaG9saWRheVJlcG9zaXRvcnlcIjtcbmltcG9ydCB7aW5qZWN0LCBpbmplY3RhYmxlfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQge0RhdGVVdGlsc30gZnJvbSBcIkAvc2hhcmVkL3V0aWwvRGF0ZVV0aWxzXCI7XG5pbXBvcnQge1ByaXZhdGVFdmVudFJlcG9zaXRvcnl9IGZyb20gXCJAL2RvbWFpbi9tb2RlbHMvY2FsZW5kYXJFdmVudC9wcml2YXRlRXZlbnRSZXBvc2l0b3J5XCI7XG5pbXBvcnQge0RheWpzfSBmcm9tIFwiZGF5anNcIjtcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERheU9mZkNoZWNrZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KFRZUEVTLkNyZWRlbnRpYWxzUmVwb3NpdG9yeSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNyZWRlbnRpYWxzUmVwb3NpdG9yeTogQ3JlZGVudGlhbHNSZXBvc2l0b3J5LFxuICAgIEBpbmplY3QoVFlQRVMuVG9rZW5SZXBvc2l0b3J5KVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG9rZW5SZXBvc2l0b3J5OiBUb2tlblJlcG9zaXRvcnksXG4gICAgQGluamVjdChUWVBFUy5Ib2xpZGF5UmVwb3NpdG9yeSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhvbGlkYXlSZXBvc2l0b3J5OiBIb2xpZGF5UmVwb3NpdG9yeSxcbiAgICBAaW5qZWN0KFRZUEVTLlByaXZhdGVFdmVudFJlcG9zaXRvcnkpXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcml2YXRlRXZlbnRSZXBvc2l0b3J5OiBQcml2YXRlRXZlbnRSZXBvc2l0b3J5LFxuICApIHt9XG5cbiAgYXN5bmMgZXhlY3V0ZShkYXRlOiBEYXlqcyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGxldCBpc0RheU9mZiA9IGZhbHNlXG4gICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBEYXRlVXRpbHMuZ2V0U3RhcnRBbmRFbmRBc1N0cmluZyhkYXRlLCAxKVxuICAgIGNvbnNvbGUubG9nKHtzdGFydCxlbmR9KVxuICAgIHRyeSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwcml2YXRlRXZlbnRzID0gYXdhaXQgdGhpcy5wcml2YXRlRXZlbnRSZXBvc2l0b3J5LmZpbmRMaXN0QnlEYXRlKHN0YXJ0LCBlbmQpXG4gICAgICAgIGNvbnNvbGUuZGlyKHByaXZhdGVFdmVudHMpXG4gICAgICAgIGlzRGF5T2ZmID0gcHJpdmF0ZUV2ZW50cy5zb21lKGV2ZW50ID0+IGV2ZW50LmlzRGF5T2ZmKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coe2Vycm9yfSlcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGNvbnN0IGhvbGlkYXkgPSBhd2FpdCB0aGlzLmhvbGlkYXlSZXBvc2l0b3J5LmZpbmRCeURhdGUoc3RhcnQsIGVuZClcbiAgICAgICAgY29uc29sZS5kaXIoaG9saWRheSlcbiAgICAgICAgaWYgKCFpc0RheU9mZikge1xuICAgICAgICAgaXNEYXlPZmYgPSAhIWhvbGlkYXlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyh7ZXJyb3J9KVxuICAgIH1cbiAgICByZXR1cm4gaXNEYXlPZmZcbiAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7K0NBTEEsb0o7Ozs7Ozs7Ozs7OztJQVNhQSxhLFdBRFosSUFBQUMscUJBQUEsRztTQUdJLElBQUFDLGlCQUFBLEVBQU9DLFlBQUEsQ0FBTUMscUJBQWIsQzs7U0FFQSxJQUFBRixpQkFBQSxFQUFPQyxZQUFBLENBQU1FLGVBQWIsQzs7U0FFQSxJQUFBSCxpQkFBQSxFQUFPQyxZQUFBLENBQU1HLGlCQUFiLEM7O1NBRUEsSUFBQUosaUJBQUEsRUFBT0MsWUFBQSxDQUFNSSxzQkFBYixDOztFQVBILHVCQUVtQkMscUJBRm5CLEVBSW1CQyxlQUpuQixFQU1tQkMsaUJBTm5CLEVBUW1CQyxzQkFSbkIsRUFTRTtJQUFBOztJQUFBLEtBUGlCSCxxQkFPakIsR0FQaUJBLHFCQU9qQjtJQUFBLEtBTGlCQyxlQUtqQixHQUxpQkEsZUFLakI7SUFBQSxLQUhpQkMsaUJBR2pCLEdBSGlCQSxpQkFHakI7SUFBQSxLQURpQkMsc0JBQ2pCLEdBRGlCQSxzQkFDakI7RUFBRTs7Ozs7Z0ZBRUosaUJBQWNDLElBQWQ7UUFBQTs7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFDTUMsUUFETixHQUNpQixLQURqQjtnQkFBQSx3QkFFeUJDLG9CQUFBLENBQVVDLHNCQUFWLENBQWlDSCxJQUFqQyxFQUF1QyxDQUF2QyxDQUZ6QixFQUVVSSxLQUZWLHlCQUVVQSxLQUZWLEVBRWlCQyxHQUZqQix5QkFFaUJBLEdBRmpCO2dCQUdFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWTtrQkFBQ0gsS0FBSyxFQUFMQSxLQUFEO2tCQUFPQyxHQUFHLEVBQUhBO2dCQUFQLENBQVo7Z0JBSEY7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FNa0MsS0FBS04sc0JBQUwsQ0FBNEJTLGNBQTVCLENBQTJDSixLQUEzQyxFQUFrREMsR0FBbEQsQ0FObEM7O2NBQUE7Z0JBTVlJLGFBTlo7Z0JBT01ILE9BQU8sQ0FBQ0ksR0FBUixDQUFZRCxhQUFaO2dCQUNBUixRQUFRLEdBQUdRLGFBQWEsQ0FBQ0UsSUFBZCxDQUFtQixVQUFBQyxLQUFLO2tCQUFBLE9BQUlBLEtBQUssQ0FBQ1gsUUFBVjtnQkFBQSxDQUF4QixDQUFYO2dCQVJOO2dCQUFBOztjQUFBO2dCQUFBO2dCQUFBO2dCQVVNSyxPQUFPLENBQUNDLEdBQVIsQ0FBWTtrQkFBQ00sS0FBSztnQkFBTixDQUFaOztjQVZOO2dCQUFBO2dCQUFBO2dCQUFBLE9BWTRCLEtBQUtmLGlCQUFMLENBQXVCZ0IsVUFBdkIsQ0FBa0NWLEtBQWxDLEVBQXlDQyxHQUF6QyxDQVo1Qjs7Y0FBQTtnQkFZWVUsT0FaWjtnQkFhTVQsT0FBTyxDQUFDSSxHQUFSLENBQVlLLE9BQVo7O2dCQUNBLElBQUksQ0FBQ2QsUUFBTCxFQUFlO2tCQUNkQSxRQUFRLEdBQUcsQ0FBQyxDQUFDYyxPQUFiO2dCQUNBOztnQkFoQlA7O2NBQUE7Z0JBQUE7Z0JBQUE7O2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBbUJJVCxPQUFPLENBQUNDLEdBQVIsQ0FBWTtrQkFBQ00sS0FBSztnQkFBTixDQUFaOztjQW5CSjtnQkFBQSxpQ0FxQlNaLFFBckJUOztjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDIn0=