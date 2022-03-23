import { jsx, Fragment, jsxs } from 'react/jsx-runtime';

var MyTestComponent = function (_a) {
    var name = _a.name;
    return (jsx(Fragment, { children: jsxs("p", { children: ["Hello, ", name] }) }));
};

export { MyTestComponent };
