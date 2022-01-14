(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-oil-oil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil-purchases/oil-purchases-edit/oil-purchases-edit.dialog.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/oil/oil-purchases/oil-purchases-edit/oil-purchases-edit.dialog.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\t dir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"oilPurchaseForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t\t  (close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"الصنف\" formControlName=\"category\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"oilType.id\" *ngFor=\"let oilType of oilTypes\">\r\n\t\t\t\t\t\t\t\t{{oilType.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> الصنف</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"الكمية\" formControlName=\"amountBought\"/>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الكمية</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>الكمية</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"السعر\" formControlName=\"price\"/>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>السعر</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>السعر</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"العملة\" formControlName=\"currency\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"currency.id\" *ngFor=\"let currency of currencies\">\r\n\t\t\t\t\t\t\t\t{{currency.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>العملة</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>العملة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"المزود\" formControlName=\"supplierName\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"supplier.id\" *ngFor=\"let supplier of oilSuppliers\">\r\n\t\t\t\t\t\t\t\t{{supplier.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>المزود</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>المزود</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"المدفوع\" formControlName=\"paidMoney\"/>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>المدفوع</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>المدفوع</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"datetime-local\" formControlName=\"date\" required\r\n\t\t\t\t\t\t\t   style=\"color: black;\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>تاريخ الحركة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details-edit/oil-purchases-payments-details-edit.dialog.component.html":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details-edit/oil-purchases-payments-details-edit.dialog.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"oilPurchaseForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"طريقة الدفع\" formControlName=\"paymentType\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"paymentType.id\" *ngFor=\"let paymentType of paymentTypes\">\r\n\t\t\t\t\t\t\t\t{{paymentType.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> طريقة الدفع</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>طريقة الدفع</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"كمية الدفع\" formControlName=\"paymentValue\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>كمية الدفع</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>كمية الدفع</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"datetime-local\" formControlName=\"date\" required\r\n\t\t\t\t\t\t\t   style=\"color: black;\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>تاريخ الحركة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details/oil-purchases-payments-details.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details/oil-purchases-payments-details.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet mat-elevation-z0 dir=\"rtl\" style=\"text-align: left;\">\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>الدفعات</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"حركة شراء جديدة\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">-->\r\n<!--\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n<!--\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>-->\r\n<!--\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n<!--\t\t\t\t\t\t\t\t<strong>بحث</strong>-->\r\n<!--\t\t\t\t\t\t\t</mat-hint>-->\r\n<!--\t\t\t\t\t\t</mat-form-field>-->\r\n<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\" >\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<!-- <div class=\"mat-table__wrapper\"> -->\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t \tmatSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"paymentType\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>طريقة الدفع</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.paymentType}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"paymentValue\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>كمية الدفع</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.paymentValue}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"date\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\" dir=\"ltr\" class=\"align-right\">{{oil.date}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(oil)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(oil)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t<!-- </div> -->\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments.dialog.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments.dialog.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div dir=\"rtl\" style=\"text-align: right;\">\r\n\t<!-- <h2 mat-dialog-title style=\"padding: 20;\">الدفعات</h2> -->\r\n\t<!-- <mat-dialog-content style=\"margin: 0; padding: 0\"> -->\r\n\t<oil-purchases-payments-details></oil-purchases-payments-details>\r\n\t<!-- </mat-dialog-content> -->\r\n\t<mat-dialog-actions align=\"end\" style=\"padding-left: 20px;\">\r\n\t\t<button mat-raised-button mat-dialog-close color=\"warn\">اغلاق</button>\r\n\t\t<!-- <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button> -->\r\n\t</mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil-purchases/oil-purchases-view/oil-purchases.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/oil/oil-purchases/oil-purchases-view/oil-purchases.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>مشتريات الزيوت</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"حركة شراء جديدة\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<strong>بحث</strong>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t</mat-hint>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t</mat-form-field>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedOilType\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"oilType.id\" *ngFor=\"let oilType of oilTypes\">\r\n\t\t\t\t\t\t\t\t\t\t{{oilType.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedSupplier\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"supplier.id\" *ngFor=\"let supplier of suppliers\">\r\n\t\t\t\t\t\t\t\t\t\t{{supplier.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>المزود</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"date\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"category\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الصنف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.category}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"amountBought\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>كمية الشراء</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.amountBought}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"price\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>السعر</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.price}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<!-- <ng-container matColumnDef=\"currency\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>العملة</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.currency}}</mat-cell>\r\n\t\t\t\t</ng-container> -->\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"supplierName\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>المزود</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.supplierName}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"paidMoney\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>المدفوع</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.paidMoney}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"date\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.date}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\" class=\"actionsColumn\" (click)=\"$event.stopPropagation()\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(oil)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(oil)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\" (click)=\"openPaymentsDialog(row)\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil-sales/oil-sales-edit/oil-sales-edit.dialog.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/oil/oil-sales/oil-sales-edit/oil-sales-edit.dialog.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"oilSalesForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"الموظف\" formControlName=\"userId\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"employee.id\" *ngFor=\"let employee of employees\">\r\n\t\t\t\t\t\t\t\t{{employee.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>اسم الموظف</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>الموظف</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"الصنف\" formControlName=\"category\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"fuelType.id\" *ngFor=\"let fuelType of fuelTypes\">\r\n\t\t\t\t\t\t\t\t{{fuelType.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> الصنف</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"السعر\" formControlName=\"price\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>السعر</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>السعر</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"الكمية\" formControlName=\"amount\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الكمية</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>الكمية</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil-sales/oil-sales-info/oil-sales-info.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/oil/oil-sales/oil-sales-info/oil-sales-info.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>مبيعات الزيوت</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"سعر جديد\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة حركة بيع</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<!-- 'm  margin-bottom-10-mobile' for adaptive make-up  -->\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"filterStatus\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"employee.id\" *ngFor=\"let employee of employees\">\r\n\t\t\t\t\t\t\t\t\t\t{{employee.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الموظف</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">-->\r\n<!--\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n<!--\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>-->\r\n<!--\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n<!--\t\t\t\t\t\t\t\t<strong>بحث</strong>-->\r\n<!--\t\t\t\t\t\t\t</mat-hint>-->\r\n<!--\t\t\t\t\t\t</mat-form-field>-->\r\n<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"date\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"userName\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>اسم الموظف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let customer\">{{customer.userName}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"category\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الصنف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.category}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"price\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>السعر</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.price}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"amount\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الكمية</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.amount}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"date\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.date}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(oil)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(oil)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/oil/oil.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-tab-group>\r\n<!--\t<mat-tab label=\"المبيعات\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet&#45;&#45;height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body&#45;&#45;fit'\">\r\n\t\t\t\t<oil-sales [employees]=\"employees\" [fuelTypes]=\"fuelTypes\"></oil-sales>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>-->\r\n\t<mat-tab label=\"المشتريات\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<oil-purchases [employees]=\"employees\" [oilTypes]=\"fuelTypes\" [suppliers]=\"suppliers\"></oil-purchases>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/views/pages/oil/oil-purchases/models/oil-purchases.model.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/oil/oil-purchases/models/oil-purchases.model.ts ***!
  \*****************************************************************************/
