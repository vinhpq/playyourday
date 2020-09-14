import React from 'react'
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ user }] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png" alt="" />

            </div>

            <div className="header__search">
                <SearchIcon  />
                <input placeholder="Search slack" />
            </div>

            <div className="header__right">
                <Avatar className="header__avatar" alt={user?.displayName} src={user?.photoURL}/>
                {/* <HelpOutlineIcon /> */}
            </div>
        </div>
    )
}

export default Header
