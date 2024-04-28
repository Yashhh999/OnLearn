'use client'
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { getAuth } from "@clerk/nextjs/server";

export default function Page({ userId }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!userId);
  }, [userId]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Welcome to OnLearn
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're just starting your journey into web development or
            looking to advance your skills in cutting-edge technologies, you've
            come to the right place. Our platform offers comprehensive courses
            and resources tailored to help you succeed in various fields of
            technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Web Development
              </h2>
              <p className="text-gray-600">
                Learn the fundamentals of HTML, CSS, and JavaScript, along
                with advanced topics such as responsive design, animations, and
                building dynamic web applications.
              </p>
              <Link
                href="/learn/webdev/html"
                className="text-blue-500 hover:underline mt-4 block"
              >
                Explore Web Development
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                MERN Stack
              </h2>
              <p className="text-gray-600">
                Master the MERN (MongoDB, Express.js, React, Node.js) stack
                and build full-stack web applications with real-world projects
                and hands-on experience.
              </p>
              <Link
                href="/learn/mern"
                className="text-blue-500 hover:underline mt-4 block"
              >
                Explore MERN Stack
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Machine Learning
              </h2>
              <p className="text-gray-600">
                Dive into the fascinating world of machine learning and
                artificial intelligence. Learn algorithms, data analysis, and
                programming with Python to create intelligent systems.
              </p>
              <Link
                href="/learn/ml"
                className="text-blue-500 hover:underline mt-4 block"
              >
                Explore Machine Learning
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Data Structures & Algorithms
              </h2>
              <p className="text-gray-600">
                Gain a solid understanding of fundamental data structures and
                algorithms essential for solving complex problems efficiently.
                Practice coding challenges and enhance your problem-solving
                skills.
              </p>
              <Link
                href="/learn/dsa"
                className="text-blue-500 hover:underline mt-4 block"
              >
                Explore Data Structure & Algorithms
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Page.getInitialProps = async ({ req }) => {
  const { userId } = getAuth(req);

  return { userId };
};
