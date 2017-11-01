class Deck {
        constructor(){
            this.deck_list = [];
            this.suits = ["spade","diamond","heart","club"];
            this.value = ['Ace',2,3,4,5,6,7,8,9,10,'Jack','Queen','King'];
            this.createDeck();
        }
    createDeck(){
        for(let i =0;i<this.suits.length;i++){
            for (let j = 0;j<this.value.length;j++){
                let card = {};
                card.suit = this.suits[i];
                card.value = this.value[j];
                this.deck_list.push(card)
            }
        }
        return this.deck_list;
    }
    shuffleDeck(){
        var i = 0
        , j = 0
        , temp = null
    
      for (i = this.deck_list.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this.deck_list[i];
        this.deck_list[i] = this.deck_list[j];
        this.deck_list[j] = temp;
      }
      return this.deck_list;
    }
    dealCard(){
        let index = Math.floor(Math.random()*this.deck_list.length);
        let deal_card = this.deck_list[index];
        if (index > -1) {
            this.deck_list.splice(index, 1);
        }
        // console.log(deal_card.suit);
        // console.log('inside dealcard-----'+deal_card.suit+deal_card.value);
        return deal_card;
    } 
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    drawCard(deck1){
        let draw_card = deck1.dealCard();
        this.hand.push(draw_card);
        console.log(this.name+' you got: '+draw_card.suit+' of '+draw_card.value);
        
        return this;
    }

    discardCard(){
        this.hand.pop();
        return this;
    }
}

let deck1 = new Deck();
deck1.shuffleDeck();

let player1 = new Player('Ross');
for (let i = 0; i <10; i++){
    player1.drawCard(deck1);
}



