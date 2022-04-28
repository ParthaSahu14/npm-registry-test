import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from "./routes/route.json";
import HeaderComponent from "./components/Header";
import DocumentViewerComponent from './components/Document-Viwer.component';


function App() {
  const getReactComponent = (componentName: string): any => {
    let component: any = null;
    switch (componentName) {
      case "LandingComponent":
        component = React.lazy(() => import('./components/Landing.component'));
        break;
      case "DataTableComponent":
        component = React.lazy(() => import('npm-registry-provider/lib/esm/DataTableModule').then(({ DataTableComponent }) => ({ default: DataTableComponent })));
        break;
      case "TableDetailsComponent":
        component = React.lazy(() => import('npm-registry-provider/lib/esm/TableDetailsModule').then(({ TableDetailsComponent }) => ({ default: TableDetailsComponent })));
        break;
      case "Registration":
        component = React.lazy(() => import('npm-registry-provider/lib/esm/RegistrationModule').then(({ Registration }) => ({ default: Registration })));
        break;
      case "MaterialLayoutComponent":
        component = React.lazy(() => import('./components/material.component'));
        break;
      default:
        break;
    }

    return component;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent name='Portal Header' />
        {/* <DocumentViewerComponent sourceUrl='https://github.com/ParthaSahu14/npm-registry-test/raw/master/npm-registry-consumer/testdocoument.pdf' /> */}
        <div className='App-container'>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.map((route, i) => {
                let Comp = getReactComponent(route.component);
                return <Route
                  path={route.path}
                  key={route.name + i}
                  element={
                    <Comp {...route.props} />
                  }
                />
              })}
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App; 
