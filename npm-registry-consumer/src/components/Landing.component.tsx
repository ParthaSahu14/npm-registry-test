import React from 'react';

export interface LandingProps {
    name: string;
}

const LandingComponent: React.FC<LandingProps> = ({ name }) => (
    <>
        <p>Hello, {name}</p>
    </>
);

export default LandingComponent;