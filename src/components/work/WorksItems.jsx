import React from "react";
import "./work.css";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const WorksItems = ({ item }) => {
  return (
    
    <CardContainer className="inter-var work__card" key={item.id}>
      <CardBody className="work__card-inner bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
    
        
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={item.image}
            height="300"
            width="300"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <h3>

        <CardItem
          translateZ="200"
          className="work__title"
          >
         {item.title}
        </CardItem>
          </h3>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href={item.link}
            target="_blank" rel="noopener noreferrer" className="work__button "
            
          >
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default WorksItems;
