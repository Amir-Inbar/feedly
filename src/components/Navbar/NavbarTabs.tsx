import {Icon} from "@iconify/react";
import React, {useState} from "react";

const navItems = [
    {label: 'Home', icon: 'prime:home', value: 'home'},
    {label: 'Messages', icon: 'lucide:message-circle', value: 'messages'},
    {label: 'Notifications', icon: 'ion:notifications-outline', value: 'notifications'},
];

export const NavbarTabs: React.FC = () => {
    const [activeItem, setActiveItem] = useState('home');


    return (
        <div className='flex items-center space-x-4'>
            {navItems.map(item => (
                <div
                    key={item.value}
                    className={`flex items-center cursor-pointer transition-colors p-[18px] border-b-2 ${
                        activeItem === item.value ? 'text-navbar-active border-navbar-active' : 'text-navbar-inactive border-transparent'
                    }`}
                    onClick={() => setActiveItem(item.value)}
                >
                    <Icon icon={item.icon} fontSize={20} className="mr-1"/>
                    {item.label}
                </div>

            ))}
        </div>
    )
}