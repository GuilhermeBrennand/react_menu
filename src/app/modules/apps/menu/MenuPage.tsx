import { Offers } from "./components/Offers"
import { PaymentMethod } from "./components/PaymentMethod"
import { ShoppingCart } from "./components/table/ShoppingCart"

const MenuPage = () => {
    return (
        <div className="d-flex flex-column flex-row-fluid">
            <div className="d-flex flex-row-auto w-600px  flex-center">
                <div className="card card-flush bg-body " id="kt_pos_form">
                    <div className="card-header pt-5">
                        <h3 className="card-title fw-bold text-gray-800 fs-2qx">Current Order</h3>

                        <div className="card-toolbar">
                            <a href="#" className="btn btn-light-primary fs-4 fw-bold py-4">Clear All</a>
                        </div>
                    </div>

                    <div className="card-body pt-0">
                        <ShoppingCart className={'card-body pt-0'} />
                        <Offers className="d-flex flex-stack bg-success rounded-3 p-6 mb-11" />
                        <PaymentMethod />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MenuPage }