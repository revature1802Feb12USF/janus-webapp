webpackJsonp(["track-force.module"],{

/***/ "../../../../../src/app/portals/Track-Force/components/associate-list/associate-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.edit {\r\n  /* width: 4px; */\r\n  width: 4%;\r\n}\r\n\r\n.id {\r\n  /* width: 10px; */\r\n  width: 13%;\r\n}\r\n\r\n.first {\r\n  /* width: 10px; */\r\n  width: 10%;\r\n}\r\n\r\n.last {\r\n  /* width: 10px; */\r\n  width: 10%;\r\n}\r\n\r\n.status {\r\n  /* width: 20px; */\r\n  width: 20%;\r\n}\r\n\r\n.client {\r\n  /* width: 20%; */\r\n  width: 20%;\r\n}\r\n\r\n.batch {\r\n  /* width: 20px; */\r\n  width: 20%;\r\n}\r\n\r\n#info {\r\n  border-color: #c8c8c8;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n}\r\n\r\n.pre-scrollable {\r\n  max-height: 300px !important;\r\n}\r\n\r\nlabel {\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  margin-bottom: 5px;\r\n  font-weight: 700;\r\n}\r\n\r\n.well {\r\n  min-height: 20px;\r\n  padding: 19px;\r\n  margin-bottom: 20px;\r\n  background-color: #f5f5f5;\r\n  border: 1px solid #e3e3e3;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n}\r\n\r\n.well {\r\n  padding-top: 0px;\r\n}\r\n\r\n.TrackforceAssociateListTable {\r\n  font-size: 14px;\r\n}\r\n\r\n#info tr:nth-child(odd) {background-color: #FFFFFF}\r\n\r\n#info tr:nth-child(even) {background-color: #F9F9F9}\r\n\r\n.bk-color{\r\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n  font-size: 14px;\r\n  line-height: 1.42857143;\r\n  color: black;\r\n  background-color: #ebedea;\r\n}\r\n\r\n.max-dim{\r\nwidth: 100%!important;\r\nheight: 85vh!important;\r\npadding-top: 25px;\r\nmargin:0px;\r\n}\r\n\r\n.table-responsive {\r\n  height: 50vh;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/associate-list/associate-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"bk-color max-dim\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"form-group\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <label for=\"name\">Search by Text: </label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"searchByText\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <label for=\"mStatus\">Marketing Status: </label>\r\n          <select class=\"form-control\" id=\"mStatus\" [(ngModel)]=\"searchByStatus\">\r\n            <option label=\" \"></option>\r\n            <option value=\"MAPPED,  TRAINING\">MAPPED: TRAINING</option>\r\n            <option value=\"MAPPED,  RESERVED\">MAPPED: RESERVED</option>\r\n            <option value=\"MAPPED,  SELECTED\">MAPPED: SELECTED</option>\r\n            <option value=\"MAPPED,  CONFIRMED\">MAPPED: CONFIRMED</option>\r\n            <option value=\"MAPPED,  DEPLOYED\">MAPPED: DEPLOYED</option>\r\n            <option value=\"UNMAPPED,  TRAINING\">UNMAPPED: TRAINING</option>\r\n            <option value=\"UNMAPPED,  OPEN\">UNMAPPED: OPEN</option>\r\n            <option value=\"UNMAPPED,  SELECTED\">UNMAPPED: SELECTED</option>\r\n            <option value=\"UNMAPPED,  CONFIRMED\">UNMAPPED: CONFIRMED</option>\r\n            <option value=\"UNMAPPED,  DEPLOYED\">UNMAPPED: DEPLOYED</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <label for=\"curriculum\">Curriculum: </label>\r\n          <select class=\"form-control\" id=\"curriculum\" [(ngModel)]=\"searchByCurriculum\">\r\n            <option label=\"\"></option>\r\n            <option *ngFor=\"let curriculum of curriculums\" value=\"{{curriculum}}\">{{curriculum}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <label for=\"client\">Client: </label>\r\n          <select class=\"form-control\" id=\"client\" [(ngModel)]=\"searchByClient\">\r\n            <option label=\"\"></option>\r\n            <option selected=\"selected\">None</option>\r\n            <option *ngFor=\"let client of clients\">{{client.tfClientName}}</option>\r\n          </select>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"well\" style=\"position:relative;\">\r\n      <div class=\"table-responsive\">\r\n        \r\n        <div class=\"table-responsive pre-scrollable\" id=\"info\" style=\"overflow-x:none!important;\">\r\n          <table class=\"table table-striped table-hover table-bordered\" border-width=2px>\r\n                <thead class=\"pointer\">\r\n                    <tr>\r\n                      <th class=\"edit\">Edit</th>\r\n                      <th class=\"id\" (click)=\"sort('id')\">Associate ID</th>\r\n                      <th class=\"first\" (click)=\"sort('firstName')\">First Name</th>\r\n                      <th class=\"last\" (click)=\"sort('lastName')\">Last Name</th>\r\n                      <th class=\"status\" (click)=\"sort('marketingStatus')\">Marketing Status</th>\r\n                      <th class=\"client\" (click)=\"sort('client')\">Client Name</th>\r\n                      <th class=\"batch\" (click)=\"sort('batch')\">Batch Name</th>\r\n                    </tr>\r\n                  </thead>\r\n            <tr *ngFor=\"let associate of associates | filterByText:searchByText\">\r\n              <ng-container *ngIf=\"(searchByStatus === associate.marketingStatus || searchByStatus === '')\r\n              && (searchByClient === associate.client || searchByClient === '')\r\n              && (searchByCurriculum === associate.curriculumName || searchByCurriculum === '')\">\r\n                <td class=\"edit\">\r\n                  <input type=\"checkbox\" id={{associate.id}}>\r\n                </td>\r\n                <td>\r\n                  <a [routerLink]=\"['/TrackForce/form-comp', associate.id]\" class=\"id\">{{associate.id}}</a>\r\n                </td>\r\n                <td class=\"first\">{{associate.firstName}}</td>\r\n                <td class=\"last\">{{associate.lastName}}</td>\r\n                <td class=\"status\">{{associate.marketingStatus}}</td>\r\n                <td class=\"client\">{{associate.client}}</td>\r\n                <td class=\"batch\">\r\n                  <a [routerLink]=\"['/TrackForce/batch-details', associate.bid]\">{{associate.batchName}}</a>\r\n                </td>\r\n              </ng-container>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\" style=\"float:bottom;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <br>\r\n            <label for=\"uStatus\">Update by Marketing Status: </label>\r\n            <select class=\"form-control\" id=\"uStatus\" [(ngModel)]=\"updateStatus\">\r\n              <option label=\"\"></option>\r\n              <option value=\"1\">MAPPED: TRAINING</option>\r\n              <option value=\"2\">MAPPED: RESERVED</option>\r\n              <option value=\"3\">MAPPED: SELECTED</option>\r\n              <option value=\"4\">MAPPED: CONFIRMED</option>\r\n              <option value=\"5\">MAPPED: DEPLOYED</option>\r\n              <option value=\"6\">UNMAPPED: TRAINING</option>\r\n              <option value=\"7\">UNMAPPED: OPEN</option>\r\n              <option value=\"8\">UNMAPPED: SELECTED</option>\r\n              <option value=\"9\">UNMAPPED: CONFIRMED</option>\r\n              <option value=\"10\">UNMAPPED: DEPLOYED</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <br>\r\n            <label for=\"uclient\">Client: </label>\r\n            <select class=\"form-control\" id=\"uclient\" [(ngModel)]=\"updateClient\">\r\n              <option label=\"\"></option>\r\n              <option selected=\"selected\">None</option>\r\n              <option *ngFor=\"let client of clients\" [value]=\"client.id\">{{client.tfClientName}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n            <br>\r\n            <br>\r\n            <button id=\"submit\" (click)=\"updateAssociates()\" class=\"btn\" style=\"cursor: pointer;\">Update</button>\r\n          </div>\r\n          <div class=\"col-sm-2\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/associate-list/associate-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssociateListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_associates_service_associates_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/associates-service/associates-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service_request_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/request-service/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__decorators_auto_unsubscribe_decorator__ = __webpack_require__("../../../../../src/app/portals/Track-Force/decorators/auto-unsubscribe.decorator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Component for the Associate List page
 * @author Alex, Xavier
 */
var AssociateListComponent = (function () {
    function AssociateListComponent(associateService, rs) {
        this.associateService = associateService;
        this.rs = rs;
        // used for filtering
        this.searchByStatus = '';
        this.searchByClient = '';
        this.searchByText = '';
        this.searchByCurriculum = '';
        // status/client to be updated
        this.updateShow = false;
        this.updateStatus = '';
        this.updated = false;
        // used for ordering of rows
        this.desc = false;
        this.sortedColumn = '';
        this.curriculums = new Set();
    }
    AssociateListComponent.prototype.ngOnInit = function () {
        // get current url
        this.getAllAssociates();
        this.getClientNames();
        var url = window.location.href.split('/');
        if (url.length === 8) {
            if (url[4] === 'client') {
                this.searchByClient = url[5];
            }
            else if (url[4] === 'curriculum') {
                this.searchByCurriculum = url[5];
            }
            this.searchByStatus = url[6].toUpperCase() + ',  ' + url[7].toUpperCase();
        }
    };
    /**
     * Set our array of all associates
     */
    AssociateListComponent.prototype.getAllAssociates = function () {
        var _this = this;
        var self = this;
        this.rs.getAssociates().subscribe(function (data) {
            _this.associates = data;
            for (var _i = 0, _a = _this.associates; _i < _a.length; _i++) {
                var associate = _a[_i];
                _this.curriculums.add(associate.curriculumName);
                if (associate.batchName === 'null') {
                    associate.batchName = 'None';
                }
            }
            _this.curriculums.delete('');
            _this.curriculums.delete('null');
            self.sort('id');
            console.log(data);
        });
    };
    /**
     * Fetch the client names
     */
    AssociateListComponent.prototype.getClientNames = function () {
        var _this = this;
        this.rs.getClients().subscribe(function (data) {
            _this.clients = data;
        });
    };
    /**
     * Sort the array of clients based on a given input.
     * @param property to be sorted by
     */
    AssociateListComponent.prototype.sort = function (property) {
        this.desc = !this.desc;
        var direction;
        if (property !== this.sortedColumn || this.updated) {
            // set ascending or descending
            direction = 1;
        }
        else {
            direction = this.desc ? 1 : -1;
        }
        this.sortedColumn = property;
        if (this.updated) {
            this.updated = false;
        }
        // sort the elements
        this.associates.sort(function (a, b) {
            if (a[property] < b[property]) {
                return -1 * direction;
            }
            else if (a[property] > b[property]) {
                return 1 * direction;
            }
            else {
                return 0;
            }
        });
    };
    /**
     * Bulk edit feature to update associate's statuses and clients.
     */
    AssociateListComponent.prototype.updateAssociates = function () {
        var ids = [];
        var i = 1;
        var self = this;
        for (i; i <= this.associates.length; i++) {
            var check = document.getElementById('' + i);
            if (check != null && check.checked) {
                ids.push(i);
            }
        }
        this.associateService.updateAssociates(ids, this.updateStatus, this.updateClient).subscribe(function (data) {
            self.getAllAssociates();
            self.updated = true;
        });
    };
    return AssociateListComponent;
}());
AssociateListComponent = __decorate([
    __WEBPACK_IMPORTED_MODULE_3__decorators_auto_unsubscribe_decorator__["a" /* AutoUnsubscribe */],
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-associate-list',
        template: __webpack_require__("../../../../../src/app/portals/Track-Force/components/associate-list/associate-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portals/Track-Force/components/associate-list/associate-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_associates_service_associates_service__["a" /* AssociateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_associates_service_associates_service__["a" /* AssociateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_request_service_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_request_service_request_service__["a" /* RequestService */]) === "function" && _b || Object])
], AssociateListComponent);

var _a, _b;
//# sourceMappingURL=associate-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/associate-view/associate-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pointer {\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/associate-view/associate-view.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default custom-nav\">\r\n  <div class=\"container-fluid\">\r\n          <div class=\"navbar-header\">\r\n                  <a class=\"navbar-brand\"><img src=\"../../../assets/logo.png\" height=\"35\" width=\"100\"></a>\r\n          </div>\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n                  <li class=\"pointer\"><a (click)=\"logout()\">Logout</a></li>\r\n          </ul>\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n                  <li><a>Welcome, {{ associate.firstName }} {{ associate.lastName}}</a></li>\r\n      </ul>\r\n  </div>\r\n</nav>\r\n<div>\r\n<h2> Batch: {{ associate.batchName }}</h2>\r\n<h2> Marketing Status: {{ associate.marketingStatus }}</h2>\r\n<h2> End Client: {{ associate.endClientName }}</h2>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/associate-view/associate-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssociateViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_associates_service_associates_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/associates-service/associates-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service_authentication_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/authentication-service/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__decorators_auto_unsubscribe_decorator__ = __webpack_require__("../../../../../src/app/portals/Track-Force/decorators/auto-unsubscribe.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_associate_model__ = __webpack_require__("../../../../../src/app/portals/Track-Force/models/associate.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
*@author Michael Tseng
*
*@description This is the view for associates only
*
*/
var AssociateViewComponent = (function () {
    function AssociateViewComponent(associateService, authService, activated) {
        this.associateService = associateService;
        this.authService = authService;
        this.activated = activated;
        this.associate = new __WEBPACK_IMPORTED_MODULE_4__models_associate_model__["a" /* Associate */]();
    }
    AssociateViewComponent.prototype.ngOnInit = function () {
        // gets the associate id from the path
        // the '+' coerces the parameter into a number
        var id = +this.activated.snapshot.paramMap.get('id');
        this.getAssociate(id);
    };
    /**
    *@description Wraps the associate service to get associate info
    *
    *@param {number} id
    *the id number of the associate
    */
    AssociateViewComponent.prototype.getAssociate = function (id) {
        var _this = this;
        this.associateService.getAssociate(id).subscribe(function (data) {
            _this.associate = data;
        }, function (err) {
            console.log(err);
        });
    };
    /**
    *@description
    * for logging out the associates
    * clears the localStorage
    */
    AssociateViewComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return AssociateViewComponent;
}());
AssociateViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-associate-view',
        template: __webpack_require__("../../../../../src/app/portals/Track-Force/components/associate-view/associate-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portals/Track-Force/components/associate-view/associate-view.component.css")]
    }),
    __WEBPACK_IMPORTED_MODULE_3__decorators_auto_unsubscribe_decorator__["a" /* AutoUnsubscribe */],
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_associates_service_associates_service__["a" /* AssociateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_associates_service_associates_service__["a" /* AssociateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"]) === "function" && _c || Object])
], AssociateViewComponent);

var _a, _b, _c;
//# sourceMappingURL=associate-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/batch-details/batch-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".data-status {\r\n  text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  table {\r\n    width: 100% !important;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n  }\r\n}\r\n\r\nthead {\r\n  display: block;\r\n  overflow-y: scroll;\r\n}\r\n\r\ntbody {\r\n  display: block;\r\n  overflow-y: scroll;\r\n  max-height: 350px !important;\r\n}\r\n\r\n.margintop {\r\n  margin-top: 5%;\r\n}\r\n\r\n.container {\r\n  padding-top: 35px;\r\n  padding-bottom: 35px;\r\n}\r\n\r\n.bk-color{\r\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n  font-size: 14px;\r\n  line-height: 1.42857143;\r\n  color: black;\r\n  background-color: #ebedea;\r\n}\r\n\r\n.max-dim{\r\nwidth: 100%!important;\r\nheight: 100vh!important;\r\npadding-top: 25px;\r\nmargin:0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/batch-details/batch-details.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"bk-color max-dim\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 margintop\">\r\n        <canvas *ngIf=\"isDataReady && !isDataEmpty\" baseChart id=\"bar\"\r\n                [chartType]=\"chartType\"\r\n                [datasets]=\"dataSets\"\r\n                [labels]=\"statusNames\"\r\n                [options]=\"options\"\r\n                [colors]=\"mappedColors\">\r\n        </canvas>\r\n        <h3 class=\"data-status\" *ngIf=\"isDataReady && isDataEmpty\">\r\n          No Associates Found\r\n        </h3>\r\n        <h3 class=\"data-status\" *ngIf=\"!isDataReady\">\r\n          Loading ...\r\n        </h3>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <h3>Associates</h3>\r\n        <table class=\"table table-striped table-hover table-bordered\">\r\n          <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Marketing Status</th>\r\n            <th>Client</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <ng-container *ngIf=\"associates\">\r\n            <tr *ngFor=\"let associate of associates | orderBy:'id'\">\r\n              <td><a href=\"#/TrackForce/form-comp/{{associate.id}}\">{{associate.id}}</a></td>\r\n              <td>{{associate.firstName}}</td>\r\n              <td>{{associate.lastName}}</td>\r\n              <td>{{associate.marketingStatus}}</td>\r\n              <td>{{associate.client}}</td>\r\n            </tr>\r\n          </ng-container>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/batch-details/batch-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BarChartDataSet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_batch_service_batch_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/batch-service/batch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__decorators_auto_unsubscribe_decorator__ = __webpack_require__("../../../../../src/app/portals/Track-Force/decorators/auto-unsubscribe.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_theme_constants__ = __webpack_require__("../../../../../src/app/portals/Track-Force/constants/theme.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BarChartDataSet = (function () {
    function BarChartDataSet(label) {
        this.label = label;
        this.data = [];
    }
    return BarChartDataSet;
}());

var BatchDetailsComponent = (function () {
    function BatchDetailsComponent(route, batchService) {
        this.route = route;
        this.batchService = batchService;
        this.chartType = 'bar';
        this.options = {
            display: true,
            position: 'right',
            scaleShowVerticalLines: false,
            responsive: true,
            legend: { position: 'right' },
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            },
            tooltips: {
                mode: 'label',
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data.datasets[tooltipItem.datasetIndex].label + ': ' + tooltipItem.yLabel;
                    }
                }
            }
        };
        this.dataSets = [{ data: [0], label: 'Mapped' }, { data: [0], label: 'Unmapped' }, { data: [0], label: 'Other' }];
        this.isDataReady = false;
        this.isDataEmpty = false;
        this.mappedColors = __WEBPACK_IMPORTED_MODULE_4__constants_theme_constants__["a" /* ThemeConstants */].BATCH_DETAILS_COLORS;
    }
    BatchDetailsComponent.prototype.ngOnInit = function () {
        this.getMapStatusBatch();
    };
    /**
     * given batch id, fetches the mapped vs unmapped statistics
     */
    BatchDetailsComponent.prototype.getMapStatusBatch = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var batchId = +params['id'];
            console.log(batchId);
            _this.isDataReady = false;
            _this.batchService.getAssociatesForBatch(batchId)
                .subscribe(function (data) {
                _this.associates = data;
                console.log('associates', _this.associates);
                var statusMap = new Map();
                statusMap.set(1, 0);
                statusMap.set(2, 0);
                statusMap.set(3, 0);
                statusMap.set(4, 0);
                statusMap.set(5, 0);
                statusMap.set(6, 0);
                statusMap.set(7, 0);
                statusMap.set(8, 0);
                statusMap.set(9, 0);
                statusMap.set(10, 0);
                statusMap.set(11, 0);
                statusMap.set(12, 0);
                for (var _i = 0, _a = _this.associates; _i < _a.length; _i++) {
                    var assoc = _a[_i];
                    var statusCount = statusMap.get(assoc.msid);
                    if (statusCount === undefined) {
                        statusCount = -1;
                    }
                    statusMap.set(assoc.msid, statusCount + 1);
                }
                var mappedCount = statusMap.get(1) + statusMap.get(2) + statusMap.get(3) + statusMap.get(4) + statusMap.get(5);
                var unmappedCount = statusMap.get(6) + statusMap.get(7) + statusMap.get(8) + statusMap.get(9) + statusMap.get(10);
                var dataSets = [
                    new BarChartDataSet('Mapped'),
                    new BarChartDataSet('Unmapped'),
                    new BarChartDataSet('Other')
                ];
                _this.dataSets = [{
                        data: [mappedCount],
                        label: 'Mapped'
                    },
                    {
                        data: [unmappedCount],
                        label: 'Unmapped'
                    },
                    {
                        data: [statusMap.get(11) + statusMap.get(12)],
                        label: 'Other'
                    }
                ];
                console.log(_this.dataSets);
                _this.isDataEmpty = _this.associates.length === 0;
                _this.isDataReady = true;
                console.log(statusMap);
            }, console.log);
        });
    };
    return BatchDetailsComponent;
}());
BatchDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-batch-details',
        template: __webpack_require__("../../../../../src/app/portals/Track-Force/components/batch-details/batch-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portals/Track-Force/components/batch-details/batch-details.component.css")]
    }),
    __WEBPACK_IMPORTED_MODULE_3__decorators_auto_unsubscribe_decorator__["a" /* AutoUnsubscribe */],
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_batch_service_batch_service__["a" /* BatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_batch_service_batch_service__["a" /* BatchService */]) === "function" && _b || Object])
], BatchDetailsComponent);