/*! exports provided: OilPurchasesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilPurchasesModel", function() { return OilPurchasesModel; });
var OilPurchasesModel = /** @class */ (function () {
    function OilPurchasesModel() {
    }
    OilPurchasesModel.prototype.clear = function () {
        this.id = 0;
        this.category = '';
        this.amountBought = '';
        this.price = '';
        this.currency = '';
        this.supplierName = '';
        this.paidMoney = '';
        this.date = new Date().toISOString().substr(0, 16);
    };
    return OilPurchasesModel;
}());



/***/ }),

/***/ "./src/app/views/pages/oil/oil-purchases/oil-purchases-edit/oil-purchases-edit.dialog.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/oil/oil-purchases/oil-purchases-edit/oil-purchases-edit.dialog.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: OilPurchasesEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilPurchasesEditDialogComponent", function() { return OilPurchasesEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_oil_purchases_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/oil-purchases.model */ "./src/app/views/pages/oil/oil-purchases/models/oil-purchases.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var OilPurchasesEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<UsersReadingsEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param layoutUtilsService
     * @param http
     */
    function OilPurchasesEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.http = http;
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.oilTypes = [];
        this.oilSuppliers = [];
        this.currencies = [];
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
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
    OilPurchasesEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.oilPurchase = this.data.reading;
        this.oilTypes = this.data.oilTypes;
        this.oilSuppliers = this.data.suppliers;
        this.createForm();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.role = localStorage.getItem('role');
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
    };
    /**
     * On destroy
     */
    OilPurchasesEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    OilPurchasesEditDialogComponent.prototype.createForm = function () {
        var date = this.oilPurchase.date;
        if (this.oilPurchase.id > 0)
            date = new Date(+new Date(this.oilPurchase.date) - this.tzoffset).toISOString().substr(0, 16);
        this.oilPurchaseForm = this.fb.group({
            id: [this.oilPurchase.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: [this.oilPurchase.categoryId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [this.oilPurchase.price, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amountBought: [this.oilPurchase.amountBought, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // currency: [this.oilPurchase.currencyId, Validators.required],
            supplierName: [this.oilPurchase.supplierId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // paidMoney: [this.oilPurchase.paidMoney, Validators.required],
            date: [date, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    /**
     * Returns page title
     */
    OilPurchasesEditDialogComponent.prototype.getTitle = function () {
        if (this.oilPurchase.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0634\u0631\u0627\u0621 \u0644\u0644\u0635\u0646\u0641 '" + this.oilPurchase.category + "'";
        }
        return 'اضافة حركة شراء';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    OilPurchasesEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.oilPurchaseForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    OilPurchasesEditDialogComponent.prototype.getCurrencies = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Currencies', { headers: this.headers }).subscribe(function (res) {
            _this.currencies = res.data.map(function (item) {
                return {
                    name: item.name,
                    id: item.id
                };
            });
        });
    };
    /**
     * Returns prepared oil purchase
     */
    OilPurchasesEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.oilPurchaseForm.controls;
        var _oilPurchase = new _models_oil_purchases_model__WEBPACK_IMPORTED_MODULE_7__["OilPurchasesModel"]();
        _oilPurchase.id = this.oilPurchase.id;
        _oilPurchase.categoryId = controls.category.value;
        _oilPurchase.price = controls.price.value;
        _oilPurchase.amountBought = controls.amountBought.value;
        // _oilPurchase.currencyId = controls.currency.value;
        // _oilPurchase.paidMoney = controls.paidMoney.value;
        _oilPurchase.supplierId = controls.supplierName.value;
        _oilPurchase.date = controls.date.value;
        return _oilPurchase;
    };
    /**
     * On Submit
     */
    OilPurchasesEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.oilPurchaseForm.controls;
        console.log(this.oilPurchaseForm);
        /** check form */
        if (this.oilPurchaseForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var editedReading = this.prepareReading();
        if (editedReading.id > 0) {
            this.updateReading(editedReading);
        }
        else {
            this.createReading(editedReading);
        }
    };
    /**
     * Update Oil price
     *
     * @param _oilPurchase: OilPurchasesModel
     */
    OilPurchasesEditDialogComponent.prototype.updateReading = function (_oilPurchase) {
        var _this = this;
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Oils/Purchases', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _oilPurchase, { price: +_oilPurchase.price, amount: +_oilPurchase.amountBought }), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _oilPurchase: _oilPurchase, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل حركة الشراء';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create Oil price
     *
     * @param _oilPurchase: OilPurchasesModel
     */
    OilPurchasesEditDialogComponent.prototype.createReading = function (_oilPurchase) {
        var _this = this;
        var purchaseDate = new Date(+new Date(_oilPurchase.date) - this.tzoffset).toISOString().slice(0, 16);
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Oils/Purchases', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _oilPurchase, { price: +_oilPurchase.price, amount: +_oilPurchase.amountBought, createdAt: purchaseDate }), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _oilPurchase: _oilPurchase, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة حركة الشراء';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    OilPurchasesEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    OilPurchasesEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    OilPurchasesEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'oil-purchases-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./oil-purchases-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil-purchases/oil-purchases-edit/oil-purchases-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], OilPurchasesEditDialogComponent);
    return OilPurchasesEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/models/oil-payment.model.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/models/oil-payment.model.ts ***!
  \**************************************************************************************************/
/*! exports provided: OilPaymentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilPaymentModel", function() { return OilPaymentModel; });
var OilPaymentModel = /** @class */ (function () {
    function OilPaymentModel() {
    }
    OilPaymentModel.prototype.clear = function () {
        this.id = 0;
        this.paymentType = '';
        this.paymentValue = '';
        this.date = new Date().toISOString().substr(0, 16);
    };
    OilPaymentModel.prototype.initialize = function () {
        this.id = 1;
        this.paymentType = 'cash';
        this.paymentValue = '2000';
        this.date = new Date().toISOString().substr(0, 16);
    };
    return OilPaymentModel;
}());



/***/ }),

/***/ "./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details-edit/oil-purchases-payments-details-edit.dialog.component.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details-edit/oil-purchases-payments-details-edit.dialog.component.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: OilPurchasesPaymentsDetailsEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilPurchasesPaymentsDetailsEditDialogComponent", function() { return OilPurchasesPaymentsDetailsEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_oil_payment_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/oil-payment.model */ "./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/models/oil-payment.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var OilPurchasesPaymentsDetailsEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<UsersReadingsEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param layoutUtilsService
     * @param http
     */
    function OilPurchasesPaymentsDetailsEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.http = http;
        // Public properties
        this.purchaseId = '';
        this.hasFormErrors = false;
        this.viewLoading = false;
        // TODO: Get from Api
        this.paymentTypes = [];
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
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
    OilPurchasesPaymentsDetailsEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.oilPurchase = this.data.reading;
        this.purchaseId = this.data.purchaseId;
        this.createForm();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.role = localStorage.getItem('role');
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
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
    OilPurchasesPaymentsDetailsEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    OilPurchasesPaymentsDetailsEditDialogComponent.prototype.createForm = function () {
        var date = this.oilPurchase.date;
        if (this.oilPurchase.id > 0)
            date = new Date(+new Date(this.oilPurchase.date) - this.tzoffset).toISOString().substr(0, 16);
        this.oilPurchaseForm = this.fb.group({
            id: [this.oilPurchase.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paymentType: [this.oilPurchase.paymentTypeId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paymentValue: [this.oilPurchase.paymentValue, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: [date, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    /**
     * Returns page title
     */
    OilPurchasesPaymentsDetailsEditDialogComponent.prototype.getTitle = function () {
        if (this.oilPurchase.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062F\u0641\u0639\u0629";
        }
        return 'اضافة دفعة ';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    OilPurchasesPaymentsDetailsEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.oilPurchaseForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    OilPurchasesPaymentsDetailsEditDialogComponent.prototype.getPaymentTypes = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/PaymentsMethods', { headers: this.headers }).subscribe(function (res) {
            _this.paymentTypes = res.data.map(function (item) {
                return {
                    name: item.paymentType,
                    id: item.id
                };
            });
        });
    };
    /**
     * Returns prepared oil purchase
     */
    OilPurchasesPaymentsDetailsEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.oilPurchaseForm.controls;
        var _oilPurchase = new _models_oil_payment_model__WEBPACK_IMPORTED_MODULE_7__["OilPaymentModel"]();
        _oilPurchase.id = this.oilPurchase.id;
        _oilPurchase.paymentValue = controls.paymentValue.value;
        _oilPurchase.paymentTypeId = controls.paymentType.value;
        _oilPurchase.date = controls.date.value;
        return _oilPurchase;
    };
    /**
     * On Submit
     */
    OilPurchasesPaymentsDetailsEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.oilPurchaseForm.controls;
        /** check form */
        if (this.oilPurchaseForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var editedReading = this.prepareReading();
        if (editedReading.id > 0) {
            this.updateReading(editedReading);
        }
        else {
            this.createReading(editedReading);
        }
    };
    /**
     * Update Oil price
     *
     * @param _oilPurchase: OilPaymentModel
     */
    OilPurchasesPaymentsDetailsEditDialogComponent.prototype.updateReading = function (_oilPurchase) {
        var _this = this;
        var paymentDate = new Date(+new Date(_oilPurchase.date) - this.tzoffset).toISOString().slice(0, 16);
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Oils/Purchases/Payments', {
            id: _oilPurchase.id,
            paymentTypeId: _oilPurchase.paymentTypeId,
            paidMoney: +_oilPurchase.paymentValue,
            paymentDate: paymentDate
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _oilPurchase: _oilPurchase, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل الدفعة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create Oil price
     *
     * @param _oilPurchase: OilPaymentModel
     */
    OilPurchasesPaymentsDetailsEditDialogComponent.prototype.createReading = function (_oilPurchase) {
        var _this = this;
        var paymentDate = new Date(+new Date(_oilPurchase.date) - this.tzoffset).toISOString().slice(0, 16);
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Oils/Purchases/Payments', {
            oilPurchaseId: this.purchaseId,
            paymentTypeId: _oilPurchase.paymentTypeId,
            paidMoney: +_oilPurchase.paymentValue,
            paymentDate: paymentDate
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _oilPurchase: _oilPurchase, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة الدفعة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    OilPurchasesPaymentsDetailsEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    OilPurchasesPaymentsDetailsEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    OilPurchasesPaymentsDetailsEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'oil-purchases-payments-details-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./oil-purchases-payments-details-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details-edit/oil-purchases-payments-details-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], OilPurchasesPaymentsDetailsEditDialogComponent);
    return OilPurchasesPaymentsDetailsEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details/oil-purchases-payments-details.component.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details/oil-purchases-payments-details.component.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvb2lsL29pbC1wdXJjaGFzZXMvb2lsLXB1cmNoYXNlcy1wYXltZW50cy9vaWwtcHVyY2hhc2VzLXBheW1lbnRzLWRldGFpbHMvQzpcXFVzZXJzXFxvbWVuXFxEZXNrdG9wXFxHaXRIdWJcXEZyb250LUthemVhaFxcZ2FzLXN0YXRpb24vc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcb2lsXFxvaWwtcHVyY2hhc2VzXFxvaWwtcHVyY2hhc2VzLXBheW1lbnRzXFxvaWwtcHVyY2hhc2VzLXBheW1lbnRzLWRldGFpbHNcXG9pbC1wdXJjaGFzZXMtcGF5bWVudHMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR2xCO0VBRUUsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9vaWwvb2lsLXB1cmNoYXNlcy9vaWwtcHVyY2hhc2VzLXBheW1lbnRzL29pbC1wdXJjaGFzZXMtcGF5bWVudHMtZGV0YWlscy9vaWwtcHVyY2hhc2VzLXBheW1lbnRzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZUNvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFjdGlvbnNDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucm93IHtcclxuXHRkaXYge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details/oil-purchases-payments-details.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details/oil-purchases-payments-details.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: OilPurchasesPaymentsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilPurchasesPaymentsDetailsComponent", function() { return OilPurchasesPaymentsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_oil_payment_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/oil-payment.model */ "./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/models/oil-payment.model.ts");
/* harmony import */ var _oil_purchases_payments_details_edit_oil_purchases_payments_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../oil-purchases-payments-details-edit/oil-purchases-payments-details-edit.dialog.component */ "./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details-edit/oil-purchases-payments-details-edit.dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular

// Material


// Translate Module

// NGRX

// CRUD

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
var OilPurchasesPaymentsDetailsComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialog: MatDialog
     * @param data
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     * @param translate: TranslateService
     * @param store: Store<AppState>
     * @param http
     */
    function OilPurchasesPaymentsDetailsComponent(dialog, data, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.data = data;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['paymentType', 'paymentValue', 'date', 'actions'];
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.selectedEmployee = '';
        this.selectedOilType = '';
        this.selectedGasPump = '';
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0) - this.tzoffset).toISOString().slice(0, 16);
        // Filter data
        // TODO: Get using APIs
        this.employees = [];
        this.oilTypes = [];
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
        // Symmary data
        this.totalAmount = 0;
        this.totalPrice = 0;
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
    OilPurchasesPaymentsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init DataSource
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
        this.loadUsersReadingsList();
    };
    /**
     * On Destroy
     */
    OilPurchasesPaymentsDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load UsersReadings List from service through data-source
     */
    OilPurchasesPaymentsDetailsComponent.prototype.loadUsersReadingsList = function () {
        var _this = this;
        this.isLoadingResults = true;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo + '&oilPurchaseId=' + this.data.purchaseId;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Oils/Purchases/Payments' + url, { headers: this.headers })
            .subscribe(function (res) {
            _this.isLoadingResults = false;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { paymentValue: item.paidMoney, date: item.paymentDate });
            }));
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
     * Delete Reading
     *
     * @param _item: OilPricesModel
     */
    OilPurchasesPaymentsDetailsComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = 'حذف حركة الدفع';
        var _description = 'هل أنت متأكد من حذف حركة الدفع';
        var _waitDesciption = 'جاري الحذف';
        var _deleteMessage = 'لقد تم الحذف';
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.http.delete(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Oils/Purchases/Payments/' + _item.id, { headers: _this.headers })
                .subscribe(function (res) {
                _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
                _this.loadUsersReadingsList();
            }, function (err) {
                var msg = 'فشل في حذف الحركة';
                if (err.error) {
                    msg = err.error.msg;
                }
                _this.layoutUtilsService.showActionNotification(msg);
            });
        });
    };
    /**
     * Show add reading dialog
     */
    OilPurchasesPaymentsDetailsComponent.prototype.addReading = function () {
        var newReading = new _models_oil_payment_model__WEBPACK_IMPORTED_MODULE_7__["OilPaymentModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: OilPricesModel
     */
    OilPurchasesPaymentsDetailsComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_oil_purchases_payments_details_edit_oil_purchases_payments_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["OilPurchasesPaymentsDetailsEditDialogComponent"], {
            data: {
                reading: reading,
                oilTypes: this.oilTypes,
                purchaseId: this.data.purchaseId
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
            _this.loadUsersReadingsList();
        });
    };
    /**
     * Get file name of the exported excel file
     */
    OilPurchasesPaymentsDetailsComponent.prototype.getExcelFileName = function () {
        return 'دفعات شراءالزيوت' + '-' + new Date().toISOString().slice(0, 10);
    };
    OilPurchasesPaymentsDetailsComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], OilPurchasesPaymentsDetailsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OilPurchasesPaymentsDetailsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OilPurchasesPaymentsDetailsComponent.prototype, "searchInput", void 0);
    OilPurchasesPaymentsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'oil-purchases-payments-details',
            template: __webpack_require__(/*! raw-loader!./oil-purchases-payments-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details/oil-purchases-payments-details.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./oil-purchases-payments-details.component.scss */ "./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details/oil-purchases-payments-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], OilPurchasesPaymentsDetailsComponent);
    return OilPurchasesPaymentsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments.dialog.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments.dialog.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: OilPurchasesPaymentsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilPurchasesPaymentsDialogComponent", function() { return OilPurchasesPaymentsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");

// Angular

// Material


// Services and Models

var OilPurchasesPaymentsDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<UsersReadingsEditDialogComponent>
     * @param data: any
     * @param store: Store<AppState>
     * @param typesUtilsService: TypesUtilsService
     */
    function OilPurchasesPaymentsDialogComponent(dialogRef, data, store) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.store = store;
        this.viewLoading = false;
        this.oilTypes = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    OilPurchasesPaymentsDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_4__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.purchaseId = this.data.purchaseId;
    };
    /**
     * On destroy
     */
    OilPurchasesPaymentsDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    OilPurchasesPaymentsDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    OilPurchasesPaymentsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'oil-purchases-payments-dialog',
            template: __webpack_require__(/*! raw-loader!./oil-purchases-payments.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], OilPurchasesPaymentsDialogComponent);
    return OilPurchasesPaymentsDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/oil/oil-purchases/oil-purchases-view/oil-purchases.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/oil/oil-purchases/oil-purchases-view/oil-purchases.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n.mat-row:hover {\n  background-color: whitesmoke;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvb2lsL29pbC1wdXJjaGFzZXMvb2lsLXB1cmNoYXNlcy12aWV3L0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXG9pbFxcb2lsLXB1cmNoYXNlc1xcb2lsLXB1cmNoYXNlcy12aWV3XFxvaWwtcHVyY2hhc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFFRSxtQkFBbUIsRUFBQTs7QUFJckI7RUFDQyw0QkFBNEI7RUFDNUIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvb2lsL29pbC1wdXJjaGFzZXMvb2lsLXB1cmNoYXNlcy12aWV3L29pbC1wdXJjaGFzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZUNvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFjdGlvbnNDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucm93IHtcclxuXHRkaXYge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbn1cclxuXHJcbi5tYXQtcm93OmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/oil/oil-purchases/oil-purchases-view/oil-purchases.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/oil/oil-purchases/oil-purchases-view/oil-purchases.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: OilPurchasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilPurchasesComponent", function() { return OilPurchasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_oil_purchases_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/oil-purchases.model */ "./src/app/views/pages/oil/oil-purchases/models/oil-purchases.model.ts");
/* harmony import */ var _oil_purchases_edit_oil_purchases_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../oil-purchases-edit/oil-purchases-edit.dialog.component */ "./src/app/views/pages/oil/oil-purchases/oil-purchases-edit/oil-purchases-edit.dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _oil_purchases_payments_oil_purchases_payments_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../oil-purchases-payments/oil-purchases-payments.dialog.component */ "./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments.dialog.component.ts");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular

// Material


// Translate Module

// NGRX

// CRUD

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
var OilPurchasesComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialog: MatDialog
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     * @param translate: TranslateService
     * @param store: Store<AppState>
     * @param http
     */
    function OilPurchasesComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['category', 'amountBought', 'price', 'supplierName', 'paidMoney', 'date', 'actions']; // 'currency',
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.selectedEmployee = '';
        this.selectedOilType = '';
        this.selectedGasPump = '';
        this.selectedSupplier = '';
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0) - this.tzoffset).toISOString().slice(0, 16);
        // Filter data
        // TODO: Get using APIs
        this.employees = [];
        this.oilTypes = [];
        this.suppliers = [];
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
        // Symmary data
        this.totalAmount = 0;
        this.totalPrice = 0;
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
    OilPurchasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init DataSource
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
        this.loadUsersReadingsList();
    };
    /**
     * On Destroy
     */
    OilPurchasesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load UsersReadings List from service through data-source
     */
    OilPurchasesComponent.prototype.loadUsersReadingsList = function () {
        var _this = this;
        this.isLoadingResults = true;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        if (this.selectedOilType != '')
            url += '&CategoryId=' + this.selectedOilType;
        if (this.selectedSupplier != '')
            url += '&SupplierId=' + this.selectedSupplier;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].baseUrl + 'api/Oils/Purchases' + url, { headers: this.headers })
            .subscribe(function (res) {
            _this.isLoadingResults = false;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { amountBought: item.amount, category: item.categoryName, date: item.createdAt });
            }));
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
     * Delete Reading
     *
     * @param _item: OilPricesModel
     */
    OilPurchasesComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = "حذف حركة الشراء";
        var _description = "هل أنت متأكد من حذف حركة الشراء؟";
        var _waitDesciption = "جاري الحذف";
        var _deleteMessage = "لقد تم الحذف";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.http.delete(_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].baseUrl + 'api/Oils/Purchases/' + _item.id, { headers: _this.headers })
                .subscribe(function (res) {
                _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
                _this.loadUsersReadingsList();
            }, function (err) {
                var msg = 'فشل في حذف الحركة';
                if (err.error) {
                    msg = err.error.msg;
                }
                _this.layoutUtilsService.showActionNotification(msg);
            });
        });
    };
    /**
     * Show add reading dialog
     */
    OilPurchasesComponent.prototype.addReading = function () {
        var newReading = new _models_oil_purchases_model__WEBPACK_IMPORTED_MODULE_7__["OilPurchasesModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: OilPricesModel
     */
    OilPurchasesComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_oil_purchases_edit_oil_purchases_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["OilPurchasesEditDialogComponent"], {
            data: {
                reading: reading,
                oilTypes: this.oilTypes,
                suppliers: this.suppliers
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
            _this.loadUsersReadingsList();
        });
    };
    /**
     * Get file name of the exported excel file
     */
    OilPurchasesComponent.prototype.getExcelFileName = function () {
        return 'مشتريات الزيوت' + '-' + new Date().toISOString().slice(0, 10);
    };
    OilPurchasesComponent.prototype.openPaymentsDialog = function (row) {
        var _this = this;
        var dialogRef = this.dialog.open(_oil_purchases_payments_oil_purchases_payments_dialog_component__WEBPACK_IMPORTED_MODULE_10__["OilPurchasesPaymentsDialogComponent"], {
            data: {
                purchaseId: row.id
            },
            // height: '80%',
            width: '80%',
        });
        dialogRef.afterClosed().subscribe(function (res) {
            // if (!res) {
            // 	return;
            // }
            _this.loadUsersReadingsList();
        });
    };
    OilPurchasesComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], OilPurchasesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OilPurchasesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OilPurchasesComponent.prototype, "searchInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OilPurchasesComponent.prototype, "employees", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OilPurchasesComponent.prototype, "oilTypes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OilPurchasesComponent.prototype, "suppliers", void 0);
    OilPurchasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'oil-purchases',
            template: __webpack_require__(/*! raw-loader!./oil-purchases.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil-purchases/oil-purchases-view/oil-purchases.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./oil-purchases.component.scss */ "./src/app/views/pages/oil/oil-purchases/oil-purchases-view/oil-purchases.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], OilPurchasesComponent);
    return OilPurchasesComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/oil/oil-sales/models/oil-sales.model.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/oil/oil-sales/models/oil-sales.model.ts ***!
  \*********************************************************************/
/*! exports provided: OilSalesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilSalesModel", function() { return OilSalesModel; });
var OilSalesModel = /** @class */ (function () {
    function OilSalesModel() {
    }
    OilSalesModel.prototype.clear = function () {
        this.id = 0;
        this.userId = 0;
        this.userName = '';
        this.category = '';
        this.price = '';
        this.amount = '';
        this.date = new Date().toISOString().substr(0, 16);
    };
    OilSalesModel.prototype.initialize = function () {
        this.id = 1;
        this.userId = 1;
        this.userName = 'Z';
        this.category = 'gasoline';
        this.price = '6.5';
        this.amount = '5';
        this.date = new Date().toISOString().substr(0, 16);
    };
    return OilSalesModel;
}());



/***/ }),

