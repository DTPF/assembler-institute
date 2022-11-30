const git = require("../../utils/git");

describe("exercise-10", () => {
  test("use git stash pop to remove the stash entry", async () => {
    let stashList = await git.stashList();

    expect(stashList.total).toBe(0);
  });
});
