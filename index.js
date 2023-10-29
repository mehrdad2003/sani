const express = require('express'),
    app = express(),
    puppeteer = require('puppeteer');

app.get("/", async (request, response) => {
  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox']
    });
    const page = await browser.newPage();
    await page.goto('https://mehrdad2003.github.io/testy/1.html');
   await page.waitForTimeout(700000)
    await browser.close();
   
  } catch (error) {
    console.log(error);
  }
});

var listener = app.listen(5000, function () {
  console.log('Your app is listening on port ');
});
