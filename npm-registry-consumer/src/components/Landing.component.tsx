import React from 'react';
// import DocumentViewerComponent from "./Document-Viwer.component";

export interface LandingProps {
    name: string;
}

const LandingComponent: React.FC<LandingProps> = ({ name }) => (
    <>
        <p>Hello, {name}</p>
        <div>
            {/* <DocumentViewerComponent /> */}
        </div>
    </>
);

export default LandingComponent;