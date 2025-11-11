function Contact() {
    return (
        <section className="container mx-auto p-4 ">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">

                <div className="hidden lg:block">
                    <img src="/Location.jpg" alt="Contact Us" className="mx-auto z-20 w-120 h-120" />
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-9 text-white">Ready to Begin Your Architectural Journey? <br /> Schedule Your Complementary Consultation</h2>
                    <p className="text-lg text-gray-100 mb-12"> Contact us today to schedule your free consultation and take the first step towards creating your dream space.</p>

                    <div className="flex ">
                        <form action="#">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-3 bg-white rounded-md w-64 mr-6 focus:outline-none  "
                            />
                            <button
                                type="submit"
                                className="bg-gray-500 text-white p-3 rounded-md cursor-pointer hover:bg-gray-700 transition-colors"
                            >
                                Schedule Now
                            </button>
                        </form>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact