import React from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
    return (
        <>
            <Header />

            <section className="min-h-[calc(100vh_-_162px)] flex flex-col justify-center items-center p-10 text-center">
                <h2 className="text-4xl font-bold mb-6">
                    Capture Life’s Moments
                </h2>
                <p className="text-lg mb-8">
                    Explore my gallery and get a glimpse of beautiful memories
                    captured through my lens.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <img
                        src={img1}
                        alt="Sample photo"
                        className="rounded-lg shadow-md"
                    />
                    <img
                        src={img2}
                        alt="Sample photo"
                        className="rounded-lg shadow-md"
                    />
                    <img
                        src={img3}
                        alt="Sample photo"
                        className="rounded-lg shadow-md"
                    />
                </div>
            </section>

            <Footer />
        </>
    );
};

export default App;
