(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-financial-summary-financial-summary-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/financial-summary/financial-summary-view/financial-summary.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/financial-summary/financial-summary-view/financial-summary.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<kt-portlet>\r\n\t\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t\t<ng-container ktPortletTitle>\r\n\t\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t\t<span>الملخص المالي</span>\r\n\t\t\t\t</h3>\r\n\t\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t<!-- <button (click)=\"addMove()\" mat-raised-button matTooltip=\"حركة جديدة\" color=\"primary\" type=\"button\">\r\n                    <span>ايداع في البنك</span>\r\n                </button> -->\r\n\t\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t\t</ng-container>\r\n\t\t</kt-portlet-header>\r\n\t\t<!-- end::Header -->\r\n\r\n\t\t<kt-portlet-body>\r\n\t\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t\t<div class=\"kt-form\">\r\n\t\t\t\t<!-- start::FILTERS -->\r\n\t\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t\t<!-- <div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n                            <div class=\"kt-form__control\">\r\n                                <mat-form-field class=\"mat-form-field-fluid\">\r\n                                    <mat-select [(value)]=\"selectedFuelType\">\r\n                                        <mat-option value=\"\">الكل</mat-option>\r\n                                        <mat-option [value]=\"fuelType.id\" *ngFor=\"let fuelType of fuelTypes\">\r\n                                            {{fuelType.name}}</mat-option>\r\n                                    </mat-select>\r\n                                    <mat-hint align=\"start\">\r\n                                        اختر <strong>الصنف</strong>\r\n                                    </mat-hint>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div> -->\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t<input matInput type=\"month\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\t\t   style=\"color: black;\">\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t<input matInput type=\"month\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\t\t   style=\"color: black;\">\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button (click)=\"loadFinancialList()\" mat-raised-button matTooltip=\"\" color=\"primary\"\r\n\t\t\t\t\t\t\ttype=\"button\">\r\n\t\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- end::FILTERS -->\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t\t<!-- start::Summary -->\r\n\t\t\t<!-- <div *ngIf=\"dataSource.data.length > 0\">\r\n                <div class=\"form-group kt-form__group row m-0\">\r\n                    <div class=\"col-md-4 mb-0\">\r\n                        <ngb-alert type=\"info\" [dismissible]=\"false\">\r\n                            مجموع النقد الكلي: {{totalCashBalance.toFixed(2)}}\r\n                        </ngb-alert>\r\n                    </div>\r\n                    <div class=\"col-md-4 mb-0\">\r\n                        <ngb-alert type=\"info\" [dismissible]=\"false\">\r\n                            الخصم على المبيعات: {{discounts.toFixed(2)}}\r\n                        </ngb-alert>\r\n                    </div>\r\n                    <div class=\"col-md-4 mb-0\">\r\n                        <ngb-alert type=\"info\" [dismissible]=\"false\">\r\n                            المصاريف: {{expenses.toFixed(2)}}\r\n                        </ngb-alert>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n\t\t\t<!-- end::Summary -->\r\n\t\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t\t<div style=\"display: flex; column-gap: 5px\">\r\n\t\t\t\t<div style=\"text-align: right;\">\r\n\t\t\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: 'الملخص المالي', Props: {Author: 'Admin'}})\"\r\n\t\t\t\t\t\t\tmatTooltip=\"Excel\">تنزيل\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div style=\"text-align: right;\">\r\n\t\t\t\t\t<button mat-raised-button color=\"primary\" (click)=\"downloadAsPDF()\"\r\n\t\t\t\t\t\t\tmatTooltip=\"Excel\">تنزيل pdf\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\t\t\t   matSortActive=\"total\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t\t\t   #exporter=\"matTableExporter\">\r\n\t\t\t\t\t<ng-container matColumnDef=\"date\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الشهر</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let financial\">{{financial.date}}</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- <ng-container matColumnDef=\"gasolineNetSales\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>صافي مبيعات البنزين</mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let financial\">{{financial.gasolineNetSales}}\r\n                        </mat-cell>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"gasolineCashBalance\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>الرصيد النقدي للبنزين</mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let financial\">{{financial.gasolineCashBalance}}</mat-cell>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"dieselNetSales\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>صافي مبيعات السولار</mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let financial\">{{financial.dieselNetSales}}</mat-cell>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"dieselCashBalance\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>الرصيد النقدي للسولار</mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let financial\">{{financial.dieselCashBalance}}</mat-cell>\r\n                    </ng-container>\r\n\r\n\r\n                    <ng-container matColumnDef=\"discounts\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>الخصم عالى المبيعات</mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let financial\">{{financial.discounts}}</mat-cell>\r\n                    </ng-container>\r\n\r\n\r\n                    <ng-container matColumnDef=\"expenses\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>المصاريف</mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let financial\">{{financial.expenses}}</mat-cell>\r\n                    </ng-container> -->\r\n\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"totalCashBalance\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>مجموع النقد الكلي</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let financial\">{{financial.totalCashBalance}}</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- <ng-container matColumnDef=\"actions\">\r\n                        <mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let financial\" class=\"actionsColumn\">\r\n                            <button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editExpense(financial)\">\r\n                                <mat-icon>create</mat-icon>\r\n                            </button>&nbsp;\r\n                            <button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n                                (click)=\"deleteExpense(financial)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>&nbsp;\r\n                        </mat-cell>\r\n                    </ng-container> -->\r\n\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t\t</mat-table>\r\n\t\t\t\t<!-- Message for empty data  -->\r\n\t\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<!-- start: BOTTOM -->\r\n\t\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\"\r\n\t\t\t\t\t\t\t   [length]=\"dataSource.data.length\" [showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t\t</div>\r\n\t\t\t<!-- end: BOTTOM -->\r\n\t\t</kt-portlet-body>\r\n\t\t<!-- end::Body -->\r\n\r\n\t</kt-portlet>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/financial-summary/financial-summary.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/financial-summary/financial-summary.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-xl-12\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<financial-summary-view></financial-summary-view>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/financial-summary/financial-summary-view/financial-summary.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/financial-summary/financial-summary-view/financial-summary.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZmluYW5jaWFsLXN1bW1hcnkvZmluYW5jaWFsLXN1bW1hcnktdmlldy9DOlxcVXNlcnNcXG9tZW5cXERlc2t0b3BcXEdpdEh1YlxcRnJvbnQtS2F6ZWFoXFxnYXMtc3RhdGlvbi9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxmaW5hbmNpYWwtc3VtbWFyeVxcZmluYW5jaWFsLXN1bW1hcnktdmlld1xcZmluYW5jaWFsLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR2xCO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdsQjtFQUVFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZmluYW5jaWFsLXN1bW1hcnkvZmluYW5jaWFsLXN1bW1hcnktdmlldy9maW5hbmNpYWwtc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlQ29sdW1uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWN0aW9uc0NvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG5cdGRpdiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/financial-summary/financial-summary-view/financial-summary.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/financial-summary/financial-summary-view/financial-summary.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: FinancialSummaryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialSummaryViewComponent", function() { return FinancialSummaryViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _financial_summary_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./financial-summary.model */ "./src/app/views/pages/financial-summary/financial-summary-view/financial-summary.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../globalVariables */ "./src/app/views/pages/globalVariables.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_11__);

// Angular

// Material


// NGRX

// Services and Models

// Components
// Http






// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/compgetItemCssClassByStatusonents/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var FinancialSummaryViewComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutUtilsService
     * @param dialog
     * @param snackBar: MatSnackBar
     * @param store: Store<AppState>
     * @param http
     */
    function FinancialSummaryViewComponent(layoutUtilsService, dialog, snackBar, store, http) {
        this.layoutUtilsService = layoutUtilsService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.store = store;
        this.http = http;
        this.refreshSafeInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // 'gasolineNetSales', 'gasolineCashBalance', 'dieselNetSales', 'dieselCashBalance', 'discounts', 'expenses',
        this.displayedColumns = ['date', 'totalCashBalance'];
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.selectedEmployee = '';
        this.selectedFuelType = '';
        this.selectedGasPump = '';
        this.date = new Date();
        this.month = ("0" + (this.date.getMonth() + 1)).slice(-2);
        this.year = this.date.getFullYear().toString();
        // selectedDate = `${this.year}-${this.month}`;
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = this.year + "-" + this.month;
        this.dateTo = this.year + "-" + this.month;
        // Filter data
        // TODO: Get using APIs
        this.totalCashBalance = 0;
        this.discounts = 0;
        this.expenses = 0;
        // Selection
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.financialResult = [];
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
        // Language
        this.languageText = {
            empty: 'لا يوجد بيانات لعرضها',
            searching: 'جار البحث ...',
            search: 'بحث',
            filterEmptyMessage: 'لا يوجد بيانات مطابقة ل ',
            confirm: 'تأكيد',
            close: 'الغاء',
            add: 'اضافة',
            itemsPerPage: 'عدد الصفوف بالصفحة:',
            firstPage: 'الصفحة الأولى',
            lastpage: 'الصفحة الأخيرة',
            previousPage: 'الصفحة السابقة',
            nextPage: 'الصفحة التالية'
        };
        this.arabicRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return "0 \u0645\u0646 " + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            var endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + " - " + endIndex + " \u0645\u0646 " + length;
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    FinancialSummaryViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init DataSource
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
        this.loadFinancialList();
    };
    /**
     * On Destroy
     */
    FinancialSummaryViewComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /** ACTIONS */
    /**
     * Load Financial List from service through data-source
     */
    FinancialSummaryViewComponent.prototype.loadFinancialList = function () {
        var _this = this;
        this.isLoadingResults = true;
        // if (this.dateFrom.includes('-')) {
        // 	this.month = this.dateFrom.split('-')[1];
        // 	this.year = this.dateFrom.split('-')[0];
        // }
        // let url = '?month=' + this.month + '&year=' + this.year;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?From=' + dateFrom + '&To=' + dateTo;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_7__["default"].baseUrl + 'api/Reports/Financial/Summary' + url, { headers: this.headers })
            .subscribe(function (res) {
            if (res.success) {
                _this.isLoadingResults = false;
                var data = [];
                for (var index = 0; index < res.data.length; index++) {
                    var item = res.data[index];
                    data.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item));
                }
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
                if (_this.paginator) {
                    _this.paginator._intl.itemsPerPageLabel = _this.languageText.itemsPerPage;
                    _this.paginator._intl.firstPageLabel = _this.languageText.firstPage;
                    _this.paginator._intl.previousPageLabel = _this.languageText.previousPage;
                    _this.paginator._intl.nextPageLabel = _this.languageText.nextPage;
                    _this.paginator._intl.lastPageLabel = _this.languageText.lastpage;
                    _this.paginator._intl.getRangeLabel = _this.arabicRangeLabel;
                }
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        }, function (err) {
            _this.isLoadingResults = false;
            _this.dataSource.data = [];
            if (_this.paginator) {
                _this.paginator._intl.itemsPerPageLabel = _this.languageText.itemsPerPage;
                _this.paginator._intl.firstPageLabel = _this.languageText.firstPage;
                _this.paginator._intl.previousPageLabel = _this.languageText.previousPage;
                _this.paginator._intl.nextPageLabel = _this.languageText.nextPage;
                _this.paginator._intl.lastPageLabel = _this.languageText.lastpage;
                _this.paginator._intl.getRangeLabel = _this.arabicRangeLabel;
            }
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    /**
     * Show add Move dialog
     */
    FinancialSummaryViewComponent.prototype.addMove = function () {
        var newReading = new _financial_summary_model__WEBPACK_IMPORTED_MODULE_5__["FinancialSummaryModel"]();
        newReading.clear(); // Set all defaults fields
        this.editFinancial(newReading);
    };
    /**
     * Show Edit balance dialog and save after success close result
     * @param balance: FinancialSummaryModel
     */
    FinancialSummaryViewComponent.prototype.editFinancial = function (balance) {
        // let saveMessageTranslateParam = balance.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        // const _saveMessage = saveMessageTranslateParam;
        // const _messageType = balance.id > 0 ? MessageType.Update : MessageType.Create;
        // const dialogRef = this.dialog.open(FinancialEditDialogComponent, {
        // 	data: {
        // 		balance
        // 	}
        // });
        // dialogRef.afterClosed().subscribe(res => {
        // 	if (!res) {
        // 		return;
        // 	}
        // 	this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
        // 	this.loadFinancialList();
        // 	if (balance.id <= 0)
        // 		this.refreshSafeInfo.emit();
        // });
    };
    /**
     * Get file name of the exported excel file
     */
    FinancialSummaryViewComponent.prototype.getExcelFileName = function () {
        return 'الملخص المالي' + '-' + new Date().toISOString().slice(0, 10);
    };
    FinancialSummaryViewComponent.prototype.downloadPdf = function () {
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?From=' + dateFrom + '&To=' + dateTo;
        var headers = this.headers;
        headers.set('Accept', 'application/pdf');
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_7__["default"].baseUrl + 'api/Reports/Financial/Summary/pdf' + url, { headers: headers, responseType: 'blob' }).subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"])(res, "pdf report.pdf");
            console.log('ok');
        }, function (error1) {
            console.log(error1.error);
        });
    };
    FinancialSummaryViewComponent.prototype.downloadAsPDF = function () {
        var _this = this;
        console.log(this.dataSource.data);
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["jsPDF"]();
        var myFont = _globalVariables__WEBPACK_IMPORTED_MODULE_7__["default"].pdfFont;
        console.log(myFont);
        var callAddFont = function () {
            doc.addFileToVFS("MyFont.ttf", myFont);
            doc.addFont("MyFont.ttf", "MyFont", "normal");
        };
        jspdf__WEBPACK_IMPORTED_MODULE_10__["jsPDF"].API.events.push(['addFonts', callAddFont]);
        doc.addFileToVFS("MyFont.ttf", myFont);
        doc.addFont("MyFont.ttf", "MyFont", "normal");
        doc.setFont("MyFont");
        var columns = [['الشهر', 'مجموع النقد الكلي']];
        var data = [];
        for (var _i = 0, _a = this.dataSource.data; _i < _a.length; _i++) {
            var report = _a[_i];
            data.push([report.date, report.totalCashBalance]);
        }
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_11___default()(doc, {
            head: columns,
            headStyles: {
                halign: "center"
            },
            columnStyles: {
                0: {
                    halign: 'center',
                    textColor: [0, 0, 0]
                },
                1: {
                    halign: 'center',
                    textColor: [0, 0, 0]
                }
            },
            body: data,
            styles: {
                font: 'MyFont',
                fontStyle: 'bold',
                fontSize: 12,
            },
            margin: { top: 40 },
            didDrawPage: function (dataArg) {
                var fromDate = new Date(+new Date(_this.dateFrom) - _this.tzoffset);
                var toDate = new Date(+new Date(_this.dateTo) - _this.tzoffset);
                var imgData = 'assets/media/logos/funny-gas-jockey.jpg';
                doc.addImage(imgData, 'JPEG', dataArg.settings.margin.left, 4, 20, 20);
                doc.text('تقرير الملخص المالي', 95, 10);
                doc.text("\u0645\u0646 \u0634\u0647\u0631: " + fromDate.getFullYear() + "/" + (fromDate.getMonth() + 1), 165, 12);
                doc.text("\u0627\u0644\u0649 \u0634\u0647\u0631: " + toDate.getFullYear() + "/" + (toDate.getMonth() + 1), 165, 20);
                doc.line(0, 25, 300, 25);
            }
        });
        doc.save('table.pdf');
    };
    FinancialSummaryViewComponent.ctorParameters = function () { return [
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_8__["LayoutUtilsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pdfTable', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FinancialSummaryViewComponent.prototype, "pdfTable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FinancialSummaryViewComponent.prototype, "refreshSafeInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], FinancialSummaryViewComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], FinancialSummaryViewComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FinancialSummaryViewComponent.prototype, "searchInput", void 0);
    FinancialSummaryViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'financial-summary-view',
            template: __webpack_require__(/*! raw-loader!./financial-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/financial-summary/financial-summary-view/financial-summary.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./financial-summary.component.scss */ "./src/app/views/pages/financial-summary/financial-summary-view/financial-summary.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_crud__WEBPACK_IMPORTED_MODULE_8__["LayoutUtilsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], FinancialSummaryViewComponent);
    return FinancialSummaryViewComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/financial-summary/financial-summary-view/financial-summary.model.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/financial-summary/financial-summary-view/financial-summary.model.ts ***!
  \*************************************************************************************************/
/*! exports provided: FinancialSummaryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialSummaryModel", function() { return FinancialSummaryModel; });
var FinancialSummaryModel = /** @class */ (function () {
    function FinancialSummaryModel() {
    }
    FinancialSummaryModel.prototype.clear = function () {
    };
    return FinancialSummaryModel;
}());



/***/ }),

