import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

interface DataRow {
    title: string;
    director: string;
    year: string;
}

const columns: TableColumn<DataRow>[] = [
    {
        name: 'Title',
        selector: row => row.title,
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
    data: DataRow[];
}

export const DataTableComponent: React.FC<DataTableComponentProps> = ({ data }) => (
    <>
        <DataTable
            title="Movies"
            columns={columns}
            data={data}
            defaultSortFieldId="title"
            pagination
            selectableRows
        />
    </>
);  