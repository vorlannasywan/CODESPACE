const express = require('express');
const validatePublisher = require('../middleware/validatepublisher');
const PublisherController = require('../controller/PublisherController');
const router = express.Router();

router.post('/', validatePublisher, PublisherController.CreatePublisher);
router.get('/get', PublisherController.GetPublishers);
router.put('/:id', validatePublisher, PublisherController.UpdatePublisher);
router.delete('/:id', PublisherController.DeletePublisher);

module.exports = router;
