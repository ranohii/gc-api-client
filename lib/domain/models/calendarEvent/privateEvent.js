"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrivateEvent = void 0;

var _DayOffType = require("./DayOffType");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PrivateEvent = /*#__PURE__*/function () {
  function PrivateEvent(created, creator, end, etag, eventType, htmlLink, iCalUID, id, kind, organizer, originalStartTime, recurringEventId, reminders, sequence, start, status, summary, updated) {
    _classCallCheck(this, PrivateEvent);

    _defineProperty(this, "_created", void 0);

    _defineProperty(this, "_creator", void 0);

    _defineProperty(this, "_end", void 0);

    _defineProperty(this, "_etag", void 0);

    _defineProperty(this, "_eventType", void 0);

    _defineProperty(this, "_htmlLink", void 0);

    _defineProperty(this, "_iCalUID", void 0);

    _defineProperty(this, "_id", void 0);

    _defineProperty(this, "_kind", void 0);

    _defineProperty(this, "_organizer", void 0);

    _defineProperty(this, "_originalStartTime", void 0);

    _defineProperty(this, "_recurringEventId", void 0);

    _defineProperty(this, "_reminders", void 0);

    _defineProperty(this, "_sequence", void 0);

    _defineProperty(this, "_start", void 0);

    _defineProperty(this, "_status", void 0);

    _defineProperty(this, "_summary", void 0);

    _defineProperty(this, "_updated", void 0);

    this._created = created;
    this._creator = creator;
    this._end = end;
    this._etag = etag;
    this._eventType = eventType;
    this._htmlLink = htmlLink;
    this._iCalUID = iCalUID;
    this._id = id;
    this._kind = kind;
    this._organizer = organizer;
    this._originalStartTime = originalStartTime;
    this._recurringEventId = recurringEventId;
    this._reminders = reminders;
    this._sequence = sequence;
    this._start = start;
    this._status = status;
    this._summary = summary;
    this._updated = updated;
  }

  _createClass(PrivateEvent, [{
    key: "created",
    get: function get() {
      return this._created;
    }
  }, {
    key: "creator",
    get: function get() {
      return this._creator;
    }
  }, {
    key: "end",
    get: function get() {
      return this._end;
    }
  }, {
    key: "etag",
    get: function get() {
      return this._etag;
    }
  }, {
    key: "eventType",
    get: function get() {
      return this._eventType;
    }
  }, {
    key: "htmlLink",
    get: function get() {
      return this._htmlLink;
    }
  }, {
    key: "iCalUID",
    get: function get() {
      return this._iCalUID;
    }
  }, {
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "kind",
    get: function get() {
      return this._kind;
    }
  }, {
    key: "organizer",
    get: function get() {
      return this._organizer;
    }
  }, {
    key: "originalStartTime",
    get: function get() {
      return this._originalStartTime;
    }
  }, {
    key: "recurringEventId",
    get: function get() {
      return this._recurringEventId;
    }
  }, {
    key: "reminders",
    get: function get() {
      return this._reminders;
    }
  }, {
    key: "sequence",
    get: function get() {
      return this._sequence;
    }
  }, {
    key: "start",
    get: function get() {
      return this._start;
    }
  }, {
    key: "status",
    get: function get() {
      return this._status;
    }
  }, {
    key: "summary",
    get: function get() {
      return this._summary;
    }
  }, {
    key: "updated",
    get: function get() {
      return this._updated;
    }
  }, {
    key: "isDayOff",
    get: function get() {
      return this.summary === _DayOffType.DayOffType.PAID_LEAVE || this.summary.includes(_DayOffType.DayOffType.SUMMER_VACATION);
    }
  }], [{
    key: "fromDefaultEvent",
    value: function fromDefaultEvent(event) {
      return new PrivateEvent(event.created, event.creator, event.end, event.etag, event.eventType, event.htmlLink, event.iCalUID, event.id, event.kind, event.organizer, event.originalStartTime, event.recurringEventId, event.reminders, event.sequence, event.start, event.status, event.summary, event.updated);
    }
  }]);

  return PrivateEvent;
}();

