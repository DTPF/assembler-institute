const git = require("../../utils/git");

describe("exercise-14", () => {
  test("clear the stash list", async () => {
    let stashList = await git.stashList();

    expect(stashList.total).toBe(0);
  });
});
