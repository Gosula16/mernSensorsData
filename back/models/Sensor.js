import mongoose from 'mongoose';

const sensorSchema = new mongoose.Schema({
    nodeId: { type: String, required: true, unique: true },
    airQuality: Number,
    lightIntensity: Number,
    soundLevels: Number,
});

export default mongoose.model('Sensor', sensorSchema);