exports.PrivateEvent = PrivateEvent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcml2YXRlRXZlbnQiLCJjcmVhdGVkIiwiY3JlYXRvciIsImVuZCIsImV0YWciLCJldmVudFR5cGUiLCJodG1sTGluayIsImlDYWxVSUQiLCJpZCIsImtpbmQiLCJvcmdhbml6ZXIiLCJvcmlnaW5hbFN0YXJ0VGltZSIsInJlY3VycmluZ0V2ZW50SWQiLCJyZW1pbmRlcnMiLCJzZXF1ZW5jZSIsInN0YXJ0Iiwic3RhdHVzIiwic3VtbWFyeSIsInVwZGF0ZWQiLCJfY3JlYXRlZCIsIl9jcmVhdG9yIiwiX2VuZCIsIl9ldGFnIiwiX2V2ZW50VHlwZSIsIl9odG1sTGluayIsIl9pQ2FsVUlEIiwiX2lkIiwiX2tpbmQiLCJfb3JnYW5pemVyIiwiX29yaWdpbmFsU3RhcnRUaW1lIiwiX3JlY3VycmluZ0V2ZW50SWQiLCJfcmVtaW5kZXJzIiwiX3NlcXVlbmNlIiwiX3N0YXJ0IiwiX3N0YXR1cyIsIl9zdW1tYXJ5IiwiX3VwZGF0ZWQiLCJEYXlPZmZUeXBlIiwiUEFJRF9MRUFWRSIsImluY2x1ZGVzIiwiU1VNTUVSX1ZBQ0FUSU9OIiwiZXZlbnQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL21vZGVscy9jYWxlbmRhckV2ZW50L3ByaXZhdGVFdmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDcmVhdG9yLFxuICBEZWZhdWx0RXZlbnQsXG4gIEVuZCxcbiAgT3JnYW5pemVyLFxuICBPcmlnaW5hbFN0YXJ0VGltZSxcbiAgUmVtaW5kZXJzLCBTdGFydFxufSBmcm9tIFwiQC9kb21haW4vbW9kZWxzL2NhbGVuZGFyRXZlbnQvZGVmYXVsdEV2ZW50XCI7XG5pbXBvcnQge0RheU9mZlR5cGV9IGZyb20gXCJAL2RvbWFpbi9tb2RlbHMvY2FsZW5kYXJFdmVudC9EYXlPZmZUeXBlXCI7XG5cbmV4cG9ydCBjbGFzcyBQcml2YXRlRXZlbnQgaW1wbGVtZW50cyBEZWZhdWx0RXZlbnQge1xuICBwcml2YXRlIHJlYWRvbmx5IF9jcmVhdGVkOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NyZWF0b3I6IENyZWF0b3I7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2VuZDogRW5kO1xuICBwcml2YXRlIHJlYWRvbmx5IF9ldGFnOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2V2ZW50VHlwZTogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9odG1sTGluazogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9pQ2FsVUlEOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2lkOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2tpbmQ6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfb3JnYW5pemVyOiBPcmdhbml6ZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgX29yaWdpbmFsU3RhcnRUaW1lOiBPcmlnaW5hbFN0YXJ0VGltZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVjdXJyaW5nRXZlbnRJZDogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9yZW1pbmRlcnM6IFJlbWluZGVycztcbiAgcHJpdmF0ZSByZWFkb25seSBfc2VxdWVuY2U6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhcnQ6IFN0YXJ0O1xuICBwcml2YXRlIHJlYWRvbmx5IF9zdGF0dXM6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfc3VtbWFyeTogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF91cGRhdGVkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY3JlYXRlZDogc3RyaW5nLCBjcmVhdG9yOiBDcmVhdG9yLCBlbmQ6IEVuZCwgZXRhZzogc3RyaW5nLCBldmVudFR5cGU6IHN0cmluZywgaHRtbExpbms6IHN0cmluZywgaUNhbFVJRDogc3RyaW5nLCBpZDogc3RyaW5nLCBraW5kOiBzdHJpbmcsIG9yZ2FuaXplcjogT3JnYW5pemVyLCBvcmlnaW5hbFN0YXJ0VGltZTogT3JpZ2luYWxTdGFydFRpbWUsIHJlY3VycmluZ0V2ZW50SWQ6IHN0cmluZywgcmVtaW5kZXJzOiBSZW1pbmRlcnMsIHNlcXVlbmNlOiBudW1iZXIsIHN0YXJ0OiBTdGFydCwgc3RhdHVzOiBzdHJpbmcsIHN1bW1hcnk6IHN0cmluZywgdXBkYXRlZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlZCA9IGNyZWF0ZWQ7XG4gICAgdGhpcy5fY3JlYXRvciA9IGNyZWF0b3I7XG4gICAgdGhpcy5fZW5kID0gZW5kO1xuICAgIHRoaXMuX2V0YWcgPSBldGFnO1xuICAgIHRoaXMuX2V2ZW50VHlwZSA9IGV2ZW50VHlwZTtcbiAgICB0aGlzLl9odG1sTGluayA9IGh0bWxMaW5rO1xuICAgIHRoaXMuX2lDYWxVSUQgPSBpQ2FsVUlEO1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5fa2luZCA9IGtpbmQ7XG4gICAgdGhpcy5fb3JnYW5pemVyID0gb3JnYW5pemVyO1xuICAgIHRoaXMuX29yaWdpbmFsU3RhcnRUaW1lID0gb3JpZ2luYWxTdGFydFRpbWU7XG4gICAgdGhpcy5fcmVjdXJyaW5nRXZlbnRJZCA9IHJlY3VycmluZ0V2ZW50SWQ7XG4gICAgdGhpcy5fcmVtaW5kZXJzID0gcmVtaW5kZXJzO1xuICAgIHRoaXMuX3NlcXVlbmNlID0gc2VxdWVuY2U7XG4gICAgdGhpcy5fc3RhcnQgPSBzdGFydDtcbiAgICB0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5fc3VtbWFyeSA9IHN1bW1hcnk7XG4gICAgdGhpcy5fdXBkYXRlZCA9IHVwZGF0ZWQ7XG4gIH1cblxuICBnZXQgY3JlYXRlZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVkO1xuICB9XG5cbiAgZ2V0IGNyZWF0b3IoKTogQ3JlYXRvciB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0b3I7XG4gIH1cblxuICBnZXQgZW5kKCk6IEVuZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZDtcbiAgfVxuXG4gIGdldCBldGFnKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2V0YWc7XG4gIH1cblxuICBnZXQgZXZlbnRUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50VHlwZTtcbiAgfVxuXG4gIGdldCBodG1sTGluaygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9odG1sTGluaztcbiAgfVxuXG4gIGdldCBpQ2FsVUlEKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lDYWxVSUQ7XG4gIH1cblxuICBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBnZXQga2luZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9raW5kO1xuICB9XG5cbiAgZ2V0IG9yZ2FuaXplcigpOiBPcmdhbml6ZXIge1xuICAgIHJldHVybiB0aGlzLl9vcmdhbml6ZXI7XG4gIH1cblxuICBnZXQgb3JpZ2luYWxTdGFydFRpbWUoKTogT3JpZ2luYWxTdGFydFRpbWUge1xuICAgIHJldHVybiB0aGlzLl9vcmlnaW5hbFN0YXJ0VGltZTtcbiAgfVxuXG4gIGdldCByZWN1cnJpbmdFdmVudElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY3VycmluZ0V2ZW50SWQ7XG4gIH1cblxuICBnZXQgcmVtaW5kZXJzKCk6IFJlbWluZGVycyB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbWluZGVycztcbiAgfVxuXG4gIGdldCBzZXF1ZW5jZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zZXF1ZW5jZTtcbiAgfVxuXG4gIGdldCBzdGFydCgpOiBTdGFydCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0O1xuICB9XG5cbiAgZ2V0IHN0YXR1cygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cblxuICBnZXQgc3VtbWFyeSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zdW1tYXJ5O1xuICB9XG5cbiAgZ2V0IHVwZGF0ZWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlZDtcbiAgfVxuXG4gIGdldCBpc0RheU9mZigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdW1tYXJ5ID09PSBEYXlPZmZUeXBlLlBBSURfTEVBVkVcbiAgICB8fCB0aGlzLnN1bW1hcnkuaW5jbHVkZXMoRGF5T2ZmVHlwZS5TVU1NRVJfVkFDQVRJT04pXG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmF1bHRFdmVudChldmVudDogRGVmYXVsdEV2ZW50KTogUHJpdmF0ZUV2ZW50IHtcbiAgICByZXR1cm4gbmV3IFByaXZhdGVFdmVudChcbiAgICAgIGV2ZW50LmNyZWF0ZWQsXG4gICAgICBldmVudC5jcmVhdG9yLFxuICAgICAgZXZlbnQuZW5kLFxuICAgICAgZXZlbnQuZXRhZyxcbiAgICAgIGV2ZW50LmV2ZW50VHlwZSxcbiAgICAgIGV2ZW50Lmh0bWxMaW5rLFxuICAgICAgZXZlbnQuaUNhbFVJRCxcbiAgICAgIGV2ZW50LmlkLFxuICAgICAgZXZlbnQua2luZCxcbiAgICAgIGV2ZW50Lm9yZ2FuaXplcixcbiAgICAgIGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLFxuICAgICAgZXZlbnQucmVjdXJyaW5nRXZlbnRJZCxcbiAgICAgIGV2ZW50LnJlbWluZGVycyxcbiAgICAgIGV2ZW50LnNlcXVlbmNlLFxuICAgICAgZXZlbnQuc3RhcnQsXG4gICAgICBldmVudC5zdGF0dXMsXG4gICAgICBldmVudC5zdW1tYXJ5LFxuICAgICAgZXZlbnQudXBkYXRlZCxcbiAgICApXG4gIH1cbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFRQTs7Ozs7Ozs7OztJQUVhQSxZO0VBb0JYLHNCQUFZQyxPQUFaLEVBQTZCQyxPQUE3QixFQUErQ0MsR0FBL0MsRUFBeURDLElBQXpELEVBQXVFQyxTQUF2RSxFQUEwRkMsUUFBMUYsRUFBNEdDLE9BQTVHLEVBQTZIQyxFQUE3SCxFQUF5SUMsSUFBekksRUFBdUpDLFNBQXZKLEVBQTZLQyxpQkFBN0ssRUFBbU5DLGdCQUFuTixFQUE2T0MsU0FB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