/***/ "./src/app/views/pages/oil/oil-sales/oil-sales-edit/oil-sales-edit.dialog.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/oil/oil-sales/oil-sales-edit/oil-sales-edit.dialog.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: OilSalesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilSalesDialogComponent", function() { return OilSalesDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_oil_sales_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/oil-sales.model */ "./src/app/views/pages/oil/oil-sales/models/oil-sales.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var OilSalesDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<UsersReadingsEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param layoutUtilsService
     * @param http
     */
    function OilSalesDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.http = http;
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.fuelTypes = [];
        this.employees = [];
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
    OilSalesDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.oilSales = this.data.reading;
        this.employees = this.data.employees;
        this.fuelTypes = this.data.fuelTypes;
        this.createForm();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.role = localStorage.getItem('role');
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
    };
    /**
     * On destroy
     */
    OilSalesDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    OilSalesDialogComponent.prototype.createForm = function () {
        this.oilSalesForm = this.fb.group({
            id: [this.oilSales.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: [this.oilSales.categoryId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [this.oilSales.price, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: [this.oilSales.amount, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    /**
     * Returns page title
     */
    OilSalesDialogComponent.prototype.getTitle = function () {
        if (this.oilSales.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062D\u0631\u0643\u0629 '" + this.oilSales.category + "'";
        }
        return 'اضافة';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    OilSalesDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.oilSalesForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    /**
     * Returns prepared fuel price
     */
    OilSalesDialogComponent.prototype.prepareReading = function () {
        var controls = this.oilSalesForm.controls;
        var _oilSales = new _models_oil_sales_model__WEBPACK_IMPORTED_MODULE_7__["OilSalesModel"]();
        _oilSales.id = this.oilSales.id;
        _oilSales.categoryId = controls.category.value;
        _oilSales.price = controls.price.value;
        _oilSales.amount = controls.amount.value;
        return _oilSales;
    };
    /**
     * On Submit
     */
    OilSalesDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.oilSalesForm.controls;
        console.log(this.oilSalesForm);
        /** check form */
        if (this.oilSalesForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var editedReading = this.prepareReading();
        if (editedReading.id > 0) {
            this.updateReading(editedReading);
        }
        else {
            this.createReading(editedReading);
        }
    };
    /**
     * Update Fuel price
     *
     * @param _oilSales: FuelPricesModel
     */
    OilSalesDialogComponent.prototype.updateReading = function (_oilSales) {
        var _this = this;
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Oils', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _oilSales, { price: +_oilSales.price, amount: +_oilSales.amount }), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _oilSales: _oilSales, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل الحركة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create Fuel price
     *
     * @param _oilSales: FuelPricesModel
     */
    OilSalesDialogComponent.prototype.createReading = function (_oilSales) {
        var _this = this;
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Oils', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _oilSales, { price: +_oilSales.price, amount: +_oilSales.amount }), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _oilSales: _oilSales, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة الحركة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    OilSalesDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    OilSalesDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    OilSalesDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'oil-sales-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./oil-sales-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil-sales/oil-sales-edit/oil-sales-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], OilSalesDialogComponent);
    return OilSalesDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/oil/oil-sales/oil-sales-info/oil-sales-info.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/oil/oil-sales/oil-sales-info/oil-sales-info.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvb2lsL29pbC1zYWxlcy9vaWwtc2FsZXMtaW5mby9DOlxcVXNlcnNcXG9tZW5cXERlc2t0b3BcXEdpdEh1YlxcRnJvbnQtS2F6ZWFoXFxnYXMtc3RhdGlvbi9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxvaWxcXG9pbC1zYWxlc1xcb2lsLXNhbGVzLWluZm9cXG9pbC1zYWxlcy1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFFRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL29pbC9vaWwtc2FsZXMvb2lsLXNhbGVzLWluZm8vb2lsLXNhbGVzLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZUNvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFjdGlvbnNDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucm93IHtcclxuXHRkaXYge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/oil/oil-sales/oil-sales-info/oil-sales-info.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/oil/oil-sales/oil-sales-info/oil-sales-info.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OilSalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilSalesComponent", function() { return OilSalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_oil_sales_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/oil-sales.model */ "./src/app/views/pages/oil/oil-sales/models/oil-sales.model.ts");
/* harmony import */ var _oil_sales_edit_oil_sales_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../oil-sales-edit/oil-sales-edit.dialog.component */ "./src/app/views/pages/oil/oil-sales/oil-sales-edit/oil-sales-edit.dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular

// Material


// Translate Module

// NGRX

// CRUD

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
var OilSalesComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialog: MatDialog
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     * @param translate: TranslateService
     * @param store: Store<AppState>
     */
    function OilSalesComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['category', 'price', 'amount', 'date', 'actions'];
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
        // Symmary data
        this.totalAmount = 0;
        this.totalPrice = 0;
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
    OilSalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init DataSource
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
        this.loadUsersReadingsList();
    };
    /**
     * On Destroy
     */
    OilSalesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load UsersReadings List from service through data-source
     */
    OilSalesComponent.prototype.loadUsersReadingsList = function () {
        var _this = this;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Oils' + url, { headers: this.headers })
            .subscribe(function (res) {
            _this.isLoadingResults = false;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { category: item.categoryName, date: item.creationDate });
            }));
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
     * Delete Reading
     *
     * @param _item: OilSalesModel
     */
    OilSalesComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = "حذف القراءة";
        var _description = "هل أنت متأكد من حذف القراءة؟";
        var _waitDesciption = "جاري الحذف";
        var _deleteMessage = "لقد تم الحذف";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
            _this.loadUsersReadingsList();
        });
    };
    /**
     * Show add reading dialog
     */
    OilSalesComponent.prototype.addReading = function () {
        var newReading = new _models_oil_sales_model__WEBPACK_IMPORTED_MODULE_7__["OilSalesModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: OilSalesModel
     */
    OilSalesComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_oil_sales_edit_oil_sales_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["OilSalesDialogComponent"], {
            data: {
                reading: reading,
                employees: this.employees,
                fuelTypes: this.fuelTypes
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
            _this.loadUsersReadingsList();
        });
    };
    /**
     * Get file name of the exported excel file
     */
    OilSalesComponent.prototype.getExcelFileName = function () {
        return 'مبيعات الزيوت' + '-' + new Date().toISOString().slice(0, 10);
    };
    OilSalesComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], OilSalesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OilSalesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OilSalesComponent.prototype, "searchInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OilSalesComponent.prototype, "employees", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OilSalesComponent.prototype, "fuelTypes", void 0);
    OilSalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'oil-sales',
            template: __webpack_require__(/*! raw-loader!./oil-sales-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil-sales/oil-sales-info/oil-sales-info.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./oil-sales-info.component.scss */ "./src/app/views/pages/oil/oil-sales/oil-sales-info/oil-sales-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], OilSalesComponent);
    return OilSalesComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/oil/oil.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/pages/oil/oil.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvb2lsL0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXG9pbFxcb2lsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0csYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvb2lsL29pbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHQ6Om5nLWRlZXAge1xyXG5cdFx0bmdiLXRhYnNldCA+IC5uYXYtdGFicyB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/oil/oil.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/pages/oil/oil.component.ts ***!
  \**************************************************/
/*! exports provided: OilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilComponent", function() { return OilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globalVariables */ "./src/app/views/pages/globalVariables.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

// Angular





var OilComponent = /** @class */ (function () {
    function OilComponent(layoutConfigService, store, http) {
        this.layoutConfigService = layoutConfigService;
        this.store = store;
        this.http = http;
        this.employees = [];
        this.fuelTypes = [];
        this.gasPumps = [];
        this.suppliers = [];
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
        this.role = '';
    }
    OilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
        this.getEmployees();
        this.getFuelTypes();
        this.getSuppliers();
    };
    /**
     * On Destroy
     */
    OilComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /** Actions */
    OilComponent.prototype.getFuelTypes = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_2__["default"].baseUrl + 'api/Categories?Type=oil', { headers: this.headers }).subscribe(function (res) {
            _this.fuelTypes = res.data.map(function (item) {
                return {
                    name: item.categoryName,
                    id: item.id
                };
            });
        });
    };
    OilComponent.prototype.getSuppliers = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_2__["default"].baseUrl + 'api/Suppliers', { headers: this.headers }).subscribe(function (res) {
            _this.suppliers = res.data.map(function (item) {
                return {
                    name: item.name,
                    id: item.id
                };
            });
        });
    };
    OilComponent.prototype.getEmployees = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_2__["default"].baseUrl + 'api/Users', { headers: this.headers }).subscribe(function (res) {
            _this.employees = res.data.map(function (item) {
                return {
                    name: item.name,
                    id: item.userId
                };
            });
        });
    };
    OilComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutConfigService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    OilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gas-oil',
            template: __webpack_require__(/*! raw-loader!./oil.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/oil/oil.component.html"),
            styles: [__webpack_require__(/*! ./oil.component.scss */ "./src/app/views/pages/oil/oil.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutConfigService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], OilComponent);
    return OilComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/oil/oil.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/pages/oil/oil.module.ts ***!
  \***********************************************/
/*! exports provided: OilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilModule", function() { return OilModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _oil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oil.component */ "./src/app/views/pages/oil/oil.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/fesm5/mat-table-exporter.js");
/* harmony import */ var _oil_purchases_oil_purchases_view_oil_purchases_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oil-purchases/oil-purchases-view/oil-purchases.component */ "./src/app/views/pages/oil/oil-purchases/oil-purchases-view/oil-purchases.component.ts");
/* harmony import */ var _oil_purchases_oil_purchases_edit_oil_purchases_edit_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oil-purchases/oil-purchases-edit/oil-purchases-edit.dialog.component */ "./src/app/views/pages/oil/oil-purchases/oil-purchases-edit/oil-purchases-edit.dialog.component.ts");
/* harmony import */ var _oil_purchases_oil_purchases_payments_oil_purchases_payments_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./oil-purchases/oil-purchases-payments/oil-purchases-payments.dialog.component */ "./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments.dialog.component.ts");
/* harmony import */ var _oil_purchases_oil_purchases_payments_oil_purchases_payments_details_oil_purchases_payments_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./oil-purchases/oil-purchases-payments/oil-purchases-payments-details/oil-purchases-payments-details.component */ "./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details/oil-purchases-payments-details.component.ts");
/* harmony import */ var _oil_purchases_oil_purchases_payments_oil_purchases_payments_details_edit_oil_purchases_payments_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./oil-purchases/oil-purchases-payments/oil-purchases-payments-details-edit/oil-purchases-payments-details-edit.dialog.component */ "./src/app/views/pages/oil/oil-purchases/oil-purchases-payments/oil-purchases-payments-details-edit/oil-purchases-payments-details-edit.dialog.component.ts");
/* harmony import */ var _oil_sales_oil_sales_info_oil_sales_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./oil-sales/oil-sales-info/oil-sales-info.component */ "./src/app/views/pages/oil/oil-sales/oil-sales-info/oil-sales-info.component.ts");
/* harmony import */ var _oil_sales_oil_sales_edit_oil_sales_edit_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./oil-sales/oil-sales-edit/oil-sales-edit.dialog.component */ "./src/app/views/pages/oil/oil-sales/oil-sales-edit/oil-sales-edit.dialog.component.ts");

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








