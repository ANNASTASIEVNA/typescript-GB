import { renderBlock } from './lib.js'
import { IPlaces, IUser } from './interfaces.js'

export function renderUserBlock() {
  const userData = getUserData()
  const favoritesAmount = getFavoritesAmount()

  const favoritesCaption = favoritesAmount ? favoritesAmount : 'ничего нет'
  const hasFavoriteItems = favoritesAmount ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${userData.linkAvatar }" alt="Wade Warren" />
      <div class="info">
          <p class="name"${userData.name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
export function getUserData(): IUser {   
  const user:unknown = JSON.parse(localStorage.getItem('user'))

  const emptyUser = {
    name: 'unknown',
    linkAvatar: ''
  }
  
  const result = {
    name: null,
    linkAvatar: null
  }

  if (typeof user !== 'object' || !user) {
    return emptyUser
  } 
  
  Object.hasOwn(user, 'name') && user['name'] ? result.name = user['name'] : result.name = emptyUser.name
  Object.hasOwn(user, 'linkAvatar') && user['linkAvatar'] ? result.linkAvatar = user['linkAvatar'] : result.linkAvatar = emptyUser.linkAvatar

  return result
}

export function getFavoritesAmount(): number { 
  const favoriteItems = getFavorites()

  return favoriteItems.length
}

function getFavorites(): Pick<IPlaces, 'id' | 'image' | 'name'>[] { 
  const favoriteItems: unknown = JSON.parse(localStorage.getItem('favoriteItems'))

  if (!Array.isArray(favoriteItems) || favoriteItems.length === 0) {
    return []
  } 

  return favoriteItems
}

export function toggleFavorites(favPlace: Pick<IPlaces, 'id' | 'image' | 'name'>): void { 
  const favoriteItems = getFavorites()

  const filtredFavorites = favoriteItems.filter((fav: Pick<IPlaces, 'id' | 'image' | 'name'>) => fav.id !== favPlace.id)

  filtredFavorites.length === favoriteItems.length ? 
    localStorage.setItem('favoriteItems', JSON.stringify([...favoriteItems, favPlace])) : 
    localStorage.setItem('favoriteItems', JSON.stringify(filtredFavorites))
}


export function isFavorite(placeId: number): boolean { 
  const favoriteItems = getFavorites()

  return favoriteItems.find((fav: Pick<IPlaces, 'id' | 'image' | 'name'>) => fav.id === placeId) ? true : false
}