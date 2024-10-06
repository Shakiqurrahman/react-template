import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactPage = () => {
    return (
        <>
            <Header />

            <main className="p-10 min-h-[calc(100vh_-_162px)] flex justify-center items-center ">
                <div className="w-full">
                    <h2 className="text-4xl font-bold mb-6 text-center">
                        Contact Me
                    </h2>
                    <div className="max-w-md mx-auto">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label
                                    className="block text-lg mb-2"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 border rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-lg mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 border rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-lg mb-2"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full p-3 border rounded-md"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full p-3 bg-gray-800 text-white font-bold rounded-md hover:bg-gray-700"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default ContactPage;
