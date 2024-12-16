import express from 'express';
import {
  createWebinar,
  getAllWebinars,
  updateWebinar,
  deleteWebinar,
  getFilteredWebinars,
} from '../controllers/webinarController.js';

const router = express.Router();

router.post('/addWebinar', createWebinar);    
router.post('/getfilteredwebinars',getFilteredWebinars)
router.get('/webinars', getAllWebinars);      
router.put('/webinars/:tag', updateWebinar)
router.delete('/webinars/:tag', deleteWebinar); 

export default router;
