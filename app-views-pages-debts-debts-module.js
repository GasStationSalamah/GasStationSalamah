(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-debts-debts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/debts/debts-info/debts-info-edit/debts-info-edit.dialog.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/debts/debts-info/debts-info-edit/debts-info-edit.dialog.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"debtsInfoForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"الزبون\" formControlName=\"client\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"client.id\" *ngFor=\"let client of clients\">\r\n\t\t\t\t\t\t\t\t{{client.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> اسم الزبون</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>اسم الزبون</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"مسجل الدين\" formControlName=\"userName\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"employee.id\" *ngFor=\"let employee of employees\">\r\n\t\t\t\t\t\t\t\t{{employee.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> اسم الموظف</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>اسم الموظف</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"المطلوب\" type=\"number\" formControlName=\"totalDebt\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>المطلوب</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>المطلوب</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"المدفوع\" formControlName=\"paidMoney\" type=\"number\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\"debtsInfo.paidMoney\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>المدفوع</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>المدفوع</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"debtsInfo.paidMoney > 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"طريقة الدفع\" formControlName=\"paymentMethod\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"payment.id\" *ngFor=\"let payment of paymentTypes\">\r\n\t\t\t\t\t\t\t\t{{payment.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> طريقة الدفع</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>طريقة الدفع</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"رقم شهادة الارسال\" formControlName=\"sendingCertificateNumber\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>رقم شهادة الارسال</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>رقم شهادة الارسال</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"datetime-local\" formControlName=\"date\" required style=\"color: black;\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>تاريخ الحركة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details-edit/debts-payments-details-edit.dialog.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details-edit/debts-payments-details-edit.dialog.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"debtForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"طريقة الدفع\" formControlName=\"category\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"paymentType.id\" *ngFor=\"let paymentType of paymentTypes\">\r\n\t\t\t\t\t\t\t\t{{paymentType.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> طريقة الدفع</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>طريقة الدفع</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"كمية الدفع\" formControlName=\"paymentValue\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>كمية الدفع</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>كمية الدفع</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"datetime-local\" formControlName=\"date\" required\r\n\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>تاريخ الدفعة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details/debts-payments-details.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details/debts-payments-details.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet mat-elevation-z0 dir=\"rtl\" style=\"text-align: left;\">\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>الدفعات</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"حركة شراء جديدة\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<strong>بحث</strong>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t</mat-hint>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t</mat-form-field>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\t   style=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\t   style=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\t\tmatTooltip=\"Excel\">تنزيل\r\n\t\t\t</button>\r\n\t\t</div>\r\n\r\n\r\n\t\t<!-- <div class=\"mat-table__wrapper\"> -->\r\n\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\t   matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t   #exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t<ng-container matColumnDef=\"paymentType\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>طريقة الدفع</mat-header-cell>\r\n\t\t\t\t<mat-cell *matCellDef=\"let debt\">{{debt.paymentType}}</mat-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<ng-container matColumnDef=\"paymentValue\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>كمية الدفع</mat-header-cell>\r\n\t\t\t\t<mat-cell *matCellDef=\"let debt\">{{debt.paymentValue}}</mat-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<ng-container matColumnDef=\"date\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ</mat-header-cell>\r\n\t\t\t\t<mat-cell *matCellDef=\"let debt\">{{debt.date}}</mat-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t<mat-cell *matCellDef=\"let debt\" class=\"actionsColumn\">\r\n\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(debt)\">\r\n\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(debt)\">\r\n\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t</mat-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t</mat-table>\r\n\t\t<!-- Message for empty data  -->\r\n\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t<!-- </div> -->\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\"\r\n\t\t\t\t\t\t   [length]=\"dataSource.data.length\"\r\n\t\t\t\t\t\t   [showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments.dialog.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments.dialog.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div dir=\"rtl\" style=\"text-align: right;\">\r\n\t<!-- <h2 mat-dialog-title style=\"padding: 20;\">الدفعات</h2> -->\r\n\t<!-- <mat-dialog-content style=\"margin: 0; padding: 0\"> -->\r\n\t<debts-payments-details></debts-payments-details>\r\n\t<!-- </mat-dialog-content> -->\r\n\t<mat-dialog-actions align=\"end\" style=\"padding-left: 20px;\">\r\n\t\t<button mat-raised-button mat-dialog-close color=\"warn\">اغلاق</button>\r\n\t\t<!-- <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button> -->\r\n\t</mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/debts/debts-info/debts-view/debts-info.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/debts/debts-info/debts-view/debts-info.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>الديون</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"حركة شراء جديدة\" color=\"primary\" type=\"button\"\r\n\t\t\t\t\tstyle=\"margin: 5px; min-width: 60px;\">\r\n\t\t\t\t<span>اضافة</span>\r\n\t\t\t</button>\r\n\t\t\t<button (click)=\"addClient()\" mat-raised-button matTooltip=\"اضافة زبون جديد\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة زبون</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"رقم الارسالية\" [(ngModel)]=\"consignmentNumber\">\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t<strong>بحث</strong>\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t<div class=\"kt-form__control\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedOilType\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t\t<mat-option [value]=\"oilType.id\" *ngFor=\"let oilType of oilTypes\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t\t\t{{oilType.name}}</mat-option>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t</mat-select>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t\tاختر <strong>الصنف</strong>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t</mat-hint>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t</mat-form-field>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedSupplier\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"client.id\" *ngFor=\"let client of clients\">\r\n\t\t\t\t\t\t\t\t\t\t{{client.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الزبون</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\t   style=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\t   style=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"display: flex; column-gap: 5px\">\r\n\r\n\t\t\t<div style=\"text-align: right;\">\r\n\t\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('csv',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\t\t\tmatTooltip=\"Excel\">تنزيل\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div style=\"text-align: right;\">\r\n\t\t\t\t<button mat-raised-button color=\"primary\" (click)=\"downloadPdfV2()\"\r\n\t\t\t\t\t\tmatTooltip=\"Excel\">تنزيل pdf\r\n\t\t\t\t</button>\r\n\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\t\t   matSortDisableClear matTableExporter\r\n\t\t\t\t\t   #exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"date\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>تاريخ الدين</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let debt\" dir=\"ltr\" class=\"align-right\">{{debt.date}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"client\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الاسم</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let debt\">{{debt.client}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<!-- <ng-container matColumnDef=\"category\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الصنف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let debt\">{{debt.category}}</mat-cell>\r\n\t\t\t\t</ng-container> -->\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"totalDebt\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>المطلوب</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let debt\">{{debt.totalDebt}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"paidMoney\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>المدفوع</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let debt\">{{debt.paidMoney}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"balance\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الرصيد</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let debt\">{{debt.balance}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"sendingCertificateNumber\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>رقم شهادة الارسال</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let debt\">{{debt.sendingCertificateNumber}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"paymentMethod\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>طريقة الدفع</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let debt\">{{debt.paymentMethod}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let debt\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(debt)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t\t(click)=\"deleteReading(debt)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<!-- (click)=\"openPaymentsDialog(row)\" -->\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\"\r\n\t\t\t\t\t\t   [length]=\"dataSource.data.length\"\r\n\t\t\t\t\t\t   [showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/debts/debts.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/debts/debts.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-xl-12\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<debts-info [clients]=\"clients\" [oilTypes]=\"fuelTypes\" [employees]=\"employees\"></debts-info>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/debts/debts-info/debts-info-edit/debts-info-edit.dialog.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/debts/debts-info/debts-info-edit/debts-info-edit.dialog.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DebtsInfoEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtsInfoEditDialogComponent", function() { return DebtsInfoEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_debts_info_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/debts-info.model */ "./src/app/views/pages/debts/debts-info/models/debts-info.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var DebtsInfoEditDialogComponent = /** @class */ (function () {
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
    function DebtsInfoEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.http = http;
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.categories = [];
        this.clients = [];
        this.employees = [];
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
    DebtsInfoEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.debtsInfo = this.data.reading;
        this.clients = this.data.clients;
        this.categories = this.data.categories;
        this.employees = this.data.employees;
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
        this.getPaymentTypes();
        this.getClients();
    };
    /**
     * On destroy
     */
    DebtsInfoEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    DebtsInfoEditDialogComponent.prototype.createForm = function () {
        var date = this.debtsInfo.date;
        if (this.debtsInfo.id > 0) {
            date = new Date(+new Date(this.debtsInfo.date) - this.tzoffset).toISOString().substr(0, 16);
        }
        this.debtsInfoForm = this.fb.group({
            id: [this.debtsInfo.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // category: [this.debtsInfo.categoryId, Validators.required],
            paymentMethod: [this.debtsInfo.paymentMethodId, +this.debtsInfo.paidMoney > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : ''],
            client: [this.debtsInfo.clientId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            totalDebt: [this.debtsInfo.totalDebt, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paidMoney: [this.debtsInfo.paidMoney, +this.debtsInfo.paidMoney > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : ''],
            sendingCertificateNumber: [this.debtsInfo.sendingCertificateNumber, ''],
            date: [date, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    /**
     * Returns page title
     */
    DebtsInfoEditDialogComponent.prototype.getTitle = function () {
        if (this.debtsInfo.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062F\u064A\u0646 \u0627\u0644\u062E\u0627\u0635 \u0628  '" + this.debtsInfo.client + "'";
        }
        return 'اضافة دين جديد';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    DebtsInfoEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.debtsInfoForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    /**
 * Get payment methods
 */
    DebtsInfoEditDialogComponent.prototype.getPaymentTypes = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/PaymentsMethods', { headers: this.headers }).subscribe(function (res) {
            _this.paymentTypes = res.data.map(function (item) {
                return {
                    name: item.paymentType,
                    id: item.id
                };
            });
            _this.debtsInfoForm.controls["paymentMethod"].setValue(_this.debtsInfo.paymentMethodId);
        });
    };
    DebtsInfoEditDialogComponent.prototype.getClients = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Clients', { headers: this.headers }).subscribe(function (res) {
            _this.clients = res.data.map(function (item) {
                return {
                    name: item.name,
                    id: item.id
                };
            });
            _this.debtsInfoForm.controls["client"].setValue(_this.debtsInfo.clientId);
        });
    };
    /**
     * Returns prepared oil purchase
     */
    DebtsInfoEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.debtsInfoForm.controls;
        var _debtsInfo = new _models_debts_info_model__WEBPACK_IMPORTED_MODULE_7__["DebtsInfoModel"]();
        _debtsInfo.id = this.debtsInfo.id;
        _debtsInfo.paymentMethodId = controls.paymentMethod.value;
        _debtsInfo.clientId = controls.client.value;
        _debtsInfo.totalDebt = controls.totalDebt.value;
        _debtsInfo.paidMoney = controls.paidMoney.value;
        _debtsInfo.sendingCertificateNumber = controls.sendingCertificateNumber.value;
        _debtsInfo.date = controls.date.value;
        return _debtsInfo;
    };
    /**
     * On Submit
     */
    DebtsInfoEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.debtsInfoForm.controls;
        /** check form */
        if (this.debtsInfoForm.invalid) {
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
     * @param _debtsInfo: DebtsInfoModel
     */
    DebtsInfoEditDialogComponent.prototype.updateReading = function (_debtsInfo) {
        var _this = this;
        var debtDate = new Date(+new Date(_debtsInfo.date) - this.tzoffset).toISOString().slice(0, 16);
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/ClientsDebts', {
            id: _debtsInfo.id,
            paymentTypeId: _debtsInfo.paymentMethodId === null ? 0 : _debtsInfo.paymentMethodId,
            debtValue: +_debtsInfo.totalDebt,
            paidValue: +_debtsInfo.paidMoney,
            // registeredByUserId: _debtsInfo.userId,
            debtDate: debtDate,
            // categoryId: _debtsInfo.categoryId,
            gasStationClientId: _debtsInfo.clientId,
            consignmentNumber: _debtsInfo.sendingCertificateNumber
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _debtsInfo: _debtsInfo, isEdit: true });
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
     * @param _debtsInfo: DebtsInfoModel
     */
    DebtsInfoEditDialogComponent.prototype.createReading = function (_debtsInfo) {
        var _this = this;
        var debtDate = new Date(+new Date(_debtsInfo.date) - this.tzoffset).toISOString().slice(0, 16);
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/ClientsDebts', {
            // id: _debtsInfo.id,
            paymentTypeId: _debtsInfo.paymentMethodId === null ? 0 : _debtsInfo.paymentMethodId,
            debtValue: +_debtsInfo.totalDebt,
            paidValue: +_debtsInfo.paidMoney,
            // registeredByUserId: _debtsInfo.userId,
            debtDate: debtDate,
            // categoryId: _debtsInfo.categoryId,
            gasStationClientId: _debtsInfo.clientId,
            consignmentNumber: _debtsInfo.sendingCertificateNumber
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _debtsInfo: _debtsInfo, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة حركة الدين';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    DebtsInfoEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    DebtsInfoEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    DebtsInfoEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'debts-info-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./debts-info-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/debts/debts-info/debts-info-edit/debts-info-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], DebtsInfoEditDialogComponent);
    return DebtsInfoEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details-edit/debts-payments-details-edit.dialog.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details-edit/debts-payments-details-edit.dialog.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: DebtsPaymentsDetailsEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtsPaymentsDetailsEditDialogComponent", function() { return DebtsPaymentsDetailsEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_debts_payment_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/debts-payment.model */ "./src/app/views/pages/debts/debts-info/debts-info-payments/models/debts-payment.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var DebtsPaymentsDetailsEditDialogComponent = /** @class */ (function () {
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
    function DebtsPaymentsDetailsEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.http = http;
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        // TODO: Get from Api
        this.paymentTypes = [];
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
    DebtsPaymentsDetailsEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.debt = this.data.reading;
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
    DebtsPaymentsDetailsEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    DebtsPaymentsDetailsEditDialogComponent.prototype.createForm = function () {
        this.debtForm = this.fb.group({
            id: [this.debt.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paymentType: [this.debt.paymentType, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paymentValue: [this.debt.paymentValue, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: [this.debt.date, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    /**
     * Returns page title
     */
    DebtsPaymentsDetailsEditDialogComponent.prototype.getTitle = function () {
        if (this.debt.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062F\u0641\u0639\u0629";
        }
        return 'اضافة دفعة ';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    DebtsPaymentsDetailsEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.debtForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    DebtsPaymentsDetailsEditDialogComponent.prototype.getPaymentTypes = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/PaymentsMethods', { headers: this.headers }).subscribe(function (res) {
            _this.paymentTypes = res.data.map(function (item) {
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
    DebtsPaymentsDetailsEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.debtForm.controls;
        var _debt = new _models_debts_payment_model__WEBPACK_IMPORTED_MODULE_7__["DebtsPaymentModel"]();
        _debt.id = this.debt.id;
        _debt.paymentValue = controls.paymentValue.value;
        _debt.paymentType = controls.paymentType.value;
        _debt.date = controls.date.value;
        return _debt;
    };
    /**
     * On Submit
     */
    DebtsPaymentsDetailsEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.debtForm.controls;
        console.log(this.debtForm);
        /** check form */
        if (this.debtForm.invalid) {
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
     * @param _debt: DebtsPaymentModel
     */
    DebtsPaymentsDetailsEditDialogComponent.prototype.updateReading = function (_debt) {
        var _this = this;
        var debtDate = new Date(+new Date(_debt.date) - this.tzoffset).toISOString().slice(0, 16);
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/debts/Payments', {
            debtId: _debt.id,
            paymentType: _debt.paymentType,
            paidMoney: +_debt.paymentValue,
            paymentDate: debtDate
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _debt: _debt, isEdit: true });
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
     * @param _debt: DebtsPaymentModel
     */
    DebtsPaymentsDetailsEditDialogComponent.prototype.createReading = function (_debt) {
        var _this = this;
        var debtDate = new Date(+new Date(_debt.date) - this.tzoffset).toISOString().slice(0, 16);
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/debts/Payments', {
            fuelPurchasesId: _debt.id,
            paymentType: _debt.paymentType,
            paidMoney: +_debt.paymentValue,
            paymentDate: debtDate
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _debt: _debt, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة الدفعة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    DebtsPaymentsDetailsEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    DebtsPaymentsDetailsEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    DebtsPaymentsDetailsEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'debts-payments-details-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./debts-payments-details-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details-edit/debts-payments-details-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], DebtsPaymentsDetailsEditDialogComponent);
    return DebtsPaymentsDetailsEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details/debts-payments-details.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details/debts-payments-details.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZGVidHMvZGVidHMtaW5mby9kZWJ0cy1pbmZvLXBheW1lbnRzL2RlYnRzLXBheW1lbnRzLWRldGFpbHMvQzpcXFVzZXJzXFxvbWVuXFxEZXNrdG9wXFxHaXRIdWJcXEZyb250LUthemVhaFxcZ2FzLXN0YXRpb24vc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcZGVidHNcXGRlYnRzLWluZm9cXGRlYnRzLWluZm8tcGF5bWVudHNcXGRlYnRzLXBheW1lbnRzLWRldGFpbHNcXGRlYnRzLXBheW1lbnRzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR2xCO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdsQjtFQUVFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZGVidHMvZGVidHMtaW5mby9kZWJ0cy1pbmZvLXBheW1lbnRzL2RlYnRzLXBheW1lbnRzLWRldGFpbHMvZGVidHMtcGF5bWVudHMtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlQ29sdW1uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWN0aW9uc0NvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG5cdGRpdiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details/debts-payments-details.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details/debts-payments-details.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: DebtsPaymentsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtsPaymentsDetailsComponent", function() { return DebtsPaymentsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_debts_payment_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/debts-payment.model */ "./src/app/views/pages/debts/debts-info/debts-info-payments/models/debts-payment.model.ts");
/* harmony import */ var _debts_payments_details_edit_debts_payments_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../debts-payments-details-edit/debts-payments-details-edit.dialog.component */ "./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details-edit/debts-payments-details-edit.dialog.component.ts");
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
var DebtsPaymentsDetailsComponent = /** @class */ (function () {
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
    function DebtsPaymentsDetailsComponent(dialog, data, snackBar, layoutUtilsService, translate, store, http) {
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
    DebtsPaymentsDetailsComponent.prototype.ngOnInit = function () {
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
    DebtsPaymentsDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load UsersReadings List from service through data-source
     */
    DebtsPaymentsDetailsComponent.prototype.loadUsersReadingsList = function () {
        var _this = this;
        this.isLoadingResults = true;
        // let dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        // let dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        // let url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/debts/Payments/' + this.data.debtId, { headers: this.headers })
            .subscribe(function (res) {
            _this.isLoadingResults = false;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item);
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
            var userReadingModel = new _models_debts_payment_model__WEBPACK_IMPORTED_MODULE_7__["DebtsPaymentModel"]();
            userReadingModel.initialize();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([
                userReadingModel
            ]);
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
    DebtsPaymentsDetailsComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = "حذف حركة الدفع";
        var _description = "هل أنت متأكد من حذف حركة الدفع";
        var _waitDesciption = "جاري الحذف";
        var _deleteMessage = "لقد تم الحذف";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.http.delete(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/debts/Payments/' + _item.id, { headers: _this.headers })
                .subscribe(function (res) {
                _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
                _this.loadUsersReadingsList();
            }, function (err) {
                var msg = 'فشل في حذف الدفعة';
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
    DebtsPaymentsDetailsComponent.prototype.addReading = function () {
        var newReading = new _models_debts_payment_model__WEBPACK_IMPORTED_MODULE_7__["DebtsPaymentModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: OilPricesModel
     */
    DebtsPaymentsDetailsComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_debts_payments_details_edit_debts_payments_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DebtsPaymentsDetailsEditDialogComponent"], {
            data: {
                reading: reading,
                oilTypes: this.oilTypes
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
    DebtsPaymentsDetailsComponent.prototype.getExcelFileName = function () {
        return 'دفعات الديون' + '-' + new Date().toISOString().slice(0, 10);
    };
    DebtsPaymentsDetailsComponent.ctorParameters = function () { return [
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
    ], DebtsPaymentsDetailsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], DebtsPaymentsDetailsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DebtsPaymentsDetailsComponent.prototype, "searchInput", void 0);
    DebtsPaymentsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'debts-payments-details',
            template: __webpack_require__(/*! raw-loader!./debts-payments-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details/debts-payments-details.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./debts-payments-details.component.scss */ "./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details/debts-payments-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], DebtsPaymentsDetailsComponent);
    return DebtsPaymentsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments.dialog.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments.dialog.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DebtsPaymentsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtsPaymentsDialogComponent", function() { return DebtsPaymentsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");

// Angular

// Material


// Services and Models

var DebtsPaymentsDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<UsersReadingsEditDialogComponent>
     * @param data: any
     * @param store: Store<AppState>
     * @param typesUtilsService: TypesUtilsService
     */
    function DebtsPaymentsDialogComponent(dialogRef, data, store) {
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
    DebtsPaymentsDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_4__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.debtId = this.data.debtId;
    };
    /**
     * On destroy
     */
    DebtsPaymentsDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    DebtsPaymentsDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    DebtsPaymentsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'debts-payment-payments-dialog',
            template: __webpack_require__(/*! raw-loader!./debts-payments.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], DebtsPaymentsDialogComponent);
    return DebtsPaymentsDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/debts/debts-info/debts-info-payments/models/debts-payment.model.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/debts/debts-info/debts-info-payments/models/debts-payment.model.ts ***!
  \************************************************************************************************/
/*! exports provided: DebtsPaymentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtsPaymentModel", function() { return DebtsPaymentModel; });
var DebtsPaymentModel = /** @class */ (function () {
    function DebtsPaymentModel() {
    }
    DebtsPaymentModel.prototype.clear = function () {
        this.id = 0;
        this.paymentType = '';
        this.paymentValue = '';
        this.date = new Date().toISOString().substr(0, 16);
    };
    DebtsPaymentModel.prototype.initialize = function () {
        this.id = 1;
        this.paymentType = 'cash';
        this.paymentValue = '2000';
        this.date = new Date().toISOString().substr(0, 16);
    };
    return DebtsPaymentModel;
}());



/***/ }),

/***/ "./src/app/views/pages/debts/debts-info/debts-view/debts-info.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/debts/debts-info/debts-view/debts-info.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n.mat-row:hover {\n  background-color: whitesmoke; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZGVidHMvZGVidHMtaW5mby9kZWJ0cy12aWV3L0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGRlYnRzXFxkZWJ0cy1pbmZvXFxkZWJ0cy12aWV3XFxkZWJ0cy1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFFRSxtQkFBbUIsRUFBQTs7QUFJckI7RUFDQyw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2RlYnRzL2RlYnRzLWluZm8vZGVidHMtdmlldy9kZWJ0cy1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGVDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuXHR3aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5hY3Rpb25zQ29sdW1uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcclxuXHR3aWR0aDogOCUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnJvdyB7XHJcblx0ZGl2IHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG59XHJcblxyXG4ubWF0LXJvdzpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuXHQvLyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/debts/debts-info/debts-view/debts-info.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/debts/debts-info/debts-view/debts-info.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DebtsInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtsInfoComponent", function() { return DebtsInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_debts_info_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/debts-info.model */ "./src/app/views/pages/debts/debts-info/models/debts-info.model.ts");
/* harmony import */ var _debts_info_edit_debts_info_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../debts-info-edit/debts-info-edit.dialog.component */ "./src/app/views/pages/debts/debts-info/debts-info-edit/debts-info-edit.dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _debts_info_payments_debts_payments_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../debts-info-payments/debts-payments.dialog.component */ "./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments.dialog.component.ts");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");
/* harmony import */ var _configuration_clients_models_client_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../configuration/clients/models/client.model */ "./src/app/views/pages/configuration/clients/models/client.model.ts");
/* harmony import */ var _configuration_clients_client_edit_client_edit_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../configuration/clients/client-edit/client-edit.dialog.component */ "./src/app/views/pages/configuration/clients/client-edit/client-edit.dialog.component.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_16__);

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
var DebtsInfoComponent = /** @class */ (function () {
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
    function DebtsInfoComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['date', 'client', 'totalDebt', 'paidMoney', 'balance', 'paymentMethod', 'sendingCertificateNumber', 'actions']; // 'category',
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.selectedEmployee = '';
        this.selectedOilType = '';
        this.selectedGasPump = '';
        this.selectedSupplier = '';
        this.consignmentNumber = '';
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0) - this.tzoffset).toISOString().slice(0, 16);
        // Filter data
        // TODO: Get using APIs
        this.employees = [];
        this.oilTypes = [];
        this.clients = [];
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
    DebtsInfoComponent.prototype.ngOnInit = function () {
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
    DebtsInfoComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load UsersReadings List from service through data-source
     */
    DebtsInfoComponent.prototype.loadUsersReadingsList = function () {
        var _this = this;
        this.dataSource.data = [];
        this.isLoadingResults = true;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        // if (this.selectedOilType != '')
        // 	url += '&CategoryId=' + this.selectedOilType;
        if (this.selectedSupplier !== '') {
            url += '&GasStationClientId=' + this.selectedSupplier;
        }
        if (this.consignmentNumber !== '') {
            url += '&ConsignmentNumber=' + this.consignmentNumber;
        }
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].baseUrl + 'api/ClientsDebts' + url, { headers: this.headers })
            .subscribe(function (res) {
            _this.isLoadingResults = false;
            var data = [];
            var balance = 0;
            var _loop_1 = function (index) {
                var item = res.data.clientsDebtsResponses[index];
                var prevItem = null;
                var balanceElement = null;
                if (index === 0) {
                    balanceElement = res.data.balances.find(function (element) {
                        return element.gasStationClientId == item.gasStationClientId;
                    });
                }
                else {
                    prevItem = res.data.clientsDebtsResponses[index - 1];
                }
                if (balanceElement !== null && balanceElement !== undefined) {
                    balance = balanceElement.balance;
                }
                if (prevItem !== null && prevItem.gasStationClientId !== item.gasStationClientId) {
                    balanceElement = res.data.balances.find(function (element) {
                        return element.gasStationClientId == item.gasStationClientId;
                    });
                    balance = 0;
                    if (balanceElement !== null && balanceElement !== undefined) {
                        balance = balanceElement.balance;
                    }
                }
                balance = +(item.debtValue) - +(item.paidValue) + balance;
                data.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { paymentMethod: item.paymentType, paymentMethodId: item.paymentTypeId, category: item.categoryName, categoryId: item.categoryId, date: item.debtDate, totalDebt: item.debtValue, userId: item.registeredByUserId, paidMoney: item.paidValue, balance: balance, clientId: item.gasStationClientId, client: item.gasStationClientName, sendingCertificateNumber: item.consignmentNumber }));
            };
            for (var index = 0; index < res.data.clientsDebtsResponses.length; index++) {
                _loop_1(index);
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
    DebtsInfoComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = 'حذف الدين';
        var _description = 'هل أنت متأكد من حذف الدين؟';
        var _waitDesciption = 'جاري الحذف';
        var _deleteMessage = 'لقد تم الحذف';
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.http.delete(_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].baseUrl + 'api/ClientsDebts/' + _item.id, { headers: _this.headers })
                .subscribe(function (res) {
                _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
                _this.loadUsersReadingsList();
            }, function (err) {
                var msg = 'فشل في حذف الدين';
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
    DebtsInfoComponent.prototype.addReading = function () {
        var newReading = new _models_debts_info_model__WEBPACK_IMPORTED_MODULE_7__["DebtsInfoModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: OilPricesModel
     */
    DebtsInfoComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_debts_info_edit_debts_info_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DebtsInfoEditDialogComponent"], {
            data: {
                reading: reading,
                categories: this.oilTypes,
                clients: this.clients,
                employees: this.employees
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
    DebtsInfoComponent.prototype.getExcelFileName = function () {
        return 'الديون' + '-' + new Date().toISOString().slice(0, 10);
    };
    /**
     * Payment popup
     */
    DebtsInfoComponent.prototype.openPaymentsDialog = function (row) {
        var _this = this;
        var dialogRef = this.dialog.open(_debts_info_payments_debts_payments_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DebtsPaymentsDialogComponent"], {
            data: {
                debtId: row.id
            },
            // height: '80%',
            width: '80%',
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.loadUsersReadingsList();
        });
    };
    /**
     * Add Client Dialog
     */
    DebtsInfoComponent.prototype.addClient = function () {
        var _this = this;
        var reading = new _configuration_clients_models_client_model__WEBPACK_IMPORTED_MODULE_12__["ClientModel"]();
        reading.clear();
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_configuration_clients_client_edit_client_edit_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ClientsEditDialogComponent"], {
            data: {
                reading: reading
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
        });
    };
    DebtsInfoComponent.prototype.downloadPdf = function () {
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        var headers = this.headers;
        headers.set('Accept', 'application/pdf');
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].baseUrl + 'api/ClientsDebts/Summary/pdf' + url, { headers: headers, responseType: 'blob' }).subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_14__["saveAs"])(res, "ClientsDebts_to-" + dateTo + ".pdf");
            console.log('ok');
        }, function (error1) {
            console.log(error1.error);
        });
    };
    DebtsInfoComponent.prototype.downloadPdfV2 = function () {
        var _this = this;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].baseUrl + 'api/ClientsDebts/Summary' + url).subscribe(function (res) {
            console.log('ok');
            console.log(res);
            _this.downloadAsPDF(res.data);
        }, function (error1) {
            console.log(error1.error);
        });
    };
    DebtsInfoComponent.prototype.downloadAsPDF = function (res) {
        var _this = this;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_15__["jsPDF"]();
        var myFont = _globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].pdfFont;
        console.log(myFont);
        var callAddFont = function () {
            doc.addFileToVFS("MyFont.ttf", myFont);
            doc.addFont("MyFont.ttf", "MyFont", "normal");
        };
        jspdf__WEBPACK_IMPORTED_MODULE_15__["jsPDF"].API.events.push(['addFonts', callAddFont]);
        doc.addFileToVFS("MyFont.ttf", myFont);
        doc.addFont("MyFont.ttf", "MyFont", "normal");
        doc.setFont("MyFont");
        var columns = [['اسم الزبون', 'الديون', 'المدفوعات', 'الرصيد (الديون - المدفعوعات)']];
        var data = [];
        for (var _i = 0, _a = res.clientDebtsSummaries; _i < _a.length; _i++) {
            var row = _a[_i];
            data.push([row.name, row.debtValue,
                row.paidValue, row.balance]);
        }
        data.push(['', res.paidValueSum, res.debtValueSum, res.balanceSum]);
        // let columnStyle = {
        // 	halign: 'center',
        // 	textColor: [0, 0, 0],
        // };
        //
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_16___default()(doc, {
            head: columns,
            headStyles: {
                // lineWidth: 1,
                // lineColor: [0, 0, 0],
                halign: "center"
            },
            columnStyles: {
                0: {
                    halign: 'center',
                    textColor: [0, 0, 0],
                },
                1: {
                    halign: 'center',
                    textColor: [0, 0, 0],
                },
                2: {
                    halign: 'center',
                    textColor: [0, 0, 0],
                },
                3: {
                    halign: 'center',
                    textColor: [0, 0, 0],
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
                doc.text('تقرير ملخص الديون', 95, 10);
                doc.text("\u0645\u0646 \u0634\u0647\u0631: " + fromDate.getFullYear() + "/" + (fromDate.getMonth() + 1), 165, 12);
                doc.text("\u0627\u0644\u0649 \u0634\u0647\u0631: " + toDate.getFullYear() + "/" + (toDate.getMonth() + 1), 165, 20);
                doc.line(0, 25, 300, 25);
            }
        });
        doc.save('table.pdf');
    };
    DebtsInfoComponent.ctorParameters = function () { return [
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
    ], DebtsInfoComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], DebtsInfoComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DebtsInfoComponent.prototype, "searchInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DebtsInfoComponent.prototype, "employees", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DebtsInfoComponent.prototype, "oilTypes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DebtsInfoComponent.prototype, "clients", void 0);
    DebtsInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'debts-info',
            template: __webpack_require__(/*! raw-loader!./debts-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/debts/debts-info/debts-view/debts-info.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./debts-info.component.scss */ "./src/app/views/pages/debts/debts-info/debts-view/debts-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], DebtsInfoComponent);
    return DebtsInfoComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/debts/debts-info/models/debts-info.model.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/debts/debts-info/models/debts-info.model.ts ***!
  \*************************************************************************/
/*! exports provided: DebtsInfoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtsInfoModel", function() { return DebtsInfoModel; });
var DebtsInfoModel = /** @class */ (function () {
    function DebtsInfoModel() {
    }
    DebtsInfoModel.prototype.clear = function () {
        this.id = 0;
        this.userName = '';
        this.category = '';
        this.totalDebt = '';
        this.paidMoney = 0;
        this.balance = '';
        this.sendingCertificateNumber = '';
        this.date = new Date().toISOString().substr(0, 16);
    };
    return DebtsInfoModel;
}());



/***/ }),

/***/ "./src/app/views/pages/debts/debts.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/pages/debts/debts.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZGVidHMvQzpcXFVzZXJzXFxvbWVuXFxEZXNrdG9wXFxHaXRIdWJcXEZyb250LUthemVhaFxcZ2FzLXN0YXRpb24vc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcZGVidHNcXGRlYnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0csYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZGVidHMvZGVidHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0OjpuZy1kZWVwIHtcclxuXHRcdG5nYi10YWJzZXQgPiAubmF2LXRhYnMge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/debts/debts.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/pages/debts/debts.component.ts ***!
  \******************************************************/
/*! exports provided: DebtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtComponent", function() { return DebtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular





var DebtComponent = /** @class */ (function () {
    function DebtComponent(layoutConfigService, store, http) {
        this.layoutConfigService = layoutConfigService;
        this.store = store;
        this.http = http;
        this.employees = [];
        this.fuelTypes = [];
        this.clients = [];
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
        this.role = '';
    }
    DebtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
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
    DebtComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /** Actions */
    DebtComponent.prototype.getFuelTypes = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_5__["default"].baseUrl + 'api/Categories?Type=fuel', { headers: this.headers }).subscribe(function (res) {
            _this.fuelTypes = res.data.map(function (item) {
                return {
                    name: item.categoryName,
                    id: item.id
                };
            });
        });
    };
    DebtComponent.prototype.getEmployees = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_5__["default"].baseUrl + 'api/Users', { headers: this.headers }).subscribe(function (res) {
            _this.employees = res.data.map(function (item) {
                return {
                    name: item.name,
                    id: item.userId
                };
            });
        });
    };
    DebtComponent.prototype.getSuppliers = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_5__["default"].baseUrl + 'api/Clients', //'Suppliers',
        { headers: this.headers }).subscribe(function (res) {
            _this.clients = res.data.map(function (item) {
                return {
                    name: item.name,
                    id: item.id
                };
            });
        });
    };
    DebtComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    DebtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gas-debt',
            template: __webpack_require__(/*! raw-loader!./debts.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/debts/debts.component.html"),
            styles: [__webpack_require__(/*! ./debts.component.scss */ "./src/app/views/pages/debts/debts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], DebtComponent);
    return DebtComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/debts/debts.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/pages/debts/debts.module.ts ***!
  \***************************************************/
/*! exports provided: DebtsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtsModule", function() { return DebtsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _debts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./debts.component */ "./src/app/views/pages/debts/debts.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/fesm5/mat-table-exporter.js");
/* harmony import */ var _debts_info_debts_view_debts_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./debts-info/debts-view/debts-info.component */ "./src/app/views/pages/debts/debts-info/debts-view/debts-info.component.ts");
/* harmony import */ var _debts_info_debts_info_payments_debts_payments_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./debts-info/debts-info-payments/debts-payments.dialog.component */ "./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments.dialog.component.ts");
/* harmony import */ var _debts_info_debts_info_payments_debts_payments_details_edit_debts_payments_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./debts-info/debts-info-payments/debts-payments-details-edit/debts-payments-details-edit.dialog.component */ "./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details-edit/debts-payments-details-edit.dialog.component.ts");
/* harmony import */ var _debts_info_debts_info_payments_debts_payments_details_debts_payments_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./debts-info/debts-info-payments/debts-payments-details/debts-payments-details.component */ "./src/app/views/pages/debts/debts-info/debts-info-payments/debts-payments-details/debts-payments-details.component.ts");
/* harmony import */ var _debts_info_debts_info_edit_debts_info_edit_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./debts-info/debts-info-edit/debts-info-edit.dialog.component */ "./src/app/views/pages/debts/debts-info/debts-info-edit/debts-info-edit.dialog.component.ts");

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






var DebtsModule = /** @class */ (function () {
    function DebtsModule() {
    }
    DebtsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                        component: _debts_component__WEBPACK_IMPORTED_MODULE_6__["DebtComponent"]
                    },
                ]),
                materialModules,
                mat_table_exporter__WEBPACK_IMPORTED_MODULE_10__["MatTableExporterModule"]
            ],
            entryComponents: [_debts_info_debts_info_payments_debts_payments_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DebtsPaymentsDialogComponent"], _debts_info_debts_info_payments_debts_payments_details_edit_debts_payments_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DebtsPaymentsDetailsEditDialogComponent"], _debts_info_debts_info_edit_debts_info_edit_dialog_component__WEBPACK_IMPORTED_MODULE_15__["DebtsInfoEditDialogComponent"]],
            exports: [],
            providers: [],
            declarations: [
                _debts_component__WEBPACK_IMPORTED_MODULE_6__["DebtComponent"],
                _debts_info_debts_view_debts_info_component__WEBPACK_IMPORTED_MODULE_11__["DebtsInfoComponent"],
                _debts_info_debts_info_payments_debts_payments_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DebtsPaymentsDialogComponent"],
                _debts_info_debts_info_edit_debts_info_edit_dialog_component__WEBPACK_IMPORTED_MODULE_15__["DebtsInfoEditDialogComponent"],
                _debts_info_debts_info_payments_debts_payments_details_debts_payments_details_component__WEBPACK_IMPORTED_MODULE_14__["DebtsPaymentsDetailsComponent"],
                _debts_info_debts_info_payments_debts_payments_details_edit_debts_payments_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DebtsPaymentsDetailsEditDialogComponent"]
            ]
        })
    ], DebtsModule);
    return DebtsModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-debts-debts-module.js.map