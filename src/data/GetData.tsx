import { useState, useEffect } from "react";
import { DEVELOPMENTGUIDE_URL, PERSONAL_URL, SWIFTOVATE_URL } from "../constants/URLS";

export const GetData = () => {
    // localStorage.clear();
    
    const [personal_data, setPersonal_Data] = useState<any[]>(JSON.parse(localStorage.getItem('personal_data') || '[{}]'));
    const [devguide_data, setDevguide_data] = useState<any[]>(JSON.parse(localStorage.getItem('devguide_data') || '[{}]'));
    const [swiftovate_data, setSwiftovate_data] = useState<any[]>(JSON.parse(localStorage.getItem('swiftovate_data') || '[{}]'));

    useEffect(() => {
        if (personal_data.length === 1) {
            console.log('Fetching PERSONAL_URL');
            fetch(PERSONAL_URL)
                .then(response => response.json())
                .then(data => {
                    setPersonal_Data(data);
                    localStorage.setItem('personal_data', JSON.stringify(data)); // Save data locally
                    console.log('PERSONAL_URL saved!')
                })
                .catch(error => console.error('Error fetching the repositories:', error));
        }

        if (devguide_data.length === 1) {
            console.log('Fetching DEVELOPMENTGUIDE_URL');
            fetch(DEVELOPMENTGUIDE_URL)
                .then(response => response.json())
                .then(data => {
                    setDevguide_data(data);
                    localStorage.setItem('devguide_data', JSON.stringify(data)); // Save data locally
                    console.log('DEVELOPMENTGUIDE_URL saved!')
                })
                .catch(error => console.error('Error fetching the repositories:', error));
        }

        if (swiftovate_data.length === 1) {
            console.log('Fetching SWIFTOVATE_URL');
            fetch(SWIFTOVATE_URL)
                .then(response => response.json())
                .then(data => {
                    setSwiftovate_data(data);
                    localStorage.setItem('swiftovate_data', JSON.stringify(data)); // Save data locally
                    console.log('SWIFTOVATE_URL saved!')
                })
                .catch(error => console.error('Error fetching the repositories:', error));
        }
    }, [personal_data, devguide_data, swiftovate_data]);

    return (
        <>
        </>
    )
}
