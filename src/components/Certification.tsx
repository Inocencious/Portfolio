import React from "react";

type CertificationProps = {
  title: string;
  organization: string;
  duration: string;
  credentialId?: string;
};

const Certification: React.FC<CertificationProps> = ({ title, organization, duration, credentialId }) => {
  return (
    <div className="mb-8">
      <div className="flex">
        <h1 className="text-lg">{title}</h1>
        <p className="text-md ml-auto text-white/70">{duration}</p>
      </div>
      <p className="text-md text-white/70">{organization}</p>
      {credentialId && <p className="text-md text-white/70">Credential ID {credentialId}</p>}
    </div>
  );
};

export default Certification;
