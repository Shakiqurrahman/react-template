import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutPage = () => {
    return (
        <>
            <Header />
            
            <main className="p-10 min-h-[calc(100vh_-_165px)] flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold mb-6 text-center">
                    About Me
                </h2>
                <div className="max-w-2xl mx-auto">
                    <p className="text-lg mb-4">
                        Hi, I'm a professional photographer with a passion for
                        capturing the beauty of the world. I specialize in
                        portraits, landscapes, and wildlife photography. My goal
                        is to create stunning visuals that tell a story and
                        evoke emotions.
                    </p>
                    <p className="text-lg">
                        For over five years, I've worked with individuals,
                        families, and organizations to capture special moments.
                        I believe every photo has a unique story to tell, and I
                        strive to capture those moments in the most beautiful
                        and authentic way possible.
                    </p>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default AboutPage;
