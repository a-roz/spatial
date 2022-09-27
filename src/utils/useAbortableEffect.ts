import React, { useEffect } from 'react';


// https://github.com/reactjs/rfcs/issues/137

export default function useAbortableEffect(effect : Function, dependencies : React.DependencyList) {
    const status = {} as { aborted : boolean };
    useEffect(() => {
        status.aborted = false;
        const cleanUpFn = effect(status);
        return () => {
            status.aborted = true;
            if (typeof cleanUpFn === "function") {
                cleanUpFn();
            }
        };
    }, [...dependencies]);
}
