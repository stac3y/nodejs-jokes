# nodejs-jokes
NodeJS application for reading jokes in console. 
# Install
```bash
  npm install
``` 
# Build
```bash
  npm run build
``` 
# Run
```bash
  npm run start
```  
## Get joke 
```bash
  node . get-joke -c <category> -m <mode>
```
If category is undefined application will output random joke. If the category is not one of the possible categories ('Any', 'Programming', 'Misc', 'Dark', 'Pun', 'Spooky','Christmas') application will output:
```bash
  There is no such category. Possible categories: Any,Programming,Misc,Dark,Pun,Spooky,Christmas
```  
Mode can be async or promise, async is default. 
### Example  
```bash
  node . get-joke -c Programming -m promise  
  
  "Honey, go to the store and buy some eggs."
  "OK."
  "Oh and while you're there, get some milk."
  He never returned.
```  
## Test  
```bash
  node . test -m <mode> -n <number of iterations>
```
Mode can be async or sync, async is default. 
### Example in sync mode
```bash
  node . test -m sync -n 6
  
  Two SQL tables sit at the bar. A query approaches and asks "Can I join you?"

  Never date a baker. They're too kneady.
  
  "We messed up the keming again guys."
  
  My husband and I were happy for 20 years. And then we met.
  
  Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.
  
  Debugging: Removing the needles from the haystack.
  
  1052.3636999726295
```
### Example in async mode
```bash
  node . test -m async -n 6
  
  Four engineers get into a car. The car won't start.
  The Mechanical engineer says "It's a broken starter".
  The Electrical engineer says "Dead battery".
  The Chemical engineer says "Impurities in the gasoline".
  The IT engineer says "Hey guys, I have an idea: How about we all get out of the car and get back in".
  
  I didn't vaccinate my 10 kids and the one that survived is fine!
  
  A guy walks into a bar and asks for 1.4 root beers.
  The bartender says "I'll have to charge you extra, that's a root beer float".
  The guy says "In that case, better make it a double."
  
  Two reasons I don't give money to homeless people.
  1) They are going to spend it all on drugs and alcohol
  2) I am going to spend it all on drugs and alcohol.
  
  My ex had an accident. I told the paramedics the wrong blood type for her. She'll finally experience what rejection is really like.
  
  Two fish in a tank. One turns to the other and says, "Do you know how to drive this thing?"
  
  263.76870000362396
```
