const dropDownMenu = (function() {

    const toggleDrop = (classIdentifier) => {
        let dropElements = document.getElementsByClassName(classIdentifier);
        let dropElementsArray = [...dropElements];

        for(let i = 0; i < dropElementsArray.length;i++) {
            dropElementsArray[i].classList.toggle("hidden");
        }
    } 

    return {
        toggleDrop
    }
})();



const topMenu = document.getElementById("topMenyElement");

topMenu.addEventListener("click", () => {
    dropDownMenu.toggleDrop("dropDownElements");
})

