import React from "react";

function Inbox(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="19"
            fill="none"
            viewBox="0 0 27 19"
            {...props}
        >
            <path
                fill="currentColor"
                d="M26.82 7.762l-2.966-5.993A3.03 3.03 0 0021.096.06H5.873C4.675.06 3.656.69 3.117 1.769L.15 7.732c-.09.18-.15.39-.15.57v8.06a2.577 2.577 0 002.577 2.578h21.846A2.577 2.577 0 0027 16.362v-8.03c-.03-.21-.09-.42-.18-.57zm-8.12-.72c-.6 0-1.11.42-1.26 1.02-.03.12-.719 3.326-3.985 3.326-3.176 0-3.896-2.967-3.986-3.326-.12-.6-.629-1.02-1.258-1.02H3.356l2.068-4.135c.09-.15.27-.3.45-.3h15.223c.18 0 .36.09.45.3l2.037 4.136h-4.885z"
            ></path>
        </svg>
    );
}

export default Inbox;
