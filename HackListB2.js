ModPE.langEdit("deathScreen.message", "§4§lSuB §2GKYT & §4BLH & §3IV")
ModPE.langEdit("menu.version","§4HLV2")
ModPE.langEdit("menu.store","§2HackList!")
ModPE.langEdit("menu.settings","§l§3HACKLIST")
ModPE.langEdit("menu.returnToGame","§5SuB")
ModPE.langEdit("menu.online","§7SuB Maders")
ModPE.langEdit("menu.skins", "§9Good skins");
ModPE.langEdit("menu.generatingTerrain", "§1Top cheat §6Hacklist");
ModPE.langEdit("menu.play","§l§2HACKLIST")
ModPE.langEdit("menu.copyright","§l▰▰▰▰▰▰ Создатель §l- §2GameKingYT & §4BIGKING LUA HACKER §3IVAN L")
ModPE.langEdit("progressScreen.generating","§4§l SuB §2GKYT & §4BLH & §3IL")

newLevel();
var fly = false;
var fl;
var GUI;
      var flight;
      var menu;
      var exitUI;
      function dip2px(dips){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
      }
      function newLevel(){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
      var layout = new android.widget.LinearLayout(ctx);
      layout.setOrientation(1);
      var menuBtn = new android.widget.Button(ctx);
      menuBtn.setText('LIST');
      menuBtn.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      mainMenu();
      exit();
      }
      }));
      layout.addView(menuBtn);
      GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
      GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
      GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 10, 20);
      }catch(err){
      print('An error occured: ' + err);
      }
      }}));
      }
       function mainMenu(){
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
      var menuLayout = new android.widget.LinearLayout(ctx);
      var menuScroll = new android.widget.ScrollView(ctx);
      var menuLayout1 = new android.widget.LinearLayout(ctx);
      menuLayout.setOrientation(1);
      menuLayout1.setOrientation(1);
      menuScroll.addView(menuLayout);
      menuLayout1.addView(menuScroll);
      var textv = new android.widget.TextView(ctx);
    textv.setTextSize(20);
    textv.setText('HackListB2');
    textv.setGravity(android.view.Gravity.CENTER);
    textv.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg) {
    clientMessage('§4ПОДПИШИСЬ НА §l§a GKYT & BLH & IL!') 
    }
    }));
    menuLayout.addView(textv);
      var button = new android.widget.Button(ctx);
      button.setText('info');
            button.setTextColor(android.graphics.Color.BLUE)
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      clientMessage('§4СОЗДАТЕЛИ ЧИТА §l§aGameKingYT BIGKING LUA HACKER IVAN L')
      clientMessage('§4ПОДПИШИСЬ НА §l§aGameKingYT BIGKING LUA HACKER IVAN L')
      }
      }));
      menuLayout.addView(button);
      var button2 = new android.widget.Button(ctx);
      button2.setText('Flight');
      button2.setTextColor(android.graphics.Color.GREEN)
      button2.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
if(fl == 2){
fl = 1;
fly = false;
clientMessage('§4§lFlight §l§5Выкл')
}else{
fl = 2;
fly = true;
clientMessage('§4§lFlight §l§2Вкл')
}
      }
      }));
      menuLayout.addView(button2);
      
      var button3 = new android.widget.Button(ctx);
      button3.setText('Fullbright');
      button3.setTextColor(android.graphics.Color.RED)
      button3.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
Entity.addEffect(Player.getEntity(), MobEffect.nightVision, 999999, 100, false, false);
print('Fullbright')
clientMessage('§4§lFullbright §l§2Вкл')
      }
      }));
      menuLayout.addView(button3);

      menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
      menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
      menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
      }catch(error){
      print('An error occured: ' + error);
      }
      }}));
      }
      function exit(){
      var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctxe.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
      var xLayout = new android.widget.LinearLayout(ctxe);
      var xButton = new android.widget.Button(ctxe);
      xButton.setText('X');
      xButton.setTextColor(android.graphics.Color.WHITE);
      xButton.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      exitUI.dismiss();
      menu.dismiss();
      }
      }));
      xLayout.addView(xButton);
      exitUI = new android.widget.PopupWindow(xLayout, dip2px(40), dip2px(40));
      exitUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
      exitUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
      }catch(exception){
      print(exception);
      }
      }}));
      }

