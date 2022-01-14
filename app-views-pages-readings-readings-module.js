(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-readings-readings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/readings/fuel-types/fuel-types-readings/fuel-types-readings.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/readings/fuel-types/fuel-types-readings/fuel-types-readings.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>احصائيات الوقود</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedFuelType\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"fuelType.id\" *ngFor=\"let fuelType of fuelTypes\">\r\n\t\t\t\t\t\t\t\t\t\t{{fuelType.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<strong>بحث</strong>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t</mat-hint>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t</mat-form-field>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t(click)=\"resetFilters()\">\r\n\t\t\t\t\tاعادة ضبط\r\n\t\t\t\t</button>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- start::Summary -->\r\n\t\t<div *ngIf=\"dataSource.data.length > 0\">\r\n\t\t\t<div class=\"form-group kt-form__group row m-0\">\r\n\t\t\t\t<div class=\"col-md-6 mb-0\">\r\n\t\t\t\t\t<ngb-alert type=\"info\" [dismissible]=\"false\">\r\n\t\t\t\t\t\tالكمية الكاملة: {{totalAmount.toFixed(2)}}\r\n\t\t\t\t\t</ngb-alert>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6 mb-0\">\r\n\t\t\t\t\t<ngb-alert type=\"info\" [dismissible]=\"false\">\r\n\t\t\t\t\t\tالسعر الكامل: {{totalPrice.toFixed(2)}}\r\n\t\t\t\t\t</ngb-alert>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end::Summary -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: 'احصائيات الوقود', Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortDirection=\"asc\" matSortDisableClear matTableExporter #exporter=\"matTableExporter\">\r\n\t\t\t\t<ng-container matColumnDef=\"category\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الصنف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.category}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"amount\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الكمية</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.amount}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"unitPrice\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>سعر الوحدة</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.unitPrice}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"totalPrice\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>السعر كامل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.totalPrice}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"date\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\" dir=\"ltr\" class=\"align-right\">{{reading.date}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/readings/pumps/pumps-readings/pumps-readings.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/readings/pumps/pumps-readings/pumps-readings.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>قراءات العدادات</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedFuelType\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"fuelType.id\" *ngFor=\"let fuelType of fuelTypes\">\r\n\t\t\t\t\t\t\t\t\t\t{{fuelType.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedGasPump\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"gasPump.id\" *ngFor=\"let gasPump of gasPumps\">{{gasPump.name}}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>العداد</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<strong>بحث</strong>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t</mat-hint>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t</mat-form-field>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t(click)=\"resetFilters()\">\r\n\t\t\t\t\tاعادة ضبط\r\n\t\t\t\t</button>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- start::Summary -->\r\n\t\t<div *ngIf=\"dataSource.data.length > 0\">\r\n\t\t\t<div class=\"form-group kt-form__group row m-0\">\r\n\t\t\t\t<div class=\"col-md-6 mb-0\">\r\n\t\t\t\t\t<ngb-alert type=\"info\" [dismissible]=\"false\">\r\n\t\t\t\t\t\tالكمية الكاملة: {{totalAmount.toFixed(2)}}\r\n\t\t\t\t\t</ngb-alert>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6 mb-0\">\r\n\t\t\t\t\t<ngb-alert type=\"info\" [dismissible]=\"false\">\r\n\t\t\t\t\t\tالسعر الكامل: {{totalPrice.toFixed(2)}}\r\n\t\t\t\t\t</ngb-alert>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end::Summary -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: 'قراءات العدادات', Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"gpNumber\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\">\r\n\t\t\t\t<ng-container matColumnDef=\"gpNumber\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>رقم العداد</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.gpNumber}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"initalReading\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>القراءة الاولية</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.initalReading}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"finalReading\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>القراءة النهائية</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.finalReading}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"amount\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الكمية</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.amount}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"unitPrice\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>سعر الوحدة</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.unitPrice}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"totalPrice\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>السعر كامل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.totalPrice}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"date\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\" dir=\"ltr\" class=\"align-right\">{{reading.date}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/readings/readings.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/readings/readings.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n\t<mat-tab label=\"قراءات الموظفين\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<gas-users-readings [employees]=\"employees\" [fuelTypes]=\"fuelTypes\"\r\n\t\t\t\t\t\t\t\t\t[gasPumps]=\"gasPumps\" [shifts]=\"shifts\"></gas-users-readings>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n\t<mat-tab label=\"قراءات العدادات\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<gas-pumps-readings [fuelTypes]=\"fuelTypes\"\r\n\t\t\t\t\t\t\t\t\t[gasPumps]=\"gasPumps\"></gas-pumps-readings>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n\t<mat-tab label=\"احصائيات الوقود\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<gas-fuel-types-readings [fuelTypes]=\"fuelTypes\"></gas-fuel-types-readings>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n\t<mat-tab label=\"محصلة قراءات الموظفين\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<reading-results-readings [employees]=\"employees\" [shifts]=\"shifts\"></reading-results-readings>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n</mat-tab-group>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/readings/users-readings-results/reading-results.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/readings/users-readings-results/reading-results.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>محصلة قراءات الموظفين</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<!-- 'm  margin-bottom-10-mobile' for adaptive make-up  -->\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedEmployee\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"employee.id\" *ngFor=\"let employee of employees\">\r\n\t\t\t\t\t\t\t\t\t\t{{employee.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الموظف</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<strong>بحث</strong>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t</mat-hint>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t</mat-form-field>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t(click)=\"resetFilters()\">\r\n\t\t\t\t\tاعادة ضبط\r\n\t\t\t\t</button>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- start::Summary -->\r\n\t\t<!-- <div *ngIf=\"dataSource.data.length > 0\">\r\n\t\t\t<div class=\"form-group kt-form__group row m-0\">\r\n\t\t\t\t<div class=\"col-md-6 mb-0\">\r\n\t\t\t\t\t<ngb-alert type=\"info\" [dismissible]=\"false\">\r\n\t\t\t\t\t\tالكمية الكاملة: {{totalAmount.toFixed(2)}}\r\n\t\t\t\t\t</ngb-alert>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6 mb-0\">\r\n\t\t\t\t\t<ngb-alert type=\"info\" [dismissible]=\"false\">\r\n\t\t\t\t\t\tالسعر الكامل: {{totalPrice.toFixed(2)}}\r\n\t\t\t\t\t</ngb-alert>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n\t\t<!-- end::Summary -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: 'محصلة قراءات الموظفين', Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortDirection=\"asc\" matSortDisableClear matTableExporter #exporter=\"matTableExporter\"\r\n\t\t\t\t[hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"date\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\" dir=\"ltr\" class=\"align-right\">{{reading.date}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"userName\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الموظف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.userName}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"shift\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الشفت</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.shift}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"virtualSummation\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>المجموع الافتراضي</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.virtualSummation}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"oils\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الزيوت</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.oils}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"discounts\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الخصومات</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.discounts}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"coupons\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الكوبونات</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.coupons}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"checks\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الشيكات</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.checks}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"deliveredMoneyByEmployee\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>النقد الحقيقي</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.deliveredMoneyByEmployee}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"totalCashEmployeeShouldDeliver\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>النقد الكلي</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.totalCashEmployeeShouldDeliver}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"difference\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الفرق</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.difference}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(reading)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\"\r\n\t\t\t\t[length]=\"dataSource.data.length\" [showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/readings/users-readings-results/readings-results-edit/readings-results-edit.dialog.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/readings/users-readings-results/readings-results-edit/readings-results-edit.dialog.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"readingForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"الموظف\" formControlName=\"userId\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"employee.id\" *ngFor=\"let employee of employees\">\r\n\t\t\t\t\t\t\t\t{{employee.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الموظف</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>الموظف</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"الشفت\" formControlName=\"shift\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"shift.id\" *ngFor=\"let shift of shifts\">\r\n\t\t\t\t\t\t\t\t{{shift.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الشفت</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>الشفت</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"قيمة الخصومات\" formControlName=\"discounts\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الخصومات</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tالرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الخصومات</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"قيمة الكوبونات\" formControlName=\"coupons\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الكوبونات</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tالرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الكوبونات</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"قيمة الزيوت\" formControlName=\"oils\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الزيوت</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tالرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الزيوت</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"قيمة الشيكات\" formControlName=\"checks\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الشيكات</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tالرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الشيكات</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"النقد الحقيقي\"\r\n\t\t\t\t\t\t\tformControlName=\"deliveredMoneyByEmployee\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>النقد الحقيقي</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tالرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>النقد الحقيقي</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"datetime-local\" formControlName=\"readingDate\" required\r\n\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>تاريخ القراءة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/readings/users/users-readings-edit/users-readings-edit.dialog.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/readings/users/users-readings-edit/users-readings-edit.dialog.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"readingForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"userReading.userId > 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-label>العداد</mat-label>\r\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"العداد\" aria-label=\"العداد\" matInput [matAutocomplete]=\"auto\"\r\n\t\t\t\t\t\t\t[formControl]=\"readingForm.get('gpNumber')\">\r\n\t\t\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"gasPump.name\" (onSelectionChange)=\"selectedPumpId = gasPump.id\"\r\n\t\t\t\t\t\t\t\t*ngFor=\"let gasPump of filteredOptions | async\">\r\n\t\t\t\t\t\t\t\t{{gasPump.name}}\r\n\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>رقم العداد</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>العداد</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"userReading.userId > 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"القراءة الأولية\"\r\n\t\t\t\t\t\t\tformControlName=\"shiftInitalReading\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>القراءة الأولية</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tالرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>القراءة الأولية</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"userReading.userId > 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"القراءة النهائية\"\r\n\t\t\t\t\t\t\tformControlName=\"shiftFinalReading\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>القراءة النهائية</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tالرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>القراءة النهائية</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"userReading.userId <= 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"الموظف\" formControlName=\"userId\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"employee.id\" *ngFor=\"let employee of employees\">\r\n\t\t\t\t\t\t\t\t{{employee.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الموظف</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>الموظف</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"userReading.userId <= 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"الشفت\" formControlName=\"shift\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"shift.id\" *ngFor=\"let shift of shifts\">\r\n\t\t\t\t\t\t\t\t{{shift.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الشفت</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>الشفت</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"userReading.userId <= 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"قيمة الخصومات\" formControlName=\"discounts\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الخصومات</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tالرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الخصومات</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"userReading.userId <= 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"قيمة الكوبونات\" formControlName=\"coupons\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الكوبونات</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tالرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الكوبونات</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"userReading.userId <= 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"قيمة الزيوت\" formControlName=\"oils\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الزيوت</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tالرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الزيوت</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"userReading.userId <= 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"قيمة الشيكات\" formControlName=\"checks\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الشيكات</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tالرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>قيمة الشيكات</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"userReading.userId <= 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"النقد الحقيقي\"\r\n\t\t\t\t\t\t\tformControlName=\"deliveredMoneyByEmployee\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>النقد الحقيقي</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tالرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>النقد الحقيقي</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-10-mobile\" *ngIf=\"userReading.userId <= 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"datetime-local\" formControlName=\"readingDate\" required\r\n\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>تاريخ القراءة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<span *ngIf=\"userReading.userId < 1\">\r\n\t\t\t\t<form class=\"kt-form\" [formGroup]=\"gsReadings[i].validator\"\r\n\t\t\t\t\t*ngFor=\"let element of numberOfReadings; let i = index\">\r\n\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-label>العداد</mat-label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"العداد\" aria-label=\"العداد\" matInput\r\n\t\t\t\t\t\t\t\t\t[matAutocomplete]=\"auto\" [formControl]=\"gsReadings[i].validator.get('gpNumber')\">\r\n\t\t\t\t\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"gasPump.name\"\r\n\t\t\t\t\t\t\t\t\t\t(onSelectionChange)=\"gsReadings[i].gpNumber = gasPump.id\"\r\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let gasPump of gsReadings[i].filteredOptions | async\">\r\n\t\t\t\t\t\t\t\t\t\t{{gasPump.name}}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t\t\t<strong>رقم العداد</strong>\r\n\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>العداد</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"القراءة الأولية\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"shiftInitalReading\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"gsReadings[i].shiftInitalReading\" />\r\n\t\t\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t\t\t<strong>القراءة الأولية</strong>\r\n\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tالرجاء ادخال\r\n\t\t\t\t\t\t\t\t\t<strong>القراءة الأولية</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" style=\"position: relative;\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"القراءة النهائية\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"shiftFinalReading\" [(ngModel)]=\"gsReadings[i].shiftFinalReading\" />\r\n\t\t\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t\t\t<strong>القراءة النهائية</strong>\r\n\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tالرجاء ادخال\r\n\t\t\t\t\t\t\t\t\t<strong>القراءة النهائية</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<span class=\"material-icons close\" (click)=\"deleteGSReading(i)\">\r\n\t\t\t\t\t\t\t\tclose\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\" *ngIf=\"i < numberOfReadings.length - 1\"\r\n\t\t\t\t\t\tstyle=\"margin-bottom: 0;\"></div>\r\n\t\t\t\t</form>\r\n\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\t(click)=\"resetGSReading()\">\r\n\t\t\t\t\t\t\tاعادة ضبط\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"numberOfReadings.push(1)\">\r\n\t\t\t\t\t\t\tاضافة قراءة عداد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/readings/users/users-readings/users-readings.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/readings/users/users-readings/users-readings.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>قراءات الموظفين</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"قراءة جديدة\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة قراءة</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<!-- 'm  margin-bottom-10-mobile' for adaptive make-up  -->\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedEmployee\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"employee.id\" *ngFor=\"let employee of employees\">\r\n\t\t\t\t\t\t\t\t\t\t{{employee.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الموظف</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedFuelType\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"fuelType.id\" *ngFor=\"let fuelType of fuelTypes\">\r\n\t\t\t\t\t\t\t\t\t\t{{fuelType.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedGasPump\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"gasPump.id\" *ngFor=\"let gasPump of gasPumps\">{{gasPump.name}}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>العداد</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedShift\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"shift.id\" *ngFor=\"let shift of shifts\">{{shift.name}}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الشفت</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<strong>بحث</strong>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t</mat-hint>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t</mat-form-field>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t(click)=\"resetFilters()\">\r\n\t\t\t\t\tاعادة ضبط\r\n\t\t\t\t</button>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\r\n\t\t<!-- start::Summary -->\r\n\t\t<div *ngIf=\"dataSource.data.length > 0\">\r\n\t\t\t<div class=\"form-group kt-form__group row m-0\">\r\n\t\t\t\t<div class=\"col-md-6 mb-0\">\r\n\t\t\t\t\t<ngb-alert type=\"info\" [dismissible]=\"false\">\r\n\t\t\t\t\t\tالكمية الكاملة: {{totalAmount.toFixed(2)}}\r\n\t\t\t\t\t</ngb-alert>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6 mb-0\">\r\n\t\t\t\t\t<ngb-alert type=\"info\" [dismissible]=\"false\">\r\n\t\t\t\t\t\tالسعر الكامل: {{totalPrice.toFixed(2)}}\r\n\t\t\t\t\t</ngb-alert>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end::Summary -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortDirection=\"asc\" matSortDisableClear matTableExporter #exporter=\"matTableExporter\"\r\n\t\t\t\t[hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"readingDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ\r\n\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\" dir=\"ltr\" class=\"align-right\">{{reading.readingDate}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"gpNumber\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>العداد</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.gpNumber}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"userName\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الموظف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.userName}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"shift\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الشفت</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.shift}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"shiftInitalReading\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>القراءة الاولية</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.shiftInitalReading}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"shiftFinalReading\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>القراءة النهائية</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.shiftFinalReading}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"amount\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الكمية</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.amount}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"unitPrice\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>سعر الوحدة</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.unitPrice}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"totalPrice\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>السعر الكامل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.totalPrice}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<!-- <ng-container matColumnDef=\"discounts\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الخصومات</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.discounts}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"coupons\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الكوبونات</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.coupons}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"shiftStartDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>بداية الشفت\r\n\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\" dir=\"ltr\" class=\"align-right\">{{reading.shiftStartDate}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"shiftEndDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>نهاية الشفت\r\n\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\" dir=\"ltr\" class=\"align-right\">{{reading.shiftEndDate}}</mat-cell>\r\n\t\t\t\t</ng-container> -->\r\n\r\n\t\t\t\t<!-- <ng-container matColumnDef=\"email\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Email</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\" class=\"email-cell\">\r\n\t\t\t\t\t\t<a href=\"ecommerce/readings#\" class=\"kt-link\">{{reading.email}}</a>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"gender\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Gender</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.gender}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"status\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">\r\n\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\tclass=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--{{ getItemCssClassByStatus(reading.status) }} kt-badge--wide\">{{\r\n\t\t\t\t\t\t\tgetItemStatusString(reading.status) }}</span>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"type\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Type</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">\r\n\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\tclass=\"kt-badge kt-badge--{{ getItemCssClassByType(reading.type) }} kt-badge--dot\"></span>&nbsp;\r\n\t\t\t\t\t\t<span class=\"kt--font-bold kt-font-{{ getItemCssClassByType(reading.type) }}\">{{\r\n\t\t\t\t\t\t\tgetItemTypeString(reading.type) }}</span>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container> -->\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(reading)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(reading)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<!--\r\n\t\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" matTooltip=\"More actions\">\r\n\t\t\t\t\t\t\t<mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<mat-menu #menu=\"matMenu\">\r\n\t\t\t\t\t\t\t<button mat-menu-item>\r\n\t\t\t\t\t\t\t\t<mat-icon>dialpad</mat-icon>\r\n\t\t\t\t\t\t\t\t<span>Redial</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button mat-menu-item disabled>\r\n\t\t\t\t\t\t\t\t<mat-icon>voicemail</mat-icon>\r\n\t\t\t\t\t\t\t\t<span>Check voicemail</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button mat-menu-item>\r\n\t\t\t\t\t\t\t\t<mat-icon>notifications_off</mat-icon>\r\n\t\t\t\t\t\t\t\t<span>Disable alerts</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</mat-menu> -->\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/readings/fuel-types/fuel-types-readings/fuel-types-readings.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/pages/readings/fuel-types/fuel-types-readings/fuel-types-readings.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcmVhZGluZ3MvZnVlbC10eXBlcy9mdWVsLXR5cGVzLXJlYWRpbmdzL0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXHJlYWRpbmdzXFxmdWVsLXR5cGVzXFxmdWVsLXR5cGVzLXJlYWRpbmdzXFxmdWVsLXR5cGVzLXJlYWRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFFRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JlYWRpbmdzL2Z1ZWwtdHlwZXMvZnVlbC10eXBlcy1yZWFkaW5ncy9mdWVsLXR5cGVzLXJlYWRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGVDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuXHR3aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5hY3Rpb25zQ29sdW1uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcclxuXHR3aWR0aDogOCUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnJvdyB7XHJcblx0ZGl2IHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/readings/fuel-types/fuel-types-readings/fuel-types-readings.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/readings/fuel-types/fuel-types-readings/fuel-types-readings.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: FuelTypesReadingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelTypesReadingsComponent", function() { return FuelTypesReadingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular

// Material


// NGRX

// Components
// Http


// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/compgetItemCssClassByStatusonents/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var FuelTypesReadingsComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param snackBar: MatSnackBar
     * @param store: Store<AppState>
     */
    function FuelTypesReadingsComponent(snackBar, store, http) {
        this.snackBar = snackBar;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['date', 'category', 'amount', 'unitPrice', 'totalPrice'];
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
    FuelTypesReadingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init DataSource
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
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
    FuelTypesReadingsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load UsersReadings List from service through data-source
     */
    FuelTypesReadingsComponent.prototype.loadUsersReadingsList = function () {
        var _this = this;
        this.totalAmount = 0;
        this.totalPrice = 0;
        this.isLoadingResults = true;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        if (this.selectedFuelType) {
            url += '&CategoryId=' + this.selectedFuelType;
        }
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_6__["default"].baseUrl + 'api/ShiftsReadings/Daily/Categories' + url, { headers: this.headers })
            .subscribe(function (res) {
            _this.isLoadingResults = false;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { category: item.categoryName });
            }));
            _this.dataSource.data.forEach(function (element) {
                _this.totalAmount += +element.amount;
                _this.totalPrice += +element.totalPrice;
            });
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
            _this.dataSource.data.forEach(function (element) {
                _this.totalAmount += +element.amount;
                _this.totalPrice += +element.totalPrice;
            });
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
     * Get file name of the exported excel file
     */
    FuelTypesReadingsComponent.prototype.getExcelFileName = function () {
        return 'احصائيات الوقود' + '-' + new Date().toISOString().slice(0, 10);
    };
    /**
     * Reset Filters
     */
    FuelTypesReadingsComponent.prototype.resetFilters = function () {
        this.selectedEmployee = '';
        this.selectedFuelType = '';
        this.selectedGasPump = '';
        this.dateFrom = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0) - this.tzoffset).toISOString().slice(0, 16);
    };
    FuelTypesReadingsComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], FuelTypesReadingsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], FuelTypesReadingsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FuelTypesReadingsComponent.prototype, "searchInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FuelTypesReadingsComponent.prototype, "fuelTypes", void 0);
    FuelTypesReadingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'gas-fuel-types-readings',
            template: __webpack_require__(/*! raw-loader!./fuel-types-readings.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/readings/fuel-types/fuel-types-readings/fuel-types-readings.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./fuel-types-readings.component.scss */ "./src/app/views/pages/readings/fuel-types/fuel-types-readings/fuel-types-readings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], FuelTypesReadingsComponent);
    return FuelTypesReadingsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/readings/pumps/pumps-readings/pumps-readings.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/readings/pumps/pumps-readings/pumps-readings.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcmVhZGluZ3MvcHVtcHMvcHVtcHMtcmVhZGluZ3MvQzpcXFVzZXJzXFxvbWVuXFxEZXNrdG9wXFxHaXRIdWJcXEZyb250LUthemVhaFxcZ2FzLXN0YXRpb24vc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xccmVhZGluZ3NcXHB1bXBzXFxwdW1wcy1yZWFkaW5nc1xccHVtcHMtcmVhZGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR2xCO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdsQjtFQUVFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvcmVhZGluZ3MvcHVtcHMvcHVtcHMtcmVhZGluZ3MvcHVtcHMtcmVhZGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZUNvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFjdGlvbnNDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucm93IHtcclxuXHRkaXYge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/readings/pumps/pumps-readings/pumps-readings.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/readings/pumps/pumps-readings/pumps-readings.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PumpsReadingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpsReadingsComponent", function() { return PumpsReadingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular

// Material


// NGRX

// Components
// Http


// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/compgetItemCssClassByStatusonents/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var PumpsReadingsComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param snackBar: MatSnackBar
     * @param store: Store<AppState>
     */
    function PumpsReadingsComponent(snackBar, store, http) {
        this.snackBar = snackBar;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['gpNumber', 'initalReading', 'finalReading', 'amount', 'unitPrice', 'totalPrice', 'date'];
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
    PumpsReadingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init DataSource
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
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
    PumpsReadingsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load UsersReadings List from service through data-source
     */
    PumpsReadingsComponent.prototype.loadUsersReadingsList = function () {
        var _this = this;
        this.totalAmount = 0;
        this.totalPrice = 0;
        this.isLoadingResults = true;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        if (this.selectedFuelType) {
            url += '&CategoryId=' + this.selectedFuelType;
        }
        if (this.selectedGasPump) {
            url += '&GPId=' + this.selectedGasPump;
        }
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_6__["default"].baseUrl + 'api/ShiftsReadings/Daily/GP' + url, { headers: this.headers })
            .subscribe(function (res) {
            _this.isLoadingResults = false;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { gpNumber: item.gasolinePumpName, unitPrice: item.price, date: item.readingDate.slice(0, 10), initalReading: item.initialReading });
            }));
            _this.dataSource.data.forEach(function (element) {
                _this.totalAmount += +element.amount;
                _this.totalPrice += +element.totalPrice;
            });
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
            _this.dataSource.data.forEach(function (element) {
                _this.totalAmount += +element.amount;
                _this.totalPrice += +element.totalPrice;
            });
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
     * Get file name of the exported excel file
     */
    PumpsReadingsComponent.prototype.getExcelFileName = function () {
        return 'قراءات العدادات' + '-' + new Date().toISOString().slice(0, 10);
    };
    /**
     * Reset Filters
     */
    PumpsReadingsComponent.prototype.resetFilters = function () {
        this.selectedEmployee = '';
        this.selectedFuelType = '';
        this.selectedGasPump = '';
        this.dateFrom = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0) - this.tzoffset).toISOString().slice(0, 16);
    };
    PumpsReadingsComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], PumpsReadingsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], PumpsReadingsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PumpsReadingsComponent.prototype, "searchInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PumpsReadingsComponent.prototype, "fuelTypes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PumpsReadingsComponent.prototype, "gasPumps", void 0);
    PumpsReadingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'gas-pumps-readings',
            template: __webpack_require__(/*! raw-loader!./pumps-readings.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/readings/pumps/pumps-readings/pumps-readings.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./pumps-readings.component.scss */ "./src/app/views/pages/readings/pumps/pumps-readings/pumps-readings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], PumpsReadingsComponent);
    return PumpsReadingsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/readings/readings.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/readings/readings.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcmVhZGluZ3MvQzpcXFVzZXJzXFxvbWVuXFxEZXNrdG9wXFxHaXRIdWJcXEZyb250LUthemVhaFxcZ2FzLXN0YXRpb24vc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xccmVhZGluZ3NcXHJlYWRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0csYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvcmVhZGluZ3MvcmVhZGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0OjpuZy1kZWVwIHtcclxuXHRcdG5nYi10YWJzZXQgPiAubmF2LXRhYnMge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/readings/readings.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/pages/readings/readings.component.ts ***!
  \************************************************************/
/*! exports provided: ReadingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingsComponent", function() { return ReadingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular

// Services
// Widgets model




var ReadingsComponent = /** @class */ (function () {
    function ReadingsComponent(layoutConfigService, store, http) {
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
    ReadingsComponent.prototype.ngOnInit = function () {
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
        this.getGasPumps();
        this.getShifts();
    };
    /**
     * On Destroy
     */
    ReadingsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /** ACTIONS */
    ReadingsComponent.prototype.getFuelTypes = function () {
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
    ReadingsComponent.prototype.getEmployees = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_5__["default"].baseUrl + 'api/Employee', // instead of /Users
        { headers: this.headers }).subscribe(function (res) {
            _this.employees = res.data.map(function (item) {
                return {
                    name: item.name,
                    id: item.userId
                };
            });
        });
    };
    ReadingsComponent.prototype.getGasPumps = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_5__["default"].baseUrl + 'api/GasolinePumps', { headers: this.headers }).subscribe(function (res) {
            _this.gasPumps = res.data.map(function (item) {
                return {
                    name: item.name,
                    id: item.id
                };
            });
        });
    };
    ReadingsComponent.prototype.getShifts = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_5__["default"].baseUrl + 'api/Shifts', { headers: this.headers }).subscribe(function (res) {
            _this.shifts = res.data.map(function (item) {
                return {
                    name: item.name,
                    id: item.id
                };
            });
        });
    };
    ReadingsComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    ReadingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gas-readings',
            template: __webpack_require__(/*! raw-loader!./readings.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/readings/readings.component.html"),
            styles: [__webpack_require__(/*! ./readings.component.scss */ "./src/app/views/pages/readings/readings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ReadingsComponent);
    return ReadingsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/readings/readings.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/pages/readings/readings.module.ts ***!
  \*********************************************************/
/*! exports provided: ReadingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingsModule", function() { return ReadingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _readings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./readings.component */ "./src/app/views/pages/readings/readings.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_users_readings_edit_users_readings_edit_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/users-readings-edit/users-readings-edit.dialog.component */ "./src/app/views/pages/readings/users/users-readings-edit/users-readings-edit.dialog.component.ts");
/* harmony import */ var _users_users_readings_users_readings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/users-readings/users-readings.component */ "./src/app/views/pages/readings/users/users-readings/users-readings.component.ts");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/fesm5/mat-table-exporter.js");
/* harmony import */ var _pumps_pumps_readings_pumps_readings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pumps/pumps-readings/pumps-readings.component */ "./src/app/views/pages/readings/pumps/pumps-readings/pumps-readings.component.ts");
/* harmony import */ var _fuel_types_fuel_types_readings_fuel_types_readings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fuel-types/fuel-types-readings/fuel-types-readings.component */ "./src/app/views/pages/readings/fuel-types/fuel-types-readings/fuel-types-readings.component.ts");
/* harmony import */ var _users_readings_results_reading_results_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./users-readings-results/reading-results.component */ "./src/app/views/pages/readings/users-readings-results/reading-results.component.ts");
/* harmony import */ var _users_readings_results_readings_results_edit_readings_results_edit_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users-readings-results/readings-results-edit/readings-results-edit.dialog.component */ "./src/app/views/pages/readings/users-readings-results/readings-results-edit/readings-results-edit.dialog.component.ts");

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





