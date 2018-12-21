import { twoKeys } from "./two-keys-index";

/*
<ip, email> -> user
<ip1, email1> -> 'user 1'
<ip1, email2> -> 'user 2'
<ip2, email1> -> 'user 3'
<ip3, email3> -> 'user 4'

*/

describe("two keys index", () => {
  test("ijosijda", () => {
    const users = [
      { ip: "1", email: "a", name: "user 1" },
      { ip: "1", email: "b", name: "user 2" },
      { ip: "2", email: "a", name: "user 3" },
      { ip: "3", email: "c", name: "user 4" }
    ];

    // how many distinct users
    expect(twoKeys(users)).toBe(2);
  });
});
