(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-financial-financial-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/financial/financial-view/financial.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/financial/financial-view/financial.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>التقرير المالي</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<!-- <button (click)=\"addMove()\" mat-raised-button matTooltip=\"حركة جديدة\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>ايداع في البنك</span>\r\n\t\t\t</button> -->\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t<!-- <div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedFuelType\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"fuelType.id\" *ngFor=\"let fuelType of fuelTypes\">\r\n\t\t\t\t\t\t\t\t\t\t{{fuelType.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"month\" [(ngModel)]=\"selectedDate\" name=\"selectedDate\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الشهر</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- <div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadFinancialList()\" mat-raised-button matTooltip=\"\" color=\"primary\"\r\n\t\t\t\t\ttype=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- start::Summary -->\r\n\t\t<div *ngIf=\"dataSource.data.length > 0\">\r\n\t\t\t<div class=\"form-group kt-form__group row m-0\">\r\n\t\t\t\t<div class=\"col-md-4 mb-0\">\r\n\t\t\t\t\t<ngb-alert type=\"info\" [dismissible]=\"false\">\r\n\t\t\t\t\t\tمجموع النقد الكلي: {{totalCashBalance.toFixed(2)}}\r\n\t\t\t\t\t</ngb-alert>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4 mb-0\">\r\n\t\t\t\t\t<ngb-alert type=\"info\" [dismissible]=\"false\">\r\n\t\t\t\t\t\tالخصم على المبيعات: {{discounts.toFixed(2)}}\r\n\t\t\t\t\t</ngb-alert>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4 mb-0\">\r\n\t\t\t\t\t<ngb-alert type=\"info\" [dismissible]=\"false\">\r\n\t\t\t\t\t\tالمصاريف: {{expenses.toFixed(2)}}\r\n\t\t\t\t\t</ngb-alert>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end::Summary -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: 'التقرير المالي', Props: {Author: 'Admin'}})\" matTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"total\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\">\r\n\t\t\t\t<ng-container matColumnDef=\"category\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الصنف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let financial\">{{financial.category}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"fuelPurchases\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>مشتريات الوقود</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let financial\" dir=\"ltr\" class=\"align-right\">{{financial.fuelPurchases}}\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<!--<ng-container matColumnDef=\"wholeSale\">-->\r\n\t\t\t\t\t<!--<mat-header-cell *matHeaderCellDef mat-sort-header>مبيعات الجملة</mat-header-cell>-->\r\n\t\t\t\t\t<!--<mat-cell *matCellDef=\"let financial\" dir=\"ltr\" class=\"align-right\">{{financial.wholeSale}}-->\r\n\t\t\t\t\t<!--</mat-cell>-->\r\n\t\t\t\t<!--</ng-container>-->\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"previousStockBalance\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الرصيد السابق</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let financial\">{{financial.previousStockBalance}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"currentStockBalance\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> الرصيد المتبقي</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let financial\">{{financial.currentStockBalance}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"categoryFuelBalance\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>رصيد الوقود</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let financial\">{{financial.categoryFuelBalance}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"netSales\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>صافي المبيعات</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let financial\">{{financial.netSales}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"cashBalance\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الرصيد النقدي</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let financial\">{{financial.cashBalance}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"gasolinePumpsSales\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>المبيعات/عدادات</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let financial\">{{financial.gasolinePumpsSales}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"fuelPriceDifferences\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>فرق سعر المحروقات</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let financial\">{{financial.fuelPriceDifferences}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"fuelPriceDifferencesPercent\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>نسبة فرق السعر</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let financial\">{{financial.fuelPriceDifferencesPercent}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<!-- <ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let financial\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editExpense(financial)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteExpense(financial)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container> -->\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\"\r\n\t\t\t\t[length]=\"dataSource.data.length\" [showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/financial/financial.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/financial/financial.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-xl-12\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<financial-view></financial-view>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/financial/financial-view/financial.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/financial/financial-view/financial.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZmluYW5jaWFsL2ZpbmFuY2lhbC12aWV3L0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGZpbmFuY2lhbFxcZmluYW5jaWFsLXZpZXdcXGZpbmFuY2lhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR2xCO0VBRUUsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9maW5hbmNpYWwvZmluYW5jaWFsLXZpZXcvZmluYW5jaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGVDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuXHR3aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5hY3Rpb25zQ29sdW1uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcclxuXHR3aWR0aDogOCUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnJvdyB7XHJcblx0ZGl2IHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/financial/financial-view/financial.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/financial/financial-view/financial.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FinancialViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialViewComponent", function() { return FinancialViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _financial_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./financial.model */ "./src/app/views/pages/financial/financial-view/financial.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../globalVariables */ "./src/app/views/pages/globalVariables.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");

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
var FinancialViewComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutUtilsService
     * @param dialog
     * @param snackBar: MatSnackBar
     * @param store: Store<AppState>
     * @param http
     */
    function FinancialViewComponent(layoutUtilsService, dialog, snackBar, store, http) {
        this.layoutUtilsService = layoutUtilsService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.store = store;
        this.http = http;
        this.refreshSafeInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // displayedColumns = ['category', 'fuelPurchases', 'wholeSale', 'previousStockBalance', 'currentStockBalance', 'categoryFuelBalance', 'netSales', 'cashBalance', 'gasolinePumpsSales', 'fuelPriceDifferences', 'fuelPriceDifferencesPercent'];
        this.displayedColumns = ['category', 'fuelPurchases', 'previousStockBalance', 'currentStockBalance', 'categoryFuelBalance', 'netSales', 'cashBalance', 'gasolinePumpsSales', 'fuelPriceDifferences', 'fuelPriceDifferencesPercent'];
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.selectedEmployee = '';
        this.selectedFuelType = '';
        this.selectedGasPump = '';
        this.date = new Date();
        this.month = ("0" + (this.date.getMonth() + 1)).slice(-2);
        this.year = this.date.getFullYear().toString();
        this.selectedDate = this.year + "-" + this.month;
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0) - this.tzoffset).toISOString().slice(0, 16);
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
    FinancialViewComponent.prototype.ngOnInit = function () {
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
    FinancialViewComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /** ACTIONS */
    /**
 * Load Financial List from service through data-source
 */
    FinancialViewComponent.prototype.loadFinancialList = function () {
        var _this = this;
        this.isLoadingResults = true;
        if (this.selectedDate.includes('-')) {
            this.month = this.selectedDate.split('-')[1];
            this.year = this.selectedDate.split('-')[0];
        }
        var url = '?month=' + this.month + '&year=' + this.year;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_7__["default"].baseUrl + 'api/Reports/Monthly/Financial' + url, { headers: this.headers })
            .subscribe(function (res) {
            if (res.success) {
                _this.isLoadingResults = false;
                _this.totalCashBalance = res.data.totalCashBalance;
                _this.discounts = res.data.discounts;
                _this.expenses = res.data.expenses;
                var data = [];
                for (var index = 0; index < res.data.categoryFinancialReports.length; index++) {
                    var item = res.data.categoryFinancialReports[index];
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
    FinancialViewComponent.prototype.addMove = function () {
        var newReading = new _financial_model__WEBPACK_IMPORTED_MODULE_5__["FinancialModel"]();
        newReading.clear(); // Set all defaults fields
        this.editFinancial(newReading);
    };
    /**
     * Show Edit balance dialog and save after success close result
     * @param balance: FinancialModel
     */
    FinancialViewComponent.prototype.editFinancial = function (balance) {
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
    FinancialViewComponent.prototype.getExcelFileName = function () {
        return 'التقرير المالي' + '-' + new Date().toISOString().slice(0, 10);
    };
    FinancialViewComponent.ctorParameters = function () { return [
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_8__["LayoutUtilsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FinancialViewComponent.prototype, "refreshSafeInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], FinancialViewComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], FinancialViewComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FinancialViewComponent.prototype, "searchInput", void 0);
    FinancialViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'financial-view',
            template: __webpack_require__(/*! raw-loader!./financial.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/financial/financial-view/financial.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./financial.component.scss */ "./src/app/views/pages/financial/financial-view/financial.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_crud__WEBPACK_IMPORTED_MODULE_8__["LayoutUtilsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], FinancialViewComponent);
    return FinancialViewComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/financial/financial-view/financial.model.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/financial/financial-view/financial.model.ts ***!
  \*************************************************************************/
/*! exports provided: FinancialModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialModel", function() { return FinancialModel; });
var FinancialModel = /** @class */ (function () {
    function FinancialModel() {
    }
    FinancialModel.prototype.clear = function () {
    };
    return FinancialModel;
}());



/***/ }),

/***/ "./src/app/views/pages/financial/financial.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/financial/financial.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZmluYW5jaWFsL0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGZpbmFuY2lhbFxcZmluYW5jaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0csYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZmluYW5jaWFsL2ZpbmFuY2lhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHQ6Om5nLWRlZXAge1xyXG5cdFx0bmdiLXRhYnNldCA+IC5uYXYtdGFicyB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/financial/financial.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/financial/financial.component.ts ***!
  \**************************************************************/
/*! exports provided: FinancialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialComponent", function() { return FinancialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

// Angular


// Services
// Widgets model

// NGRX

var FinancialComponent = /** @class */ (function () {
    function FinancialComponent(layoutConfigService, http, store) {
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
    FinancialComponent.prototype.ngOnInit = function () {
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
    FinancialComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    FinancialComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    FinancialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'kt-financial',
            template: __webpack_require__(/*! raw-loader!./financial.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/financial/financial.component.html"),
            styles: [__webpack_require__(/*! ./financial.component.scss */ "./src/app/views/pages/financial/financial.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], FinancialComponent);
    return FinancialComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/financial/financial.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/financial/financial.module.ts ***!
  \***********************************************************/
/*! exports provided: FinancialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialModule", function() { return FinancialModule; });
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
/* harmony import */ var _financial_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./financial.component */ "./src/app/views/pages/financial/financial.component.ts");
/* harmony import */ var _financial_view_financial_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./financial-view/financial.component */ "./src/app/views/pages/financial/financial-view/financial.component.ts");

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
var FinancialModule = /** @class */ (function () {
    function FinancialModule() {
    }
    FinancialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                        component: _financial_component__WEBPACK_IMPORTED_MODULE_10__["FinancialComponent"]
                    },
                ]),
                materialModules,
                mat_table_exporter__WEBPACK_IMPORTED_MODULE_9__["MatTableExporterModule"]
            ],
            entryComponents: [],
            exports: [],
            providers: [],
            declarations: [
                _financial_component__WEBPACK_IMPORTED_MODULE_10__["FinancialComponent"],
                _financial_view_financial_component__WEBPACK_IMPORTED_MODULE_11__["FinancialViewComponent"]
            ]
        })
    ], FinancialModule);
    return FinancialModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-financial-financial-module.js.map