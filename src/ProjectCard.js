import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ICONS from './misc/icons.js'

const ProjectCard = ({ project, lightClicked }) => {

    const [demoHovered, setDemoHovered] = useState(false)
    const [githubHovered, setGithubHovered] = useState(false)

    const buttonStyle = {
        backgroundColor: lightClicked ? 'rgb(178, 176, 176)' : 'rgb(40, 39, 39)',
        borderColor: lightClicked ? 'rgb(178, 176, 176)' : 'rgb(40, 39, 39)',
        color: !lightClicked ? '#7d838d' : "#273e6e"
    };

    const hoveredStyle = {
        backgroundColor: lightClicked ? 'rgb(255, 255, 255)' : 'rgb(255, 255, 255)',
        borderColor: lightClicked ? 'rgb(255, 255, 255)' : 'rgb(255, 255, 255)',
        color: !lightClicked ? '#7d838d' : "#273e6e"
    };

    const cardItemsStyle = {
        backgroundColor: "rgb(178, 176, 176)",
        color: !lightClicked ? 'rgb(49, 39, 39)' : 'rgb(40, 39, 39)',
        fontFamily: 'Menlo, monospace',
    }

    function getIcons(technologies) {

        const projectIcons = [];
        const iconNames = Object.keys(ICONS);

        for (let technology of technologies) {
            if (iconNames.includes(technology)) projectIcons.push(ICONS[technology]);
        }

        return projectIcons;
    }

    return (
        <Card className="bg-transparent" style={{maxWidth: "550px"}}>
            <Card.Body style={cardItemsStyle}>
                <Card.Title style={{ fontSize: '1.3rem' }}>{project.title}</Card.Title>
                <Card.Text style={{ fontSize: '.89rem' }}>
                    {project.description}
                </Card.Text>
                <Card.Img style={{ paddingBottom: "10px", whiteSpace: 'pre-wrap' }}
                    variant="top"
                    src={project.image.url} />
                <Card.Text style={{ fontSize: "40px" }}>
                    {getIcons(project.technologies).map((technology, idx) => {
                        return (
                            <i className={technology} key={idx}></i>
                        );
                    })}
                </Card.Text>
                <ButtonGroup aria-label="Basic example" size="sm">
                    {project.page && 
                        <Button 
                            style={!demoHovered ? buttonStyle : hoveredStyle} 
                            variant="secondary" 
                            href={project.page} 
                            target="blank"
                            onMouseEnter={() => setDemoHovered(true)}
                            onMouseLeave={() => setDemoHovered(false)}>    
                                Demo</Button>}
                    {project.github && 
                        <Button 
                            style={!githubHovered ? buttonStyle : hoveredStyle} 
                            variant="secondary" 
                            href={project.github} 
                            target="blank"
                            onMouseEnter={() => setGithubHovered(true)}
                            onMouseLeave={() => setGithubHovered(false)}>
                                Github</Button>}
                </ButtonGroup>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;