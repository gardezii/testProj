var express     = require('express');
var router      = express.Router();

const GetCompanyHierarchyController =  require('../../controllers/company/getCompanyHierarchyController');

router.get(
  '/getCompanyHierarchy',
  (req, res, next) => new GetCompanyHierarchyController().execute(req, res, next)
);

module.exports = router;
