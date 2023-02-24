
function loadJson() {
   siteJson ='http://jservice.io/api/random?count=1';
   fetch(siteJson).then(
      response => response.json()).then(data =>insertJsonValue(data, siteJson));
}

function insertJsonValue(data, siteJson) {
   data[0].image = 'https://www.w3.org/TR/2013/WD-media-source-20130129/pipeline_model.png';
  
   allFieldJson(data, siteJson);
   document.querySelector('h2').innerHTML = data[0].answer;
   document.querySelector('p.paragraph').innerHTML = data[0].question;
 img = data[0].image;
 document.querySelector('img').setAttribute('src', img)
}

function allFieldJson(data, siteJson) {
   jsonVal = document.querySelector('div.valuesJson');
   elP = document.createElement('p');
   elP.textContent = `Получен объект JSON с сайта ${siteJson}  и имеет следующие ключи: `;
   jsonVal.appendChild(elP);

      for (let prop in data) {
         if (typeof data[prop] == 'object') {
            for (let prop1 in data[prop]) {
               if (typeof data[prop][prop1] == 'object') {
  
                  for (let prop2 in data[prop][prop1]) {
                     createElP2(jsonVal, [prop1]);
                     createElP(prop2, jsonVal);

                  }                 
               }
                  createElP(prop1, jsonVal);
            }
         } else
         {
            console.log('Вложений нет');
         }
      } 
}
function createElP2(jsonVal, keys) {  
   el = document.createElement('p');
   el.style.lineHeight = '0px';
   el.textContent = `Вложение относится к ${keys}`;
   jsonVal.appendChild(el);
}

function createElP(keys, jsonVal) {  
   el = document.createElement('p');
   el.style.lineHeight = '0px';
   el.textContent = `key: ${keys}`;
   jsonVal.appendChild(el);
}