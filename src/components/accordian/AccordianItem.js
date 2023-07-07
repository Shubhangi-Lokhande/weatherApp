import { useState } from "react";


const AccordianItem = ({faq, index, activeIndex, setActiveIndex}) => {
    const {question, answer} = faq;
    const handleSetIndex = (index) => {
        (activeIndex != index) && setActiveIndex(index);
        //(activeIndex === index) && setOpen(open = true);
    }
    return(
            <>
                <div className="bg-slate-600 text-white text-center font-semibold text-lg p-2 cursor-pointer"
                    onClick={() => handleSetIndex(index)}>
                    {question}
                    <span className="float-right mr-4">{(activeIndex == index) ? "-" : "+"}</span>
                </div>
                {
                    (activeIndex == index) && <div className="p-2 bg-yellow-50">{answer}</div>
                }
                
            </>
        )

}

export default AccordianItem;
  /* <div className="w-1/2 flex justify-center">
               
    </div>*/
