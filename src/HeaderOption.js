import React from "react";
import "./HeaderOption.css";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ onClick, avatar, Icon, title }) {
    const user = useSelector(selectUser);
    return (
        <div className="headeroption" onClick={onClick}>
            {Icon && <Icon className="headeroption__icon" />}

            {avatar && (
                <Avatar
                    alt="profile"
                    src={user?.profileUrl}
                    className="headeroption__avatar"
                >
                    {user?.email[0]}
                </Avatar>
            )}

            <h3 className="headeroption__title">{title}</h3>
        </div>
    );
}

export default HeaderOption;
