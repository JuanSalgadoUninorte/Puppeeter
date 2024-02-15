const puppeteer = require('puppeteer')

describe('Tipos de espera', () => {

    it('Mostrar todos los tipos de espera', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 500,
            // devtools: false,
            // defaultViewport: {
            //     width: 2100,
            //     height: 1080
            // }
            //args: ['--window-size=1920,1080']
            defaultViewport: null
        })

        const page = await browser.newPage()
        // Página cargó completamente await page.goto('https://platzi.com', { waitUntil: 'networkidle0'})
        // Termina de cargar y cierra
        await page.goto('https://platzi.com', { waitUntil: 'networkidle2' })
        //await page.setDefaultTimeout(5000)
        // await page.waitForSelector('#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Logo > div > a > div > figure > img')
        //await page.waitForSelector('xpath///*[@id="Header-v2"]/nav[1]/div[1]/div/a/div/figure/img')
        await page.goto('https://demoqa.com/modal-dialogs', { waitUntil: 'networkidle2' })
        await page.waitForSelector('#showSmallModal', { visible: true})
        const button = await page.waitForSelector('xpath///*[@id="showLargeModal"]', { visible: true })
        await page.setDefaultTimeout(5000)
        await button.click()
        const button2 = await page.waitForSelector('#closeLargeModal', { visible: true })
        await page.setDefaultTimeout(5000)
        await button2.click()
        const button3 = await page.waitForSelector('#showSmallModal', { visible: true })
        await page.setDefaultTimeout(5000)
        await button3.click()
        await page.setDefaultTimeout(5000)
        await page.waitForFunction(() => document.querySelector('#example-modal-sizes-title-sm').innerText === 'Small Modal')
        // const observeResize = page.waitForFunction('window.innerWidth < 100')
        // await page.setViewport({ width: 50, height: 50 })
        // await observeResize
        await page.click('#closeSmallModal')
        await page.waitForFunction(() => !document.querySelector('#example-modal-sizes-title-sm'))

        await browser.close()
    }, 80000)
})