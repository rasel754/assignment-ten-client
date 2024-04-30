import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './Banner';
// import CraftItemsSection from './CraftItemsSection';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            {/* <CraftItemsSection></CraftItemsSection> */}
            <Footer></Footer>
        </div>
    );
};

export default Root;