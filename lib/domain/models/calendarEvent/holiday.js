"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Holiday = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Holiday = /*#__PURE__*/function () {
  function Holiday(created, creator, description, end, etag, eventType, htmlLink, iCalUID, id, kind, organizer, sequence, start, status, summary, transparency, updated, visibility) {
    _classCallCheck(this, Holiday);

    _defineProperty(this, "_created", void 0);

    _defineProperty(this, "_creator", void 0);

    _defineProperty(this, "_description", void 0);

    _defineProperty(this, "_end", void 0);

    _defineProperty(this, "_etag", void 0);

    _defineProperty(this, "_eventType", void 0);

    _defineProperty(this, "_htmlLink", void 0);

    _defineProperty(this, "_iCalUID", void 0);

    _defineProperty(this, "_id", void 0);

    _defineProperty(this, "_kind", void 0);

    _defineProperty(this, "_organizer", void 0);

    _defineProperty(this, "_sequence", void 0);

    _defineProperty(this, "_start", void 0);

    _defineProperty(this, "_status", void 0);

    _defineProperty(this, "_summary", void 0);

    _defineProperty(this, "_transparency", void 0);

    _defineProperty(this, "_updated", void 0);

    _defineProperty(this, "_visibility", void 0);

    if (description !== "Public holiday") throw new Error("Event Description is invalid: Not public holiday");
    this._created = created;
    this._creator = creator;
    this._description = description;
    this._end = end;
    this._etag = etag;
    this._eventType = eventType;
    this._htmlLink = htmlLink;
    this._iCalUID = iCalUID;
    this._id = id;
    this._kind = kind;
    this._organizer = organizer;
    this._sequence = sequence;
    this._start = start;
    this._status = status;
    this._summary = summary;
    this._transparency = transparency;
    this._updated = updated;
    this._visibility = visibility;
  }

  _createClass(Holiday, [{
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
    key: "description",
    get: function get() {
      return this._description;
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
    key: "transparency",
    get: function get() {
      return this._transparency;
    }
  }, {
    key: "updated",
    get: function get() {
      return this._updated;
    }
  }, {
    key: "visibility",
    get: function get() {
      return this._visibility;
    }
  }], [{
    key: "fromPublicEvent",
    value: function fromPublicEvent(event) {
      return new Holiday(event.created, event.creator, event.description, event.end, event.etag, event.eventType, event.htmlLink, event.iCalUID, event.id, event.kind, event.organizer, event.sequence, event.start, event.status, event.summary, event.transparency, event.updated, event.visibility);
    }
  }]);

  return Holiday;
}();