var hitbox = false;
var tpaura = false;
var visualroad = false;
var criticals = false;
var speed = false;
var tower = false;
var velocity = false;
var glide = false;
var taptp = false;
var tower = false;
var safewalk = false;
var jesus = false;
var clearchat = false;
var fakeop = false;
var highjump = false;
var info = false;
var iptracer = false;
var haste = false;
var fullbright = false;
var fov=(120);

print('Для взаимодействия с данной модификацией, после входа на сервер, введите в чат /list')
print('Для взаимодействия с данной модификацией, после входа на сервер, введите в чат /list')
print('Для взаимодействия с данной модификацией, после входа на сервер, введите в чат /list')
print('Для взаимодействия с данной модификацией, после входа на сервер, введите в чат /list')

function chatHook(text){

if(text == "/list"){
preventDefault();
clientMessage(" §l§2Hacklist§0(§l§5Hacklist§0)§l§2Hacklist")
clientMessage(" ");
clientMessage("§l§1/hitbox - Киллаура");
clientMessage("§l§2/akb - AntiKnockBack - Анти откидывание");
clientMessage("§l§3/speed - Спид хак");
clientMessage("§l§4/highjump - Мега прыжок")
clientMessage("§l§5/taptp - Телепортация тапом");
clientMessage("§l§6/vr - Визуальная дорога");
clientMessage("§l§7/glide - Скольжение");
clientMessage("§l§1/tower - Прыжок тапом");
clientMessage("§l§2/safewalk - Бег на шифте");
clientMessage("§l§3/jesus - Ходьба по воде");
clientMessage("§l§4/cc - Очистка чата");
clientMessage("§l§5/ophack - Фейковый ОП, для троллинга друзей :)");
clientMessage("§l§6/haste - Быстрое ломание блоков");
clientMessage("§l§7/fb - FullBright - Ночное зрение");
clientMessage("§l§8/info - Информация")
clientMessage("§l§2/crit - Критические удары")
clientMessage("§l§1/tpa - При тапе на игрока тпшится к нему")

}

if(text == "/hitbox"){
preventDefault();
if(hitbox == false){
hitbox = true;
clientMessage("§l§5(§5Hacklist§5) §l§2 Hitbox включен");
}else{
hitbox = false;
clientMessage("§l§5(§5Hacklist§5) §4§l Hitbox выключен");
}}

if(text == "/haste"){
preventDefault();
if(haste == false){
haste = true;
clientMessage("§l§5(§5Hacklist§5) §l§2 Haste включен");
}else{
haste = false;
clientMessage("§l§5(§5Hacklist§5) §4§l Haste выключен");
}}

if(text == "/fb"){
preventDefault();
if(fullbright == false){
fullbright = true;
clientMessage("§l§5(§5Hacklist§5) §l§2 FB включен");
}else{
fullbright = false;
clientMessage("§l§5(§5Hacklist§5) §l§4 FB выключен");
}}

if(text == "/info"){
preventDefault();
if(info == false){
info = true; 

clientMessage("§2(§2§linfo)§0Создатели чита - §2GameKingYT & §4BIGKING LUA HACKER & §3IVAN L");
clientMessage("§2(§2§lingo)§fYou§cTube §0Создателей -§2GameKingYT & §4BIGKING LUA HACKER & §3IVAN L")
}else{
info = false;

clientMessage("§2(§2§linfo)§0Создатели чита - §2GameKingYT & §4BIGKING LUA HACKER & §3IVAN L");
clientMessage("§2(§2§lingo)§fYou§cTube §0Создателей -§2GameKingYT & §4BIGKING LUA HACKER & §3IVAN L")
}}

if(text == "/highjump"){
preventDefault();
if(highjump == false){
highjump = true;
clientMessage("§l§5(§5Hacklist§5) §l§2 HighJump включен");
}else{
highjump = false;
clientMessage("§l§5(§5Hacklist§5) §4§l HighJump выключен");
}}

if(text == "/speed"){
preventDefault();
if(speed == false){
speed = true;
clientMessage("§l§5(§5Hacklist§5) §2§l Speed включен");
}else{
speed = false;
clientMessage("§l§5(§5Hacklist§5) §4§l Speed выключен");
}}

if(text == "/akb"){
preventDefault();
if(velocity == false){
velocity = true;
clientMessage("§l§5(§5Hacklist§5) §2§l AKB включен");
}else{
velocity = false;
clientMessage("§l§5(§5Hacklist§5) §4§l AKB выключен");
}}

if(text == "/vr"){
preventDefault();
if(visualroad == false){
visualroad = true;
clientMessage("§l§5(§5Hacklist§5) §2§l VR включён");
}else{
visualroad = false;
clientMessage("§l§5(§5Hacklist§5) §4§l VR выключен");
}}

if(text == "/glide"){
preventDefault();
if(glide == false){
glide = true;
clientMessage("§l§5(§5Hacklist§5) §l§2 Glide включен");
}else{
glide = false;
clientMessage("§l§5(§5Hacklist§5) §l§4 Glide выключен");
}}

if(text == "/taptp"){
preventDefault();
if(taptp == false){
taptp = true;
clientMessage("§l§5(§5Hacklist§5) §l§2 TapTp включен");
}else{
taptp = false;
clientMessage("§l§5(§5Hacklist§5) §l§4 TapTp выключен");
}}

if(text == "/tower"){
preventDefault();
if(tower == false){
tower = true;
clientMessage("§l§5(§5Hacklist§5) §l§2 Tower включен");
}else{
tower = false;
clientMessage("§l§5(§5Hacklist§5) §l§4 Tower выключен");
}}

if(text == "/safewalk"){
preventDefault();
if(safewalk == false){
safewalk = true;
clientMessage("§l§5(§5Hacklist§5) §l§2 Safewalk включен");
}else{
safewalk = false;
clientMessage("§l§5(§5Hacklist§5) §l§4 Safewalk выключен");
}}

if(text == "/tpa"){
preventDefault();
if(tpaura == false){
tpaura = true;

clientMessage("§l§5(§5Hacklist§5) §l§2 Tpaura включен");
}else{
jesus = false;

clientMessage("§l§5(§5Hacklist§5) §l§2 Tpaura не выключается");
}}

if(text == "/crit"){
preventDefault();
if(criticals == false){
criticals = true;

clientMessage("§l§5(§5Hacklist§5) §l§2 Criticals включен");
}else{
jesus = false;

clientMessage("§l§5(§5Hacklist§5) §l§2 Criticals не выключается");
}}

if(text == "/jesus"){
preventDefault();
if(jesus == false){
jesus = true;

clientMessage("§l§5(§5Hacklist§5) §l§2 Jesus включен");
}else{
jesus = false;

clientMessage("§l§5(§5Hacklist§5) §l§4 Jesus выключен");
}}

if(text == "/ophack"){
preventDefault();
if(fakeop == false){
fakeop = true;

clientMessage("§5Вам выданы права оператора!");
}else{
fakeop = false;

clientMessage("§5Вам выданы права оператора!");
}}

if(text == "//ipserv"){
preventDefault();
if(iptracer == false){
iptracer = true;
clientMessage("§l§5(§5Hacklist§5)§a Port: 19132 IP: " + Server.getAddress());
clientMessage("§l§5(§5Hacklist§5)§a Port: 19132 §8(§d§Обязательно§8)§d.");
}else{
iptracer = false;
clientMessage("§5§l(§5Hacklist§5)§a IP: " + Server.getAddress());
clientMessage("§5§l(§5Hacklist§5)§a Port: 19132 §8(§d§Обязательно§8)§d.");
}}

if(text == "/cc"){
preventDefault();
if(clearchat == false){
clearchat = true;

clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
}else{
jesus = false;

clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
clientMessage(" ");
}}

}

