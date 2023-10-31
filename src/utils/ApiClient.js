const API_BASE_URL = 'https://api.apis.guru/v2';

export default {
    getProviders: () => {
        return fetch(`${API_BASE_URL}/providers.json`)
            .then(res => res.json());
    },
    getProviderSpecificApiDetails: (providerName) => {
        return fetch(`${API_BASE_URL}/${providerName}.json`)
            .then(res => res.json());
    }
}