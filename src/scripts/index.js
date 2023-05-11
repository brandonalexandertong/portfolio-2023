import './base.css'
import './style.css'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    console.log(images)
    return images;
  }
  
  const images = importAll(require.context('./lib', false, /\.(png|jpe?g|svg|gif)$/));

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function shuffleModules() {
  const bricks = document.getElementsByClassName('brick')
  let min = 1
  let max = 6
  let quarterArray = []
    for (let i = min; i < (max + 1); i++) {
      let quarter = "q".concat(i)
      quarterArray.push(quarter)
    }

  for (let i = 0; i < bricks.length; i++) {
    shuffle(quarterArray)
    const modules = bricks[i].getElementsByClassName('module')
    console.log(modules)
    for (let j = 0; j < modules.length; j++) {
      let module = modules[j]
      module.classList.add(quarterArray[j])
    }
  }
}

shuffleModules()