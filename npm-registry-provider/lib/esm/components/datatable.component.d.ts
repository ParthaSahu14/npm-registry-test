import React from 'react';
interface DataRow {
    Id: string;
    title: string;
    director: string;
    year: string;
}
export interface DataTableComponentProps {
    data?: DataRow[];
}
export declare const DataTableComponent: React.FC<DataTableComponentProps>;
export {};
