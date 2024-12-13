import Webinar from '../models/Webinar.js';

export const createWebinar = async (req, res) => {
  try {
    const { level, language } = req.body;

    const validLevels = ['Beginner', 'Intermediate', 'Advanced'];
    const validLanguages = ['English', 'Hindi'];
  
    if (!validLevels.includes(level)) {
      return res.status(400).json({ message: 'Invalid level. Valid values are: Beginner, Intermediate, Advanced.' });
    }
  
    if (!validLanguages.includes(language)) {
      return res.status(400).json({ message: 'Invalid language. Valid values are: English, Hindi.' });
    }
 
    const webinar = new Webinar(req.body);
    await webinar.save();
    res.status(201).json(webinar);
  } catch (error) {

    res.status(400).json({ message: error.message });
  }
};



export const getAllWebinars = async (req, res) => {
  try {
    const { level, category, language } = req.query;
    const filters = {};

    if (level) filters.level = level;
    if (category) filters.category = category;
    if (language) filters.language = language;

    const webinars = await Webinar.find(filters);
    res.status(200).json(webinars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateWebinar = async (req, res) => {
  try {
    const webinar = await Webinar.findByIdAndUpdate(req.params.tag, req.body, { new: true });
    if (!webinar) {
      return res.status(404).json({ message: 'Webinar not found' });
    }
    res.status(200).json(webinar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const deleteWebinar = async (req, res) => {
  try {
    const webinar = await Webinar.findByIdAndDelete(req.params.tag);
    if (!webinar) {
      return res.status(404).json({ message: 'Webinar not found' });
    }
    res.status(200).json({ message: 'Webinar deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};