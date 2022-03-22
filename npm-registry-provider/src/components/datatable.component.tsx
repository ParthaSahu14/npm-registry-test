import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { Link } from "react-router-dom";
import tableData from "../Data/data.json";

interface DataRow {
    Id: string;
    title: string;
    director: string;
    year: string;
}

const columns: TableColumn<DataRow>[] = [
    {
        name: 'Id',
        selector: row => row.Id,
    },
    {
        name: 'Title',
        selector: row => row.title,
        cell: (row) => <Link to={`/movies/${row.Id}`}> {row.title} </Link>
    },
    {
        name: 'Director',
        selector: row => row.director,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];


export interface DataTableComponentProps {
    data?: DataRow[];
}

export const DataTableComponent: React.FC<DataTableComponentProps> = ({ data }) => (
    <>
        <DataTable
            title="Movies"
            columns={columns}
            data={data || tableData}
            defaultSortFieldId="title"
            pagination
            selectableRows
        />
    </>
);  