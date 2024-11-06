import { Icon } from "@iconify/react";

export const Input = () => {
    return (
        <div className="relative flex items-center ml-4 w-full md:w-auto">
            <Icon
                icon="akar-icons:search"
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
            />
            <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 h-full w-full rounded-full border border-gray-200 bg-gray-100 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
        </div>
    );
};
