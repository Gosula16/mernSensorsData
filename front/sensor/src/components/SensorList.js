import React from 'react';
import axios from 'axios';

const SensorList = ({ sensors, fetchSensors, setCurrentSensor }) => {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/sensors/${id}`);
        fetchSensors();
    };

    const handleEdit = (sensor) => {
        setCurrentSensor(sensor);
    };

    return (
        <ul>
            {sensors.map(sensor => (
                <li key={sensor._id}>
                    {sensor.nodeId}: {sensor.airQuality} {sensor.lightIntensity} {sensor.soundLevels}
                    <div>
                        <button onClick={() => handleEdit(sensor)}>Update</button>
                        <button onClick={() => handleDelete(sensor._id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default SensorList;
