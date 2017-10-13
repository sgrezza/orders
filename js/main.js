

var app = new Vue({
  el: '#root',
  data: {
    plate: [],
    entrees: [
      {
        id: "ent0",
        name: "Pulled Pork Sandwich",
        description: "A championship-winning pulled pork sandwich made fresh on our smoker",
        price: 6.99,
        image: "pulled-pork.jpg"
      },
      {
        id: "ent1",
        name: "Brisket",
        description: "A delicious melt-in-your-mouth brisket",
        price: 11.99,
        image: "brisket.jpg"
      },
      {
        id: "ent2",
        name: "Pork Butt",
        description: "A mouth-watering pork-butt smoked to perfection",
        price: 9.99,
        image: "pork-butt.jpg"
      },
      {
        id: "ent3",
        name: "Ribs",
        description: "A rack of ribs smoked overnight to championship-winning tenderness",
        price: 13.99,
        image: "ribs.jpg"
      }
    ]
  },

  methods: {
    addItem: function(id) {
        this.plate.push(this.entrees[id]);
    },
    computed:{
      subtotal: function() {
        var accum = 0;
        for (var i=0; i<entrees.length; i++){
          accum += entrees[i].price;
          return accum;
        }
      }
    }

  }
})