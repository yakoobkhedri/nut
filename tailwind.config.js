/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':'#3D5A43',
        'secondary':'#081035',
        'gray':'#C2C5C6'
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      fontFamily: {
        yekanBakhThin: "YekanBakh-Thin",
        yekanBakhLight: "YekanBakh-Light",
        yekanBakhRegular: "YekanBakh-Regular",
        yekanBakhMedium: "YekanBakh-Medium",
        yekanBakhSemiBold: "YekanBakh-SemiBold",
        yekanBakhBold: "YekanBakh-Bold",
        yekanBakhExtraBold: "YekanBakh-ExtraBold",
        yekanBakhBlack: "YekanBakh-Black",
        morabbaThin: "Morabba-Thin",
        morabbaLight: "Morabba-Light",
        morabbaRegular: "Morabba-Regular",
        morabbaMedium: "Morabba-Medium",
        morabbaSemiBold: "Morabba-SemiBold",
        morabbaBold: "Morabba-Bold",
        morabbaExtraBold: "Morabba-ExtraBold",
        morabbaBlack: "Morabba-Black",
        MontserratRegular: "Montserrat-Regular",
        MontserratBold: "Montserrat-Bold",
      },
      padding:{
        'custom':'calc((100% - 1392px) / 2)'
       },
      maxWidth:{
        'content':'1240px',
      },
    }
},
}

