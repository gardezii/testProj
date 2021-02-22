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
    try {
      /**
       * Get company list
       */
      const companyList = await this.companyService.getCompanyHierarchy();

      return responseHandler.successResponse(
        res,
        200,
        '',
        'Company hierarchy list',
        companyList
      )
    } catch (err) {
      //  catches and sends error response
      return responseHandler.errorResponse(res, 400, err.message, err.description)
    }
  }
}

module.exports = GetCompanyHierarchyController;
