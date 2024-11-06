import React from 'react';
import {Input} from "../ui/Input.tsx";
import {NavbarTabs} from "./NavbarTabs.tsx";
import {NavbarProfile} from "./NavbarProfile.tsx";
import {FeedlyIcon} from "../../shared/IconifyConfig/FeedlyIcon.tsx";

const Navbar: React.FC = () => {
    return (
        <nav className="flex h-[58px] px-4 bg-white shadow-navbar-bottom">
            <div className="max-w-[1120px] w-full mx-auto flex justify-between items-center">
                <div className='flex justify-between w-full items-center'>
                    <div className='flex'>
                        <FeedlyIcon icon='customLogo'/>
                        <Input/>
                    </div>
                    <div className='flex items-center'>
                        <NavbarTabs/>
                        <NavbarProfile/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
