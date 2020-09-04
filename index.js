const wdio = require("webdriverio");
const assert = require("assert");

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

async function main() {
  const client = await wdio.remote(opts);

  //Retrieving input field and button through accessibilityLabel ( ~ )

  const field = await client.$("~input");
  const btn = await client.$("~btn");

  // Doing some actions
  // 1. Setting input value
  // 2. Clicking on button

  for (let i = 0; i < 13; i++) {
    await field.setValue("Element " + (i + 1));
    await btn.click();
  }

  // Waiting function
  await new Promise((r) => setTimeout(r, 3000));

  //Clicking on each item from a list.

  const items = await client.$$("~listItem");
  for (let index = 0; index < items.length; index++) {
    await new Promise((r) => setTimeout(r, 1000));
    await items[index].click();
  }

  //Quitting the application and deleting session.
  await new Promise((r) => setTimeout(r, 3000));
  await client.deleteSession();
}

main();