function modTick(){

if(fly == true){
setVelY(getPlayerEnt(),0.00);
}
var curspeed = Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2));

if(hitbox == true){
Entity.setCollisionSize(Player.getPointedEntity(), 27, 11);
}

if(hitbox == false){
Entity.setCollisionSize(Player.getPointedEntity(), 1, 2);
}

var px = getPlayerX();
var py = getPlayerY();
var pz = getPlayerZ();
ModPE.showTipMessage("\n\n\n" + "§5§6§lX: " + parseInt(px) + " §3§4§ly: " + parseInt(py) + " §2§5§lZ: " + parseInt(pz))

if(haste == true){
Entity.addEffect(getPlayerEnt(), 3, 999999*20, 100, true, false);
}

if(highjump == true){
Entity.addEffect(Player.getEntity(), MobEffect.jump, 999999, 3, false, false);
}

if(jesus == true){

Block.setShape(8, 0, 0, 0, 1, 0.4, 1);
Block.setShape(9, 0, 0, 0, 1, 0.4, 1);
Block.setShape(10, 0, 0, 0, 1, 0.4, 1);
Block.setShape(11, 0, 0, 0, 1, 0.4, 1);
Block.setShape(8, null, null, null, null, null, null);
Block.setShape(9, null, null, null, null, null, null);
Block.setShape(10, null, null, null, null, null, null);
Block.setShape(11, null, null, null, null, null, null);
Block.defineBlock(8, "Water", [["still_water", 0]], 8, true, 4);
Block.defineBlock(9, "Stationary Water", [["still_water", 0]], 9, true, 4);
Block.defineBlock(10, "Lava", [["still_lava", 0]], 10, true, 4);
Block.defineBlock(11, "Stationary Lava", [["still_lava", 0]], 11, true, 4);
}

