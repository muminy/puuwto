export default function({children, wrap, width}){
    return (
        <div 
            style={{width: width || 'unset'}} 
            className={wrap ? "flex_global wrap" : "flex_global"}>
            {children}
        </div>
    )
}