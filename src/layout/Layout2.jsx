import { Outlet } from 'react-router-dom';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Layout2() {
    return (
        <>
            <Outlet />
            <Header />
            <Footer />
        </>
    );
}