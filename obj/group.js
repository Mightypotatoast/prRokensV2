
const {MessageEmbed} = require('discord.js');
    class GroupEmbed extends MessageEmbed {
        constructor(message, titre, niveau, description) {

            super()

            this.tank = "Place vide"
            this.heal = "Place vide"
            this.dps1 = "Place vide"
            this.dps2 = "Place vide"
            this.dps3 = "Place vide"
            this.keyOwner = null

            this.setTitle("**"+titre+" "+niveau+"**")
            this.setDescription(description)
            this.setColor("ff0000")
            this.setFooter("KahuraTV")
            this.setTimestamp(message.createdAt)
            this.setAuthor(message.author.username,message.author.displayAvatarURL())
            this.setThumbnail("https://stratwow.com/wp-content/uploads/2020/09/sl22.jpg")
            this.setURL("https://stratwow.com/category/shadowlands/donjons/")
            this.addField("**Composition**","<:tank:821445640839888906> : "+this.tank+"\n<:heal:821445674255777802> : "+this.heal+"\n<:dps:821449375480807434> : "+this.dps1+"\n<:dps:821449375480807434> : "+this.dps2+"\n<:dps:821449375480807434>  : "+this.dps3+"")
    

        }
        
        refresh(){
            this.fields[0].value = "<:tank:821445640839888906> : "+this.tank+"\n<:heal:821445674255777802> : "+this.heal+"\n<:dps:821449375480807434> : "+this.dps1+"\n<:dps:821449375480807434> : "+this.dps2+"\n<:dps:821449375480807434>  : "+this.dps3+""
        }
        
        addTank(user){
            if (this.tank!="Place vide") {
                console.log("Place de tank déjà prise")
            }
            else if (this.tank=="Place vide"){
                this.tank = user.toString()
                console.log("Ajout d'un tank")
            }
        }
    
        delTank(user){
            if (this.tank==user.toString) {
                this.tank = "Place vide"
                console.log("Place de tank à nouveau libre")
            }
            else return
        }
    
        addHeal(user){
            if (this.heal!="Place vide") {
                console.log("Place de tank déjà prise")
            }
            else if (this.heal=="Place vide"){
                this.heal = user.toString()
                console.log("Ajout d'un healer")
            }
        }
        
        delHeal(user){
            if (this.heal==user.toString) {
                this.heal = "Place vide"
                console.log("Place de heal a nouveau libre")
            }
            else return
        }
    
        addDps(user){
            if (this.dps1=="Place vide") {
                this.dps1 = user.toString()
                console.log("Ajout d'un dps")
            }
            else if (this.dps2=="Place vide") {
                this.dps2 = user.toString()
                console.log("Ajout d'un deuxieme dps")
            } 
            else if (this.dps3=="Place vide") {
                this.dps3 = user.toString()
                console.log("Ajout d'un troisième dps")
            }
            else {
                console.log("Pas de place disponible")
            }  
        }
    
        addDps(user){
            if (this.dps1=="Place vide") {
                this.dps1 = user.toString()
                console.log("Ajout d'un dps")
            }
            else if (this.dps2=="Place vide") {
                this.dps2 = user.toString()
                console.log("Ajout d'un deuxieme dps")
            } 
            else if (this.dps3=="Place vide") {
                this.dps3 = user.toString()
                console.log("Ajout d'un troisième dps")
            }
            else {
                console.log("Pas de place disponible")
            }  
        }
    
        delDps(user){
            if (this.dps1==user.toString) {
                this.dps1 = "Place vide"
                console.log("Suppression d'un dps")
            }
            else if (this.dps2==user.toString) {
                this.dps2 = "Place vide"
                console.log("Suppression d'un dps")
            } 
            else if (this.dps3==user.toString) {
                this.dps3 = "Place vide"
                console.log("Suppression d'un dps")
            }
            else {
                return
            }  
        }
    }

module.exports.GroupEmbed = GroupEmbed;


