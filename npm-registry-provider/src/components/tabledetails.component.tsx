import React from 'react';
import { useParams } from "react-router-dom";
import dataSet from "../Data/data.json";

export interface TableDetailsProps {
    ItemId?: string;
}

export const TableDetailsComponent: React.FC<TableDetailsProps> = ({ }) => {
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     let params = useParams();
    //     let selectedId = params['ItemId'] || '';
    //     if (selectedId) {
    //         let obj = dataSet.filter(m => m.Id === selectedId);
    //         setData(obj);
    //     }
    // }, []);

    let params = useParams();
    let data = null;
    let selectedId = params['ItemId'] || '';
    if (selectedId) {
        data = dataSet.filter(m => m.Id === selectedId);
    }

    return (
        <>
            <div>
                <div>Selected Item Id : {selectedId}</div>
                <div>{data != null ? JSON.stringify(data) : 'No Data Found.'}</div>
            </div>
        </>
    );
}