import { useState } from "react";
import { faqs } from "../../utils/data";
import AccordianItem from "./AccordianItem";

const Accordian = () => {
   const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="border bg-gray-200 flex justify-center">
            <div className="w-3/4">
                {
                    faqs.map((faq,index) => {
                        return <AccordianItem key={index} faq={faq}
                                   activeIndex={activeIndex}
                                   index={index}
                                   setActiveIndex={setActiveIndex}  
                                     />
                    })
                }     
            </div>
        </section>
    )
}

export default Accordian;