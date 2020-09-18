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
                {/* <img src="https://nextbestsolution.com/wp-content/uploads/2020/03/Transparent.png" alt="" /> */}
                <h2>Plan your day, live your way</h2>
            </div>

            {/* <div className="header__search">
                <SearchIcon  />
                <input placeholder="Search a todo item" />
            </div> */}

            <div className="header__right">
                <Avatar className="header__avatar" alt={user?.displayName} src={user?.photoURL}/>
                {/* <HelpOutlineIcon /> */}
            </div>
        </div>
    )
}

export default Header
