const puppeteer = require('puppeteer');

async function generatePDF() {


    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:5500/index.html', { waitUntil: 'networkidle0' });
    await page.pdf({
        path: 'meu_currículo.pdf', 
        format: 'A4', 
        printBackground: true,
    });


    console.log('PDF gerado com sucesso: output.pdf');

    await browser.close();
}

generatePDF().catch(console.error);
