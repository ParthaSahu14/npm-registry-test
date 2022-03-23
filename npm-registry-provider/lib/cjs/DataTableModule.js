'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('./tslib.es6-d5780007.js');
var jsxRuntime = require('react/jsx-runtime');
var DataTable = require('react-data-table-component');
var reactRouterDom = require('react-router-dom');
var data = require('./data-c2b963f5.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var DataTable__default = /*#__PURE__*/_interopDefaultLegacy(DataTable);

var columns = [
    {
        name: 'Id',
        selector: function (row) { return row.Id; },
    },
    {
        name: 'Title',
        selector: function (row) { return row.title; },
        cell: function (row) { return jsxRuntime.jsxs(reactRouterDom.Link, tslib_es6.__assign({ to: "/movies/".concat(row.Id) }, { children: [" ", row.title, " "] })); }
    },
    {
        name: 'Director',
        selector: function (row) { return row.director; },
    },
    {
        name: 'Year',
        selector: function (row) { return row.year; },
    },
];
var DataTableComponent = function (_a) {
    var data$1 = _a.data;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(DataTable__default["default"], { title: "Movies", columns: columns, data: data$1 || data.dataSet, defaultSortFieldId: "title", pagination: true, selectableRows: true }) }));
};

exports.DataTableComponent = DataTableComponent;