var ReadingsModule = /** @class */ (function () {
    function ReadingsModule() {
    }
    ReadingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                        component: _readings_component__WEBPACK_IMPORTED_MODULE_6__["ReadingsComponent"]
                    },
                ]),
                materialModules,
                mat_table_exporter__WEBPACK_IMPORTED_MODULE_12__["MatTableExporterModule"]
            ],
            entryComponents: [_users_users_readings_edit_users_readings_edit_dialog_component__WEBPACK_IMPORTED_MODULE_10__["UsersReadingsEditDialogComponent"], _users_readings_results_readings_results_edit_readings_results_edit_dialog_component__WEBPACK_IMPORTED_MODULE_16__["ReadingsResultsEditDialogComponent"]],
            exports: [],
            providers: [],
            declarations: [
                _readings_component__WEBPACK_IMPORTED_MODULE_6__["ReadingsComponent"],
                _users_users_readings_users_readings_component__WEBPACK_IMPORTED_MODULE_11__["UsersReadingsComponent"],
                _users_users_readings_edit_users_readings_edit_dialog_component__WEBPACK_IMPORTED_MODULE_10__["UsersReadingsEditDialogComponent"],
                _pumps_pumps_readings_pumps_readings_component__WEBPACK_IMPORTED_MODULE_13__["PumpsReadingsComponent"],
                _fuel_types_fuel_types_readings_fuel_types_readings_component__WEBPACK_IMPORTED_MODULE_14__["FuelTypesReadingsComponent"],
                _users_readings_results_reading_results_component__WEBPACK_IMPORTED_MODULE_15__["ReadingsResultsComponent"],
                _users_readings_results_readings_results_edit_readings_results_edit_dialog_component__WEBPACK_IMPORTED_MODULE_16__["ReadingsResultsEditDialogComponent"]
            ]
        })
    ], ReadingsModule);
    return ReadingsModule;
}());



