/**
 * Company Service
 */

const User = require('../../models/user')

class CompanyService {

  /**
   * Get company hierarchy
   */
  async getCompanyHierarchy() {
    let map = {}, node, roots = [], index;
    const users = await User.findAll({raw: true});

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
