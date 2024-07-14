// Nav component
import React from "react";
type Service = {
    id: number;
    name: string;
    thumbnail: string;
    details: string;
  };
  
  const services: Service[] = [
    { id: 1, name: "Repairing Service", thumbnail: "upload/tools-for-reparing-svgrepo-com.svg", details: "Inverter, AC/DC Drive, HMI, PLC, Servo Drive & Electronics Card" },
    { id: 2, name: "Troubleshooting Service", thumbnail: "upload/monitor-like-svgrepo-com.svg", details: "Any kinds of industrial troubleshooting service in Bangladesh" },
    { id: 3, name: "Automation Service", thumbnail: "upload/automation-svgrepo-com.svg", details: "Automation Systems Engineering solutions, Service Support Before and After Sale" }
  ];
  
  const Servicelist: React.FC = () => {
    return (
      <div>
        <ul className="block sm:flex">
          {services.map((service) => (
            <li className="text-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-8" key={service.id}>
              <img className="m-auto" src={service.thumbnail} />
              <h2 className="font-bold py-4">{service.name}</h2>
              <p>{service.details}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Servicelist;