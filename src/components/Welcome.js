import "./Welcome.css"


// Welcome section
export default function Welcome () {


    return (
        <div className="Welcome w-screen h-screen grid place-items-center">
            <div className="Welcome-content grid place-items-center">
                <p className="Welcome-text text-center">
                    Hello, I'm Omar El Atyqy.
                    <br />
                    I'm a Fullstack Web Developper
                </p>
                <hr className="w-1/2" />
                <a className="Welcome-buttom">
                    Let's have a look!
                </a>
            </div>
        </div>
    );
}