import React from "react";
import "./Schedule.css";
import SearchContent from "../Search/SearchContent";

export default function Schedule() {
  return (
    <div className="mt-3">
      <h5 className="text-white text-center mb-4">
        <span className="py-2 ps-3 border">
          Your <span className="py-2 pe-3 text-black bg-white">Bookings</span>
        </span>
      </h5>

      <div className="container">
        {/* <div className=" mt-5 row hero">
          <div className="text-white col">
            <img
              src="https://img.freepik.com/premium-vector/vintage-logo-barber-shop-vector-illustration_831416-112.jpg?size=626&ext=jpg&ga=GA1.1.1107865039.1686587964&semt=sph"
              alt=""
              className="w-50"
            />
            <p>Shop Ranking : 3.0/5.0 </p>
          </div>

          <div className="text-white col">
            <p>Shop name : Loreal Paris </p>
            <p>Style name : Hair Cut</p>
            <p>Timing : 11 am</p>
            <p>Price : Rs 150.0</p>
            <button>Cancel</button>
          </div>
        </div> */}
        <div className="border p-3">
          <div className="overflow-auto" style={{ height: "75vh" }}>
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
            <SearchContent btn={"cancel"} />
          </div>
        </div>
      </div>
    </div>
  );
}
