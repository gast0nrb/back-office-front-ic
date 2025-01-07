import { useState } from "react";
import ListMenu from "./ListMenu";

const Menu = () => {
  const [showList, setShowList] = useState(false);
  return (
    <div class="text-center left-0 right-0 fixed bottom-5">
      {showList ? (
        <>
          <button
            className="hover:bg-ic-orange duration-200 rounded-full p-0.5"
            onClick={(e) => setShowList(false)}
          >
            <img src="/close.svg" alt="" width={35} />
          </button>

          <ListMenu />
        </>
      ) : (
        <>
          <h3 className="text-ic-orange -mb-1">Menu</h3>
          <button
            class="duration-200 hover:bg-ic-orange rounded-full p-1"
            onClick={(e) => {
              e.preventDefault();
              setShowList(true);
            }}
          >
            <img src="/menu.svg" width={35} alt="" />
          </button>
        </>
      )}
    </div>
  );
};

export default Menu;
