import './base.css'
import './style.css'
import link from './music.png'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    console.log(images)
    return images;
  }
  
  const images = importAll(require.context('./lib', false, /\.(png|jpe?g|svg|gif)$/));


const myIcon = new Image()
myIcon.src = link

const headerIcon = document.createElement('link')
headerIcon.rel = 'icon'
headerIcon.href = link
headerIcon.type = 'image/png'
headerIcon.sizes = '32x32'

document.getElementsByTagName('head')[0].appendChild(headerIcon)