
const thicknessOptions = document.querySelectorAll('.thickness-option');
const sizeOptions = document.querySelectorAll('.size-option');
const sizeOptions2 = document.querySelectorAll('.size-option2');
const sizeOptions3 = document.querySelectorAll('.size-option3');
const selectedThickness = document.getElementById('selected-thickness');
const selectedSize = document.getElementById('selected-size');
const toppingCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const selectedToppings = document.querySelector('.selected-toppings');
let button = document.getElementById("buyurtma")

thicknessOptions.forEach(option => {
  option.addEventListener('click', function() {
    selectedThickness.textContent = this.getAttribute('data-thickness');
  });
});

sizeOptions.forEach(option => {
  option.addEventListener('click', function() {
    selectedSize.textContent = this.getAttribute('data-size') ;
  });
});
sizeOptions2.forEach(option => {
    option.addEventListener('click', function() {
      selectedSize.textContent = this.getAttribute('data-size') ;
    });
  });
  sizeOptions3.forEach(option => {
    option.addEventListener('click', function() {
      selectedSize.textContent = this.getAttribute('data-size') ;
    });
  });
toppingCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const toppingName = this.value;
    if (this.checked) {
      const newTopping = document.createElement('div');
      newTopping.classList.add('topping-option');
      newTopping.textContent = toppingName;
      selectedToppings.appendChild(newTopping);
    } else {
      const toppings = selectedToppings.querySelectorAll('.topping-option');
      toppings.forEach(topping => {
        if (topping.textContent === toppingName) {
          topping.remove();
        }
      });
    }
  });
});
const checkboxes = document.querySelectorAll('.checkbox');
const selectedCheckboxName = document.getElementById('selected-checkbox-name');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      selectedCheckboxName.textContent = this.nextSibling.textContent;
    }
  });
});
button.addEventListener("click",()=>{
    alert("Buyurtmangiz qabul qilindi")
})
