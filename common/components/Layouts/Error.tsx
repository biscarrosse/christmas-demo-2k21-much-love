// import DefaultNavbar from '../Navbar/DefaultNavbar' // e.g.
import { Error } from '../../style/layout.style'

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Error>
            {/* <DefaultNavbar /> */}
            {children}
        </Error>
    )
}
