function test(amountInWei,times,waitMilisecs) { 
loadScript("bot/adressList.js");
loadScript("bot/randomNumber1.js");
loadScript("wallet/outkomma.txt");
loadScript("bot/randomNumber2.js");
loadScript("scripts/transferXeth.js");
loadScript("scripts/wait.js");
  for(var i = 0; i < adress.length; i = i +1)
    {
   for(var x = 0; x < times; x = x + 1)
    { 
  wait(waitMilisecs);
  transferXeth(eth.coinbase,adress[i],amountInWei); 
 
   };
   } 
};

