class LocalStorageWorker {
  logout = (): boolean => {
    window.localStorage.removeItem("user");
    return true;
  };
  login = (name: string): boolean => {
    window.localStorage.setItem("user", name);
    return true;
  };

  isUserExist = (): null | string => {
    return window.localStorage.getItem("user");
  };
}
export default new LocalStorageWorker();
