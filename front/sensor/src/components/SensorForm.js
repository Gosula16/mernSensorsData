import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SensorForm = ({ fetchSensors, currentSensor, setCurrentSensor }) => {
    const [sensor, setSensor] = useState({ nodeId: '', airQuality: '', lightIntensity: '', soundLevels: '' });

    useEffect(() => {
        if (currentSensor) {
            setSensor(currentSensor);
        } else {
            setSensor({ nodeId: '', airQuality: '', lightIntensity: '', soundLevels: '' });
        }
    }, [currentSensor]);

    const handleChange = (e) => {
        setSensor({ ...sensor, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (currentSensor) {
                await axios.put(`http://localhost:5000/api/sensors/${currentSensor._id}`, sensor);
            } else {
                await axios.post('http://localhost:5000/api/sensors', sensor);
            }
            fetchSensors();
            setCurrentSensor(null);
            setSensor({ nodeId: '', airQuality: '', lightIntensity: '', soundLevels: '' });
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="nodeId" value={sensor.nodeId} onChange={handleChange} placeholder="Node ID" required />
            <input name="airQuality" value={sensor.airQuality} onChange={handleChange} placeholder="Air Quality" type="number" required />
            <input name="lightIntensity" value={sensor.lightIntensity} onChange={handleChange} placeholder="Light Intensity" type="number" required />
            <input name="soundLevels" value={sensor.soundLevels} onChange={handleChange} placeholder="Sound Levels" type="number" required />
            <button type="submit">{currentSensor ? 'Update Sensor' : 'Add Sensor'}</button>
        </form>
    );
};

export default SensorForm;
