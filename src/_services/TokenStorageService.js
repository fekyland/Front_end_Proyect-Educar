const TOKEN_KEY = 'auth-token'

const TokenStorageService = {} //objeto vacio

TokenStorageService.logOut = () => {
  sessionStorage.clear()
}

TokenStorageService.saveToken = (token) => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.setItem(TOKEN_KEY, token)
}

TokenStorageService.getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export default TokenStorageService
