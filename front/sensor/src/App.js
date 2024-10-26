import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SensorForm from './components/SensorForm';
import SensorList from './components/SensorList';
import './App.css';

const App = () => {
    const [sensors, setSensors] = useState([]);
    const [currentSensor, setCurrentSensor] = useState(null);

    const fetchSensors = async () => {
        const response = await axios.get('http://localhost:5000/api/sensors');
        setSensors(response.data);
    };

    useEffect(() => {
        fetchSensors();
    }, []);

    return (
        <div className="container">
            <h1>Sensor Management</h1>
            <SensorForm fetchSensors={fetchSensors} currentSensor={currentSensor} setCurrentSensor={setCurrentSensor} />
            <SensorList sensors={sensors} fetchSensors={fetchSensors} setCurrentSensor={setCurrentSensor} />
        </div>
    );
};

export default App;
