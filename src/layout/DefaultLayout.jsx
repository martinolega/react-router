import { Outlet } from "react-router-dom";
import Header from "../components/Header"

function DefaultLayout() {
    return(
        <>
        <header className="header bg-white width-100">
            <Header />
        </header>
        <main className="mt-70">
            <Outlet />
        </main>
        {/* <footer>Footer</footer> */}
        </>
    )
}

export default DefaultLayout;