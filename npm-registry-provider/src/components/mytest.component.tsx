import React from 'react';

export interface MyTestProps {
    name: string;
}

export const MyTestComponent: React.FC<MyTestProps> = ({ name }) => (
    <>
      <p>Hello, {name}</p>
    </>
);