interface User {
  ip: string;
  email: string;
  name: string;
}

const compose = (...fns) => val => fns.reduce((acc, fn) => fn(acc), val);

/*



ip | email | name
1  |   a   | user 1
1  |   b   | user 2
2  |   a   | user 3
3  |   c   | user 4
*/

class Node {
  private id;
  private neighbors = {};

  constructor(ip, user) {
    this.id = ip;
    this.neighbors[user.email] = user.name;
  }

  add(email, name) {
    this.neighbors[email] = new Node(email, { email, name });
    return this;
  }
}

export function twoKeys(users: User[]) {
  const nodes = {};

  for (let user of users) {
    const { ip, email, name } = user;

    if (nodes.hasOwnProperty(ip)) {
      nodes[ip].add(email, name);
    } else {
      Object.keys(nodes).nodes[ip] = new Node(ip, { email, name });
    }
  }
}
