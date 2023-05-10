import './base.css'
import './style.css'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    console.log(images)
    return images;
  }
  
  const images = importAll(require.context('./lib', false, /\.(png|jpe?g|svg|gif)$/));