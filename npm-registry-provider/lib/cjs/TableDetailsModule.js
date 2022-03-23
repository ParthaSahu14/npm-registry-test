'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactRouterDom = require('react-router-dom');
var data = require('./data-c2b963f5.js');

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
    var params = reactRouterDom.useParams();
    var data$1 = null;
    var selectedId = params['ItemId'] || '';
    if (selectedId) {
        data$1 = data.dataSet.filter(function (m) { return m.Id === selectedId; });
    }
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", { children: [jsxRuntime.jsxs("div", { children: ["Selected Item Id : ", selectedId] }), jsxRuntime.jsx("div", { children: data$1 != null ? JSON.stringify(data$1) : 'No Data Found.' })] }) }));
};

exports.TableDetailsComponent = TableDetailsComponent;
