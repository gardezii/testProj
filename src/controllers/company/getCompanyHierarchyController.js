const BaseController = require('../baseController');
const { CompanyService, UserService } = require('../../services/');

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
    this.userService = new UserService();
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
    const userList = await this.userService.getAllUsers();

    res.render('./company/index', { list: companyList, title: "Employee Manager Hierarchy", message: "", userList: userList });
  }
}

module.exports = GetCompanyHierarchyController;