var _a, _b;
//# sourceMappingURL=batch-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/batch-list/batch-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "canvas {\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n\r\n\r\nform {\r\n  text-align: center;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n\r\nthead {\r\n  display: block;\r\n  overflow-y: scroll;\r\n}\r\n\r\n\r\ntbody {\r\n  /* width: max-content; */\r\n  display: block;\r\n  overflow-y: scroll;\r\n  max-height: 350px !important;\r\n}\r\n\r\n\r\n.bk-color{\r\n\tfont-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n\tfont-size: 14px;\r\n\tline-height: 1.42857143;\r\n\tcolor: black;\r\n\tbackground-color: #ebedea;\r\n }\r\n\r\n\r\n.max-dim{\r\n  width: 100%!important;\r\n  height: 100%!important;\r\n  padding-top: 25px;\r\n  margin:0px;\r\n}\r\n\r\n\r\n.data-status {\r\n  text-align: center;\r\n}\r\n\r\n\r\n.table-row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n}\r\n\r\n\r\n.mcolumn.left {\r\n  margin-left: 0px;\r\n  margin-bottom: 50px;\r\n  padding-left: 0px;\r\n}\r\n\r\n\r\n.mcolumn.right {\r\n  margin-right: 0px;\r\n  padding-right: 0px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n\r\nform > div {\r\n  display: inline-block;\r\n}\r\n\r\n\r\n.name-column {\r\n  width: 50%;\r\n}\r\n\r\n\r\n.date-column {\r\n  width: 25%;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .table-width-adjust {\r\n    width: 100% !important;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n  }\r\n}\r\n\r\n\r\n.max-width {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/batch-list/batch-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- @Author Princewill Ibe -->\r\n<app-navbar></app-navbar>\r\n<div class=\"bk-color max-dim\">\r\n<div class=\"container table-width-adjust\">\r\n  <div>\r\n    <title class=\"text-center text-primary\">Batch List</title>\r\n  </div>\r\n  <div class=\"row \">\r\n\r\n    <div class=\"col-lg-5 col-md-12 mcolumn left\">\r\n      <h3>All Batches</h3>\r\n      <table class=\"table table-striped table-hover table-bordered\">\r\n        <thead>\r\n        <tr class=\"max-width\">\r\n          <th class=\"name-column\">Batch Name</th>\r\n          <th class=\"date-column\">Start Date</th>\r\n          <th class=\"date-column\">End Date</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <ng-container *ngIf=\"dataReady\">\r\n          <tr *ngFor=\"let batch of batches\" class=\"max-width\">\r\n            <td class=\"name-column\"><a routerLink=\"/TrackForce/batch-details/{{batch.id}}\">{{batch.batchName}}</a></td>\r\n            <td class=\"date-column\">{{batch.startDate | date:'MM/dd/yyyy'}}</td>\r\n            <td class=\"date-column\">{{batch.endDate| date:'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </ng-container>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"col-lg-7 col-md-12 mcolumn right\">\r\n      <h3>Select Dates:</h3>\r\n      <form>\r\n        <div>\r\n          <label for=\"startDate\">From:</label>\r\n          <input type=\"date\" [(ngModel)]=\"startDate\" id=\"startDate\" name=\"startDate\" [max]=\"endDate\"/>\r\n        </div>\r\n        <div>\r\n          <label for=\"endDate\">To:</label>\r\n          <input type=\"date\" [(ngModel)]=\"endDate\" id=\"endDate\" name=\"startDate\" [min]=\"startDate\"/>\r\n        </div>\r\n        <div>\r\n          <input type=\"submit\" value=\"Submit\" (click)=\"applySelectedRange()\"/>\r\n        </div>\r\n      </form>\r\n      <ng-container *ngIf=\"dataReady && !dataEmpty\">\r\n        <canvas baseChart\r\n                id=\"pie\" class=\"chart chart-pie\"\r\n                [data]=\"curriculumCounts\"\r\n                [labels]=\"curriculumNames\"\r\n                [chartType]=\"pieChartType\"\r\n                [colors]=\"batchColors\"\r\n                [options]=\"chartOptions\">\r\n        </canvas>\r\n      </ng-container>\r\n      <h3 class=\"data-status\" *ngIf=\"dataReady && dataEmpty\">\r\n        No Batch Found\r\n      </h3>\r\n      <h3 class=\"data-status\" *ngIf=\"!dataReady\">\r\n        Loading ...\r\n      </h3>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/batch-list/batch-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_batch_service_batch_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/batch-service/batch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_theme_constants__ = __webpack_require__("../../../../../src/app/portals/Track-Force/constants/theme.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__decorators_auto_unsubscribe_decorator__ = __webpack_require__("../../../../../src/app/portals/Track-Force/decorators/auto-unsubscribe.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_ng2_charts_options_model__ = __webpack_require__("../../../../../src/app/portals/Track-Force/models/ng2-charts-options.model.ts");
/** @Author Princewill Ibe **/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// TODO: LABELS SHOULD PROPERLY WRAP
/**
 * @class BatchListComponent
 * @description This component is the batch list page
 *        to get all batches and show meaningful information
 */
var BatchListComponent = (function () {
    function BatchListComponent(batchService) {
        this.batchService = batchService;
        this.pieChartType = 'pie';
        this.dataReady = false;
        this.dataEmpty = false;
        this.batchColors = __WEBPACK_IMPORTED_MODULE_2__constants_theme_constants__["a" /* ThemeConstants */].BATCH_COLORS;
        this.chartOptions = __WEBPACK_IMPORTED_MODULE_4__models_ng2_charts_options_model__["a" /* ChartOptions */].createOptionsSpacing(new __WEBPACK_IMPORTED_MODULE_4__models_ng2_charts_options_model__["b" /* SideValues */](-100, 0, 0, 0), new __WEBPACK_IMPORTED_MODULE_4__models_ng2_charts_options_model__["b" /* SideValues */](0, 0, 0, 0), 'right', false, false);
    }
    /**
     * load default batches on initialization
     */
    BatchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var startTime = Date.now();
        this.dataReady = false;
        this.batchService.getDefaultBatches().subscribe(function (batches) {
            _this.batches = batches;
            _this.updateCountPerCurriculum();
            _this.dataReady = true;
            var elapsed = Date.now() - startTime;
            console.log('Time', elapsed / 1000.0);
        }, console.error);
    };
    /**
     * after user selects date range, this handles updating the data,
     * and the corresponding graph accordingly
     */
    BatchListComponent.prototype.applySelectedRange = function () {
        if (this.startDate && this.endDate) {
            this.updateBatches();
        }
    };
    /**
     * @function updateBatches
     * @memberof BatchListComponent
     * @description This function will return a JavaScript object that contains
     *              all of the batches within startDate and endDate
     */
    BatchListComponent.prototype.updateBatches = function () {
        var _this = this;
        this.dataReady = false;
        this.batchService.getBatchesByDate(new Date(this.startDate), new Date(this.endDate)).subscribe(function (batches) {
            // they serve as flags in template
            _this.dataReady = false;
            _this.batches = batches.sort(function (a, b) {
                if (a.startDate < b.startDate) {
                    return -1;
                }
                else if (a.startDate > b.startDate) {
                    return 1;
                }
                return 0;
            });
            _this.updateCountPerCurriculum();
            _this.dataReady = true;
        }, console.error);
    };
    /**
     * @function updateCountPerCurriculum
     * @memberof BatchListComponent
     * @description This function will return an object that contains
     *              all of the batches within startDate and endDate
     *
     */
    BatchListComponent.prototype.updateCountPerCurriculum = function () {
        this.curriculumNames = this.curriculumCounts = null;
        var curriculumCountsMap = new Map();
        this.dataEmpty = this.batches.length === 0;
        for (var _i = 0, _a = this.batches; _i < _a.length; _i++) {
            var batch = _a[_i];
            var count = curriculumCountsMap.get(batch.curriculumName);
            if (count === undefined) {
                count = 0;
            }
            curriculumCountsMap.set(batch.curriculumName, count + 1);
        }
        // note: for angular/ng2-charts to recognize the changes to chart data, the object reference has to change
        this.curriculumNames = Array.from(curriculumCountsMap.keys());
        this.curriculumCounts = Array.from(curriculumCountsMap.values());
        console.log('names', this.curriculumNames, 'counts', this.curriculumCounts);
    };
    return BatchListComponent;
}());
BatchListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-batch-list',
        template: __webpack_require__("../../../../../src/app/portals/Track-Force/components/batch-list/batch-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portals/Track-Force/components/batch-list/batch-list.component.css")]
    }),
    __WEBPACK_IMPORTED_MODULE_3__decorators_auto_unsubscribe_decorator__["a" /* AutoUnsubscribe */],
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_batch_service_batch_service__["a" /* BatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_batch_service_batch_service__["a" /* BatchService */]) === "function" && _a || Object])
], BatchListComponent);

var _a;
//# sourceMappingURL=batch-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/client-list/client-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".max-dim{\r\n    width: 100%!important;\r\n    height: 100%!important;\r\n    padding: 0px;\r\n\tmargin:0px;\r\n}\r\n\r\n#clients-list{\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.custom-btn{\r\n\tmargin-bottom: 20px;\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n.h1, h1 {\r\n   font-size: 36px;\r\n}\r\n\r\nli{\r\n\tpadding: 5px;\t\r\n\tmargin-top: 0px;\r\n}\r\n\r\nul{\r\n\tmargin: auto;\r\n\tmargin-top: 0px;\r\n\tpadding: 0;\r\n\tlist-style-type: none;\r\n}\r\n\r\n.well[_ngcontent-c6] {\r\n\tpadding-top: 0px;\r\n }\r\n\r\n.well[_ngcontent-c1] {\r\n\tpadding-top: 0px;\r\n }\r\n\r\n* {\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n }\r\n\r\n.well {\r\n\tmin-height: 20px;\r\n\tpadding: 19px;\r\n\tmargin-bottom: 20px;\r\n\tbackground-color: #f5f5f5;\r\n\tborder: 1px solid #e3e3e3;\r\n\tborder-radius: 4px;\r\n\r\n\t-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n\r\n\t        box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n }\r\n\r\n.client-name{\r\n\tcolor: #757575;\r\n}\r\n\r\n:after, :before {\r\n   -webkit-box-sizing: border-box;\r\n           box-sizing: border-box;\r\n}\r\n\r\n.client-list-page{\r\n\tbackground-color: #ebedea;\r\n\tpadding: 20px;\r\n}\r\n\r\n.bk-color{\r\n\tfont-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n\tfont-size: 14px;\r\n\tline-height: 1.42857143;\r\n\tcolor: black;\r\n\tbackground-color: #ebedea;\r\n }\r\n\r\n.custom-btn[_ngcontent-c1] {\r\n   margin-bottom: 20px;\r\n   background-color: #f5f5f5;\r\n}\r\n\r\n.h3, h3 {\r\n   font-size: 24px;\r\n}\r\n\r\n.h1, .h2, .h3, h1, h2, h3 {\r\n   margin-top: 20px;\r\n   margin-bottom: 10px;\r\n}\r\n\r\n.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\r\n   font-family: inherit;\r\n   font-weight: 500;\r\n   line-height: 1.1;\r\n   color: inherit;\r\n}\r\n\r\nh1 {\r\n\tdisplay: block;\r\n\tmargin: .67em 0;\r\n\t-webkit-margin-before: 0.67em;\r\n\t-webkit-margin-after: 0.67em;\r\n\t-webkit-margin-start: 0px;\r\n\t-webkit-margin-end: 0px;\r\n }\r\n\r\nh3 {\r\n   display: block;\r\n   -webkit-margin-before: 1em;\r\n   -webkit-margin-after: 1em;\r\n   -webkit-margin-start: 0px;\r\n   -webkit-margin-end: 0px;\r\n}\r\n\r\n.client-name:hover{\r\n\tcolor: #121212;\r\n\tcursor: pointer;\r\n\ttext-decoration: underline;\r\n}\r\n\r\n::before{\r\n\tdisplay: table;\r\n\tcontent: \" \";\r\n }\r\n\r\n::after{\r\n   clear: both;\r\n   display: table;\r\n   content: \" \";\r\n}\r\n\r\n.btn {\r\n\tdisplay: inline-block;\r\n\tpadding: 6px 12px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tline-height: 1.42857143;\r\n\ttext-align: center;\r\n\twhite-space: nowrap;\r\n\tvertical-align: middle;\r\n\t-ms-touch-action: manipulation;\r\n\t    touch-action: manipulation;\r\n\tcursor: pointer;\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t    -ms-user-select: none;\r\n\t        user-select: none;\r\n\tbackground-image: none;\r\n\tborder: 1px solid transparent;\r\n\tborder-radius: 4px;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/client-list/client-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"bk-color max-dim\">\r\n  <div class=\"container\">\r\n  <div class=\"row align-items-center\">\r\n    <!-- Clients List column -->\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" [(ngModel)]=\"searchName\" (keyup)=\"getAllClients()\" class=\"form-control\" id=\"clientSearch\" placeholder=\"Search by client name...\">\r\n      </div>\r\n      <h3>Clients</h3>\r\n      <button (click)=\"getTotalChartData()\" class=\"btn custom-btn\">View Data for All Clients</button>\r\n      <div id=\"clients-list-well\" class=\"well\">\r\n        <ul id=\"clients-list\">\r\n          <!-- populate list of company names -->\r\n          <li *ngFor=\"let clientName of clientNames | searchFilter : searchName\" (click)=\"getOneClient(clientName)\">\r\n            <span class=\"client-name\">{{clientName}}</span>\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- end of Client List Column -->\r\n    <!-- Display Client name and bar chart regarding client -->\r\n    <div class=\"col-md-9\">\r\n      <h1>{{selectedCompany}}</h1>\r\n      <canvas baseChart id=\"bar-chart\" class=\"chart chart-bar\" \r\n      *ngIf=\"barChartLabel && barChartLabel.length && barChartData && barChartData.length\"\r\n      [datasets] = \"barChartData\"\r\n      [chartType]=\"barChartType\"\r\n      [labels]=\"barChartLabel\"\r\n      [legend]=\"barChartLegend\"\r\n      [options]=\"barChartOptions\"\r\n      [colors]=\"barChartColors\"\r\n       ></canvas>\r\n     <!-- chart-series=\"clientSeries\" -->\r\n    </div>\r\n    <!-- end of col-md-9 -->\r\n</div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/client-list/client-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service_request_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/request-service/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_selected_status_constants__ = __webpack_require__("../../../../../src/app/portals/Track-Force/constants/selected-status.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_theme_constants__ = __webpack_require__("../../../../../src/app/portals/Track-Force/constants/theme.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * @author Han Jung
 * @description Translation of clientCtrl.js
 */
var ClientListComponent = (function () {
    function ClientListComponent(rs) {
        this.rs = rs;
        this.clientNames = [];
        // chart variable
        this.barChartLabel = __WEBPACK_IMPORTED_MODULE_2__constants_selected_status_constants__["a" /* SelectedStatusConstants */].CLIENT_LABELS;
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartColors = __WEBPACK_IMPORTED_MODULE_3__constants_theme_constants__["a" /* ThemeConstants */].BAR_COLORS;
        this.barChartOptions = {
            display: true,
            position: 'right',
            scaleShowVerticalLines: false,
            responsive: true,
            legend: { position: 'right' },
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            },
            tooltips: {
                mode: 'label',
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data.datasets[tooltipItem.datasetIndex].label + ': ' + tooltipItem.yLabel;
                    }
                }
            }
        };
        // data values initialize to 1 for animation
        this.barChartData = [{ data: [0, 0, 0, 0], label: 'Mapped' }, { data: [0, 0, 0, 0], label: 'Unmapped' }];
    }
    ClientListComponent.prototype.ngOnInit = function () {
        this.getAllClients();
        this.getTotalChartData();
    };
    // get client names from data and push to clientNames string array
    ClientListComponent.prototype.getAllClients = function () {
        var _this = this;
        var self = this;
        this.rs.getClients()
            .subscribe(function (clientNames) {
            console.log(clientNames);
            // save array of object Client
            _this.clientInfo = clientNames;
            // clear name list to reload list and run through filter
            _this.clientNames.length = 0;
            // push list of names to an array
            for (var _i = 0, clientNames_1 = clientNames; _i < clientNames_1.length; _i++) {
                var client = clientNames_1[_i];
                // Hide clients who do not have associates
                var stats = client.stats;
                if (stats.trainingMapped > 0 || stats.trainingUnmapped > 0 ||
                    stats.reservedMapped > 0 || stats.openUnmapped > 0 ||
                    stats.selectedMapped > 0 || stats.selectedUnmapped > 0 ||
                    stats.confirmedMapped > 0 || stats.confirmedUnmapped > 0) {
                    _this.clientNames.push(client.tfClientName);
                }
            }
        }, function (err) {
            console.log('Failed grabbing names');
        });
    };
    ClientListComponent.prototype.getTotalChartData = function () {
        var _this = this;
        this.rs.getTotals()
            .subscribe(
        // asign response to this.clients
        function (client) {
            console.log();
            _this.client$ = client;
            _this.selectedCompany = _this.client$.name;
            _this.barChartData = [
                {
                    data: [_this.client$.trainingMapped, _this.client$.reservedMapped, _this.client$.selectedMapped, _this.client$.confirmedMapped],
                    label: 'Mapped',
                },
                {
                    data: [_this.client$.trainingUnmapped, _this.client$.openUnmapped, _this.client$.selectedUnmapped, _this.client$.confirmedUnmapped],
                    label: 'Unmapped',
                }
            ];
            console.log(_this.barChartData);
        }, function (err) {
            console.log('Failed grabbing clients');
        });
    };
    // get client name and find id to request client information
    ClientListComponent.prototype.getOneClient = function (name) {
        var _this = this;
        this.selectedCompany = name;
        var oneClient = this.clientInfo.find(function (item) { return item['tfClientName'] === name; });
        this.rs.getOneClient(oneClient.id)
            .subscribe(function (client) {
            _this.client$ = client;
            _this.barChartData = [
                {
                    data: [_this.client$.trainingMapped, _this.client$.reservedMapped, _this.client$.selectedMapped, _this.client$.confirmedMapped],
                    label: 'Mapped',
                },
                {
                    data: [_this.client$.trainingUnmapped, _this.client$.openUnmapped, _this.client$.selectedUnmapped, _this.client$.confirmedUnmapped],
                    label: 'Unmapped',
                }
            ];
            console.log(_this.barChartData);
        }, function (err) {
            console.log('Failed grabbing client');
        });
    };
    return ClientListComponent;
}());
ClientListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-client-list',
        template: __webpack_require__("../../../../../src/app/portals/Track-Force/components/client-list/client-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portals/Track-Force/components/client-list/client-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], ClientListComponent);

var _a;
//# sourceMappingURL=client-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/client-mapped/client-mapped.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/client-mapped/client-mapped.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<script src=\"node_modules/chart.js/src/chart.js\"></script>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n     <button (click)=\"changeChartType('bar')\" class=\"btn btn-default\">Bar Chart</button>\r\n     <button (click)=\"changeChartType('pie')\" class=\"btn btn-default\">Pie Chart</button>\r\n     <button (click)=\"changeChartType('polarArea')\" class=\"btn btn-default\">Polar Chart</button>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <!-- Display chart -->\r\n  <div class=\"col-md-10\">\r\n    <canvas id=\"the_graph\" baseChart *ngIf=\"clientMappedData && clientMappedLabels\"\r\n          [data]=\"clientMappedData\"\r\n          [labels]=\"clientMappedLabels\"\r\n          [chartType]=\"chartType\"\r\n          [options]=\"chartOptions\"\r\n          [colors]=\"clientTheme\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\">\r\n    </canvas>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/client-mapped/client-mapped.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientMappedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_mapped_service_client_mapped_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/client-mapped-service/client-mapped-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_theme_constants__ = __webpack_require__("../../../../../src/app/portals/Track-Force/constants/theme.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__decorators_auto_unsubscribe_decorator__ = __webpack_require__("../../../../../src/app/portals/Track-Force/decorators/auto-unsubscribe.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Used for colors in charts


var ClientMappedComponent = (function () {
    /*
    ============================
    Methods
    ============================
    */
    function ClientMappedComponent(clientMappedService, rout) {
        this.clientMappedService = clientMappedService;
        this.rout = rout;
        /**
         * @description colors used by template for charts.
         * Note: The ThemeConstants.CLIENT_COLORS is currently an array of length 8.
         * For every element of 'data' above a count of 8, the chart color for that data item will be grey.
         */
        this.clientTheme = __WEBPACK_IMPORTED_MODULE_2__constants_theme_constants__["a" /* ThemeConstants */].CLIENT_COLORS;
        this.chartOptions = {
            xAxes: [{ ticks: { autoSkip: false } }], scales: { yAxes: [{ ticks: { min: 0 } }] },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: this.selectedStatus,
                fontSize: 24,
                fontColor: '#121212'
            },
            responsive: true,
            responsiveAnimationDuration: 1000
        };
    }
    // Run on initialization
    ClientMappedComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Fetch the statusId from the URL. Used to fetch and display data
        // For now, parse out the desired number
        // To-Do: Use "Activated Routes" to fetch the value
        this.statusID = window.location.href.split('client-mapped/')[1];
        this.statusID = Number(this.statusID) + 1; // Adjust the statud id. Values passed in are off by 1.
        // Initialize 'selectedStatus' to correct string.
        if (Number(this.statusID) === 1) {
            this.selectedStatus = 'Training';
        }
        else if (Number(this.statusID) === 2) {
            this.selectedStatus = 'Reserved';
        }
        else if (Number(this.statusID) === 3) {
            this.selectedStatus = 'Selected';
        }
        else if (Number(this.statusID) === 4) {
            this.selectedStatus = 'Confirmed';
        }
        // Initialize the title
        this.chartOptions.title.text = this.selectedStatus;
        // Initialize the chart to type 'bar'
        this.changeChartType('bar');
        // HTTP request to fetch data. See client-mapped-service
        this.clientMappedService.getAssociatesByStatus(this.statusID).subscribe(function (data) {
            /*
            Store the data from the http request in temporary objects.
            In order for the2 property binding refresh on clientMappedData
            and clientMappedLabels to take affect, they need to be set
            equal to an object. (i.e. clientMappedData.push(...)and
            clientMappedLabels.push(...) does not trigger property binding
            and does not display data).
            */
            var temp_clientMappedLabels = [];
            var temp_clientMappedData = [];
            console.log(data);
            // Loop over 'data' and extract fetched information
            for (var d in data) {
                if (data.hasOwnProperty(d)) {
                    var temp_name = data[d].name;
                    var temp_count = data[d].count;
                    if (temp_count > 0) {
                        // Check if the fetched name is empty
                        if (data[d].name === '') {
                            temp_clientMappedLabels.push('Empty Name');
                        }
                        else {
                            temp_clientMappedLabels.push(data[d].name);
                        }
                        temp_clientMappedData.push(data[d].count);
                    }
                }
            }
            // Set data, trigger property binding
            _this.clientMappedData = temp_clientMappedData;
            _this.clientMappedLabels = temp_clientMappedLabels;
        });
    };
    /**
       * @function changeChartType
       * @description Handles changing the chart type when the buttons are clicked.
       * Removes the chart legend for charts that don't utilize it.
     * @param selectedType string containing the type of chart to display. Should contain 'bar', 'pie', or 'polarArea'
       */
    ClientMappedComponent.prototype.changeChartType = function (selectedType) {
        this.chartType = selectedType;
        // For 'bar' charts
        if (selectedType === 'bar') {
            this.chartOptions.legend = {
                display: false
            };
            // Add scales to options if it doesn't exist
            if (!this.chartOptions.legend.scales) {
                this.chartOptions.scales = { yAxes: [{ ticks: { min: 0 } }] };
            }
        }
        else if (selectedType === 'pie' || selectedType === 'polarArea') {
            // Display legend
            this.chartOptions.legend = {
                display: true,
                position: 'right'
            };
            // Remove scales from options, if it exists
            if (this.chartOptions.scales) {
                delete this.chartOptions.scales;
            }
        }
    };
    // Placeholder for events. Current application specifications does not dictate any actions
    ClientMappedComponent.prototype.chartClicked = function (e) {
        console.log(e);
        this.rout.navigate(["associate-listing/client/" + this.clientMappedLabels[e.active[0]._index] + "/mapped/" + this.chartOptions.title.text]);
    };
    ClientMappedComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return ClientMappedComponent;
}());
ClientMappedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-client-mapped',
        template: __webpack_require__("../../../../../src/app/portals/Track-Force/components/client-mapped/client-mapped.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portals/Track-Force/components/client-mapped/client-mapped.component.css")]
    }),
    __WEBPACK_IMPORTED_MODULE_3__decorators_auto_unsubscribe_decorator__["a" /* AutoUnsubscribe */],
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_client_mapped_service_client_mapped_service__["a" /* ClientMappedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_client_mapped_service_client_mapped_service__["a" /* ClientMappedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _b || Object])
], ClientMappedComponent);

var _a, _b;
//# sourceMappingURL=client-mapped.component.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/create-user/create-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".partial { \r\n    height: 79vh;\r\n    background-color: #EBEDEA;\r\n}\r\n\r\n.bk-color{\r\n    font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    font-size: 14px;\r\n    line-height: 1.42857143;\r\n    color: black;\r\n    background-color: #ebedea;\r\n}\r\n\r\n.max-dim{\r\n    width: 100%!important;\r\n    height: 100%!important;\r\n    padding-top: 25px;\r\n    margin:0px;\r\n}\r\n\r\n.TrackForcecreateUserContainer {\r\n    margin-top: 3%;\r\n    width: 1170px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    display: block;\r\n}\r\n\r\n.TrackforceH3Title {\r\n    font-size: 24px;\r\n}\r\n\r\nlabel {\r\n    display: inline-block;\r\n    max-width: 100%;\r\n    margin-bottom: 5px;\r\n    font-weight: 700;\r\n    cursor: default;\r\n}\r\n\r\n.well {\r\n    padding-top: 0px;\r\n}\r\n\r\n.well {\r\n    min-height: 20px;\r\n    padding: 19px;\r\n    margin-bottom: 20px;\r\n    background-color: #f5f5f5;\r\n    border: 1px solid #e3e3e3;\r\n    border-radius: 4px;\r\n    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n}\r\n\r\n.col-md-6 {\r\n    -ms-flex: 0 0 50%;\r\n    width: 50%;\r\n    float: left;\r\n}\r\n\r\np {\r\n    margin: 0 0 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"partial\">\r\n\r\n  <br>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"col-md-6\">\r\n      <h3>Roles</h3>\r\n      <label>Vice President</label>\r\n      <p>Can only view information.</p>\r\n      <label>Director or Manager</label>\r\n      <p>Can view information and edit associates' information</p>\r\n      <label>Administrator</label>\r\n      <p>Can do everything a director or manager can do in addition to creating a new user.</p>\r\n    </div>\r\n    <div class=\"well col-md-6\">\r\n      <h3 class=\"TrackforceH3Title\">Create New User:</h3>\r\n      <form>\r\n        <label for=\"username\" class=\"sr-only\">Username: </label>\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Username\" name=\"username\" id=\"username\" required [(ngModel)]=\"username\"\r\n        />\r\n        <br>\r\n        <label for=\"password\" class=\"sr-only\">Password: </label>\r\n        <input class=\"form-control\" type=\"password\" placeholder=\"Password\" name=\"password\" id=\"password\" required [(ngModel)]=\"password\"\r\n        />\r\n        <label for=\"password\" class=\"sr-only\">Confirm Password: </label>\r\n        <input class=\"form-control\" type=\"password\" placeholder=\"Confirm Password\" name=\"password2\" id=\"password2\" [(ngModel)]=\"password2\"\r\n        />\r\n        <br>\r\n        <div class=\"form-group\">\r\n          <label for=\"RoleType\">Please Select Role Type:</label>\r\n          <br>\r\n          <input type=\"radio\" name=\"optradio\" value=\"1\" [(ngModel)]=\"roleId\">Administrator\r\n          <br>\r\n          <input type=\"radio\" name=\"optradio\" value=\"2\" [(ngModel)]=\"roleId\">Manager\r\n          <br>\r\n          <input type=\"radio\" name=\"optradio\" value=\"3\" [(ngModel)]=\"roleId\">Vice President\r\n          <br>\r\n          <!--<input type=\"radio\" name=\"optradio\" value=\"4\" [(ngModel)]=\"roleId\">Associate<br>-->\r\n        </div>\r\n        <br>\r\n        <input (click)=\"createUser()\" type=\"submit\" value=\"Submit\">\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/create-user/create-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_create_user_service_create_user_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/create-user-service/create-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service_authentication_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/authentication-service/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Matt Snee
 */




var CreateUserComponent = (function () {
    function CreateUserComponent(authService, router, userService) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
    };
    /**
     * Wraps CreateUserService - calls createUser()
     * Sends new user information to service
     *
     */
    CreateUserComponent.prototype.createUser = function () {
        var _this = this;
        if (this.password !== this.password2) {
            window.alert('Passwords do not match!');
        }
        else {
            this.userService.createUser(this.username, this.password, this.roleId).subscribe(function (data) {
                console.log(data);
                // navigate to home page if return is valid
                _this.router.navigate(['root']);
            }, function (err) {
                console.log(err + ' Error Occurred');
                window.alert('Error: new user not created!');
            });
        }
    };
    return CreateUserComponent;
}());
CreateUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-user',
        template: __webpack_require__("../../../../../src/app/portals/Track-Force/components/create-user/create-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portals/Track-Force/components/create-user/create-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_create_user_service_create_user_service__["a" /* CreateUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_create_user_service_create_user_service__["a" /* CreateUserService */]) === "function" && _c || Object])
], CreateUserComponent);

