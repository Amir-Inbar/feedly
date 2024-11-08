import { Icon } from '@iconify/react';
import { FC, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', icon: 'custom:home', value: 'home' },
  { label: 'Messages', icon: 'lucide:message-circle', value: 'messages' },
  { label: 'Notifications', icon: 'ion:notifications-outline', value: 'notifications' },
];

export const NavbarTabs: FC = () => {
  const [activeItem, setActiveItem] = useState('home');


  return (
    <div className="flex items-center space-x-4">
      {NAV_ITEMS.map(item => (
        <div
          key={item.value}
          className={`flex items-center cursor-pointer transition-colors p-[18px] border-b-2 ${
            activeItem === item.value ? 'text-navbar-active border-navbar-active' : 'text-navbar-inactive border-transparent'
          }`}
          onClick={() => setActiveItem(item.value)}
        >
          <Icon icon={item.icon} fontSize={18} className="mr-2.5 mb-0" />
          {item.label}
        </div>

      ))}
    </div>
  );
};