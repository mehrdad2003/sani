'use strict';                                               
const puppeteer = require('puppeteer');
(async() => {
const browser = await puppeteer.launch({executablePath: '/usr/bin/google-chrome-stable',headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
                                   
const page = await browser.newPage();
await page.goto('https://mehrdad2003.github.io/testy/1.html');      
await page.waitForTimeout(700000)                                                    
browser.close();
})();