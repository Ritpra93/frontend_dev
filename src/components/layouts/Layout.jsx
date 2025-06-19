import { Fragment } from "react"

export default function Layout(props){
    const{children} = props

    const header = (
        <header>
            <h1 className="text-medium text-gradient">
                Unalive
            </h1>

        </header>
    )

    const footer = (
        <footer>
            Created by
            <a target = "_blank" href="nothing here atm"/>
        </footer>
    )
    return(
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}