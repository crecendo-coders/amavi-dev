import SocialMedia from "./SocialMedia";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-zinc-200 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <NavLink href="/">
                    <img
                        src="https://amaviphotos.s3.us-west-2.amazonaws.com/amavi-big-logo.png"
                        className="max-h-[150px]"
                        alt="Amavi Logo"
                    />
                </NavLink>
                <div className="hidden sm:flex items-center"> {/* Hide on small screens */}
                    <div className="flex ">
                        <NavLink
                            to="/support"
                            id="supportUs"
                            title="Please consider donating to Amavi"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-blue-500 text-lg m-2 text-white px-4 py-2 rounded-full underline border-[1px] border-blue-800 focus:text-white hover:text-white"
                                    : "bg-blue-500 text-lg m-2 text-white px-4 py-2 rounded-full hover:bg-white no-underline hover:no-underline border-[1px] border-blue-800 focus:no-underline"
                            }
                        >
                            Donate
                        </NavLink>
                    </div>
                    <SocialMedia />
                </div>
            </div>
        </header>
    );
};

export default Header;
