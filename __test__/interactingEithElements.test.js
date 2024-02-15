const puppeteer = require('puppeteer')

describe('Mi primer test en puppeteer', () => {

    it('Debe abrir y cerrar el navegador', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            //slowMo: 1000,
            // devtools: false,
            defaultViewport: {
                width: 2100,
                height: 1080
            }
            // args: ['--window-size=1920,1080']
            // defaultViewport: null
        })

        const page = await browser.newPage()
        await page.goto('https://demoqa.com/buttons')
        // await page.click('#rightClickBtn', { button: 'right', delay: 500 })
        // await page.setDefaultTimeout(20000)
        await page.click('#doubleClickBtn', { clickCount: 2, delay: 500 })
        await page.setDefaultTimeout(20000)
        await page.goto('https://demoqa.com/alerts')
        await page.click('#timerAlertButton', { delay: 1000 })
        await page.setDefaultTimeout(20000)
        page.on('dialog', async () => {
            await dialog.accept()
        })
        await page.goto('https://demoqa.com/automation-practice-form')
        await page.setDefaultTimeout(20000)
        await page.type('#firstName', 'Juan', { delay: 100 } )
        await page.type('#lastName', 'Salgado')
        await page.setDefaultTimeout(20000)
        await page.click('#gender-radio-1', { delay: 2000})
        await page.click('#hobbies-checkbox-1', { delay: 3000 })
        await page.click('#hobbies-checkbox-2', { delay: 3000 })
        await page.click('#hobbies-checkbox-3', { delay: 3000 })
        await browser.close()
    }, 40000)

})
//npm run test