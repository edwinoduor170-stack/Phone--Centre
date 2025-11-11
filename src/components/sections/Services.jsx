

function Services() {
    return (
        <section className="container mx-auto py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-violet-700">
                    <h1 className="font-bold">Our Services</h1>
                    <br />
      <ul>
        <li>
          <h2 className="font-bold">Phone Sales</h2>
          <hr />
          
          <p>Wide selection of top brands and models</p>
          <br />
        </li>
        <li>
          <h2 className="font-bold">Phone Repair</h2>
          <hr />
          
          <p>Fast and reliable repair services for common issues</p>
          <br />
        </li>
        <li>
          <h2 className="font-bold">Accessories</h2>
          <hr />
          
          <p>Screen protectors, cases, chargers, and more</p>
          <br />
        </li>
        <li>
          <h2 className="font-bold">Trade-In</h2>
          <hr />
          
          <p>Trade in your old phone for a new one</p>
          <br />
        </li>
        <li>
          <h2 className="font-bold">Warranty and Support</h2>
          <hr />
          
          <p>Comprehensive warranty and dedicated support team</p>
          <br />
        </li>
      </ul>
                    <button className=" text-violet-700 border border-violet-700 py-2 px-4 rounded">Shop Now</button>
                </div>

                <div>
                    <img src="/Shopping.jpg" alt="Our sales" className="w-full h-auto rounded-2xl" />
                    <h3 className="text-3xl mt-3 font-bold text-violet-700 ">Shopping</h3>

                </div>

                <div>
                    <img src="/Location.jpg" alt="Our sales" className="w-full h-auto rounded-2xl" />
                    <h3 className="text-3xl mt-3 font-bold text-violet-700">Location</h3>

                </div>

                <div>
                    <img src="/Varieties.jpg" alt="Our sales" className="w-full h-auto rounded-2xl" />
                    <h3 className="text-3xl mt-3 font-bold text-violet-700">Varieties</h3>

                </div>

            </div>
        </section>
    )
}

export default Services;