var _a, _b, _c;
//# sourceMappingURL=create-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/footer/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/footer/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"footer-margin\">\r\n        <div class=\"col-sm-4\">\r\n          <img class=\"img-responsive footer-img\" src=\"./assets/rev-footer.png\" alt=\"Revature\" height=\"175\" width=\"175\" />\r\n        </div>\r\n        <div class=\"col-sm-3 col-sm-offset-5 contact-info\">\r\n          <span class=\"glyphicon glyphicon-home\"></span>\r\n          <span>&nbsp;11730 Plaza America Drive\r\n            <br>Reston, VA 20190\r\n          </span>\r\n          <br>\r\n          <span class=\"glyphicon glyphicon-earphone\"></span>\r\n          <a href=\"tel:(703) 570-8282\">&nbsp;(703) 570-8282</a>\r\n          <br>\r\n          <span class=\"glyphicon glyphicon-envelope\"></span>\r\n          <a href=\"mailto:info@revature.com\">&nbsp;info@revature.com</a>\r\n          <br>\r\n          <span class=\"glyphicon glyphicon-link\"></span>\r\n          <a target=\"_blank\" href=\"http://revature.com\">&nbsp;revature.com</a>\r\n          <br>\r\n          <span class=\"copyright\">\r\n            <i class=\"fa fa-copyright\" aria-hidden=\"true\"></i>2017 Revature\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer> -->\r\ntrack-force footer"

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/footer/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/portals/Track-Force/components/footer/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portals/Track-Force/components/footer/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/form-component/form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bk-color{\r\n    font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    font-size: 14px;\r\n    line-height: 1.42857143;\r\n    color: black;\r\n    background-color: #ebedea;\r\n  }\r\n  \r\n.max-dim{\r\n  width: 100%!important;\r\n  height: 73vh!important;\r\n  padding-top: 25px;\r\n  margin:0px;\r\n}\r\n  \r\n.container{\r\n    padding-top: 35px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/form-component/form.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"bk-color max-dim\">\r\n    <div class=\"container\" ng-init=\"\">\r\n        <h3 class=\"text-default text-center\">Change Associate Marketing Status</h3>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-5\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover table-bordered\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Associate ID</th>\r\n                                <td>{{associate.id}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>First Name</th>\r\n                                <td>{{associate.firstName}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>Last Name</th>\r\n                                <td>{{associate.lastName}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>Marketing Status</th>\r\n                                <td>{{associate.marketingStatus}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>Batch Name</th>\r\n                                <td>\r\n                                    <a [routerLink]=\"['/TrackForce/batch-details', associate.bid]\">{{associate.batchName}}</a>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>Client Name</th>\r\n                                <td>{{associate.client}}</td>\r\n                            </tr>\r\n                        </thead>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"mStatus\">Choose Status:</label>\r\n                    <select class=\"form-control\" [(ngModel)]=\"selectedMarketingStatus\">\r\n                        <option value=\"1\">UNMAPPED: TRAINING</option>\r\n                        <option value=\"2\">UNMAPPED: OPEN</option>\r\n                        <option value=\"3\">UNMAPPED: SELECTED</option>\r\n                        <option value=\"4\">UNMAPPED: CONFIRMED</option>\r\n                        <option value=\"5\">UNMAPPED: DEPLOYED</option>\r\n                        <option value=\"6\">MAPPED: TRAINING</option>\r\n                        <option value=\"7\">MAPPED: RESERVED</option>\r\n                        <option value=\"8\">MAPPED: SELECTED</option>\r\n                        <option value=\"9\">MAPPED: CONFIRMED</option>\r\n                        <option value=\"10\">MAPPED: DEPLOYED</option>\r\n                    </select>\r\n                    <p> </p>\r\n                    <label for=\"client\">Assign Client:</label>\r\n                    <select class=\"form-control\" id=\"client\" [(ngModel)]=\"selectedClient\">\r\n                        <option selected=\"selected\">None</option>\r\n                        <option *ngFor=\"let client of clients\">{{client.name}}</option>\r\n                    </select>\r\n                    <p> </p>\r\n                    <button (click)=\"updateAssociate()\" class=\"btn btn-default\" style=\"float: right\">Update Status</button>\r\n                    <h5 class=\"text-success\">{{message}}</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/form-component/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_associates_service_associates_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/associates-service/associates-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_associate_model__ = __webpack_require__("../../../../../src/app/portals/Track-Force/models/associate.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__decorators_auto_unsubscribe_decorator__ = __webpack_require__("../../../../../src/app/portals/Track-Force/decorators/auto-unsubscribe.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_request_service_request_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/request-service/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Component for viewing an individual associate and editing as admin.
 */
var FormComponent = (function () {
    function FormComponent(associateService, rs) {
        var _this = this;
        this.associateService = associateService;
        this.rs = rs;
        this.associate = new __WEBPACK_IMPORTED_MODULE_2__models_associate_model__["a" /* Associate */]();
        this.message = '';
        this.selectedMarketingStatus = '';
        this.selectedClient = '';
        var id = window.location.href.split('form-comp/')[1];
        this.id = Number(id);
        this.associateService.getAssociate(this.id).subscribe(function (data) { _this.associate = data; });
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rs.getClients().subscribe(function (data) { console.log(data); _this.clients = data; });
    };
    /**
     * Update the associate with the new client and/or status
     */
    FormComponent.prototype.updateAssociate = function () {
        var _this = this;
        if (this.selectedClient !== this.associate.client
            && this.selectedMarketingStatus !== this.associate.marketingStatus) {
            this.associateService.updateAssociate(this.id, this.selectedMarketingStatus, this.selectedClient).subscribe(function (data) {
                _this.associateService.getAssociate(_this.id).subscribe(function (associate) {
                    _this.associate = associate;
                });
            });
        }
    };
    return FormComponent;
}());
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form-comp',
        template: __webpack_require__("../../../../../src/app/portals/Track-Force/components/form-component/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portals/Track-Force/components/form-component/form.component.css")]
    }),
    __WEBPACK_IMPORTED_MODULE_3__decorators_auto_unsubscribe_decorator__["a" /* AutoUnsubscribe */],
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_associates_service_associates_service__["a" /* AssociateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_associates_service_associates_service__["a" /* AssociateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_request_service_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_request_service_request_service__["a" /* RequestService */]) === "function" && _b || Object])
], FormComponent);

