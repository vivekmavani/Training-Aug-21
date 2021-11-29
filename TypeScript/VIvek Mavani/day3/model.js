"use strict";
exports.__esModule = true;
exports.Hiring = exports.ApplicantData = exports.Vacancies = void 0;
var interface_1 = require("./interface");
var Vacancies = /** @class */ (function () {
    function Vacancies() {
    }
    Vacancies.prototype.setVacancyData = function (data) {
        interface_1.vacancyList.push(data);
    };
    Vacancies.prototype.removeVacancy = function (vid) {
        for (var _i = 0, vacancyList_1 = interface_1.vacancyList; _i < vacancyList_1.length; _i++) {
            var item = vacancyList_1[_i];
            if (vid == item.vid) {
                var index = interface_1.vacancyList.indexOf(item);
                interface_1.vacancyList.splice(index, 1);
            }
        }
    };
    return Vacancies;
}());
exports.Vacancies = Vacancies;
var ApplicantData = /** @class */ (function () {
    function ApplicantData() {
    }
    ApplicantData.prototype.setApplicantData = function (data) {
        for (var _i = 0, vacancyList_2 = interface_1.vacancyList; _i < vacancyList_2.length; _i++) {
            var item = vacancyList_2[_i];
            if (data.vid == item.vid) {
                if (item.status == true && data.Result != null) {
                    interface_1.ApplicantList.push(data);
                }
                else {
                    console.log("Interview completed please enter the result of applicant");
                }
                if (item.status == false && data.Result == null) {
                    interface_1.ApplicantList.push(data);
                }
                else {
                    console.log("interview not completed please do not enter the result of applicant");
                }
            }
            else {
                console.log("No vacancy for  ".concat(data.vid));
            }
        }
    };
    ApplicantData.prototype.ShowApplicants = function () {
        for (var _i = 0, ApplicantList_1 = interface_1.ApplicantList; _i < ApplicantList_1.length; _i++) {
            var item = ApplicantList_1[_i];
            console.log(item);
        }
    };
    return ApplicantData;
}());
exports.ApplicantData = ApplicantData;
var Hiring = /** @class */ (function () {
    function Hiring() {
    }
    Hiring.prototype.scheduleInterview = function () {
        for (var _i = 0, vacancyList_3 = interface_1.vacancyList; _i < vacancyList_3.length; _i++) {
            var item = vacancyList_3[_i];
            if (item.status == false) {
                console.log("Interview for ".concat(item.post, " On ").concat(item.date));
            }
        }
    };
    Hiring.prototype.storingResult = function () {
        var ApplicantResult = [];
        for (var _i = 0, ApplicantList_2 = interface_1.ApplicantList; _i < ApplicantList_2.length; _i++) {
            var item = ApplicantList_2[_i];
            if (item.Result != null) {
                ApplicantResult.push({ ID: item.vid, Name: item.Name, Result: item.Result });
            }
        }
        return ApplicantResult;
    };
    Hiring.prototype.HiringApplicant = function () {
        console.log("List of Hired Applicant");
        for (var _i = 0, ApplicantList_3 = interface_1.ApplicantList; _i < ApplicantList_3.length; _i++) {
            var item = ApplicantList_3[_i];
            if (item.Result != null && item.Result > 60) {
                console.log("".concat(item.Name, "\t").concat(item.Result));
            }
        }
    };
    Hiring.prototype.Report = function () {
        for (var _i = 0, vacancyList_4 = interface_1.vacancyList; _i < vacancyList_4.length; _i++) {
            var item = vacancyList_4[_i];
            if (item.status == true) {
                console.log("For post of ".concat(item.post));
                for (var _a = 0, ApplicantList_4 = interface_1.ApplicantList; _a < ApplicantList_4.length; _a++) {
                    var a = ApplicantList_4[_a];
                    if (a.vid == item.vid) {
                        if (a.Result > 60) {
                            console.log("".concat(a.ApplicantID, "  ").concat(a.Name, "  ").concat(a.Result, "  Selected"));
                        }
                        else {
                            console.log("".concat(a.ApplicantID, "  ").concat(a.Name, "  ").concat(a.Result, "  Not Selected"));
                        }
                    }
                }
            }
            else {
                console.log("Interview::-- ".concat(item.post, " -- ").concat(item.date));
            }
        }
    };
    return Hiring;
}());
exports.Hiring = Hiring;
