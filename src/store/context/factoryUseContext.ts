import { useContext } from 'react';

export default function factoryUseContext(name : string, context : any) : any {
    return () => {
        const ctx = useContext(context);
        if (ctx === undefined) {
            throw new Error(`use${ name }Context must be used withing a ${ name }ContextProvider.`);
        }
        return ctx;
    }
}
