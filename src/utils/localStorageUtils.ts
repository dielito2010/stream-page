export interface MovieObject {
  id: number;
  title: string;
}

const localStorageUtils = {
  get(key: string): MovieObject[] | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },

  set(key: string, value: MovieObject[]): void {
    localStorage.setItem(key, JSON.stringify(value));
  },

  existMovieId(id: number): boolean {
    const favoriteIds = this.get("favoriteIds") || [];
    return favoriteIds.some((movie) => movie.id === id);
  },

  addToFavorites(movieObject: MovieObject): void {
    const favoriteIds = this.get("favoriteIds") || [];

    if (!favoriteIds.some((movie) => movie.id === movieObject.id)) {
      favoriteIds.push(movieObject);
      this.set("favoriteIds", favoriteIds);
    }
  },

  rmFromFavorites(id: number): void {
    const favoriteIds = this.get("favoriteIds") || [];
    const updatedFavoriteIds = favoriteIds.filter((movie) => movie.id !== id);
    this.set("favoriteIds", updatedFavoriteIds);
  },
};

export default localStorageUtils;
