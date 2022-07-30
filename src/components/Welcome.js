import "./Welcome.css"
import React from "react";
import { VisuallyHidden } from "@chakra-ui/react";


// Welcome section
export default function Welcome(props) {

    return (
        <div className="Welcome h-screen grid place-items-center" id={props.id}>
            <div className="Welcome-content grid place-items-center space-y-10 text-white">
                <VisuallyHidden>
                    <p className="Welcome-text text-center ">
                        Hello, I'mOmar El Atyqy.
                        <br />
                        I'm a web developper, data scientist and a passionate geek.
                    </p>
                </VisuallyHidden>
                <p className="Welcome-text text-center ">
                    Hello, I'm <span className="Welcome-name text-emerald-400">Omar El Atyqy</span>.
                    <br />
                    I'm a <span className="Welcome-job text-emerald-400 txt-rotate" data-period="1000"
                        data-rotate='[ "web developper", "data scientist", "passionate geek" ]'></span>.
                </p>
                <a href="#About" className="Welcome-button hover:bg-emerald-500 py-4 px-6">
                    <VisuallyHidden>
                        let's have a look!
                    </VisuallyHidden>
                    Let's have a look!
                </a>
            </div>
        </div>
    );
}