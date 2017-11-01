Vue.component("sides-menu", {
  template: `<div>
  <div class="columns is-gapless" v-for="(side, index) in sides">
      <img class="media-left image-class" >
      <div class="column is-7">
        <h2 class="title">{{side.name}}</h2>
        <p class="subtitle ">{{side.description}}</p>
      </div><br>
      <div class="column is-3 has-text-right">
        <h2 class="title is-size-2">$ {{side.price}}</h2>
        <button v-on:click="addSide(index)" class="button is-warning">Add to Plate</button>
      </div>
      <hr>
     </div>
</div>`,
  data() {
    return {
      sides: [
      {
        id: "side0",
        name: "Cole Slaw",
        description: "Some good 'ol cole slaw",
        price: 3.99,
        image: "pulled-pork.jpg"
      },
      {
        id: "side1",
        name: "Baked Beans",
        description: "The family's baked bean recipe",
        price: 3.99,
        image: "brisket.jpg"
      }
    ]}
  },
  methods: {
    addSide: function(id) {
        app.plate.push(this.sides[id]);
    }
  }
})
Vue.component("entree-menu", {
  template: `<div>
    <div class="columns is-gapless" v-for="(entree, index) in entrees">
        <img class="media-left image-class" :src="'images/' + entree.image">
        <div class="column is-7">
          <h2 class="title">{{entree.name}}</h2>
          <p class="subtitle ">{{entree.description}}</p>
        </div><br>
        <div class="column is-3 has-text-right">
          <h2 class="title is-size-2">$ {{entree.price}}</h2>
          <button v-on:click="addItem(index)" class="button is-warning">Add to Plate</button>
        </div>
        <hr>
       </div>
</div>`,
  data() {
    return {
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
      ],
    }
  },
  methods: {
    addItem: function(id) {
      app.plate.push(this.entrees[id]);
    },
  }
})
var app = new Vue({
  el: '#root',
  data: {
    plate: [],
    showEntrees: true,
    showSides: false
  },
  methods: {
   
   removeItem: function(id){
    this.plate.pop(this.id);
    },
    showMenu: function(menu){
      switch(menu) {
        case 'entrees':
          this.showEntrees = true;
          this.showSides = false;
          break;
        case 'sides':
        this.showEntrees = false;
        this.showSides = true;
      }
    }
  },
      computed:{
        subtotal: function() {
          var accum = 0;
          for (var i=0; i<this.plate.length; i++){
            accum += this.plate[i].price;
          }
          return accum;
        },
        totalTax: function() {
          var tax =  (this.subtotal * 0.07); 
          return tax;
        },
        grandTotal: function() {
          var total = this.subtotal + this.totalTax;
          return total;
        }
      }
})
document.addEventListener('DOMContentLoaded', function () {
  FastClick.attach(document.body);
}, false);

