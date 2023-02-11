import { useState } from "react";

export default function sidebarHook() {
  const [menuShrank, setMenuShrank] = useState<boolean>(true);

  const handleShrinkMenu = () => {
        setMenuShrank(!menuShrank)
  }

  return {menuShrank, handleShrinkMenu};
}