var _a, _b;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".partial{\r\n    /* height: 550px; */\r\n    height: 100%!important;\r\n    background-color: #EBEDEA;   \r\n}\r\n\r\n.container{\r\n    background-color: #ebedea;\r\n    background-size: cover;\r\n    /* height: 100%!important; */\r\n}\r\n\r\n.well{\r\n    background-color: #f5f5f5;\r\n    padding-top: 0px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.col-sm-3{\r\n    margin-top: 20px;\r\n}\r\n\r\n.bk-color{\r\n    font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    font-size: 14px;\r\n    line-height: 1.42857143;\r\n    color: black;\r\n    background-color: #ebedea;\r\n    height: 100vh;\r\n}\r\n\r\n.max-dim{\r\n    width: 100%!important;\r\n    height: 73vh;\r\n    margin: 0px;\r\n}\r\n\r\n.btn{\r\n    cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bk-color max-dim\">\r\n  <div class=\"max-dim\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-4\">\r\n\r\n          <div class=\"well\">\r\n            <canvas baseChart id=\"pie\" class=\"chart chart-pie\" [data]=\"getUndeployedData()\" [colors]=\"mappedColors\" [chartType]=\"undeployedChartType\"\r\n              [labels]=\"undeployedLabels\" [options]=\"undeployedOptions\"></canvas>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"well\">\r\n            <canvas baseChart id=\"pie\" class=\"chart chart-pie\" [data]=\"getDeployedData()\" [colors]=\"mappedColors\" [chartType]=\"deployedChartType\"\r\n              [options]=\"deployedOptions\" [labels]=\"deployedLabels\"></canvas>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n          <button (click)=\"populateDB();;\" class=\"btn btn-block\">Populate Database</button>\r\n          <button (click)=\"populateDBSF();;\" class=\"btn btn-block\">Populate Static Salesforce</button>\r\n          <button (click)=\"deleteDB();\" class=\"btn btn-block\">Empty Database</button>\r\n          <p>{{dbMessage}}</p>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-4\">\r\n\r\n          <div class=\"well\">\r\n            <canvas baseChart id=\"pie\" class=\"chart chart-pie\" [data]=\"getMappedData()\" [labels]=\"mappedLabels\" [chartType]=\"mappedChartType\"\r\n              (chartClick)=\"mappedOnClick($event)\" [colors]=\"clientColors\" [options]=\"mappedOptions\"></canvas>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"well\">\r\n            <canvas baseChart id=\"pie\" class=\"chart chart-pie\" [data]=\"getUnmappedData()\" [labels]=\"unmappedLabels\" [chartType]=\"unmappedChartType\"\r\n              [colors]=\"skillColors\" [options]=\"unmappedOptions\" (chartClick)=\"unmappedOnClick($event)\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\"></div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service_request_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/request-service/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datasync_service_data_sync_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/datasync-service/data-sync.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_theme_constants__ = __webpack_require__("../../../../../src/app/portals/Track-Force/constants/theme.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_ng2_charts_options_model__ = __webpack_require__("../../../../../src/app/portals/Track-Force/models/ng2-charts-options.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_selected_status_constants__ = __webpack_require__("../../../../../src/app/portals/Track-Force/constants/selected-status.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MONTHS_3 = 788923800;
var HomeComponent = (function () {
    function HomeComponent(rs, ds, rout) {
        this.rs = rs;
        this.ds = ds;
        this.rout = rout;
        this.labels = [];
        this.data = [];
        this.undeployedLabels = __WEBPACK_IMPORTED_MODULE_7__constants_selected_status_constants__["a" /* SelectedStatusConstants */].UNDEPLOYED_LABELS;
        this.mappedLabels = __WEBPACK_IMPORTED_MODULE_7__constants_selected_status_constants__["a" /* SelectedStatusConstants */].MAPPED_LABELS;
        this.unmappedLabels = __WEBPACK_IMPORTED_MODULE_7__constants_selected_status_constants__["a" /* SelectedStatusConstants */].UNMAPPED_LABELS;
        this.deployedLabels = __WEBPACK_IMPORTED_MODULE_7__constants_selected_status_constants__["a" /* SelectedStatusConstants */].DEPLOYED_LABELS;
        this.mappedColors = __WEBPACK_IMPORTED_MODULE_5__constants_theme_constants__["a" /* ThemeConstants */].MAPPED_COLORS;
        this.clientColors = __WEBPACK_IMPORTED_MODULE_5__constants_theme_constants__["a" /* ThemeConstants */].CLIENT_COLORS;
        this.skillColors = __WEBPACK_IMPORTED_MODULE_5__constants_theme_constants__["a" /* ThemeConstants */].SKILL_COLORS;
        this.deployedChartType = 'pie';
        this.undeployedChartType = 'pie';
        this.mappedChartType = 'pie';
        this.unmappedChartType = 'pie';
        this.options = __WEBPACK_IMPORTED_MODULE_6__models_ng2_charts_options_model__["a" /* ChartOptions */].createOptionsLegend('right');
        this.unmappedOptions = __WEBPACK_IMPORTED_MODULE_6__models_ng2_charts_options_model__["a" /* ChartOptions */].createOptionsTitle('Unmapped', 24, '#121212', 'right');
        this.mappedOptions = __WEBPACK_IMPORTED_MODULE_6__models_ng2_charts_options_model__["a" /* ChartOptions */].createOptionsTitle('Mapped', 24, '#121212', 'right');
        this.deployedOptions = __WEBPACK_IMPORTED_MODULE_6__models_ng2_charts_options_model__["a" /* ChartOptions */].createOptionsTitle('Mapped vs. Unmapped (Deployed)', 24, '#121212', 'right');
        this.undeployedOptions = __WEBPACK_IMPORTED_MODULE_6__models_ng2_charts_options_model__["a" /* ChartOptions */].createOptionsTitle('Mapped vs. Unmapped (Not Deployed)', 24, '#121212', 'right');
        // populate with dummy data to enaable chart labels by default
        this.undeployedData = [0, 0];
        this.mappedData = [0, 0, 0, 0];
        this.unmappedData = [0, 0, 0, 0];
        this.deployedData = [0, 0, 0, 0];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.load();
    };
    HomeComponent.prototype.load = function () {
        var _this = this;
        console.log('LOADING...');
        this.rs.getTotals().subscribe(function (response) {
            console.log(response);
            /**
             * @member {Array} UndeployedData
             * @memberof mainApp.mainCtrl
             * @description UndeployedData is an array used to populate the
             * dataset of the Undeployed chart. The dataset contains two numbers:
             * the mapped number is the sum of all mapped associates, the unmapped number
             * is the sum of all unmapped associates.
             */
            var undeployedArr = [response.trainingMapped
                    + response.reservedMapped
                    + response.selectedMapped
                    + response.confirmedMapped,
                response.trainingUnmapped
                    + response.openUnmapped
                    + response.selectedUnmapped
                    + response.confirmedUnmapped];
            _this.undeployedData = undeployedArr;
            /**
             * @member {Array} MappedData
             * @memberof mainApp.mainCtrl
             * @description MappedData is an array that stores the
             * data for the dataset of the Mapped chart.
             * The dataset contains four numbers: training mapped<br>
             * reserved mapped <br>
             * selected mapped <br>
             * confirmed mapped<br>
             */
            var mappedArr = [response.trainingMapped,
                response.reservedMapped,
                response.selectedMapped,
                response.confirmedMapped];
            _this.mappedData = mappedArr;
            /**
             * @member {Array} UnmappedData
             * @memberof mainApp.mainCtrl
             * @description UnmappedData is an array that stores the
             * data for the dataset of the Unmapped chart.
             * The dataset contains four numbers: training unmapped<br>
             * open unmapped <br>
             * selected unmapped <br>
             * confirmed unmapped<br>
             */
            var unmappedArr = [response.trainingUnmapped,
                response.openUnmapped,
                response.selectedUnmapped,
                response.confirmedUnmapped];
            _this.unmappedData = unmappedArr;
            /**
             * @member {Array} DeployedData
             * @memberof mainApp.mainCtrl
             * @description DeployedData is an array used to populate the
             * dataset of the Deployed chart. The dataset contains two numbers:
             * the mapped number is the sum of all mapped associates, the unmapped number
             * is the sum of all unmapped associates. Both numbers contain only deployed associates.
             */
            var deployedArr = [response.deployedMapped,
                response.deployedUnmapped];
            _this.deployedData = deployedArr;
            console.log('LOADED');
            console.log(_this.undeployedData);
            console.log(_this.mappedData);
            console.log(_this.unmappedData);
            console.log(_this.deployedData);
        });
    };
    /**
  * @function MappedOnClick
  * @memberof mainApp.mainCtrl
  * @description When the "Mapped" chart is clicked
  * the global variable selectedStatus is
  * set to the label of the slice
  * clicked. The window then loads the
  * clientMapped.html partial.
  */
    HomeComponent.prototype.mappedOnClick = function (evt) {
        if (evt.active[0] !== undefined) {
            console.log(evt.active[0]);
            this.rout.navigate(["client-mapped/" + evt.active[0]._index]);
        }
    };
    /**
     * @function UnmappedOnClick
     * @memberof mainApp.mainCtrl
     * @description When the "Unmapped" chart is clicked
     * the global variable selectedStatus is
     * set to the label of the slice
     * clicked. The window then loads the
     * skillset.html partial.
     */
    HomeComponent.prototype.unmappedOnClick = function (evt) {
        if (evt.active[0] !== undefined) {
            console.log(evt.active[0]);
            this.rout.navigate(["skillset/" + evt.active[0]._index]);
        }
    };
    /**
     * @function populateDB
     * @description Populates the database with information from
     *              data script
     */
    HomeComponent.prototype.populateDB = function () {
        var _this = this;
        console.log('POPULATING DB...');
        this.rs.populateDB().subscribe(function (response) {
            console.log('POPULATED DB');
            _this.load();
            // console.log(response.status);
        }, function (err) {
            console.log('err');
        });
    };
    /**
     * @function deleteDB
     * @memberof mainApp.databaseCtrl
     * @description Truncates all the tables in the database
     */
    HomeComponent.prototype.deleteDB = function () {
        var _this = this;
        console.log('TRUNCATING...');
        this.rs.deleteDB().subscribe(function (response) {
            console.log('TRUNCATED');
            _this.load();
            // console.log(response.status);
        }, function (err) {
            console.log('err');
        });
    };
    /**
     * @function populateDBSF
     * @memberof mainApp.databaseCtrl
     * @description SF Populates the database with information
     *              from data script
     */
    HomeComponent.prototype.populateDBSF = function () {
        var _this = this;
        console.log('POPULATING SF...');
        this.rs.populateDBSF().subscribe(function (response) {
            console.log('POPULATED SF');
            _this.load();
            // console.log(response.status);
        }, function (err) {
            console.log('err');
        });
    };
    /**
    * http://usejsdoc.org/
    */
    /**
     * @function getUsername
     * @memberof mainApp.indexCtrl
     * @description This function will return a JavaScript object that contains
     *				the username for the current user that logs in
     */
    HomeComponent.prototype.getUsername = function () {
        var _this = this;
        this.rs.getUsername().subscribe(function (response) {
            _this.username = response.data;
            console.log(_this.username);
        });
    };
    /**
     * @function defaultBatches
     * @memberof mainApp.indexCtrl
     * @description This function will return a JavaScript object that contains
     * 				all the batches between a 6 month period used in the batch list
     * 				page. We declare and initiate it in the index to preload this
     * 				information to reduce loading on batch list page
     */
    HomeComponent.prototype.defaultBatches = function () {
        this.rs.getBatches(this.threeMonthsBefore(), this.threeMonthsAfter()).subscribe(function (response) {
            // try to get rid of this variable
            // fetched data should be fetched, not stored
            // this.glo.batches = response.data;
        }, function () {
            console.log('Error in doing http request');
        });
    };
    /**
     * @function getCountPerBatchTypeDefault
     * @memberof mainApp.indexCtrl
     * @description This function will return a JavaScript object that contains
     * 				amount of associates per batch type(skillset) within a 6 month
     * 				period to populate graph in batch list
     */
    HomeComponent.prototype.getCountPerBatchTypeDefault = function () {
        var _this = this;
        this.rs.getBatchPerType(this.threeMonthsBefore(), this.threeMonthsAfter()).subscribe(function (response) {
            // this callback will be called asynchronously
            // when the response is available
            _this.labels = [];
            _this.data = [];
            var amountType = response.data;
            for (var i = 0; i < amountType.length; i++) {
                _this.labels.push(amountType[i].curriculum);
                _this.data.push(amountType[i].value);
            }
            _this.options = __WEBPACK_IMPORTED_MODULE_6__models_ng2_charts_options_model__["a" /* ChartOptions */].createOptionsLegend('right');
        }, function () {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            _this.amountType = {
                'JTA_SDET': '2',
                '.NET': '3'
            };
        });
    };
    HomeComponent.prototype.threeMonthsBefore = function () {
        return new Date().getTime() - MONTHS_3;
    };
    HomeComponent.prototype.threeMonthsAfter = function () {
        return new Date().getTime() + MONTHS_3;
    };
    HomeComponent.prototype.getUndeployedData = function () {
        return this.undeployedData;
    };
    HomeComponent.prototype.getDeployedData = function () {
        return this.deployedData;
    };
    HomeComponent.prototype.getMappedData = function () {
        return this.mappedData;
    };
    HomeComponent.prototype.getUnmappedData = function () {
        return this.unmappedData;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/portals/Track-Force/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portals/Track-Force/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_datasync_service_data_sync_service__["a" /* DataSyncService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_datasync_service_data_sync_service__["a" /* DataSyncService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"ISO-8859-1\";\r\n\r\n/*\r\nover-ride \"Weak\" message, show font in dark grey\r\n*/\r\n\r\n.progress-bar {\r\n\tcolor: #333;\r\n}\r\n\r\n/*\r\nReference:\r\nhttp://www.bootstrapzen.com/item/135/simple-login-form-logo/\r\n*/\r\n\r\n* {\r\n\t-webkit-box-sizing: border-box;\r\n\tbox-sizing: border-box;\r\n\toutline: none;\r\n}\r\n\r\n.form-control {\r\n\tposition: relative;\r\n\tfont-size: 16px;\r\n\theight: auto;\r\n\tpadding: 10px;\r\n\t@include box-sizing(border-box);\r\n\t&:focus {\r\n\tz-index:2;\r\n\t}\r\n}\r\n\r\n#background {\r\n\tposition: fixed;\r\n\ttop: -50%;\r\n\tleft: -50%;\r\n\twidth: 200%;\r\n\theight: 200%;\r\n\tz-index: -1;\r\n}\r\n\r\n#background img{\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tmargin: auto;\r\n\tmin-width: 50%;\r\n\tmin-height: 50%;\r\n\tmax-height: 100%;\r\n\tmax-width: 50%;\r\n}\r\n\r\n.login-form {\r\n\tmargin-top: 60px;\r\n}\r\n\r\nform[role=login] {\r\n\tcolor: #5d5d5d;\r\n\tbackground: #f2f2f2;\r\n\tpadding: 26px;\r\n\tborder-radius: 10px;\r\n\t-moz-border-radius: 10px;\r\n\t-webkit-border-radius: 10px;\r\n}\r\n\r\nform[role=login] img {\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 35px;\r\n}\r\n\r\nform[role=login] input, form[role=login] button {\r\n\tfont-size: 18px;\r\n\tmargin: 16px 0;\r\n}\r\n\r\nform[role=login]>div {\r\n\ttext-align: center;\r\n}\r\n\r\n.form-links {\r\n\ttext-align: center;\r\n\tmargin-top: 1em;\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n.form-links a {\r\n\tcolor: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"background\">\r\n  <img src=\"../../../assets/23.jpg\"/>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\" id=\"pwd-container\">\r\n    <div class=\"col-md-4\"></div>\r\n      <div class=\"col-md-4\">\r\n        <section class=\"login-form\">\r\n          <form class=\"form-signin\" role=\"login\">\r\n            <img src=\"../../../assets/logo.png\" class=\"img-responsive\" alt=\"\" />\r\n            <label for=\"username\" class=\"sr-only\">Username: </label>\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Username\" name=\"username\" id=\"username\" required class=\"form-control input-lg\" [(ngModel)]=\"username\"/>\r\n            <label for=\"password\" class=\"sr-only\">Password: </label>\r\n            <input class=\"form-control\" type=\"password\" placeholder=\"Password\" name=\"password\" id=\"password\" required [(ngModel)]=\"password\"/>\r\n            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)='login()'>Sign in</button>\r\n          </form>\r\n        </section>\r\n      </div>\r\n    </div>\r\n</div> -->login component\r\n"

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service_authentication_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/authentication-service/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__decorators_auto_unsubscribe_decorator__ = __webpack_require__("../../../../../src/app/portals/Track-Force/decorators/auto-unsubscribe.decorator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Michael Tseng
 * @description Receives user inputs from form and submits them to the back-end for validation
 */




var LoginComponent = (function () {
    /**
    *@constructor
    *
    *@param {AuthenticationService} authService
    * Service for login; provides the needed functions, such as login() and logout()
    *
    *@param {Router} router
    * Service needed for redirecting user upon successful login
    *
    */
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
    * Called upon component initiation
    * Clears localStorage
    *
    *@param none
    *
    */
    LoginComponent.prototype.ngOnInit = function () {
        var user = this.authService.getUser();
        if (user != null) {
            if (user.tfRoleId === 4) {
                this.router.navigate(['associate-view', user.userId]);
            }
            this.router.navigate(['root']);
        }
    };
    /**
    * Function wrapper for AuthenticationService login()
    * Sends user input to service for real login
    *Then navigates user to home if correct info is provided
    *
    *@param none
    *
    */
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.username, this.password).subscribe(function (data) {
            var user = _this.authService.getUser();
            // navigate to appropriate page if return is valid
            if (user.tfRoleId === 4) {
                _this.router.navigate(['associate-view', user.userId]);
            }
            else {
                _this.router.navigate(['root']);
            }
        }, function (err) {
            _this.authService.logout();
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/portals/Track-Force/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portals/Track-Force/components/login/login.component.css")]
    }),
    __WEBPACK_IMPORTED_MODULE_3__decorators_auto_unsubscribe_decorator__["a" /* AutoUnsubscribe */],
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-default custom-nav\">\r\n        <div class=\"container-fluid\">\r\n                <div class=\"navbar-header\">\r\n                        <a class=\"navbar-brand\"><img src=\"../../../assets/logo.png\" height=\"35\" width=\"100\"></a>\r\n                </div>\r\n                <ul class=\"nav navbar-nav\">\r\n                        <li><a routerLink=\"/root\">Home</a></li>\r\n                        <li><a *ngIf=\"!isAssociate\" routerLink=\"/client-listing\">Client List</a></li>\r\n                        <li><a routerLink=\"/batch-listing\">Batch List</a></li>\r\n                        <li><a routerLink=\"/associate-listing\">Associate List</a></li>\r\n                        <li><a *ngIf=\"isAdmin\" routerLink=\"/create-user\">Create User</a></li>\r\n                        <li><a (click)=\"logout()\">Logout</a></li>\r\n                </ul>\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                        <li><a>Welcome, {{user.username}}</a></li>\r\n            </ul>\r\n        </div>\r\n</nav> -->"

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service_authentication_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/authentication-service/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    // user: User;
    // isAdmin: boolean;
    // isAssociate: boolean;
    function NavbarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // this.user = this.authService.getUser();
        // if(this.user.tfRoleId === 1){
        //   this.isAdmin = true;
        // } else {
        //   this.isAdmin = false;
        // }
        // if(this.user.tfRoleId === 4){
        //   this.isAssociate = true;
        // } else {
        //   this.isAssociate = false;
        // }
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/portals/Track-Force/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portals/Track-Force/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/root/root.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body > .wrapper{\r\n\tbackground-color: #ebedea;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.footer {\r\n\tbackground-color: #4b4b4b;\r\n\tcolor: #aaaaaa;\r\n}\r\n\r\n.footer-img{\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.custom-nav{\r\n\tbackground-color: #ffffff;\r\n}\r\n\r\n.navbar-default .navbar-nav > li > a, .navbar-header > .navbar-brand {\r\n\tmargin-top: 20px;\r\n\tcolor: #9e9e9e;\r\n\tfont-size: 1.2em;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus{\r\n\tcolor: #000000;\r\n}\r\n\r\n.navbar-default .navbar-brand{\r\n\tcolor: #FF8D3F;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.navbar-default .navbar-brand:focus, .navbar-default .navbar-brand:hover {\r\n    color:#000000;\r\n/*     background-color: transparent; */\r\n}\r\n\r\n#clientList{\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.custom-btn{\r\n\tmargin-bottom: 20px;\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\nli{\r\n\tpadding: 5px;\t\r\n\tmargin-top: 0px;\r\n}\r\n\r\nul{\r\n\tmargin: auto;\r\n\tmargin-top: 0px;\r\n\tpadding: 0;\r\n\tlist-style-type: none;\r\n}\r\n\r\n.well{\r\n\tpadding-top: 0px;\r\n}\r\n\r\nli > a{\r\n\tcolor: #757575;\r\n}\r\n\r\nli[_ngcontent-c6] {\r\n   padding: 5px;\r\n   margin-top: 0px;\r\n}\r\n\r\nul, menu, dir {\r\n\tdisplay: block;\r\n\t-webkit-margin-before: 1em;\r\n\t-webkit-margin-after: 1em;\r\n\t-webkit-margin-start: 0px;\r\n\t-webkit-margin-end: 0px;\r\n\t-webkit-padding-start: 40px;\r\n }\r\n\r\nul[_ngcontent-c6] {\r\n   margin: auto;\r\n   margin-top: 0px;\r\n   padding: 0;\r\n   list-style-type: none;\r\n}\r\n\r\nli {\r\n   display: list-item;\r\n   text-align: -webkit-match-parent;\r\n}\r\n\r\nli > a:hover{\r\n\tcolor: #121212;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/root/root.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- This is in essence the new app.component. Add your embedded app \r\n modules here -->\r\n <div style=\"height:100%;width:100%;position:relative;\">\r\n    <app-navbar></app-navbar>\r\n    <app-home></app-home>\r\n    <div style=\"bottom: 0px!important; position: absolute; width:100%;\">\r\n        <app-footer></app-footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/root/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = (function () {
    function RootComponent() {
        this.title = 'app-root';
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    return RootComponent;
}());
RootComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/portals/Track-Force/components/root/root.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portals/Track-Force/components/root/root.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RootComponent);

//# sourceMappingURL=root.component.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/skillset/skillset.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/skillset/skillset.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<button (click)=\"changeChartType('bar')\" class=\"btn btn-default\">Bar Chart</button>\r\n\t\t\t<button (click)=\"changeChartType('pie')\" class=\"btn btn-default\">Pie Chart</button>\r\n\t\t\t<button (click)=\"changeChartType('polarArea')\" class=\"btn btn-default\">Polar Chart</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-6\">\r\n\t\t\t<h3 class=\"text-center text-primary\">{{selectedStatus}}</h3><br/>\r\n\t\t\t<!-- TODO: figure out how to convert this['chart-click'],this['chart-colors'] to TypeScript -->\r\n\t\t\t<canvas baseChart\r\n\t\t\t\tid=\"skillset\"\r\n\t\t\t\tclass=\"chart chart-bar\"\r\n\t\t\t\t*ngIf=\"skillsetData && skillsetData.length && skillsetLabels && skillsetLabels.length; else noData\"\r\n\t\t\t\t[chartType]=\"chartType\"\r\n\t\t\t\t[data]=\"skillsetData\"\r\n\t\t\t\t[labels]=\"skillsetLabels\"\r\n\t\t\t\t[colors]=\"batchColors\"\r\n\t\t\t\t[options]=\"chartOptions\"\r\n\t\t\t\t(chartClick)=\"goToAssociateList($event)\"\r\n\t\t\t\t>\r\n\t\t\t</canvas>\r\n\t\t\t<ng-template #noData>\r\n\t\t\t\t<div class=\"centerBoth\">\r\n\t\t\t\t\t{{status}}\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</ng-template>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/components/skillset/skillset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_selected_status_constants__ = __webpack_require__("../../../../../src/app/portals/Track-Force/constants/selected-status.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__decorators_auto_unsubscribe_decorator__ = __webpack_require__("../../../../../src/app/portals/Track-Force/decorators/auto-unsubscribe.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_chart_scale_model__ = __webpack_require__("../../../../../src/app/portals/Track-Force/models/chart-scale.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_skill_set_service_skill_set_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/skill-set-service/skill-set.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_theme_constants__ = __webpack_require__("../../../../../src/app/portals/Track-Force/constants/theme.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SkillsetComponent = SkillsetComponent_1 = (function () {
    function SkillsetComponent(skillsetService, route, router) {
        this.skillsetService = skillsetService;
        this.route = route;
        this.router = router;
        /**
         * The selected status
         */
        this.selectedStatus = '';
        /**
         * The flag that tells Angular, and the developer, whether or not ng2_chart dependency is actually being used
         */
        this.USE_NG2_CHART = true;
        /**
         * The type of chart
         */
        this.chartType = SkillsetComponent_1.chartTypes.BAR;
        /**
         * The dummy data to compare against for our tests
         */
        this.DUMMY_DATA = [{ data: [1, 1, 1, 1, 1], label: 'Mapped' }, { data: [1, 1, 1, 1, 1], label: 'Unmapped' }];
        /**
         * The skillset data
         */
        this.skillsetData = [];
        /**
         * The skillset labels
         */
        this.skillsetLabels = [];
        /**
         * The status of the component
         */
        this.status = 'Loading...';
        /**
         * The chart options, as a JavaScript-style object, and pre-initialized so as to DRY up our code...
         */
        this.chartOptions = {
            type: this.chartType,
            legend: {
                display: false
            },
            xAxes: [
                {
                    ticks: {
                        autoSkip: false
                    }
                }
            ],
            scales: new __WEBPACK_IMPORTED_MODULE_3__models_chart_scale_model__["a" /* ChartScale */]()
        };
        /**
         * The color scheme for the charts of this component
         */
        this.batchColors = __WEBPACK_IMPORTED_MODULE_5__constants_theme_constants__["a" /* ThemeConstants */].BATCH_COLORS;
        // setup SKILL_INFO
        if (!SkillsetComponent_1.SKILL_INFO) {
            SkillsetComponent_1.SKILL_INFO = new Map();
            SkillsetComponent_1.SKILL_INFO.set(__WEBPACK_IMPORTED_MODULE_1__constants_selected_status_constants__["a" /* SelectedStatusConstants */].TRAINING, 6);
            SkillsetComponent_1.SKILL_INFO.set(__WEBPACK_IMPORTED_MODULE_1__constants_selected_status_constants__["a" /* SelectedStatusConstants */].OPEN, 7);
            SkillsetComponent_1.SKILL_INFO.set(__WEBPACK_IMPORTED_MODULE_1__constants_selected_status_constants__["a" /* SelectedStatusConstants */].SELECTED, 8);
            SkillsetComponent_1.SKILL_INFO.set(__WEBPACK_IMPORTED_MODULE_1__constants_selected_status_constants__["a" /* SelectedStatusConstants */].CONFIRMED, 9);
            SkillsetComponent_1.SKILL_INFO.set(__WEBPACK_IMPORTED_MODULE_1__constants_selected_status_constants__["a" /* SelectedStatusConstants */].DEPLOYED, 10);
        }
    }
    /**
     * Exposing SKILL_INFO in a safe way
     */
    SkillsetComponent.getSkillInfo = function () {
        return SkillsetComponent_1.SKILL_INFO;
    };
    SkillsetComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get skillID
        this.skillID = SkillsetComponent_1.SKILL_INFO.get(this.selectedStatus) || SkillsetComponent_1.NULL;
        // if we didn't get skillID from selectedStatus...
        if (this.skillID === SkillsetComponent_1.NULL) {
            // we get it from the ActivatedRoute params
            this.skillID = Number(this.route.snapshot.paramMap.get('id'));
            if (this.skillID < 6) {
                this.skillID += 6; // TODO: remove this
            }
            // we now set selectedStatus
            SkillsetComponent_1.SKILL_INFO.forEach(function (value, key) {
                if (value === _this.skillID) {
                    _this.selectedStatus = key;
                }
            });
            // if there is empty string, simply go home
            if (!this.selectedStatus) {
                this.router.navigate(['/root']);
            }
        }
        // get the skillset data here
        this.skillsetService.getSkillsetsForStatusID(this.skillID).subscribe(function (data) {
            // copy in the raw data into local variable
            var skillsets = data;
            console.log(data);
            // map() that variable into skillsetData,skillsetLabels
            _this.skillsetData = skillsets.map(function (obj) {
                if (obj.count) {
                    return obj.count;
                }
            }).filter(_this.isNotUndefined);
            _this.skillsetLabels = skillsets.map(function (obj) {
                if (obj.count) {
                    return obj.name;
                }
            }).filter(_this.isNotUndefined);
            _this.status = (((!_this.skillsetLabels) || (!_this.skillsetLabels.length)) &&
                ((!_this.skillsetData) || (!_this.skillsetData.length))) ?
                'There is no batch data on this status...' : 'Loaded!';
        });
    };
    /**
     * Changes the chart type of this component (does this really need explanation?!)
     */
    SkillsetComponent.prototype.changeChartType = function (type) {
        this.chartType = type;
        // changing some chartOptions pre-emptively
        this.chartOptions.type = type;
        switch (type) {
            // if type is either PIE or POLAR_AREA...
            case SkillsetComponent_1.chartTypes.PIE:
            case SkillsetComponent_1.chartTypes.POLAR_AREA:
                // ... we're displaying the chart legend and on the right of the container
                this.chartOptions.legend = {
                    display: true,
                    position: 'right'
                };
                // ... and getting rid of the scales ...
                // ... why are we using delete instead of assigning that field to null or undefined?????????
                if (this.chartOptions.scales) {
                    delete this.chartOptions.scales;
                }
                break;
            // otherwise, for BAR charts...
            case SkillsetComponent_1.chartTypes.BAR:
                // ...we give no legend...
                this.chartOptions.legend = {
                    display: false
                };
                // ...but give scales...
                this.chartOptions.scales = new __WEBPACK_IMPORTED_MODULE_3__models_chart_scale_model__["a" /* ChartScale */]();
                break;
        }
        // it's a mock, for right now
        return type;
    };
    SkillsetComponent.prototype.goToAssociateList = function (event) {
        if (event.active[0] !== undefined) {
            this.router.navigate(["associate-listing/curriculum/" + this.skillsetLabels[event.active[0]._index] + "/unmapped/" + this.selectedStatus]);
        }
    };
    /**
     * Returns whether or not val is undefined. Used for filtering.
     * @param val The value to check for not undefined
     */
    SkillsetComponent.prototype.isNotUndefined = function (val) { return val !== undefined; };
    /**
     * Exposing skillID in a safe way
     */
    SkillsetComponent.prototype.getSkillID = function () { return this.skillID; };
    return SkillsetComponent;
}());
/**
 * The types of charts
 */
SkillsetComponent.chartTypes = {
    BAR: 'bar',
    PIE: 'pie',
    POLAR_AREA: 'polarArea'
};
/**
 * The sentry id for a status that doesn't exist
 */
SkillsetComponent.NULL = -1;
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SkillsetComponent.prototype, "selectedStatus", void 0);
SkillsetComponent = SkillsetComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-skillset',
        template: __webpack_require__("../../../../../src/app/portals/Track-Force/components/skillset/skillset.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portals/Track-Force/components/skillset/skillset.component.css")]
    })
    /**
     * The skillset component
     * @author : Michael Warren
     */
    ,
    __WEBPACK_IMPORTED_MODULE_2__decorators_auto_unsubscribe_decorator__["a" /* AutoUnsubscribe */],
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_skill_set_service_skill_set_service__["a" /* SkillsetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_skill_set_service_skill_set_service__["a" /* SkillsetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"]) === "function" && _c || Object])
], SkillsetComponent);

var SkillsetComponent_1, _a, _b, _c;
//# sourceMappingURL=skillset.component.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/constants/selected-status.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedStatusConstants; });
var SelectedStatusConstants = (function () {
    function SelectedStatusConstants() {
    }
    return SelectedStatusConstants;
}());

SelectedStatusConstants.TRAINING = 'Training';
SelectedStatusConstants.OPEN = 'Open';
SelectedStatusConstants.SELECTED = 'Selected';
SelectedStatusConstants.CONFIRMED = 'Confirmed';
SelectedStatusConstants.RESERVED = 'Reserved';
SelectedStatusConstants.MAPPED = 'Mapped';
SelectedStatusConstants.UNMAPPED = 'Unmapped';
SelectedStatusConstants.RESERVED_OPEN = 'Reserved/Open';
SelectedStatusConstants.DEPLOYED = 'Deployed';
SelectedStatusConstants.TRAINING_JSON = { id: 0, name: SelectedStatusConstants.TRAINING };
SelectedStatusConstants.OPEN_JSON = { id: 1, name: SelectedStatusConstants.OPEN };
SelectedStatusConstants.SELECTED_JSON = { id: 2, name: SelectedStatusConstants.SELECTED };
SelectedStatusConstants.CONFIRMED_JSON = { id: 3, name: SelectedStatusConstants.CONFIRMED };
SelectedStatusConstants.RESERVED_JSON = { id: 1, name: SelectedStatusConstants.RESERVED };
SelectedStatusConstants.MAPPED_JSON = { id: 0, name: SelectedStatusConstants.MAPPED };
SelectedStatusConstants.UNMAPPED_JSON = { id: 1, name: SelectedStatusConstants.UNMAPPED };
SelectedStatusConstants.RESERVED_OPEN_JSON = { id: 1, name: SelectedStatusConstants.RESERVED_OPEN };
SelectedStatusConstants.MAPPED_LABELS = [
    SelectedStatusConstants.TRAINING,
    SelectedStatusConstants.RESERVED,
    SelectedStatusConstants.SELECTED,
    SelectedStatusConstants.CONFIRMED
];
SelectedStatusConstants.UNMAPPED_LABELS = [
    SelectedStatusConstants.TRAINING,
    SelectedStatusConstants.OPEN,
    SelectedStatusConstants.SELECTED,
    SelectedStatusConstants.CONFIRMED
];
SelectedStatusConstants.DEPLOYED_LABELS = [
    SelectedStatusConstants.MAPPED,
    SelectedStatusConstants.UNMAPPED
];
SelectedStatusConstants.UNDEPLOYED_LABELS = [
    SelectedStatusConstants.MAPPED,
    SelectedStatusConstants.UNMAPPED
];
SelectedStatusConstants.CLIENT_LABELS = [
    SelectedStatusConstants.TRAINING,
    SelectedStatusConstants.RESERVED_OPEN,
    SelectedStatusConstants.SELECTED,
    SelectedStatusConstants.CONFIRMED
];
//# sourceMappingURL=selected-status.constants.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/constants/theme.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeConstants; });
var ThemeConstants = (function () {
    function ThemeConstants() {
    }
    return ThemeConstants;
}());

ThemeConstants.MAPPED_COLORS = [{ backgroundColor: ['#ff8d3f', '#514f4f'] }];
ThemeConstants.CLIENT_COLORS = [{ backgroundColor: ['#68a225', '#506d2f', '#324851',
            '#b3de81', '#7da3a1', '#a2c523', '#6e6702', '#2e4600'] }];
ThemeConstants.SKILL_COLORS = [{ backgroundColor: ['#004d47', '#00cffa', '#52958b',
            '#008dcb', '#b2dbd5', '#6eb5c0', '#006c84', '#113743'] }];
ThemeConstants.BATCH_COLORS = [{ backgroundColor: ['#004d47', '#00cffa', '#52958b',
            '#008dcb', '#b2dbd5', '#6eb5c0', '#006c84', '#113743'] }];
ThemeConstants.BAR_COLORS = [{ backgroundColor: '#e85410' }, { backgroundColor: '#59504c' }];
ThemeConstants.BATCH_DETAILS_COLORS = [
    { backgroundColor: '#ff8d3f' },
    { backgroundColor: '#514f4f' },
    { backgroundColor: 'black' }
];
//# sourceMappingURL=theme.constants.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/decorators/auto-unsubscribe.decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AutoUnsubscribe;
/**
 * Decorator for automatically unsubscribing from any and all observables (so that you don't need to bloat
 *  your codebase by having instances of said observables floating around solely for the purpose of manually
 *  unsubscribing!)
 * @param constructor
 */
// This automagical code obtained from https://netbasal.com/automagically-unsubscribe-in-angular-4487e9853a88
// Why are we just pulling code from online???? - Blake
/**
 * Decorator for automatically unsubscribing from any and all observables (so that you don't need to bloat
 *  your codebase by having instances of said observables floating around solely for the purpose of manually
 *  unsubscribing!)
 * @param constructor
 */ function AutoUnsubscribe(constructor) {
    // make copy of the ngOnDestroy callback
    var original = constructor.prototype.ngOnDestroy;
    // upon destruction of the component...
    constructor.prototype.ngOnDestroy = function () {
        // ...iterate thru its properties...
        for (var prop in this) {
            var property = this[prop];
            // if property exists and has-a unsubscribe...
            if (property && (typeof property.unsubscribe === 'function')) {
                // ...call it
                property.unsubscribe();
            }
        }
        // if the callback we copied was function, we invoke it now with any arguments that were passed in
        //  via constructor
        original && typeof original === 'function' && original.apply(this, arguments);
    };
}
//# sourceMappingURL=auto-unsubscribe.decorator.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/interceptors/jwt.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
*@author Michael Tseng
*
*@description Intercepts all HttpRequest and appends the token into the header
* for verification
*Based on: http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
*
*/

var JwtInterceptor = (function () {
    function JwtInterceptor() {
    }
    /**
    *
    *@param {HttpRequest<any>} request
    *the HttpRequest intercepted
    *
    *@param {HttpHandler} next
    *the HttpHandler object that returns the desired HttpEvent observable
    *
    *@return the transformed HttpEvent observable
    *
    */
    JwtInterceptor.prototype.intercept = function (request, next) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "" + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    return JwtInterceptor;
}());
JwtInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], JwtInterceptor);

