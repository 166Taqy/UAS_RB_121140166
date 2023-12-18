// Set Cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
  
  // Get Cookie
  function getCookie(name) {
    const keyValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return keyValue ? keyValue[2] : null;
  }
  
  // Delete Cookie
  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
  
  // Usage of Cookie
  setCookie('user_preference', 'dark_mode', 30);
  const userPreference = getCookie('user_preference');
  console.log('User Preference:', userPreference);
  deleteCookie('user_preference');
  
  // Browser Storage (localStorage or sessionStorage)
  localStorage.setItem('user_token', 'abcd1234');
  const userToken = localStorage.getItem('user_token');
  console.log('User Token:', userToken);
  localStorage.removeItem('user_token');  