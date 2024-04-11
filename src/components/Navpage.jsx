
import React, { useState, useEffect } from 'react'


export default function Navpage(props) {


    const handleNextPage = () => {
        props.setPage(props.page + 1);

    };

    const handlePrevPage = () => {
        if (props.page > 1) {
            props.setPage(props.page - 1);
        }
    };

 


    return (
        <div>

            <header className="header">

                <button className="nav-page-btn" onClick={handlePrevPage}>
                    Previous
                </button>
                <p>Page: {props.page}</p>
                <button className="nav-page-btn" onClick={handleNextPage}>
                    Next
                </button>
            </header>

        </div >
    )
}





