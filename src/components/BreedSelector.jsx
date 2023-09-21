import {useCallback, useEffect, useState} from "react";

const BreedSelector = ({onChange}) => {
    const [breeds, setBreeds] = useState([]);

    const handleOnChange = useCallback(
        (event) => {
            onChange(event.currentTarget.value);
        },
        [onChange],
    );

    const fetchBreeds = useCallback(
        async () => {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            const data = await response.json();

            setBreeds(Object.keys(data.message));
        },
        [],
    );

    useEffect(() => {
        fetchBreeds()
            .then(() => {
                console.log('Successfully fetched breeds');
            })
            .catch(console.error)
    }, [fetchBreeds]);

    return (
        <select onChange={handleOnChange}>
            {breeds.length === 0
                ? <option disabled>Loading...</option>
                : <>
                    <option value='' disabled selected>
                        Select a breed
                    </option>
                    {breeds.map((breed) => (
                        <option key={breed}>
                            {breed}
                        </option>
                    ))}
                </>
            }
        </select>
    );
};

export default BreedSelector;
