function AlbumItem(props) {
    const { url, title } = props.item;
    return (
      <div className="col">
        <div className="card shadow-sm">
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#55595c" />
            <image
              href={url}
              height="225"
              width="100%"
              preserveAspectRatio="none"
            />
          </svg>
  
          <div className="card-body cardAreaText">
            <p className="card-text">{title}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default AlbumItem;