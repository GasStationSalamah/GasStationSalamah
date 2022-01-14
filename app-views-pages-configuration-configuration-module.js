(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-configuration-configuration-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/banks/bank-edit/bank-edit.dialog.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/configuration/banks/bank-edit/bank-edit.dialog.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"bankForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"الاسم\" formControlName=\"name\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الاسم</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>الاسم</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"bank.id > 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"حالة الصنف\" formControlName=\"isActive\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"true\">\r\n\t\t\t\t\t\t\t\tفعال</mat-option>\r\n\t\t\t\t\t\t\t<mat-option [value]=\"false\">\r\n\t\t\t\t\t\t\t\tغير فعال</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> حالة الصنف</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>حالة الصنف</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/banks/bank-info/bank-info.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/configuration/banks/bank-info/bank-info.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>البنوك</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"بنك جديد\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة بنك</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t <div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t <div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"بحث\" #searchInput>\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t<strong>الاسم</strong>\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n<!--\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadBanksList(searchInput.value)\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t </div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"name\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الاسم</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.name}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"isActive\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>حالة البنك</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.isActive === true ? 'فعال' : 'غير فعال'}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"creationDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>تاريخ الاضافة</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\" dir=\"ltr\" class=\"align-right\">{{user.creationDate}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(user)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(user)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/clients/client-info/client-info.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/configuration/clients/client-info/client-info.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>الزبائن</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"زبون جديد\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة زبون</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t<strong>بحث</strong>\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n<!--\r\n\t\t\t\t\t <div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadClientsReadingsList(searchInput.value)\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"name\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الاسم</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.name}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"isActive\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>حالة الزبون</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.isActive === false ? 'غير فعال' : 'فعال'}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"creationDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>تاريخ الاضافة</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.creationDate}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(user)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(user)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/configuration.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/configuration/configuration.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n\t<mat-tab label=\"المستخدمين\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<users-info></users-info>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n\t<mat-tab label=\"العدادات\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<pumps-info></pumps-info>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n\t<mat-tab label=\"الوقود\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<fuel-info></fuel-info>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n\t<mat-tab label=\"الزبائن\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<client-info></client-info>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n\t<mat-tab label=\"المزودون\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<supplier-info></supplier-info>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n\t<mat-tab label=\"البنوك\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<bank-info></bank-info>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n\t<mat-tab label=\"الشفتات\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<shifts-info></shifts-info>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/fuel-types/fuel-info/fuel-info.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/configuration/fuel-types/fuel-info/fuel-info.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>اصناف الوقود</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"صنف جديد\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة صنف</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t<strong>بحث</strong>\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedType\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">جميع الاصناف</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"fuel\">اصناف الوقود</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"oil\">اصناف الزيوت</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- <div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadFuelsCategoriesList(searchInput.value)\" mat-raised-button matTooltip=\"\"\r\n\t\t\t\t\tcolor=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"name\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الاسم</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.name}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"type\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الصنف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.type.toLowerCase() === 'oil' ? 'زيوت' : 'وقود'}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"isActive\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>حالة الصنف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.isActive === true ? 'فعال' : 'غير فعال'}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"creationDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>تاريخ الاضافة</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\" dir=\"ltr\" class=\"align-right\">{{user.creationDate}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(user)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(user)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\"\r\n\t\t\t\t[length]=\"dataSource.data.length\" [showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/pumps/pumps-edit/pumps-edit.dialog.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/configuration/pumps/pumps-edit/pumps-edit.dialog.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"pumpForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"الاسم\" formControlName=\"name\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الاسم</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>الاسم</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"pump.id <= 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"الصنف\" formControlName=\"category\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"category.id\" *ngFor=\"let category of categories\">\r\n\t\t\t\t\t\t\t\t{{category.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الصنف</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>الصنف</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"pump.id > 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"حالة العداد\" formControlName=\"isActive\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"true\">\r\n\t\t\t\t\t\t\t\tفعال</mat-option>\r\n\t\t\t\t\t\t\t<mat-option [value]=\"false\">\r\n\t\t\t\t\t\t\t\tغير فعال</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> حالة العداد</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>حالة العداد</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/pumps/pumps-info/pumps-info.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/configuration/pumps/pumps-info/pumps-info.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>العدادات</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"عداد جديد\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة عداد</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- <div class=\"kt-form\"> -->\r\n\t\t<!-- start::FILTERS -->\r\n\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t<!--\t\t\t\t<div class=\"row align-items-center\">-->\r\n\r\n\t\t\t<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">-->\r\n\t\t\t<!--\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n\t\t\t<!--\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>-->\r\n\t\t\t<!--\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n\t\t\t<!--\t\t\t\t\t\t\t\t<strong>بحث</strong>-->\r\n\t\t\t<!--\t\t\t\t\t\t\t</mat-hint>-->\r\n\t\t\t<!--\t\t\t\t\t\t</mat-form-field>-->\r\n\t\t\t<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">-->\r\n\t\t\t<!--\t\t\t\t\t\t<div class=\"kt-form__control\">-->\r\n\t\t\t<!--\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n\t\t\t<!--\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required-->\r\n\t\t\t<!--\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">-->\r\n\t\t\t<!--\t\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n\t\t\t<!--\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>-->\r\n\t\t\t<!--\t\t\t\t\t\t\t\t</mat-hint>-->\r\n\t\t\t<!--\t\t\t\t\t\t\t</mat-form-field>-->\r\n\t\t\t<!--\t\t\t\t\t\t</div>-->\r\n\t\t\t<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">-->\r\n\t\t\t<!--\t\t\t\t\t\t<div class=\"kt-form__control\">-->\r\n\t\t\t<!--\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n\t\t\t<!--\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required-->\r\n\t\t\t<!--\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">-->\r\n\t\t\t<!--\t\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n\t\t\t<!--\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>-->\r\n\t\t\t<!--\t\t\t\t\t\t\t\t</mat-hint>-->\r\n\t\t\t<!--\t\t\t\t\t\t\t</mat-form-field>-->\r\n\t\t\t<!--\t\t\t\t\t\t</div>-->\r\n\t\t\t<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t<!--\t\t\t\t</div>-->\r\n\t\t\t<button (click)=\"loadPumpsReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>بحث</span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS -->\r\n\t\t<!-- </div> -->\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"name\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الاسم</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.name}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"category\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الصنف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.category}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"isActive\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>حالة العداد</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.isActive === true ? 'فعال' : 'غير فعال'}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"creationDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>تاريخ الاضافة</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\" dir=\"ltr\" class=\"align-right\">{{user.creationDate}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(user)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(user)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\"\r\n\t\t\t\t[length]=\"dataSource.data.length\" [showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/shifts/shifts-edit/shifts-edit.dialog.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/configuration/shifts/shifts-edit/shifts-edit.dialog.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\t dir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"shiftForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t\t  (close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"الاسم\" formControlName=\"name\"/>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الاسم</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>الاسم</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"shift.id > 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"حالة الشفت\" formControlName=\"isActive\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"true\">\r\n\t\t\t\t\t\t\t\tفعال\r\n\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t<mat-option [value]=\"false\">\r\n\t\t\t\t\t\t\t\tغير فعال\r\n\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> حالة الشفت</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>حالة الشفت</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"time\" formControlName=\"startDate\" required\r\n\t\t\t\t\t\t\t   style=\"color: black;\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>بداية الشفت</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"time\" formControlName=\"endDate\" required\r\n\t\t\t\t\t\t\t   style=\"color: black;\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>نهاية الشفت</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/shifts/shifts-info/shifts-info.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/configuration/shifts/shifts-info/shifts-info.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>الشفتات</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"شفت جديد\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة شفت</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<!--\r\n\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>بحث</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t   style=\"color: black;\">\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t   style=\"color: black;\">\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>-->\r\n\t\t\t\t<button (click)=\"loadShiftsList()\" mat-raised-button matTooltip=\"\"\r\n\t\t\t\t\t\tcolor=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\t\tmatTooltip=\"Excel\">تنزيل\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\t\t   matSortActive=\"name\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n                       #exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الاسم</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let shift\">{{shift.name}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"isActive\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>حالة الشفت</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let shift\">{{shift.isActive === false ? 'غير فعال' : 'فعال'}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"startDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>بداية الشفت</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let shift\" dir=\"ltr\" class=\"align-right\">\r\n\t\t\t\t\t\t{{shift.startDate === '0001-01-01T00:00:00' ? '' : shift.startDate?.slice(0, 16).split('T').join(' ')}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"endDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>نهاية الشفت</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let shift\" dir=\"ltr\" class=\"align-right\">\r\n\t\t\t\t\t\t{{shift.endDate === '0001-01-01T00:00:00' ? '' : shift.endDate?.slice(0, 16).split('T').join(' ')}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let shift\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(shift)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t\t(click)=\"deleteReading(shift)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t\t\t   [showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/suppliers/supplier-edit/supplier-edit.dialog.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/configuration/suppliers/supplier-edit/supplier-edit.dialog.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"supplierForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"الاسم\" formControlName=\"name\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الاسم</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>الاسم</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input type=\"number\" matInput placeholder=\"رقم المحمول\" formControlName=\"mobileNumber\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>رقم المحمول</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>رقم المحمول</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input type=\"number\" matInput placeholder=\"رقم الهاتف\" formControlName=\"telephone\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>رقم الهاتف</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>رقم الهاتف</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"نوع المزود\" formControlName=\"type\">\r\n\t\t\t\t\t\t\t<mat-option value=\"fuel\">مزود وقود</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"oil\">مزود زيوت</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> نوع المزود</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>نوع المزود</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"supplier.id > 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"حالة المزود\" formControlName=\"isActive\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"true\">\r\n\t\t\t\t\t\t\t\tفعال</mat-option>\r\n\t\t\t\t\t\t\t<mat-option [value]=\"false\">\r\n\t\t\t\t\t\t\t\tغير فعال</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> حالة المزود</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>حالة المزود</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/suppliers/supplier-info/supplier-info.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/configuration/suppliers/supplier-info/supplier-info.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>المزودون</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"مزود جديد\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة مزود</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t<strong>بحث</strong>\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedType\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">جميع المزودين</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"fuel\">مزود وقود</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"oil\">مزود زيوت</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نوع المزود</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n<!--\r\n\t\t\t\t\t <div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadClientsReadingsList(searchInput.value)\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"name\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الاسم</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.name}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"mobileNumber\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>رقم المحمول</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.mobileNumber}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"telephone\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>رقم الهاتف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.telephone}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"type\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>نوع المزود</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.type === 'fuel' ? 'وقود' : 'زيوت'}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"isActive\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>حالة المزود</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.isActive === false ? 'غير فعال' : 'فعال'}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"creationDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>تاريخ الاضافة</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\" dir=\"ltr\" class=\"align-right\">{{user.creationDate}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(user)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(user)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/users/users-edit/users-edit.dialog.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/configuration/users/users-edit/users-edit.dialog.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"userForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"الاسم\" formControlName=\"name\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الاسم</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>الاسم</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"اسم المستخدم\" formControlName=\"userName\"/>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>اسم المستخدم</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>اسم المستخدم</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input type=\"password\" matInput placeholder=\"كلمة السر\" formControlName=\"password\"/>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> كلمة السر مكونة من 8 خانات على الاقل</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>كلمة السر</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"user.userId <= 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"نوع المستخدم\" formControlName=\"roleId\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"role.id\" *ngFor=\"let role of roles\">\r\n\t\t\t\t\t\t\t\t{{role.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> نوع المستخدم</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>نوع المستخدم</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input type=\"number\" matInput placeholder=\"الراتب\" formControlName=\"salary\"/>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الراتب</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>الراتب</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"user.userId > 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"حالة المستخدم\" formControlName=\"isActive\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"true\">\r\n\t\t\t\t\t\t\t\tفعال\r\n\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t<mat-option [value]=\"false\">\r\n\t\t\t\t\t\t\t\tغير فعال\r\n\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> حالة المستخدم</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>حالة المستخدم</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-10-mobile\" *ngIf=\"user.userId > 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"datetime-local\" formControlName=\"startDate\" required\r\n\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-10-mobile\" *ngIf=\"user.userId > 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"datetime-local\" formControlName=\"endDate\" required style=\"color: black;\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/users/users-info/users-info.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/configuration/users/users-info/users-info.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>المستخدمين</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"مستخدم جديد\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة مستخدم</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t<strong>بحث</strong>\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList(searchInput.value)\" mat-raised-button matTooltip=\"\"\r\n\t\t\t\t\tcolor=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\" matTooltip=\"Excel\">تنزيل\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"name\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الاسم</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.name}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<!-- <ng-container matColumnDef=\"userName\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>اسم المستخدم</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.userName}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container matColumnDef=\"salary\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الراتب</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.salary}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t-->\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"roleName\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>تصنيف المستخدم</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.roleName}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"isActive\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>حالة المستخدم</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.isActive === false ? 'غير فعال' : 'فعال'}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"startDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>بداية العمل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\" dir=\"ltr\" class=\"align-right\">\r\n\t\t\t\t\t\t{{user.startDate === '0001-01-01T00:00:00' ? '' : user.startDate?.slice(0, 16).split('T').join('\r\n\t\t\t\t\t\t')}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"endDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>نهاية العمل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\" dir=\"ltr\" class=\"align-right\">\r\n\t\t\t\t\t\t{{user.endDate === '0001-01-01T00:00:00' ? '' : user.endDate?.slice(0, 16).split('T').join('\r\n\t\t\t\t\t\t')}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(user)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(user)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/configuration/banks/bank-edit/bank-edit.dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/banks/bank-edit/bank-edit.dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BanksEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanksEditDialogComponent", function() { return BanksEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_bank_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/bank.model */ "./src/app/views/pages/configuration/banks/models/bank.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var BanksEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<BanksReadingsEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param layoutUtilsService
     * @param http
     */
    function BanksEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
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
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    BanksEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.bank = this.data.reading;
        this.createForm();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
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
    BanksEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    BanksEditDialogComponent.prototype.createForm = function () {
        this.bankForm = this.fb.group({
            id: [this.bank.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [this.bank.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isActive: [this.bank.isActive, this.bank.id > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : '']
        });
    };
    /**
     * Returns page title
     */
    BanksEditDialogComponent.prototype.getTitle = function () {
        if (this.bank.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0628\u0646\u0643 '" + this.bank.name + "'";
        }
        return 'اضافة البنك جديد';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    BanksEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.bankForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    /**
     * Returns prepared bank
     */
    BanksEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.bankForm.controls;
        var _bank = new _models_bank_model__WEBPACK_IMPORTED_MODULE_7__["BankModel"]();
        _bank.id = this.bank.id;
        _bank.name = controls.name.value;
        _bank.isActive = controls.isActive.value;
        return _bank;
    };
    /**
     * On Submit
     */
    BanksEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.bankForm.controls;
        /** check form */
        if (this.bankForm.invalid) {
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
     * Update Banks
     *
     * @param _bank: BanksModel
     */
    BanksEditDialogComponent.prototype.updateReading = function (_bank) {
        var _this = this;
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Banks', {
            id: _bank.id,
            name: _bank.name,
            isActive: _bank.isActive
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _bank: _bank, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل البنك';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create Banks
     *
     * @param _bank: BanksModel
     */
    BanksEditDialogComponent.prototype.createReading = function (_bank) {
        var _this = this;
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Banks', {
            name: _bank.name,
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _bank: _bank, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة البنك';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    BanksEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    BanksEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    BanksEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'bank-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./bank-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/banks/bank-edit/bank-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], BanksEditDialogComponent);
    return BanksEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/banks/bank-info/bank-info.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/banks/bank-info/bank-info.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvY29uZmlndXJhdGlvbi9iYW5rcy9iYW5rLWluZm8vQzpcXFVzZXJzXFxvbWVuXFxEZXNrdG9wXFxHaXRIdWJcXEZyb250LUthemVhaFxcZ2FzLXN0YXRpb24vc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcY29uZmlndXJhdGlvblxcYmFua3NcXGJhbmstaW5mb1xcYmFuay1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFFRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2NvbmZpZ3VyYXRpb24vYmFua3MvYmFuay1pbmZvL2JhbmstaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlQ29sdW1uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWN0aW9uc0NvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG5cdGRpdiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/configuration/banks/bank-info/bank-info.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/configuration/banks/bank-info/bank-info.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankComponent", function() { return BankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_bank_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/bank.model */ "./src/app/views/pages/configuration/banks/models/bank.model.ts");
/* harmony import */ var _bank_edit_bank_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../bank-edit/bank-edit.dialog.component */ "./src/app/views/pages/configuration/banks/bank-edit/bank-edit.dialog.component.ts");
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
var BankComponent = /** @class */ (function () {
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
    function BankComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['name', 'isActive', 'creationDate', 'actions'];
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.selectedEmployee = '';
        this.selectedBankType = '';
        this.selectedGasBank = '';
        this.selectedType = 'bank';
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(2021, 0, 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear() + 1, 0, 0) - this.tzoffset).toISOString().slice(0, 16);
        // Filter data
        // TODO: Get using APIs
        this.bankTypes = [];
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
    BankComponent.prototype.ngOnInit = function () {
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
        this.loadBanksList();
    };
    /**
     * On Destroy
     */
    BankComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load Banks List from service through data-source
     */
    BankComponent.prototype.loadBanksList = function (query) {
        var _this = this;
        if (query === void 0) { query = ''; }
        this.isLoadingResults = true;
        // let dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        // let dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        // let url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo +
        var url = '?name=' + query;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Banks' + url, { headers: this.headers })
            .subscribe(function (res) {
            if (res.success) {
                _this.isLoadingResults = false;
                var data = res.data.map(function (item) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { 
                        // id: item.id,
                        // name: item.nam,
                        // isActive: item.isActive,
                        creationDate: item.createdAt });
                });
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
     * Delete Reading
     *
     * @param _item: BankModel
     */
    BankComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = "حذف الصنف";
        var _description = "هل أنت متأكد من حذف الصنف؟";
        var _waitDesciption = "جاري الحذف";
        var _deleteMessage = "لقد تم الحذف";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.http.delete(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Banks/' + _item.id, { headers: _this.headers })
                .subscribe(function (res) {
                _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
                _this.loadBanksList();
            }, function (err) {
                var msg = 'فشل في حذف الصنف';
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
    BankComponent.prototype.addReading = function () {
        var newReading = new _models_bank_model__WEBPACK_IMPORTED_MODULE_7__["BankModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: BankModel
     */
    BankComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_bank_edit_bank_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["BanksEditDialogComponent"], {
            data: {
                reading: reading
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
            _this.loadBanksList();
        });
    };
    /**
     * Get file name of the exported excel file
     */
    BankComponent.prototype.getExcelFileName = function () {
        return 'البنوك' + '-' + new Date().toISOString().slice(0, 10);
    };
    BankComponent.ctorParameters = function () { return [
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
    ], BankComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], BankComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BankComponent.prototype, "searchInput", void 0);
    BankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'bank-info',
            template: __webpack_require__(/*! raw-loader!./bank-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/banks/bank-info/bank-info.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./bank-info.component.scss */ "./src/app/views/pages/configuration/banks/bank-info/bank-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], BankComponent);
    return BankComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/banks/models/bank.model.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/configuration/banks/models/bank.model.ts ***!
  \**********************************************************************/
/*! exports provided: BankModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankModel", function() { return BankModel; });
var BankModel = /** @class */ (function () {
    function BankModel() {
    }
    BankModel.prototype.clear = function () {
        this.id = 0;
        this.name = '';
        this.isActive = 'false';
        this.creationDate = new Date().toISOString().substr(0, 16);
    };
    return BankModel;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/clients/client-info/client-info.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/clients/client-info/client-info.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvY29uZmlndXJhdGlvbi9jbGllbnRzL2NsaWVudC1pbmZvL0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGNvbmZpZ3VyYXRpb25cXGNsaWVudHNcXGNsaWVudC1pbmZvXFxjbGllbnQtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR2xCO0VBRUUsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9jb25maWd1cmF0aW9uL2NsaWVudHMvY2xpZW50LWluZm8vY2xpZW50LWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZUNvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFjdGlvbnNDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucm93IHtcclxuXHRkaXYge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/configuration/clients/client-info/client-info.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/clients/client-info/client-info.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ClientTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientTypesComponent", function() { return ClientTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_client_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/client.model */ "./src/app/views/pages/configuration/clients/models/client.model.ts");
/* harmony import */ var _client_edit_client_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client-edit/client-edit.dialog.component */ "./src/app/views/pages/configuration/clients/client-edit/client-edit.dialog.component.ts");
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
var ClientTypesComponent = /** @class */ (function () {
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
    function ClientTypesComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['name', 'isActive', 'creationDate', 'actions'];
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.selectedEmployee = '';
        this.selectedClientType = '';
        this.selectedGasClient = '';
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(2021, 0, 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear() + 1, 0, 0) - this.tzoffset).toISOString().slice(0, 16);
        // Filter data
        // TODO: Get using APIs
        this.clientTypes = [];
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
    ClientTypesComponent.prototype.ngOnInit = function () {
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
        this.loadClientsReadingsList();
    };
    /**
     * On Destroy
     */
    ClientTypesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load ClientsReadings List from service through data-source
     */
    ClientTypesComponent.prototype.loadClientsReadingsList = function (searchParam) {
        var _this = this;
        if (searchParam === void 0) { searchParam = ''; }
        this.isLoadingResults = true;
        // let dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        // let dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        // let url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo +
        var url = '?SerachParam=' + searchParam;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Clients' + url, { headers: this.headers })
            .subscribe(function (res) {
            if (res.success) {
                _this.isLoadingResults = false;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data.map(function (item) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { creationDate: item.createdAt });
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
     * Delete Reading
     *
     * @param _item: SupplierModel
     */
    ClientTypesComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = 'حذف الزبون';
        var _description = 'هل أنت متأكد من حذف الزبون';
        var _waitDesciption = 'جاري الحذف';
        var _deleteMessage = 'لقد تم الحذف';
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.http.delete(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Clients/' + _item.id, { headers: _this.headers })
                .subscribe(function (res) {
                _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
                _this.loadClientsReadingsList();
            }, function (err) {
                var msg = 'فشل في حذف الزبون';
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
    ClientTypesComponent.prototype.addReading = function () {
        var newReading = new _models_client_model__WEBPACK_IMPORTED_MODULE_7__["ClientModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: SupplierModel
     */
    ClientTypesComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_client_edit_client_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ClientsEditDialogComponent"], {
            data: {
                reading: reading
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
            _this.loadClientsReadingsList();
        });
    };
    /**
     * Get file name of the exported excel file
     */
    ClientTypesComponent.prototype.getExcelFileName = function () {
        return 'الزبائن' + '-' + new Date().toISOString().slice(0, 10);
    };
    ClientTypesComponent.ctorParameters = function () { return [
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
    ], ClientTypesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ClientTypesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ClientTypesComponent.prototype, "searchInput", void 0);
    ClientTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'client-info',
            template: __webpack_require__(/*! raw-loader!./client-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/clients/client-info/client-info.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./client-info.component.scss */ "./src/app/views/pages/configuration/clients/client-info/client-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], ClientTypesComponent);
    return ClientTypesComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/configuration.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/configuration/configuration.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvY29uZmlndXJhdGlvbi9DOlxcVXNlcnNcXG9tZW5cXERlc2t0b3BcXEdpdEh1YlxcRnJvbnQtS2F6ZWFoXFxnYXMtc3RhdGlvbi9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxjb25maWd1cmF0aW9uXFxjb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0csYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdDo6bmctZGVlcCB7XHJcblx0XHRuZ2ItdGFic2V0ID4gLm5hdi10YWJzIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/configuration/configuration.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/configuration/configuration.component.ts ***!
  \**********************************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// Angular

var ConfigurationComponent = /** @class */ (function () {
    function ConfigurationComponent() {
    }
    ConfigurationComponent.prototype.ngOnInit = function () {
    };
    ConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gas-configuration',
            template: __webpack_require__(/*! raw-loader!./configuration.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/configuration.component.html"),
            styles: [__webpack_require__(/*! ./configuration.component.scss */ "./src/app/views/pages/configuration/configuration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigurationComponent);
    return ConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/configuration.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/configuration/configuration.module.ts ***!
  \*******************************************************************/
/*! exports provided: ConfigurationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationModule", function() { return ConfigurationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _configuration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuration.component */ "./src/app/views/pages/configuration/configuration.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/fesm5/mat-table-exporter.js");
/* harmony import */ var _users_users_edit_users_edit_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/users-edit/users-edit.dialog.component */ "./src/app/views/pages/configuration/users/users-edit/users-edit.dialog.component.ts");
/* harmony import */ var _users_users_info_users_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/users-info/users-info.component */ "./src/app/views/pages/configuration/users/users-info/users-info.component.ts");
/* harmony import */ var _pumps_pumps_info_pumps_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pumps/pumps-info/pumps-info.component */ "./src/app/views/pages/configuration/pumps/pumps-info/pumps-info.component.ts");
/* harmony import */ var _pumps_pumps_edit_pumps_edit_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pumps/pumps-edit/pumps-edit.dialog.component */ "./src/app/views/pages/configuration/pumps/pumps-edit/pumps-edit.dialog.component.ts");
/* harmony import */ var _fuel_types_fuel_info_fuel_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fuel-types/fuel-info/fuel-info.component */ "./src/app/views/pages/configuration/fuel-types/fuel-info/fuel-info.component.ts");
/* harmony import */ var _clients_client_info_client_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clients/client-info/client-info.component */ "./src/app/views/pages/configuration/clients/client-info/client-info.component.ts");
/* harmony import */ var _suppliers_supplier_info_supplier_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./suppliers/supplier-info/supplier-info.component */ "./src/app/views/pages/configuration/suppliers/supplier-info/supplier-info.component.ts");
/* harmony import */ var _suppliers_supplier_edit_supplier_edit_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./suppliers/supplier-edit/supplier-edit.dialog.component */ "./src/app/views/pages/configuration/suppliers/supplier-edit/supplier-edit.dialog.component.ts");
/* harmony import */ var _banks_bank_edit_bank_edit_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./banks/bank-edit/bank-edit.dialog.component */ "./src/app/views/pages/configuration/banks/bank-edit/bank-edit.dialog.component.ts");
/* harmony import */ var _banks_bank_info_bank_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./banks/bank-info/bank-info.component */ "./src/app/views/pages/configuration/banks/bank-info/bank-info.component.ts");
/* harmony import */ var _shifts_shifts_edit_shifts_edit_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shifts/shifts-edit/shifts-edit.dialog.component */ "./src/app/views/pages/configuration/shifts/shifts-edit/shifts-edit.dialog.component.ts");
/* harmony import */ var _shifts_shifts_info_shifts_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shifts/shifts-info/shifts-info.component */ "./src/app/views/pages/configuration/shifts/shifts-info/shifts-info.component.ts");

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













var ConfigurationModule = /** @class */ (function () {
    function ConfigurationModule() {
    }
    ConfigurationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                        component: _configuration_component__WEBPACK_IMPORTED_MODULE_6__["ConfigurationComponent"]
                    },
                ]),
                materialModules,
                mat_table_exporter__WEBPACK_IMPORTED_MODULE_10__["MatTableExporterModule"]
            ],
            entryComponents: [
                _users_users_edit_users_edit_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UsersEditDialogComponent"],
                _pumps_pumps_edit_pumps_edit_dialog_component__WEBPACK_IMPORTED_MODULE_14__["PumpsEditDialogComponent"],
                _suppliers_supplier_edit_supplier_edit_dialog_component__WEBPACK_IMPORTED_MODULE_18__["SuppliersEditDialogComponent"],
                _banks_bank_edit_bank_edit_dialog_component__WEBPACK_IMPORTED_MODULE_19__["BanksEditDialogComponent"],
                _shifts_shifts_edit_shifts_edit_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ShiftsEditDialogComponent"]
            ],
            exports: [],
            providers: [],
            declarations: [
                _configuration_component__WEBPACK_IMPORTED_MODULE_6__["ConfigurationComponent"],
                _users_users_info_users_info_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
                _users_users_edit_users_edit_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UsersEditDialogComponent"],
                _pumps_pumps_info_pumps_info_component__WEBPACK_IMPORTED_MODULE_13__["PumpsComponent"],
                _pumps_pumps_edit_pumps_edit_dialog_component__WEBPACK_IMPORTED_MODULE_14__["PumpsEditDialogComponent"],
                _fuel_types_fuel_info_fuel_info_component__WEBPACK_IMPORTED_MODULE_15__["FuelTypesComponent"],
                _clients_client_info_client_info_component__WEBPACK_IMPORTED_MODULE_16__["ClientTypesComponent"],
                _suppliers_supplier_info_supplier_info_component__WEBPACK_IMPORTED_MODULE_17__["SupplierComponent"],
                _suppliers_supplier_edit_supplier_edit_dialog_component__WEBPACK_IMPORTED_MODULE_18__["SuppliersEditDialogComponent"],
                _banks_bank_info_bank_info_component__WEBPACK_IMPORTED_MODULE_20__["BankComponent"],
                _banks_bank_edit_bank_edit_dialog_component__WEBPACK_IMPORTED_MODULE_19__["BanksEditDialogComponent"],
                _shifts_shifts_info_shifts_info_component__WEBPACK_IMPORTED_MODULE_22__["ShiftsComponent"],
                _shifts_shifts_edit_shifts_edit_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ShiftsEditDialogComponent"],
            ]
        })
    ], ConfigurationModule);
    return ConfigurationModule;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/fuel-types/fuel-info/fuel-info.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/fuel-types/fuel-info/fuel-info.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvY29uZmlndXJhdGlvbi9mdWVsLXR5cGVzL2Z1ZWwtaW5mby9DOlxcVXNlcnNcXG9tZW5cXERlc2t0b3BcXEdpdEh1YlxcRnJvbnQtS2F6ZWFoXFxnYXMtc3RhdGlvbi9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxjb25maWd1cmF0aW9uXFxmdWVsLXR5cGVzXFxmdWVsLWluZm9cXGZ1ZWwtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR2xCO0VBRUUsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9jb25maWd1cmF0aW9uL2Z1ZWwtdHlwZXMvZnVlbC1pbmZvL2Z1ZWwtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlQ29sdW1uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWN0aW9uc0NvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG5cdGRpdiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/configuration/fuel-types/fuel-info/fuel-info.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/fuel-types/fuel-info/fuel-info.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FuelTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelTypesComponent", function() { return FuelTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_fuel_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/fuel.model */ "./src/app/views/pages/configuration/fuel-types/models/fuel.model.ts");
/* harmony import */ var _fuel_edit_fuel_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fuel-edit/fuel-edit.dialog.component */ "./src/app/views/pages/configuration/fuel-types/fuel-edit/fuel-edit.dialog.component.ts");
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
var FuelTypesComponent = /** @class */ (function () {
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
    function FuelTypesComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['name', 'type', 'creationDate', 'isActive', 'actions'];
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.selectedEmployee = '';
        this.selectedFuelType = '';
        this.selectedGasFuel = '';
        this.selectedType = ''; // 'fuel'
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(2021, 0, 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear() + 1, 0, 0) - this.tzoffset).toISOString().slice(0, 16);
        // Filter data
        // TODO: Get using APIs
        this.fuelTypes = [];
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
    FuelTypesComponent.prototype.ngOnInit = function () {
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
        this.loadFuelsCategoriesList();
    };
    /**
     * On Destroy
     */
    FuelTypesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load FuelsCategories List from service through data-source
     */
    FuelTypesComponent.prototype.loadFuelsCategoriesList = function (query) {
        var _this = this;
        if (query === void 0) { query = ''; }
        this.isLoadingResults = true;
        // let dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        // let dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        // let url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo +
        var url = '?SerachParam=' + query + '&Type=' + this.selectedType;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Categories' + url, { headers: this.headers })
            .subscribe(function (res) {
            if (res.success) {
                _this.isLoadingResults = false;
                var data = res.data.map(function (item) {
                    return {
                        id: item.id,
                        name: item.categoryName,
                        isActive: item.isActive,
                        creationDate: item.createdAt,
                        type: item.type
                    };
                });
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
     * Delete Reading
     *
     * @param _item: FuelModel
     */
    FuelTypesComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = "حذف الصنف";
        var _description = "هل أنت متأكد من حذف الصنف؟";
        var _waitDesciption = "جاري الحذف";
        var _deleteMessage = "لقد تم الحذف";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.http.delete(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Categories/' + _item.id, { headers: _this.headers })
                .subscribe(function (res) {
                _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
                _this.loadFuelsCategoriesList();
            }, function (err) {
                var msg = 'فشل في حذف الصنف';
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
    FuelTypesComponent.prototype.addReading = function () {
        var newReading = new _models_fuel_model__WEBPACK_IMPORTED_MODULE_7__["FuelModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: FuelModel
     */
    FuelTypesComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_fuel_edit_fuel_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FuelsEditDialogComponent"], {
            data: {
                reading: reading
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
            _this.loadFuelsCategoriesList();
        });
    };
    /**
     * Get file name of the exported excel file
     */
    FuelTypesComponent.prototype.getExcelFileName = function () {
        return 'اصناف الوقود' + '-' + new Date().toISOString().slice(0, 10);
    };
    FuelTypesComponent.ctorParameters = function () { return [
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
    ], FuelTypesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], FuelTypesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FuelTypesComponent.prototype, "searchInput", void 0);
    FuelTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'fuel-info',
            template: __webpack_require__(/*! raw-loader!./fuel-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/fuel-types/fuel-info/fuel-info.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./fuel-info.component.scss */ "./src/app/views/pages/configuration/fuel-types/fuel-info/fuel-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], FuelTypesComponent);
    return FuelTypesComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/pumps/models/pump.model.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/configuration/pumps/models/pump.model.ts ***!
  \**********************************************************************/
/*! exports provided: PumpModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpModel", function() { return PumpModel; });
var PumpModel = /** @class */ (function () {
    function PumpModel() {
    }
    PumpModel.prototype.clear = function () {
        this.id = 0;
        this.category = '';
        this.categoryId = 0;
        this.name = '';
        this.isActive = 'false';
        this.creationDate = new Date().toISOString().substr(0, 16);
    };
    PumpModel.prototype.initialize = function () {
        this.id = 1;
        this.category = 'Gasoline';
        this.name = 'Z';
        this.isActive = 'false';
        this.creationDate = new Date().toISOString().substr(0, 16);
    };
    return PumpModel;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/pumps/pumps-edit/pumps-edit.dialog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/pumps/pumps-edit/pumps-edit.dialog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PumpsEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpsEditDialogComponent", function() { return PumpsEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_pump_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/pump.model */ "./src/app/views/pages/configuration/pumps/models/pump.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var PumpsEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<PumpsReadingsEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param layoutUtilsService
     * @param http
     */
    function PumpsEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.http = http;
        this.hasFormErrors = false;
        this.viewLoading = false;
        // Get from API
        this.categories = [];
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    PumpsEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.pump = this.data.reading;
        this.createForm();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
        this.getCategories();
    };
    /**
     * On destroy
     */
    PumpsEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    PumpsEditDialogComponent.prototype.createForm = function () {
        this.pumpForm = this.fb.group({
            id: [this.pump.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [this.pump.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: [this.pump.categoryId, this.pump.id <= 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : ''],
            isActive: [this.pump.isActive, this.pump.id > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : '']
        });
    };
    /**
     * Returns page title
     */
    PumpsEditDialogComponent.prototype.getTitle = function () {
        if (this.pump.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0639\u062F\u0627\u062F '" + this.pump.name + "'";
        }
        return 'اضافة عداد جديد';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    PumpsEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.pumpForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    PumpsEditDialogComponent.prototype.getCategories = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Categories?Type=fuel', { headers: this.headers }).subscribe(function (res) {
            _this.categories = res.data.map(function (item) {
                return {
                    name: item.categoryName,
                    id: item.id
                };
            });
            _this.pumpForm.controls["category"].setValue(_this.pump.categoryId);
        });
    };
    /**
     * Returns prepared fuel price
     */
    PumpsEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.pumpForm.controls;
        var _pump = new _models_pump_model__WEBPACK_IMPORTED_MODULE_7__["PumpModel"]();
        _pump.id = this.pump.id;
        _pump.name = controls.name.value;
        _pump.categoryId = controls.category.value;
        _pump.isActive = controls.isActive.value;
        return _pump;
    };
    /**
     * On Submit
     */
    PumpsEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.pumpForm.controls;
        /** check form */
        if (this.pumpForm.invalid) {
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
     * Update Pumps
     *
     * @param _pump: PumpsModel
     */
    PumpsEditDialogComponent.prototype.updateReading = function (_pump) {
        var _this = this;
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/GasolinePumps', {
            id: _pump.id,
            name: _pump.name,
            // categoryId:  _pump.categoryId,
            // currentReading: 1,
            isActive: _pump.isActive
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _pump: _pump, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل العداد';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create Pumps
     *
     * @param _pump: PumpsModel
     */
    PumpsEditDialogComponent.prototype.createReading = function (_pump) {
        var _this = this;
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/GasolinePumps', {
            name: _pump.name,
            categoryId: _pump.categoryId,
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _pump: _pump, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة العداد';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    PumpsEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    PumpsEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    PumpsEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'pumps-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./pumps-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/pumps/pumps-edit/pumps-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], PumpsEditDialogComponent);
    return PumpsEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/pumps/pumps-info/pumps-info.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/pumps/pumps-info/pumps-info.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvY29uZmlndXJhdGlvbi9wdW1wcy9wdW1wcy1pbmZvL0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGNvbmZpZ3VyYXRpb25cXHB1bXBzXFxwdW1wcy1pbmZvXFxwdW1wcy1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFFRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2NvbmZpZ3VyYXRpb24vcHVtcHMvcHVtcHMtaW5mby9wdW1wcy1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGVDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuXHR3aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5hY3Rpb25zQ29sdW1uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcclxuXHR3aWR0aDogOCUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnJvdyB7XHJcblx0ZGl2IHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/configuration/pumps/pumps-info/pumps-info.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/pumps/pumps-info/pumps-info.component.ts ***!
  \************************************************************************************/
/*! exports provided: PumpsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpsComponent", function() { return PumpsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_pump_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/pump.model */ "./src/app/views/pages/configuration/pumps/models/pump.model.ts");
/* harmony import */ var _pumps_edit_pumps_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pumps-edit/pumps-edit.dialog.component */ "./src/app/views/pages/configuration/pumps/pumps-edit/pumps-edit.dialog.component.ts");
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
var PumpsComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialog: MatDialog
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     * @param translate: TranslateService
     * @param store: Store<AppState>
     */
    function PumpsComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['name', 'category', 'creationDate', 'isActive', 'actions']; //'isActive',
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
        this.fuelTypes = [];
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
    PumpsComponent.prototype.ngOnInit = function () {
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
        this.loadPumpsReadingsList();
    };
    /**
     * On Destroy
     */
    PumpsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load PumpsReadings List from service through data-source
     */
    PumpsComponent.prototype.loadPumpsReadingsList = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/GasolinePumps', { headers: this.headers })
            .subscribe(function (res) {
            if (res.success) {
                _this.isLoadingResults = false;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data.map(function (item) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { category: item.categoryName, creationDate: item.createdAt });
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
     * Delete Reading
     *
     * @param _item: PumpModel
     */
    PumpsComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = "حذف العداد";
        var _description = "هل أنت متأكد من حذف العداد؟";
        var _waitDesciption = "جاري الحذف";
        var _deleteMessage = "لقد تم الحذف";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.http.delete(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/GasolinePumps/' + _item.id, { headers: _this.headers })
                .subscribe(function (res) {
                _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
                _this.loadPumpsReadingsList();
            }, function (err) {
                var msg = 'فشل في حذف العداد';
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
    PumpsComponent.prototype.addReading = function () {
        var newReading = new _models_pump_model__WEBPACK_IMPORTED_MODULE_7__["PumpModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: PumpModel
     */
    PumpsComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_pumps_edit_pumps_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["PumpsEditDialogComponent"], {
            data: {
                reading: reading
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
            _this.loadPumpsReadingsList();
        });
    };
    /**
     * Get file name of the exported excel file
     */
    PumpsComponent.prototype.getExcelFileName = function () {
        return 'العدادات' + '-' + new Date().toISOString().slice(0, 10);
    };
    PumpsComponent.ctorParameters = function () { return [
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
    ], PumpsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], PumpsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PumpsComponent.prototype, "searchInput", void 0);
    PumpsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'pumps-info',
            template: __webpack_require__(/*! raw-loader!./pumps-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/pumps/pumps-info/pumps-info.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./pumps-info.component.scss */ "./src/app/views/pages/configuration/pumps/pumps-info/pumps-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], PumpsComponent);
    return PumpsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/shifts/models/shift.model.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/configuration/shifts/models/shift.model.ts ***!
  \************************************************************************/
/*! exports provided: ShiftModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftModel", function() { return ShiftModel; });
var ShiftModel = /** @class */ (function () {
    function ShiftModel() {
    }
    ShiftModel.prototype.clear = function () {
        this.id = 0;
        this.name = '';
        this.isActive = 'false';
        this.startDate = new Date().toISOString().substr(0, 16);
        this.endDate = new Date().toISOString().substr(0, 16);
    };
    return ShiftModel;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/shifts/shifts-edit/shifts-edit.dialog.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/shifts/shifts-edit/shifts-edit.dialog.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ShiftsEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftsEditDialogComponent", function() { return ShiftsEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_shift_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/shift.model */ "./src/app/views/pages/configuration/shifts/models/shift.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var ShiftsEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<shiftsReadingsEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param layoutUtilsService
     * @param http
     */
    function ShiftsEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
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
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ShiftsEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.shift = this.data.reading;
        this.createForm();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
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
    ShiftsEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    ShiftsEditDialogComponent.prototype.createForm = function () {
        this.shiftForm = this.fb.group({
            id: [this.shift.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [this.shift.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isActive: [this.shift.isActive, this.shift.id > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : ''],
            startDate: [this.shift.startDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endDate: [this.shift.endDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    /**
     * Returns page title
     */
    ShiftsEditDialogComponent.prototype.getTitle = function () {
        if (this.shift.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0634\u0641\u062A '" + this.shift.name + "'";
        }
        return 'اضافة شفت جديد';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    ShiftsEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.shiftForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    /**
     * Returns prepared fuel price
     */
    ShiftsEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.shiftForm.controls;
        var _shift = new _models_shift_model__WEBPACK_IMPORTED_MODULE_7__["ShiftModel"]();
        _shift.id = this.shift.id;
        _shift.name = controls.name.value;
        _shift.isActive = controls.isActive.value;
        _shift.startDate = controls.startDate.value;
        _shift.endDate = controls.endDate.value;
        return _shift;
    };
    /**
     * On Submit
     */
    ShiftsEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.shiftForm.controls;
        console.log(this.shift.id);
        console.log(this.shiftForm);
        /** check form */
        if (this.shiftForm.invalid) {
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
     * Update shift
     *
     * @param _shift: ShiftModel
     */
    ShiftsEditDialogComponent.prototype.updateReading = function (_shift) {
        // let startDate = new Date(+new Date(_shift.startDate) - this.tzoffset).toISOString().slice(0, 16);
        // let endDate = new Date(+new Date(_shift.endDate) - this.tzoffset).toISOString().slice(0, 16);
        var _this = this;
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/shifts', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _shift, { isActive: _shift.isActive, startTime: _shift.startDate.length < 8 ? _shift.startDate + ':00' : _shift.startDate, endTime: _shift.endDate.length < 8 ? _shift.endDate + ':00' : _shift.endDate }), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _shift: _shift, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل الشفت';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create shift
     *
     * @param _shift: ShiftModel
     */
    ShiftsEditDialogComponent.prototype.createReading = function (_shift) {
        // let startDate = new Date(+new Date(_shift.startDate) - this.tzoffset).toISOString().slice(0, 16);
        // let endDate = new Date(+new Date(_shift.endDate) - this.tzoffset).toISOString().slice(0, 16);
        var _this = this;
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/shifts', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _shift, { isActive: _shift.isActive, startTime: _shift.startDate.length < 8 ? _shift.startDate + ':00' : _shift.startDate, endTime: _shift.endDate.length < 8 ? _shift.endDate + ':00' : _shift.endDate }), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _shift: _shift, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة الشفت';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alert Close event */
    ShiftsEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    ShiftsEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    ShiftsEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'shifts-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./shifts-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/shifts/shifts-edit/shifts-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], ShiftsEditDialogComponent);
    return ShiftsEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/shifts/shifts-info/shifts-info.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/shifts/shifts-info/shifts-info.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvY29uZmlndXJhdGlvbi9zaGlmdHMvc2hpZnRzLWluZm8vQzpcXFVzZXJzXFxvbWVuXFxEZXNrdG9wXFxHaXRIdWJcXEZyb250LUthemVhaFxcZ2FzLXN0YXRpb24vc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcY29uZmlndXJhdGlvblxcc2hpZnRzXFxzaGlmdHMtaW5mb1xcc2hpZnRzLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBSWxCO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdsQjtFQUVFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvY29uZmlndXJhdGlvbi9zaGlmdHMvc2hpZnRzLWluZm8vc2hpZnRzLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZUNvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHQvLyBkaXJlY3Rpb246IGx0cjtcclxufVxyXG5cclxuLmFjdGlvbnNDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucm93IHtcclxuXHRkaXYge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/configuration/shifts/shifts-info/shifts-info.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/shifts/shifts-info/shifts-info.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ShiftsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftsComponent", function() { return ShiftsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_shift_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/shift.model */ "./src/app/views/pages/configuration/shifts/models/shift.model.ts");
/* harmony import */ var _shifts_edit_shifts_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shifts-edit/shifts-edit.dialog.component */ "./src/app/views/pages/configuration/shifts/shifts-edit/shifts-edit.dialog.component.ts");
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
var ShiftsComponent = /** @class */ (function () {
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
    function ShiftsComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['name', 'isActive', 'startDate', 'endDate', 'actions'];
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.selectedEmployee = '';
        this.selectedFuelType = '';
        this.selectedGasPump = '';
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(2021, 0, 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear() + 1, 0, 0) - this.tzoffset).toISOString().slice(0, 16);
        // Filter data
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
    ShiftsComponent.prototype.ngOnInit = function () {
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
        this.loadShiftsList();
    };
    /**
     * On Destroy
     */
    ShiftsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    ShiftsComponent.prototype.getTime = function (obj) {
        return (obj.hours > 9 ? obj.hours : '0' + obj.hours) + ':' +
            (obj.minutes > 9 ? obj.minutes : '0' + obj.minutes) + ':' +
            (obj.seconds > 9 ? obj.seconds : '0' + obj.seconds);
    };
    /**
     * Load Shifts List from service through data-source
     */
    ShiftsComponent.prototype.loadShiftsList = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Shifts', { headers: this.headers })
            .subscribe(function (res) {
            if (res.success) {
                _this.isLoadingResults = false;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data.map(function (item) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { startDate: _this.getTime(item.startTime), endDate: _this.getTime(item.endTime) });
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
     * Delete Reading
     *
     * @param _item: ShiftModel
     */
    ShiftsComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = "حذف المستخدم";
        var _description = "هل أنت متأكد من حذف المستخدم؟";
        var _waitDesciption = "جاري الحذف";
        var _deleteMessage = "لقد تم الحذف";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.http.delete(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Shifts/' + _item.id, { headers: _this.headers })
                .subscribe(function (res) {
                _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
                _this.loadShiftsList();
            }, function (err) {
                var msg = 'فشل في حذف الشفت';
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
    ShiftsComponent.prototype.addReading = function () {
        var newReading = new _models_shift_model__WEBPACK_IMPORTED_MODULE_7__["ShiftModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: ShiftModel
     */
    ShiftsComponent.prototype.editReading = function (reading) {
        var _this = this;
        console.log(reading);
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_shifts_edit_shifts_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ShiftsEditDialogComponent"], {
            data: {
                reading: reading
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
            _this.loadShiftsList();
        });
    };
    /**
     * Get file name of the exported excel file
     */
    ShiftsComponent.prototype.getExcelFileName = function () {
        return 'الشفتات' + '-' + new Date().toISOString().slice(0, 10);
    };
    ShiftsComponent.ctorParameters = function () { return [
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
    ], ShiftsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ShiftsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ShiftsComponent.prototype, "searchInput", void 0);
    ShiftsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'shifts-info',
            template: __webpack_require__(/*! raw-loader!./shifts-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/shifts/shifts-info/shifts-info.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./shifts-info.component.scss */ "./src/app/views/pages/configuration/shifts/shifts-info/shifts-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], ShiftsComponent);
    return ShiftsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/suppliers/models/supplier.model.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/configuration/suppliers/models/supplier.model.ts ***!
  \******************************************************************************/
/*! exports provided: SupplierModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierModel", function() { return SupplierModel; });
var SupplierModel = /** @class */ (function () {
    function SupplierModel() {
    }
    SupplierModel.prototype.clear = function () {
        this.id = 0;
        this.name = '';
        this.mobileNumber = '';
        this.telephone = '';
        this.type = '';
        this.isActive = 'false';
        this.creationDate = new Date().toISOString().substr(0, 16);
    };
    return SupplierModel;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/suppliers/supplier-edit/supplier-edit.dialog.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/suppliers/supplier-edit/supplier-edit.dialog.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SuppliersEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersEditDialogComponent", function() { return SuppliersEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_supplier_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/supplier.model */ "./src/app/views/pages/configuration/suppliers/models/supplier.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var SuppliersEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<SuppliersReadingsEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param layoutUtilsService
     * @param http
     */
    function SuppliersEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
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
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    SuppliersEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.supplier = this.data.reading;
        this.createForm();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
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
    SuppliersEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    SuppliersEditDialogComponent.prototype.createForm = function () {
        this.supplierForm = this.fb.group({
            id: [this.supplier.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [this.supplier.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobileNumber: [this.supplier.mobileNumber, ''],
            telephone: [this.supplier.telephone, ''],
            type: [this.supplier.type.toLowerCase(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isActive: [this.supplier.isActive, this.supplier.id > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : '']
        });
    };
    /**
     * Returns page title
     */
    SuppliersEditDialogComponent.prototype.getTitle = function () {
        if (this.supplier.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0632\u0648\u062F '" + this.supplier.name + "'";
        }
        return 'اضافة المزود جديد';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    SuppliersEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.supplierForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    /**
     * Returns prepared supplier price
     */
    SuppliersEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.supplierForm.controls;
        var _supplier = new _models_supplier_model__WEBPACK_IMPORTED_MODULE_7__["SupplierModel"]();
        _supplier.id = this.supplier.id;
        _supplier.name = controls.name.value;
        _supplier.mobileNumber = controls.mobileNumber.value;
        _supplier.telephone = controls.telephone.value;
        _supplier.type = controls.type.value;
        _supplier.isActive = controls.isActive.value;
        return _supplier;
    };
    /**
     * On Submit
     */
    SuppliersEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.supplierForm.controls;
        /** check form */
        if (this.supplierForm.invalid) {
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
     * Update supplier price
     *
     * @param _supplier: supplierPricesModel
     */
    SuppliersEditDialogComponent.prototype.updateReading = function (_supplier) {
        var _this = this;
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Suppliers', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _supplier, { mobileNumber: _supplier.mobileNumber.toString(), telephone: _supplier.telephone.toString(), isActive: _supplier.isActive }), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _supplier: _supplier, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل المزود';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create supplier price
     *
     * @param _supplier: supplierPricesModel
     */
    SuppliersEditDialogComponent.prototype.createReading = function (_supplier) {
        var _this = this;
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/Suppliers', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _supplier, { mobileNumber: _supplier.mobileNumber.toString(), telephone: _supplier.telephone.toString() }), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _supplier: _supplier, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة المزود';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    SuppliersEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    SuppliersEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    SuppliersEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'supplier-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./supplier-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/suppliers/supplier-edit/supplier-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], SuppliersEditDialogComponent);
    return SuppliersEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/suppliers/supplier-info/supplier-info.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/suppliers/supplier-info/supplier-info.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvY29uZmlndXJhdGlvbi9zdXBwbGllcnMvc3VwcGxpZXItaW5mby9DOlxcVXNlcnNcXG9tZW5cXERlc2t0b3BcXEdpdEh1YlxcRnJvbnQtS2F6ZWFoXFxnYXMtc3RhdGlvbi9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxjb25maWd1cmF0aW9uXFxzdXBwbGllcnNcXHN1cHBsaWVyLWluZm9cXHN1cHBsaWVyLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR2xCO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdsQjtFQUVFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvY29uZmlndXJhdGlvbi9zdXBwbGllcnMvc3VwcGxpZXItaW5mby9zdXBwbGllci1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGVDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuXHR3aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5hY3Rpb25zQ29sdW1uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcclxuXHR3aWR0aDogOCUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnJvdyB7XHJcblx0ZGl2IHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/configuration/suppliers/supplier-info/supplier-info.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/suppliers/supplier-info/supplier-info.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_supplier_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/supplier.model */ "./src/app/views/pages/configuration/suppliers/models/supplier.model.ts");
/* harmony import */ var _supplier_edit_supplier_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../supplier-edit/supplier-edit.dialog.component */ "./src/app/views/pages/configuration/suppliers/supplier-edit/supplier-edit.dialog.component.ts");
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
var SupplierComponent = /** @class */ (function () {
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
    function SupplierComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['name', 'mobileNumber', 'telephone', 'type', 'isActive', 'creationDate', 'actions'];
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.selectedEmployee = '';
        this.selectedType = '';
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(2021, 0, 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear() + 1, 0, 0) - this.tzoffset).toISOString().slice(0, 16);
        // Filter data
        // TODO: Get using APIs
        this.Supplier = [];
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
    SupplierComponent.prototype.ngOnInit = function () {
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
        this.loadClientsReadingsList();
    };
    /**
     * On Destroy
     */
    SupplierComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load ClientsReadings List from service through data-source
     */
    SupplierComponent.prototype.loadClientsReadingsList = function (searchParam) {
        var _this = this;
        if (searchParam === void 0) { searchParam = ''; }
        this.isLoadingResults = true;
        // let dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        // let dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        // let url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo +
        var url = '?SerachParam=' + searchParam + '&Type=' + this.selectedType;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Suppliers' + url, { headers: this.headers })
            .subscribe(function (res) {
            if (res.success) {
                _this.isLoadingResults = false;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data.map(function (item) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { creationDate: item.createdAt });
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
     * Delete Reading
     *
     * @param _item: SupplierModel
     */
    SupplierComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = 'حذف المزود';
        var _description = 'هل أنت متأكد من حذف المزود';
        var _waitDesciption = 'جاري الحذف';
        var _deleteMessage = 'لقد تم الحذف';
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.http.delete(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Suppliers/' + _item.id, { headers: _this.headers })
                .subscribe(function (res) {
                _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
                _this.loadClientsReadingsList();
            }, function (err) {
                var msg = 'فشل في حذف المزود';
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
    SupplierComponent.prototype.addReading = function () {
        var newReading = new _models_supplier_model__WEBPACK_IMPORTED_MODULE_7__["SupplierModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: SupplierModel
     */
    SupplierComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_supplier_edit_supplier_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["SuppliersEditDialogComponent"], {
            data: {
                reading: reading
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
            _this.loadClientsReadingsList();
        });
    };
    /**
     * Get file name of the exported excel file
     */
    SupplierComponent.prototype.getExcelFileName = function () {
        return 'المزودون' + '-' + new Date().toISOString().slice(0, 10);
    };
    SupplierComponent.ctorParameters = function () { return [
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
    ], SupplierComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], SupplierComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SupplierComponent.prototype, "searchInput", void 0);
    SupplierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'supplier-info',
            template: __webpack_require__(/*! raw-loader!./supplier-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/suppliers/supplier-info/supplier-info.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./supplier-info.component.scss */ "./src/app/views/pages/configuration/suppliers/supplier-info/supplier-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], SupplierComponent);
    return SupplierComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/users/models/user.model.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/configuration/users/models/user.model.ts ***!
  \**********************************************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    UserModel.prototype.clear = function () {
        this.userId = 0;
        this.roleId = '';
        this.roleName = '';
        this.name = '';
        this.password = '';
        this.userName = '';
        this.salary = '';
        this.isActive = 'false';
        this.startDate = new Date().toISOString().substr(0, 16);
        this.endDate = new Date().toISOString().substr(0, 16);
    };
    return UserModel;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/users/users-edit/users-edit.dialog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/users/users-edit/users-edit.dialog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: UsersEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEditDialogComponent", function() { return UsersEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/user.model */ "./src/app/views/pages/configuration/users/models/user.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var UsersEditDialogComponent = /** @class */ (function () {
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
    function UsersEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
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
        // TODO: Get from API
        this.roles = [];
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UsersEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.user = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.data.reading, { id: this.data.reading.userId });
        this.createForm();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
        this.getRoles();
    };
    /**
     * On destroy
     */
    UsersEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    UsersEditDialogComponent.prototype.createForm = function () {
        var startDate = this.user.startDate;
        if (this.user.userId > 0 && startDate !== '-')
            startDate = new Date(+new Date(this.user.startDate) - this.tzoffset).toISOString().substr(0, 16);
        var endDate = this.user.endDate;
        if (this.user.userId > 0 && endDate !== '-')
            endDate = new Date(+new Date(this.user.endDate) - this.tzoffset).toISOString().substr(0, 16);
        this.userForm = this.fb.group({
            id: [this.user.userId, (this.user.userId === null || this.user.userId === undefined) ? '' : _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [this.user.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // userName: [this.user.userName, Validators.required],
            // password: [this.user.password, this.user.userId > 0 ? '' : Validators.compose([
            // 	Validators.required,
            // 	Validators.minLength(8)
            // ])],
            roleId: [this.user.roleId, this.user.userId > 0 ? '' : _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // salary: [this.user.salary, Validators.required],
            isActive: [this.user.isActive, ''],
            startDate: [startDate, ''],
            endDate: [endDate, ''],
        });
    };
    /**
     * Returns page title
     */
    UsersEditDialogComponent.prototype.getTitle = function () {
        if (this.user.userId > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 '" + this.user.name + "'";
        }
        return 'اضافة مستخدم جديد';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    UsersEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.userForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    UsersEditDialogComponent.prototype.getRoles = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/roles', { headers: this.headers }).subscribe(function (res) {
            _this.roles = res.data;
            _this.userForm.controls["roleId"].setValue(_this.user.roleId);
        });
    };
    /**
     * Returns prepared fuel price
     */
    UsersEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.userForm.controls;
        var _user = new _models_user_model__WEBPACK_IMPORTED_MODULE_7__["UserModel"]();
        _user.userId = this.user.userId;
        _user.name = controls.name.value;
        // _user.userName = controls.userName.value;
        // _user.password = controls.password.value;
        _user.roleId = controls.roleId.value;
        // _user.salary = controls.salary.value;
        _user.isActive = controls.isActive.value;
        _user.startDate = controls.startDate.value;
        _user.endDate = controls.endDate.value;
        return _user;
    };
    /**
     * On Submit
     */
    UsersEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.userForm.controls;
        /** check form */
        if (this.userForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var editedReading = this.prepareReading();
        if (editedReading.userId > 0) {
            this.updateReading(editedReading);
        }
        else {
            this.createReading(editedReading);
        }
    };
    /**
     * Update User
     *
     * @param _user: ShiftModel
     */
    UsersEditDialogComponent.prototype.updateReading = function (_user) {
        var _this = this;
        var startDate = null;
        var endDate = null;
        if (_user.startDate !== '-')
            startDate = new Date(+new Date(_user.startDate) - this.tzoffset).toISOString().slice(0, 16);
        if (_user.endDate !== '-')
            endDate = new Date(+new Date(_user.endDate) - this.tzoffset).toISOString().slice(0, 16);
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/users', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _user, { 
            // salary: +_user.salary,
            username: _user.userName, isActive: _user.isActive, 
            // vacationsCountPerYear: 14,
            startDate: startDate,
            endDate: endDate }), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _user: _user, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل المستخدم';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create User
     *
     * @param _user: ShiftModel
     */
    UsersEditDialogComponent.prototype.createReading = function (_user) {
        var _this = this;
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/users', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _user, { 
            // salary: +_user.salary,
            username: _user.userName }), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _user: _user, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة المستخدم';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    UsersEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    UsersEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    UsersEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'users-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./users-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/users/users-edit/users-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], UsersEditDialogComponent);
    return UsersEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/configuration/users/users-info/users-info.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/users/users-info/users-info.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvY29uZmlndXJhdGlvbi91c2Vycy91c2Vycy1pbmZvL0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGNvbmZpZ3VyYXRpb25cXHVzZXJzXFx1c2Vycy1pbmZvXFx1c2Vycy1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUlsQjtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFFRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2NvbmZpZ3VyYXRpb24vdXNlcnMvdXNlcnMtaW5mby91c2Vycy1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGVDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuXHR3aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0Ly8gZGlyZWN0aW9uOiBsdHI7XHJcbn1cclxuXHJcbi5hY3Rpb25zQ29sdW1uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcclxuXHR3aWR0aDogOCUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnJvdyB7XHJcblx0ZGl2IHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/configuration/users/users-info/users-info.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/configuration/users/users-info/users-info.component.ts ***!
  \************************************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/user.model */ "./src/app/views/pages/configuration/users/models/user.model.ts");
/* harmony import */ var _users_edit_users_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../users-edit/users-edit.dialog.component */ "./src/app/views/pages/configuration/users/users-edit/users-edit.dialog.component.ts");
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
var UsersComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialog: MatDialog
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     * @param translate: TranslateService
     * @param store: Store<AppState>
     */
    function UsersComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['name', 'roleName', 'isActive', 'startDate', 'endDate', 'actions']; // 'salary', 'userName',
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.selectedEmployee = '';
        this.selectedFuelType = '';
        this.selectedGasPump = '';
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(2021, 0, 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear() + 1, 0, 0) - this.tzoffset).toISOString().slice(0, 16);
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
    UsersComponent.prototype.ngOnInit = function () {
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
    UsersComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load UsersReadings List from service through data-source
     */
    UsersComponent.prototype.loadUsersReadingsList = function (query) {
        var _this = this;
        if (query === void 0) { query = ''; }
        this.isLoadingResults = true;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo + '&SerachParam=' + query;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/users' + url, { headers: this.headers })
            .subscribe(function (res) {
            if (res.success) {
                _this.isLoadingResults = false;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data);
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
     * Delete Reading
     *
     * @param _item: ShiftModel
     */
    UsersComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = "حذف المستخدم";
        var _description = "هل أنت متأكد من حذف المستخدم؟";
        var _waitDesciption = "جاري الحذف";
        var _deleteMessage = "لقد تم الحذف";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.http.delete(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Users/' + _item.userId, { headers: _this.headers })
                .subscribe(function (res) {
                _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
                _this.loadUsersReadingsList();
            }, function (err) {
                var msg = 'فشل في حذف المستخدم';
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
    UsersComponent.prototype.addReading = function () {
        var newReading = new _models_user_model__WEBPACK_IMPORTED_MODULE_7__["UserModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: ShiftModel
     */
    UsersComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.userId <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.userId > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_users_edit_users_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["UsersEditDialogComponent"], {
            data: {
                reading: reading
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
    UsersComponent.prototype.getExcelFileName = function () {
        return 'المستخدمين' + '-' + new Date().toISOString().slice(0, 10);
    };
    UsersComponent.ctorParameters = function () { return [
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
    ], UsersComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], UsersComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UsersComponent.prototype, "searchInput", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'users-info',
            template: __webpack_require__(/*! raw-loader!./users-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/configuration/users/users-info/users-info.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./users-info.component.scss */ "./src/app/views/pages/configuration/users/users-info/users-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-configuration-configuration-module.js.map