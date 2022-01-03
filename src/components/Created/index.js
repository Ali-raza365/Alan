import React, { useContext, useState } from "react";
const Created = () => {
    return (
        <>
            {/* Responsive Desktop/Mobile Login form considered to be used as mobile first approach*/}
            {/* Wave animation credit: https://codepen.io/goodkatz */}
            <div className="header">
                {/*Content before waves*/}
                <div className="inner-header flex">
                    {/*Just the logo.. Don't mind this*/}
                    <h3 style={{ fontWeight: "bold", fontSize: "6vw" }}>Created By</h3>
                </div>
                {/*Waves Container*/}
                <div>
                    <svg
                        className="waves"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none"
                        shapeRendering="auto"
                    >
                        <defs>
                            <path
                                id="gentle-wave"
                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            />
                        </defs>
                        <g className="parallax">
                            <use
                                xlinkHref="#gentle-wave"
                                x={48}
                                y={0}
                                fill="rgba(255,255,255,0.7"
                            />
                            <use
                                xlinkHref="#gentle-wave"
                                x={48}
                                y={3}
                                fill="rgba(255,255,255,0.5)"
                            />
                            <use
                                xlinkHref="#gentle-wave"
                                x={48}
                                y={5}
                                fill="rgba(255,255,255,0.3)"
                            />
                            <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
                        </g>
                    </svg>
                </div>
                {/*Waves end*/}
            </div>
            {/*Header ends*/}
            {/*Content starts*/}
            <div className="content flex">
                <h1 className="createdBy">Muhammad Uzair</h1>
                <h1 className="createdBy">Abbas Haider</h1>
            </div>
        </>
    );
};
export default Created;