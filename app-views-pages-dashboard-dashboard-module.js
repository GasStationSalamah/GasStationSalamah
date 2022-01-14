(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/box-details/box-details-edit/box-details-edit.dialog.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/dashboard/box-details/box-details-edit/box-details-edit.dialog.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"expenseForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"boxDetails.id <= 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"طريقة الايداع\" formControlName=\"paymentType\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"paymentType.id\" *ngFor=\"let paymentType of paymentTypes\">\r\n\t\t\t\t\t\t\t\t{{paymentType.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> طريقة الايداع</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>طريقة الايداع</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"boxDetails.id <= 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"القيمة\" formControlName=\"value\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>القيمة</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>القيمة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-10-mobile\" *ngIf=\"boxDetails.id <= 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"datetime-local\" formControlName=\"date\" style=\"color: black;\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>تاريخ الحركة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"ملاحظات أخرى\" formControlName=\"note\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>ملاحظات أخرى</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>ملاحظات أخرى</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/box-details/box-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/dashboard/box-details/box-details.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>تفاصيل الصندوق</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addMove()\" mat-raised-button matTooltip=\"حركة جديدة\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>ايداع في البنك</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t<strong>بحث</strong>\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadBoxDetailsList(searchInput.value)\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: 'تفاصيل الصندوق', Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"total\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"safeTransactionDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let expense\" dir=\"ltr\" class=\"align-right\">{{expense.safeTransactionDate}}\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"inOutType\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>داخل/خارج</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.inOutType === 'in' ? 'داخل' : 'خارج'}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"value\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>القيمة</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.value}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"balance\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الرصيد</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.balance}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"transactionType\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>نوع الحركة(ملاحظات)</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.transactionType}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"note\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>ملاحظات أخرى</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.note}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let expense\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editExpense(expense)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<!-- <button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteExpense(expense)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp; -->\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" dir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"col-xl-12\">\r\n\t\t<div class=\"row row-full-height\">\r\n\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4\" *ngFor=\"let item of boxData | keyvalue\">\r\n\t\t\t\t<kt-portlet [class]=\"'kt-portlet--border-bottom-brand'\">\r\n\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n\t\t\t\t\t\t<kt-widget26 [value]=\"item.value.value + '  شيكل '\" [desc]=\"item.value.text\"\r\n\t\t\t\t\t\t\t[options]=\"{data: []}\">\r\n\t\t\t\t\t\t</kt-widget26>\r\n\t\t\t\t\t</kt-portlet-body>\r\n\t\t\t\t</kt-portlet>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-12\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<box-details (refreshSafeInfo)=\"getSafeInfo()\"></box-details>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/dashboard/box-details/box-details-edit/box-details-edit.dialog.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/box-details/box-details-edit/box-details-edit.dialog.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: BoxDetailsEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxDetailsEditDialogComponent", function() { return BoxDetailsEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");
/* harmony import */ var _box_details_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../box-details.model */ "./src/app/views/pages/dashboard/box-details/box-details.model.ts");

// Angular


// Material


// CRUD

// Services and Models




var BoxDetailsEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<BoxDetailsEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param layoutUtilsService
     * @param http
     */
    function BoxDetailsEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.http = http;
        this.hasFormErrors = false;
        this.viewLoading = false;
        // TODO: Get from Api
        this.paymentTypes = [];
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.selectedPumpId = '';
        this.isFinalOperatingExpense = false;
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
        this.role = '';
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    BoxDetailsEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.boxDetails = this.data.boxDetails;
        this.createForm();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.role = localStorage.getItem('role');
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.getPaymentTypes();
        this.subscriptions.push(this.credentialsSubscription);
    };
    /**
     * On destroy
     */
    BoxDetailsEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    BoxDetailsEditDialogComponent.prototype.createForm = function () {
        var date = this.boxDetails.safeTransactionDate;
        // if (this.boxDetails.id <= 0)
        // 	date = new Date(+new Date(this.boxDetails.safeTransactionDate) - this.tzoffset).toISOString().substr(0, 16);
        this.expenseForm = this.fb.group({
            id: [this.boxDetails.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            value: [this.boxDetails.value, this.boxDetails.id > 0 ? '' : _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: [date, this.boxDetails.id > 0 ? '' : _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paymentType: [this.boxDetails.paymentMethodsId, this.boxDetails.id > 0 ? '' : _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            note: [this.boxDetails.note, this.boxDetails.id > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : '']
        });
    };
    /**
     * Returns page title
     */
    BoxDetailsEditDialogComponent.prototype.getTitle = function () {
        if (this.boxDetails.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062D\u0631\u0643\u0629";
        }
        return 'ايداع في البنك';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    BoxDetailsEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.expenseForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    BoxDetailsEditDialogComponent.prototype.getPaymentTypes = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].baseUrl + 'api/PaymentsMethods', { headers: this.headers }).subscribe(function (res) {
            _this.paymentTypes = res.data.map(function (item) {
                return {
                    name: item.paymentType,
                    id: item.id
                };
            });
        });
    };
    /**
     * Returns prepared customer
     */
    BoxDetailsEditDialogComponent.prototype.prepareOperatingExpense = function () {
        var controls = this.expenseForm.controls;
        var _safe = new _box_details_model__WEBPACK_IMPORTED_MODULE_9__["BoxDetailsModel"]();
        _safe.id = this.boxDetails.id;
        _safe.value = controls.value.value;
        _safe.safeTransactionDate = controls.date.value;
        _safe.paymentMethodsId = controls.paymentType.value;
        _safe.note = controls.note.value;
        return _safe;
    };
    /**
     * On Submit
     */
    BoxDetailsEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.expenseForm.controls;
        /** check form */
        if (this.expenseForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var editedOperatingExpense = this.prepareOperatingExpense();
        if (editedOperatingExpense.id > 0) {
            this.updateOperatingExpense(editedOperatingExpense);
        }
        else {
            this.createOperatingExpense(editedOperatingExpense);
        }
    };
    /**
     * Update customer
     *
     * @param _safe: BoxDetailsModel
     */
    BoxDetailsEditDialogComponent.prototype.updateOperatingExpense = function (_safe) {
        var _this = this;
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].baseUrl + 'api/safe', {
            id: _safe.id,
            note: _safe.note,
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _safe: _safe, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل الحركة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create customer
     *
     * @param _safe: BoxDetailsModel
     */
    BoxDetailsEditDialogComponent.prototype.createOperatingExpense = function (_safe) {
        var _this = this;
        var date = new Date(+new Date(this.boxDetails.safeTransactionDate) - this.tzoffset).toISOString().substr(0, 16);
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].baseUrl + 'api/Safe/Bank/Transactions', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _safe, { value: +_safe.value, createdAt: date }), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _safe: _safe, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة الحركة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    BoxDetailsEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    BoxDetailsEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
    ]; };
    BoxDetailsEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'gas-box-details-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./box-details-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/box-details/box-details-edit/box-details-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], BoxDetailsEditDialogComponent);
    return BoxDetailsEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/box-details/box-details.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/box-details/box-details.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL2JveC1kZXRhaWxzL0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGRhc2hib2FyZFxcYm94LWRldGFpbHNcXGJveC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFFRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC9ib3gtZGV0YWlscy9ib3gtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlQ29sdW1uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWN0aW9uc0NvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG5cdGRpdiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/dashboard/box-details/box-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/box-details/box-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: BoxDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxDetailsComponent", function() { return BoxDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _box_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./box-details.model */ "./src/app/views/pages/dashboard/box-details/box-details.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../globalVariables */ "./src/app/views/pages/globalVariables.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _box_details_edit_box_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./box-details-edit/box-details-edit.dialog.component */ "./src/app/views/pages/dashboard/box-details/box-details-edit/box-details-edit.dialog.component.ts");

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
var BoxDetailsComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutUtilsService
     * @param dialog
     * @param snackBar: MatSnackBar
     * @param store: Store<AppState>
     * @param http
     */
    function BoxDetailsComponent(layoutUtilsService, dialog, snackBar, store, http) {
        this.layoutUtilsService = layoutUtilsService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.store = store;
        this.http = http;
        this.refreshSafeInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayedColumns = ['safeTransactionDate', 'inOutType', 'transactionType', 'note', 'value', 'balance', 'actions'];
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.selectedEmployee = '';
        this.selectedFuelType = '';
        this.selectedGasPump = '';
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0) - this.tzoffset).toISOString().slice(0, 16);
        // Filter data
        // TODO: Get using APIs
        this.employees = [];
        this.fuelTypes = [];
        this.gasPumps = [];
        // Selection
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.customersResult = [];
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
    BoxDetailsComponent.prototype.ngOnInit = function () {
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
        this.loadBoxDetailsList();
    };
    /**
     * On Destroy
     */
    BoxDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load BoxDetails List from service through data-source
     */
    BoxDetailsComponent.prototype.loadBoxDetailsList = function (query) {
        var _this = this;
        if (query === void 0) { query = ''; }
        this.isLoadingResults = true;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo + '&SerachParam=' + query;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_7__["default"].baseUrl + 'api/safe' + url, { headers: this.headers })
            .subscribe(function (res) {
            if (res.success) {
                _this.isLoadingResults = false;
                var data = [];
                var balance = 0;
                for (var index = 0; index < res.data.length; index++) {
                    var item = res.data[index];
                    if (item.inOutType === "out")
                        balance -= item.value;
                    else
                        balance += item.value;
                    data.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { balance: balance, safeTransactionDate: item.createdAt }));
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
    BoxDetailsComponent.prototype.addMove = function () {
        var newReading = new _box_details_model__WEBPACK_IMPORTED_MODULE_5__["BoxDetailsModel"]();
        newReading.clear(); // Set all defaults fields
        this.editExpense(newReading);
    };
    /**
     * Show Edit boxDetails dialog and save after success close result
     * @param boxDetails: BoxDetailsModel
     */
    BoxDetailsComponent.prototype.editExpense = function (boxDetails) {
        var _this = this;
        var saveMessageTranslateParam = boxDetails.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = boxDetails.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_8__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_8__["MessageType"].Create;
        var dialogRef = this.dialog.open(_box_details_edit_box_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__["BoxDetailsEditDialogComponent"], {
            data: {
                boxDetails: boxDetails
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
            _this.loadBoxDetailsList();
            if (boxDetails.id <= 0)
                _this.refreshSafeInfo.emit();
        });
    };
    /**
     * Get file name of the exported excel file
     */
    BoxDetailsComponent.prototype.getExcelFileName = function () {
        return 'تفاصيل الصندوق' + '-' + new Date().toISOString().slice(0, 10);
    };
    BoxDetailsComponent.ctorParameters = function () { return [
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_8__["LayoutUtilsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxDetailsComponent.prototype, "refreshSafeInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], BoxDetailsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], BoxDetailsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BoxDetailsComponent.prototype, "searchInput", void 0);
    BoxDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'box-details',
            template: __webpack_require__(/*! raw-loader!./box-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/box-details/box-details.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./box-details.component.scss */ "./src/app/views/pages/dashboard/box-details/box-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_crud__WEBPACK_IMPORTED_MODULE_8__["LayoutUtilsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], BoxDetailsComponent);
    return BoxDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/box-details/box-details.model.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/box-details/box-details.model.ts ***!
  \************************************************************************/
/*! exports provided: BoxDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxDetailsModel", function() { return BoxDetailsModel; });
var BoxDetailsModel = /** @class */ (function () {
    function BoxDetailsModel() {
    }
    BoxDetailsModel.prototype.clear = function () {
        this.id = 0;
        this.inOutType = '';
        this.transactionType = '';
        this.note = '';
        this.value = '';
        this.paymentMethodsId = 0;
        this.safeTransactionDate = new Date().toISOString().substr(0, 16);
    };
    return BoxDetailsModel;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0csYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHQ6Om5nLWRlZXAge1xyXG5cdFx0bmdiLXRhYnNldCA+IC5uYXYtdGFicyB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalVariables */ "./src/app/views/pages/globalVariables.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

// Angular


// Services
// Widgets model


// NGRX

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(layoutConfigService, http, store) {
        this.layoutConfigService = layoutConfigService;
        this.http = http;
        this.store = store;
        this.boxData = {
            ilsCash: { text: 'كاش', value: '' },
            ilsCheck: { text: 'شيكات', value: '' },
        };
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
        this.getSafeInfo();
    };
    /**
 * On Destroy
 */
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    DashboardComponent.prototype.getSafeInfo = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_4__["default"].baseUrl + 'api/safe/PaymentMethods', { headers: this.headers })
            .subscribe(function (res) {
            _this.boxData.ilsCash.value = res.data.cash;
            _this.boxData.ilsCheck.value = res.data.check;
        }, function (err) {
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'kt-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _box_details_box_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./box-details/box-details.component */ "./src/app/views/pages/dashboard/box-details/box-details.component.ts");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/fesm5/mat-table-exporter.js");
/* harmony import */ var _box_details_box_details_edit_box_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./box-details/box-details-edit/box-details-edit.dialog.component */ "./src/app/views/pages/dashboard/box-details/box-details-edit/box-details-edit.dialog.component.ts");

// Angular



// Core Module









var materialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"]
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
                    },
                ]),
                materialModules,
                mat_table_exporter__WEBPACK_IMPORTED_MODULE_11__["MatTableExporterModule"]
            ],
            entryComponents: [_box_details_box_details_edit_box_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_12__["BoxDetailsEditDialogComponent"]],
            exports: [],
            providers: [],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _box_details_box_details_component__WEBPACK_IMPORTED_MODULE_10__["BoxDetailsComponent"],
                _box_details_box_details_edit_box_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_12__["BoxDetailsEditDialogComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-dashboard-dashboard-module.js.map