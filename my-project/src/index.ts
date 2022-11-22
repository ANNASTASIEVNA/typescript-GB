import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getUserData} from './getUserData.js'
import { getFavoritesAmount} from './getFavoritesAmount.js'



window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('name', '/img/avatar.png',0)
  renderSearchFormBlock(null,null)
  renderSearchStubBlock()

  
  getUserData('key','Somename', './img/avatar.png')
  getFavoritesAmount('key', '1')
  renderToast(
    {text: 'Это пример уведомления!!!. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})

