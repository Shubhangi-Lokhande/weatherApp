import {CDN_URL} from '../../utils/common';

const MenuCard = ({card}) => {
    return(
        <div className="w-52 h-auto shadow-lg bg-gray-200 border-black mx-auto my-8">
            <img src={CDN_URL+card.cloudinaryImageId}/>
            <div className='text-center'>{card.name}</div>
        </div>
    )
}

export default MenuCard;