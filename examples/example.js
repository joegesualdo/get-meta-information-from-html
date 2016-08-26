var getMetaInformationFromHTML = require('./../dist').default;

let html = `
  <head>
    <meta itemprop="name" content="Watch first lady Michelle Obama’s full speech at the 2016 Democratic National Convention - YouTube">
    <meta itemprop="description" content="">
  </head>
`
getMetaInformationFromHTML(html)
.then(result => {
  console.log(result)
})


