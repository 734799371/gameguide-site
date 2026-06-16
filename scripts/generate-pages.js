#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const SITE_JSON = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'site.json'), 'utf8'));
const PAGES_DIR = path.join(__dirname, '..', 'src', 'pages');
const DOMAIN = (SITE_JSON.url || 'https://gameguidepro.com').replace(/\/+$/, '');

// ─── Load extra game content from game-data.js ───
let EXTRA_CONTENT = {};
try {
  EXTRA_CONTENT = require('./game-data.js');
  console.log('  ✅ Loaded game-data.js');
} catch(e) {
  console.log('  ⚠️  game-data.js not found, using inline content only');
}

// ─── Inline content for games 1-3 ───
const GUIDE_CONTENT_BASE = {
// ═════════════════════════════════════════
//  ELDEN RING
// ═════════════════════════════════════════
"elden-ring": {
  about: `<p><strong>Elden Ring</strong>, developed by FromSoftware and published by Bandai Namco, is an action RPG directed by Hidetaka Miyazaki with worldbuilding contributions from George R.R. Martin. Released in February 2022, it quickly became one of the highest-rated games of all time, selling over 25 million copies worldwide.</p>
<p>Set in the Lands Between, a vast open-world realm shattered by the shattering of the Elden Ring, players take on the role of a Tarnished — an exile summoned back after the Ring's destruction. Your quest is to traverse the six major regions, defeat the demigod Shardbearers who hold pieces of the Ring, and ultimately decide the fate of the world by becoming the new Elden Lord.</p>
<p>The game features FromSoftware's signature challenging combat combined with a truly open-world design that encourages exploration. With mounted combat on Torrent, a deep crafting system, Spirit Ashes summons, and hundreds of unique weapons and spells, Elden Ring offers unparalleled freedom in how you approach every encounter.</p>`,
  walkthrough: `<h2>Prologue — The Stranded Graveyard</h2>
<p>Your journey begins in the Stranded Graveyard after the Grafted Scion tutorial fight. You can defeat the Scion for a Master Key equivalent, or flee — most players should flee on their first attempt. Once you emerge into Limgrave, the world opens up entirely.</p>
<h2>Limgrave &amp; The Early Game (Levels 1–25)</h2>
<p>After exiting the Stranded Graveyard, head northeast to the <strong>Church of Elleh</strong> where Merchant Kalé sells essential items including the Crafting Kit. Explore the <strong>Gatefront Ruins</strong> to find your first Map Fragment and Smithing Stones. The <strong>Stormfoot Catacombs</strong> introduce you to legacy dungeon crawling.</p>
<p><strong>Priority checklist:</strong> Get your Spirit Calling Bell from Renna at the Church of Elleh (visit at night after obtaining Torrent). Grab the Flail from the Gatefront Ruins wagons — a powerful early bleed weapon. Clear the coastal caves for Smithing Stones to upgrade your starting weapon to +3.</p>
<h2>Stormveil Castle (Levels 25–40)</h2>
<p>Your first major legacy dungeon. <strong>Margit, the Fell Omen</strong> guards the entrance — he is your first real skill check. Purchase Margit's Shackle from Patches in Murkwater Cave to pin him in place twice per encounter. Inside the castle, navigate the ramparts, defeat the Grafted Scion, and face <strong>Godrick the Grafted</strong> as the region's final boss.</p>
<h2>Liurnia of the Lakes (Levels 40–60)</h2>
<p>After Stormveil, you enter Liurnia, a vast watery region. The <strong>Raya Lucaria Academy</strong> is the main dungeon, ruled by <strong>Rennala, Queen of the Full Moon</strong>. Side content here includes the Carian Manor, the Three Sisters quest area for <strong>Ranni's</strong> influential questline, and numerous caves and evergaols.</p>
<h2>Caelid &amp; Radahn (Levels 50–70)</h2>
<p>The scarlet-rotted eastern region. <strong>Starscourge Radahn</strong> presides over the Festival at Redmane Castle — one of the game's most memorable encounters featuring multiple NPC summons. Caelid also houses the Sellia Crystal Tunnel and Dragonbarrow for high-level challenges.</p>
<h2>Altus Plateau &amp; Mt. Gelmir (Levels 60–80)</h2>
<p>The golden plateau leads to the Erdtree's base. Mt. Gelmir features the <strong>Volcano Manor</strong> with its controversial assassination questline under Tanith. The region connects to the capital and contains significant lore about the shattering war.</p>
<h2>Leyndell, Royal Capital (Levels 80–95)</h2>
<p>The game's largest legacy dungeon. Navigate the sewers, the Auriza Side Tomb, and face <strong>Morgott, the Omen King</strong>. The city is packed with lore, hidden paths, and key items including the Goldmask questline that affects your ending options.</p>
<h2>The Mountaintops of the Giants &amp; Farum Azula (Levels 95–120)</h2>
<p>The Fire Giant guards the path to the Forge of the Giants. After kindling the flame, <strong>Crumbling Farum Azula</strong> serves as the game's penultimate area — a ruined floating city where you face the Godskin Duo and <strong>Maliketh, the Black Blade</strong>.</p>
<h2>The Final Battle (Levels 100–150)</h2>
<p>Return to a changed Leyndell (now covered in ash) for the final confrontation against <strong>Radagon of the Golden Order</strong> and the <strong>Elden Beast</strong>. After victory, choose your ending based on which questlines you completed throughout your journey.</p>`,
  "boss-guide": `<p>Elden Ring features over 80 bosses, but a handful are truly defining encounters. This guide covers the most challenging and important boss fights with proven strategies.</p>
<h2>Margit, the Fell Omen</h2>
<h3>Recommended Level: 20–25 | Weapon: +4</h3>
<p>Margit is your first major skill check and gatekeeper to Stormveil Castle. His delayed attack patterns catch impatient players off guard.</p>
<ul>
<li>Purchase <strong>Margit's Shackle</strong> from Patches in Murkwater Cave — it pins Margit in place twice per phase</li>
<li>Circle to his left (your right) — his right-hand hammer swings have wider, harder-to-dodge arcs</li>
<li>In phase 2, he adds thrown daggers and a holy sword — punish only his recovery animations</li>
<li>Spirit Ashes (Wolves or Jellyfish) effectively distract him during dangerous combos</li>
</ul>
<h2>Godrick the Grafted</h2>
<h3>Recommended Level: 25–35 | Weapon: +5 to +8</h3>
<p>Lord of Stormveil Castle and the first Shardbearer. Godrick has two distinct phases with a dramatic transformation.</p>
<ul>
<li>Bleed builds (Flail, Reduvia, Blood Blade) are extremely effective due to his large health pool</li>
<li>When he summons the dragon head in phase 2, run underneath for free hits while he breathes fire forward</li>
<li>His axe-spin attack has long recovery — punish with 2–3 hits maximum</li>
<li>Summon Nepheli Loux for this fight; she tanks effectively and creates openings</li>
</ul>
<h2>Starscourge Radahn</h2>
<h3>Recommended Level: 50–60</h3>
<p>The Festival at Redmane Castle is one of Elden Ring's most spectacular encounters. Radahn is a massive, gravity-wielding warrior fought on an open battlefield.</p>
<ul>
<li>Speak to <strong>Alexander (Jar-Bairn)</strong> before entering the arena to unlock additional NPC summon signs</li>
<li>Use your horse Torrent for the first phase to dodge his gravity arrows and meteor attacks</li>
<li>Sprint perpendicular to his meteor dive — running away will not save you</li>
<li>His gravity pull attack requires sprinting, not walking — the vacuum range is deceptively large</li>
<li>Let NPC summons tank in phase 2 while you apply bleed or hit from behind</li>
</ul>
<h2>Morgott, the Omen King</h2>
<h3>Recommended Level: 60–70</h3>
<p>The true identity of Margit, Morgott is far more aggressive in Leyndell's throne room.</p>
<ul>
<li>Golden sword combo ends with a delayed thrust — dodge late, not early</li>
<li>Bleed and frostbite both proc efficiently against his large health pool</li>
<li>His holy rain attack gives you ~4 seconds to heal or buff freely</li>
</ul>
<h2>Maliketh, the Black Blade</h2>
<h3>Recommended Level: 80–90</h3>
<p>Guardian of Destined Death in Crumbling Farum Azula. One of the game's hardest bosses.</p>
<ul>
<li>Phase 1 (Beast Clergyman) is deceptively dangerous — his claw flurries chain into combos</li>
<li>Phase 2 Destined Death slash has a massive hitbox — dodge early and sideways, not backward</li>
<li>Blasphemous Blade's weapon art staggers him reliably — faith builds excel here</li>
<li>Consistent 1–2 hits between combos is better than dying for greedy 3–4 hit strings</li>
</ul>
<h2>Radagon / Elden Beast (Final Boss)</h2>
<h3>Recommended Level: 100–120</h3>
<p>Two back-to-back bosses with no rest. Radagon is melee-focused; the Elden Beast is a marathon.</p>
<ul>
<li>Against Radagon: stay close, dodge his hammer strikes, and punish recovery — don't run away</li>
<li>Against Elden Beast: this is an endurance fight. Bring your longest-lasting buffs and focus on consistent damage</li>
<li>Radagon's grab attack is a one-shot at lower levels — watch for the golden hand raise</li>
<li>The Elden Beast's golden ring attack requires running through the gaps, not away</li>
</ul>`,
  builds: `<p>Choosing the right build in Elden Ring dramatically affects your experience. Here are four proven builds that excel throughout the entire game and into New Game+.</p>
<h2>Strength Build — The Colossus</h2>
<p><strong>Starting Class:</strong> Vagabond or Hero</p>
<p>The pure Strength build focuses on massive weapons that stagger enemies and break poise in 1–2 hits.</p>
<ul>
<li><strong>Primary Stats:</strong> Vigor 60, Strength 80, Endurance 30</li>
<li><strong>Key Weapons:</strong> Giant-Crusher, Prelate's Inferno Crozier, Greatsword (Guts sword)</li>
<li><strong>Ash of War:</strong> Lion's Claw or Giant Hunt — both deal massive poise damage</li>
<li><strong>Talisman Setup:</strong> Shard of Alexander, Great-Jar's Arsenal, Claw Talisman, Erdtree's Favor</li>
<li><strong>Strategy:</strong> Jump attacks are your core mechanic — they deal bonus poise damage and can stun-lock most bosses</li>
</ul>
<h2>Dexterity Build — The Blade Dancer</h2>
<p><strong>Starting Class:</strong> Samurai or Warrior</p>
<p>Fast, precise attacks with excellent bleed synergy and minimal stamina consumption.</p>
<ul>
<li><strong>Primary Stats:</strong> Vigor 60, Dexterity 80, Arcane 20–30</li>
<li><strong>Key Weapons:</strong> Moonveil, Hand of Malenia, Rivers of Blood, Uchigatana</li>
<li><strong>Ash of War:</strong> Spinning Slash, Piercing Fang, or Waterfowl Dance</li>
<li><strong>Strategy:</strong> Stack bleed with Seppuku on off-hand and use quick combos to proc hemorrhage repeatedly</li>
</ul>
<h2>Intelligence (Mage) Build — The Astrologer's Path</h2>
<p><strong>Starting Class:</strong> Astrologer or Prisoner</p>
<p>Ranged spell casting with devastating sorceries and excellent crowd control.</p>
<ul>
<li><strong>Primary Stats:</strong> Vigor 40, Intelligence 80, Mind 30</li>
<li><strong>Key Weapons:</strong> Lusat's Staff, Carian Regal Scepter, Moonveil as backup melee</li>
<li><strong>Core Spells:</strong> Comet Azur (boss nuke), Rennala's Full Moon (opener), Adula's Moonblade (melee range)</li>
<li><strong>Talismans:</strong> Magic Scorpion Charm, Shard of Alexander, Graven-Mass Talisman, Cerulean Seed Talisman</li>
<li><strong>Strategy:</strong> Open with Full Moon to lower magic resistance, then spam Comet or Loretta's Mastery</li>
</ul>
<h2>Bleed Build — The Hemorrhage King</h2>
<p><strong>Starting Class:</strong> Samurai or Bandit</p>
<p>The highest raw DPS build in the game. Bleed procs deal percentage-based damage, making this effective against every boss.</p>
<ul>
<li><strong>Primary Stats:</strong> Vigor 50, Arcane 60, Dexterity 40</li>
<li><strong>Key Weapons:</strong> Rivers of Blood, Eleonora's Poleblade, Mohgwyn's Sacred Spear</li>
<li><strong>Ash of War:</strong> Seppuku on both weapons for double bleed buildup</li>
<li><strong>White Mask + Lord of Blood's Exultation combo:</strong> each bleed proc boosts your attack by 20%+</li>
<li><strong>Strategy:</strong> Proc bleed on yourself with Seppuku to trigger White Mask, then attack to chain-bleed enemies</li>
</ul>`,
  secrets: `<p>The Lands Between are filled with hidden areas, illusory walls, secret bosses, and obscure items. This guide reveals the most significant secrets you might miss on a first playthrough.</p>
<h2>Illusory Walls</h2>
<p>Over 30 illusory walls exist in the game — they look identical to normal walls but vanish when struck (or rolled through). The most important ones include:</p>
<ul>
<li><strong>Stormveil Castle:</strong> Hidden path near the Liftside Chamber grace leading to a Talisman Pouch</li>
<li><strong>Raya Lucaria:</strong> Three illusory walls in the Debate Parlour area hiding the Glintstone Key</li>
<li><strong>Volcano Manor:</strong> Secret passage behind the drawing room leading to Rykard's arena without joining the Manor</li>
<li><strong>Haligtree:</strong> Multiple illusory floors in the drainage area concealing valuable loot</li>
</ul>
<h2>Hidden Bosses</h2>
<p>Several powerful bosses are entirely optional and easy to miss:</p>
<ul>
<li><strong>Dragonlord Placidusax</strong> — Found in Crumbling Farum Azula by lying down in an empty arena beyond the Beside the Great Bridge grace. One of the game's hardest fights.</li>
<li><strong>Lichdragon Fortissax</strong> — Only accessible by completing Fia's questline in the Deeproot Depths. Drops the Death Lightning incantation.</li>
<li><strong>Astel, Naturalborn of the Void</strong> — Hidden behind a sealed door in the Consecrated Snowfield, accessible via Haligtree Medallion.</li>
<li><strong>Regal Ancestor Spirit</strong> — A stronger version of the Ancestor Spirit, found by lighting all 6 obelisks in Nokron's Hallowhorn Grounds.</li>
</ul>
<h2>Secret Areas</h2>
<ul>
<li><strong>Nokron, Eternal City</strong> — Only accessible after defeating Radahn. The meteor crash opens a crater in Limgrave leading underground to a vast city.</li>
<li><strong>Nokstella / Lake of Rot</strong> — Continue Ranni's questline past Nokron to reach this underground region with the Dark Moon Greatsword.</li>
<li><strong>Consecrated Snowfield</strong> — Requires both halves of the Haligtree Secret Medallion (found in Village of the Albinaurics and Castle Sol).</li>
<li><strong>Miquella's Haligtree</strong> — The game's hardest area, accessible from the Consecrated Snowfield's Ordina Liturgical Town puzzle.</li>
</ul>
<h2>Notable Hidden Items</h2>
<ul>
<li><strong>Blasphemous Blade</strong> — Rykard's Remembrance weapon; arguably the strongest PvE weapon in the game</li>
<li><strong>Dark Moon Greatsword</strong> — Reward for completing Ranni's full questline</li>
<li><strong>Comet Azur</strong> — Hidden behind Hermit Village in Mt. Gelmir; the ultimate boss-destroying spell</li>
<li><strong>Golden Seed locations</strong> — 14 total; several are hidden behind minor Erdtree guardian fights</li>
</ul>`,
  "beginner-tips": `<p>Starting Elden Ring can be overwhelming. The game throws you into a massive world with minimal guidance. Here are the essential tips that will save you hours of frustration and help you enjoy the journey.</p>
<h2>Choose the Right Starting Class</h2>
<p>Your starting class only determines your initial stats and gear — you can eventually become any build. However, some classes start stronger:</p>
<ul>
<li><strong>Vagabond</strong> — Best for beginners. High Vigor, good armor, and a 100% physical block shield from the start</li>
<li><strong>Samurai</strong> — Starts with the Uchigatana (excellent bleed weapon) and Longbow. Great for learning combat timing</li>
<li><strong>Astrologer</strong> — Best for ranged magic gameplay. Early sorceries make many encounters trivial</li>
<li><strong>Avoid Wretch</strong> — Starts at level 1 with no gear. Only for experienced players who want the challenge</li>
</ul>
<h2>First 2 Hours Priority Checklist</h2>
<ol>
<li>Exit the Stranded Graveyard via the elevator (skip the Grafted Scion if needed)</li>
<li>Visit the <strong>Church of Elleh</strong> (northeast Limgrave) — rest at the grace, buy the Crafting Kit from Kalé</li>
<li>Find the <strong>Gatefront Ruins Map Fragment</strong> — opens the full Limgrave map</li>
<li>Get your <strong>Spirit Calling Bell</strong> from Renna at the Church of Elleh (visit at night after getting Torrent)</li>
<li>Grab the <strong>Flail</strong> from the Gatefront Ruins wagons — a powerful early bleed weapon</li>
<li>Clear <strong>Stormfoot Catacombs</strong> for the Roar Medallion and basic dungeon practice</li>
<li>Explore the coastal caves for Smithing Stones to upgrade weapons to +3</li>
</ol>
<h2>Core Mechanics You Must Understand</h2>
<ul>
<li><strong>Vigor is king</strong> — Level Vigor to 30 ASAP, then 40, then 60. No other stat keeps you alive as effectively</li>
<li><strong>Weapon upgrades > stat levels</strong> — A +5 weapon on a level 20 character outdamages a +0 weapon on a level 50</li>
<li><strong>Torrent is your best tool</strong> — Use your horse for exploring, fleeing, and mounted combat. The double-jump avoids many attacks</li>
<li><strong>Spirit Ashes are not "easy mode"</strong> — They're a core mechanic. Use them freely; the game is balanced around them</li>
<li><strong>Guard Counter</strong> — Block an attack, then press L2 (or R2 on some setups) for a powerful counter that breaks poise quickly</li>
</ul>
<h2>Common Beginner Mistakes</h2>
<ul>
<li>Don't fight everything — running past enemies is a valid and intended strategy</li>
<li>Don't hoard Runes — spend them before boss fights. You <em>will</em> die and lose them</li>
<li>Don't ignore crafting — Throwing Knives, Fire Pots, and Freezing Grease are cheap and powerful</li>
<li>Don't skip NPC questlines — talk to every NPC until they repeat dialogue, then check back after major events</li>
<li>Don't neglect the map — golden markers indicate Map Fragments; find them immediately in each new region</li>
</ul>`
},
// ═════════════════════════════════════════
//  ZELDA: TEARS OF THE KINGDOM
// ═════════════════════════════════════════
"zelda-totk": {
  about: `<p><strong>The Legend of Zelda: Tears of the Kingdom</strong> is the 2023 sequel to Breath of the Wild, developed by Nintendo EPD exclusively for Nintendo Switch. It expands upon its predecessor's open-world formula with three layered explorable spaces — the Sky Islands, the Surface, and the Depths — creating one of the most ambitious games in the franchise's history.</p>
<p>Link returns to a transformed Hyrule after Ganondorf's awakening beneath Hyrule Castle. Armed with new <strong>Ultrahand</strong>, <strong>Fuse</strong>, <strong>Ascend</strong>, and <strong>Recall</strong> abilities, players can approach every challenge with unprecedented creative freedom. The game's physics-driven sandbox encourages experimentation, where solutions are limited only by your imagination.</p>
<p>Tears of the Kingdom sold over 10 million copies in its first three days and won numerous Game of the Year awards. Its building mechanics and emergent gameplay have inspired a global community of creative builders sharing their inventions online.</p>`,
  walkthrough: `<h2>Great Sky Island (Tutorial)</h2>
<p>Learn all four abilities here: Ultrahand on the Ukouh Shrine, Fuse at the In-isa Shrine, Ascend at the Gutanbac Shrine, and Recall at the Nachoyah Shrine. Don't rush — collect every item you find, as materials are essential throughout the game. Defeat the Construct at the Temple of Time to unlock your full potential.</p>
<h2>Lookout Landing &amp; Regional Phenomena</h2>
<p>After landing in Hyrule, head to Lookout Landing — your new central hub. Speak to Purah to unlock the Paraglider and the "Regional Phenomena" quest. The four main regions each have a unique crisis caused by Ganondorf's Gloom:</p>
<ul>
<li><strong>Wind Temple (Hebra)</strong> — Help Tulin solve the blizzard crisis. Requires ascending through the Rising Island Chain</li>
<li><strong>Fire Temple (Eldin)</strong> — Aid Yunobo against Moragia. Navigate Death Mountain's lava flows with minecarts</li>
<li><strong>Water Temple (Lanayru)</strong> — Assist Sidon with the sludge crisis. Features unique water-based puzzles</li>
<li><strong>Lightning Temple (Gerudo)</strong> — Help Riju fight Gibdo hordes. Involves the largest regional dungeon</li>
</ul>
<h2>Hyrule Castle &amp; The Search for Zelda</h2>
<p>Investigate Zelda sightings across Hyrule — most are phantom illusions. The real Zelda is trapped in the past, revealed through Dragon's Tears found at geoglyph locations across the map. There are <strong>12 Tears</strong> to find, each revealing a piece of the backstory.</p>
<h2>The Depths</h2>
<p>A vast underground mirror of Hyrule, shrouded in darkness and filled with Gloom hazards. Light <strong>Brightbloom Seeds</strong> to reveal the terrain. Coliseums contain challenging enemy gauntlets, and Misko's Treasures offer unique armor sets. The Master Sword is found here after sufficient stamina/health investment.</p>
<h2>Final Boss — Demon King Ganondorf</h2>
<p>Deep beneath Hyrule Castle in the Imprisoning Chamber. The fight has three phases: a human duel, a Gloom-powered Ganondorf, and the massive Demon Dragon. Bring Gloom-healing meals (Sundelion recipes) and multiple weapons — the final phase is an extended aerial sequence.</p>`,
  shrines: `<p>Tears of the Kingdom features <strong>152 Shrines</strong> — compact puzzle rooms that test your mastery of the game's abilities. Each Shrine rewards a Light of Blessing; four Lights upgrade either a Heart Container or a Stamina Vessel.</p>
<h2>Shrine Types</h2>
<ul>
<li><strong>Prologue Shrines</strong> (4) — Tutorial shrines on Great Sky Island, each teaching a core ability</li>
<li><strong>Ability Shrines</strong> — Focus on a single mechanic (Ultrahand construction, Fuse combinations, Ascend routing, Recall timing)</li>
<li><strong>Combat Shrines</strong> — Feature a specific enemy encounter using provided equipment</li>
<li><strong>Proving Grounds</strong> — Challenge shrines that strip your gear and test pure skill</li>
<li><strong>Rauru's Blessing</strong> — Reward-only shrines where the challenge was reaching the shrine itself</li>
</ul>
<h2>Solving Strategies</h2>
<p>Most ability shrines follow a three-room structure with escalating complexity. Key approaches:</p>
<ul>
<li>If something moves, try Ultrahand on it. If it doesn't move, try Ascend through it</li>
<li>Fuse platform wheels to create rotating bridges and conveyor systems</li>
<li>Recall is the answer whenever something is moving — ride objects back to their origin</li>
<li>Combat shrines provide specific weapons — use them as intended rather than trying to brute-force</li>
</ul>
<h2>Notable Challenging Shrines</h2>
<ul>
<li><strong>Mayachin Shrine</strong> — Complex Ultrahand timing puzzle with moving platforms</li>
<li><strong>Ishodag Shrine</strong> — Wind-based construction challenges requiring creative vehicle building</li>
<li><strong>Kyokugon Shrine</strong> — Spherical ball maze that tests precision Ultrahand control</li>
<li><strong>Jochi-ihiga Shrine</strong> — Proving Grounds combat with Construct Captains</li>
</ul>`,
  "side-quests": `<p>Hyrule is packed with side adventures, shrine quests, and character-driven storylines. Here are the most rewarding ones you shouldn't miss.</p>
<h2>The Yiga Clan Questline</h2>
<p>Investigate Yiga Clan hideouts across Hyrule. Start by finding the Yiga Clan Maritta Branch in the Akkala region. Progress through three major hideouts to earn the Yiga Armor set and the <strong>Earthquake ability</strong> — a powerful area-of-effect attack.</p>
<h2>The Lucky Clover Gazette</h2>
<p>Visit the former Rito Stable (now Lucky Clover Gazette) to start the "Potential Princess Sightings" quest. Penn gives you 12 photo opportunities across Hyrule's stables, each revealing a piece of Zelda's story. Completing all rewards the <strong>Froggy Armor set</strong>.</p>
<h2>Tarrey Town Expansion</h2>
<p>Help Hudson and Rhondson build Tarrey Town into a thriving community. The questline involves finding NPCs with specific name endings across Hyrule. The expanded town offers unique shops, a wedding event, and the famous Hudson Construction building game.</p>
<h2>The Hateno Village School</h2>
<p>Help Symin teach the children of Hateno by providing specific materials and completing mini-lessons. This wholesome questline showcases the game's lighter side and rewards unique furniture for your home.</p>
<h2>Treasure Hunts &amp; Misko's Caves</h2>
<p>Misko's journals in various caves hint at legendary armor sets. Each set requires exploring a specific cave and solving an environmental puzzle. Notable sets include the Awakening Armor, Tingle's Armor, and the Fierce Deity set.</p>`,
  abilities: `<p>Your four new abilities fundamentally change how you interact with Hyrule. Mastering each one opens up creative solutions that go far beyond intended puzzle solutions.</p>
<h2>Ultrahand</h2>
<p>Grab and move objects, then stick them together. This is your building tool — the foundation of Tears of the Kingdom's creative sandbox.</p>
<ul>
<li>Build vehicles: Attach wheels, steering sticks, and fans to create cars, boats, and flying machines</li>
<li>Bridge gaps: Connect planks and platforms to cross chasms</li>
<li>Create weapons: Fuse explosives, elemental items, and monster parts to construct devastating traps</li>
<li>Pro tip: You can detach accidentally connected objects by gripping and wiggling — objects disconnect before they break</li>
</ul>
<h2>Fuse</h2>
<p>Combine materials with weapons, shields, and arrows for enhanced effects. Fuse doesn't consume the base weapon durability faster, making it always worth doing.</p>
<ul>
<li><strong>Best weapon Fuses:</strong> Ruby (fire damage), Sapphire (ice), Topaz (electric), Monster Extract (damage boost)</li>
<li><strong>Best shield Fuses:</strong> Rocket (emergency escape), Minecart (shield surfing), Frost emitter (freeze attackers)</li>
<li><strong>Best arrow Fuses:</strong> Keese Eyeball (homing arrows), Bomb Flower (explosive), Muddle Bud (confuse enemies)</li>
</ul>
<h2>Ascend</h2>
<p>Phase through ceilings and emerge above. Range is limited but incredibly versatile for exploration.</p>
<ul>
<li>Escape caves and wells without backtracking</li>
<li>Reach elevated areas without climbing — saves stamina and time</li>
<li>Bypass entire puzzle sections by ascending through floors</li>
<li>Works through thin rock, wood, and metal surfaces — but not through thick overhangs or barriers</li>
</ul>
<h2>Recall</h2>
<p>Rewind an object's movement through time. Essential for puzzles and surprisingly powerful in combat.</p>
<ul>
<li>Ride falling platforms back up to reach sky areas</li>
<li>Return thrown enemy projectiles back at them</li>
<li>Reverse moving platforms, rolling boulders, and falling debris</li>
<li>Pro tip: Recall works on anything that has recently moved, including enemy vehicles and thrown weapons</li>
</ul>`,
  "beginner-tips": `<p>Whether you're new to the series or a Breath of the Wild veteran, Tears of the Kingdom introduces enough new mechanics that a solid understanding of the basics will save you significant time.</p>
<h2>Early Priority Checklist</h2>
<ol>
<li>Complete all four Great Sky Island shrines before descending — they teach essential mechanics</li>
<li>Head to Lookout Landing immediately and speak to Purah for the Paraglider</li>
<li>Unlock all 15 Skyview Towers as you explore — they reveal map regions</li>
<li>Cook meals with Sundelions to cure Gloom damage — you'll need these constantly</li>
<li>Don't skip combat — fighting enemies is the primary source of weapons and materials</li>
</ol>
<h2>Combat Fundamentals</h2>
<ul>
<li><strong>Flurry Rush</strong> — Dodge at the last moment (backflip or side-hop) to slow time and unleash rapid attacks</li>
<li><strong>Perfect Guard</strong> — Shield parry at the right time to deflect attacks and create openings</li>
<li><strong>Weapon durability</strong> is real — always carry 8–10 weapons. Fuse everything to maximize their lifespan</li>
<li><strong>Jump attacks</strong> deal extra damage and can start combo chains</li>
<li><strong>Elemental weakness</strong> — Ice + Fire = instant kill on many enemies. Electric + Water = area stun</li>
</ul>
<h2>Resource Management</h2>
<ul>
<li>Collect everything — even seemingly useless items become valuable with Fuse</li>
<li>Bomb Flowers are precious — save them for tough encounters, don't waste on regular enemies</li>
<li>Always carry: 5+ healing meals, 3+ Gloom-curing meals, 2+ stamina-restoring meals</li>
<li>Auto-build is unlocked at the Hateno Village tech lab — save your favorite constructions for quick rebuilding</li>
</ul>
<h2>Exploration Tips</h2>
<ul>
<li>Stamina is more valuable than hearts early on — upgrade Stamina Vessels first for better climbing and gliding</li>
<li>The Depths mirror the Surface — Surface landmarks correspond to Depths points of interest</li>
<li>Always check beneath bridges, inside wells, and behind waterfalls for hidden caves</li>
<li>Chasms (Depths entrances) often have Yiga Clan ambushes — be prepared when entering</li>
</ul>`
},
// ═════════════════════════════════════════
//  BALDUR'S GATE 3
// ═════════════════════════════════════════
"baldurs-gate-3": {
  about: `<p><strong>Baldur's Gate 3</strong>, developed by Larian Studios, is a critically acclaimed RPG based on Dungeons &amp; Dragons 5th Edition. Released in August 2023 after years of early access, it won Game of the Year at The Game Awards and has been praised as one of the greatest RPGs ever made.</p>
<p>You play as a character infected with an Illithid tadpole — a mind flayer parasite that should have transformed you within days, but instead grants you strange powers. Along with a party of similarly infected companions, you must uncover the conspiracy behind the tadpoles while deciding whether to embrace or resist your growing Illithid abilities.</p>
<p>The game features turn-based tactical combat, deep dialogue trees with real consequences, extensive character customization, and a reactive world where your choices genuinely reshape the story across three massive acts.</p>`,
  walkthrough: `<h2>Act 1 — The Wilderness (Levels 1–4)</h2>
<p>You awaken on a Nautiloid ship, crash-landing outside the Emerald Grove. This act establishes your party, introduces the tadpole threat, and presents your first major moral choices.</p>
<ul>
<li><strong>Emerald Grove</strong> — Resolve the conflict between the druids and the tiefling refugees. Halsin and Kagha's power struggle has multiple outcomes</li>
<li><strong>Goblin Camp</strong> — Three goblin leaders (Priestess Gut, Dror Ragzlin, Minthara) control the area. You can fight them, manipulate them, or side with the Absolute</li>
<li><strong>Underdark</strong> — Accessible through the Goblin Camp or the Whispering Depths. Houses the Myconid Colony, a potential ally against the Absolute</li>
<li><strong>Mountain Pass / Creche</strong> — The Githyanki Creche offers a potential cure through the Zaith'isk device — but at a terrible cost</li>
</ul>
<h2>Act 2 — Shadow-Cursed Lands (Levels 4–6)</h2>
<p>A region consumed by Shar's darkness. Last Light Inn serves as your base of resistance against Ketheric Thorm and the Absolute's forces.</p>
<ul>
<li>Isobel's protection is the only thing keeping the inn safe — her fate affects the entire act</li>
<li>The Gauntlet of Shar is Shadowheart's personal questline and contains powerful loot</li>
<li>Moonrise Towers is the Absolute's stronghold — infiltrate or assault, each with different outcomes</li>
<li>Nightsong's fate is the act's pivotal choice, affecting Ketheric's vulnerability and your party dynamics</li>
</ul>
<h2>Act 3 — Baldur's Gate (Levels 6–12)</h2>
<p>The city of Baldur's Gate is massive, with multiple districts, hundreds of NPCs, and dozens of quests. The final confrontation with the Elder Brain approaches.</p>
<ul>
<li><strong>Lower City</strong> — Crime syndicates, the Guild, and political intrigue</li>
<li><strong>Upper City</strong> — The Watch, Gortash's coronation, and the Steel Watch foundry</li>
<li><strong>Rivington</strong> — Refugee crisis and the Open Hand Temple murders</li>
<li><strong>Final Battle</strong> — The assault on the Brain depends on every alliance you've built across all three acts</li>
</ul>`,
  "class-builds": `<p>Your class choice determines your combat role, dialogue options, and overall playstyle. Here are the most effective builds for each class as of the current patch.</p>
<h2>Fighter — Battle Master</h2>
<p>The most consistent damage dealer with unparalleled action economy.</p>
<ul>
<li><strong>Key Maneuvers:</strong> Precision Attack, Trip Attack, Riposte</li>
<li><strong>Stat Priority:</strong> Strength 20, Constitution 16</li>
<li><strong>Best Weapons:</strong> Greatsword + Great Weapon Fighting style</li>
<li><strong>Action Surge</strong> gives you a full extra turn — use it to nova down priority targets</li>
</ul>
<h2>Rogue — Thief / Assassin</h2>
<p>Maximum sneak attack damage with bonus action efficiency.</p>
<ul>
<li>Thief subclass gives an extra Bonus Action — crucial for dual-wielding and hiding</li>
<li>Assassin subclass grants automatic critical hits on surprised enemies</li>
<li><strong>Stat Priority:</strong> Dexterity 20, Constitution 14</li>
<li>Sneak Attack + Haste = devastating sustained damage</li>
</ul>
<h2>Wizard — Evocation or Necromancy</h2>
<p>Area control and burst damage through spell mastery.</p>
<ul>
<li>Evocation: Sculpt Spells lets you fireball your own party without friendly fire</li>
<li>Necromancy: Create Undead army provides persistent battlefield control</li>
<li>Must-have spells: Fireball, Haste, Counterspell, Hold Person</li>
<li><strong>Stat Priority:</strong> Intelligence 20, Constitution 14</li>
</ul>
<h2>Sorcerer — Draconic Bloodline (Fire)</h2>
<p>The highest single-target burst damage in the game.</p>
<ul>
<li>Twinned Haste on two martial allies is the strongest turn 1 play</li>
<li>Quickened Spell turns bonus actions into full spells</li>
<li>Fire Sorcerer + Hat of Fire Acuity = near-infinite spell slots through Sorcery Point conversion</li>
</ul>
<h2>Cleric — Light or Life Domain</h2>
<p>Best support and healer in the game with strong offensive options.</p>
<ul>
<li>Light Domain: Fireball + Warding Flare makes you both offensive and defensive</li>
<li>Life Domain: Disciple of Life + Mass Cure Wounds = full party heal every turn</li>
<li><strong>Spirit Guardians</strong> is arguably the best concentration spell in the game</li>
</ul>
<h2>Barbarian — Berserker</h2>
<p>Aggression incarnate with the best frontline presence.</p>
<ul>
<li>Frenzy gives an extra attack as a bonus action — but causes exhaustion</li>
<li>Throw Barbarian build: invest in Strength and use Returning Pike for infinite ranged attacks</li>
<li>Wild Magic adds chaos but can be extremely powerful with luck</li>
</ul>`,
  romance: `<p>Baldur's Gate 3 features some of the most developed romance systems in RPG history. Each romanceable companion has a full arc spanning all three acts.</p>
<h2>Shadowheart</h2>
<p>A devoted cleric of Shar with a mysterious past. Her romance is deeply tied to her faith crisis.</p>
<ul>
<li><strong>Approach:</strong> Respect her boundaries, don't push for intimacy too early. Support her Shar devotion initially</li>
<li><strong>Key moments:</strong> The Shar temple in Act 2 is her critical decision point — your support here defines the relationship</li>
<li><strong>Night 1 scene:</strong> The swimming scene in Act 1 is the romantic trigger</li>
<li>Act 3: Her past revelation changes everything about her character</li>
</ul>
<h2>Astarion</h2>
<p>A charming vampire spawn hiding centuries of trauma under wit and flirtation.</p>
<ul>
<li><strong>Approach:</strong> Match his energy with playful banter. Don't judge his vampiric nature</li>
<li><strong>Key moment:</strong> The bite scene in camp — allowing it deepens trust</li>
<li>Act 2: Cazador's palace confronts his past directly</li>
<li>His Ascension vs. Spawn choice is the relationship's defining moment</li>
</ul>
<h2>Wyll</h2>
<p>The Blade of Frontiers — a warlock bound to Mizora with a hero's heart.</p>
<ul>
<li><strong>Approach:</strong> Appreciate his heroic ideals and support his desire to do good</li>
<li>His pact with Mizora creates ongoing tension throughout the story</li>
<li>Act 2: The transformation scene requires compassion to maintain the romance</li>
</ul>
<h2>Karlach</h2>
<p>A tiefling barbarian with a heart of gold and an infernal engine for a heart.</p>
<ul>
<li><strong>Approach:</strong> Be genuine and kind — she values honesty above all</li>
<li>Her infernal engine creates a physical barrier to intimacy that must be resolved</li>
<li>Act 3: Dammon's upgrades are essential for the romance to progress fully</li>
<li>Her ending is one of the most emotional in the game</li>
</ul>
<h2>General Romance Tips</h2>
<ul>
<li>Long rest frequently — companion dialogue and romance scenes trigger at camp</li>
<li>Approval matters — make choices your romantic interest approves of</li>
<li>You can only commit to one character in Act 2 — choosing ends other romances</li>
<li>Some romances have exclusive endings that affect the game's conclusion</li>
</ul>`,
  companions: `<p>Your party of companions defines your Baldur's Gate 3 experience. Each has a rich backstory, personal quest, and unique perspective on the world.</p>
<h2>Shadowheart — Cleric of Shar</h2>
<p>Found on the Nautiloid, Shadowheart is the sole survivor of a Sharran mission to recover a mysterious artifact. Her memory is fragmented, and her devotion to Shar conflicts with her emerging compassion.</p>
<ul>
<li><strong>Recruitment:</strong> Automatic on the Nautiloid (or found on the beach)</li>
<li><strong>Personal Quest:</strong> Involves uncovering her true past and the Sharran conspiracy</li>
<li><strong>Key Choice:</strong> Whether she remains faithful to Shar or embraces her forgotten Selûnite heritage</li>
<li><strong>Build Role:</strong> Support healer and tank; Light Domain makes her surprisingly offensive</li>
</ul>
<h2>Astarion — Vampire Spawn Rogue</h2>
<p>A flamboyant high-elf rogue who's been Cazador's spawn for centuries. He's been forced to lure victims to his master, and the tadpole frees him from compulsion.</p>
<ul>
<li><strong>Recruitment:</strong> Found near the Nautiloid crash site, pretending to be in danger</li>
<li><strong>Personal Quest:</strong> Confronting Cazador and deciding whether to remain a spawn or ascend</li>
<li><strong>Key Choice:</strong> Ascension gives power but costs his humanity; staying a spawn preserves his growth</li>
</ul>
<h2>Lae'zel — Githyanki Warrior</h2>
<p>A fierce Githyanki fighter devoted to Vlaakith and the crusade against the Illithids. Her worldview is challenged as she learns the truth about her queen.</p>
<ul>
<li><strong>Recruitment:</strong> Found in a cage near the crash site, surrounded by tieflings</li>
<li><strong>Personal Quest:</strong> The Orpheus revelation and Vlaakith's betrayal</li>
<li>Her loyalty shift from Vlaakith to Orpheus is one of the game's best arcs</li>
</ul>
<h2>Gale — Human Wizard</h2>
<p>A charismatic wizard from Waterdeep with a magical orb in his chest that threatens to detonate. His ambition and Mystra's expectations drive his story.</p>
<ul>
<li><strong>Recruitment:</strong> Found at the Roadside Cliffs, signaling for help</li>
<li><strong>Personal Quest:</strong> The orb's growing power and his relationship with Mystra</li>
<li><strong>Key Choice:</strong> Whether to embrace godhood or surrender the crown to Mystra</li>
</ul>
<h2>Wyll — Warlock of Mizora</h2>
<p>The Blade of Frontiers, a folk hero who sold his soul to a cambion to save Baldur's Gate. His contract limits his freedom but doesn't dim his heroism.</p>
<ul>
<li><strong>Recruitment:</strong> Found at the Emerald Grove entrance</li>
<li><strong>Personal Quest:</strong> Breaking or rewriting his pact with Mizora</li>
</ul>
<h2>Karlach — Tiefling Barbarian</h2>
<p>A veteran of the Blood War with an infernal engine replacing her heart. She escaped Zariel's service and seeks a way to cool her burning soul.</p>
<ul>
<li><strong>Recruitment:</strong> Found in the Risen Road area after investigating the paladins</li>
<li><strong>Personal Quest:</strong> Finding Dammon to repair her engine, and ultimately facing her mortality</li>
</ul>`,
  "beginner-tips": `<p>Baldur's Gate 3 can be daunting for newcomers to D&amp;D or CRPGs. These tips will help you avoid common pitfalls and enjoy the experience from the start.</p>
<h2>Understanding D&amp;D Mechanics</h2>
<ul>
<li><strong>Rolling dice</strong> — Every action involves a d20 roll + modifiers. High stats = better chances. <strong>Advantage</strong> (roll twice, take higher) is incredibly powerful</li>
<li><strong>Armor Class (AC)</strong> — The number enemies need to roll to hit you. Higher = harder to hit</li>
<li><strong>Saving Throws</strong> — When you resist effects, you make a saving throw. Your proficiency bonuses scale with level</li>
<li><strong>Concentration</strong> — Many spells require concentration. You can only have ONE concentration spell active. Taking damage forces a concentration check</li>
</ul>
<h2>Party Composition Tips</h2>
<ul>
<li>Ideal party: 1 tank (Fighter/Paladin), 1 support (Cleric/Bard), 1 damage dealer (Sorcerer/Wizard/Rogue), 1 flexible</li>
<li>Don't ignore utility — a Rogue for lockpicking and a Cleric for healing are almost mandatory</li>
<li>Dialogue matters — having a high-Charisma character as your "face" opens more options</li>
</ul>
<h2>Combat Essentials</h2>
<ul>
<li><strong>High ground advantage</strong> — Elevation gives +2 to attack rolls and makes you harder to hit</li>
<li><strong>Action economy</strong> — Action + Bonus Action + Movement each turn. Using all three efficiently wins fights</li>
<li><strong>Surprise rounds</strong> — Attacking from stealth gives a free round before initiative. Massive advantage</li>
<li><strong>Shove</strong> — Pushing enemies off cliffs is a legitimate strategy and instant kills many foes</li>
<li><strong>Barrels</strong> — Explosive barrels are everywhere. Collect them, place them, and detonate for massive damage</li>
</ul>
<h2>Common Mistakes</h2>
<ul>
<li>Don't skip Long Rests — they trigger companion dialogue, restore spells, and advance stories</li>
<li>Don't ignore side quests — they provide XP and items essential for later acts</li>
<li>Don't hoard spell slots — use them freely; they reset on rest</li>
<li>Don't be afraid to flee — running from a losing fight and returning prepared is smart, not cowardly</li>
<li>Save often, and use separate save slots for major decisions</li>
</ul>`
}
};

