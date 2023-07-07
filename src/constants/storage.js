export const storageKey = {
  AUTH_TOKEN: "@AUTH_TOKEN",
  USER_DATA: "@USERDATA",
  CREDS: "CREDS",
};
export function storeData(key, value) {
  localStorage.setItem(key, value);
}
export function getData(key)
 {
  return localStorage.getItem(key)
;
}
export function clearData() {
  const keys = [storageKey.AUTH_TOKEN];
  localStorage.multiRemove(keys);
}