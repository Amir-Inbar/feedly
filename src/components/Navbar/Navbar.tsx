import React from 'react';
import { Input } from "../ui/Input.tsx";
import { NavbarTabs } from "./NavbarTabs.tsx";
import { NavbarProfile } from "./NavbarProfile.tsx";
import { FeedlyIcon } from "../../shared/IconifyConfig/FeedlyIcon.tsx";

const Navbar: React.FC = () => {
    return (
        <>
            {/* Main Navbar */}
            <nav className="flex h-[58px] px-4 bg-white shadow-navbar-bottom">
                <div className="max-w-[1120px] w-full mx-auto flex justify-between items-center">
                    <div className="flex justify-between w-full items-center">
                        <div className="flex w-full md:w-auto">
                            <FeedlyIcon icon="customLogo" />
                            <Input />
                        </div>
                        <div className="hidden md:flex items-center">
                            <NavbarTabs />
                            <NavbarProfile />
                        </div>
                    </div>
                </div>
            </nav>
            {/* Mobile Navbar */}
            <div className="fixed bottom-0 left-0 w-full bg-white shadow-navbar-top flex justify-between items-center px-4 md:hidden">
                <NavbarTabs />
                <NavbarProfile />
            </div>
        </>
    );
};

export default Navbar;