if(visualroad == true){
      
setTile(getPlayerX(),getPlayerY()-2,getPlayerZ(),7)
} 


if(speed == true){
if(getTile(getPlayerX(), getPlayerY() - 3, getPlayerZ()) != 0){
if(curspeed > 0.15){
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*1.26);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*1.26);
}}}

if(glide == true){
setVelY(getPlayerEnt(), -0.001);
}

ModPE.setFov(fov);

if(safewalk == true){
Entity.setSneaking(getPlayerEnt(), true);
}

if (velocity == true)
{
this.tick = 0;

if (this.health > Entity.getHealth(getPlayerEnt()))
{
this.tick = 20;
Entity.setImmobile(getPlayerEnt(), true);
}
if (this.tick == 0)
{

Entity.setImmobile(getPlayerEnt(), false);

}

this.health = Entity.getHealth(getPlayerEnt());

if (this.tick != 0)
{

tick--;

}}

}

function procCmd(c){
}

function attackHook(att, vic){
if(criticals == true){
setVelY(getPlayerEnt(), 0.25);
}
if(tpaura == true){
setPosition(getPlayerEnt(), Entity.getX(vic), Entity.getY(vic) + 2, Entity.getZ(vic))
}
}

function useItem(x, y, z, itemId, blockId, side) 
{
if(taptp == true){
setPosition(getPlayerEnt(), Player.getPointedBlockX(), Player.getPointedBlockY() + 3.0, Player.getPointedBlockZ())
}
if(fullbright == true){

Entity.addEffect(getPlayerEnt(), 16, 999999*20, 100, true, false);
}
if(tower == true){
setVelY(getPlayerEnt(), 0.45);
}

}

function leaveGame() {
print('Спасибо за игру с данным читом!Создавай свой чит!.')
}
function D(text, showPrefix) {
	try {
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function () {
				var thetoast = android.widget.Toast.makeText(com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), "" + text, android.widget.Toast.LENGTH_LONG);
				var layout = new android.widget.LinearLayout(ctx);
				var msg = new android.widget.TextView(ctx);
				if(showPrefix == null) { 
text = "Blacklist: " + text;
				} else { 
text = showPrefix + ": " + text;
}
				msg.setText(text);
				msg.setGravity(android.view.Gravity.CENTER);
				msg.setTextSize(15);
				msg.setPadding(10, 10, 10, 10);
				msg.setTextColor(android.graphics.Color.WHITE);
				
				var btnpic = new android.graphics.drawable.GradientDrawable();
				btnpic.setColor(android.graphics.Color.BLACK);
				btnpic.setStroke(5, android.graphics.Color.GREEN);
				
				layout.addView(msg);
				layout.setBackground(btnpic);
				layout.getBackground().setAlpha(150);
				thetoast.setView(layout);
				thetoast.show();
			}
		}));
	} catch(e) {
		print(e);
	}
}