/***/ }),

/***/ "./src/app/views/pages/readings/users-readings-results/reading-result.model.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/readings/users-readings-results/reading-result.model.ts ***!
  \*************************************************************************************/
/*! exports provided: ReadingResultModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingResultModel", function() { return ReadingResultModel; });
var ReadingResultModel = /** @class */ (function () {
    function ReadingResultModel() {
    }
    ReadingResultModel.prototype.clear = function () {
        this.id = 0;
        this.date = new Date().toISOString().substr(0, 16);
    };
    return ReadingResultModel;
}());



/***/ }),

/***/ "./src/app/views/pages/readings/users-readings-results/reading-results.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/readings/users-readings-results/reading-results.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcmVhZGluZ3MvdXNlcnMtcmVhZGluZ3MtcmVzdWx0cy9DOlxcVXNlcnNcXG9tZW5cXERlc2t0b3BcXEdpdEh1YlxcRnJvbnQtS2F6ZWFoXFxnYXMtc3RhdGlvbi9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxyZWFkaW5nc1xcdXNlcnMtcmVhZGluZ3MtcmVzdWx0c1xccmVhZGluZy1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbEI7RUFFRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JlYWRpbmdzL3VzZXJzLXJlYWRpbmdzLXJlc3VsdHMvcmVhZGluZy1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGVDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuXHR3aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5hY3Rpb25zQ29sdW1uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcclxuXHR3aWR0aDogOCUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnJvdyB7XHJcblx0ZGl2IHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/readings/users-readings-results/reading-results.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/readings/users-readings-results/reading-results.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ReadingsResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingsResultsComponent", function() { return ReadingsResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globalVariables */ "./src/app/views/pages/globalVariables.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _readings_results_edit_readings_results_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./readings-results-edit/readings-results-edit.dialog.component */ "./src/app/views/pages/readings/users-readings-results/readings-results-edit/readings-results-edit.dialog.component.ts");

// Angular

// Material


// NGRX

// Components
// Http




// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/compgetItemCssClassByStatusonents/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var ReadingsResultsComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param snackBar: MatSnackBar
     * @param store: Store<AppState>
     */
    function ReadingsResultsComponent(dialog, layoutUtilsService, snackBar, store, http) {
        this.dialog = dialog;
        this.layoutUtilsService = layoutUtilsService;
        this.snackBar = snackBar;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['date', 'userName', 'shift', 'virtualSummation', 'discounts', 'coupons',
            'oils', 'checks', 'totalCashEmployeeShouldDeliver', 'deliveredMoneyByEmployee', 'difference', 'actions'];
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
        this.employees = [];
        this.shifts = [];
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
    ReadingsResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init DataSource
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
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
    ReadingsResultsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load UsersReadings List from service through data-source
     */
    ReadingsResultsComponent.prototype.loadUsersReadingsList = function () {
        var _this = this;
        this.totalAmount = 0;
        this.totalPrice = 0;
        this.isLoadingResults = true;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        if (this.selectedEmployee) {
            url += '&userId=' + this.selectedEmployee;
        }
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_6__["default"].baseUrl + 'api/ShiftsReadings/Employees/Outcomes' + url, { headers: this.headers })
            .subscribe(function (res) {
            _this.isLoadingResults = false;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { userId: item.employeeId, userName: item.employeeName, date: item.readingOutcomeDate, deliveredMoneyByEmployee: item.moneyDeliveredByEmployee, totalCashEmployeeShouldDeliver: item.moneyToBeDeliveredByEmployee, shift: item.shiftName, difference: item.differences });
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
 * Show Edit reading dialog and save after success close result
 * @param reading: ReadingResultModel
 */
    ReadingsResultsComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_7__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_7__["MessageType"].Create;
        var dialogRef = this.dialog.open(_readings_results_edit_readings_results_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ReadingsResultsEditDialogComponent"], {
            data: {
                reading: reading,
                shifts: this.shifts,
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
    ReadingsResultsComponent.prototype.getExcelFileName = function () {
        return 'محصلة قراءات الموظفين' + '-' + new Date().toISOString().slice(0, 10);
    };
    /**
     * Reset Filters
     */
    ReadingsResultsComponent.prototype.resetFilters = function () {
        this.selectedEmployee = '';
        this.selectedFuelType = '';
        this.selectedGasPump = '';
        this.dateFrom = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0) - this.tzoffset).toISOString().slice(0, 16);
    };
    ReadingsResultsComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_7__["LayoutUtilsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ReadingsResultsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReadingsResultsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ReadingsResultsComponent.prototype, "searchInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReadingsResultsComponent.prototype, "employees", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReadingsResultsComponent.prototype, "shifts", void 0);
    ReadingsResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'reading-results-readings',
            template: __webpack_require__(/*! raw-loader!./reading-results.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/readings/users-readings-results/reading-results.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./reading-results.component.scss */ "./src/app/views/pages/readings/users-readings-results/reading-results.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_7__["LayoutUtilsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ReadingsResultsComponent);
    return ReadingsResultsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/readings/users-readings-results/readings-results-edit/readings-results-edit.dialog.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/views/pages/readings/users-readings-results/readings-results-edit/readings-results-edit.dialog.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ReadingsResultsEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingsResultsEditDialogComponent", function() { return ReadingsResultsEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");
/* harmony import */ var _reading_result_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reading-result.model */ "./src/app/views/pages/readings/users-readings-results/reading-result.model.ts");

// Angular


// Material


// CRUD

// Services and Models




var ReadingsResultsEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<ReadingsResultsEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param layoutUtilsService
     * @param http
     */
    function ReadingsResultsEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.http = http;
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.employees = [];
        this.fuelTypes = [];
        this.gasPumps = [];
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.selectedPumpId = '';
        this.isFinalReading = false;
        this.gsReadings = [];
        this.numberOfReadings = [];
        this.oldGasolinePumpId = '';
        // TODO: get using api
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
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ReadingsResultsEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.userReading = this.data.reading;
        this.employees = this.data.employees;
        this.shifts = this.data.shifts;
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
        // this.getShifts();
    };
    /**
     * On destroy
     */
    ReadingsResultsEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    ReadingsResultsEditDialogComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.gasPumps.filter(function (gasPump) { return gasPump.name.toLowerCase().includes(filterValue); });
    };
    ReadingsResultsEditDialogComponent.prototype.createForm = function () {
        var shiftStartDate = this.userReading.date;
        if (this.userReading.id > 0)
            shiftStartDate = new Date(+new Date(this.userReading.date) - this.tzoffset).toISOString().substr(0, 16);
        this.readingForm = this.fb.group({
            id: [this.userReading.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userId: [this.userReading.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            shift: [this.userReading.shiftId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            discounts: [this.userReading.discounts, ''],
            coupons: [this.userReading.coupons, ''],
            oils: [this.userReading.oils, ''],
            checks: [this.userReading.checks, ''],
            readingDate: [shiftStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            deliveredMoneyByEmployee: [this.userReading.deliveredMoneyByEmployee, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    /**
     * Returns page title
     */
    ReadingsResultsEditDialogComponent.prototype.getTitle = function () {
        if (this.userReading.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0644\u0644\u0645\u0648\u0638\u0641 '" + this.userReading.userName + "'";
        }
        return 'اضافة قراءة';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    ReadingsResultsEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.readingForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    // getShifts() {
    // 	this.http.get(
    // 		globalVariables.baseUrl + 'api/Shifts',
    // 		{ headers: this.headers }
    // 	).subscribe((res: any) => {
    // 		this.shifts = res.data.map(item => {
    // 			return {
    // 				name: item.name,
    // 				id: item.id
    // 			};
    // 		});
    // 	});
    // }
    ReadingsResultsEditDialogComponent.prototype.resetGSReading = function () {
        this.numberOfReadings.splice(1);
    };
    /**
     * Returns prepared customer
     */
    ReadingsResultsEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.readingForm.controls;
        var _reading = new _reading_result_model__WEBPACK_IMPORTED_MODULE_9__["ReadingResultModel"]();
        _reading.id = this.userReading.id;
        _reading.userId = controls.userId.value;
        _reading.shift = controls.shift.value;
        _reading.discounts = controls.discounts.value;
        _reading.coupons = controls.coupons.value;
        _reading.oils = controls.oils.value;
        _reading.checks = controls.checks.value;
        _reading.date = controls.readingDate.value;
        _reading.deliveredMoneyByEmployee = controls.deliveredMoneyByEmployee.value;
        return _reading;
    };
    /**
     * On Submit
     */
    ReadingsResultsEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.readingForm.controls;
        /** check form */
        if (this.readingForm.invalid) {
            console.log(this.readingForm);
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
        }
        if (this.hasFormErrors)
            return;
        var editedReading = this.prepareReading();
        if (editedReading.id > 0) {
            this.updateReading(editedReading);
        }
    };
    /**
     * Update customer
     *
     * @param _reading: ReadingResultModel
     */
    ReadingsResultsEditDialogComponent.prototype.updateReading = function (_reading) {
        var _this = this;
        var readingOutcomeDate = new Date(+new Date(_reading.date) - this.tzoffset).toISOString().slice(0, 16);
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_8__["default"].baseUrl + 'api/ShiftsReadings/Employees/Outcomes', {
            id: _reading.id,
            moneyDeliveredByEmployee: +_reading.deliveredMoneyByEmployee,
            employeeId: +_reading.userId,
            shiftId: +_reading.shift,
            discounts: +_reading.discounts,
            coupons: +_reading.coupons,
            oils: +_reading.oils,
            checks: +_reading.checks,
            readingOutcomeDate: readingOutcomeDate,
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _reading: _reading, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل القراءة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    ReadingsResultsEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    ReadingsResultsEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
    ]; };
    ReadingsResultsEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'gas-readings-results-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./readings-results-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/readings/users-readings-results/readings-results-edit/readings-results-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], ReadingsResultsEditDialogComponent);
    return ReadingsResultsEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/readings/users/users-readings-edit/users-readings-edit.dialog.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/pages/readings/users/users-readings-edit/users-readings-edit.dialog.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: UsersReadingsEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersReadingsEditDialogComponent", function() { return UsersReadingsEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material



// CRUD

// Services and Models



var GasPumpReading = /** @class */ (function () {
    function GasPumpReading() {
    }
    return GasPumpReading;
}());
var UsersReadingsEditDialogComponent = /** @class */ (function () {
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
    function UsersReadingsEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.http = http;
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.employees = [];
        this.fuelTypes = [];
        this.gasPumps = [];
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.selectedPumpId = '';
        this.isFinalReading = false;
        this.gsReadings = [];
        this.numberOfReadings = [];
        this.oldGasolinePumpId = '';
        // TODO: get using api
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
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UsersReadingsEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_7__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.userReading = this.data.reading;
        this.oldGasolinePumpId = this.userReading.gasolinePumpId;
        this.employees = this.data.employees;
        this.fuelTypes = this.data.fuelTypes;
        this.gasPumps = this.data.gasPumps;
        this.shifts = this.data.shifts;
        this.gasPumps.forEach(function () {
            var gsReading = new GasPumpReading();
            gsReading.validator = _this.fb.group({
                gpNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](gsReading.gpNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                shiftInitalReading: [gsReading.shiftInitalReading, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                shiftFinalReading: [gsReading.shiftFinalReading, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            gsReading.filteredOptions = gsReading.validator.get('gpNumber').valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return _this._filter(value); }));
            _this.gsReadings.push(gsReading);
        });
        this.numberOfReadings = [1];
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
        // this.getShifts();
    };
    /**
     * On destroy
     */
    UsersReadingsEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    UsersReadingsEditDialogComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.gasPumps.filter(function (gasPump) { return gasPump.name.toLowerCase().includes(filterValue); });
    };
    UsersReadingsEditDialogComponent.prototype.createForm = function () {
        var _this = this;
        var shiftStartDate = this.userReading.shiftStartDate;
        if (this.userReading.id <= 0)
            shiftStartDate = new Date(+new Date(this.userReading.shiftStartDate) - this.tzoffset).toISOString().substr(0, 16);
        this.readingForm = this.fb.group({
            id: [this.userReading.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gpNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.userReading.gpNumber, this.userReading.id > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : null),
            shiftInitalReading: [this.userReading.shiftInitalReading, this.userReading.id > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : ''],
            shiftFinalReading: [this.userReading.shiftFinalReading, this.userReading.id > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : ''],
            userId: [this.userReading.userId, this.userReading.id <= 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]) : ''],
            shift: [this.userReading.shift, this.userReading.id <= 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : ''],
            discounts: [this.userReading.discounts, ''],
            coupons: [this.userReading.coupons, ''],
            oils: [this.userReading.oils, ''],
            checks: [this.userReading.checks, ''],
            readingDate: [shiftStartDate, this.userReading.id <= 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : ''],
            deliveredMoneyByEmployee: [this.userReading.deliveredMoneyByEmployee, this.userReading.id <= 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : ''],
        });
        if (this.userReading.id > 0)
            this.filteredOptions = this.readingForm.get('gpNumber').valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return _this._filter(value); }));
    };
    /**
     * Returns page title
     */
    UsersReadingsEditDialogComponent.prototype.getTitle = function () {
        if (this.userReading.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0644\u0644\u0645\u0648\u0638\u0641 '" + this.userReading.userName + "'";
        }
        return 'اضافة قراءة';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    UsersReadingsEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.readingForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    // getShifts() {
    // 	this.http.get(
    // 		globalVariables.baseUrl + 'api/Shifts',
    // 		{ headers: this.headers }
    // 	).subscribe((res: any) => {
    // 		this.shifts = res.data.map(item => {
    // 			return {
    // 				name: item.name,
    // 				id: item.id
    // 			};
    // 		});
    // 	});
    // }
    UsersReadingsEditDialogComponent.prototype.deleteGSReading = function (index) {
        this.numberOfReadings.splice(index, 1);
    };
    UsersReadingsEditDialogComponent.prototype.resetGSReading = function () {
        this.numberOfReadings.splice(1);
    };
    /**
     * Returns prepared customer
     */
    UsersReadingsEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.readingForm.controls;
        var _reading = new _core_e_commerce__WEBPACK_IMPORTED_MODULE_7__["UserReadingModel"]();
        _reading.id = this.userReading.id;
        _reading.userId = controls.userId.value;
        _reading.shift = controls.shift.value;
        _reading.discounts = controls.discounts.value;
        _reading.coupons = controls.coupons.value;
        _reading.oils = controls.oils.value;
        _reading.checks = controls.checks.value;
        _reading.readingDate = controls.readingDate.value;
        _reading.deliveredMoneyByEmployee = controls.deliveredMoneyByEmployee.value;
        _reading.gpNumber = controls.gpNumber.value;
        _reading.shiftInitalReading = controls.shiftInitalReading.value;
        _reading.shiftFinalReading = controls.shiftFinalReading.value;
        // _reading.amount = controls.amount.value;
        // _reading.totalPrice = controls.totalPrice.value;
        // _reading.unitPrice = controls.unitPrice.value;
        // _reading.shiftStartDate = this.userReading.id > 0 ? controls.shiftStartDate.value : controls.readingDate.value;
        // _reading.shiftEndDate = controls.shiftEndDate.value;
        return _reading;
    };
    /**
     * On Submit
     */
    UsersReadingsEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.readingForm.controls;
        /** check form */
        if (this.readingForm.invalid) {
            console.log(this.readingForm);
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
        }
        if (this.userReading.id <= 0) {
            var _loop_1 = function (index) {
                var element = this_1.gsReadings[index];
                var controls_1 = element.validator.controls;
                /** check form */
                if (element.validator.invalid) {
                    Object.keys(controls_1).forEach(function (controlName) {
                        return controls_1[controlName].markAsTouched();
                    });
                    this_1.hasFormErrors = true;
                }
            };
            var this_1 = this;
            for (var index = 0; index < this.numberOfReadings.length; index++) {
                _loop_1(index);
            }
        }
        if (this.hasFormErrors)
            return;
        var editedReading = this.prepareReading();
        if (editedReading.id > 0) {
            this.updateReading(editedReading);
        }
        else {
            this.createReading(editedReading);
        }
    };
    /**
     * Update customer
     *
     * @param _reading: UserReadingModel
     */
    UsersReadingsEditDialogComponent.prototype.updateReading = function (_reading) {
        var _this = this;
        var readingDate = new Date(+new Date(_reading.readingDate) - this.tzoffset).toISOString().slice(0, 16);
        if (this.selectedPumpId != '') {
            _reading.gpNumber = this.selectedPumpId;
        }
        else {
            _reading.gpNumber = this.oldGasolinePumpId;
        }
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/ShiftsReadings', {
            // ..._reading,
            id: _reading.id,
            oldGasolinePumpId: this.oldGasolinePumpId,
            newGasolinePumpId: +_reading.gpNumber,
            initialReading: +_reading.shiftInitalReading,
            finalReading: +_reading.shiftFinalReading,
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _reading: _reading, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل القراءة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create customer
     *
     * @param _reading: UserReadingModel
     */
    UsersReadingsEditDialogComponent.prototype.createReading = function (_reading) {
        var _this = this;
        var readingDate = new Date(+new Date(_reading.readingDate) - this.tzoffset).toISOString().slice(0, 16);
        var readings = [];
        for (var index = 0; index < this.numberOfReadings.length; index++) {
            var element = this.gsReadings[index];
            readings.push({
                gasolinePumpId: element.gpNumber,
                initialReading: element.shiftInitalReading,
                finalReading: element.shiftFinalReading
            });
        }
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/ShiftsReadings', {
            // ..._reading,
            moneyDeliveredByEmployee: +_reading.deliveredMoneyByEmployee,
            employeeId: +_reading.userId,
            shiftId: +_reading.shift,
            discounts: +_reading.discounts,
            coupons: +_reading.coupons,
            oils: +_reading.oils,
            checks: +_reading.checks,
            readingDate: readingDate,
            gpReadings: readings
        }, { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _reading: _reading, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة القراءة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    UsersReadingsEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    UsersReadingsEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    UsersReadingsEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'gas-users-readings-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./users-readings-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/readings/users/users-readings-edit/users-readings-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n\t\t.close {\n\t\t\tposition: absolute; top: 1px; left: 1px;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.close:hover {\n\t\t\tcolor: red;\n\t\t}\n\t"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], UsersReadingsEditDialogComponent);
    return UsersReadingsEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/readings/users/users-readings/users-readings.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/readings/users/users-readings/users-readings.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right; }\n\n.row div {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcmVhZGluZ3MvdXNlcnMvdXNlcnMtcmVhZGluZ3MvQzpcXFVzZXJzXFxvbWVuXFxEZXNrdG9wXFxHaXRIdWJcXEZyb250LUthemVhaFxcZ2FzLXN0YXRpb24vc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xccmVhZGluZ3NcXHVzZXJzXFx1c2Vycy1yZWFkaW5nc1xcdXNlcnMtcmVhZGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR2xCO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdsQjtFQUVFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvcmVhZGluZ3MvdXNlcnMvdXNlcnMtcmVhZGluZ3MvdXNlcnMtcmVhZGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZUNvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFjdGlvbnNDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucm93IHtcclxuXHRkaXYge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/readings/users/users-readings/users-readings.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/readings/users/users-readings/users-readings.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UsersReadingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersReadingsComponent", function() { return UsersReadingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _users_readings_edit_users_readings_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../users-readings-edit/users-readings-edit.dialog.component */ "./src/app/views/pages/readings/users/users-readings-edit/users-readings-edit.dialog.component.ts");
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
var UsersReadingsComponent = /** @class */ (function () {
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
    function UsersReadingsComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['readingDate', 'gpNumber', 'userName', 'shift', 'shiftInitalReading', 'shiftFinalReading', 'amount', 'unitPrice',
            'totalPrice', 'actions']; // 'coupons', 'discounts', 'shiftStartDate', 'shiftEndDate',
        this.isLoadingResults = false;
        this.selectedEmployee = '';
        this.selectedFuelType = '';
        this.selectedGasPump = '';
        this.selectedShift = '';
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0) - this.tzoffset).toISOString().slice(0, 16);
        // Filter data
        this.employees = [];
        this.fuelTypes = [];
        this.gasPumps = [];
        this.shifts = [];
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
        this.role = '';
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
    UsersReadingsComponent.prototype.ngOnInit = function () {
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
    UsersReadingsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load UsersReadings List from service through data-source
     */
    UsersReadingsComponent.prototype.loadUsersReadingsList = function () {
        var _this = this;
        this.totalAmount = 0;
        this.totalPrice = 0;
        this.isLoadingResults = true;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        if (this.selectedEmployee) {
            url += '&userId=' + this.selectedEmployee;
        }
        if (this.selectedFuelType) {
            url += '&CategoryId=' + this.selectedFuelType;
        }
        if (this.selectedGasPump) {
            url += '&GPId=' + this.selectedGasPump;
        }
        if (this.selectedShift) {
            url += '&ShiftId=' + this.selectedShift;
        }
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/ShiftsReadings/Employees/GPs' + url, { headers: this.headers })
            .subscribe(function (res) {
            _this.isLoadingResults = false;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { gpNumber: item.gasolinePumpName, userId: item.employeeId, userName: item.employeeName, shift: item.shiftName, shiftInitalReading: item.initialReading, shiftFinalReading: item.finalReading });
            }));
            _this.dataSource.data.forEach(function (element) {
                _this.totalAmount += +element.amount;
                _this.totalPrice += +element.totalPrice;
            });
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
            _this.dataSource.data.forEach(function (element) {
                _this.totalAmount += +element.amount;
                _this.totalPrice += +element.totalPrice;
            });
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
    /** ACTIONS */
    /**
     * Delete Reading
     *
     * @param _item: UserReadingModel
     */
    UsersReadingsComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = 'حذف القراءة';
        var _description = 'هل أنت متأكد من حذف القراءة؟';
        var _waitDesciption = 'جاري الحذف';
        var _deleteMessage = 'لقد تم الحذف';
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.http.delete(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/ShiftsReadings/' + _item.id, { headers: _this.headers })
                .subscribe(function (res) {
                _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
                _this.loadUsersReadingsList();
            }, function (err) {
                var msg = 'فشل في حذف القراءة';
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
    UsersReadingsComponent.prototype.addReading = function () {
        var newReading = new _core_e_commerce__WEBPACK_IMPORTED_MODULE_7__["UserReadingModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: UserReadingModel
     */
    UsersReadingsComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_users_readings_edit_users_readings_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["UsersReadingsEditDialogComponent"], {
            data: {
                reading: reading,
                gasPumps: this.gasPumps,
                employees: this.employees,
                fuelTypes: this.fuelTypes,
                shifts: this.shifts
            },
            disableClose: true
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
    UsersReadingsComponent.prototype.getExcelFileName = function () {
        return 'قراءات الموظفين' + '-' + new Date().toISOString().slice(0, 10);
    };
    /**
     * Reset Filters
     */
    UsersReadingsComponent.prototype.resetFilters = function () {
        this.selectedEmployee = '';
        this.selectedFuelType = '';
        this.selectedGasPump = '';
        this.selectedShift = '';
        this.dateFrom = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0) - this.tzoffset).toISOString().slice(0, 16);
    };
    UsersReadingsComponent.ctorParameters = function () { return [
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
    ], UsersReadingsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], UsersReadingsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UsersReadingsComponent.prototype, "searchInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UsersReadingsComponent.prototype, "employees", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UsersReadingsComponent.prototype, "fuelTypes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UsersReadingsComponent.prototype, "gasPumps", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UsersReadingsComponent.prototype, "shifts", void 0);
    UsersReadingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'gas-users-readings',
            template: __webpack_require__(/*! raw-loader!./users-readings.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/readings/users/users-readings/users-readings.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./users-readings.component.scss */ "./src/app/views/pages/readings/users/users-readings/users-readings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], UsersReadingsComponent);
    return UsersReadingsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-readings-readings-module.js.map