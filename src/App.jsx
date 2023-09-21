import {useState} from 'react'
import './App.css'
import BreedSelector from "./components/BreedSelector.jsx";
import DogPicture from "./components/DogPicture.jsx";

function App() {
    const [breed, setBreed] = useState('');

    return (
        <>
            <h1>Dog Picture Viewer Thing</h1>
            <BreedSelector onChange={setBreed}/>
            <div style={{ margin: '2rem 0' }}>
                <DogPicture breed={breed}/>
            </div>
        </>
    )
}

export default App
