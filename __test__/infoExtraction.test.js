 const puppeteer = require('puppeteer')

describe('Extrayendo información', () => {

    let browser
    let page
    beforeAll(async () => {
            browser = await puppeteer.launch({
            headless: false,
            slowMo: 500,
            defaultViewport: null
        })
        page = await browser.newPage()
        await page.goto('https://platzi.com', { waitUntil: 'networkidle0' })
    }, 35000)

    afterAll(async () => {
        await browser.close()
    })

    it('Extraer el título de la página', async () => {
        const title = await page.title()
        const url = await page.url()
        console.log("title", title)
        console.log("url", url)
    }, 80000),

    it('Extraer la información de un elemento', async () => {
        await page.waitForSelector("#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Menu > div > div > ul > li:nth-child(7) > a")
        const nombreBoton = await page.$eval('#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Menu > div > div > ul > li:nth-child(7) > a', (button) => button.textContent)
        console.log('nombreBoton', nombreBoton)
        // const [button] = await page.$x('//*[@id="Header-v2"]/nav[2]/section/button[2]')
        // const propiedad = await button.getProperty('textContent')
        // const texto = await propiedad.jsonValue()
        // console.log('texto', texto) 
        const button3 = await page.waitForSelector('xpath///*[@id="Header-v2"]/nav[2]/section/button[2]')
        const texto2 = await page.evaluate( (name) => name.textContent, button3)
        console.log('texto2', texto2)
    }, 80000),

    it('Contar los elementos de la página', async () => {
        const images = await page.$$eval('img', (imagenes) => imagenes.length)
        console.log('images', images)
    }, 45000)
})