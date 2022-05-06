import { useCallback, useEffect, useState } from "react";
import { addStoreListener } from "./NoobX";

const observerComponents = [];

addStoreListener(() => {
  observerComponents.forEach((c) => {
    c();
  });
});

const registerObserverReact = (forceUpdate) => {
  observerComponents.push(forceUpdate);
};

const unregisterObserverReact = (forceUpdate) => {
  observerComponents.splice(observerComponents.indexOf(forceUpdate), 1);
};

// DISADVANTAGES IN CURRENT STATE
// 1. observe only properties, which are used inside components (using Proxy.get)
// 2. you should get all of the properties before running conditions
// SHOW DEMO HERE

export const ObserverReact = (Cmp) => {
  return (props) => {
    const forceUpdate = useForceUpdate();

    useEffect(() => {
      registerObserverReact(forceUpdate);

      return () => {
        unregisterObserverReact(forceUpdate);
      };
    }, []);

    return <Cmp {...props} />;
  };
};

// UTILS

const useForceUpdate = () => {
  const [, setKey] = useState(Date.now());
  const forceUpdate = useCallback(() => {
    setKey(Date.now());
  }, []);

  return forceUpdate;
};
