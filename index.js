import parse5 from 'parse5';

export default function getMetaInformationFromHTML(html) {
  return new Promise((resolve) => {
    const metas = [];
    const htmlFragment = parse5.parseFragment(html);
    let nodes;
    if (htmlFragment.childNodes.length === 1 && htmlFragment.childNodes[0].nodeName !== 'meta') {
      nodes = htmlFragment.childNodes[0].childNodes
    } else {
      nodes = htmlFragment.childNodes
    }
    nodes.forEach(child => {
      if (child.nodeName === 'meta') {
        const obj = {};

        child.attrs.forEach(attr => {
          if (attr.name !== 'content') {
            obj.typeKey = attr.name;
            obj.typeValue = attr.value;
          } else {
            obj.value = attr.value;
          }
        });

        metas.push(obj);
      }
    });

    resolve(metas);
  });
}


