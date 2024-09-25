const dropDown = () => {
  const dropdownBtn = document.querySelector(".dropdown-btn");

  const dropdownMenuItems = document.querySelector(".dropdown-menu-items");

  dropdownBtn.addEventListener("click", () => {
    console.log("I worked");
    if (dropdownMenuItems.hasAttribute("hidden")) {
      console.log("hidden");
      dropdownMenuItems.removeAttribute("hidden");
    } else {
      dropdownMenuItems.setAttribute("hidden", "false");
    }
  });
};

export default dropDown;

//add eventListener with Onclick of dropdownBtn the dropdown-menu will be triggered visible or hidden
