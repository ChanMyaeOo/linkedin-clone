import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import HeaderOption from "./HeaderOption";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import linkedinLogo from "./images/linkedin.png";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };
    return (
        <div className="header">
            <div className="header__left">
                <img src={linkedinLogo} alt="linkedin_logo" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption title="Home" Icon={HomeIcon} />
                <HeaderOption title="My Network" Icon={GroupIcon} />
                <HeaderOption title="Jobs" Icon={WorkIcon} />
                <HeaderOption title="Message" Icon={MessageIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
            </div>
        </div>
    );
}

export default Header;
