import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// TeamCard Component
const TeamCard = ({ name, role, imgSrc, github, linkedin, bgColor }) => {
  return (
    <div className="max-w-xs w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      {/* Profile Image Section */}
      <div className="p-4 flex flex-col items-center">
        {/* Profile Image (circular) */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 mb-4" style={{ backgroundColor: bgColor }}>
        </div>

        {/* Name */}
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        {/* Role */}
        <p className="text-sm text-gray-500">{role}</p>

        {/* Social Media Icons Section */}
        <div className="mt-4 flex space-x-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Main Team Component
const Team = () => {
  const teamMembers = [
    {
      name: "Oshika Sharma",
      role: "Team Leader",
      github: "https://github.com/Oshika22",
      linkedin: "https://www.linkedin.com/in/oshika-sharma-a1120529a/",
      bgColor: "#ffd966",
    },
    {
      name: "Anshul Goyal",
      role: "",
      github: "https://github.com/goelash2",
      linkedin: "https://www.linkedin.com/in/anshulgoyal2/",
      bgColor: "#FF6F61",
    },
    {
      name: "Pranjali Yeotikar",
      role: "", 
      github: "https://github.com/pranjali999",
      linkedin: "https://www.linkedin.com/in/pranjali-yeotikar-042ab82a6/",
      bgColor: "#ffd966",
    },
    {
      name: "Nishik Ojha",
      role: "", 
      github: "",
      linkedin: "https://www.linkedin.com/in/nishik-ojha-74785a289/",
      bgColor: "#FF6F61",
    },

  ];

  return (
    <div>
        <h1 className="text-6xl text-[#333333] font-semibold mb-6 text-center text-shadow">Team</h1>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            github={member.github}
            instagram={member.instagram}
            linkedin={member.linkedin}
            bgColor={member.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
