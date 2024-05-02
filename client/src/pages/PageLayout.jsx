import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const PageLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default PageLayout;