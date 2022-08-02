import './Projects.css'
import { emagg, portfolio, raindrop } from '../images/projects/images_index';
import { Button, Box, Image } from '@chakra-ui/react';
import { Fade } from 'react-reveal';

const ProjectImage = (props) => {

    let target = "_blank";
    if (props.link === "#Welcome") {
        target = "";
    }

    return (
        <Fade bottom>
            <div className='Image relative grid place-items-center border rounded border-solid border-emerald-500'>
                <Box className='Image-img absolute top-0 left-0'>
                    <Image src={props.source} />
                </Box>
                <div className='Image-text absolute top-0 left-0 grid grid-cols-1'>
                    <div className='Image-text-container relative'>
                        <div className='Image-text-top grid place-items-center gap-y-0'>
                            <h3>{props.title}</h3>
                            <p className='text-emerald-500'>{props.technologies}</p>
                        </div>
                        <div className='Image-text-bot grid place-items-center'>
                            <Button colorScheme='teal' size='md'>
                                <a href={props.link} target={target}>Learn More</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}


const Gallery = () => {

    const projects = [{
        title: "e-M'Agg",
        source: emagg,
        technologies: "Django / MangoDB",
        link: "https://github.com/OmarAtyqy/news-aggregator"
    },
    {
        title: "Raindrop",
        source: raindrop,
        technologies: "HTML / CSS / Javascript",
        link: "https://github.com/OmarAtyqy/rain-drop"
    },
    {
        title: "Portfolio",
        source: portfolio,
        technologies: "React JS / Chakra-UI",
        link: "#Welcome"
    }];

    return (
        <div className='Gallery h-fit grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 place-items-center gap-y-5 gap-x-3'>
            {projects.map((item, index) => {
                return <ProjectImage key={index} source={item.source} technologies={item.technologies} link={item.link} title={item.title} />
            })}
        </div>
    );
}


export default function Projects(props) {

    return (
        <div className='Projects grid p-20 place-items-center' id={props.id}>
            <div className='Projects-container grid gap-y-24'>
                <Fade right>
                    <div className='Projects-title grid place-items-center gap-y-4'>
                        <h1 className='text-white text-center'>
                            PROJECTS
                        </h1>
                        <hr className="border-2 rounded border-solid border-emerald-500 bg-emerald-500 w-16" />
                    </div>
                </Fade>
                <div className='Projects-gallery'>
                    <Gallery />
                </div>
            </div>
        </div>
    );
}