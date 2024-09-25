import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// Slider item component
const SliderItem = ({ backgroundImage, name, description }) => {
  return (
    <div
      className="relative w-[200px] h-[300px] rounded-lg shadow-lg bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-start p-4 bg-opacity-0 hover:bg-opacity-50 bg-black transition-all duration-500">
        <h2 className="text-white text-2xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-500">
          {name}
        </h2>
        <p className="text-white text-sm opacity-0 hover:opacity-100 transition-opacity duration-500 mt-2">
          {description}
        </p>
        <button className="mt-4 px-4 py-2 bg-white text-black rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500">
          See More
        </button>
      </div>
    </div>
  );
};

const Page1 = () => {
    const fadeIn = "transition-opacity duration-700 opacity-0";
    const [items, setItems] = useState([
      {
        backgroundImage: "https://i.ibb.co/qCkd9jS/img1.jpg",
        name: "Switzerland",
        description: "X-Dev, Transforming code into visual poetry..!",
      },
      {
        backgroundImage: "https://i.ibb.co/jrRb11q/img2.jpg",
        name: "Finland",
        description: "X-Dev, Transforming code into visual poetry..!",
      },
      {
        backgroundImage: "https://i.ibb.co/NSwVv8D/img3.jpg",
        name: "Iceland",
        description: "X-Dev, Transforming code into visual poetry..!",
      },
      {
        backgroundImage: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
        name: "Australia",
        description: "X-Dev, Transforming code into visual poetry..!",
      },
      {
        backgroundImage: "https://i.ibb.co/jTQfmTq/img5.jpg",
        name: "Netherlands",
        description: "X-Dev, Transforming code into visual poetry..!",
      },
      {
        backgroundImage: "https://i.ibb.co/RNkk6L0/img6.jpg",
        name: "Ireland",
        description: "X-Dev, Transforming code into visual poetry..!",
      },
    ]);
  
    useEffect(() => {
      const link = document.createElement("link");
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
      return () => document.head.removeChild(link);
    }, []);
  
    const handleNext = () => {
      setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
    };
  
    const handlePrev = () => {
      setItems((prevItems) => [
        prevItems[prevItems.length - 1],
        ...prevItems.slice(0, -1),
      ]);
    };
  
    return (
      <div className="relative w-full h-[500px]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-full">
          <div className="relative w-full h-full">
            {items.map((item, index) => (
              <div
                key={index}
                className={`absolute top-1/2 transform -translate-y-1/2 w-[200px] h-[300px] rounded-[20px] shadow-lg bg-cover bg-center transition-all duration-500 ${
                  index === 0
                    ? "left-0 top-0 w-full h-full rounded-none"
                    : index === 1
                    ? "left-1/2"
                    : index === 2
                    ? "left-[calc(50%+220px)]"
                    : index === 3
                    ? "left-[calc(50%+440px)]"
                    : "left-[calc(50%+660px)] opacity-0"
                }`}
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              >
                {/* Show details only for the enlarged card (index === 0) */}
                {index === 0 && (
                  <div
                    className={`w-[400px] pl-[20px] h-full flex flex-col items-center justify-center text-center text-white ${fadeIn} animate-fadeIn opacity-100`}
                    style={{ opacity: 1 }} // Set to 1 for visibility
                  >
                    <h2 className="text-4xl font-bold uppercase">{item.name}</h2>
                    <p className="mt-2 mb-5 animation-delay-300">{item.description}</p>
                    <button className="px-5 py-2.5 w-32 bg-white text-black animation-delay-600">
                      See More
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-5 w-full text-center">
          <button
            className="w-10 h-[35px] rounded-lg border border-black mx-1.5 transition-colors duration-300 hover:bg-[#ababab] hover:text-white"
            onClick={handlePrev}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className="w-10 h-[35px] rounded-lg border border-black mx-1.5 transition-colors duration-300 hover:bg-[#ababab] hover:text-white"
            onClick={handleNext}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    );
  };

// Remaining pages
const Card = ({ number, title, content }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(cardRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-[350px] h-[450px] m-4 shadow-lg rounded-xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-md flex justify-center items-center border border-gray-400"
    >
      <div className="p-5 text-center transition-transform duration-500 opacity-0 hover:opacity-100 hover:translate-y-5">
        <h2 className="absolute top-[-150px] right-2 text-[13em] text-white text-opacity-5 pointer-events-none">
          {number}
        </h2>
        <h3 className="text-4xl text-white mb-8">{title}</h3>
        <p className="text-base text-white text-justify mb-8">{content}</p>
        <button className="px-4 py-2 bg-white text-black rounded-full shadow-lg">
          Read More
        </button>
      </div>
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="flex flex-nowrap items-center justify-center space-x-6 h-full">
      <Card
        number="01"
        title="Card One"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut magnam porro cupiditate at ipsum qui beatae odit animi ab, enim vel! Accusantium similique id molestiae dicta unde, corrupti eaque ducimus!"
      />
      <Card
        number="02"
        title="Card Two"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut magnam porro cupiditate at ipsum qui beatae odit animi ab, enim vel! Accusantium similique id molestiae dicta unde, corrupti eaque ducimus!"
      />
      <Card
        number="03"
        title="Card Three"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut magnam porro cupiditate at ipsum qui beatae odit animi ab, enim vel! Accusantium similique id molestiae dicta unde, corrupti eaque ducimus!"
      />
    </div>
  );
};

const HorizontalScroll = () => {
    
  return (
    <div className="overflow-x-auto scrollbar-hidden whitespace-wrap h-screen">
      <section className="inline-block h-full w-screen bg-gray-900 text-white">
        <div className="flex flex-col items-center justify-center h-full">
          <Page1 />
        </div>
      </section>
      <section className="inline-block h-full w-screen bg-gray-900 text-white">
        <div className="flex flex-col items-center justify-center h-full">
          <Page2 />
        </div>
      </section>
      <section className="inline-block h-full w-screen bg-gray-900 text-white">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl mb-8">Page Three</h1>
          <p className="w-4/5 text-justify text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            iste exercitationem nam autem, aperiam corporis qui necessitatibus.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HorizontalScroll;
