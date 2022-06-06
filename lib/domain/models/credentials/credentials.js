"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Credentials = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Credentials = /*#__PURE__*/function () {
  function Credentials(auth_provider_x509_cert_url, auth_uri, client_id, client_secret, project_id, redirect_uris, token_uri) {
    _classCallCheck(this, Credentials);

    _defineProperty(this, "_auth_provider_x509_cert_url", void 0);

    _defineProperty(this, "_auth_uri", void 0);

    _defineProperty(this, "_client_id", void 0);

    _defineProperty(this, "_client_secret", void 0);

    _defineProperty(this, "_project_id", void 0);

    _defineProperty(this, "_redirect_uris", void 0);

    _defineProperty(this, "_token_uri", void 0);

    this._auth_provider_x509_cert_url = auth_provider_x509_cert_url;
    this._auth_uri = auth_uri;
    this._client_id = client_id;
    this._client_secret = client_secret;
    this._project_id = project_id;
    this._redirect_uris = redirect_uris;
    this._token_uri = token_uri;
  }

  _createClass(Credentials, [{
    key: "auth_provider_x509_cert_url",
    get: function get() {
      return this._auth_provider_x509_cert_url;
    }
  }, {
    key: "auth_uri",
    get: function get() {
      return this._auth_uri;
    }
  }, {
    key: "client_id",
    get: function get() {
      return this._client_id;
    }
  }, {
    key: "client_secret",
    get: function get() {
      return this._client_secret;
    }
  }, {
    key: "project_id",
    get: function get() {
      return this._project_id;
    }
  }, {
    key: "redirect_uris",
    get: function get() {
      return this._redirect_uris;
    }
  }, {
    key: "token_uri",
    get: function get() {
      return this._token_uri;
    }
  }], [{
    key: "fromFile",
    value: function fromFile(credentials) {
      var installed = credentials.installed;
      return new Credentials(installed.auth_provider_x509_cert_url, installed.auth_uri, installed.client_id, installed.client_secret, installed.project_id, installed.redirect_uris, installed.token_uri);
    }
  }]);

  return Credentials;
}();

