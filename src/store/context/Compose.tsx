
export default function Compose(props : {
    components : Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>
    children   : React.ReactNode,
}) {
    const { components = [], children } = props;
    return (
        <>
            {
                components.reduceRight((acc, Comp) => {
                    return <Comp>{ acc }</Comp>;
                }, children)
            }
        </>
    )
}