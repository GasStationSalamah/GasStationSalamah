(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-fuel-fuel-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-info/fuel-prices-edit/fuel-prices-edit.dialog.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/fuel/fuel-info/fuel-prices-edit/fuel-prices-edit.dialog.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"fuelPriceForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"الصنف\" formControlName=\"category\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"fuelType.id\" *ngFor=\"let fuelType of fuelTypes\">\r\n\t\t\t\t\t\t\t\t{{fuelType.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> الصنف</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"السعر\" formControlName=\"price\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>السعر</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>السعر</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"date\" formControlName=\"date\" required\r\n\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>التاريخ</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-info/fuel-prices/fuel-prices.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/fuel/fuel-info/fuel-prices/fuel-prices.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>اسعار الوقود</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"سعر جديد\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة سعر</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedFuelType\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"fuelType.id\" *ngFor=\"let fuelType of fuelTypes\">\r\n\t\t\t\t\t\t\t\t\t\t{{fuelType.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<strong>بحث</strong>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t</mat-hint>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t</mat-form-field>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t\t<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t<div class=\"kt-form__control\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t</mat-hint>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t</mat-form-field>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t\t<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t<div class=\"kt-form__control\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t</mat-hint>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t</mat-form-field>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"date\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"category\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الصنف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.category}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"price\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>سعر اللتر</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.price}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"date\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.date}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(fuel)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(fuel)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\"\r\n\t\t\t\t[length]=\"dataSource.data.length\" [showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-edit/fuel-purchases-edit.dialog.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-edit/fuel-purchases-edit.dialog.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"fuelPurchaseForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"الصنف\" formControlName=\"category\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"fuelType.id\" *ngFor=\"let fuelType of fuelTypes\">\r\n\t\t\t\t\t\t\t\t{{fuelType.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> الصنف</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"الكمية\" formControlName=\"amountBought\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الكمية</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>الكمية</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"السعر\" formControlName=\"categoryPrice\" />\r\n\t\t\t\t\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t\t\t\t\t<strong>السعر</strong>\r\n\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t\t\t<strong>السعر</strong>\r\n\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>-->\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"datetime-local\" formControlName=\"purchaseDate\" required\r\n\t\t\t\t\t\t\t   style=\"color: black;\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>تاريخ الحركة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"العملة\" formControlName=\"currency\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"currency.id\" *ngFor=\"let currency of currencies\">\r\n\t\t\t\t\t\t\t\t{{currency.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>العملة</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>العملة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"المزود\" formControlName=\"supplierName\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"supplier.id\" *ngFor=\"let supplier of fuelSuppliers\">\r\n\t\t\t\t\t\t\t\t{{supplier.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>المزود</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>المزود</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"المدفوع\" formControlName=\"paidMoney\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>المدفوع</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>المدفوع</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div> -->\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details-edit/fuel-purchases-payments-details-edit.dialog.component.html":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details-edit/fuel-purchases-payments-details-edit.dialog.component.html ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"fuelPurchaseForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"طريقة الدفع\" formControlName=\"category\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"paymentType.id\" *ngFor=\"let paymentType of paymentTypes\">\r\n\t\t\t\t\t\t\t\t{{paymentType.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> طريقة الدفع</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>طريقة الدفع</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"كمية الدفع\" formControlName=\"paymentValue\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>كمية الدفع</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>كمية الدفع</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details/fuel-purchases-payments-details.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details/fuel-purchases-payments-details.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet mat-elevation-z0 dir=\"rtl\" style=\"text-align: left;\">\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>الدفعات</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"حركة شراء جديدة\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">-->\r\n<!--\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n<!--\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>-->\r\n<!--\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n<!--\t\t\t\t\t\t\t\t<strong>بحث</strong>-->\r\n<!--\t\t\t\t\t\t\t</mat-hint>-->\r\n<!--\t\t\t\t\t\t</mat-form-field>-->\r\n<!--\t\t\t\t\t</div>-->\r\n\r\n<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">-->\r\n<!--\t\t\t\t\t\t<div class=\"kt-form__control\">-->\r\n<!--\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n<!--\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required-->\r\n<!--\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">-->\r\n<!--\t\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n<!--\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>-->\r\n<!--\t\t\t\t\t\t\t\t</mat-hint>-->\r\n<!--\t\t\t\t\t\t\t</mat-form-field>-->\r\n<!--\t\t\t\t\t\t</div>-->\r\n<!--\t\t\t\t\t</div>-->\r\n\r\n<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">-->\r\n<!--\t\t\t\t\t\t<div class=\"kt-form__control\">-->\r\n<!--\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n<!--\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required-->\r\n<!--\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">-->\r\n<!--\t\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n<!--\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>-->\r\n<!--\t\t\t\t\t\t\t\t</mat-hint>-->\r\n<!--\t\t\t\t\t\t\t</mat-form-field>-->\r\n<!--\t\t\t\t\t\t</div>-->\r\n<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\" >\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<!-- <div class=\"mat-table__wrapper\"> -->\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t \tmatSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\">\r\n\t\t\t\t<ng-container matColumnDef=\"paymentType\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>طريقة الدفع</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.paymentType}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"paymentValue\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>كمية الدفع</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.paymentValue}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"date\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.date}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n<!--\t\t\t\t<ng-container matColumnDef=\"actions\">-->\r\n<!--\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>-->\r\n<!--\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\" class=\"actionsColumn\">-->\r\n<!--\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(fuel)\">-->\r\n<!--\t\t\t\t\t\t\t<mat-icon>create</mat-icon>-->\r\n<!--\t\t\t\t\t\t</button>&nbsp;-->\r\n<!--\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"-->\r\n<!--\t\t\t\t\t\t\t(click)=\"deleteReading(fuel)\">-->\r\n<!--\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>-->\r\n<!--\t\t\t\t\t\t</button>&nbsp;-->\r\n<!--\t\t\t\t\t</mat-cell>-->\r\n<!--\t\t\t\t</ng-container>-->\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t<!-- </div> -->\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments.dialog.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments.dialog.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div dir=\"rtl\" style=\"text-align: right;\">\r\n\t<!-- <h2 mat-dialog-title style=\"padding: 20;\">الدفعات</h2> -->\r\n\t<!-- <mat-dialog-content style=\"margin: 0; padding: 0\"> -->\r\n\t<fuel-purchases-payments-details></fuel-purchases-payments-details>\r\n\t<!-- </mat-dialog-content> -->\r\n\t<mat-dialog-actions align=\"end\" style=\"padding-left: 20px;\">\r\n\t\t<button mat-raised-button mat-dialog-close color=\"warn\">اغلاق</button>\r\n\t\t<!-- <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button> -->\r\n\t</mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-view/fuel-purchases.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-view/fuel-purchases.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>مشتريات الوقود</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"حركة شراء جديدة\" color=\"primary\" type=\"button\"\r\n\t\t\t\tstyle=\"margin: 5px; min-width: 60px;\">\r\n\t\t\t\t<span>اضافة</span>\r\n\t\t\t</button>\r\n\t\t\t<button (click)=\"addFuelType()\" mat-raised-button matTooltip=\"اضافة صنف جديد\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة صنف</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<strong>بحث</strong>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t</mat-hint>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t</mat-form-field>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedFuelType\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"fuelType.id\" *ngFor=\"let fuelType of fuelTypes\">\r\n\t\t\t\t\t\t\t\t\t\t{{fuelType.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<div class=\"row\" dir=\"rtl\" style=\"text-align: right;\">\r\n\t\t\t<div class=\"col-xl-12\">\r\n\t\t\t\t<div class=\"row row-full-height\">\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4\" *ngFor=\"let item of balances\">\r\n\t\t\t\t\t\t<kt-portlet [class]=\"'kt-portlet--border-bottom-brand'\">\r\n\t\t\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n\t\t\t\t\t\t\t\t<kt-widget26 [value]=\"item.categoryName\" [desc]=\"'الرصيد: ' + item.balance\"\r\n\t\t\t\t\t\t\t\t\t[options]=\"{data: []}\">\r\n\t\t\t\t\t\t\t\t</kt-widget26>\r\n\t\t\t\t\t\t\t</kt-portlet-body>\r\n\t\t\t\t\t\t</kt-portlet>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"purchaseDate\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"purchaseDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\" dir=\"ltr\" class=\"align-right\">{{fuel.purchaseDate}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"category\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الصنف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.category}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"supplierName\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>المزود</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.supplierName}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"amountBought\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>كمية الشراء</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.amountBought}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"categoryPrice\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>سعر اللتر</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.categoryPrice}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"balance\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الرصيد</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.balance}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"cashTotal\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>المجموع النقدي</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.cashTotal}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"transportationFees\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>اجرة النقل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.transportationFees}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\" class=\"actionsColumn\" (click)=\"$event.stopPropagation()\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(fuel)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(fuel)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<!-- (click)=\"openPaymentsDialog(row)\" -->\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\"\r\n\t\t\t\t[length]=\"dataSource.data.length\" [showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-wholesale/add-fuel-wholesale-customer/add-fuel-wholesale-customer.dialog.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/fuel/fuel-wholesale/add-fuel-wholesale-customer/add-fuel-wholesale-customer.dialog.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"fuelWholesaleForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"اسم الزبون\" formControlName=\"customerName\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>اسم الزبون</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>اسم الزبون</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-edit/fuel-wholesale-edit.dialog.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-edit/fuel-wholesale-edit.dialog.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"fuelWholesaleForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"الصنف\" formControlName=\"category\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"fuelType.id\" *ngFor=\"let fuelType of fuelTypes\">\r\n\t\t\t\t\t\t\t\t{{fuelType.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> الصنف</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"الزبون\" formControlName=\"customer\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"customer.id\" *ngFor=\"let customer of customers\">\r\n\t\t\t\t\t\t\t\t{{customer.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> الزبون</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>الزبون</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"الكمية\" formControlName=\"amount\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الكمية</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>الكمية</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"datetime-local\" formControlName=\"sellingDate\" required\r\n\t\t\t\t\t\t\t   style=\"color: black;\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>تاريخ الحركة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<textarea matInput placeholder=\"ملاحظات\" formControlName=\"notes\"></textarea>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>ملاحظات</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>ملاحظات</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-view/fuel-wholesale.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-view/fuel-wholesale.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>مبيعات الجملة</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"حركة جديدة\" color=\"primary\" type=\"button\"\r\n\t\t\t\tstyle=\"margin: 5px; min-width: 60px;\">\r\n\t\t\t\t<span>اضافة</span>\r\n\t\t\t</button>\r\n\t\t\t<button (click)=\"addWholeSaleCustomer()\" mat-raised-button matTooltip=\"اضافة مشترك جديد\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة زبون</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedFuelType\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"fuelType.id\" *ngFor=\"let fuelType of fuelTypes\">\r\n\t\t\t\t\t\t\t\t\t\t{{fuelType.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedCustomer\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"customer.id\" *ngFor=\"let customer of customers\">\r\n\t\t\t\t\t\t\t\t\t\t{{customer.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الزبون</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- <div class=\"row\" dir=\"rtl\" style=\"text-align: right;\">\r\n\t\t\t<div class=\"col-xl-12\">\r\n\t\t\t\t<div class=\"row row-full-height\">\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4\" *ngFor=\"let item of balances\">\r\n\t\t\t\t\t\t<kt-portlet [class]=\"'kt-portlet--border-bottom-brand'\">\r\n\t\t\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n\t\t\t\t\t\t\t\t<kt-widget26 [value]=\"item.categoryName\" [desc]=\"'الرصيد: ' + item.balance\"\r\n\t\t\t\t\t\t\t\t\t[options]=\"{data: []}\">\r\n\t\t\t\t\t\t\t\t</kt-widget26>\r\n\t\t\t\t\t\t\t</kt-portlet-body>\r\n\t\t\t\t\t\t</kt-portlet>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"sellingDate\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"sellingDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\" dir=\"ltr\" class=\"align-right\">{{fuel.sellingDate}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"category\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الصنف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.category}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"customer\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الزبون</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.customer}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"amount\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الكمية</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.amount}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"cumulativeSum\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>المجموع التراكمي</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.cumulativeSum}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"notes\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>ملاحظات</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\">{{fuel.notes}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let fuel\" class=\"actionsColumn\" (click)=\"$event.stopPropagation()\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(fuel)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(fuel)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\"\r\n\t\t\t\t[length]=\"dataSource.data.length\" [showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/fuel/fuel.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n\t<mat-tab label=\"الاسعار\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<fuel-prices [fuelTypes]=\"fuelTypes\"></fuel-prices>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n\t<mat-tab label=\"المشتريات\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<fuel-purchases [fuelTypes]=\"fuelTypes\"></fuel-purchases>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n\t<mat-tab label=\"مبيعات الجملة\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<fuel-wholesale [fuelTypes]=\"fuelTypes\"></fuel-wholesale>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-info/fuel-prices-edit/fuel-prices-edit.dialog.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-info/fuel-prices-edit/fuel-prices-edit.dialog.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: FuelPricesEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelPricesEditDialogComponent", function() { return FuelPricesEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_fuel_prices_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/fuel-prices.model */ "./src/app/views/pages/fuel/fuel-info/models/fuel-prices.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var FuelPricesEditDialogComponent = /** @class */ (function () {
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
    function FuelPricesEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.http = http;
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.fuelTypes = [];
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
    FuelPricesEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.fuelPrice = this.data.reading;
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
        this.getFuelTypes();
    };
    /**
     * On destroy
     */
    FuelPricesEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    FuelPricesEditDialogComponent.prototype.createForm = function () {
        var date = this.fuelPrice.date;
        if (this.fuelPrice.id > 0)
            date = new Date(+new Date(this.fuelPrice.date)).toISOString().substr(0, 10);
        this.fuelPriceForm = this.fb.group({
            id: [this.fuelPrice.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: [this.fuelPrice.categoryId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)])],
            price: [this.fuelPrice.price, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: [date, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    /**
     * Returns page title
     */
    FuelPricesEditDialogComponent.prototype.getTitle = function () {
        if (this.fuelPrice.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0633\u0639\u0631 \u0644\u0644\u0635\u0646\u0641 '" + this.fuelPrice.category + "'";
        }
        return 'اضافة سعر';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    FuelPricesEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.fuelPriceForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    FuelPricesEditDialogComponent.prototype.getFuelTypes = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Categories?Type=fuel', { headers: this.headers }).subscribe(function (res) {
            _this.fuelTypes = res.data.map(function (item) {
                return {
                    name: item.categoryName,
                    id: item.id
                };
            });
            _this.fuelPriceForm.controls["category"].setValue(_this.fuelPrice.categoryId);
        });
    };
    /**
     * Returns prepared fuel price
     */
    FuelPricesEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.fuelPriceForm.controls;
        var _fuelPrice = new _models_fuel_prices_model__WEBPACK_IMPORTED_MODULE_7__["FuelPricesModel"]();
        _fuelPrice.id = this.fuelPrice.id;
        _fuelPrice.categoryId = controls.category.value;
        _fuelPrice.price = controls.price.value;
        _fuelPrice.date = controls.date.value;
        return _fuelPrice;
    };
    /**
     * On Submit
     */
    FuelPricesEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.fuelPriceForm.controls;
        console.log(this.fuelPriceForm);
        /** check form */
        if (this.fuelPriceForm.invalid) {
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
     * @param _fuelPrice: FuelPricesModel
     */
    FuelPricesEditDialogComponent.prototype.updateReading = function (_fuelPrice) {
        var _this = this;
        var date = new Date(+new Date(_fuelPrice.date) - this.tzoffset).toISOString().slice(0, 16);
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/CategoryPrices', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _fuelPrice, { price: +_fuelPrice.price, creationDate: date }), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _fuelPrice: _fuelPrice, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل السعر';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create Fuel price
     *
     * @param _fuelPrice: FuelPricesModel
     */
    FuelPricesEditDialogComponent.prototype.createReading = function (_fuelPrice) {
        var _this = this;
        var date = new Date(+new Date(_fuelPrice.date) - this.tzoffset).toISOString().slice(0, 16);
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/CategoryPrices', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _fuelPrice, { price: +_fuelPrice.price, creationDate: date }), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _fuelPrice: _fuelPrice, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة السعر';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    FuelPricesEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    FuelPricesEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    FuelPricesEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'fuel-prices-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./fuel-prices-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-info/fuel-prices-edit/fuel-prices-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], FuelPricesEditDialogComponent);
    return FuelPricesEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-info/fuel-prices/fuel-prices.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-info/fuel-prices/fuel-prices.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZnVlbC9mdWVsLWluZm8vZnVlbC1wcmljZXMvQzpcXFVzZXJzXFxvbWVuXFxEZXNrdG9wXFxHaXRIdWJcXEZyb250LUthemVhaFxcZ2FzLXN0YXRpb24vc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcZnVlbFxcZnVlbC1pbmZvXFxmdWVsLXByaWNlc1xcZnVlbC1wcmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR2xCO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdsQjtFQUVFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZnVlbC9mdWVsLWluZm8vZnVlbC1wcmljZXMvZnVlbC1wcmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZUNvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFjdGlvbnNDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucm93IHtcclxuXHRkaXYge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-info/fuel-prices/fuel-prices.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-info/fuel-prices/fuel-prices.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FuelPricesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelPricesComponent", function() { return FuelPricesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_fuel_prices_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/fuel-prices.model */ "./src/app/views/pages/fuel/fuel-info/models/fuel-prices.model.ts");
/* harmony import */ var _fuel_prices_edit_fuel_prices_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fuel-prices-edit/fuel-prices-edit.dialog.component */ "./src/app/views/pages/fuel/fuel-info/fuel-prices-edit/fuel-prices-edit.dialog.component.ts");
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
var FuelPricesComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialog: MatDialog
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     * @param translate: TranslateService
     * @param store: Store<AppState>
     */
    function FuelPricesComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['category', 'price', 'date', 'actions'];
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
        this.fuelTypes = [];
        // TODO: Get using APIs
        this.employees = [];
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
    FuelPricesComponent.prototype.ngOnInit = function () {
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
        // this.getFuelTypes();
        this.loadUsersReadingsList();
    };
    /**
     * On Destroy
     */
    FuelPricesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /** ACTIONS */
    // getFuelTypes() {
    // 	this.http.get(
    // 		globalVariables.baseUrl + 'api/Categories?Type=fuel',
    // 		{ headers: this.headers }
    // 	).subscribe((res: any) => {
    // 		this.fuelTypes = res.data.map(item => {
    // 			return {
    // 				name: item.categoryName,
    // 				id: item.id
    // 			}
    // 		});
    // 	});
    // }
    /**
     * Load UsersReadings List from service through data-source
     */
    FuelPricesComponent.prototype.loadUsersReadingsList = function () {
        var _this = this;
        this.isLoadingResults = true;
        // let dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        // let dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = ''; //'?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        if (this.selectedFuelType) {
            url += '?CategoryId=' + this.selectedFuelType;
        }
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/CategoryPrices' + url, { headers: this.headers })
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
     * @param _item: FuelPricesModel
     */
    FuelPricesComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = "حذف الوقود";
        var _description = "هل أنت متأكد من حذف الوقود؟";
        var _waitDesciption = "جاري الحذف";
        var _deleteMessage = "لقد تم الحذف";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.http.delete(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/CategoryPrices/' + _item.id, { headers: _this.headers })
                .subscribe(function (res) {
                _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
                _this.loadUsersReadingsList();
            }, function (err) {
                var msg = 'فشل في حذف السعر';
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
    FuelPricesComponent.prototype.addReading = function () {
        var newReading = new _models_fuel_prices_model__WEBPACK_IMPORTED_MODULE_7__["FuelPricesModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: FuelPricesModel
     */
    FuelPricesComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_fuel_prices_edit_fuel_prices_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FuelPricesEditDialogComponent"], {
            data: {
                reading: reading,
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
    FuelPricesComponent.prototype.getExcelFileName = function () {
        return 'اسعار الوقود' + '-' + new Date().toISOString().slice(0, 10);
    };
    FuelPricesComponent.ctorParameters = function () { return [
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
    ], FuelPricesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], FuelPricesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FuelPricesComponent.prototype, "searchInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FuelPricesComponent.prototype, "fuelTypes", void 0);
    FuelPricesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'fuel-prices',
            template: __webpack_require__(/*! raw-loader!./fuel-prices.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-info/fuel-prices/fuel-prices.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./fuel-prices.component.scss */ "./src/app/views/pages/fuel/fuel-info/fuel-prices/fuel-prices.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], FuelPricesComponent);
    return FuelPricesComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-info/models/fuel-prices.model.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-info/models/fuel-prices.model.ts ***!
  \************************************************************************/
/*! exports provided: FuelPricesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelPricesModel", function() { return FuelPricesModel; });
var FuelPricesModel = /** @class */ (function () {
    function FuelPricesModel() {
    }
    FuelPricesModel.prototype.clear = function () {
        this.id = 0;
        this.categoryId = 0;
        this.category = '';
        this.price = '';
        this.date = new Date().toISOString().substr(0, 10);
    };
    return FuelPricesModel;
}());



/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-edit/fuel-purchases-edit.dialog.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-edit/fuel-purchases-edit.dialog.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: FuelPurchasesEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelPurchasesEditDialogComponent", function() { return FuelPurchasesEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_fuel_purchases_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/fuel-purchases.model */ "./src/app/views/pages/fuel/fuel-purchases/models/fuel-purchases.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var FuelPurchasesEditDialogComponent = /** @class */ (function () {
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
    function FuelPurchasesEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
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
        // Get from API
        this.fuelTypes = [];
        this.fuelSuppliers = [];
        this.currencies = [];
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
    FuelPurchasesEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.fuelPurchase = this.data.reading;
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
        this.getFuelTypes();
        this.getFuelSuppliers();
    };
    /**
     * On destroy
     */
    FuelPurchasesEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    FuelPurchasesEditDialogComponent.prototype.createForm = function () {
        var purchaseDate = this.fuelPurchase.purchaseDate;
        if (this.fuelPurchase.id > 0)
            purchaseDate = new Date(+new Date(this.fuelPurchase.purchaseDate) - this.tzoffset).toISOString().substr(0, 16);
        this.fuelPurchaseForm = this.fb.group({
            id: [this.fuelPurchase.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: [this.fuelPurchase.categoryId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            supplierName: [this.fuelPurchase.supplierId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amountBought: [this.fuelPurchase.amountBought, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // balance: [this.fuelPurchase.balance, Validators.required],
            // cashTotal: [this.fuelPurchase.cashTotal, Validators.required],
            // transportationFees: [this.fuelPurchase.transportationFees, Validators.required],
            purchaseDate: [purchaseDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    /**
     * Returns page title
     */
    FuelPurchasesEditDialogComponent.prototype.getTitle = function () {
        if (this.fuelPurchase.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0634\u0631\u0627\u0621 \u0644\u0644\u0635\u0646\u0641 '" + this.fuelPurchase.category + "'";
        }
        return 'اضافة حركة شراء';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    FuelPurchasesEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.fuelPurchaseForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    FuelPurchasesEditDialogComponent.prototype.getFuelTypes = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Categories?Type=fuel', { headers: this.headers }).subscribe(function (res) {
            _this.fuelTypes = res.data.map(function (item) {
                return {
                    name: item.categoryName,
                    id: item.id
                };
            });
            _this.fuelPurchaseForm.controls["category"].setValue(_this.fuelPurchase.categoryId);
        });
    };
    FuelPurchasesEditDialogComponent.prototype.getFuelSuppliers = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Suppliers', { headers: this.headers }).subscribe(function (res) {
            _this.fuelSuppliers = res.data.map(function (item) {
                return {
                    name: item.name,
                    id: item.id
                };
            });
            _this.fuelPurchaseForm.controls["supplierName"].setValue(_this.fuelPurchase.supplierId);
        });
    };
    FuelPurchasesEditDialogComponent.prototype.getCurrencies = function () {
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
     * Returns prepared fuel purchase
     */
    FuelPurchasesEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.fuelPurchaseForm.controls;
        var _fuelPurchase = new _models_fuel_purchases_model__WEBPACK_IMPORTED_MODULE_7__["FuelPurchasesModel"]();
        _fuelPurchase.id = this.fuelPurchase.id;
        _fuelPurchase.categoryId = controls.category.value;
        _fuelPurchase.supplierId = controls.supplierName.value;
        _fuelPurchase.amountBought = controls.amountBought.value;
        // _fuelPurchase.balance = controls.balance.value;
        // _fuelPurchase.cashTotal = controls.cashTotal.value;
        // _fuelPurchase.transportationFees = controls.transportationFees.value;
        _fuelPurchase.purchaseDate = controls.purchaseDate.value;
        return _fuelPurchase;
    };
    /**
     * On Submit
     */
    FuelPurchasesEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.fuelPurchaseForm.controls;
        console.log(this.fuelPurchaseForm);
        /** check form */
        if (this.fuelPurchaseForm.invalid) {
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
     * @param _fuelPurchase: FuelPurchasesModel
     */
    FuelPurchasesEditDialogComponent.prototype.updateReading = function (_fuelPurchase) {
        var _this = this;
        var purchaseDate = new Date(+new Date(_fuelPurchase.purchaseDate) - this.tzoffset).toISOString().slice(0, 16);
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/FuelPurchases', {
            id: _fuelPurchase.id,
            categoryId: _fuelPurchase.categoryId,
            fuelPurchasedAt: purchaseDate,
            supplierId: +_fuelPurchase.supplierId,
            amountBought: +_fuelPurchase.amountBought,
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _fuelPurchase: _fuelPurchase, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل حركة الشراء';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create Fuel price
     *
     * @param _fuelPurchase: FuelPurchasesModel
     */
    FuelPurchasesEditDialogComponent.prototype.createReading = function (_fuelPurchase) {
        var _this = this;
        var purchaseDate = new Date(+new Date(_fuelPurchase.purchaseDate) - this.tzoffset).toISOString().slice(0, 16);
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/FuelPurchases', {
            categoryId: _fuelPurchase.categoryId,
            fuelPurchasedAt: purchaseDate,
            supplierId: +_fuelPurchase.supplierId,
            amountBought: +_fuelPurchase.amountBought,
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _fuelPurchase: _fuelPurchase, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة حركة الشراء';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    FuelPurchasesEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    FuelPurchasesEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    FuelPurchasesEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'fuel-purchases-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./fuel-purchases-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-edit/fuel-purchases-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], FuelPurchasesEditDialogComponent);
    return FuelPurchasesEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details-edit/fuel-purchases-payments-details-edit.dialog.component.ts":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details-edit/fuel-purchases-payments-details-edit.dialog.component.ts ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: FuelPurchasesPaymentsDetailsEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelPurchasesPaymentsDetailsEditDialogComponent", function() { return FuelPurchasesPaymentsDetailsEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_fuel_payment_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/fuel-payment.model */ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/models/fuel-payment.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var FuelPurchasesPaymentsDetailsEditDialogComponent = /** @class */ (function () {
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
    function FuelPurchasesPaymentsDetailsEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
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
    FuelPurchasesPaymentsDetailsEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.fuelPurchase = this.data.reading;
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
    FuelPurchasesPaymentsDetailsEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    FuelPurchasesPaymentsDetailsEditDialogComponent.prototype.createForm = function () {
        this.fuelPurchaseForm = this.fb.group({
            id: [this.fuelPurchase.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paymentType: [this.fuelPurchase.paymentType, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paymentValue: [this.fuelPurchase.paymentValue, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    /**
     * Returns page title
     */
    FuelPurchasesPaymentsDetailsEditDialogComponent.prototype.getTitle = function () {
        if (this.fuelPurchase.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062F\u0641\u0639\u0629";
        }
        return 'اضافة دفعة ';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    FuelPurchasesPaymentsDetailsEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.fuelPurchaseForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    FuelPurchasesPaymentsDetailsEditDialogComponent.prototype.getPaymentTypes = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + '/api/PaymentsMethods', { headers: this.headers }).subscribe(function (res) {
            _this.paymentTypes = res.data.map(function (item) {
                return {
                    name: item.name,
                    id: item.id
                };
            });
        });
    };
    /**
     * Returns prepared fuel purchase
     */
    FuelPurchasesPaymentsDetailsEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.fuelPurchaseForm.controls;
        var _fuelPurchase = new _models_fuel_payment_model__WEBPACK_IMPORTED_MODULE_7__["FuelPaymentModel"]();
        _fuelPurchase.id = this.fuelPurchase.id;
        _fuelPurchase.paymentValue = controls.paymentValue.value;
        _fuelPurchase.paymentType = controls.paymentType.value;
        return _fuelPurchase;
    };
    /**
     * On Submit
     */
    FuelPurchasesPaymentsDetailsEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.fuelPurchaseForm.controls;
        console.log(this.fuelPurchaseForm);
        /** check form */
        if (this.fuelPurchaseForm.invalid) {
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
     * Update Fuel Payment
     *
     * @param _fuelPurchase: FuelPaymentModel
     */
    FuelPurchasesPaymentsDetailsEditDialogComponent.prototype.updateReading = function (_fuelPurchase) {
        var _this = this;
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/FuelPurchases/Payments', {
            fuelPurchasesId: _fuelPurchase.id,
            paymentType: _fuelPurchase.paymentType,
            paidMoney: +_fuelPurchase.paymentValue
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _fuelPurchase: _fuelPurchase, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل الدفعة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create Fuel Payment
     *
     * @param _fuelPurchase: FuelPaymentModel
     */
    FuelPurchasesPaymentsDetailsEditDialogComponent.prototype.createReading = function (_fuelPurchase) {
        var _this = this;
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/FuelPurchases/Payments', {
            fuelPurchasesId: _fuelPurchase.id,
            paymentType: _fuelPurchase.paymentType,
            paidMoney: +_fuelPurchase.paymentValue
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _fuelPurchase: _fuelPurchase, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة الدفعة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    FuelPurchasesPaymentsDetailsEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    FuelPurchasesPaymentsDetailsEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    FuelPurchasesPaymentsDetailsEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'fuel-purchases-payments-details-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./fuel-purchases-payments-details-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details-edit/fuel-purchases-payments-details-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], FuelPurchasesPaymentsDetailsEditDialogComponent);
    return FuelPurchasesPaymentsDetailsEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details/fuel-purchases-payments-details.component.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details/fuel-purchases-payments-details.component.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZnVlbC9mdWVsLXB1cmNoYXNlcy9mdWVsLXB1cmNoYXNlcy1wYXltZW50cy9mdWVsLXB1cmNoYXNlcy1wYXltZW50cy1kZXRhaWxzL0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGZ1ZWxcXGZ1ZWwtcHVyY2hhc2VzXFxmdWVsLXB1cmNoYXNlcy1wYXltZW50c1xcZnVlbC1wdXJjaGFzZXMtcGF5bWVudHMtZGV0YWlsc1xcZnVlbC1wdXJjaGFzZXMtcGF5bWVudHMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR2xCO0VBRUUsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9mdWVsL2Z1ZWwtcHVyY2hhc2VzL2Z1ZWwtcHVyY2hhc2VzLXBheW1lbnRzL2Z1ZWwtcHVyY2hhc2VzLXBheW1lbnRzLWRldGFpbHMvZnVlbC1wdXJjaGFzZXMtcGF5bWVudHMtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlQ29sdW1uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWN0aW9uc0NvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG5cdGRpdiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details/fuel-purchases-payments-details.component.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details/fuel-purchases-payments-details.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: FuelPurchasesPaymentsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelPurchasesPaymentsDetailsComponent", function() { return FuelPurchasesPaymentsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_fuel_payment_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/fuel-payment.model */ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/models/fuel-payment.model.ts");
/* harmony import */ var _fuel_purchases_payments_details_edit_fuel_purchases_payments_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fuel-purchases-payments-details-edit/fuel-purchases-payments-details-edit.dialog.component */ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details-edit/fuel-purchases-payments-details-edit.dialog.component.ts");
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
var FuelPurchasesPaymentsDetailsComponent = /** @class */ (function () {
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
    function FuelPurchasesPaymentsDetailsComponent(dialog, data, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.data = data;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['paymentType', 'paymentValue', 'date']; // , 'actions'
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
    FuelPurchasesPaymentsDetailsComponent.prototype.ngOnInit = function () {
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
    FuelPurchasesPaymentsDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load UsersReadings List from service through data-source
     */
    FuelPurchasesPaymentsDetailsComponent.prototype.loadUsersReadingsList = function () {
        var _this = this;
        this.isLoadingResults = true;
        // let dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        // let dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        // let url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/FuelPurchases/Payments/' + this.data.purchaseId, { headers: this.headers })
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
            var userReadingModel = new _models_fuel_payment_model__WEBPACK_IMPORTED_MODULE_7__["FuelPaymentModel"]();
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
     * @param _item: FuelPricesModel
     */
    FuelPurchasesPaymentsDetailsComponent.prototype.deleteReading = function (_item) {
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
            _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
            _this.loadUsersReadingsList();
        });
    };
    /**
     * Show add reading dialog
     */
    FuelPurchasesPaymentsDetailsComponent.prototype.addReading = function () {
        var newReading = new _models_fuel_payment_model__WEBPACK_IMPORTED_MODULE_7__["FuelPaymentModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: FuelPricesModel
     */
    FuelPurchasesPaymentsDetailsComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_fuel_purchases_payments_details_edit_fuel_purchases_payments_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FuelPurchasesPaymentsDetailsEditDialogComponent"], {
            data: {
                reading: reading,
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
    FuelPurchasesPaymentsDetailsComponent.prototype.getExcelFileName = function () {
        return 'دفعات شراء الوقود' + '-' + new Date().toISOString().slice(0, 10);
    };
    FuelPurchasesPaymentsDetailsComponent.ctorParameters = function () { return [
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
    ], FuelPurchasesPaymentsDetailsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], FuelPurchasesPaymentsDetailsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FuelPurchasesPaymentsDetailsComponent.prototype, "searchInput", void 0);
    FuelPurchasesPaymentsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'fuel-purchases-payments-details',
            template: __webpack_require__(/*! raw-loader!./fuel-purchases-payments-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details/fuel-purchases-payments-details.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./fuel-purchases-payments-details.component.scss */ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details/fuel-purchases-payments-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], FuelPurchasesPaymentsDetailsComponent);
    return FuelPurchasesPaymentsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments.dialog.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments.dialog.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: FuelPurchasesPaymentsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelPurchasesPaymentsDialogComponent", function() { return FuelPurchasesPaymentsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");

// Angular

// Material


// Services and Models

var FuelPurchasesPaymentsDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<UsersReadingsEditDialogComponent>
     * @param data: any
     * @param store: Store<AppState>
     * @param typesUtilsService: TypesUtilsService
     */
    function FuelPurchasesPaymentsDialogComponent(dialogRef, data, store) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.store = store;
        this.viewLoading = false;
        this.fuelTypes = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    FuelPurchasesPaymentsDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_4__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.purchaseId = this.data.purchaseId;
    };
    /**
     * On destroy
     */
    FuelPurchasesPaymentsDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    FuelPurchasesPaymentsDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    FuelPurchasesPaymentsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'fuel-purchases-payments-dialog',
            template: __webpack_require__(/*! raw-loader!./fuel-purchases-payments.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], FuelPurchasesPaymentsDialogComponent);
    return FuelPurchasesPaymentsDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/models/fuel-payment.model.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/models/fuel-payment.model.ts ***!
  \******************************************************************************************************/
/*! exports provided: FuelPaymentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelPaymentModel", function() { return FuelPaymentModel; });
var FuelPaymentModel = /** @class */ (function () {
    function FuelPaymentModel() {
    }
    FuelPaymentModel.prototype.clear = function () {
        this.id = 0;
        this.paymentType = '';
        this.paymentValue = '';
        this.date = new Date().toISOString().substr(0, 16);
    };
    FuelPaymentModel.prototype.initialize = function () {
        this.id = 1;
        this.paymentType = 'cash';
        this.paymentValue = '2000';
        this.date = new Date().toISOString().substr(0, 16);
    };
    return FuelPaymentModel;
}());



/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-view/fuel-purchases.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-view/fuel-purchases.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n.mat-row:hover {\n  background-color: whitesmoke; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZnVlbC9mdWVsLXB1cmNoYXNlcy9mdWVsLXB1cmNoYXNlcy12aWV3L0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGZ1ZWxcXGZ1ZWwtcHVyY2hhc2VzXFxmdWVsLXB1cmNoYXNlcy12aWV3XFxmdWVsLXB1cmNoYXNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR2xCO0VBRUUsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0MsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9mdWVsL2Z1ZWwtcHVyY2hhc2VzL2Z1ZWwtcHVyY2hhc2VzLXZpZXcvZnVlbC1wdXJjaGFzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZUNvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFjdGlvbnNDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucm93IHtcclxuXHRkaXYge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbn1cclxuXHJcbi5tYXQtcm93OmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG5cdC8vY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-view/fuel-purchases.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-view/fuel-purchases.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FuelPurchasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelPurchasesComponent", function() { return FuelPurchasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_fuel_purchases_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/fuel-purchases.model */ "./src/app/views/pages/fuel/fuel-purchases/models/fuel-purchases.model.ts");
/* harmony import */ var _fuel_purchases_edit_fuel_purchases_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fuel-purchases-edit/fuel-purchases-edit.dialog.component */ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-edit/fuel-purchases-edit.dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fuel_purchases_payments_fuel_purchases_payments_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fuel-purchases-payments/fuel-purchases-payments.dialog.component */ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments.dialog.component.ts");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");
/* harmony import */ var _configuration_fuel_types_models_fuel_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../configuration/fuel-types/models/fuel.model */ "./src/app/views/pages/configuration/fuel-types/models/fuel.model.ts");
/* harmony import */ var _configuration_fuel_types_fuel_edit_fuel_edit_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../configuration/fuel-types/fuel-edit/fuel-edit.dialog.component */ "./src/app/views/pages/configuration/fuel-types/fuel-edit/fuel-edit.dialog.component.ts");

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
var FuelPurchasesComponent = /** @class */ (function () {
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
    function FuelPurchasesComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['purchaseDate', 'category', 'supplierName', 'amountBought', 'categoryPrice', 'balance', 'cashTotal', 'transportationFees', 'actions'];
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
        this.fuelTypes = [];
        // TODO: Get using APIs
        this.employees = [];
        this.gasPumps = [];
        this.balances = [];
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
    FuelPurchasesComponent.prototype.ngOnInit = function () {
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
    FuelPurchasesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load UsersReadings List from service through data-source
     */
    FuelPurchasesComponent.prototype.loadUsersReadingsList = function () {
        var _this = this;
        this.isLoadingResults = true;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        if (this.selectedFuelType) {
            url += '&CategoryId=' + this.selectedFuelType;
        }
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].baseUrl + 'api/FuelPurchases' + url, { headers: this.headers })
            .subscribe(function (res) {
            _this.isLoadingResults = false;
            _this.balances = res.data.balances;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data.fulePurchase.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { category: item.categoryName, categoryPrice: item.price, purchaseDate: item.fuelPurchasedAt });
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
            _this.balances = [];
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
     * @param _item: FuelPricesModel
     */
    FuelPurchasesComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = 'حذف حركة الشراء';
        var _description = 'هل أنت متأكد من حذف حركة الشراء؟';
        var _waitDesciption = 'جاري الحذف';
        var _deleteMessage = 'لقد تم الحذف';
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.http.delete(_globalVariables__WEBPACK_IMPORTED_MODULE_11__["default"].baseUrl + 'api/FuelPurchases/' + _item.id, { headers: _this.headers })
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
    FuelPurchasesComponent.prototype.addReading = function () {
        var newReading = new _models_fuel_purchases_model__WEBPACK_IMPORTED_MODULE_7__["FuelPurchasesModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: FuelPricesModel
     */
    FuelPurchasesComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_fuel_purchases_edit_fuel_purchases_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FuelPurchasesEditDialogComponent"], {
            data: {
                reading: reading,
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
    FuelPurchasesComponent.prototype.getExcelFileName = function () {
        return 'مشتريات الوقود' + '-' + new Date().toISOString().slice(0, 10);
    };
    /**
     * Payment popup
     */
    FuelPurchasesComponent.prototype.openPaymentsDialog = function (row) {
        var _this = this;
        var dialogRef = this.dialog.open(_fuel_purchases_payments_fuel_purchases_payments_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FuelPurchasesPaymentsDialogComponent"], {
            data: {
                purchaseId: row.id
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
     * Add Fuel Type Dialog
     */
    FuelPurchasesComponent.prototype.addFuelType = function () {
        var _this = this;
        var reading = new _configuration_fuel_types_models_fuel_model__WEBPACK_IMPORTED_MODULE_12__["FuelModel"]();
        reading.clear();
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_configuration_fuel_types_fuel_edit_fuel_edit_dialog_component__WEBPACK_IMPORTED_MODULE_13__["FuelsEditDialogComponent"], {
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
    FuelPurchasesComponent.ctorParameters = function () { return [
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
    ], FuelPurchasesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], FuelPurchasesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FuelPurchasesComponent.prototype, "searchInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FuelPurchasesComponent.prototype, "fuelTypes", void 0);
    FuelPurchasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'fuel-purchases',
            template: __webpack_require__(/*! raw-loader!./fuel-purchases.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-view/fuel-purchases.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./fuel-purchases.component.scss */ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-view/fuel-purchases.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], FuelPurchasesComponent);
    return FuelPurchasesComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-purchases/models/fuel-purchases.model.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-purchases/models/fuel-purchases.model.ts ***!
  \********************************************************************************/
/*! exports provided: FuelPurchasesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelPurchasesModel", function() { return FuelPurchasesModel; });
var FuelPurchasesModel = /** @class */ (function () {
    function FuelPurchasesModel() {
    }
    FuelPurchasesModel.prototype.clear = function () {
        this.id = 0;
        this.category = '';
        this.amountBought = '';
        this.categoryPrice = '';
        this.balance = '';
        this.supplierName = '';
        this.cashTotal = '';
        this.transportationFees = '';
        this.purchaseDate = new Date().toISOString().substr(0, 16);
    };
    return FuelPurchasesModel;
}());



/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-wholesale/add-fuel-wholesale-customer/add-fuel-wholesale-customer.dialog.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-wholesale/add-fuel-wholesale-customer/add-fuel-wholesale-customer.dialog.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AddFuelWholesaleCustomerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFuelWholesaleCustomerDialogComponent", function() { return AddFuelWholesaleCustomerDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material

// NGRX

// CRUD

// Services and Models



var AddFuelWholesaleCustomerDialogComponent = /** @class */ (function () {
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
    function AddFuelWholesaleCustomerDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.http = http;
        this.hasFormErrors = false;
        this.viewLoading = false;
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
    AddFuelWholesaleCustomerDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.createForm();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.role = localStorage.getItem('role');
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
    };
    /**
     * On destroy
     */
    AddFuelWholesaleCustomerDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    AddFuelWholesaleCustomerDialogComponent.prototype.createForm = function () {
        this.fuelWholesaleForm = this.fb.group({
            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    /**
     * Returns page title
     */
    AddFuelWholesaleCustomerDialogComponent.prototype.getTitle = function () {
        return 'اضافة زبون';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    AddFuelWholesaleCustomerDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.fuelWholesaleForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /**
     * Returns prepared fuel purchase
     */
    AddFuelWholesaleCustomerDialogComponent.prototype.prepareReading = function () {
        var controls = this.fuelWholesaleForm.controls;
        var _fuelWholesale = { customerName: controls.customerName.value };
        return _fuelWholesale;
    };
    /**
     * On Submit
     */
    AddFuelWholesaleCustomerDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.fuelWholesaleForm.controls;
        /** check form */
        if (this.fuelWholesaleForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var editedReading = this.prepareReading();
        this.createReading(editedReading);
    };
    /**
     * Create Fuel price
     *
     * @param _fuelWholesale: any
     */
    AddFuelWholesaleCustomerDialogComponent.prototype.createReading = function (_fuelWholesale) {
        var _this = this;
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].baseUrl + 'api/WholeSale/Customer', {
            customerName: _fuelWholesale.customerName,
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _fuelWholesale: _fuelWholesale, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة الزبون';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    AddFuelWholesaleCustomerDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    AddFuelWholesaleCustomerDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
    ]; };
    AddFuelWholesaleCustomerDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'add-fuel-wholesale-customer-dialog',
            template: __webpack_require__(/*! raw-loader!./add-fuel-wholesale-customer.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-wholesale/add-fuel-wholesale-customer/add-fuel-wholesale-customer.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], AddFuelWholesaleCustomerDialogComponent);
    return AddFuelWholesaleCustomerDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-edit/fuel-wholesale-edit.dialog.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-edit/fuel-wholesale-edit.dialog.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: FuelWholesaleEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelWholesaleEditDialogComponent", function() { return FuelWholesaleEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_fuel_wholesale_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/fuel-wholesale.model */ "./src/app/views/pages/fuel/fuel-wholesale/models/fuel-wholesale.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var FuelWholesaleEditDialogComponent = /** @class */ (function () {
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
    function FuelWholesaleEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
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
        // Get from API
        this.fuelTypes = [];
        this.customers = [];
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
    FuelWholesaleEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.fuelWholesale = this.data.reading;
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
        this.getFuelTypes();
        this.getWholeSaleCustomers();
    };
    /**
     * On destroy
     */
    FuelWholesaleEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    FuelWholesaleEditDialogComponent.prototype.createForm = function () {
        var sellingDate = this.fuelWholesale.sellingDate;
        if (this.fuelWholesale.id > 0)
            sellingDate = new Date(+new Date(this.fuelWholesale.sellingDate) - this.tzoffset).toISOString().substr(0, 16);
        this.fuelWholesaleForm = this.fb.group({
            id: [this.fuelWholesale.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: [this.fuelWholesale.categoryId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customer: [this.fuelWholesale.customerId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: [this.fuelWholesale.amount, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            notes: [this.fuelWholesale.notes, ''],
            sellingDate: [sellingDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    /**
     * Returns page title
     */
    FuelWholesaleEditDialogComponent.prototype.getTitle = function () {
        if (this.fuelWholesale.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062D\u0631\u0643\u0629";
        }
        return 'اضافة حركة';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    FuelWholesaleEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.fuelWholesaleForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    FuelWholesaleEditDialogComponent.prototype.getFuelTypes = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Categories?Type=fuel', { headers: this.headers }).subscribe(function (res) {
            _this.fuelTypes = res.data.map(function (item) {
                return {
                    name: item.categoryName,
                    id: item.id
                };
            });
            _this.fuelWholesaleForm.controls["category"].setValue(_this.fuelWholesale.categoryId);
        });
    };
    FuelWholesaleEditDialogComponent.prototype.getWholeSaleCustomers = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/WholeSale/WholeSaleCustomers', { headers: this.headers }).subscribe(function (res) {
            _this.customers = res.data.map(function (item) {
                return {
                    name: item.customerName,
                    id: item.id
                };
            });
            _this.fuelWholesaleForm.controls["customer"].setValue(_this.fuelWholesale.customerId);
        });
    };
    /**
     * Returns prepared fuel purchase
     */
    FuelWholesaleEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.fuelWholesaleForm.controls;
        var _fuelWholesale = new _models_fuel_wholesale_model__WEBPACK_IMPORTED_MODULE_7__["FuelWholesaleModel"]();
        _fuelWholesale.id = this.fuelWholesale.id;
        _fuelWholesale.categoryId = controls.category.value;
        _fuelWholesale.customerId = controls.customer.value;
        _fuelWholesale.amount = controls.amount.value;
        _fuelWholesale.notes = controls.notes.value;
        _fuelWholesale.sellingDate = controls.sellingDate.value;
        return _fuelWholesale;
    };
    /**
     * On Submit
     */
    FuelWholesaleEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.fuelWholesaleForm.controls;
        /** check form */
        if (this.fuelWholesaleForm.invalid) {
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
     * @param _fuelWholesale: FuelWholesaleModel
     */
    FuelWholesaleEditDialogComponent.prototype.updateReading = function (_fuelWholesale) {
        var _this = this;
        var sellingDate = new Date(+new Date(_fuelWholesale.sellingDate) - this.tzoffset).toISOString().slice(0, 16);
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Wholesale', {
            id: _fuelWholesale.id,
            categoryId: _fuelWholesale.categoryId,
            sellingDate: sellingDate,
            customerId: +_fuelWholesale.customerId,
            amount: +_fuelWholesale.amount,
            notes: _fuelWholesale.notes,
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _fuelWholesale: _fuelWholesale, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل الحركة ';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create Fuel price
     *
     * @param _fuelWholesale: FuelWholesaleModel
     */
    FuelWholesaleEditDialogComponent.prototype.createReading = function (_fuelWholesale) {
        var _this = this;
        var sellingDate = new Date(+new Date(_fuelWholesale.sellingDate) - this.tzoffset).toISOString().slice(0, 16);
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Wholesale', {
            id: _fuelWholesale.id,
            categoryId: _fuelWholesale.categoryId,
            sellingDate: sellingDate,
            customerId: +_fuelWholesale.customerId,
            amount: +_fuelWholesale.amount,
            notes: _fuelWholesale.notes,
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _fuelWholesale: _fuelWholesale, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة الحركة ';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    FuelWholesaleEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    FuelWholesaleEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    FuelWholesaleEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'fuel-wholesale-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./fuel-wholesale-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-edit/fuel-wholesale-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], FuelWholesaleEditDialogComponent);
    return FuelWholesaleEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-view/fuel-wholesale.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-view/fuel-wholesale.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n.mat-row:hover {\n  background-color: whitesmoke; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZnVlbC9mdWVsLXdob2xlc2FsZS9mdWVsLXdob2xlc2FsZS12aWV3L0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGZ1ZWxcXGZ1ZWwtd2hvbGVzYWxlXFxmdWVsLXdob2xlc2FsZS12aWV3XFxmdWVsLXdob2xlc2FsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR2xCO0VBRUUsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0MsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9mdWVsL2Z1ZWwtd2hvbGVzYWxlL2Z1ZWwtd2hvbGVzYWxlLXZpZXcvZnVlbC13aG9sZXNhbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZUNvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFjdGlvbnNDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucm93IHtcclxuXHRkaXYge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbn1cclxuXHJcbi5tYXQtcm93OmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG5cdC8vY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-view/fuel-wholesale.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-view/fuel-wholesale.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FuelWholesaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelWholesaleComponent", function() { return FuelWholesaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_fuel_wholesale_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/fuel-wholesale.model */ "./src/app/views/pages/fuel/fuel-wholesale/models/fuel-wholesale.model.ts");
/* harmony import */ var _fuel_wholesale_edit_fuel_wholesale_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fuel-wholesale-edit/fuel-wholesale-edit.dialog.component */ "./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-edit/fuel-wholesale-edit.dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");
/* harmony import */ var _configuration_fuel_types_models_fuel_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../configuration/fuel-types/models/fuel.model */ "./src/app/views/pages/configuration/fuel-types/models/fuel.model.ts");
/* harmony import */ var _add_fuel_wholesale_customer_add_fuel_wholesale_customer_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../add-fuel-wholesale-customer/add-fuel-wholesale-customer.dialog.component */ "./src/app/views/pages/fuel/fuel-wholesale/add-fuel-wholesale-customer/add-fuel-wholesale-customer.dialog.component.ts");

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
var FuelWholesaleComponent = /** @class */ (function () {
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
    function FuelWholesaleComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['sellingDate', 'category', 'customer', 'amount', 'cumulativeSum', 'notes', 'actions'];
        this.isLoadingResults = false;
        this.selectedCustomer = '';
        this.selectedFuelType = '';
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0) - this.tzoffset).toISOString().slice(0, 16);
        // Filter data
        this.fuelTypes = [];
        // TODO: Get using APIs
        this.customers = [];
        this.balances = [];
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
    FuelWholesaleComponent.prototype.ngOnInit = function () {
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
        this.getWholeSaleCustomers();
        this.loadUsersReadingsList();
    };
    /**
     * On Destroy
     */
    FuelWholesaleComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /** ACTIONS */
    FuelWholesaleComponent.prototype.getWholeSaleCustomers = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/WholeSale/WholeSaleCustomers', { headers: this.headers }).subscribe(function (res) {
            _this.customers = res.data.map(function (item) {
                return {
                    name: item.customerName,
                    id: item.id
                };
            });
        });
    };
    /**
     * Load UsersReadings List from service through data-source
     */
    FuelWholesaleComponent.prototype.loadUsersReadingsList = function () {
        var _this = this;
        this.isLoadingResults = true;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        if (this.selectedFuelType) {
            url += '&CategoryId=' + this.selectedFuelType;
        }
        if (this.selectedCustomer) {
            url += '&CustomerId=' + this.selectedCustomer;
        }
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Wholesale' + url, { headers: this.headers })
            .subscribe(function (res) {
            _this.isLoadingResults = false;
            _this.balances = res.data.balances;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { category: item.categoryName, customer: item.customerName });
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
            _this.balances = [];
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
     * @param _item: FuelPricesModel
     */
    FuelWholesaleComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = 'حذف الحركة';
        var _description = 'هل أنت متأكد من حذف الحركة؟';
        var _waitDesciption = 'جاري الحذف';
        var _deleteMessage = 'لقد تم الحذف';
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.http.delete(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Wholesale/' + _item.id, { headers: _this.headers })
                .subscribe(function (res) {
                _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
                _this.loadUsersReadingsList();
            }, function (err) {
                var msg = 'فشل في الحذف';
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
    FuelWholesaleComponent.prototype.addReading = function () {
        var newReading = new _models_fuel_wholesale_model__WEBPACK_IMPORTED_MODULE_7__["FuelWholesaleModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: FuelPricesModel
     */
    FuelWholesaleComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_fuel_wholesale_edit_fuel_wholesale_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FuelWholesaleEditDialogComponent"], {
            data: {
                reading: reading,
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
    FuelWholesaleComponent.prototype.getExcelFileName = function () {
        return 'مبيعات الجملة' + '-' + new Date().toISOString().slice(0, 10);
    };
    /**
     * Add Fuel Type Dialog
     */
    FuelWholesaleComponent.prototype.addWholeSaleCustomer = function () {
        var _this = this;
        var reading = new _configuration_fuel_types_models_fuel_model__WEBPACK_IMPORTED_MODULE_11__["FuelModel"]();
        reading.clear();
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_add_fuel_wholesale_customer_add_fuel_wholesale_customer_dialog_component__WEBPACK_IMPORTED_MODULE_12__["AddFuelWholesaleCustomerDialogComponent"], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.getWholeSaleCustomers();
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
        });
    };
    FuelWholesaleComponent.ctorParameters = function () { return [
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
    ], FuelWholesaleComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], FuelWholesaleComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FuelWholesaleComponent.prototype, "searchInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FuelWholesaleComponent.prototype, "fuelTypes", void 0);
    FuelWholesaleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'fuel-wholesale',
            template: __webpack_require__(/*! raw-loader!./fuel-wholesale.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-view/fuel-wholesale.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./fuel-wholesale.component.scss */ "./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-view/fuel-wholesale.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], FuelWholesaleComponent);
    return FuelWholesaleComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/fuel/fuel-wholesale/models/fuel-wholesale.model.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel-wholesale/models/fuel-wholesale.model.ts ***!
  \********************************************************************************/
/*! exports provided: FuelWholesaleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelWholesaleModel", function() { return FuelWholesaleModel; });
var FuelWholesaleModel = /** @class */ (function () {
    function FuelWholesaleModel() {
    }
    FuelWholesaleModel.prototype.clear = function () {
        this.id = 0;
        this.amount = 0;
        this.cumulativeSum = 0;
        this.customerId = 0;
        this.customer = '';
        this.categoryId = 0;
        this.category = '';
        this.notes = '';
        this.sellingDate = new Date().toISOString().substr(0, 16);
    };
    return FuelWholesaleModel;
}());



/***/ }),

/***/ "./src/app/views/pages/fuel/fuel.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZnVlbC9DOlxcVXNlcnNcXG9tZW5cXERlc2t0b3BcXEdpdEh1YlxcRnJvbnQtS2F6ZWFoXFxnYXMtc3RhdGlvbi9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxmdWVsXFxmdWVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0csYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZnVlbC9mdWVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdDo6bmctZGVlcCB7XHJcblx0XHRuZ2ItdGFic2V0ID4gLm5hdi10YWJzIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/fuel/fuel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel.component.ts ***!
  \****************************************************/
/*! exports provided: FuelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelComponent", function() { return FuelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular





var FuelComponent = /** @class */ (function () {
    function FuelComponent(layoutConfigService, store, http) {
        this.layoutConfigService = layoutConfigService;
        this.store = store;
        this.http = http;
        this.employees = [];
        this.fuelTypes = [];
        this.gasPumps = [];
        this.shifts = [];
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
        this.role = '';
    }
    FuelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
        this.getFuelTypes();
    };
    /**
     * On Destroy
     */
    FuelComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /** ACTIONS */
    FuelComponent.prototype.getFuelTypes = function () {
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
    FuelComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutConfigService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    FuelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'gas-fuel',
            template: __webpack_require__(/*! raw-loader!./fuel.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/fuel/fuel.component.html"),
            styles: [__webpack_require__(/*! ./fuel.component.scss */ "./src/app/views/pages/fuel/fuel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutConfigService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FuelComponent);
    return FuelComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/fuel/fuel.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/pages/fuel/fuel.module.ts ***!
  \*************************************************/
/*! exports provided: FuelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelModule", function() { return FuelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _fuel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fuel.component */ "./src/app/views/pages/fuel/fuel.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuel_info_fuel_prices_edit_fuel_prices_edit_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fuel-info/fuel-prices-edit/fuel-prices-edit.dialog.component */ "./src/app/views/pages/fuel/fuel-info/fuel-prices-edit/fuel-prices-edit.dialog.component.ts");
/* harmony import */ var _fuel_info_fuel_prices_fuel_prices_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fuel-info/fuel-prices/fuel-prices.component */ "./src/app/views/pages/fuel/fuel-info/fuel-prices/fuel-prices.component.ts");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/fesm5/mat-table-exporter.js");
/* harmony import */ var _fuel_purchases_fuel_purchases_view_fuel_purchases_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fuel-purchases/fuel-purchases-view/fuel-purchases.component */ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-view/fuel-purchases.component.ts");
/* harmony import */ var _fuel_purchases_fuel_purchases_edit_fuel_purchases_edit_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fuel-purchases/fuel-purchases-edit/fuel-purchases-edit.dialog.component */ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-edit/fuel-purchases-edit.dialog.component.ts");
/* harmony import */ var _fuel_purchases_fuel_purchases_payments_fuel_purchases_payments_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fuel-purchases/fuel-purchases-payments/fuel-purchases-payments.dialog.component */ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments.dialog.component.ts");
/* harmony import */ var _fuel_purchases_fuel_purchases_payments_fuel_purchases_payments_details_fuel_purchases_payments_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details/fuel-purchases-payments-details.component */ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details/fuel-purchases-payments-details.component.ts");
/* harmony import */ var _fuel_purchases_fuel_purchases_payments_fuel_purchases_payments_details_edit_fuel_purchases_payments_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details-edit/fuel-purchases-payments-details-edit.dialog.component */ "./src/app/views/pages/fuel/fuel-purchases/fuel-purchases-payments/fuel-purchases-payments-details-edit/fuel-purchases-payments-details-edit.dialog.component.ts");
/* harmony import */ var _fuel_wholesale_fuel_wholesale_view_fuel_wholesale_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fuel-wholesale/fuel-wholesale-view/fuel-wholesale.component */ "./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-view/fuel-wholesale.component.ts");
/* harmony import */ var _fuel_wholesale_fuel_wholesale_edit_fuel_wholesale_edit_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fuel-wholesale/fuel-wholesale-edit/fuel-wholesale-edit.dialog.component */ "./src/app/views/pages/fuel/fuel-wholesale/fuel-wholesale-edit/fuel-wholesale-edit.dialog.component.ts");
/* harmony import */ var _fuel_wholesale_add_fuel_wholesale_customer_add_fuel_wholesale_customer_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fuel-wholesale/add-fuel-wholesale-customer/add-fuel-wholesale-customer.dialog.component */ "./src/app/views/pages/fuel/fuel-wholesale/add-fuel-wholesale-customer/add-fuel-wholesale-customer.dialog.component.ts");

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









var FuelModule = /** @class */ (function () {
    function FuelModule() {
    }
    FuelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                        component: _fuel_component__WEBPACK_IMPORTED_MODULE_6__["FuelComponent"]
                    },
                ]),
                materialModules,
                mat_table_exporter__WEBPACK_IMPORTED_MODULE_12__["MatTableExporterModule"]
            ],
            entryComponents: [_fuel_info_fuel_prices_edit_fuel_prices_edit_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FuelPricesEditDialogComponent"], _fuel_purchases_fuel_purchases_edit_fuel_purchases_edit_dialog_component__WEBPACK_IMPORTED_MODULE_14__["FuelPurchasesEditDialogComponent"],
                _fuel_purchases_fuel_purchases_payments_fuel_purchases_payments_dialog_component__WEBPACK_IMPORTED_MODULE_15__["FuelPurchasesPaymentsDialogComponent"], _fuel_purchases_fuel_purchases_payments_fuel_purchases_payments_details_edit_fuel_purchases_payments_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_17__["FuelPurchasesPaymentsDetailsEditDialogComponent"],
                _fuel_wholesale_fuel_wholesale_edit_fuel_wholesale_edit_dialog_component__WEBPACK_IMPORTED_MODULE_19__["FuelWholesaleEditDialogComponent"], _fuel_wholesale_add_fuel_wholesale_customer_add_fuel_wholesale_customer_dialog_component__WEBPACK_IMPORTED_MODULE_20__["AddFuelWholesaleCustomerDialogComponent"]
            ],
            exports: [],
            providers: [],
            declarations: [
                _fuel_component__WEBPACK_IMPORTED_MODULE_6__["FuelComponent"],
                _fuel_info_fuel_prices_fuel_prices_component__WEBPACK_IMPORTED_MODULE_11__["FuelPricesComponent"],
                _fuel_info_fuel_prices_edit_fuel_prices_edit_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FuelPricesEditDialogComponent"],
                _fuel_purchases_fuel_purchases_view_fuel_purchases_component__WEBPACK_IMPORTED_MODULE_13__["FuelPurchasesComponent"],
                _fuel_purchases_fuel_purchases_edit_fuel_purchases_edit_dialog_component__WEBPACK_IMPORTED_MODULE_14__["FuelPurchasesEditDialogComponent"],
                _fuel_purchases_fuel_purchases_payments_fuel_purchases_payments_dialog_component__WEBPACK_IMPORTED_MODULE_15__["FuelPurchasesPaymentsDialogComponent"],
                _fuel_purchases_fuel_purchases_payments_fuel_purchases_payments_details_fuel_purchases_payments_details_component__WEBPACK_IMPORTED_MODULE_16__["FuelPurchasesPaymentsDetailsComponent"],
                _fuel_purchases_fuel_purchases_payments_fuel_purchases_payments_details_edit_fuel_purchases_payments_details_edit_dialog_component__WEBPACK_IMPORTED_MODULE_17__["FuelPurchasesPaymentsDetailsEditDialogComponent"],
                _fuel_wholesale_fuel_wholesale_view_fuel_wholesale_component__WEBPACK_IMPORTED_MODULE_18__["FuelWholesaleComponent"],
                _fuel_wholesale_fuel_wholesale_edit_fuel_wholesale_edit_dialog_component__WEBPACK_IMPORTED_MODULE_19__["FuelWholesaleEditDialogComponent"],
                _fuel_wholesale_add_fuel_wholesale_customer_add_fuel_wholesale_customer_dialog_component__WEBPACK_IMPORTED_MODULE_20__["AddFuelWholesaleCustomerDialogComponent"]
            ]
        })
    ], FuelModule);
    return FuelModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-fuel-fuel-module.js.map