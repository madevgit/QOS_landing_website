export default function Wrapper({ style, className, children, id, childrenClassName }) {
    return (
        <section id={id} className={className} style={style}>
            <div className={`${childrenClassName} px-6 lg:px-0 md:px-10 max-w-screen-lg mx-auto`}>
                {children}
            </div>
        </section>
    )
}