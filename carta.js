class Carta {
  constructor(mana,atk,def){
    this.nombre = (mana == 0)? "mana" : "bicho";
    this.mana = mana;
    this.atk = atk;
    this.def = def;
    this.html = "<div class='carta'>"+
      "<p class='mana'>"+this.mana+"</p>"+
      "<p class='nombre'>"+this.nombre+"</p>"+
      "<p class='atk'>"+this.atk+"</p>"+
      "<p class='def'>"+this.def+"</p>"+
      "</div>";
  }
}
