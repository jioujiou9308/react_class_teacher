function ProductItem(props) {
  return (
    <>
      <div className="row">
        <div className="row main align-items-center">
          <div className="col-2">
            <img
              alt=""
              className="img-fluid"
              src="https://i.imgur.com/ba3tvGm.jpg"
            />
          </div>
          <div className="col">
            <div className="row text-muted">Shirt</div>
            <div className="row">白色 T-shirt</div>
          </div>
          <div className="col">
            <a href="#/">-</a>
            <a href="#/" className="border">
              1
            </a>
            <a href="#/">+</a>
          </div>
          <div className="col">
            $200 <span className="close">&#10005;</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
