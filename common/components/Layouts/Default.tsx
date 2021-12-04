// import DefaultNavbar from '../Navbar/DefaultNavbar' // e.g.
import { Wrap } from '../../style/layout.style'

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Wrap>
            {/* <DefaultNavbar /> */}
            {children}
        </Wrap>
    )
}
