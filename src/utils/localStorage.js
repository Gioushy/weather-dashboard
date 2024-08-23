// utils/localStorage.js
export function saveSearchToHistory(city, user) {
  const key = `searchHistory_${user.email}`;
  const history = getSearchHistory(user);
  const updatedHistory = [city, ...history.filter((c) => c !== city)].slice(
    0,
    5
  );
  localStorage.setItem(key, JSON.stringify(updatedHistory));
}

export function getSearchHistory(user) {
  if (!user) return [];
  const key = `searchHistory_${user.email}`;
  const history = localStorage.getItem(key);
  return history ? JSON.parse(history) : [];
}

export function clearSearchHistory(user) {
  if (user) {
    const key = `searchHistory_${user.email}`;
    localStorage.removeItem(key);
  }
}
