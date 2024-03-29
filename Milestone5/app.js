dayjs.extend(dayjs_plugin_customParseFormat);
dayjs.extend(dayjs_plugin_relativeTime);
const contatti = [
  {
    name: "Michele",
    avatar: "../img/avatar_1.jpg",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Hai portato a spasso il cane?",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Ricordati di stendere i panni",
        status: "sent",
      },
      {
        date: "10/01/2020 16:15:22",
        message: "Tutto fatto!",
        status: "received",
      },
    ],
  },
  {
    name: "Fabio",
    avatar: "../img/avatar_2.jpg",
    visible: true,
    messages: [
      {
        date: "20/03/2020 16:30:00",
        message: "Ciao come stai?",
        status: "sent",
      },
      {
        date: "20/03/2020 16:30:55",
        message: "Bene grazie! Stasera ci vediamo?",
        status: "received",
      },
      {
        date: "20/03/2020 16:35:00",
        message: "Mi piacerebbe ma devo andare a fare la spesa.",
        status: "sent",
      },
    ],
  },
  {
    name: "Samuele",
    avatar: "../img/avatar_3.jpg",
    visible: true,
    messages: [
      {
        date: "28/03/2020 10:10:40",
        message: "La Marianna va in campagna",
        status: "received",
      },
      {
        date: "28/03/2020 10:20:10",
        message: "Sicuro di non aver sbagliato chat?",
        status: "sent",
      },
      {
        date: "28/03/2020 16:15:22",
        message: "Ah scusa!",
        status: "received",
      },
    ],
  },
  {
    name: "Alessandro B.",
    avatar: "../img/avatar_4.jpg",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Lo sai che ha aperto una nuova pizzeria?",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Si, ma preferirei andare al cinema",
        status: "received",
      },
    ],
  },
  {
    name: "Alessandro L.",
    avatar: "../img/avatar_5.jpg",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ricordati di chiamare la nonna",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Va bene, stasera la sento",
        status: "received",
      },
    ],
  },
  {
    name: "Claudia",
    avatar: "../img/avatar_6.jpg",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ciao Claudia, hai novità?",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Non ancora",
        status: "received",
      },
      {
        date: "10/01/2020 15:51:00",
        message: "Nessuna nuova, buona nuova",
        status: "sent",
      },
    ],
  },
  {
    name: "Federico",
    avatar: "../img/avatar_7.jpg",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Fai gli auguri a Martina che è il suo compleanno!",
        status: "sent",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Grazie per avermelo ricordato, le scrivo subito!",
        status: "received",
      },
    ],
  },
  {
    name: "Silvia",
    avatar: "../img/avatar_io.jpg",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ciao, andiamo a mangiare la pizza stasera?",
        status: "received",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
        status: "sent",
      },
      {
        date: "10/01/2020 15:51:00",
        message: "OK!!",
        status: "received",
      },
    ],
  },
  {
    name: "Davide",
    avatar: "../img/avatar_8.jpg",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ciao, andiamo a mangiare la pizza stasera?",
        status: "received",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
        status: "sent",
      },
      {
        date: "10/01/2020 15:51:00",
        message: "OK!!",
        status: "received",
      },
    ],
  },
  {
    name: "Davide",
    avatar: "../img/avatar_8.jpg",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Ciao, andiamo a mangiare la pizza stasera?",
        status: "received",
      },
      {
        date: "10/01/2020 15:50:00",
        message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
        status: "sent",
      },
      {
        date: "10/01/2020 15:51:00",
        message: "OK!!",
        status: "received",
      },
    ],
  }
]

new Vue({
  el: "#app",
  data: {
    filter: "",
    newMessage: "",
    ultimoAccessoUtente: "01/10/2020 15:30:55",
    mainArray: contatti,

    currentUser: {
      name: "Michele",
      avatar: "../img/avatar_1.jpg",
      visible: true,
      messages: [
        {
          date: "10/01/2020 15:30:55",
          message: "Hai portato a spasso il cane?",
          status: "sent",
        },
        {
          date: "10/01/2020 15:50:00",
          message: "Ricordati di stendere i panni",
          status: "sent",
        },
        {
          date: "10/01/2020 16:15:22",
          message: "Tutto fatto!",
          status: "received",
        },
      ],
    },
  },
  methods: {
    changeVisibility(user) {
      this.currentUser = user

    },
    insertMessage() {

      console.log(this.newMessage);
      this.currentUser.messages.push(
        {
          date: `${dayjs().format("DD/MM/YYYY HH:mm:ss")}`,
          message: this.newMessage,
          status: "sent",
        }
      )
      setTimeout(() => {
        this.ultimoAccessoUtente[0] = dayjs().format("DD/MM/YYYY HH:mm:ss")
        console.log(this.ultimoAccessoUtente[0]);
        this.currentUser.messages.push(
          {
            date: `${dayjs().format("DD/MM/YYYY HH:mm:ss")}`,
            message: "ok",
            status: "received",
          }
        )
      }, 1000);
      this.newMessage = ""
      for (let i = 0; i < this.mainArray.length; i++) {
        if (!this.mainArray.visible) { return }
        else {
          this.mainArray[i].messages.push({
            date: `${dayjs().format("DD/MM/YYYY HH:mm:ss")}`,
            message: this.newMessage,
            status: "sent",
          })
          this.mainArray[i].messages.push({
            date: this.ultimoAccessoUtente,
            message: "ok",
            status: "received",
          })
        }
      }

    },
    filterFunction() {

      for (let i = 0; i < this.mainArray.length; i++) {
        if (this.mainArray[i].name.includes(this.filter) || this.mainArray[i].name.toLowerCase().includes(this.filter)) {
          this.mainArray[i].visible = true
        }
        else {
          this.mainArray[i].visible = false
        }
      }
    },
    deleteThisMessage(index) {
      console.log(dayjs("20/10/20", "DD,MM,YY"));
      this.currentUser.messages.splice(index, 1)
    },
    setTime(data) {

      return dayjs(data, "DD/MM/YYYY HH:mm:ss").format("HH:mm");
    },
    ultimoAccesso() {

      return `Ultimo accesso giorno ${dayjs(this.ultimoAccessoUtente, "DD/MM/YYYY HH:mm:ss").format("DD/MM")} alle ore ${dayjs(this.ultimoAccessoUtente, "DD/MM/YYYY HH:mm:ss").format("HH:mm")}`
    },
    messageLength(i) {
      return (this.mainArray[i].messages.length)
    },
    setLeftClock(value,indice){
      return dayjs(value.messages[this.messageLength(indice)-1].date,"DD/MM/YYYY HH:mm:ss").format("h:mm")
    }


  },


})

