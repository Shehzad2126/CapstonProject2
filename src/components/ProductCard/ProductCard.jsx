import React from "react";
import "./ProductCard.css"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function ProductCard(p) {
  return (
    <>
      <section>
          
            <div className="my-3 ">
              <div class="card">
                <div className="col-12 bg-dark rounded h-50 d-flex justify-content-center">
                  <img
                  style={{height: "180px"}}
                    src={p.image}
                    class="w-75"
                    alt={p.title}
                  />
                </div>
                <div class="card-body">
                  <div className="d-flex text-black  justify-content-between">
                    <h5 class="under mb-0">{(p.name).slice(0,17)}</h5>
                    <FavoriteBorderIcon />
                  </div>
                  <h5 class="under text-dark my-3 mb-0">&#8360;. {p.price* 100}</h5>
                  <p className="text-dark under my-3">{(p.description.slice(0,25))}</p>
                </div>
              </div>
            </div>
      </section>
    </>
  );
}

export default ProductCard;
