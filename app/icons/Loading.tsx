import React from "react";

function Loading() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            fill="none"
            viewBox="0 0 24 26"
        >
            <g stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5">
                <path d="M12 .5v6.25"></path>
                <path d="M12 25.5v-6.25"></path>
                <path d="M24 13h-6"></path>
                <path d="M0 13h6"></path>
                <path d="M20.5 4.146l-4.25 4.427"></path>
                <path d="M3.5 21.854l4.25-4.427"></path>
                <path d="M20.5 21.854l-4.25-4.427"></path>
                <path d="M3.5 4.146l4.25 4.427"></path>
            </g>
        </svg>
    );
}

export default Loading;
