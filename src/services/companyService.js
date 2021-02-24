/**
 * Company Service
 */

const UserService = require('./userService');

class CompanyService {

  /**
   * class constructor
   */
  constructor() {
    this.userService = new UserService();
  }

  /**
   * Get company hierarchy
   */
  async getCompanyHierarchy() {
    const users = await this.userService.getAllUsers();
    return this.convertDataToTree(users);
  }

  /**
   * Convert the data into a tree form
   * @param users
   * @return {Array}
   */
  convertDataToTree(users) {
    let map = {}, node, roots = [], index;
    for (index = 0; index < users.length; index += 1) {
      map[users[index].id] = index; // initialize the map
      users[index].children = []; // initialize the children
    }

    for (index = 0; index < users.length; index += 1) {
      node = users[index];
      if (node.manager_id !== null) {
        // if you have dangling branches check that map[node.parentId] exists
        users[map[node.manager_id]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }
}

module.exports = CompanyService;
