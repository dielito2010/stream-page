export default function Favorites(){
    const favoriteIds = JSON.parse(
        localStorage.getItem("favoriteIds") || "[]"
      ) as number[];

    return (
      <main>
        {favoriteIds}
      </main>
    ) 
}