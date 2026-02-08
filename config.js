export const config = {
  // Name & page title
  valentineName: "Kamden",
  pageTitle: "Hey Kamden 🕷️❤️",

  // Spider-Man color theme
  colors: {
    backgroundStart: "#0b0d17",   // dark night blue
    backgroundEnd: "#8b0000",     // deep Spider-Man red
    buttonBackground: "#e10600",  // classic Spidey red
    buttonHover: "#ff2a2a",
    textColor: "#ffffff"
  },

  // Questions & text
  questions: {
    first: {
      text: "Hey Kamden… 🕷️❤️",
      yesBtn: "What is it?",
      noBtn: "Hmm?",
      secretAnswer: "I knew you’d stay 😉"
    },
    second: {
      text: "You make my heart swing through the city like Spider-Man 🕸️",
      startText: "Aww 🥺",
      nextBtn: "Next ❤️"
    },
    third: {
      text: "So… will you be my Valentine?",
      yesBtn: "Yes ❤️🕷️",
      noBtn: "You’re stuck with me anyway"
    }
  },

  // Optional background music
  music: {
    enabled: false,
    autoplay: false,
    musicUrl: "",
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.5
  }
};