"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var patient_service_1 = require("../model/patient.service");
var router_1 = require("@angular/router");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_patientservice, _router, _activatedroute) {
        this._patientservice = _patientservice;
        this._router = _router;
        this._activatedroute = _activatedroute;
        this.imgPath = "1.jpg";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patients = this._patientservice.getPatientiDetails();
        this._activatedroute.paramMap.subscribe(function (params) {
            _this.ID = params.get('id');
        });
        this.patient = this._patientservice.getPatientiDetailsById(this.ID);
    };
    DashboardComponent.prototype.passvalue = function (id) {
        // this._router.navigate(['/Dashboard', this.ID]);
        this.patient = this._patientservice.getPatientiDetailsById(id);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/DashBoard/dashboard.component.html'
        }),
        __metadata("design:paramtypes", [patient_service_1.PatientService,
            router_1.Router, router_1.ActivatedRoute])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map