import { _ as __assign } from './tslib.es6-b7e7d34f.js';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { d as dataSet } from './data-97af4f60.js';

var columns = [
    {
        name: 'Id',
        selector: function (row) { return row.Id; },
    },
    {
        name: 'Title',
        selector: function (row) { return row.title; },
        cell: function (row) { return jsxs(Link, __assign({ to: "/movies/".concat(row.Id) }, { children: [" ", row.title, " "] })); }
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
    var data = _a.data;
    return (jsx(Fragment, { children: jsx(DataTable, { title: "Movies", columns: columns, data: data || dataSet, defaultSortFieldId: "title", pagination: true, selectableRows: true }) }));
};

export { DataTableComponent };
