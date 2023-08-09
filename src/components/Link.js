import '../Main.css';
import React from 'react'
function Link(props) {
    return (
    <a className="" href={`${props.link}`} target="_blank" rel="noreferrer">
        <div 
            className="transition ease-in-out delay-150 bg-neutral-50 hover:-translate-y-1 hover:scale-101 hover:shadow-2xl duration-300 container mx-auto mt-10 flex  w-9/12 items-center justify-center h-12 rounded-lg text-center border-solid border-2 border-black">
            <h2 className=''>{props.title}</h2>
        </div>
    </a>
    );
}

export default Link;
