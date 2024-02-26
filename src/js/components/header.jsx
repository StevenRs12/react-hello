import React from "react";

const Header = ({ nickName }) => {
    return (<header>
        <div className="header-container">
            {nickName}
        </div>
    </header>
    )
}

export default Header;