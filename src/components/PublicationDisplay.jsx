import React from "react";
import { publications } from "../constants"; // Ensure you export your publications from the constants file
import { arrow } from "../assets/icons";

const PublicationDisplay = () => {
  return (
    <div className="my-20">
      {publications.map((publication) => (
        <div className="flex mb-16" key={publication.name}>
          {/* Image Column with Border */}
          <div className="w-1/3 flex-shrink-0 mr-5">
            <div className="relative w-full h-auto">
              <img
                src={publication.img}
                alt="publication"
                className="w-full h-auto object-contain border-4 border-gray-300 rounded-lg"
              />
            </div>
          </div>
          {/* Text Column */}
          <div className="w-2/3">
          <p className="text-slate-500 font-medium mb-2">{publication.year}</p>
            <h4 className="text-2xl font-poppins font-semibold mb-2">
              {publication.name}
            </h4>
            <p className="text-slate-500 font-semibold text-lg mb-2">{publication.journal}</p>
            <p className="text-slate-500 mb-2">{publication.authors}</p>
            <div className="mt-5 flex items-center gap-2 font-poppins">
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600"
              >
                Read More
              </a>
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationDisplay;
