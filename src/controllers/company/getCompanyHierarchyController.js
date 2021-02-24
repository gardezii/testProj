const BaseController = require('../baseController');
const { CompanyService } = require('../../services/');
const { responseHandler } = require('../../utils')

/**
 * GetCompanyHierarchy
 * Get company hierarchy
 */
class GetCompanyHierarchyController extends BaseController {

  /**
   * class constructor
   */
  constructor() {
    super();
    this.companyService = new CompanyService();
  }

  /**
   * Handle get company hierarchy request
   * @param req
   * @param res
   * @param next
   * @return {Promise<*>}
   */
  async executeImpl (req, res, next) {
    /**
     * Get company list
     */
    const companyList = await this.companyService.getCompanyHierarchy();

    res.render('./company/index', { list: companyList, title: "Hello World", message: "testing project" });
  }
}

module.exports = GetCompanyHierarchyController;
