const wdio = require("webdriverio");

const opts = {
  path: "/wd/hub",
  port: 4723,
  capabilities: {
    platformName: "Android",
    deviceName: "emulator-5554",
    app:
      "D:/reactNativeProjects/AwesomeProject/android/app/build/outputs/apk/debug/app-debug.apk",
    automationName: "UiAutomator2",
  },
};
describe("user tests", () => {
  it("can handle commands using async/await", async () => {
    const client = await wdio.remote(opts);
    const field = await client.$("~input");
    await field.setValue("Hello World!");
    const value = await field.getText();
    return value === "Hello World";
  });
});
