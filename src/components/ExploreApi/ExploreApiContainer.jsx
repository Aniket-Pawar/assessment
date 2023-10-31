import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

import ApiClient from '../../utils/ApiClient';
//{getProviders, getProviderSpecificApiDetails}

import './ExploreApiContainer.css';

const ExploreApiContainer = () => {
    const navigate = useNavigate();
    const [providerList, setProviderList] = useState([]);

    const handleExploreApisButtonClick = () => {
        ApiClient.getProviders().then(providers => {
            setProviderList(providers?.data || []);
        });
    };

    const handleApiDetailsNavigationAction = (providerName) => {
        if (providerName) {
            ApiClient.getProviderSpecificApiDetails(providerName).then(providerDetails => {
                if (providerDetails.apis[providerName]) {
                    navigate("/apiDetail", { state: { providerDetails: providerDetails.apis[providerName] } });
                }
            });
        }
    };

    const constructApiListSection = () => {
        let apiListSection = null;
        const accordionItemList = [];
        if (providerList.length) {
            providerList.forEach((provider, index) => {
                accordionItemList.push(
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>{provider}</Accordion.Header>
                        <Accordion.Body onEnter={() => handleApiDetailsNavigationAction(provider)}>
                            {`Please click here to view details of ${provider} API`}
                        </Accordion.Body>
                    </Accordion.Item>
                );
            });

            apiListSection = (
                <Accordion>
                    {accordionItemList}
                </Accordion>
            );
        }

        return apiListSection;
    };

    return (
        <div className="container">
            <div className="row align-items-center home-row">
                <div className="col text-center">
                    <Button variant="primary" onClick={handleExploreApisButtonClick}>Exlore Web APIs</Button>
                </div>
            </div>
            {constructApiListSection()}
        </div>
    );
}

export default ExploreApiContainer;

