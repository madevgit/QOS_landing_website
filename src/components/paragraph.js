export default function P({children,className}){
    return(
        <p className={`${className} text-opacity-70`}>
            {children}
        </p>
    )
}