exports.Credentials = Credentials;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDcmVkZW50aWFscyIsImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybCIsImF1dGhfdXJpIiwiY2xpZW50X2lkIiwiY2xpZW50X3NlY3JldCIsInByb2plY3RfaWQiLCJyZWRpcmVjdF91cmlzIiwidG9rZW5fdXJpIiwiX2F1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybCIsIl9hdXRoX3VyaSIsIl9jbGllbnRfaWQiLCJfY2xpZW50X3NlY3JldCIsIl9wcm9qZWN0X2lkIiwiX3JlZGlyZWN0X3VyaXMiLCJfdG9rZW5fdXJpIiwiY3JlZGVudGlhbHMiLCJpbnN0YWxsZWQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL21vZGVscy9jcmVkZW50aWFscy9jcmVkZW50aWFscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NyZWRlbnRpYWxzSW50ZXJmYWNlLCBJbnN0YWxsZWR9IGZyb20gXCJAL2RvbWFpbi9tb2RlbHMvY3JlZGVudGlhbHMvY3JlZGVudGlhbHNJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGNsYXNzIENyZWRlbnRpYWxzIGltcGxlbWVudHMgSW5zdGFsbGVkIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2F1dGhfdXJpOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NsaWVudF9pZDogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF9jbGllbnRfc2VjcmV0OiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3Byb2plY3RfaWQ6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVkaXJlY3RfdXJpczogc3RyaW5nW107XG4gIHByaXZhdGUgcmVhZG9ubHkgX3Rva2VuX3VyaTogc3RyaW5nO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsOiBzdHJpbmcsIGF1dGhfdXJpOiBzdHJpbmcsIGNsaWVudF9pZDogc3RyaW5nLCBjbGllbnRfc2VjcmV0OiBzdHJpbmcsIHByb2plY3RfaWQ6IHN0cmluZywgcmVkaXJlY3RfdXJpczogc3RyaW5nW10sIHRva2VuX3VyaTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsID0gYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsO1xuICAgIHRoaXMuX2F1dGhfdXJpID0gYXV0aF91cmk7XG4gICAgdGhpcy5fY2xpZW50X2lkID0gY2xpZW50X2lkO1xuICAgIHRoaXMuX2NsaWVudF9zZWNyZXQgPSBjbGllbnRfc2VjcmV0O1xuICAgIHRoaXMuX3Byb2plY3RfaWQgPSBwcm9qZWN0X2lkO1xuICAgIHRoaXMuX3JlZGlyZWN0X3VyaXMgPSByZWRpcmVjdF91cmlzO1xuICAgIHRoaXMuX3Rva2VuX3VyaSA9IHRva2VuX3VyaTtcbiAgfVxuXG4gIGdldCBhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsO1xuICB9XG5cbiAgZ2V0IGF1dGhfdXJpKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhfdXJpO1xuICB9XG5cbiAgZ2V0IGNsaWVudF9pZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRfaWQ7XG4gIH1cblxuICBnZXQgY2xpZW50X3NlY3JldCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRfc2VjcmV0O1xuICB9XG5cbiAgZ2V0IHByb2plY3RfaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdF9pZDtcbiAgfVxuXG4gIGdldCByZWRpcmVjdF91cmlzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3RfdXJpcztcbiAgfVxuXG4gIGdldCB0b2tlbl91cmkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdG9rZW5fdXJpO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKGNyZWRlbnRpYWxzOiBDcmVkZW50aWFsc0ludGVyZmFjZSk6IENyZWRlbnRpYWxzIHtcbiAgICBjb25zdCBpbnN0YWxsZWQgPSBjcmVkZW50aWFscy5pbnN0YWxsZWRcbiAgICByZXR1cm4gbmV3IENyZWRlbnRpYWxzKFxuICAgICAgaW5zdGFsbGVkLmF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybCxcbiAgICAgIGluc3RhbGxlZC5hdXRoX3VyaSxcbiAgICAgIGluc3RhbGxlZC5jbGllbnRfaWQsXG4gICAgICBpbnN0YWxsZWQuY2xpZW50X3NlY3JldCxcbiAgICAgIGluc3RhbGxlZC5wcm9qZWN0X2lkLFxuICAgICAgaW5zdGFsbGVkLnJlZGlyZWN0X3VyaXMsXG4gICAgICBpbnN0YWxsZWQudG9rZW5fdXJpXG4gICAgKVxuICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsVztFQVNYLHFCQUFvQkMsMkJBQXBCLEVBQXlEQyxRQUF6RCxFQUEyRUMsU0FBM0UsRUFBOEZDLGFBQTlGLEVBQXFIQyxVQUFySCxFQUF5SUMsYUFBekksRUFBa0tDLFNBQWxLLEVBQXFMO0lBQUE7O0lBQUE7O0lBQUE7O0lBQUE7O0lBQUE7O0lBQUE7O0lBQUE7O0lBQUE7O0lBQ25MLEtBQUtDLDRCQUFMLEdBQW9DUCwyQkFBcEM7SUFDQSxLQUFLUSxTQUFMLEdBQWlCUCxRQUFqQjtJQUNBLEtBQUtRLFVBQUwsR0FBa0JQLFNBQWxCO0lBQ0EsS0FBS1EsY0FBTCxHQUFzQlAsYUFBdEI7SUFDQSxLQUFLUSxXQUFMLEdBQW1CUCxVQUFuQjtJQUNBLEtBQUtRLGNBQUwsR0FBc0JQLGFBQXRCO0lBQ0EsS0FBS1EsVUFBTCxHQUFrQlAsU0FBbEI7RUFDRDs7OztTQUVELGVBQTBDO01BQ3hDLE9BQU8sS0FBS0MsNEJBQVo7SUFDRDs7O1NBRUQsZUFBdUI7TUFDckIsT0FBTyxLQUFLQyxTQUFaO0lBQ0Q7OztTQUVELGVBQXdCO01BQ3RCLE9BQU8sS0FBS0MsVUFBWjtJQUNEOzs7U0FFRCxlQUE0QjtNQUMxQixPQUFPLEtBQUtDLGNBQVo7SUFDRDs7O1NBRUQsZUFBeUI7TUFDdkIsT0FBTyxLQUFLQyxXQUFaO0lBQ0Q7OztTQUVELGVBQThCO01BQzVCLE9BQU8sS0FBS0MsY0FBWjtJQUNEOzs7U0FFRCxlQUF3QjtNQUN0QixPQUFPLEtBQUtDLFVBQVo7SUFDRDs7O1dBRUQsa0JBQWdCQyxXQUFoQixFQUFnRTtNQUM5RCxJQUFNQyxTQUFTLEdBQUdELFdBQVcsQ0FBQ0MsU0FBOUI7TUFDQSxPQUFPLElBQUloQixXQUFKLENBQ0xnQixTQUFTLENBQUNmLDJCQURMLEVBRUxlLFNBQVMsQ0FBQ2QsUUFGTCxFQUdMYyxTQUFTLENBQUNiLFNBSEwsRUFJTGEsU0FBUyxDQUFDWixhQUpMLEVBS0xZLFNBQVMsQ0FBQ1gsVUFMTCxFQU1MVyxTQUFTLENBQUNWLGFBTkwsRUFPTFUsU0FBUyxDQUFDVCxTQVBMLENBQVA7SUFTRCJ9