// ─── Merge extra content from game-data.js ───
const GUIDE_CONTENT = Object.assign({}, GUIDE_CONTENT_BASE, EXTRA_CONTENT);

console.log('Total games in GUIDE_CONTENT:', Object.keys(GUIDE_CONTENT).length);

// ─── Helpers ───
function esc(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function head(title, desc, keywords, canonical, ogImage, ldJson) {
  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <meta name="keywords" content="${esc(keywords)}">
  <meta name="author" content="${SITE_JSON.author || 'GameGuidePro Team'}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonical}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="${SITE_JSON.siteName || 'GameGuidePro'}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:locale" content="${SITE_JSON.locale || 'en_US'}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(desc)}">
  <meta name="twitter:image" content="${ogImage}">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="stylesheet" href="/css/style.css">
  <script type="application/ld+json">${JSON.stringify(ldJson)}</script>
</head>`;
}

const HEADER = `<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header class="site-header" role="banner">
    <nav class="nav-container" aria-label="Main navigation">
      <a href="/" class="logo" aria-label="${SITE_JSON.siteName || 'GameGuidePro'} Home"><span class="logo-icon">🎮</span><span class="logo-text">${SITE_JSON.siteName || 'GameGuidePro'}</span></a>
      <div class="nav-search" role="search">
        <form action="/search" method="get" aria-label="Search guides">
          <input type="search" name="q" placeholder="Search games &amp; guides&hellip;" aria-label="Search" class="search-input" id="nav-search-input">
          <button type="submit" class="search-btn" aria-label="Search">&#128269;</button>
        </form>
      </div>
      <button class="hamburger" id="mobile-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="mobile-menu" role="menubar">
        <li role="none"><a href="/" role="menuitem">Home</a></li>
        <li role="none"><a href="/pages/about.html" role="menuitem">About</a></li>
        <li role="none"><a href="/pages/sitemap.html" role="menuitem">All Games</a></li>
        <li role="none"><button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark/light theme">&#127769;&#65039;</button></li>
      </ul>
    </nav>
  </header>
  <div class="ad-slot ad-leaderboard" aria-label="Advertisement">
    <div class="ad-placeholder" data-ad-client="${SITE_JSON.adClient || 'ca-pub-XXXXXXXXXXXXXXXX'}" data-ad-slot="leaderboard-0001" data-ad-format="horizontal" data-full-width-responsive="true">
      <span class="ad-label">Advertisement</span><div class="ad-space">728 &times; 90</div>
    </div>
  </div>`;

function footer() {
  return `  <footer class="site-footer" role="contentinfo">
    <div class="footer-grid">
      <div class="footer-col"><h3>&#127918; ${esc(SITE_JSON.siteName || 'GameGuidePro')}</h3><p>Your ultimate game walkthrough &amp; strategy hub. Free guides for every gamer, crafted by experts.</p></div>
      <div class="footer-col"><h3>Quick Links</h3><ul><li><a href="/">Home</a></li><li><a href="/pages/about.html">About</a></li><li><a href="/pages/sitemap.html">All Games</a></li></ul></div>
      <div class="footer-col"><h3>Legal</h3><ul><li><a href="/pages/privacy.html">Privacy Policy</a></li><li><a href="/pages/terms.html">Terms of Service</a></li><li><a href="/pages/cookie-policy.html">Cookie Policy</a></li></ul></div>
      <div class="footer-col"><h3>Connect</h3><ul><li><a href="https://twitter.com/gameguidepro" rel="noopener noreferrer" target="_blank">Twitter</a></li><li><a href="https://discord.gg/gameguidepro" rel="noopener noreferrer" target="_blank">Discord</a></li><li><a href="mailto:contact@gameguidepro.com">Contact Us</a></li></ul></div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 ${esc(SITE_JSON.siteName || 'GameGuidePro')}. All rights reserved.</p>
    </div>
  </footer>`;
}

const COOKIE_BANNER = `  <div class="cookie-banner" id="cookie-banner" role="dialog" aria-label="Cookie consent" style="display:none;">
    <div class="cookie-banner-content">
      <p>We use cookies to enhance your experience, serve personalized ads, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. <a href="/pages/cookie-policy.html">Learn more</a>.</p>
      <div class="cookie-banner-actions">
        <button class="cookie-btn cookie-btn-reject" onclick="GGPCookieConsent.rejectAll()">Reject All</button>
        <button class="cookie-btn cookie-btn-manage" onclick="GGPCookieConsent.showModal()">Manage Preferences</button>
        <button class="cookie-btn cookie-btn-accept" onclick="GGPCookieConsent.acceptAll()">Accept All</button>
      </div>
    </div>
  </div>
  <div class="cookie-modal-overlay" id="cookie-modal" role="dialog" aria-modal="true" aria-label="Cookie preferences" style="display:none;" onclick="if(event.target===this)GGPCookieConsent.hideModal()">
    <div class="cookie-modal">
      <h2>Cookie Preferences</h2>
      <p>Choose which cookie categories you'd like to allow:</p>
      <div class="cookie-category"><div class="cookie-category-header"><input type="checkbox" id="consent-functional" checked disabled><label for="consent-functional">Functional (Required)</label></div><p class="cookie-category-desc">Essential for the site to function properly. Cannot be disabled.</p></div>
      <div class="cookie-category"><div class="cookie-category-header"><input type="checkbox" id="consent-analytics"><label for="consent-analytics">Analytics</label></div><p class="cookie-category-desc">Help us understand how visitors interact with the site.</p></div>
      <div class="cookie-category"><div class="cookie-category-header"><input type="checkbox" id="consent-marketing"><label for="consent-marketing">Marketing / Advertising</label></div><p class="cookie-category-desc">Used to deliver personalized ads and track ad performance.</p></div>
      <div class="cookie-modal-actions">
        <button class="cookie-btn cookie-btn-reject" onclick="GGPCookieConsent.rejectAll()">Reject All</button>
        <button class="cookie-btn cookie-btn-accept" onclick="GGPCookieConsent.savePrefs()">Save Preferences</button>
        <button class="cookie-btn cookie-btn-accept cookie-btn-accept-all" onclick="GGPCookieConsent.acceptAll()">Accept All</button>
      </div>
    </div>
  </div>
  <script src="/js/cookie-consent.js"></script>
  <script src="/js/main.js"></script>
</body></html>`;

const SIDEBAR_AD = `\n    <aside class="ad-sidebar" aria-label="Sidebar advertisement">
    <div class="ad-placeholder" data-ad-client="${SITE_JSON.adClient || 'ca-pub-XXXXXXXXXXXXXXXX'}" data-ad-slot="sidebar-0001" data-ad-format="auto" data-full-width-responsive="true">
      <span class="ad-label">Advertisement</span><div class="ad-space">300 &times; 250</div>
    </div>
  </aside>`;

const IN_CONTENT_AD = `\n        <div class="ad-slot ad-in-content" aria-label="Advertisement">
    <div class="ad-placeholder" data-ad-client="${SITE_JSON.adClient || 'ca-pub-XXXXXXXXXXXXXXXX'}" data-ad-slot="incontent-0001" data-ad-format="fluid" data-full-width-responsive="true">
      <span class="ad-label">Advertisement</span><div class="ad-space">Responsive In-Content</div>
    </div>
  </div>`;

// ─── Guide name mapping ───
const GUIDE_NAME = {
  "walkthrough": "Complete Walkthrough",
  "boss-guide": "Boss Guide &amp; Strategies",
  "builds": "Best Builds Guide",
  "secrets": "Secrets &amp; Hidden Areas",
  "beginner-tips": "Beginner Tips &amp; Tricks",
  "shrines": "Shrine Solutions Guide",
  "side-quests": "Side Quests &amp; Adventures",
  "abilities": "Abilities &amp; Creative Uses",
  "class-builds": "Best Class Builds",
  "romance": "Romance Guide",
  "companions": "Companion Guide",
  "spells": "Spell Guide &amp; Combos",
  "collectibles": "Collectibles Guide",
  "houses": "House Selection Guide",
  "ship-building": "Ship Building Guide",
  "outposts": "Outpost Building Guide",
  "factions": "Faction Questlines Guide",
  "endgame": "Endgame Progression Guide",
  "seasons": "Seasonal Content Guide",
  "pal-locations": "Pal Locations Guide",
  "base-building": "Base Building Guide",
  "breeding": "Breeding Guide",
  "materia": "Materia Guide &amp; Best Combos",
  "side-activities": "Side Activities &amp; Mini-Games",
  "characters": "Party Characters Guide",
  "cooking": "Cooking Recipes Guide",
  "crafting": "Crafting &amp; Upgrades Guide"
};

const GUIDE_ICON = {
  "walkthrough": "&#128214;", "boss-guide": "&#9876;&#65039;", "builds": "&#128295;", "secrets": "&#128273;",
  "beginner-tips": "&#128161;", "shrines": "&#127983;&#65039;", "side-quests": "&#128214;", "abilities": "&#10024;",
  "class-builds": "&#127919;", "romance": "&#10084;&#65039;", "companions": "&#128101;", "spells": "&#128302;",
  "collectibles": "&#128683;", "houses": "&#127960;", "ship-building": "&#128674;", "outposts": "&#127984;&#65039;",
  "factions": "&#127983;", "endgame": "&#128128;", "seasons": "&#128260;", "pal-locations": "&#128506;&#65039;",
  "base-building": "&#127968;", "breeding": "&#128686;", "materia": "&#128142;", "side-activities": "&#127918;",
  "characters": "&#127916;", "cooking": "&#127837;", "crafting": "&#128295;"
};

// ═════════════════════════════════════════
//  Generate game index page
// ═════════════════════════════════════════
function generateGamePage(game) {
  const slug = game.slug;
  const title = `${game.title} &mdash; Complete Game Guide &amp; Walkthrough | ${SITE_JSON.siteName || 'GameGuidePro'}`;
  const desc = `Complete ${game.title} guide: walkthrough, best builds, boss strategies, secrets, beginner tips. Master ${game.title} with our comprehensive coverage.`;
  const keywords = `${game.title}, ${game.category}, walkthrough, guide, tips, ${game.platform}`;
  const canonical = `${DOMAIN}/pages/${slug}.html`;
  const ogImage = `${DOMAIN}/images/og-${slug}.jpg`;

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": game.title,
    "description": desc,
    "genre": game.category,
    "gamePlatform": game.platform,
    "author": {"@type": "Organization", "name": SITE_JSON?.author || "GameGuidePro"},
    "url": canonical
  };

  const content = GUIDE_CONTENT[slug] || {};
  const about = content.about || `<p>Complete guide for ${game.title}.</p>`;
  const features = game.features || [];

  const guideLinks = game.guides.map(g => {
    const name = GUIDE_NAME[g] || g;
    const icon = GUIDE_ICON[g] || "&#128214;";
    return `          <a href="/pages/${slug}-${g}.html" class="guide-card"><span class="guide-card-icon">${icon}</span><span>${name}</span></a>`;
  }).join('\n');

  const html = `${head(title, desc, keywords, canonical, ogImage, ldJson)}
${HEADER}
  <main id="main-content" class="page-layout">
    <article class="article-body" style="grid-column: 1 / -1;">
      <nav class="breadcrumbs" aria-label="Breadcrumbs"><a href="/">Home</a> &rarr; <a href="/pages/sitemap.html">All Games</a> &rarr; <span>${esc(game.title)}</span></nav>
      <header class="article-header">
        <h1>${esc(game.title)} &mdash; Complete Game Guide</h1>
        <div class="article-meta">
          <span class="category-badge">${esc(game.category)}</span>
          <span class="platform-badge">${esc(game.platform)}</span>
        </div>
      </header>
      <div class="article-content">
        ${about}
        <h2>Key Features</h2>
        <ul>${features.map(f => `<li>${esc(f)}</li>`).join('\n        ')}
        </ul>${IN_CONTENT_AD}
        <h2>Available Guides</h2>
        <div class="guide-links">${guideLinks}</div>
      </div>
    </article>${SIDEBAR_AD}
  </main>
${footer()}${COOKIE_BANNER}`;

  fs.writeFileSync(path.join(PAGES_DIR, `${slug}.html`), html, 'utf8');
  return `${slug}.html`;
}

// ═════════════════════════════════════════
//  Generate individual guide page
// ═════════════════════════════════════════
function generateGuidePage(game, guideSlug) {
  const slug = game.slug;
  const guideName = GUIDE_NAME[guideSlug] || guideSlug;
  const title = `${game.title}: ${guideName} | ${SITE_JSON.siteName || 'GameGuidePro'}`;
  const desc = `Complete ${guideName.toLowerCase()} for ${game.title}. Detailed strategies, tips, and walkthroughs.`;
  const keywords = `${game.title}, ${guideName}, ${game.category}, guide, walkthrough`;
  const canonical = `${DOMAIN}/pages/${slug}-${guideSlug}.html`;
  const ogImage = `${DOMAIN}/images/og-${slug}.jpg`;

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": desc,
    "author": {"@type": "Organization", "name": SITE_JSON?.author || "GameGuidePro"},
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "publisher": {"@type": "Organization", "name": SITE_JSON.siteName || "GameGuidePro"}
  };

  const content = (GUIDE_CONTENT[slug] && GUIDE_CONTENT[slug][guideSlug])
    ? GUIDE_CONTENT[slug][guideSlug]
    : `<p>Comprehensive guide content for ${game.title} - ${guideName}.</p><h2>Overview</h2><p>This guide covers everything you need to know.</p>`;

  const relatedLinks = game.guides.filter(g => g !== guideSlug).map(g => {
    const nm = GUIDE_NAME[g] || g;
    return `<a href="/pages/${slug}-${g}.html">${nm}</a>`;
  }).join(' &middot; ');

  const html = `${head(title, desc, keywords, canonical, ogImage, ldJson)}
${HEADER}
  <main id="main-content" class="page-layout">
    <article class="article-body">
      <nav class="breadcrumbs" aria-label="Breadcrumbs"><a href="/">Home</a> &rarr; <a href="/pages/sitemap.html">All Games</a> &rarr; <a href="/pages/${slug}.html">${esc(game.title)}</a> &rarr; <span>${guideName}</span></nav>
      <header class="article-header">
        <h1>${esc(game.title)}: ${guideName}</h1>
        <div class="article-meta"><span class="category-badge">${esc(game.category)}</span></div>
      </header>
      <div class="article-content">
        ${content}${IN_CONTENT_AD}
        <h2>Related Guides</h2>
        <p>${relatedLinks}</p>
      </div>
    </article>${SIDEBAR_AD}
  </main>
${footer()}${COOKIE_BANNER}`;

  fs.writeFileSync(path.join(PAGES_DIR, `${slug}-${guideSlug}.html`), html, 'utf8');
  return `${slug}-${guideSlug}.html`;
}

// ═════════════════════════════════════════
//  Generate sitemap.html
// ═════════════════════════════════════════
function generateSitemap() {
  const domain = DOMAIN;
  let links = `<h2>All Games &amp; Guides</h2>\n        <div class="sitemap-grid">`;
  SITE_JSON.games.forEach(game => {
    links += `\n          <div class="sitemap-game">\n            <h3><a href="/pages/${game.slug}.html">${esc(game.title)}</a></h3>\n            <ul>`;
    game.guides.forEach(g => {
      const nm = GUIDE_NAME[g] || g;
      links += `\n              <li><a href="/pages/${game.slug}-${g}.html">${nm}</a></li>`;
    });
    links += `\n            </ul>\n          </div>`;
  });
  links += `\n        </div>`;

  const title = `All Game Guides &mdash; Sitemap | ${SITE_JSON.siteName || 'GameGuidePro'}`;
  const desc = `Complete sitemap of all game guides and walkthroughs on ${SITE_JSON.siteName || 'GameGuidePro'}.`;
  const keywords = `sitemap, game guides, walkthroughs`;
  const canonical = `${domain}/pages/sitemap.html`;
  const ogImage = `${domain}/images/og-default.jpg`;
  const ldJson = {"@context":"https://schema.org","@type":"WebPage","name":"Sitemap","description":desc};

  const html = `${head(title, desc, keywords, canonical, ogImage, ldJson)}
${HEADER}
  <main id="main-content" class="page-layout">
    <article class="article-body" style="grid-column: 1 / -1;">
      <nav class="breadcrumbs" aria-label="Breadcrumbs"><a href="/">Home</a> &rarr; <span>Sitemap</span></nav>
      <header class="article-header"><h1>All Game Guides &mdash; Sitemap</h1></header>
      <div class="article-content">${links}</div>
    </article>
  </main>
${footer()}${COOKIE_BANNER}`;

  fs.writeFileSync(path.join(PAGES_DIR, 'sitemap.html'), html, 'utf8');
  return 'sitemap.html';
}

// ═════════════════════════════════════════
//  MAIN
// ═════════════════════════════════════════
console.log('Starting page generation...');
if (!fs.existsSync(PAGES_DIR)) fs.mkdirSync(PAGES_DIR, { recursive: true });

const games = SITE_JSON.games;
let generated = [];

// Generate game index pages
games.forEach(game => {
  generated.push(generateGamePage(game));
  console.log(`  Generated: ${game.slug}.html`);
});

// Generate guide pages
games.forEach(game => {
  game.guides.forEach(guide => {
    generated.push(generateGuidePage(game, guide));
  });
  console.log(`  Generated ${game.guides.length} guide pages for ${game.title}`);
});

// Generate sitemap
generated.push(generateSitemap());
console.log('  Generated: sitemap.html');

console.log(`\nGeneration complete! Total files: ${generated.length}`);
console.log('Files:', generated.join(', '));
