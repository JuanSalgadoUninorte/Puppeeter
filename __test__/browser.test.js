const puppeteer = require('puppeteer')

describe('Mi primer test en puppeteer', () => {

    it('Debe abrir y cerrar el navegador', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            // slowMo: 0,
            // devtools: false,
            // defaultViewport: {
            //     width: 2100,
            //     height: 1080
            // }
            // args: ['--window-size=1920,1080']
            defaultViewport: null
        })

        const page = await browser.newPage()
        await page.goto('https://github.com/')
        //await page.setDefaultTimeout(20000)
        await page.waitForSelector('img')
        await page.reload()
        await page.goto('https://platzi.com/')
        await page.waitForSelector('#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Logo > div > a > div > figure > img')
        await page.goBack()
        await page.goForward()
        //await page.waitForSelector('img')
        const page2 = await browser.newPage()
        await page2.goto('https://facebook.com')
        await browser.close()
    }, 40000)

})
//npm run test