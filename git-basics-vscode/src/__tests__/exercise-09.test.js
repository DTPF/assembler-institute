const git = require("../../utils/git");

describe("exercise-09", () => {
  test("create a new stash entry without a message", async () => {
    let stashList = await git.stashList();

    expect(stashList.total).toBe(1);
  });
});
