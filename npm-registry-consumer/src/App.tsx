import React from 'react';
import { MyTestComponent, DataTableComponent, Registration } from "npm-registry-provider";

function App() {
  return (
    <div className="App">
      <MyTestComponent name='Partha' />
      <DataTableComponent
        data={[
          {
            title: 'Beetlejuice',
            director: 'director 1',
            year: '1988',
          },
          {
            title: 'Ghostbusters',
            director: 'director 2',
            year: '1984',
          }]}
      />
      <Registration />
    </div>
  );
}

export default App; 
