import { FC } from "react"

type Props = {
    className: string
}

const Offers: FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <div className="fs-6 fw-bold text-white">
                <span className="d-block lh-1 mb-2">Subtotal</span>
                <span className="d-block mb-2">Discounts</span>
                <span className="d-block mb-9">Tax(12%)</span>
                <span className="d-block fs-2qx lh-1">Total</span>
            </div>

            <div className="fs-6 fw-bold text-white text-end">
                <span className="d-block lh-1 mb-2" data-kt-pos-element="total">$53.00</span>
                <span className="d-block mb-2" data-kt-pos-element="discount">-$8.00</span>
                <span className="d-block mb-9" data-kt-pos-element="tax">$11.20</span>
                <span className="d-block fs-2qx lh-1" data-kt-pos-element="grant-total">$45.96</span>
            </div>
        </div>
    )
}

export { Offers }