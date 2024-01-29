const PaymentMethod = () => {
    return (
        <div className="m-0">
            <h1 className="fw-bold text-gray-800 mb-5">Payment Method</h1>
            <div className="d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-12" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button]" data-kt-initialized="1">
                <label className="btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4 " data-kt-button="true">
                    <input className="btn-check" type="radio" name="method" value="0" wfd-id="id85" />
                    <span className="fs-7 fw-bold d-block">Cash</span>
                </label>
                <label className="btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4 active" data-kt-button="true">
                    <input className="btn-check" type="radio" name="method" value="1" wfd-id="id86" />
                    <span className="fs-7 fw-bold d-block">Card</span>
                </label>
                <label className="btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4 " data-kt-button="true">
                    <input className="btn-check" type="radio" name="method" value="2" wfd-id="id87" />
                    <span className="fs-7 fw-bold d-block">E-Wallet</span>
                </label>
            </div>
            <button className="btn btn-primary fs-1 w-100 py-4">Print Bills</button>
        </div>
    )
}

export { PaymentMethod }