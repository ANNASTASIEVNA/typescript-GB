import { IBookPlaceParams, IFindPlacesParams, IGetPlaceParams, IPlaces, IRequestParams } from './interfaces.js'


export function renderBlock (elementId: string, html: string) {
  const element = document.getElementById(elementId)
  element.innerHTML = html
}

export function renderToast (message: { text: any; type: any }, action: { name: any; handler: any }) {
  let messageText = ''
  
  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }
  
  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function() {
      if (action != null && action.handler != null) {
       action.handler()
      }
      renderToast(null,null)
    }
  }
}
const API_URL = 'http://127.0.0.1:3001';

export async function fetchHomeApi(requestParams: IRequestParams): Promise<IPlaces[] |  Record<string, string>> {
  if (requestParams.method === 'GET') {
    const fetchURL = API_URL + requestParams.endPoint + serializeToGetParams(requestParams.parameters)
    const response = await fetch(fetchURL)
    return await response.json()
  } else { 
    const fetchURL = API_URL + requestParams.endPoint
    const response = await fetch(fetchURL, {
      method: requestParams.method,
      body: JSON.stringify(requestParams.parameters)
    })
    return await response.json()
  }
}

export function serializeToGetParams(params: Record<string, string | number>): string { 
  return '?' + Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
}