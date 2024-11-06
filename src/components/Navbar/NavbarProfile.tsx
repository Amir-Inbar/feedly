import profile from "../../assets/profile.jpeg";

export const NavbarProfile = () => {
    return (
        <img
            className="w-[40px] h-[40px] rounded-full ml-4 object-cover"
            src={profile}
            alt="Profile"
        />
    )
}