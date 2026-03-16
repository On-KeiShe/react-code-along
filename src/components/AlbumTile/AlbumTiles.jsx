import "./AlbumTiles.scss"

const AlbumTiles = (props) => {
  const { title, albumsArr} = props;


    console.log(albumsArr)
   const cardListJSX = albumsArr.map((album) => {
    return (
      <img key={album.idAlbum} className="album-titles__img" src={album.strAlbumThumb} alt={album.strAlbum} />
    )
   })

  return (
    <> 
      <h3>{title}</h3>
      <div className="album-tiles">  
        {cardListJSX}
      </div>
    
    </>
    
  )
}

export default AlbumTiles;
 