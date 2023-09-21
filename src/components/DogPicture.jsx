import {useCallback, useEffect, useState} from "react";

const DogPicture = ({breed}) => {
    const [dogImage, setDogImage] = useState('');

    const fetchDogImageByBreed = useCallback(
        async (dogBreed) => {
            const response = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`);
            const data = await response.json();

            setDogImage(data.message);
        },
        [],
    );

    useEffect(() => {
        if (!breed) {
            setDogImage('');
            return;
        }

        fetchDogImageByBreed(breed)
            .then(() => {
                console.log('Image fetched successfully')
            })
            .catch(console.error)
    }, [breed, fetchDogImageByBreed]);

    if (!dogImage) {
        return (
            <div><em>No breed selected</em></div>
        );
    }

    return (
        <div>
            <img src={dogImage} alt={`A ${breed}`}/>
        </div>
    );
};

export default DogPicture;