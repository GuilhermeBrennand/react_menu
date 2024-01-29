const ShoppingCart = () => {
    return (
        <div className="table-responsive mb-8">
            <table className="table align-middle gs-0 gy-4 my-0">
                <thead>
                    <tr>
                        <th className="min-w-175px"></th>
                        <th className="w-125px"></th>
                        <th className="w-60px"></th>
                    </tr>
                </thead>

                <tbody>
                    <tr data-kt-pos-element="item" data-kt-pos-item-price="33">
                        <td className="pe-0">
                            <div className="d-flex align-items-center">
                                <img src="/metronic8/demo5/assets/media/stock/food/img-2.jpg" className="w-50px h-50px rounded-3 me-3" alt="" />
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1">T-Bone Stake</span>
                            </div>
                        </td>

                        <td className="pe-0">
                            <div className="position-relative d-flex align-items-center" data-kt-dialer="true" data-kt-dialer-min="1" data-kt-dialer-max="10" data-kt-dialer-step="1" data-kt-dialer-decimals="0">

                                <button type="button" className="btn btn-icon btn-sm btn-light btn-icon-gray-500" data-kt-dialer-control="decrease">
                                    <i className="ki-duotone ki-minus fs-3x"></i>                                    </button>

                                <input type="text" className="form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px" data-kt-dialer-control="input" placeholder="Amount" name="manageBudget" value="2" wfd-id="id82" />

                                <button type="button" className="btn btn-icon btn-sm btn-light btn-icon-gray-500" data-kt-dialer-control="increase">
                                    <i className="ki-duotone ki-plus fs-3x"></i>                                    </button>
                            </div>
                        </td>

                        <td className="text-end">
                            <span className="fw-bold text-primary fs-2" data-kt-pos-element="item-total">$33.00</span>
                        </td>
                    </tr>
                    <tr data-kt-pos-element="item" data-kt-pos-item-price="7.5">
                        <td className="pe-0">
                            <div className="d-flex align-items-center">
                                <img src="/metronic8/demo5/assets/media/stock/food/img-9.jpg" className="w-50px h-50px rounded-3 me-3" alt="" />
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1">Soup of the Day</span>
                            </div>
                        </td>

                        <td className="pe-0">
                            <div className="position-relative d-flex align-items-center" data-kt-dialer="true" data-kt-dialer-min="1" data-kt-dialer-max="10" data-kt-dialer-step="1" data-kt-dialer-decimals="0">

                                <button type="button" className="btn btn-icon btn-sm btn-light btn-icon-gray-500" data-kt-dialer-control="decrease">
                                    <i className="ki-duotone ki-minus fs-3x"></i>                                    </button>

                                <input type="text" className="form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px" data-kt-dialer-control="input" placeholder="Amount" name="manageBudget" value="1" wfd-id="id83" />

                                <button type="button" className="btn btn-icon btn-sm btn-light btn-icon-gray-500" data-kt-dialer-control="increase">
                                    <i className="ki-duotone ki-plus fs-3x"></i>                                    </button>
                            </div>
                        </td>

                        <td className="text-end">
                            <span className="fw-bold text-primary fs-2" data-kt-pos-element="item-total">$7.00</span>
                        </td>
                    </tr>
                    <tr data-kt-pos-element="item" data-kt-pos-item-price="13.5">
                        <td className="pe-0">
                            <div className="d-flex align-items-center">
                                <img src="/metronic8/demo5/assets/media/stock/food/img-3.jpg" className="w-50px h-50px rounded-3 me-3" alt="" />
                                <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1">Pancakes</span>
                            </div>
                        </td>

                        <td className="pe-0">
                            <div className="position-relative d-flex align-items-center" data-kt-dialer="true" data-kt-dialer-min="1" data-kt-dialer-max="10" data-kt-dialer-step="1" data-kt-dialer-decimals="0">

                                <button type="button" className="btn btn-icon btn-sm btn-light btn-icon-gray-500" data-kt-dialer-control="decrease">
                                    <i className="ki-duotone ki-minus fs-3x"></i>                                    </button>

                                <input type="text" className="form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px" data-kt-dialer-control="input" placeholder="Amount" name="manageBudget" value="2" wfd-id="id84" />

                                <button type="button" className="btn btn-icon btn-sm btn-light btn-icon-gray-500" data-kt-dialer-control="increase">
                                    <i className="ki-duotone ki-plus fs-3x"></i>                                    </button>
                            </div>
                        </td>

                        <td className="text-end">
                            <span className="fw-bold text-primary fs-2" data-kt-pos-element="item-total">$13.00</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export { ShoppingCart }