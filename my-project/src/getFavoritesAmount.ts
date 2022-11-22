export function  getFavoritesAmount(key: string, favoriteItemsAmount: string): unknown {
    localStorage[key] = {  favoriteItemsAmount }
    
    for (let i = 0; i < localStorage.length; i++){
      const key:string | null = localStorage.key(i);
       
      return (`${key}: ${localStorage.getItem(favoriteItemsAmount)}`);
    }
  }