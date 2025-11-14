
// تابع برای بررسی مقدار اینپوت و به‌روزرسانی آیکن
function validateQuantity(input) {
  const value = parseInt(input.value);
  
  // اگر مقدار کمتر از 1 باشد، آن را 1 قرار بده
  if (value < 1 || isNaN(value)) {
    input.value = 1;
    updateIcons(input);
    return;
  }
  
  updateIcons(input);
  updateTotalPrice(input);
}

// تابع برای به‌روزرسانی آیکن‌ها
function updateIcons(input) {
  const value = parseInt(input.value);
  const decreaseBtn = input.parentElement.querySelector('.decrease-btn');
  const minusIcon = decreaseBtn.querySelector('.minus-icon');
  const trashIcon = decreaseBtn.querySelector('.trash-icon');
  
  if (value === 1) {
    // اگر مقدار 1 است، آیکن سطل زباله را نشان بده
    minusIcon.classList.add('hidden');
    trashIcon.classList.remove('hidden');
  } else {
    // اگر مقدار بیشتر از 1 است، آیکن منفی را نشان بده
    minusIcon.classList.remove('hidden');
    trashIcon.classList.add('hidden');
  }
}

// تابع برای به‌روزرسانی قیمت کل
function updateTotalPrice(input) {
  const cartItem = input.closest('.cart-item');
  const priceElement = cartItem.querySelector('.price-unit');
  const priceText = priceElement.textContent;
  const price = parseInt(priceText.replace(/[^0-9]/g, ''));
  const quantity = parseInt(input.value);
  const totalPriceElement = cartItem.querySelector('.total-price');
  
  const totalPrice = price * quantity;
  totalPriceElement.textContent = totalPrice.toLocaleString() + ' تومان';
}

// افزودن event listener برای دکمه‌ها بعد از لود صفحه
document.addEventListener('DOMContentLoaded', function() {
  // دکمه افزایش
  document.querySelectorAll('.increase-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const input = this.parentElement.querySelector('.quantity-input');
      input.value = parseInt(input.value) + 1;
      validateQuantity(input);
    });
  });
  
  // دکمه کاهش/حذف
  document.querySelectorAll('.decrease-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const input = this.parentElement.querySelector('.quantity-input');
      const currentValue = parseInt(input.value);
      
      if (currentValue > 1) {
        input.value = currentValue - 1;
        validateQuantity(input);
      } else if (currentValue === 1) {
        // اگر مقدار 1 است و کاربر روی سطل زباله کلیک کرد، آیتم را حذف کن
        const cartItem = this.closest('.cart-item');
        cartItem.remove();
        
        // در اینجا می‌توانید منطق به‌روزرسانی سبد خرید را اضافه کنید
        updateCartSummary();
      }
    });
  });
  
  // مقداردهی اولیه آیکن‌ها
  document.querySelectorAll('.quantity-input').forEach(input => {
    updateIcons(input);
  });
});

// تابع برای به‌روزرسانی خلاصه سبد خرید (در صورت نیاز)
function updateCartSummary() {
  // این تابع را بر اساس نیاز خود پیاده‌سازی کنید
  console.log('سبد خرید به‌روزرسانی شد');
}
