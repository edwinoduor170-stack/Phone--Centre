

function Hero() {
    return (
        <section className=" flex  items-center w-screen" style={{
            backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.85), rgba(30, 64, 175, 0.7)), url('/bg 2.jpg')`,
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <div className="container mx-auto flex-col text-center">
                <h1 className="text-white text-5xl font-bold">Welcome to Our Website</h1>
                <p className="text-white pb-7">Your journey to excellence starts here.</p>
                <button className=" bg-purple-800 text-purple-950  m-7  font-bold hover:bg-purple-700">Get Started</button>
                <button className="bg-purple-800 h-12 text-purple-950  m-7 font-bold hover:bg-purple-700">Sign Up Now</button>

            </div>
        </section>
    )
}

export default Hero;