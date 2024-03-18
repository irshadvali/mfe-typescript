
import React from "react";


var version = process.env.BUILD_DATE;

type ContainerAppProps = {
  CounterAppOne: React.LazyExoticComponent<React.ComponentType<{}>>;
  // CounterAppTwo: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const ContainerApp = ({
  CounterAppOne
}: ContainerAppProps) => {
  return (
    <div>
      <CounterAppOne></CounterAppOne>
    </div>
  );
};
