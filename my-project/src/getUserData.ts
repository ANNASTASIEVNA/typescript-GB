export function  getUserData(key: string, username:string, avatarUrl: string):unknown {
    localStorage[key] = { username, avatarUrl }
    
    for (let i = 0; i < localStorage.length; i++){
      const key:string | null = localStorage.key(i);
       
      return (`${key}: ${localStorage.getItem(username)} ${key}: ${localStorage.getItem(avatarUrl)}`);
    }
  }