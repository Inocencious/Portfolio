import React from "react";

type BulletPoint = {
  text: string;
};

type ExperienceProps = {
  company: string;
  role: string;
  duration: string;
  description?: string;
  bulletPoints?: BulletPoint[];
};

const Experience: React.FC<ExperienceProps> = ({ company, role, duration, description, bulletPoints }) => {
  return (
    <div className="mb-8">
      <div className="flex w-full">
        <h1 className="text-md">{company}</h1>
        <p className="text-md text-white/70 ml-auto">{duration}</p>
      </div>

      <p className="text-md text-white/70 mb-8">{role}</p>

      {description && (
        <p className="text-md text-white/70 mb-4">{description}</p>
      )}

      {bulletPoints &&
        bulletPoints.map((point, index) => (
          <div className="flex" key={index}>
            <p>▫️</p>
            <p className="ml-8 text-md text-white/70 leading-5 pb-4">{point.text}</p>
          </div>
        ))}
    </div>
  );
};

export default Experience;
