const inputs = document.querySelectorAll(".controls input");
const spacing = document.querySelector("#spacing");
const blur = document.querySelector("#blur");
const base = document.querySelector("#base");

function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    console.log(`name: ${this.name}, value: ${this.value}`);
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffix
    ); //name will target the name of the seclected html element and set it to the value of the input
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
