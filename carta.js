class Carta {
  constructor(mana,atk,def){
    this.mana = mana;
    this.atk = atk;
    this.def = def;
    this.html;
  }

  genHTML(){
    this.html = "<div class='carta' ><p class='mana'>"+this.mana+"</p><p class='atk'>"+this.atk+"</p><p class='def' >"+this.def+"</p></div>"
  }
}