exports.Holiday = Holiday;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIb2xpZGF5IiwiY3JlYXRlZCIsImNyZWF0b3IiLCJkZXNjcmlwdGlvbiIsImVuZCIsImV0YWciLCJldmVudFR5cGUiLCJodG1sTGluayIsImlDYWxVSUQiLCJpZCIsImtpbmQiLCJvcmdhbml6ZXIiLCJzZXF1ZW5jZSIsInN0YXJ0Iiwic3RhdHVzIiwic3VtbWFyeSIsInRyYW5zcGFyZW5jeSIsInVwZGF0ZWQiLCJ2aXNpYmlsaXR5IiwiRXJyb3IiLCJfY3JlYXRlZCIsIl9jcmVhdG9yIiwiX2Rlc2NyaXB0aW9uIiwiX2VuZCIsIl9ldGFnIiwiX2V2ZW50VHlwZSIsIl9odG1sTGluayIsIl9pQ2FsVUlEIiwiX2lkIiwiX2tpbmQiLCJfb3JnYW5pemVyIiwiX3NlcXVlbmNlIiwiX3N0YXJ0IiwiX3N0YXR1cyIsIl9zdW1tYXJ5IiwiX3RyYW5zcGFyZW5jeSIsIl91cGRhdGVkIiwiX3Zpc2liaWxpdHkiLCJldmVudCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb21haW4vbW9kZWxzL2NhbGVuZGFyRXZlbnQvaG9saWRheS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NyZWF0b3IsIEVuZCwgT3JnYW5pemVyLCBQdWJsaWNFdmVudCwgU3RhcnR9IGZyb20gXCIuL3B1YmxpY0V2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBIb2xpZGF5IGltcGxlbWVudHMgUHVibGljRXZlbnQge1xuICBwcml2YXRlIHJlYWRvbmx5IF9jcmVhdGVkOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NyZWF0b3I6IENyZWF0b3I7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2VuZDogRW5kO1xuICBwcml2YXRlIHJlYWRvbmx5IF9ldGFnOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2V2ZW50VHlwZTogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9odG1sTGluazogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9pQ2FsVUlEOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2lkOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2tpbmQ6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfb3JnYW5pemVyOiBPcmdhbml6ZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3NlcXVlbmNlOiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3N0YXJ0OiBTdGFydDtcbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhdHVzOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3N1bW1hcnk6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfdHJhbnNwYXJlbmN5OiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3VwZGF0ZWQ6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfdmlzaWJpbGl0eTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNyZWF0ZWQ6IHN0cmluZywgY3JlYXRvcjogQ3JlYXRvciwgZGVzY3JpcHRpb246IHN0cmluZywgZW5kOiBFbmQsIGV0YWc6IHN0cmluZywgZXZlbnRUeXBlOiBzdHJpbmcsIGh0bWxMaW5rOiBzdHJpbmcsIGlDYWxVSUQ6IHN0cmluZywgaWQ6IHN0cmluZywga2luZDogc3RyaW5nLCBvcmdhbml6ZXI6IE9yZ2FuaXplciwgc2VxdWVuY2U6IG51bWJlciwgc3RhcnQ6IFN0YXJ0LCBzdGF0dXM6IHN0cmluZywgc3VtbWFyeTogc3RyaW5nLCB0cmFuc3BhcmVuY3k6IHN0cmluZywgdXBkYXRlZDogc3RyaW5nLCB2aXNpYmlsaXR5OiBzdHJpbmcpIHtcbiAgICBpZiAoZGVzY3JpcHRpb24gIT09IFwiUHVibGljIGhvbGlkYXlcIikgdGhyb3cgbmV3IEVycm9yKFwiRXZlbnQgRGVzY3JpcHRpb24gaXMgaW52YWxpZDogTm90IHB1YmxpYyBob2xpZGF5XCIpXG4gICAgdGhpcy5fY3JlYXRlZCA9IGNyZWF0ZWQ7XG4gICAgdGhpcy5fY3JlYXRvciA9IGNyZWF0b3I7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9lbmQgPSBlbmQ7XG4gICAgdGhpcy5fZXRhZyA9IGV0YWc7XG4gICAgdGhpcy5fZXZlbnRUeXBlID0gZXZlbnRUeXBlO1xuICAgIHRoaXMuX2h0bWxMaW5rID0gaHRtbExpbms7XG4gICAgdGhpcy5faUNhbFVJRCA9IGlDYWxVSUQ7XG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9raW5kID0ga2luZDtcbiAgICB0aGlzLl9vcmdhbml6ZXIgPSBvcmdhbml6ZXI7XG4gICAgdGhpcy5fc2VxdWVuY2UgPSBzZXF1ZW5jZTtcbiAgICB0aGlzLl9zdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLl9zdW1tYXJ5ID0gc3VtbWFyeTtcbiAgICB0aGlzLl90cmFuc3BhcmVuY3kgPSB0cmFuc3BhcmVuY3k7XG4gICAgdGhpcy5fdXBkYXRlZCA9IHVwZGF0ZWQ7XG4gICAgdGhpcy5fdmlzaWJpbGl0eSA9IHZpc2liaWxpdHk7XG4gIH1cblxuICBnZXQgY3JlYXRlZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVkO1xuICB9XG5cbiAgZ2V0IGNyZWF0b3IoKTogQ3JlYXRvciB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0b3I7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZW5kKCk6IEVuZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZDtcbiAgfVxuXG4gIGdldCBldGFnKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2V0YWc7XG4gIH1cblxuICBnZXQgZXZlbnRUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50VHlwZTtcbiAgfVxuXG4gIGdldCBodG1sTGluaygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9odG1sTGluaztcbiAgfVxuXG4gIGdldCBpQ2FsVUlEKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lDYWxVSUQ7XG4gIH1cblxuICBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBnZXQga2luZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9raW5kO1xuICB9XG5cbiAgZ2V0IG9yZ2FuaXplcigpOiBPcmdhbml6ZXIge1xuICAgIHJldHVybiB0aGlzLl9vcmdhbml6ZXI7XG4gIH1cblxuICBnZXQgc2VxdWVuY2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2VxdWVuY2U7XG4gIH1cblxuICBnZXQgc3RhcnQoKTogU3RhcnQge1xuICAgIHJldHVybiB0aGlzLl9zdGFydDtcbiAgfVxuXG4gIGdldCBzdGF0dXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgZ2V0IHN1bW1hcnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3VtbWFyeTtcbiAgfVxuXG4gIGdldCB0cmFuc3BhcmVuY3koKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNwYXJlbmN5O1xuICB9XG5cbiAgZ2V0IHVwZGF0ZWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlZDtcbiAgfVxuXG4gIGdldCB2aXNpYmlsaXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2liaWxpdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVB1YmxpY0V2ZW50KGV2ZW50OiBQdWJsaWNFdmVudCk6IEhvbGlkYXkge1xuICAgIHJldHVybiBuZXcgSG9saWRheShcbiAgICAgIGV2ZW50LmNyZWF0ZWQsXG4gICAgICBldmVudC5jcmVhdG9yLFxuICAgICAgZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICBldmVudC5lbmQsXG4gICAgICBldmVudC5ldGFnLFxuICAgICAgZXZlbnQuZXZlbnRUeXBlLFxuICAgICAgZXZlbnQuaHRtbExpbmssXG4gICAgICBldmVudC5pQ2FsVUlELFxuICAgICAgZXZlbnQuaWQsXG4gICAgICBldmVudC5raW5kLFxuICAgICAgZXZlbnQub3JnYW5pemVyLFxuICAgICAgZXZlbnQuc2VxdWVuY2UsXG4gICAgICBldmVudC5zdGFydCxcbiAgICAgIGV2ZW50LnN0YXR1cyxcbiAgICAgIGV2ZW50LnN1bW1hcnksXG4gICAgICBldmVudC50cmFuc3BhcmVuY3ksXG4gICAgICBldmVudC51cGRhdGVkLFxuICAgICAgZXZlbnQudmlzaWJpbGl0eSxcbiAgICApXG4gIH1cbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUVhQSxPO0VBb0JYLGlCQUFZQyxPQUFaLEVBQTZCQyxPQUE3QixFQUErQ0MsV0FBL0MsRUFBb0VDLEdBQXBFLEVBQThFQyxJQUE5RSxFQUE0RkMsU0FBNUYsRUFBK0dDLFFBQS9HLEVBQWlJQyxPQUFqSSxFQUFrSkMsRUFBbEosRUFBOEpDLElBQTlKLEVBQTRLQyxTQUE1SyxFQUFrTUMsUUFBbE0sRUFBb05DLEtBQXBOLEVBQWtPQyxNQUFsTyxFQUFrUEMsT0FBbFAsRUFBbVFDLFlBQW5RLEVBQXlSQyxPQUF6UixFQUEwU0MsVUFBMVMsRUFBOFQ7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTs7SUFDNVQsSUFBSWYsV0FBVyxLQUFLLGdCQUFwQixFQUFzQyxNQUFNLElBQUlnQixLQUFKLENBQVUsa0RBQVYsQ0FBTjtJQUN0QyxLQUFLQyxRQUFMLEdBQWdCbkIsT0FBaEI7SUFDQSxLQUFLb0IsUUFBTCxHQUFnQm5CLE9BQWhCO0lBQ0EsS0FBS29CLFlBQUwsR0FBb0JuQixXQUFwQjtJQUNBLEtBQUtvQixJQUFMLEdBQVluQixHQUFaO0lBQ0EsS0FBS29CLEtBQUwsR0FBYW5CLElBQWI7SUFDQSxLQUFLb0IsVUFBTCxHQUFrQm5CLFNBQWxCO0lBQ0EsS0FBS29CLFNBQUwsR0FBaUJuQixRQUFqQjtJQUNBLEtBQUtvQixRQUFMLEdBQWdCbkIsT0FBaEI7SUFDQSxLQUFLb0IsR0FBTCxHQUFXbkIsRUFBWDtJQUNBLEtBQUtvQixLQUFMLEdBQWFuQixJQUFiO0lBQ0EsS0FBS29CLFVBQUwsR0FBa0JuQixTQUFsQjtJQUNBLEtBQUtvQixTQUFMLEdBQWlCbkIsUUFBakI7SUFDQSxLQUFLb0IsTUFBTCxHQUFjbkIsS0FBZDtJQUNBLEtBQUtvQixPQUFMLEdBQWVuQixNQUFmO0lBQ0EsS0FBS29CLFFBQUwsR0FBZ0JuQixPQUFoQjtJQUNBLEtBQUtvQixhQUFMLEdBQXFCbkIsWUFBckI7SUFDQSxLQUFLb0IsUUFBTCxHQUFnQm5CLE9BQWhCO0lBQ0EsS0FBS29CLFdBQUwsR0FBbUJuQixVQUFuQjtFQUNEOzs7O1NBRUQsZUFBc0I7TUFDcEIsT0FBTyxLQUFLRSxRQUFaO0lBQ0Q7OztTQUVELGVBQXVCO01BQ3JCLE9BQU8sS0FBS0MsUUFBWjtJQUNEOzs7U0FFRCxlQUEwQjtNQUN4QixPQUFPLEtBQUtDLFlBQVo7SUFDRDs7O1NBRUQsZUFBZTtNQUNiLE9BQU8sS0FBS0MsSUFBWjtJQUNEOzs7U0FFRCxlQUFtQjtNQUNqQixPQUFPLEtBQUtDLEtBQVo7SUFDRDs7O1NBRUQsZUFBd0I7TUFDdEIsT0FBTyxLQUFLQyxVQUFaO0lBQ0Q7OztTQUVELGVBQXVCO01BQ3JCLE9BQU8sS0FBS0MsU0FBWjtJQUNEOzs7U0FFRCxlQUFzQjtNQUNwQixPQUFPLEtBQUtDLFFBQVo7SUFDRDs7O1NBRUQsZUFBaUI7TUFDZixPQUFPLEtBQUtDLEdBQVo7SUFDRDs7O1NBRUQsZUFBbUI7TUFDakIsT0FBTyxLQUFLQyxLQUFaO0lBQ0Q7OztTQUVELGVBQTJCO01BQ3pCLE9BQU8sS0FBS0MsVUFBWjtJQUNEOzs7U0FFRCxlQUF1QjtNQUNyQixPQUFPLEtBQUtDLFNBQVo7SUFDRDs7O1NBRUQsZUFBbUI7TUFDakIsT0FBTyxLQUFLQyxNQUFaO0lBQ0Q7OztTQUVELGVBQXFCO01BQ25CLE9BQU8sS0FBS0MsT0FBWjtJQUNEOzs7U0FFRCxlQUFzQjtNQUNwQixPQUFPLEtBQUtDLFFBQVo7SUFDRDs7O1NBRUQsZUFBMkI7TUFDekIsT0FBTyxLQUFLQyxhQUFaO0lBQ0Q7OztTQUVELGVBQXNCO01BQ3BCLE9BQU8sS0FBS0MsUUFBWjtJQUNEOzs7U0FFRCxlQUF5QjtNQUN2QixPQUFPLEtBQUtDLFdBQVo7SUFDRDs7O1dBRUQseUJBQXVCQyxLQUF2QixFQUFvRDtNQUNsRCxPQUFPLElBQUl0QyxPQUFKLENBQ0xzQyxLQUFLLENBQUNyQyxPQURELEVBRUxxQyxLQUFLLENBQUNwQyxPQUZELEVBR0xvQyxLQUFLLENBQUNuQyxXQUhELEVBSUxtQyxLQUFLLENBQUNsQyxHQUpELEVBS0xrQyxLQUFLLENBQUNqQyxJQUxELEVBTUxpQyxLQUFLLENBQUNoQyxTQU5ELEVBT0xnQyxLQUFLLENBQUMvQixRQVBELEVBUUwrQixLQUFLLENBQUM5QixPQVJELEVBU0w4QixLQUFLLENBQUM3QixFQVRELEVBVUw2QixLQUFLLENBQUM1QixJQVZELEVBV0w0QixLQUFLLENBQUMzQixTQVhELEVBWUwyQixLQUFLLENBQUMxQixRQVpELEVBYUwwQixLQUFLLENBQUN6QixLQWJELEVBY0x5QixLQUFLLENBQUN4QixNQWRELEVBZUx3QixLQUFLLENBQUN2QixPQWZELEVBZ0JMdUIsS0FBSyxDQUFDdEIsWUFoQkQsRUFpQkxzQixLQUFLLENBQUNyQixPQWpCRCxFQWtCTHFCLEtBQUssQ0FBQ3BCLFVBbEJELENBQVA7SUFvQkQifQ==