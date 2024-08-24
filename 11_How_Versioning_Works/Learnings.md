# Version

4.18.2 

1st Part -> 4
2nd Part -> 18 
3rd Part -> 2  

3rd part(Last Part) - Miner Fixes (Optional)
Latest -> 4.18.3

2nd Part - Recommended Bug Fix (Security)
Latest -> 4.19.1

3rd Part -> Major Realese -> Major / Breaking Update
Latest -> 5.0.1

---

"^" it means  update your package.json file it not change version of that pacakage which have this sign its only change the verson after "^" that sign means if there is ^4.18.3 version and 5.0.0 come it not change but if 4.18.5 or 4.19.0 it change it 
also putting ^ sign means it automatically update vesion after 4 but not 4 and if we remove than we have to manually update the version

"~" it only change last one means 4.18.7 if 4.19.0 come it not change it oly change if 4.18.9 come

"express": "^4.18.3"

^4.18.3 | ^4.18.3 -> 5.0.0

^4.17.9
^4.18.1
^4.18.2
^4.18.3
..
^5.1.1  ❌

---

~4.18.1
~4.18.2
~4.18.3
~4.18.4

~4.19.1  ❌
