const express = require('express');
const business = require('./allRoutes/business');
const entertainment = require('./allRoutes/entertainment');
const general = require('./allRoutes/general');
const health = require('./allRoutes/health');
const science = require('./allRoutes/science');
const sports = require('./allRoutes/sports');
const technology = require('./allRoutes/technology');

const router = express.Router();

router.use('/', general);
router.use('/business', business);
router.use('/entertainment', entertainment);
router.use('/general', general);
router.use('/health', health);
router.use('/science', science);
router.use('/sports', sports);
router.use('/technology', technology);

module.exports = router;
