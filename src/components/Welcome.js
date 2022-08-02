import "./Welcome.css"
import React from "react";
import Typewriter from "typewriter-effect";



const TypeWriter = () => {

    const options={
        strings: ['web developper', 'data scientist', 'passionate geek'],
        autoStart: true,
        loop: true,
        wrapperClassName: "Typewriter text-emerald-400 txt-rotate"
      }

    return (
        <Typewriter options={options}/>
    );
}


// Welcome section
export default function Welcome(props) {

    return (
        <div className="Welcome h-screen grid place-items-center" id={props.id}>
            <div className="Welcome-content grid place-items-center space-y-10 text-white">
                <p className="Welcome-text text-center ">
                    Hello, I'm <span className="Welcome-name text-emerald-400">Omar El Atyqy</span>.
                    <br />
                    <span>I'm a <TypeWriter />.</span>
                </p>
                <a href="#About" className="Welcome-button hover:bg-emerald-500 py-4 px-6">
                    Let's have a look!
                </a>
            </div>
        </div>
    );
}