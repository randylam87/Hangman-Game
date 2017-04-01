var heroName = ['genji','mccree','pharah','reaper','soldier','sombra','tracer','bastion','hanzo','junkrat','mei', 'torbjorn','widowmaker','orisa','reinhardt','roadhog','winston','zarya','ana','lucio','mercy','symmetra','zenyatta']; 
function Hero (heroName, heroAbility1, heroAbility2, heroUlt){
	this.name  = heroName;
	this.ability1 = heroAbility1;
	this.ability2 = heroAbility2;
	this.ult = heroUlt;
};
// heroes
var genji = new Hero('genji','swift strike','deflect', 'dragonblade');
var maccree = new Hero('mccree','combat roll','flashbang', 'deadeye');
var pharah = new Hero('pharah','jump jet','concussive blast', 'barrage');
var reaper = new Hero('reaper','wraith form','shadow step', 'death blossom');
var solider = new Hero('soldier: 76','sprint','biotic field', 'tactical visor');
var sombra = new Hero('sombra','thermoptic camo','translocator', 'emp');
var tracer = new Hero('tracer','blink','recall', 'pulse bomb');
var bastion = new Hero('bastion','reconfigure','self-repair', 'configuration: tank');
var hanzo = new Hero('hanzo','sonic arrow','scatter arrow', 'dragonstrike');
var junkrat = new Hero('junkrat','concussion mine','steel trap', 'rip tire');
var mei = new Hero('mei','cryo-freeze','ice wall', 'blizzard');
var torbjorn = new Hero('torbjorn','build turret','armor pack', 'molten core');
var widowmaker = new Hero('widowmaker','grappling hook','venom mine', 'infra sight');
var orisa = new Hero('orisa','fortify','protective barrier', 'supercharger');
var reinhardt = new Hero('reinhardt','charge','fire strike', 'earthshatter');
var roadhog = new Hero('roadhog','take a breather','chain hook', 'whole hog');
var winston = new Hero('winston','jump pack','barrier projector', 'primal rage');
var zarya = new Hero('zarya','partical barrier','projected barrier', 'graviton surge');
var ana = new Hero('ana','sleep dart','biotic grenade', 'nano boost');
var lucio = new Hero('lucio','crossfade','amp it up', 'sound barrier');
var mercy = new Hero('mercy','guardian angel','angelic decentr', 'ressurect');
var symmetra = new Hero('symmetra','sentry turret','photon barrier', 'teleporter');
var zenyatta = new Hero('zenyatta','orb of harmony','orb of discord', 'transcendence');

var randomWord = function() {
	var randomCalc = Math.floor(Math.random * heroName.length);
	var randomCalc2 = Math.floor(Math.random + 1);
	var randomHero = heroName[randomCalc];
	var randomAbility = randomHero[randomCalc2];
};



var buttonPress = document.getElementById("buttonPress");
document.onkeyup = function(event) {
	var userGuess = event.key.toLowerCase();
	buttonPress.textContent = userGuess;
};