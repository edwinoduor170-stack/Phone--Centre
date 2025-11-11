import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Josh Smith",
        role: "Manager of The New York Times",
        text: "They have a perfect touch for making something so professional, interesting and useful for a lot of people.We are very happy to work with them.",
        image: "/test8.png",
    },
    {
        id: 2,
        name: "Anna Johnson",
        role: "Marketing Director at Apple",
        text: "Their team is amazing! The design and quality were exactly what we envisioned. We couldn't have asked for a better partner.",
        image: "/test2.png",
    },
    {
        id: 3,
        name: "Michael Brown",
        role: "Architect at BuildX",
        text: "Great service and attention to detail. I would recommend them to anyone.I'm extremely satisfied with my experience.",
        image: "/test5.png",
    },
    {
        id: 4,
        name: "John Nolan",
        role: "Architect",
        text: "I highly recommend their services. They exceeded our expectations in every way.They are true professionals.",
        image: "/test4.png"
    },

    {
        id: 5,
        name: "Sarah Lee",
        role: "CEO of DesignPro",
        text: "Their expertise in design is unmatched. They truly understand our vision. The end result was stunning.",
        image: "/test9.png"
    },
    {
        id: 6,
        name: "David Wilson",
        role: "Project Manager at BuildIt",
        text: "Their attention to detail and commitment to excellence is evident in every project. We are thrilled with the results.",
        image: "/test6.png"
    },

    {
        id: 7,
        name: "Emily Davis",
        role: "Creative Director at ArtHouse",
        text: "Working with them was a fantastic experience. They brought our ideas to life beautifully. We look forward to future collaborations.",
        image: "/test3.png"
    }
];

const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const { name, role, text, image } = testimonials[index];

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };


    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

            <div >
                <h2 className="text-4xl font-bold text-blue-950 mb-10">
                    What People Are Saying About Us
                </h2>

                <div className="flex items-center gap-4 mb-6 transition-all duration-500">
                    <img
                        src={image}
                        alt={name}
                        className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                        <p className="text-sm text-gray-500">{role}</p>
                    </div>
                </div>

                <p className="text-gray-700  text-xl italic mb-15 leading-relaxed transition-all duration-500">
                    "{text}"
                </p>

                <div className="flex items-center gap-4 mt-8">
                    <button
                        onClick={prevSlide}
                        className="p-3 bg-gray-500 text-white hover:bg-orange-700 rounded-full transition"
                    >
                        <FaChevronLeft className="cursor-pointer" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 bg-gray-500 text-white hover:bg-orange-700 rounded-full transition"
                    >
                        <FaChevronRight className="cursor-pointer" />
                    </button>
                </div>
            </div>

            <div className="flex justify-center shadow-md" >
                <img
                    src="/Location.jpg"
                    alt="testimonial background"
                    className="w-full h-[400px] object-cover rounded-xl shadow-md"
                />
            </div>
        </section>
    );
};

export default Testimonial;