var OilModule = /** @class */ (function () {
    function OilModule() {
    }
    OilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                        component: _oil_component__WEBPACK_IMPORTED_MODULE_6__["OilComponent"]
                    },
                ]),
                materialModules,
                mat_table_exporter__WEBPACK_IMPORTED_MODULE_10__["MatTableExporterModule"]
            ],
            entryComponents: [_oil_purchases_oil_purchases_edit_oil_purchases_edit_dialog_component__WEBPACK_IMPORTED_MODULE_12__["OilPurchasesEditDialogComponent"],
                _oil_purchases_oil_purchases_payments_oil_purchases_payments_dialog_component__WEBPACK_IMPORTED_MODULE_13__["OilPurchasesPaymentsDialogComponent"], _oil_purchases_oil_purchases_payments_oil_purchases_payments_details_edit_oil_purchases_payments_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_15__["OilPurchasesPaymentsDetailsEditDialogComponent"], _oil_sales_oil_sales_edit_oil_sales_edit_dialog_component__WEBPACK_IMPORTED_MODULE_17__["OilSalesDialogComponent"]],
            exports: [],
            providers: [],
            declarations: [
                _oil_component__WEBPACK_IMPORTED_MODULE_6__["OilComponent"],
                _oil_purchases_oil_purchases_view_oil_purchases_component__WEBPACK_IMPORTED_MODULE_11__["OilPurchasesComponent"],
                _oil_purchases_oil_purchases_edit_oil_purchases_edit_dialog_component__WEBPACK_IMPORTED_MODULE_12__["OilPurchasesEditDialogComponent"],
                _oil_purchases_oil_purchases_payments_oil_purchases_payments_dialog_component__WEBPACK_IMPORTED_MODULE_13__["OilPurchasesPaymentsDialogComponent"],
                _oil_purchases_oil_purchases_payments_oil_purchases_payments_details_oil_purchases_payments_details_component__WEBPACK_IMPORTED_MODULE_14__["OilPurchasesPaymentsDetailsComponent"],
                _oil_purchases_oil_purchases_payments_oil_purchases_payments_details_edit_oil_purchases_payments_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_15__["OilPurchasesPaymentsDetailsEditDialogComponent"],
                _oil_sales_oil_sales_info_oil_sales_info_component__WEBPACK_IMPORTED_MODULE_16__["OilSalesComponent"],
                _oil_sales_oil_sales_edit_oil_sales_edit_dialog_component__WEBPACK_IMPORTED_MODULE_17__["OilSalesDialogComponent"]
            ]
        })
    ], OilModule);
    return OilModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-oil-oil-module.js.map