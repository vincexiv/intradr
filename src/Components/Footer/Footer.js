import { Link } from "react-router-dom";

const Footer = () => {
    const date = new Date()
    const today = date.getFullYear()
    return ( 
        <>
            <div className="bg-purple-500 text-center md:text-2xl text-xl py-6 md:mt-16 mt-8 text-white font-semibold">
                <p>All Rights Reserved © 
                    <span className="mx-1">{today}</span>|
                    <Link to="/" className="hover:text-[#FE741A] ml-1">Intradr</Link>
                </p>
            </div>
        </>
     );
}
 
export default Footer;