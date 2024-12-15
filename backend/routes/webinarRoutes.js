import express from 'express';
import {
  createWebinar,
  getAllWebinars,
  updateWebinar,
  deleteWebinar,
} from '../controllers/webinarController.js';

const router = express.Router();

router.post('/addWebinar', createWebinar);    
router.get('/webinars', getAllWebinars);      
router.put('/webinars/:tag', updateWebinar)
router.delete('/webinars/:tag', deleteWebinar); 

export default router;
