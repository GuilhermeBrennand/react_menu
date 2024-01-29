import { KTCard, KTCardBody } from "../../../../_metronic/helpers"
import { Offers } from "./components/Offers"
import { PaymentMethod } from "./components/PaymentMethod"
import { Product } from "./components/Product"
import { MenuOptions } from "./components/list/MenuOptions"
import { ShoppingCart } from "./components/table/ShoppingCart"

const MenuPage = () => {
    return (
        <div className="post">
            <div className="d-flex flex-column flex-xl-row">
                <div className="d-flex flex-row-fluid me-xl-9 mb-10 mb-xl-0">
                    <div className="card card-flush card-p-0 bg-transparent border-0 ">
                        <div className="card-body">
                            <MenuOptions />
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="kt_pos_food_content_4" role="tabpanel">
                                    <div className="d-flex flex-wrap d-grid gap-5 gap-xxl-9">
                                        <Product />
                                        <Product />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-row-auto w-xl-450px">
                    <div className="card card-flush bg-body " id="kt_pos_form">
                        <div className="card-header pt-5">
                            <h3 className="card-title fw-bold text-gray-800 fs-2qx">Current Order</h3>

                            <div className="card-toolbar">
                                <a href="#" className="btn btn-light-primary fs-4 fw-bold py-4">Clear All</a>
                            </div>
                        </div>
                        <div className="card-body pt-0">
                            <ShoppingCart />
                            <Offers className="d-flex flex-stack bg-success rounded-3 p-6 mb-11" />
                            <PaymentMethod />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MenuPage }

