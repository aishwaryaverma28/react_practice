import React from "react";

const Navbar = ({ filterItem, menuList }) => {

    return(
        <>
        <nav className="navbar">
            <div className="btn-group">
                {menuList.map((elem) => {
                    return(
                        <button className="btn-group__item" onClick={() => filterItem(elem)}>{elem}</button>

                    )
                })}
                
            </div>
        </nav>
        </>
    )
}

export default Navbar