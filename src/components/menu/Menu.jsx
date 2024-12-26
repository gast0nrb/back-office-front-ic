import { useState } from "react";
import ListMenu from "./ListMenu"

const Menu = () => {
    const [showList, setShowList] = useState(false)
    return (
    <div class="text-center rounded-full mx-auto flex-wrap">
        {
            showList ? 
            <>
                <button className="hover:bg-ic-orange duration-200 rounded-full p-0.5"
                    onClick={(e)=> setShowList(false)}
                >
                    <img src="/close.svg" alt="" width={35} />
                </button>

                    <ListMenu/>
                
            </>
         :
            <>
                    <button class="duration-200 hover:bg-ic-orange rounded-full p-1"
                    onClick={(e)=> {
                        e.preventDefault()
                        setShowList(true)
                    }}
                    >
                        <img src="/menu.svg" width={35} alt="" />
                    </button>
                    <h3>Menu</h3>
                </>
        }
    </div>
    )
}


export default Menu;