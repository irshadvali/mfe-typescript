import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { ContainerApp } from "./components/ContainerApp";

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const AppTwo = React.lazy(() => import("app2/AppTwo"));
// const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));

const App = () => (
  <>
    {/* <Routes>
      <Route
        path="/"
        element={
          <ContainerApp
            CounterAppOne={CounterAppOne}
            CounterAppTwo={CounterAppTwo}
          />
        }
      />
      <Route path="app1/*" element={<CounterAppOne />} />
      <Route path="app2/*" element={<CounterAppTwo />} />
    </Routes> */}
<div>
  <p>Conatiner</p>
  <CounterAppOne></CounterAppOne>
  <AppTwo></AppTwo>
  {/* <CounterAppTwo></CounterAppTwo>  */}
</div>
  </>
);

export default App;
