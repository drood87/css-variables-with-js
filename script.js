const inputs = document.querySelectorAll(".controls input");
const quickColors = document.querySelectorAll(".quick-color");

console.log(quickColors);

function handleUpdate() {
    const suffix = this.dataset.sizing || ""; // will assign the value of the data attribute to the variable OR if not available, leave it empty;
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffix
    ); //name will target the name of the seclected html element and set it to the value of the input
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
