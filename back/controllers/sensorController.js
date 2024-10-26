import Sensor from '../models/Sensor.js';

export const getSensors = async (req, res) => {
    const sensors = await Sensor.find();
    res.json(sensors);
};

export const getSensorById = async (req, res) => {
    const sensor = await Sensor.findById(req.params.id);
    if (!sensor) return res.status(404).json({ message: 'Sensor not found' });
    res.json(sensor);
};

export const createSensor = async (req, res) => {
    const { nodeId, airQuality, lightIntensity, soundLevels } = req.body;
    const existingSensor = await Sensor.findOne({ nodeId });
    if (existingSensor) return res.status(400).json({ message: 'Sensor already exists' });

    const sensor = new Sensor({ nodeId, airQuality, lightIntensity, soundLevels });
    await sensor.save();
    res.status(201).json(sensor);
};

export const updateSensor = async (req, res) => {
    const { airQuality, lightIntensity, soundLevels } = req.body;
    const sensor = await Sensor.findByIdAndUpdate(req.params.id, { airQuality, lightIntensity, soundLevels }, { new: true });
    if (!sensor) return res.status(404).json({ message: 'Sensor not found' });
    res.json(sensor);
};

export const deleteSensor = async (req, res) => {
    const sensor = await Sensor.findByIdAndDelete(req.params.id);
    if (!sensor) return res.status(404).json({ message: 'Sensor not found' });
    res.json({ message: 'Sensor deleted' });
};
