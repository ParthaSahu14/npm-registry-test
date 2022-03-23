import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useParams } from 'react-router-dom';
import { d as dataSet } from './data-97af4f60.js';

var TableDetailsComponent = function (_a) {
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     let params = useParams();
    //     let selectedId = params['ItemId'] || '';
    //     if (selectedId) {
    //         let obj = dataSet.filter(m => m.Id === selectedId);
    //         setData(obj);
    //     }
    // }, []);
    var params = useParams();
    var data = null;
    var selectedId = params['ItemId'] || '';
    if (selectedId) {
        data = dataSet.filter(function (m) { return m.Id === selectedId; });
    }
    return (jsx(Fragment, { children: jsxs("div", { children: [jsxs("div", { children: ["Selected Item Id : ", selectedId] }), jsx("div", { children: data != null ? JSON.stringify(data) : 'No Data Found.' })] }) }));
};

export { TableDetailsComponent };
