/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html" , "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#0044cc', // تغيير اللون الرئيسي
        secondary: '#f0f0f0', // تغيير اللون الثانوي
      },
      backgroundImage: {
        'custom-bg': "url('images/logo2.jpg')", // غيّر المسار حسب صورتك
      }, animation: {
        typing: 'typing 6s steps(15, end) infinite, blink 0.5s step-end infinite',
        bounce: 'bounce 1s infinite'
      },
      keyframes: {
        typing: {
          '0%, 100%': { width: '0' },  // بداية الكتابة والتمسح
          '50%': { width: '15ch' },    // منتصف الأنيميشن حيث النص يظهر بالكامل
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'black' },
        },  bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
      },
      },
    
    },
  },
  plugins: [],
}