/***/ "./src/app/views/pages/financial-summary/financial-summary.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/financial-summary/financial-summary.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZmluYW5jaWFsLXN1bW1hcnkvQzpcXFVzZXJzXFxvbWVuXFxEZXNrdG9wXFxHaXRIdWJcXEZyb250LUthemVhaFxcZ2FzLXN0YXRpb24vc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcZmluYW5jaWFsLXN1bW1hcnlcXGZpbmFuY2lhbC1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0csYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZmluYW5jaWFsLXN1bW1hcnkvZmluYW5jaWFsLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0OjpuZy1kZWVwIHtcclxuXHRcdG5nYi10YWJzZXQgPiAubmF2LXRhYnMge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/financial-summary/financial-summary.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/financial-summary/financial-summary.component.ts ***!
  \******************************************************************************/
/*! exports provided: FinancialSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialSummaryComponent", function() { return FinancialSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

// Angular


// Services
// Widgets model

// NGRX

var FinancialSummaryComponent = /** @class */ (function () {
    function FinancialSummaryComponent(layoutConfigService, http, store) {
        this.layoutConfigService = layoutConfigService;
        this.http = http;
        this.store = store;
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
    }
    FinancialSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
    };
    /**
 * On Destroy
 */
    FinancialSummaryComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    FinancialSummaryComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    FinancialSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'kt-financial-summary',
            template: __webpack_require__(/*! raw-loader!./financial-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/financial-summary/financial-summary.component.html"),
            styles: [__webpack_require__(/*! ./financial-summary.component.scss */ "./src/app/views/pages/financial-summary/financial-summary.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], FinancialSummaryComponent);
    return FinancialSummaryComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/financial-summary/financial-summary.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/financial-summary/financial-summary.module.ts ***!
  \***************************************************************************/
/*! exports provided: FinancialSummaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialSummaryModule", function() { return FinancialSummaryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/fesm5/mat-table-exporter.js");
/* harmony import */ var _financial_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./financial-summary.component */ "./src/app/views/pages/financial-summary/financial-summary.component.ts");
/* harmony import */ var _financial_summary_view_financial_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./financial-summary-view/financial-summary.component */ "./src/app/views/pages/financial-summary/financial-summary-view/financial-summary.component.ts");

// Angular



// Core Module








var materialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"]
];
var FinancialSummaryModule = /** @class */ (function () {
    function FinancialSummaryModule() {
    }
    FinancialSummaryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _financial_summary_component__WEBPACK_IMPORTED_MODULE_10__["FinancialSummaryComponent"]
                    },
                ]),
                materialModules,
                mat_table_exporter__WEBPACK_IMPORTED_MODULE_9__["MatTableExporterModule"]
            ],
            entryComponents: [],
            exports: [],
            providers: [],
            declarations: [
                _financial_summary_component__WEBPACK_IMPORTED_MODULE_10__["FinancialSummaryComponent"],
                _financial_summary_view_financial_summary_component__WEBPACK_IMPORTED_MODULE_11__["FinancialSummaryViewComponent"]
            ]
        })
    ], FinancialSummaryModule);
    return FinancialSummaryModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-financial-summary-financial-summary-module.js.map