import './Footer.css'


const Icon = (props) => {

    let click = () => {
        window.open(props.url)
    }

    let className = 'Icon text-center border border-solid border-emerald-500 py-4 px-5 cursor-pointer';

    if (props.icon === "fa-solid fa-angles-up") {
        click = () => {
            window.open("#Welcome", "_self")
        }

        className += " bg-emerald-500";
    }

    return (
        <div className={className} onClick={click}>
            <i className={props.icon + " fa-xl"}></i>
        </div>
    );
}


export default function Footer() {
    return (
        <div className='Footer p-20 grid place-items-center'>
            <div className='Footer-container grid gap-y-10'>
                <div className='Go-up flex justify-center mb-8'>
                    <div className='w-fit'>
                        <Icon icon="fa-solid fa-angles-up" url="#Welcome" />
                    </div>
                </div>
                <div className='Social grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-x-6'>
                    <Icon icon={"fa-brands fa-linkedin-in"} url="https://www.linkedin.com/in/omar-el-atyqy/" />
                    <Icon icon={"fa-brands fa-instagram"} url="https://www.instagram.com/omaratyqy/" />
                    <Icon icon={"fa-brands fa-twitter"} url="https://twitter.com/OmarAtyqy" />
                    <Icon icon={"fa-brands fa-facebook-f"} url="https://www.facebook.com/omar.elatyqy/" />
                </div>
                <div className='Copyright text-center'>
                    <p className='text-white'>EL ATYQY OMAR <span className='text-emerald-500'>&copy;2022</span></p>
                </div>
            </div>
        </div>
    );
}