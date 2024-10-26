import express from 'express';
import * as sensorController from '../controllers/sensorController.js';

const router = express.Router();

router.get('/', sensorController.getSensors);
router.get('/:id', sensorController.getSensorById);
router.post('/', sensorController.createSensor);
router.put('/:id', sensorController.updateSensor);
router.delete('/:id', sensorController.deleteSensor);

export default router;