//# sourceMappingURL=jwt.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/models/associate.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Associate; });
/**
 * Object to hold data regarding an associate.
 * @author Alex, Xavier
 */
var Associate = (function () {
    function Associate() {
    }
    return Associate;
}());

//# sourceMappingURL=associate.model.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/models/chart-scale.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartScale; });
var ChartScale = (function () {
    function ChartScale() {
        this.yAxes = [{
                ticks: {
                    min: 0
                }
            }
        ];
    }
    return ChartScale;
}());

//# sourceMappingURL=chart-scale.model.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/models/ng2-charts-options.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SideValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartOptions; });
/**
 * @Author chart style for stronger typing while constructing ng2-charts options/colors
 */
/**
 * used to represent padding and margin in chart styles
 */
var SideValues = (function () {
    function SideValues(left, right, top, bottom) {
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
    }
    return SideValues;
}());

/**
 * chart options factory for ng2-charts
 */
var ChartOptions = (function () {
    function ChartOptions() {
    }
    /**
     * convenience method for creating chart options with
     * padding and margin options
     *
     * @param {SideValues} padding
     * @param {SideValues} margin
     * @param {string} legendPosition
     * @param {boolean} isResponsive
     * @param {boolean} maintainAspectRatio
     * @returns {ChartOptions}
     */
    ChartOptions.createOptionsSpacing = function (padding, margin, legendPosition, isResponsive, maintainAspectRatio) {
        var options = new ChartOptions();
        options.legend = { display: true, position: legendPosition };
        options.layout = { padding: padding, margin: margin };
        options.responsive = isResponsive;
        options.maintainAspectRatio = maintainAspectRatio;
        return options;
    };
    /**
     * convenience method for construction options with legend and title options
     *
     * @param {string} title
     * @param {number} titleFontSize
     * @param {string} titleColor
     * @param {string} legendPosition
     * @returns {ChartOptions}
     */
    ChartOptions.createOptionsTitle = function (title, titleFontSize, titleColor, legendPosition) {
        var options = new ChartOptions();
        options.title = { display: true, text: title, fontSize: titleFontSize, fontColor: titleColor };
        options.legend = { display: true, position: legendPosition };
        return options;
    };
    /**
     * convenience method for construction options with legend options
     *
     * @param {string} legendPosition
     * @returns {ChartOptions}
     */
    ChartOptions.createOptionsLegend = function (legendPosition) {
        var options = new ChartOptions();
        options.legend = { display: true, position: legendPosition };
        return options;
    };
    return ChartOptions;
}());

