const inputs = document.querySelectorAll(".controls input");
const quickColors = document.querySelectorAll(".quick-color");
const bodyStyles = window.getComputedStyle(document.body); // get CSS properties from the root element
const hl = document.querySelector(".hl")
function quickColorsUpdate() {
    const quick = this.dataset.quickcolor;
    const color = bodyStyles.getPropertyValue("--quick-color-" + quick);
    document.documentElement.style.setProperty("--base", color);
}

function handleUpdate() {
    const suffix = this.dataset.sizing || ""; // will assign the value of the data attribute to the variable OR if not available, leave it empty;
    document.documentElement.style.setProperty(
        // we target the .documentElement, in this case the html element cause we declared our variable to the root element
        `--${this.name}`,
        this.value + suffix
    ); //name will target the name of the seclected html element and set it to the value of the input
    console.log(this.name);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
// inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
quickColors.forEach(quick =>
    quick.addEventListener("click", quickColorsUpdate)
);
