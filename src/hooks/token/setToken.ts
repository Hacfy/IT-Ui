export function setAuthToken({ name, token }: { name: string; token: string }) {
  localStorage.setItem(name, token);
}