//# sourceMappingURL=ng2-charts-options.model.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/pipes/associate-search-by-text-filter/associate-search-by-text-filter.pipes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssociateSearchByTextFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AssociateSearchByTextFilter = (function () {
    /**
     * Pipe to filter searches based on user input
     * @author Alex, Xavier
     */
    function AssociateSearchByTextFilter() {
    }
    AssociateSearchByTextFilter.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        // return results that contain firstname, lastname, status, client, ic
        return items.filter(function (associate) {
            return associate.firstName.toLowerCase().includes(searchText)
                || associate.lastName.toLowerCase().includes(searchText)
                || associate.marketingStatus.toLowerCase().includes(searchText)
                || associate.client.toLowerCase().includes(searchText)
                || associate.id.toString().toLowerCase().includes(searchText);
        });
    };
    return AssociateSearchByTextFilter;
}());
AssociateSearchByTextFilter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filterByText'
    })
    /**
     * Pipe to filter searches based on user input
     * @author Alex, Xavier
     */
], AssociateSearchByTextFilter);

//# sourceMappingURL=associate-search-by-text-filter.pipes.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/pipes/search-filter/search-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @author Han Jung
 * @description Filters out array of strings based on search criteria
 */
var SearchFilterPipe = (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.toLowerCase().includes(searchText);
        });
    };
    return SearchFilterPipe;
}());
SearchFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'searchFilter'
    })
], SearchFilterPipe);

//# sourceMappingURL=search-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/routing/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_form_component_form_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/form-component/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_client_list_client_list_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/client-list/client-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_client_mapped_client_mapped_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/client-mapped/client-mapped.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_associate_list_associate_list_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/associate-list/associate-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_batch_list_batch_list_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/batch-list/batch-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_create_user_create_user_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_root_root_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_skillset_skillset_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/skillset/skillset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_batch_details_batch_details_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/batch-details/batch-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_associate_view_associate_view_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/associate-view/associate-view.component.ts");
/**
 * @author Antony Lulciuc
 * @description Defines all possible navigatable routes for TrackForce application
 */












/**
 * Place paths here
 */
var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'client-listing',
        component: __WEBPACK_IMPORTED_MODULE_2__components_client_list_client_list_component__["a" /* ClientListComponent */]
    },
    {
        path: 'client-mapped/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__components_client_mapped_client_mapped_component__["a" /* ClientMappedComponent */]
    },
    {
        path: 'associate-listing',
        component: __WEBPACK_IMPORTED_MODULE_5__components_associate_list_associate_list_component__["a" /* AssociateListComponent */]
    },
    {
        path: 'associate-listing/:CliOrCur/:name/:mapping/:status',
        component: __WEBPACK_IMPORTED_MODULE_5__components_associate_list_associate_list_component__["a" /* AssociateListComponent */]
    },
    {
        path: 'batch-listing',
        component: __WEBPACK_IMPORTED_MODULE_6__components_batch_list_batch_list_component__["a" /* BatchListComponent */]
    },
    {
        path: 'batch-details/:id',
        component: __WEBPACK_IMPORTED_MODULE_10__components_batch_details_batch_details_component__["a" /* BatchDetailsComponent */]
    },
    {
        path: 'form-comp/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__components_form_component_form_component__["a" /* FormComponent */]
    },
    {
        path: 'create-user',
        component: __WEBPACK_IMPORTED_MODULE_7__components_create_user_create_user_component__["a" /* CreateUserComponent */]
    },
    {
        path: 'root',
        component: __WEBPACK_IMPORTED_MODULE_8__components_root_root_component__["a" /* RootComponent */]
    },
    {
        path: 'skillset/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__components_skillset_skillset_component__["a" /* SkillsetComponent */]
    },
    {
        path: 'associate-view/:id',
        component: __WEBPACK_IMPORTED_MODULE_11__components_associate_view_associate_view_component__["a" /* AssociateViewComponent */]
    }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/services/associates-service/associates-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssociateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Service for retrieving and updating data relating to associates.
 * @author Alex, Xavier
 */
var AssociateService = (function () {
    function AssociateService(http) {
        this.http = http;
    }
    /**
     * Get all of the associates
     */
    AssociateService.prototype.getAllAssociates = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url + 'TrackForce/track/associates/all';
        return this.http.get(url);
    };
    AssociateService.prototype.getAssociate = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url + 'TrackForce/track/associates/' + id;
        return this.http.get(url);
    };
    /**
     * Update the given associates statuses/clients
     * @param ids of associates to be updated
     */
    AssociateService.prototype.updateAssociates = function (ids, ustatus, uclient) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url + 'TrackForce/track/associates/update/' + ustatus + '/' + uclient;
        return this.http.put(url, ids);
    };
    AssociateService.prototype.updateAssociate = function (id, ustatus, uclient) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url + 'TrackForce/track/associates/' + id + '/update/' + ustatus + '/' + uclient;
        return this.http.put(url, null);
    };
    return AssociateService;
}());
AssociateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], AssociateService);

var _a;
//# sourceMappingURL=associates-service.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/services/authentication-service/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_service_request_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/request-service/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Michael Tseng
 * @description Service for authenicating users
 */




var USER_KEY = 'currentUser';
var AuthenticationService = (function () {
    /**
    * @constructor
    *
    *@param {RequestService}
    * Service for handling all requests to the server
    *
    */
    function AuthenticationService(rs, router) {
        this.rs = rs;
        this.router = router;
    }
    /**
    *Login service that stores a user object on local storage
    *It will only store a user if the object itself is valid and the token is valid
    *
    *@param {string} username
    * The username to be checked against the database
    *
    *@param {string} password
    *The password need to be sent to the database for checking
    *
    *@return
    *The user object that contains the JWT, username, and role id
    */
    AuthenticationService.prototype.login = function (username, password) {
        return this.rs.login(username, password).map(function (user) {
            if (user) {
                localStorage.setItem(USER_KEY, JSON.stringify(user));
            }
            return user;
        });
    };
    /**
    *Removes user from localStorage
    *And navigates back to login
    *
    *@param none
    */
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem(USER_KEY);
        this.router.navigate(['login']);
    };
    /**
     * Check for an active session
     */
    AuthenticationService.prototype.getUser = function () {
        var user = JSON.parse(localStorage.getItem(USER_KEY));
        return user;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__request_service_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__request_service_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/services/batch-service/batch.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/** @Author Princewill Ibe */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BatchService = (function () {
    function BatchService(http) {
        this.http = http;
    }
    /**
     * given start and end date, return the batches that started and completed
     * within the time range
     *
     * @param {Date} startDate
     * @param {Date} endDate
     * @returns {Observable<Batch[]>}
     */
    BatchService.prototype.getBatchesByDate = function (startDate, endDate) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + ("TrackForce/track/batches/" + startDate.getTime() + "/" + endDate.getTime());
        return this.http.get(url, { withCredentials: true });
    };
    /**
     * get batches within six months of current
     *
     * @returns {Observable<Batch[]>}
     */
    BatchService.prototype.getDefaultBatches = function () {
        var now = new Date();
        // all batches will be over by then
        var monthRadius = 3;
        var threeMonthsBefore = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        threeMonthsBefore.setMonth(threeMonthsBefore.getMonth() - monthRadius);
        var threeMonthsAfter = new Date(now.getFullYear(), now.getMonth(), 28);
        threeMonthsAfter.setMonth(threeMonthsAfter.getMonth() + monthRadius);
        return this.getBatchesByDate(threeMonthsBefore, threeMonthsAfter);
    };
    /**
     * as the name suggests, fetches list of associates in the batch with given id
     * @param {number} id
     * @returns {Observable<Associate[]>}
     */
    BatchService.prototype.getAssociatesForBatch = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'TrackForce/track/batches/' + id + '/associates';
        return this.http.get(url);
    };
    return BatchService;
}());
BatchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], BatchService);

var _a;
//# sourceMappingURL=batch.service.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/services/client-list-service/client-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @author Han Jung
 * @description methods for grabbing data from api for client list
 */
var ClientListService = (function () {
    function ClientListService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'TrackForce/track';
    }
    // gets all clients name from the track force API
    ClientListService.prototype.getAllClientsNames = function () {
        return this.http.get(this.url + '/clients');
    };
    // get all Client objects
    ClientListService.prototype.getAllClients = function () {
        return this.http.get(this.url + '/info');
    };
    // get first match of Client Object
    ClientListService.prototype.getOneClient = function (clientId) {
        return this.http.get(this.url + '/clients/' + clientId);
    };
    return ClientListService;
}());
ClientListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], ClientListService);

var _a;
//# sourceMappingURL=client-list.service.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/services/client-mapped-service/client-mapped-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientMappedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http___ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * This service is used to handle data for the ClientMappedComponent
 */
var ClientMappedService = (function () {
    function ClientMappedService(http) {
        this.http = http;
    }
    /**
     * @function getAssociatesByStatus
     * @description Make an http request to the /track/client webservice, fetching mapped associates
     * with the given marketing status.
     * @param statusId Contains the marketing status id used to fetch data
     */
    ClientMappedService.prototype.getAssociatesByStatus = function (statusId) {
        console.log('Inside ClientMappedService');
        console.log('statudId: ' + statusId);
        // environment.url contains the url to the webservice. See the environment import, above.
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'TrackForce/track/associates/client/' + statusId);
    };
    return ClientMappedService;
}());
ClientMappedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http___["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http___["b" /* HttpClient */]) === "function" && _a || Object])
], ClientMappedService);

var _a;
//# sourceMappingURL=client-mapped-service.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/services/create-user-service/create-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_service_request_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/request-service/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author Matt Snee
 */



var CreateUserService = (function () {
    /**
    * @constructor
    * @param {RequestService}
    * Service for handling all requests to the server
    */
    function CreateUserService(rs) {
        this.rs = rs;
    }
    /**
     * Creates new user in database
     * @param {string} username
     * New user's Username
     *
     * @param {string} password
     * New user's Password
     *
     * @param {number} roleId
     * New user's Role ID
     *      1 Admin ----------- user has full privileges including Creating New Users
     *      2 Manager --------- user has full privileges excluding Creating New Users
     *      3 Vice President -- pending implementation
     *      4 Associate ------- pending implemenation
     */
    CreateUserService.prototype.createUser = function (username, password, roleId) {
        return this.rs.createUser(username, password, roleId);
    };
    return CreateUserService;
}());
CreateUserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__request_service_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__request_service_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], CreateUserService);

var _a;
//# sourceMappingURL=create-user.service.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/services/datasync-service/data-sync.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSyncService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service_request_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/request-service/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @author Seán Vaeth
 *
 * This component requires some documentation
 * Datasync is bootstrapped with the app. This means it will run on ng serve before components
 * that use it are initialized. It also has the benefit of being singleton across the app,
 * as opposed to providers being prototyped.
 *
 * The purpsoe of the datasync service is to synchronize all data across the app for all sessions
 * with the data read in from the database containing Salesforce data. DSS will quietly run in the
 * background of any component dependent on server side data and update accordingly.
 * DSS also ensures only one thread is used to hit the server side in background methods.
 * All other requests are prompted by the logged user with appropriate permissions
 *
 * This allows the application to run faster using cached data pulled in from the server at set intervals
 *
 */
