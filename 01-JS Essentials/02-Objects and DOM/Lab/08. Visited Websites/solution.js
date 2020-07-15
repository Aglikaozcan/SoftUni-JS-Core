function solve() {
  let siteElements = document.getElementsByTagName('a');  

  for (let i = 0; i < siteElements.length; i++) {

    let site = siteElements[i];

    site.addEventListener('click', function () {
      let counterElement = document.getElementsByTagName('p')[i];
      let counterText = counterElement.textContent;

      let siteInfo = counterText.split(' ');      

      siteInfo = siteInfo[0] + ' ' + (+siteInfo[1] + 1) + ' ' + siteInfo[2];

      counterElement.textContent = siteInfo;
    })
  }
}