import './About.css'
import { TimeIcon, PlusSquareIcon, SettingsIcon, EditIcon } from '@chakra-ui/icons';
import { Progress, Badge } from '@chakra-ui/react';
import profile_pic from '../images/me.jfif'

const Priority = (props) => {

    return (
        <div className='Priority grid place-items-center gap-y-4'>
            <div className='Priority-icon border-2 border-solid border-white bg-emerald-500 p-8 rounded-2xl'>
                {props.icon}
            </div>
            <div className='Priority-title'>
                <h2>
                    {props.title}
                </h2>
            </div>
            <div className='Priority-text w-5/6'>
                <p className='text-center'>
                    {props.text}
                </p>
            </div>
        </div>
    );
}

const Me = () => {
    return (
        <div className='Me w-fit grid place-items-center gap-y-4'>
            <img src={profile_pic} className="rounded-full w-56 h-56" />
            <h2 className='text-center'>
                Who Am I?
            </h2>
            <hr className='border-2 rounded border-solid border-emerald-300 bg-emerald-300 w-1/4' />
            <p className='text-center w-fit lg:w-3/4'>
                I'm a Front-End Developer for ChowNow in Los Angeles, CA.
                I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
            </p>
        </div>
    );
}

const Skills = () => {

    const skills = [{
        skill: "HTML",
        percentage: 90
    },
    {
        skill: "CSS",
        percentage: 90
    },
    {
        skill: "Javascript",
        percentage: 70
    },
    {
        skill: "Python",
        percentage: 80
    },
    {
        skill: "React",
        percentage: 50
    },
    {
        skill: "Data Science",
        percentage: 40
    }];

    return (
        <div className='Skills w-5/6 grid gap-y-10 mt-10 lg:mt-0'>
            {skills.map((item, index) => {
                return (
                    <div key={index}>
                        <div className='flow-root'>
                            <Badge className='float-left'>{item.skill}</Badge>
                            <Badge className='float-right'>{item.percentage}%</Badge>
                        </div>
                        <Progress colorScheme='green' value={item.percentage} />
                    </div>
                );
            })}
        </div>
    );
}

export default function About(props) {

    const icons = [<TimeIcon w={12} h={12} color="white" />,
    <PlusSquareIcon w={12} h={12} color="white" />,
    <SettingsIcon w={12} h={12} color="white" />,
    <EditIcon w={12} h={12} color="white" />];

    const titles = ["Fast", "Responsive", "Intuitive", "Dynamic"];

    const texts = ["Fast load times and lag free interaction, my highest priority.",
        "My layouts will work on any device, big or small.",
        "Strong preference for easy to use, intuitive UX/UI.",
        "Websites don't have to be static, I love making pages come to life."];

    return (
        <div className='About h-fit grid grid-cols-1 place-items-center' id={props.id}>
            <div className='About-container grid gap-y-16 pb-20 pt-16'>
                <div className='About-title'>
                    <div className='title-container grid place-items-center gap-y-3'>
                        <h1>ABOUT</h1>
                        <hr className='border-2 rounded border-solid border-emerald-500 bg-emerald-500 w-16' />
                    </div>
                </div>
                <div className='About-priorities grid grid-cols-2 gap-y-8 lg:gap-y-0 lg:grid-cols-4'>
                    {icons.map((item, index) => {
                        return <Priority key={index} icon={item} title={titles[index]} text={texts[index]} />
                    })}
                </div>
                <div className='About-me grid grid-cols-1 lg:grid-cols-2'>
                    <div className='Me-container'>
                        <Me />
                    </div>
                    <div className='Skills-container grid place-items-center lg:place-items-start'>
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
}