const getDataAsync = require('./utility')
const cheerio = require('cheerio');
////////
const URL = 'https://www.worldometers.info/coronavirus/';

(async () => {
    console.log('Loading data.....');
    const html = await getDataAsync(URL)
    console.log('data loaded 😊');
    console.log('Getting information .....');
    handleHtml(html)
})()

function handleHtml(html) {
    let selTool = cheerio.load(html, null, true)
    let coronalCasesInfoContainer = selTool('#maincounter-wrap span')
    const information = []
    for (const info of coronalCasesInfoContainer) {
        information.push(info.children[0]['data']);
    }
    console.log('Total     : ', information[0]);
    console.log('Death     : ', information[1]);
    console.log('Recovered : ', information[2]);
}