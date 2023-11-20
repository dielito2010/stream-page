const localStorageUtils = {
  get(key: string): string[] | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },

  set(key: string, value: string[]) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  existMovieId(id: number): boolean {
    const favoriteIds = this.get("favoriteIds") || [];
    return favoriteIds.includes(id.toString());
  },

  addToFavorites(id: number) {
    const favoriteIds = this.get("favoriteIds") || [];

    if (!favoriteIds.includes(id.toString())) {
      favoriteIds.push(id.toString());
      this.set("favoriteIds", favoriteIds);
    }
  },
};

export default localStorageUtils;
