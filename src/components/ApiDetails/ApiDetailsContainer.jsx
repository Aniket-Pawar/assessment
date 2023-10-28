import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from "react-router-dom";

import './ApiDetailsContainer.css';

const ApiDetailsContainer = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { providerDetails = {} } = state;

    const handleExploreMoreApisButtonClick = () => {
        navigate('/');
    };

    return (
        <div className='api-details'>
            <Card className='card-color'>
                <Card.Body>
                    <div className='align-center'>
                        <span>
                            <img src={providerDetails?.info?.['x-logo']?.url} alt="Logo" />
                        </span>
                        <span>{providerDetails?.info?.title}</span>
                    </div>
                </Card.Body>
            </Card>
            <Card className='card-color'>
                <Card.Body>
                    <div>
                        <div>
                            Description
                        </div>
                        <div>
                            {providerDetails?.info?.description}
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card className='card-color'>
                <Card.Body>
                    <div>
                        <div>
                            Contact
                        </div>
                        <div>
                            {`Email - ${providerDetails?.info?.contact?.email}`}
                        </div>
                        <div>
                            {`Name - ${providerDetails?.info?.contact?.name}`}
                        </div>
                        <div>
                            {`URL - ${providerDetails?.info?.contact?.url}`}
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <div className="row align-items-center align-btn">
                <div className="col text-center">
                    <Button variant="primary" onClick={handleExploreMoreApisButtonClick}>Exlore more APIs</Button>
                </div>
            </div>
        </div>
    );
}

export default ApiDetailsContainer;