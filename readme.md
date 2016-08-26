## @joegesualdo/get-meta-information-from-html [![Build Status](https://travis-ci.org/joegesualdo/get-meta-information-from-html.svg?branch=master)](https://travis-ci.org/joegesualdo/get-meta-information-from-html)
> Get `<meta>` tags information from HTML.

## Install
```
$ npm install --save @joegesualdo/get-meta-information-from-html 
```

## Usage
```javascript
import getMetaInformationFromHTML from '@joegesualdo/get-meta-information-from-html'

let html = `
  <head>
    <meta itemprop="name" content="Watch first lady Michelle Obama’s full speech at the 2016 Democratic National Convention - YouTube">
    <meta itemprop="description" content="">
  </head>
`

getMetaInformationFromHTML(html)
.then(result => {
  console.log(result)
  //=>[
  //    {
  //      typeKey: 'itemprop',
  //      typeValue: 'description',
  //      value: 'This is a description' 
  //    },
  //    {
  //      typeKey: 'name',
  //      typeValue: 'Title',
  //      value: 'This is a title'
  //    }
  // ]
})
```
> NOTE: Only looks for <meta> tags in the child nodes of the html provided. (Ie. <head><meta><head>)

## Test
```
$ npm test
```
## API
### `getMetaInformationFromHTML(html)`
> Get all the information from <meta> tags within the html provided

| Name | Type | Description |
|------|------|-------------|
| html | `String` | The HTML you want to evaluate the <meta> tags from|

Returns: `Object`, containing these keys: `typeKey`, `typeValue`, and `value`

```javascript
import getMetaInformationFromHTML from '@joegesualdo/get-meta-information-from-html';

let html = `
  <head>
    <meta itemprop="description" content="This is a description">
    <meta name="title" content="This is a Title">
  </head>
`
getMetaInformationFromHTML(html)
.then(result => {
  console.log(result)
  //=>[
  //    {
  //      typeKey: 'itemprop',
  //      typeValue: 'description',
  //      value: 'This is a description' 
  //    },
  //    {
  //      typeKey: 'name',
  //      typeValue: 'Title',
  //      value: 'This is a title'
  //    }
  // ]
})
```
## Build
```
$ npm run build
```

## License
MIT © [Joe Gesualdo]()
