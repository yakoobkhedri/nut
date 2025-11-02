   // تنظیم زمان پایان (دو روز از زمان فعلی)
        const countDownDate = new Date();
        countDownDate.setDate(countDownDate.getDate() + 1);
        
        // ذخیره زمان شروع برای محاسبه پیشرفت
        const startDate = new Date();
        
        // به روز رسانی تایمر هر ثانیه
        const timer = setInterval(function() {
            // زمان فعلی
            const now = new Date().getTime();
            
            // فاصله بین زمان فعلی و زمان پایان
            const distance = countDownDate - now;
            
            // محاسبه روز، ساعت، دقیقه و ثانیه
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // نمایش نتیجه در المان‌های HTML
            document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
            
            
            // اگر شمارش به پایان رسید
            if (distance < 0) {
                clearInterval(timer);
                document.getElementById("hours").innerHTML = "00";
                document.getElementById("minutes").innerHTML = "00";
                document.getElementById("seconds").innerHTML = "00";
            }
        }, 1000);