var ASSOC_TIMEOUT = 30000;
var BATCH_TIMEOUT = 30000;
var CLIENT_TIMEOUT = 30000;
var CURRI_TIMEOUT = 30000;
var MARKET_TIMEOUT = 30000;
var ASSOC_INT = 2000;
var BATCH_INT = 2000;
var CLIENT_INT = 2000;
var CURRI_INT = 2000;
var MARKET_INT = 2000;
var DataSyncService = (function () {
    // inject RequestService for handling requests to the server
    function DataSyncService(rs) {
        this.rs = rs;
        // special auth token. This will only work as long as TestAdmin is a valid user
        this.token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0QWRtaW4iLCJleHAiOjE1MTU4ODA0NTB9.8n2K4gYpDCzIxgOASTI467f1HZtbIkGB16-eb0atSXI';
        // fetch data on initialization
        this.fetchData();
    }
    DataSyncService.prototype.checkFetchData = function () {
    };
    /**
     * @function fetchData
     *
     * Fetch data from server
     * this method populates our caches
     * and begins the data monitoring observables
     */
    DataSyncService.prototype.fetchData = function () {
        // Initialize behaviors to empty arrays
        // this.associateStorage = new BehaviorSubject<Associate[]>([]);
        // this.clientStorage = new BehaviorSubject<Client[]>([]);
        // this.batchStorageById = new BehaviorSubject<Batch[]>([]);
        // this.batchStorageByDate = new BehaviorSubject<Batch[]>([]);
        // this.curriculumStorage = new BehaviorSubject<Curriculum[]>([]);
        // get data on load
        this.fetchAssociateStorage();
        this.fetchBatchStorageSortedById();
        this.fetchBatchStorageSortedByDate();
        this.fetchClientStorage();
        this.fetchCurriculumStorage();
        this.fetchMarketingStorage();
    };
    /**
     *  getters and setters
     *  Getters: gets data from server using http requests then subscribes to storage updates
     *  Setters: stores data to storage units then subscribes on more data input
     *            notifies observers of change to stored data
     * */
    //
    DataSyncService.prototype.setAssociateStorage = function (data) {
        var newStorage = this.associateStorage = data;
        // this.associateStorage.next(newSt orage);
    };
    DataSyncService.prototype.fetchAssociateStorage = function () {
        this.rs.getAssociates().subscribe(function (data) {
            // this.setAssociateStorage(data);
        });
    };
    DataSyncService.prototype.setClientStorage = function (data) {
        var newStorage = this.clientStorage = data;
        // this.clientStorage.next(newStorage);
    };
    DataSyncService.prototype.fetchClientStorage = function () {
        this.rs.getClients().subscribe(function (data) {
            // this.setClientStorage(data);
        });
    };
    DataSyncService.prototype.setBatchStorageSortedById = function (data) {
        var newStorage = this.batchStorageById = data;
        // this.batchStorageById.next(newStorage);
    };
    DataSyncService.prototype.fetchBatchStorageSortedById = function () {
        this.rs.getBatchesSortedById().subscribe(function (data) {
            // this.setBatchStorageSortedById(data);
        });
    };
    DataSyncService.prototype.setBatchStorageSortedByDate = function (data) {
        var newStorage = this.batchStorageByDate = data;
        // this.batchStorageByDate.next(newStorage);
    };
    DataSyncService.prototype.fetchBatchStorageSortedByDate = function () {
        this.rs.getBatchesSortedByDate().subscribe(function (data) {
            // this.setBatchStorageSortedByDate(data);
        });
    };
    DataSyncService.prototype.setCurriculumStorage = function (data) {
        var newStorage = this.curriculumStorage = data;
        // this.curriculumStorage.next(newStorage);
    };
    DataSyncService.prototype.fetchCurriculumStorage = function () {
        this.rs.getSkills().subscribe(function (data) {
            // this.setCurriculumStorage(data);
        });
    };
    DataSyncService.prototype.setMarketingStorage = function (data) {
        this.marketingStorage = data;
        this.marketingStorage.subscribe(function () {
        });
    };
    DataSyncService.prototype.fetchMarketingStorage = function () {
        this.rs.getStatuses().subscribe(function (data) {
            console.log('Fetched');
            // this.setMarketingStorage(data);
        });
    };
    return DataSyncService;
}());
DataSyncService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__request_service_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__request_service_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], DataSyncService);

var _a;
//# sourceMappingURL=data-sync.service.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/services/request-service/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestService = (function () {
    function RequestService(http) {
        this.http = http;
        this.host = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url;
        this.trackPath = this.host + 'TrackForce/track';
        this.dataPath = this.host + 'TrackForce/track/data/get';
    }
    RequestService.prototype.populateDB = function () {
        return this.http.get(this.host + 'TrackForce/track/database/populateDB');
    };
    RequestService.prototype.populateDBSF = function () {
        return this.http.get(this.host + 'TrackForce/track/database/populateDBSF');
    };
    RequestService.prototype.deleteDB = function () {
        return this.http.delete(this.host + 'TrackForce/track/database/deleteFromDB');
    };
    RequestService.prototype.login = function (username, password) {
        return this.http.post(this.host + 'TrackForce/track/user/submit', { username: username, password: password });
    };
    RequestService.prototype.getUsername = function () {
        return this.http.get(this.host + 'TrackForce/track/user/name');
    };
    RequestService.prototype.updateAssociates = function () {
        return this.http.post(this.trackPath + '/data/update/associate', {});
    };
    RequestService.prototype.getAssociates = function () {
        return this.http.get(this.dataPath + '/associate');
    };
    RequestService.prototype.getBatchesSortedById = function () {
        return this.http.get(this.dataPath + '/batch');
    };
    RequestService.prototype.getBatchesSortedByDate = function () {
        return this.http.get(this.dataPath + '/batch/date');
    };
    RequestService.prototype.getClients = function () {
        return this.http.get(this.dataPath + '/client');
    };
    RequestService.prototype.getTotals = function () {
        return this.http.get(this.dataPath + '/summary');
    };
    RequestService.prototype.getSkills = function () {
        return this.http.get(this.dataPath + '/skills');
    };
    RequestService.prototype.getStatuses = function () {
        return this.http.get(this.dataPath + '/marketing');
    };
    RequestService.prototype.getBatches = function (threeMonthsBefore, threeMonthsAfter) {
        return this.http.get(this.host + 'TrackForce/track/batches/' + threeMonthsBefore + '/' + threeMonthsAfter);
    };
    RequestService.prototype.getBatchPerType = function (threeMonthsBefore, threeMonthsAfter) {
        return this.http.get(this.host + 'TrackForce/track/batches/' + threeMonthsBefore + '/' + threeMonthsAfter + '/type');
    };
    RequestService.prototype.createUser = function (username, password, roleId) {
        return this.http.post(this.host + 'TrackForce/track/create/user', { username: username, password: password, role: roleId });
    };
    // get first match of Client Object
    RequestService.prototype.getOneClient = function (clientId) {
        return this.http.get(this.trackPath + '/clients/' + clientId);
    };
    return RequestService;
}());
RequestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], RequestService);

var _a;
//# sourceMappingURL=request.service.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/services/skill-set-service/skill-set.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SkillsetService = (function () {
    function SkillsetService(http) {
        this.http = http;
        this.MOCK_API = 'https://9a03ee58-6ed8-4d7b-8df1-60f505a77580.mock.pstmn.io/';
        this.NO_BACKEND = false;
    }
    SkillsetService.prototype.getSkillsetsForStatusID = function (statusID) {
        return this.http.get(((this.NO_BACKEND) ? this.MOCK_API : __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url) +
            'TrackForce/track/associates/skillset/' + statusID);
    };
    return SkillsetService;
}());
SkillsetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], SkillsetService);

var _a;
//# sourceMappingURL=skill-set.service.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/testing-helpers/router-stubs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterLinkStubDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RouterOutletStubComponent; });
/* unused harmony export RouterStub */
/* unused harmony export ActivatedRouteStub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* unused harmony reexport ActivatedRoute */
/* unused harmony reexport Router */
/* unused harmony reexport RouterLink */
/* unused harmony reexport RouterOutlet */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// export for convenience.
/*
   Code found at https://angular.io/guide/testing#live-examples
*/


var RouterLinkStubDirective = (function () {
    function RouterLinkStubDirective() {
        this.navigatedTo = null;
    }
    RouterLinkStubDirective.prototype.onClick = function () {
        this.navigatedTo = this.linkParams;
    };
    return RouterLinkStubDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('routerLink'),
    __metadata("design:type", Object)
], RouterLinkStubDirective.prototype, "linkParams", void 0);
RouterLinkStubDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[routerLink]',
        host: {
            '(click)': 'onClick()'
        }
    })
], RouterLinkStubDirective);

var RouterOutletStubComponent = (function () {
    function RouterOutletStubComponent() {
    }
    return RouterOutletStubComponent;
}());
RouterOutletStubComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({ selector: 'router-outlet', template: '' })
], RouterOutletStubComponent);

var RouterStub = (function () {
    function RouterStub() {
    }
    RouterStub.prototype.navigate = function (commands, extras) { };
    return RouterStub;
}());
RouterStub = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], RouterStub);

// Only implements params and part of snapshot.paramMap


var ActivatedRouteStub = (function () {
    function ActivatedRouteStub() {
        // ActivatedRoute.paramMap is Observable
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](Object(__WEBPACK_IMPORTED_MODULE_0__angular_router__["convertToParamMap"])(this.testParamMap));
        this.paramMap = this.subject.asObservable();
    }
    Object.defineProperty(ActivatedRouteStub.prototype, "testParamMap", {
        get: function () { return this._testParamMap; },
        set: function (params) {
            this._testParamMap = Object(__WEBPACK_IMPORTED_MODULE_0__angular_router__["convertToParamMap"])(params);
            this.subject.next(this._testParamMap);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteStub.prototype, "snapshot", {
        // ActivatedRoute.snapshot.paramMap
        get: function () {
            return { paramMap: this.testParamMap };
        },
        enumerable: true,
        configurable: true
    });
    return ActivatedRouteStub;
}());
ActivatedRouteStub = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], ActivatedRouteStub);

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=router-stubs.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/track-force.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/track-force.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container-fluid max-dim\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/track-force.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackForceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrackForceComponent = (function () {
    function TrackForceComponent() {
        this.title = 'apps';
    }
    return TrackForceComponent;
}());
TrackForceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-track-force',
        template: __webpack_require__("../../../../../src/app/portals/Track-Force/track-force.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portals/Track-Force/track-force.component.css")]
    })
], TrackForceComponent);

//# sourceMappingURL=track-force.component.js.map

/***/ }),

/***/ "../../../../../src/app/portals/Track-Force/track-force.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackForceModule", function() { return TrackForceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__track_force_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/track-force.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_associate_list_associate_list_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/associate-list/associate-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_batch_list_batch_list_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/batch-list/batch-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_client_mapped_client_mapped_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/client-mapped/client-mapped.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_create_user_create_user_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_client_list_client_list_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/client-list/client-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_form_component_form_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/form-component/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_root_root_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_skillset_skillset_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/skillset/skillset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_batch_details_batch_details_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/batch-details/batch-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_associate_view_associate_view_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/associate-view/associate-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_request_service_request_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/request-service/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_associates_service_associates_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/associates-service/associates-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_client_list_service_client_list_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/client-list-service/client-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_client_mapped_service_client_mapped_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/client-mapped-service/client-mapped-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_authentication_service_authentication_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/authentication-service/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_search_filter_search_filter_pipe__ = __webpack_require__("../../../../../src/app/portals/Track-Force/pipes/search-filter/search-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_batch_service_batch_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/batch-service/batch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_skill_set_service_skill_set_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/skill-set-service/skill-set.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_datasync_service_data_sync_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/datasync-service/data-sync.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_create_user_service_create_user_service__ = __webpack_require__("../../../../../src/app/portals/Track-Force/services/create-user-service/create-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_associate_search_by_text_filter_associate_search_by_text_filter_pipes__ = __webpack_require__("../../../../../src/app/portals/Track-Force/pipes/associate-search-by-text-filter/associate-search-by-text-filter.pipes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__interceptors_jwt_interceptor__ = __webpack_require__("../../../../../src/app/portals/Track-Force/interceptors/jwt.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__routing_routes__ = __webpack_require__("../../../../../src/app/portals/Track-Force/routing/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__testing_helpers_router_stubs__ = __webpack_require__("../../../../../src/app/portals/Track-Force/testing-helpers/router-stubs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_footer_footer_footer_component__ = __webpack_require__("../../../../../src/app/portals/Track-Force/components/footer/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///
//  DEPENDENCIES
///
// import { BrowserModule } from '@angular/platform-browser';






///
//  COMPONENTS
///














///
//  SERVICES
///










///
//  FILTERS
///
///

///
//  SECURITY
///

///
//  CONSTANTS
///




var TrackForceModule = (function () {
    function TrackForceModule() {
    }
    return TrackForceModule;
}());
TrackForceModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__track_force_component__["a" /* TrackForceComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_associate_list_associate_list_component__["a" /* AssociateListComponent */],
            __WEBPACK_IMPORTED_MODULE_30__pipes_associate_search_by_text_filter_associate_search_by_text_filter_pipes__["a" /* AssociateSearchByTextFilter */],
            __WEBPACK_IMPORTED_MODULE_8__components_batch_list_batch_list_component__["a" /* BatchListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_client_mapped_client_mapped_component__["a" /* ClientMappedComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_form_component_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_client_list_client_list_component__["a" /* ClientListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_create_user_create_user_component__["a" /* CreateUserComponent */],
            __WEBPACK_IMPORTED_MODULE_25__pipes_search_filter_search_filter_pipe__["a" /* SearchFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_18__components_batch_details_batch_details_component__["a" /* BatchDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_root_root_component__["a" /* RootComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_skillset_skillset_component__["a" /* SkillsetComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_associate_view_associate_view_component__["a" /* AssociateViewComponent */],
            __WEBPACK_IMPORTED_MODULE_33__testing_helpers_router_stubs__["a" /* RouterLinkStubDirective */],
            __WEBPACK_IMPORTED_MODULE_33__testing_helpers_router_stubs__["b" /* RouterOutletStubComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_footer_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            // BrowserModule,
            __WEBPACK_IMPORTED_MODULE_35__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_32__routing_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_3_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__["Ng2OrderModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__services_associates_service_associates_service__["a" /* AssociateService */],
            __WEBPACK_IMPORTED_MODULE_22__services_client_list_service_client_list_service__["a" /* ClientListService */],
            __WEBPACK_IMPORTED_MODULE_23__services_client_mapped_service_client_mapped_service__["a" /* ClientMappedService */],
            __WEBPACK_IMPORTED_MODULE_24__services_authentication_service_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_20__services_request_service_request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_27__services_skill_set_service_skill_set_service__["a" /* SkillsetService */],
            __WEBPACK_IMPORTED_MODULE_26__services_batch_service_batch_service__["a" /* BatchService */],
            __WEBPACK_IMPORTED_MODULE_29__services_create_user_service_create_user_service__["a" /* CreateUserService */],
            __WEBPACK_IMPORTED_MODULE_27__services_skill_set_service_skill_set_service__["a" /* SkillsetService */],
            __WEBPACK_IMPORTED_MODULE_28__services_datasync_service_data_sync_service__["a" /* DataSyncService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_31__interceptors_jwt_interceptor__["a" /* JwtInterceptor */],
                multi: true
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__track_force_component__["a" /* TrackForceComponent */]]
    })
], TrackForceModule);

//# sourceMappingURL=track-force.module.js.map

/***/ })

});
//# sourceMappingURL=track-force.module.chunk.js.map