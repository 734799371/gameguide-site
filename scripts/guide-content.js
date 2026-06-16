// guide-content.js — All game guide and detail content
// Exported as data for generate-pages.js

const GUIDES = {};

// ── Elden Ring ──────────────────────────────────────────────────────────
GUIDES['elden-ring-walkthrough'] = `<h2>Getting Started in the Lands Between</h2>
<p>Your journey in Elden Ring begins in the Stranded Graveyard, a tutorial area that teaches basic combat mechanics. After defeating the Grafted Scion (or dying to it — most players do), you'll wake up in the Chapel of Anticipation and be guided to the first Site of Grace. From there, the open world of Limgrave awaits, and the game gives you near-total freedom in how you approach it.</p>

<h2>Limgrave and the Early Game</h2>
<p>Limgrave serves as your proving ground. Key early objectives include reaching the Church of Elleh for merchant Kalé's wares, finding the Map Fragment for the region, and exploring the Gatefront Ruins for your first Smithing Stones. The Tree Sentinel guards the path east but can be skipped entirely — come back when you're stronger. Your first major story gate is Stormveil Castle, accessed by defeating Margit, the Fell Omen at the entrance.</p>

<h3>Stormveil Castle</h3>
<p>Stormveil is your first legacy dungeon and a masterclass in level design. The main gate path is a gauntlet of soldiers and a Ballista, while the side entrance (recommended) lets you sneak through the ramparts. Godrick the Grafted awaits at the top — his first phase tests basic dodge timing, while his second phase (grafted dragon arm) demands aggressive punishment of his recovery frames. After Godrick, you gain access to Liurnia of the Lakes to the north.</p>

<h2>Liurnia and the Academy</h2>
<p>Liurnia's swampy terrain hides the Raya Lucaria Academy, home to Rennala. You'll need the Glintstone Key from the dragon-guarded isle to enter. Rennala's first phase is a puzzle fight (destroy her shielded students), and her second phase is a sorcery barrage — dodge through her spells and punish. The Grand Lift of Dectus or the Ruin-Strewn Precipice dungeon lead to the Altus Plateau.</p>

<h2>Leyndell and the Mountaintops</h2>
<p>Morgott, the Omen King guards Leyndell's Erdtree entrance. His attacks are fast and varied — learn the timing for his sword combos and dodge the blood curse AoE. After claiming the Great Runes, you'll need to reach the Mountaintops of the Giants via the Grand Lift of Rold. The Fire Giant is the gatekeeper boss here.</p>

<h2>Endgame: Farum Azula and the Erdtree</h2>
<p>After the Fire Giant, the Forge of the Giants sends you to Crumbling Farum Azula. Maliketh, the Black Blade is the major boss here — he's incredibly aggressive, so use Blasphemous Claw to deflect his golden attacks. Finally, you return to Leyndell for Radagon of the Golden Order and the Elden Beast. Radagon demands precise dodge timing on his hammer combos, while the Elden Beast is a chase fight — stay close, dodge the grab, and punish its recovery.</p>

<h3>Critical Decision Points</h3>
<ul>
<li><strong>Dung Eater Quest:</strong> Complete this for the Blessing of Despair ending</li>
<li><strong>Ranni's Quest:</strong> The longest and most rewarding questline, unlocking the Age of Stars ending</li>
<li><strong>Fia's Quest:</strong> Leads to the Duskborn ending</li>
<li><strong>Goldmask Quest:</strong> Unlocks the Order ending</li>
</ul>`;

GUIDES['elden-ring-boss-guide'] = `<h2>Margit, the Fell Omen</h2>
<p>Location: Stormveil Castle entrance. Recommended level: 20-25. Margit is the first major skill check. His attacks are delayed and designed to panic-roll players. Wait for his combo to finish before attacking. His holy sword slam has a massive tell; dodge sideways, not backward. Margit's Shackle (purchasable from Patches) pins him down twice, creating free damage windows.</p>

<h2>Godrick the Grafted</h2>
<p>Location: Stormveil Castle. Recommended level: 25-35. Phase one is a humanoid sword fight. At 50% HP, he grafts a dragon head onto his arm and gains fire breath attacks. Strafe right to avoid most combos. Spirit ash summons (especially Wolves or Jellyfish) distract him effectively.</p>

<h2>Radahn, Scourge of the Stars</h2>
<p>Location: Redmane Castle. Recommended level: 60-70. You can summon up to seven NPCs to help. Radahn's arrows track you like missiles; ride Torrent in wide circles. In phase two, he crashes down as a gravity meteor — watch for the red indicator and sprint away.</p>

<h2>Rennala, Queen of the Full Moon</h2>
<p>Location: Raya Lucaria Academy. Phase one: destroy the three glowing students shielding Rennala. Phase two: dodge through her Full Moon attack and punish her spell recovery. Carian Piercer or melee rushdown works well since Rennala has low poise.</p>

<h2>Morgott, the Omen King</h2>
<p>Location: Leyndell, Royal Capital. Recommended level: 80-90. His sword combos have 4-5 hit strings — don't panic roll, learn the rhythm. The blood curse AoE (pentagram on the ground) explodes after a delay; run out immediately.</p>

<h2>Maliketh, the Black Blade</h2>
<p>Location: Crumbling Farum Azula. Recommended level: 100-110. Use the Blasphemous Claw to parry his golden slash — this creates a massive stagger opening. Dodge through his flying sword combos rather than away.</p>

<h2>Radagon of the Golden Order / Elden Beast</h2>
<p>The final boss is a two-phase encounter. Radagon fights with hammer combos and holy magic — roll into him, not away. The Elden Beast is a large, slow enemy that swims through golden mist. Stay close, dodge the grab, and punish its sword slams. Use Lord's Divine Fortification to reduce holy damage.</p>`;

GUIDES['elden-ring-builds'] = `<h2>Strength Build — The Colossus</h2>
<p>Start with the Vagabond or Hero class. Priority: Vigor (60), Strength (54 for two-handing 80 effective), Endurance (25-30). The Giant-Crusher is top tier. Pair with War Cry Ash of War for charged heavy attacks. Talismans: Great-Jar's Arsenal, Starscourge Heirloom, Claw Talisman.</p>

<h2>Dexterity Build — The Blade Dancer</h2>
<p>Start with Samurai or Warrior. Key stats: Vigor (60), Dexterity (60-70). The Moonveil Katana with Transient Moonlight is popular. Hand of Malenia with Waterfowl Dance is devastating. White Mask and Lord of Blood's Exultation provide attack buffs on bleed procs.</p>

<h2>Mage Build — The Glintstone Sorcerer</h2>
<p>Start with Astrologer. Priority: Vigor (40-50), Intelligence (70-80), Mind (25-30). Lusat's Glintstone Staff maximizes spell damage. Comet Azur with Cerulean Hidden Tear can one-phase most bosses. Rock Sling deals stance damage, and Loretta's Greatbow is for sniping.</p>

<h2>Bleed Build — The Hemorrhage Machine</h2>
<p>Start with Samurai for the Uchigatana. Dual-wield bleed weapons for powerstancing. Rivers of Blood katana with Corpse Piler builds bleed insanely fast. Key talismans: Lord of Blood's Exultation, White Mask, Rotten Winged Sword Insignia.</p>`;

GUIDES['elden-ring-secrets'] = `<h2>Hidden Areas and Illusory Walls</h2>
<p>Over 100 illusory walls exist throughout the game. Unlike Dark Souls, you roll into them to reveal the path. Notable ones include the wall in Murkwater Catacombs hiding a chest with the Uchigatana alternative path, and the hidden area in Volcano Manor leading to the Temple of Eiglay. The most infamous is in Sellia — three consecutive walls hide a path to the Nox Swordstress armor set.</p>

<h2>Secret Bosses</h2>
<h3>Dragonlord Placidusax</h3>
<p>Hidden in Crumbling Farum Azula. From the Great Bridge grace, ride the elevator down, then lie down in the empty spot. Drops the Dragon King's Cragblade.</p>

<h3>Ancient Dragon Lansseax</h3>
<p>Found at the Altus Plateau after progressing the Dragon Communion altar. Drops Fortissax's Lightning Spear incantation.</p>

<h2>Hidden Items</h2>
<ul>
<li><strong>Blade of Calling:</strong> Hidden behind an illusory wall in the Forbidden Lands</li>
<li><strong>Deathtouched Catacombs:</strong> Contains the Black Knife armor set behind a platforming puzzle</li>
<li><strong>Caelid's Sellia Gateway:</strong> Lighting all three braziers opens the main gate</li>
<li><strong>Consecrated Snowfield:</strong> Accessible only with both Haligtree Medallion halves</li>
</ul>`;

GUIDES['elden-ring-beginner-tips'] = `<h2>Choosing Your Starting Class</h2>
<p><strong>Vagabond</strong> is the best all-rounder with 100% physical block shield. <strong>Samurai</strong> gives you the Uchigatana (bleed weapon viable through the entire game). <strong>Astrologer</strong> is ideal for mage builds. <strong>Hero</strong> is the most efficient for strength builds.</p>

<h2>Early Game Priority</h2>
<ul>
<li>Find all Limgrave Map Fragments</li>
<li>Buy the Crafting Kit from Kalé at the Church of Elleh</li>
<li>Grab the Spirit Calling Bell from Renna (visit Church of Elleh at night)</li>
<li>Get Flask upgrades from the Third Church of Marika</li>
<li>Level Vigor to 30 before anything else</li>
</ul>

<h2>Essential Mechanics</h2>
<h3>Guard Counters</h3>
<p>After blocking an attack, press R2 for a guard counter. This deals massive stance damage and is the safest way to break boss poise.</p>

<h3>Jump Attacks</h3>
<p>Jump attacks (L3 + R2) deal double stance damage compared to regular attacks. The Raptor's Black Feathers chest armor boosts jump attack damage by 10%.</p>

<h3>Summoning Spirits</h3>
<p>Spirit ashes are essential for boss fights. Mimic Tear (found in Nokron) creates a clone of yourself and is the strongest spirit in the game — it uses your full loadout including consumables.</p>`;

// ── Zelda TOTK ──────────────────────────────────────────────────────────
GUIDES['zelda-totk-walkthrough'] = `<h2>Great Sky Island — The Tutorial</h2>
<p>Tears of the Kingdom opens on Great Sky Island, where you acquire Ultrahand, Fuse, Ascend, and Recall. The Temple of Time is the final tutorial challenge. After completing it, you'll dive down to Hyrule's surface with the Paraglider.</p>

<h2>Surface Hyrule and Regional Phenomena</h2>
<p>Upon reaching Lookout Landing, you learn about the four Regional Phenomena. The recommended order is Hebra (Wind), Eldin (Fire), Lanayru (Water), Gerudo (Lightning). Each region culminates in a Temple with a unique boss and Sage companion.</p>

<h3>Wind Temple (Hebra)</h3>
<p>Tulin of the Rito accompanies you through blizzard conditions. The boss, Colgera, is a flying entity — aim for its weak points while gliding.</p>

<h3>Fire Temple (Eldin)</h3>
<p>Yunobo helps you navigate Death Mountain's lava-filled depths using minecart puzzles. The boss Marbled Gohma requires destroying its legs then attacking its eye.</p>

<h2>The Depths</h2>
<p>Beneath Hyrule lies the Depths — a dark mirror of the surface. Every chasm leads down here. You'll need Brightbloom Seeds to light the way. Each Lightroot corresponds to a surface Shrine.</p>

<h2>Recovering the Master Sword</h2>
<p>The Master Sword is on the Light Dragon, which circles Hyrule's sky. You need at least 2 full stamina wheels to pull the sword. Find all 12 Dragon's Tear geoglyphs to reveal its location.</p>`;

GUIDES['zelda-totk-shrines'] = `<h2>Understanding Shrines</h2>
<p>There are 152 shrines total — 120 on the surface and 32 in the sky. Each gives a Light of Blessing; four can be exchanged for a heart container or stamina vessel. Many shrines have multiple solutions thanks to the creative abilities.</p>

<h2>Types of Shrines</h2>
<h3>Ultrahand Shrines</h3>
<p>Focus on building structures — bridges, vehicles, and contraptions. Example: Tenbez Shrine requires building a stable bridge across a gap.</p>

<h3>Fuse Shrines</h3>
<p>Teach you to combine weapons and materials. Mayachide Shrine forces you to Fuse rockets to shields for vertical launches.</p>

<h3>Proving Grounds</h3>
<p>Stripped your equipment and give basic gear for a combat challenge. Fuse whatever materials you find to your weapons immediately.</p>

<h2>Notable Shrines</h2>
<ul>
<li><strong>Jochi-ihiga Shrine:</strong> Carry a crystal through a gauntlet back to the entrance</li>
<li><strong>Mayaumekis Shrine:</strong> Requires diving through rings in the sky using the Paraglider</li>
<li><strong>In-isa Shrine:</strong> First Fuse shrine — combines fire fruit with arrows to melt ice</li>
<li><strong>Kyononis Shrine:</strong> Combat tutorial teaching Flurry Rush timing</li>
</ul>`;

GUIDES['zelda-totk-side-quests'] = `<h2>Side Adventures</h2>
<h3>The Yiga Clan Exam</h3>
<p>Infiltrate the Yiga Clan by finding their three branch hideouts. Each requires a disguise and solving a challenge. Reward: access to the Yiga Clan's secret shop.</p>

<h3>From the Ground Up</h3>
<p>Help Addison build Tarrey Town. Find NPCs across Hyrule — a Goron carpenter, Rito tailor, Zora painter, and Gerudo jeweler.</p>

<h2>Notable Side Quests</h2>
<h3>The Goddess Statue of Power</h3>
<p>Located in the abandoned Thyphlo Ruins. Complete three combat challenges using Sage abilities. Reward: a diamond.</p>

<h3>Misko's Treasure</h3>
<p>Find the cave behind the waterfall in Regencia River. Discover Misko's hidden armor sets including Climbing Gear and Fierce Deity set.</p>

<h2>Hyrule Stabilization</h2>
<p>Hudson Construction signs are scattered across Hyrule. Help Addison stabilize them with Ultrahand. Each completed stabilization rewards 50 rupees.</p>`;

GUIDES['zelda-totk-abilities'] = `<h2>Ultrahand — Build Anything</h2>
<p>Grab, rotate, and attach objects to create anything. Build vehicles with Zonai devices (wheels, rockets, fans, steering sticks). The Stake is the most underrated tool — stake objects to walls as anchor points.</p>

<h2>Fuse — Weapon Augmentation</h2>
<p><strong>Weapon Fusions:</strong> Rubies add fire, Sapphires add ice, Topazes add lightning. Silver Lynel Saber Horn is the strongest fuse material. <strong>Shield Fusions:</strong> Rockets on shields launch you skyward. Minecarts let you grind rails. <strong>Arrow Fusions:</strong> Keese Eyeballs create homing arrows. Bomb Flowers create explosive arrows.</p>

<h2>Ascend — Phase Through Ceilings</h2>
<p>Swim upward through solid surfaces for ~15-20 meters. Bypass climbing sections, escape caves, reach second floors of ruins. In shrines, Ascend is often the key to reaching seemingly inaccessible platforms.</p>

<h2>Recall — Rewind Time</h2>
<p>Reverse an object's movement through time. Rewind falling boulders to ride them upward, reverse enemy projectiles, and undo platform movements. In combat, rewind thrown weapons back at enemies.</p>`;

GUIDES['zelda-totk-beginner-tips'] = `<h2>Combat Fundamentals</h2>
<p>Flurry Rush (dodge at the right moment, then mash Y) is still devastating. Perfect Guard (parry with A) deflects attacks. Fuse weapons early and often — even basic additions double or triple damage. Always carry bomb flowers for arrow fusing.</p>

<h2>Resource Management</h2>
<p>Cooking is essential. Hearty ingredients cooked alone give full HP recovery plus temporary hearts. Endura Carrots give temporary stamina. Always carry stamina-restoring meals for climbing and gliding emergencies.</p>

<h2>Exploration Strategy</h2>
<ul>
<li>Activate every Tower for map and fast travel</li>
<li>Light every Lightroot in the Depths — they map to surface shrines</li>
<li>Pick up every Brightbloom Seed — you'll need hundreds</li>
<li>Don't ignore sky islands — they contain the best weapons and armor</li>
</ul>

<h3>Essential Early Upgrades</h3>
<ul>
<li><strong>Stamina first:</strong> At least one extra wheel before hearts</li>
<li><strong>Paraglider upgrades:</strong> Visit the tech lab in Hateno</li>
<li><strong>Armor upgrades:</strong> Great Fairies unlock defense upgrades</li>
<li><strong>Weapon slots:</strong> Hestu expands inventory — find Korok seeds</li>
</ul>`;

// ── Baldur's Gate 3 ────────────────────────────────────────────────────
GUIDES['baldurs-gate-3-walkthrough'] = `<h2>Act 1 — The Wilderness</h2>
<p>You awaken on a Nautiloid ship with a mind flayer tadpole. After escaping, you crash-land on the Ravaged Beach. The Wilderness is dense with content — the Goblin Camp, Blighted Village, Emerald Grove, and the Underdark beneath. Key Act 1 decision: side with the druids and tieflings at the Grove, or help the goblins (Absolute path).</p>

<h3>Underdark Entry Points</h3>
<p>Reach the Underdark through the Whispering Depths, the Defiled Temple puzzle (rotate discs to match the pattern), or the Zhentarim Hideout. The Myconid Colony is a crucial hub with trade and questlines for Glut or Spaw.</p>

<h2>Act 2 — Shadow-Cursed Lands</h2>
<p>You need the Moon Lantern or Shadow Art to survive. The Last Light Inn is your safe haven. Key events: Ketheric Thorm's assault, the Nightsong reveal (Aylin is a daughter of Selûne), and the choice to free or kill the Nightsong.</p>

<h2>Act 3 — Baldur's Gate</h2>
<p>The city is massive with the Flaming Fist, the Guild, the Stone Lord, and the Cult of the Absolute. Companion quests reach their conclusions — Astarion's Cazador confrontation, Karlach's engine failure, Shadowheart's Shar/Selûne choice, and Lae'zel's Vlaakith rebellion.</p>`;

GUIDES['baldurs-gate-3-class-builds'] = `<h2>Fighter — Battle Master</h2>
<p>Prioritize Strength and Constitution. Key Maneuvers: Precision Attack, Riposte, and Menacing Attack. Take Great Weapon Master at level 4. Best weapons: Balduran's Giantslayer or Sword of Chaos.</p>

<h2>Rogue — Thief</h2>
<p>Thief gains an additional Bonus Action for double Sneak Attack or double offhand attacks. The Risk Ring gives advantage on all attacks. Best weapons: Crimson Mischief and Dolor Amarus.</p>

<h2>Wizard — Evocation</h2>
<p>Evocation wizards drop AoE spells without harming allies. Key spells: Fireball, Haste, Chain Lightning, and Counterspell. The Spellmight Gloves add damage.</p>

<h2>Sorcerer — Draconic Bloodline (Fire)</h2>
<p>Twin Spell Haste on two martials is game-breaking. Quickened Spell casts as a bonus action. Best items: Hat of Fire Acuity, Robe of the Weave, Markoheshkir.</p>

<h2>Cleric — Light Domain</h2>
<p>Warding Flare imposes disadvantage on attacks. Spirit Guardians deals radiant damage to all nearby enemies. Fireball and Wall of Fire from domain spells.</p>

<h2>Barbarian — Berserker</h2>
<p>Frenzied Strike and Enraged Throw make throw builds top-tier. Use the Returning Pike and Ring of Flinging. Tavern Brawler feat doubles Strength modifier.</p>`;

GUIDES['baldurs-gate-3-romance'] = `<h2>Romanceable Companions</h2>
<p>Six full romance options: Shadowheart, Karlach, Lae'zel, Astarion, Gale, and Wyll. You can only commit to one in Act 2.</p>

<h2>Shadowheart</h2>
<p>Respect her autonomy and don't push about her past. Key: the wine scene in Act 1, the Shar temple in Act 2, and the choice in the Shar Gauntlet — encourage her to spare Aylin for the good path.</p>

<h2>Karlach</h2>
<p>The most emotionally resonant. Her engine runs too hot to touch. Support her confrontation with Gortash and find a way to cool her engine. Her ending is bittersweet.</p>

<h2>Astarion</h2>
<p>Don't let him ascend — the good path where he rejects ascension leads to a touching conclusion where he walks in the sun. Support his independence.</p>

<h2>Lael'zel, Gale, and Wyll</h2>
<p><strong>Lae'zel:</strong> Fierce and pragmatic. Supporting her rebellion against Vlaakith deepens the bond.<br><strong>Gale:</strong> Choosing him over Mystra's demands is the key.<br><strong>Wyll:</strong> Support his desire to be a true hero, not Mizora's puppet.</p>`;

GUIDES['baldurs-gate-3-companions'] = `<h2>Shadowheart — Half-Elf Cleric</h2>
<p>Devotee of Shar found on the Nautiloid. Her personal quest involves the Shar Gauntlet in Act 2. Spare the Nightsong to turn her toward Selûne; kill to deepen Shar devotion. She approves of mercy and respect for privacy.</p>

<h2>Astarion — High Elf Rogue</h2>
<p>Vampire spawn found in a cave. His quest leads to Cazador's palace. The critical choice: allow the Ascension ritual or free the spawn. Freeing him is the good path. He approves of clever, selfish choices.</p>

<h2>Karlach — Tiefling Barbarian</h2>
<p>Escaped from Avernus. Her infernal engine runs too hot to touch. She approves of heroic, kind choices and hates cruelty.</p>

<h2>Gale — Human Wizard</h2>
<p>Has an orb of unstable magic from Mystra. Must consume magical items. His quest involves choosing between ascension and humility before Mystra.</p>

<h2>Lae'zel — Githyanki Fighter</h2>
<p>Devoted to Queen Vlaakith. Her quest reveals Vlaakith's betrayal. She must choose between loyalty or freeing Orpheus.</p>

<h2>Wyll — Human Warlock</h2>
<p>The Blade of Frontiers with a pact to Mizora. His quest involves confronting Mizora. He approves of heroic actions and protecting the innocent.</p>`;

GUIDES['baldurs-gate-3-beginner-tips'] = `<h2>Understanding D&D Mechanics</h2>
<p>BG3 runs on D&D 5th Edition. The core mechanic is the d20 roll — roll a 20-sided die, add your modifier, beat the DC. Advantage = roll twice take higher. Getting Advantage on attacks is the single most important thing.</p>

<h2>Dice Rolls and Dialogue</h2>
<p>Dialogue checks determine story outcomes. Your Charisma modifier helps persuasion/deception. Inspiration points let you reroll failed checks — save them for crucial moments.</p>

<h2>Combat Basics</h2>
<ul>
<li><strong>Action economy wins fights:</strong> Haste doubles a character's output</li>
<li><strong>High ground matters:</strong> +2 to attack rolls from elevation</li>
<li><strong>Shove is underrated:</strong> Pushing enemies off cliffs is an instant kill</li>
<li><strong>Dip your weapons:</strong> Dipping in fire/cold surfaces adds elemental damage</li>
<li><strong>Barrels are bombs:</strong> Place explosive barrels and shoot them with fire</li>
</ul>

<h2>Essential Tips</h2>
<p>Long rests restore resources but advance time-sensitive quests. Use short rests between fights. Talk to companions at camp. Inspect every enemy before fighting. Split your party to position before battles.</p>`;

// ── Hogwarts Legacy ─────────────────────────────────────────────────────
GUIDES['hogwarts-legacy-walkthrough'] = `<h2>Beginning at Hogwarts</h2>
<p>You start as a fifth-year student — unusual but exciting. Professor Fig is your mentor. The opening in Gringotts introduces Ancient Magic. Classes unlock spells: Charms (Accio and Levioso), DADA (combat spells), Herbology (Mandrakes), and Potions.</p>

<h2>Main Story Progression</h2>
<p>The main quest revolves around Ancient Magic and Ranrok's goblin rebellion. Key story beats: discovering the Map Chamber, meeting the four Keepers (Rackham, Rookwood, Fitzgerald, Bakar), completing each trial, and confronting Ranrok.</p>

<h3>The Keeper Trials</h3>
<p>Each trial is a puzzle-dungeon. San Bakar's trial involves taming a Graphorn. Niamh Fitzgerald's takes you through a death-related vision. Charles Rookwood's involves time-shifting. Percival Rackham's introduces Ancient Magic mechanics.</p>

<h2>Late Game and Ending</h2>
<p>The final sequence beneath Hogwarts has Ranrok transforming into a massive dragon. Three phases — destroy the glowing nodes around the arena. Use Ancient Magic when available.</p>`;

GUIDES['hogwarts-legacy-spells'] = `<h2>Spell Categories</h2>
<p>31 spells across Control (yellow), Force (purple), Damage (red), Utility (green), and Essential categories.</p>

<h2>Damage Spells (Red)</h2>
<ul>
<li><strong>Incendio:</strong> Close-range fire — breaks Progo shields</li>
<li><strong>Confringo:</strong> Long-range fire bolt</li>
<li><strong>Diffindo:</strong> Highest single-hit damage</li>
<li><strong>Bombarda:</strong> Explosive AoE</li>
<li><strong>Expelliarmus:</strong> Disarms and stuns</li>
</ul>

<h2>Control Spells (Yellow)</h2>
<ul>
<li><strong>Levioso:</strong> Levitates enemies — breaks yellow shields</li>
<li><strong>Glacius:</strong> Freezes targets — increases damage taken</li>
<li><strong>Arresto Momentum:</strong> Slows enemies</li>
<li><strong>Transformation:</strong> Turns enemies into barrels</li>
</ul>

<h2>Best Combat Combos</h2>
<p><strong>The Launcher:</strong> Levioso → Basic Cast → Descendo.<br><strong>The Nuker:</strong> Glacius → Confringo → Diffindo.<br><strong>The Crowd Controller:</strong> Accio → Bombarda → Incendio.</p>`;

GUIDES['hogwarts-legacy-collectibles'] = `<h2>Field Guide Pages</h2>
<p>150 Field Guide Pages throughout Hogwarts, Hogsmeade, and the open world. Three types: regular (Revelio reveals them), flying (Levioso to catch), and dragon-fire (Incendio on braziers). Hogwarts alone contains 80+ pages.</p>

<h2>Merlin Trials</h2>
<p>95 Merlin Trials across the open world. Each increases gear inventory capacity. Types: lighting braziers, rolling spheres, destroying orbs, platforming. You need Mallowsweet leaves to activate each trial.</p>

<h2>Demiguise Statues</h2>
<p>30 Demiguise Moon statues only collectable at night. Each gives a Demiguise Moon for Alohomora upgrades. Need 9 for Level 2 and 13 for Level 3.</p>`;

GUIDES['hogwarts-legacy-houses'] = `<h2>House Selection</h2>
<p>Each house offers unique common rooms, exclusive quests, and different companion relationships.</p>

<h2>Gryffindor</h2>
<p>Unique quest: "The Hunt for the Missing Pages" with Nearly Headless Nick. Common room in the Astronomy Wing. Bond with Natsai Onai.</p>

<h2>Slytherin</h2>
<p>"Scrope's Last Hope" involving a House Elf and goblin conspiracy. Common room beneath the Great Hall. Align with Sebastian Sallow.</p>

<h2>Ravenclaw</h2>
<p>"Ollivander's Heirloom" with riddles in the library. Common room in a tower. Connect with Amit Thakkar.</p>

<h2>Hufflepuff</h2>
<p>"Museum of Memory" takes you to Azkaban — the only way to visit it. Common room near the kitchens. Poppy Sweeting has the best beast questline.</p>`;

GUIDES['hogwarts-legacy-beginner-tips'] = `<h2>Combat Fundamentals</h2>
<p>Break enemy shields with matching spell color, then combo while they're vulnerable. Ancient Meter builds as you deal damage — unleash for devastating attacks. Always keep a shield-breaker of each color on your spell bar.</p>

<h2>Exploration Tips</h2>
<p>Spam Revelio constantly in new areas. The Room of Requirement is your base — set up potting stations and brewing stations early. Grow Fluxweed and Mallowsweet immediately. Every Floo Flame makes traversal easier.</p>

<h3>Spell Combo Strategy</h3>
<p>Always have a balanced set: one of each color + one utility. Recommended early loadout: Levioso (yellow), Accio (purple), Incendio (red), Confringo (red ranged).</p>

<h3>Gear Management</h3>
<ul>
<li>Sell underleveled gear immediately</li>
<li>Legendary gear is worth keeping</li>
<li>Traits unlocked in Room of Requirement can be applied to gear</li>
<li>Complete Merlin Trials for inventory space</li>
</ul>`;

// ── Starfield ───────────────────────────────────────────────────────────
GUIDES['starfield-walkthrough'] = `<h2>Constellation and the Artifacts</h2>
<p>The main quest begins when you touch an Artifact at the Argos Extractors mine. Constellation recruits you — Sarah Morgan, Sam Coe, Andreja, and Walter Stroud. Your mission: collect all Artifacts to understand the Unity.</p>

<h2>Artifact Collection</h2>
<p>Key missions include "The Old Neighborhood", "Into the Unknown", "All That Money Can Buy", and "Further Into the Unknown". The Artifacts attract the Starborn — multiverse travelers who want them for themselves.</p>

<h2>Faction Choices and the Unity</h2>
<p>You can enter the Unity and become Starborn, starting New Game Plus with all powers intact. NG+ changes dialogue and some encounters play out differently.</p>

<h3>New Game Plus</h3>
<p>NG+ resets items, ships, and outposts but keeps levels, skills, and powers. You start with the Starborn ship and suit. The Lodge crew recognizes you differently.</p>`;

GUIDES['starfield-ship-building'] = `<h2>Ship Builder Basics</h2>
<p>Ships are built from modules: cockpit, habitat, engine, fuel, shield, weapon, landing gear, and docker. Each module has mass. The key metric is mobility — a ship that can't turn is a death trap.</p>

<h2>Class System</h2>
<p>Class A: smallest, most efficient. Class C: most powerful, allows top-tier gear. You need Piloting skill to fly higher classes.</p>

<h2>Best Modules</h2>
<p><strong>Engines:</strong> White Dwarf 3015 — best thrust-to-mass ratio.<br><strong>Shields:</strong> Sanctuary series — stack two for maximum protection.<br><strong>Weapons:</strong> Particle beams (Vanguard Obliterator Autoprojector) deal both shield and hull damage.</p>`;

GUIDES['starfield-outposts'] = `<h2>Outpost Creation</h2>
<p>Outposts are bases for resource extraction, manufacturing, and storage. Build on planets with rich rare resources like Aldumite, Drude, or Tantalum.</p>

<h2>Resource Extraction</h2>
<p>Extractors pull resources automatically but need power (solar or wind). The best multi-resource planets have 5+ different materials.</p>

<h2>Cargo Links</h2>
<p>Connect your outposts for automatic resource transfer. Inter-system links require helium-3 as fuel. Create manufacturing chains across star systems.</p>

<h2>Automation Tips</h2>
<ul>
<li>Build power first</li>
<li>Link extractors to storage, then storage to manufacturing</li>
<li>Assign crew with Outpost Management skills</li>
<li>Vasco can be assigned as a guard</li>
</ul>`;

GUIDES['starfield-factions'] = `<h2>Constellation</h2>
<p>Joined automatically. Their questline IS the main quest. Members: Sarah Morgan, Sam Coe, Andreja, Walter Stroud, Barrett.</p>

<h2>Freestar Collective</h2>
<p>Freestar Rangers based in Akila City. Investigate HopeTech corporate corruption. Reward: Ranger armor set.</p>

<h2>United Colonies (UC Vanguard)</h2>
<p>Defend UC from Terrormorph attacks. Join at the MAST building flight simulator. Completion grants UC citizenship.</p>

<h2>Ryujin Industries</h2>
<p>Megacorporation in Neon. Corporate espionage and sabotage. The Internal Neuroamp is one of the most powerful items.</p>

<h2>Crimson Fleet</h2>
<p>Pirate faction. You're sent to infiltrate but can genuinely join. The Fleet path is more lucrative long-term.</p>`;

GUIDES['starfield-beginner-tips'] = `<h2>Space Combat Essentials</h2>
<p>Manage power distribution: max weapons and shields during combat. Target specific ship systems — disabling engines lets you board. Always carry ship repair kits.</p>

<h2>Resource Management</h2>
<p>Focus on rare materials and sell the rest. Use ship cargo for storage. Craft med packs and ammo rather than buying. The Spacesuit Decontamination skill is essential.</p>

<h2>Exploration Basics</h2>
<ul>
<li>Scan planets before landing</li>
<li>Unlock Boost Pack Training early</li>
<li>Fast travel is free to any discovered location</li>
<li>Build small outposts on frequently visited planets</li>
<li>Check every POI for loot and unique weapons</li>
</ul>`;

// ── Diablo IV ──────────────────────────────────────────────────────────
GUIDES['diablo-4-walkthrough'] = `<h2>Prologue — The Return to Tristram</h2>
<p>Begin in the Fractured Peaks, arriving at Kyovashad. The prologue introduces the Cathedral of Light and Lilith's influence.</p>

<h2>Act I — Fractured Peaks</h2>
<p>Investigate Lilith's followers, the Knights Penitent, and the corrupted priest Vhenard. Culminates in fighting Vhenard at the Altar of Lilith.</p>

<h2>Act II — Scosglen</h2>
<p>The druid homeland besieged by Goatmen. Key boss: the Blood Bishop in Domhainne Tunnels.</p>

<h2>Act III — Dry Steppes</h2>
<p>Arid badlands controlled by warring factions. Excellent farming spots with dense enemy density.</p>

<h2>Act IV — Kehjistan</h2>
<p>The desert empire holds the Temple of the Triune. Most pivotal story revelations about Lilith's plan.</p>

<h2>Act V — Hawezar</h2>
<p>Final confrontations. The Drowned plague the coastlines. Multi-phase final boss fight with Lilith in Hell.</p>`;

GUIDES['diablo-4-class-builds'] = `<h2>Sorcerer — Ball Lightning</h2>
<p>Use Gravitational Aspect so Ball Lightning orbits you. Key gear: Gravitational Aspect, Gloves of the Illuminator. Use Frost Nova to freeze enemies in your Lightning orbit.</p>

<h2>Barbarian — Whirlwind</h2>
<p>Spin-to-win using Aspect of Berserk Ripping and Death Wish. Skills: Whirlwind, War Cry, Rallying Cry, Challenging Cry. Ramaladni's Magnum Opus is best-in-slot.</p>

<h2>Rogue — Twisting Blades</h2>
<p>Highest sustained DPS. Combo: Shadow Step in → Twisting Blades → Dash out. Stack Vulnerable damage.</p>

<h2>Necromancer — Bone Spear</h2>
<p>Bone Spear pierces through enemies. Splintering Aspect causes explosions on impact. Sacrifice all minions for stat bonuses.</p>

<h2>Druid — Pulverize Werebear</h2>
<p>Use Vasily's Prayer helm. Key aspects: Shockwave, Earthquake, Nighthowler's. Permanently Fortified while dealing massive AoE damage.</p>`;

GUIDES['diablo-4-endgame'] = `<h2>Helltides</h2>
<p>Zones overrun by demons. Aberrant Cinders open Tortured Gifts. Mystery chests cost 175 Cinders and contain multiple legendaries. Helltides rotate every hour.</p>

<h2>Nightmare Dungeons</h2>
<p>Enhanced by Nightmare Sigils. Each sigil adds affixes. Push as high as possible for XP and item power. At Tier 30+, items drop at 925 power.</p>

<h2>The Pit</h2>
<p>Greater Rifts-style content in Cerrigar. 10-minute time limit. Primary source of Masterworking materials.</p>

<h2>Uber Bosses</h2>
<p>Duriel drops the best loot including Mythic Uniques. Grigoire and Beast in the Ice have unique loot tables. Require optimized builds and specific summoning materials.</p>`;

GUIDES['diablo-4-seasons'] = `<h2>How Seasons Work</h2>
<p>Each 3-month season introduces a new mechanic, seasonal journey, and fresh economy. Create a new seasonal character. Renown, Altars of Lilith, and map exploration carry over.</p>

<h2>Season Journey</h2>
<p>Objectives organized into chapters. Rewards: aspects, cosmetics, Smoldering Ashes. Ashes unlock seasonal blessings — XP and resource finding boosts.</p>

<h2>Notable Season Themes</h2>
<h3>Season 1 — Malignant</h3>
<p>Introduced Malignant Hearts — socketable items with powerful bonuses. 32 hearts across four categories.</p>

<h3>Season 2 — Blood</h3>
<p>Vampiric Powers with five active effects. The Metamorphosis power was a fan favorite.</p>

<h3>Season 3 — Construct</h3>
<p>Seneschal Companion — customizable robot ally with governing and tuning stones.</p>`;

GUIDES['diablo-4-beginner-tips'] = `<h2>Choosing Difficulty</h2>
<p>World Tier 1 for beginners, Tier 2 for 20% more XP. Switch to Tier 3 (Nightmare) at level 50 for Sacred items. Tier 4 (Torment) at level 70 for Ancestral items.</p>

<h2>Loot Priorities</h2>
<ul>
<li>Weapon DPS first — biggest damage factor</li>
<li>Core stats for your class</li>
<li>Vulnerability damage — 20% more damage taken</li>
<li>Critical Strike Chance for consistent DPS</li>
<li>Cooldown Reduction for skill uptime</li>
</ul>

<h2>Crafting Basics</h2>
<p>Salvage unwanted gear at the Blacksmith. Enchant at the Occultist to reroll one stat. Socket gems for bonuses. Upgrade weapons first.</p>`;

// ── Palworld ────────────────────────────────────────────────────────────
GUIDES['palworld-walkthrough'] = `<h2>Starting Out</h2>
<p>Stranded on a beach. Punch trees for wood and stones. Craft a Stone Pickaxe, build a Primitive Workbench, chest, and straw bed. Tame your first Pal with Pal Spheres. Build a small enclosed base with walls before the first night.</p>

<h2>Base Setup</h2>
<p>Key buildings: Palbox, Berry Plantation, Logging Site, Stone Pit. Assign Pals with matching work suitability. Upgrade base level by catching more Pals.</p>

<h2>Early Progression</h2>
<p>Priority technology: Pal Sphere, Palbox, Berry Plantation, High Quality Workbench, Saddles. The first boss tower (Zoe and Grizzbolt) at the Rayne Syndicate Tower — recommended level 10-15.</p>`;

GUIDES['palworld-pal-locations'] = `<h2>Early Game Pals (Levels 1-15)</h2>
<ul>
<li><strong>Lamball:</strong> Everywhere in starting area — farming and wool</li>
<li><strong>Cattiva:</strong> Starting area — handiwork and mining</li>
<li><strong>Foxparks:</strong> Near Rayne Syndicate — kindling</li>
<li><strong>Sparkit:</strong> Desert regions — electricity</li>
</ul>

<h2>Mid Game Pals (Levels 15-30)</h2>
<ul>
<li><strong>Vanwyrm:</strong> Volcanic regions — flying mount and transport</li>
<li><strong>Surfent:</strong> Water areas — water mount</li>
<li><strong>Reptyro:</strong> Desert mining — mining specialist</li>
<li><strong>Bushi:</strong> Bamboo groves — high damage fighter</li>
</ul>

<h2>Rare Pals</h2>
<h3>Jetragon</h3>
<p>Fastest flying mount, volcanic region. Requires level 50 and Ultra Spheres.</p>

<h3>Paladius and Necromus</h3>
<p>Legendary Pals in sanctuaries. Need to defeat guardians first.</p>

<h3>Frostallion</h3>
<p>Ice-type legendary in snowy mountain peaks. Bring fire-type Pals to counter.</p>`;

GUIDES['palworld-base-building'] = `<h2>Base Layout Principles</h2>
<p>Palbox must be the center. Place Berry Plantation near Feed Box. Logging Site and Stone Pit near storage. Leave open space for future buildings.</p>

<h2>Automation Setup</h2>
<p>Assign Pals by work suitability: Kindling (furnace), Mining (stone pit), Transporting (carry items), Handiwork (crafting). Build a Monitoring Stand for oversight.</p>

<h2>Defensive Structures</h2>
<p>Raids scale with base level. Build stone walls, mounted crossbows at chokepoints, and spike traps. Keep fighting Pals on combat standby.</p>`;

GUIDES['palworld-breeding'] = `<h2>Breeding Basics</h2>
<p>Build a Breeding Farm and assign two Pals. Provide Cake to start. The offspring's species is determined by hidden breeding values.</p>

<h2>Best Combos</h2>
<p><strong>Anubis:</strong> Bushi + Azurobe. Best handiwork specialist.<br><strong>Jetragon:</strong> Breed from high-level volcanic and dark Pals.<br><strong>Frostallion:</strong> Orserk + Helzephyr.</p>

<h2>Power Breeding</h2>
<p>Best traits: Legendary (+30% attack), Ferocious (+20%), Musclehead (+30%, -50% defense), Swift (+30% speed). Use condensing to sacrifice duplicates.</p>`;

GUIDES['palworld-beginner-tips'] = `<h2>Starting Strategies</h2>
<p>Start small: Palbox, straw bed, chest, campfire. Tame 3-4 Lamballs. Craft Pal Spheres as fast as possible. Focus on Berry Plantation and Logging Site before exploring.</p>

<h2>Pal Types</h2>
<p>Fire beats Grass, Grass beats Ground, Ground beats Electric, Electric beats Water, Water beats Fire. Dark beats Neutral, Dragon beats Dark, Ice beats Dragon.</p>

<h2>Resource Priorities</h2>
<ul>
<li>Early: Wood, Stone, Paldium Fragments</li>
<li>Mid: Ore, Coal, Sulfur</li>
<li>Late: High Quality Pal Oil, Polymer, Carbon Fiber</li>
</ul>`;

// ── FF7 Rebirth ────────────────────────────────────────────────────────
GUIDES['ff7-rebirth-walkthrough'] = `<h2>Chapter 1 — Fall of the Forgotten</h2>
<p>Picks up after Remake. Cloud leaves Midgar for the Grasslands. Introduces world map exploration, chocobo riding, side quests, and Chadley's combat intel.</p>

<h2>Chapter 2 — A New Journey Begins</h2>
<p>Reach Kalm and learn more about Sephiroth's plan. The Junon region opens with Shinra's military installation.</p>

<h2>Chapter 3 — Deceptive Waters</h2>
<p>Costa del Sol's beach mini-games before confronting Jenova-Life at the harbor. Queen's Blood tournament here.</p>

<h2>Chapters 4-8</h2>
<p>Gongaga reactor, Nibelheim's past, Cosmo Canyon's connection to Red XIII, the Temple of the Ancients, and the Forgotten Capital's emotional climax.</p>

<h2>Final Chapters</h2>
<p>The Northern Crater. Cloud's identity crisis peaks. Multi-phase Sephiroth fight is the ultimate challenge.</p>`;

GUIDES['ff7-rebirth-materia'] = `<h2>Materia Types</h2>
<p>Magic (spells), Command (actions), Support (enhancements), Complete (passives), Summon (summons).</p>

<h3>Key Magic Materia</h3>
<ul>
<li><strong>Fire/Ice/Lightning/Wind:</strong> Pair with Elemental Support for affinity</li>
<li><strong>Healing:</strong> Cure, Cura, Curaga always equipped</li>
<li><strong>Revival:</strong> Arise for full revive</li>
<li><strong>Time:</strong> Haste doubles ATB fill rate</li>
</ul>

<h2>Best Combos</h2>
<p><strong>Elemental + Fire on armor:</strong> Absorbs fire damage.<br><strong>MP Absorption + Spell:</strong> Recovers MP on cast.<br><strong>Auto-Cure + Healing:</strong> Party auto-heals.</p>

<h2>Synergy Skills</h2>
<p>Cloud + Aerith's "Soulmate" for magic damage. Cloud + Tifa's "Iron Fist" for stagger. Red XIII + Aerith's "Warding Light" for defense.</p>`;

GUIDES['ff7-rebirth-side-activities'] = `<h2>Queen's Blood</h2>
<p>Strategic card placement game. Cards have power values on edges. Open with high-side cards. Win all matches for exclusive cards.</p>

<h2>VR Missions</h2>
<p>Chadley's simulations fight powerful summons. Three Stars battle requires defeating all phases. Hard mode VR is the toughest combat challenge.</p>

<h2>World Intel</h2>
<p>Defeat enemies, find lifsprings, discover chrystaline deposits, locate protorelics. Completing all intel unlocks the region's summon fight.</p>

<h2>Mini-Games</h2>
<p>Chocobo racing, Fort Condor tower defense, piano performances, squat challenges. Each has ranking tiers with unique rewards.</p>`;

GUIDES['ff7-rebirth-characters'] = `<h2>Cloud Strife</h2>
<p>DPS/Tank hybrid. Operator mode for balance, Punisher for counter-attacks. Focused Thrust builds stagger. Cross-Slash Limit Break is devastating.</p>

<h2>Tifa Lockhart</h2>
<p>Stagger queen. Unbridled Strength increases martial arts level. During stagger, Rise and Fall extends the window.</p>

<h2>Aerith Gainsborough</h2>
<p>Magic nuker. Arcane Ward doubles spell casting speed. Tempest builds ATB rapidly. Keep at range and protect her.</p>

<h2>Barret Wallace</h2>
<p>Tank/ranged DPS. Provoke draws aggro, Lifesaver redirects damage. Essential for boss fights needing a reliable tank.</p>

<h2>Best Party Comps</h2>
<p><strong>Stagger Meta:</strong> Cloud + Tifa + Aerith. <strong>Sustained:</strong> Cloud + Barret + Aerith. <strong>Speedrun:</strong> Cloud + Tifa + Yuffie.</p>`;

GUIDES['ff7-rebirth-beginner-tips'] = `<h2>Combat Basics</h2>
<p>ATB fills with attacks. Use basic attacks to build gauge, then spend on high-value abilities. Switch between party members constantly.</p>

<h2>Stagger Mechanics</h2>
<p>Fill the stagger gauge to massively increase damage. Different abilities fill at different rates. During stagger, extend the window then dump your strongest attacks.</p>

<h2>Weapon Upgrades</h2>
<p>Each weapon has an SP tree. Focus attack power first, then critical hit rate. Max one weapon per character before moving on.</p>

<h3>Exploration Tips</h3>
<ul>
<li>Use Chocobos for fast travel</li>
<li>Combat intel rewards unlock materia and upgrades</li>
<li>Rest at inns before boss fights</li>
<li>Fast travel to any discovered Rest Spot</li>
</ul>`;

// ── Palia ───────────────────────────────────────────────────────────────
GUIDES['palia-walkthrough'] = `<h2>Starting in Kilima Village</h2>
<p>Wake up in a mysterious glade. Meet villagers, learn basic skills (foraging, mining, hunting, fishing), establish your housing plot. Talk to every villager for intro quests and recipes.</p>

<h2>Early Progression</h2>
<p>Follow Subira's quests. Get a housing plot, build basic furniture. Zeki sells essential tools. Focus on mining and foraging initially — they're the most profitable.</p>

<h2>Skill Unlocks</h2>
<p>Five skills: Foraging, Mining, Hunting, Fishing, Cooking. Level 2 unlocks new recipes, Level 5 more tools. Cooking is the ultimate gold-maker.</p>`;

GUIDES['palia-cooking'] = `<h2>The Recipe System</h2>
<p>Gather ingredients, prepare at prep station, cook at fire or oven. Higher-quality ingredients produce higher-quality dishes.</p>

<h2>Ingredient Sources</h2>
<ul>
<li>Foraged: Berries, mushrooms, herbs</li>
<li>Grown: Tomatoes, wheat, rice, potatoes</li>
<li>Hunted: Meat from chapaa, muujin, sernuk</li>
<li>Fished: Time of day and weather affect catches</li>
<li>Purchased: Zeki sells butter, flour, sugar</li>
</ul>

<h2>Best Recipes for Gold</h2>
<p><strong>Early:</strong> Grilled Meat, Fried Fish, Mushroom Soup.<br><strong>Mid:</strong> Tomato Soup, Fish Stew, Steak Dinner.<br><strong>Late:</strong> Baharian Fish Stew (500+ gold), Celebration Cake.</p>`;

GUIDES['palia-crafting'] = `<h2>Furniture Crafting</h2>
<p>Recipes unlocked through skills, quests, and Zeki's shop. Higher decoration value = better comfort rating = faster energy recovery. Priority: Comfortable Bed, Storage Chests.</p>

<h2>Tool Upgrades</h2>
<p>Standard → Fine → Exquisite tier for each tool. Each tier dramatically improves efficiency. The Fine Pickaxe doubles mining speed.</p>

<h2>Material Sources</h2>
<p>Wood from foraging/chopping. Stone/Ore from mining. Leather from hunting. Fabric from growing cotton. Build Sawmill and Smelter to process materials.</p>`;

GUIDES['palia-romance'] = `<h2>Romanceable Characters</h2>
<p>Caleri (farmer, loves apples), Hassian (hunter, loves hunting trophies), Jel (fashion designer, loves fine fabric), Tish (architect, loves refined materials).</p>

<h2>Building Romance</h2>
<p>Give favorite gifts (3x relationship points), complete personal quests, spend time at village events. Progress: Acquaintance → Friend → Close Friend → Romantic Interest → Partner.</p>

<h2>Gift Guide</h2>
<p>One gift per day per villager. Focus on Loved gifts. Check the relationship menu for hints. Weekly dates give the biggest relationship boost.</p>`;

GUIDES['palia-beginner-tips'] = `<h2>Starting Area Guide</h2>
<p>Kilima Village is home base. Learn City Hall, Zeki's, Ormuu Farm, fishing pond. Build bed and storage chest immediately. Don't venture to Bahari Bay without Fine tools.</p>

<h2>Skill Priorities</h2>
<p>Foraging and Mining first for consistent income. Hunting at level 3+. Fishing slowest to level but most profitable at high levels. Cooking multiplies ingredient value.</p>

<h2>Economy Basics</h2>
<ul>
<li>Sell at the shipping bin for full price</li>
<li>Cook before selling — processed items sell for more</li>
<li>Check Zeki's weekly wants for premium prices</li>
<li>Grow tomatoes and wheat for profitable recipes</li>
<li>Don't buy what you can gather</li>
</ul>`;

// ── Black Myth Wukong ──────────────────────────────────────────────────
GUIDES['wukong-walkthrough'] = `<h2>Chapter 1 — The Black Wind Mountain</h2>
<p>Begin the Destined One's journey. Key encounters: Wandering Wight (hidden boss — return later), Guangzhi monk, Black Bear Guai. The stance system is introduced: Smash (aggressive), Pillar (evasive), Thrust (precision). After the Black Bear Guai, unlock Fire transformation.</p>

<h2>Chapter 2 — Yellow Wind Ridge</h2>
<p>Desert landscape with sandstorms. Key bosses: Tiger Vanguard (tests dodge timing), Stone Vanguard (punish recovery frames), Yellow Wind Sage. Unlock Spellbinding ability (immobilize enemies).</p>

<h2>Chapter 3 — The New West</h2>
<p>Snowy region with atmospheric environments. Yin Tiger is the gatekeeper — lightning-fast attacks. Kang-Jin Loong is a massive dragon fight. Unlock Freeze Spell.</p>

<h2>Chapter 4 — The Webbed Hollow</h2>
<p>Claustrophobic nightmare of spider silk. Hundred-Eyed Daoist boss requires constant movement and poison resistance. Unlock Violet Spider transformation.</p>

<h2>Chapter 5 — Mount Huaguo</h2>
<p>The final chapter. Bull King is a multi-phase fight. The true final boss, Erlang Shen, is secret — triggered by completing all hidden objectives.</p>`;

GUIDES['wukong-boss-guide'] = `<h2>Erlang Shen</h2>
<p>True final boss, hidden behind completing all secret area objectives. Hardest boss in the game. Use Pillar Stance for evasion. Pluck of Many creates clones to distract. His phase two adds a hound companion — kill it first. Recommended: level 80+.</p>

<h2>Yin Tiger</h2>
<p>Location: Chapter 3. His sword combos have 6-7 hit strings. Dodge INTO his attacks. His leap attack has massive range but long recovery — punish with a full combo.</p>

<h2>Yellowbrow</h2>
<p>Location: Chapter 2. Fights with golden lightning and mace. Phase two creates clones — the real one glows brighter. Use Spellbinding to immobilize him.</p>

<h2>Bull King</h2>
<p>Location: Chapter 5. Charge attack tells (stomps twice) — dodge right. Phase two arena floods with fire — use elevated platforms. Rage mode makes him faster but more predictable.</p>`;

GUIDES['wukong-spells'] = `<h2>Core Spells</h2>
<h3>Immobilize</h3>
<p>Freezes an enemy for 3-5 seconds. Use to interrupt combos, create healing windows, or set up damage combos. Upgrade priority: HIGH.</p>

<h3>Ring of Fire</h3>
<p>Fire circle dealing damage over time for 10 seconds. Applies burn debuff that stacks. Use at boss fight start.</p>

<h3>Spellbinding</h3>
<p>Area stun — all enemies in front briefly stunned. Essential for crowd control.</p>

<h3>Freeze Spell</h3>
<p>Frost wave freezes enemies for 4 seconds. Frozen enemies take 30% more damage (50% upgraded). Best setup spell.</p>

<h2>Transformations</h2>
<p><strong>Fire Form</strong> (Ch 1): Fast attacks with burn.<br><strong>Spider Form</strong> (Ch 4): Web attacks and poison.<br><strong>Stone Form</strong> (Ch 2): High defense, slow power.</p>

<h2>Stance Changes</h2>
<p><strong>Smash:</strong> Aggressive, high stagger.<br><strong>Pillar:</strong> Evasive, best for learning patterns.<br><strong>Thrust:</strong> Precise, long-range pokes.</p>`;

GUIDES['wukong-secrets'] = `<h2>Hidden Areas</h2>
<p><strong>Ancient Guanyin Temple:</strong> Ring all three hidden bells in Chapter 1. Contains Elder Jinchi boss and Fireproof Mantle.</p>
<p><strong>Painted Realm:</strong> Chapter 3 — find the painting on the frozen lake cliff wall. Bonus dungeon with Frost Ceremonial Staff.</p>
<p><strong>Purple Cloud Temple:</strong> Chapter 4 — behind waterfall in Webbed Hollow. Centipede Guai boss and poison resistance spirit.</p>

<h2>Secret Bosses</h2>
<p><strong>Erlang Shen:</strong> Complete all hidden objectives across all chapters.<br><strong>Four Heavenly Kings:</strong> Hidden shrine boss per chapter. All four unlock a bonus cutscene.</p>

<h2>Rare Items</h2>
<ul>
<li><strong>Wukong's Headband:</strong> Platforming challenge on floating clouds</li>
<li><strong>Ruyi Jingu Bang:</strong> Ultimate staff behind sealed door</li>
<li><strong>Golden Cicada Shell:</strong> 12 pieces across all chapters — grants unlimited transformation</li>
</ul>`;

GUIDES['wukong-beginner-tips'] = `<h2>Combat Basics</h2>
<p>Light attacks build Focus. Heavy attacks consume Focus for powerful strikes. Consecutive hits increase damage multiplier. Never overcommit to a combo when a boss is about to attack.</p>

<h2>Stance Switching</h2>
<p>Start fights in Pillar Stance. Switch to Smash once you know the patterns. Thrust is niche but excellent against fast bosses. Stance-switch combos deal bonus damage.</p>

<h2>Resource Management</h2>
<ul>
<li>Carry multiple Gourd charges — upgrade at shrines</li>
<li>Spread Spirit Points across most-used abilities</li>
<li>Always keep 1 dodge worth of stamina</li>
<li>Use heavy attacks to spend Focus and deal burst damage</li>
</ul>

<h3>Exploration Tips</h3>
<p>Check behind every shrine. Collect Spirit orbs for upgrades. Talk to NPCs multiple times. Skip the Wandering Wight in Chapter 1 and return later.</p>`;

// ── Game Detail Content ────────────────────────────────────────────────

const GAME_DETAILS = {
  'elden-ring': {
    about: `<p>Elden Ring is an action RPG developed by FromSoftware and published by Bandai Namco, with worldbuilding contributions from George R.R. Martin. Released in February 2022, it quickly became one of the highest-rated games of all time, winning Game of the Year at The Game Awards. The game features a vast open world called the Lands Between, where players explore on foot or horseback (via the spectral steed Torrent) while discovering dungeons, catacombs, and legacy dungeons that recall the intricate level design of the Dark Souls series.</p>
<p>At its core, Elden Ring is about exploration-driven gameplay. Unlike previous FromSoftware titles with linear or branching paths, the Lands Between offers near-complete freedom from the start. Players can spend dozens of hours in Limgrave alone before ever entering Stormveil Castle, or they can speed-run to late-game areas for powerful equipment early. This freedom, combined with the series' signature challenging combat and cryptic storytelling, creates an experience that rewards curiosity and perseverance.</p>`,
    features: [
      'Vast open world with seamless exploration on foot or spectral steed Torrent',
      'Deep character customization with hundreds of weapons, spells, and Ashes of War',
      'Challenging boss encounters including over 80 unique bosses',
      'Spirit Ash summoning system for AI companions in combat',
      'Extensive multiplayer with cooperative and invasive PvP modes',
      'Cryptic environmental storytelling and lore crafted with George R.R. Martin',
      'Massive legacy dungeons including Stormveil Castle and Leyndell',
      'New Game+ with scaled difficulty and new content discoveries'
    ]
  },
  'zelda-totk': {
    about: `<p>The Legend of Zelda: Tears of the Kingdom is the 2023 sequel to Breath of the Wild, developed by Nintendo EPD. Set in the same version of Hyrule but dramatically expanded with sky islands and an underground Depths region, TOTK builds on its predecessor's physics-based sandbox with four new abilities: Ultrahand, Fuse, Ascend, and Recall. These abilities transform every encounter and puzzle into a creative exercise with multiple valid solutions.</p>
<p>The game follows Link as he awakens on a sky island after a cataclysmic event beneath Hyrule Castle. Ganondorf has returned, and the land is plagued by Gloom — a substance that drains hearts and corrupts everything it touches. With the Master Sword damaged and Zelda missing, Link must reunite with the Sages, recover the Master Sword, and confront Ganondorf in a story that ties together 35 years of Zelda lore.</p>`,
    features: [
      'Three-layered world: Sky islands, Surface Hyrule, and the Depths',
      'Four creative abilities: Ultrahand, Fuse, Ascend, and Recall',
      '152 Shrines with physics-based puzzles and combat challenges',
      'Vehicle and structure building with Zonai devices',
      'Expanded combat with Fuse weapon augmentation system',
      'Deep crafting with cooking, elixirs, and armor upgrades',
      'Full sequel story connecting to Breath of the Wild lore',
      'Massive open world with dynamic weather and physics systems'
    ]
  },
  'baldurs-gate-3': {
    about: `<p>Baldur's Gate 3 is a CRPG developed by Larian Studios, released in August 2023 after a lengthy early access period. Based on Dungeons & Dragons 5th Edition, it brings the tabletop experience to life with turn-based combat, extensive dialogue trees, and player choices that genuinely reshape the story. The game won Game of the Year at The Game Awards 2023 and is widely considered one of the greatest RPGs ever made.</p>
<p>Set in the Forgotten Realms' Sword Coast, the story begins when your character is implanted with a mind flayer tadpole. You must find a cure before ceremorphosis transforms you into a mind flayer, while navigating a web of factional conflicts, divine machinations, and personal companion stories that respond to every decision you make. With over 170 hours of cinematics and millions of dialogue permutations, no two playthroughs are alike.</p>`,
    features: [
      'Turn-based combat using D&D 5th Edition rules with creative environmental interactions',
      'Deep character customization with 12 classes and 46 subclasses',
      '7 origin companions with full romance arcs and personal questlines',
      'Player choices that fundamentally alter the story across 3 massive acts',
      'Cooperative multiplayer for up to 4 players',
      'Extensive crafting, enchanting, and alchemy systems',
      'Over 170 hours of cinematic dialogue and cutscenes',
      'Detailed reactivity — NPCs remember your choices and relationships shift accordingly'
    ]
  },
  'hogwarts-legacy': {
    about: `<p>Hogwarts Legacy is an action RPG developed by Avalanche Software and published by Warner Bros. Games in February 2023. Set in the late 1800s — a century before Harry Potter's time — the game lets you create your own witch or wizard and attend Hogwarts as a uniquely gifted fifth-year student with the ability to perceive and wield Ancient Magic.</p>
<p>The open world encompasses Hogwarts Castle, Hogsmeade village, the Forbidden Forest, and the surrounding Scottish Highlands. The game captures the wonder of the Wizarding World with meticulously recreated interiors, dynamic seasons, and a spell combat system that combines dueling mechanics with creative spell combinations. The main story revolves around a goblin rebellion led by Ranrok and the mystery of Ancient Magic — a power that threatens to upset the balance between the wizarding and non-magical worlds.</p>`,
    features: [
      'Fully explorable Hogwarts Castle with secret passages and hidden rooms',
      '31 spells across 5 categories for combat and exploration',
      'Character creation with house selection and unique house questlines',
      'Open world including Hogwarts, Hogsmeade, Forbidden Forest, and Highlands',
      'Room of Requirement for customized base building and plant growing',
      'Dynamic beast taming and creature care in Vivariums',
      '150 Field Guide Pages and 95 Merlin Trials for collectible hunters',
      'Talent system with 48 upgrades across spell, core, stealth, and dark arts trees'
    ]
  },
  'starfield': {
    about: `<p>Starfield is Bethesda Game Studios' first new IP in over 25 years, released in September 2023. It's a space RPG set in the year 2330, where humanity has expanded across the Settled Systems — a region of space spanning over 1,000 planets. The game features Bethesda's signature open-world design scaled to a galactic level, with over 1,000 explorable planets, deep faction questlines, and the most detailed ship builder in any RPG.</p>
<p>The story follows your character as a miner who discovers an Artifact that triggers visions connected to the Unity — a mysterious cosmic phenomenon. Recruited by Constellation, the last group of space explorers, you travel across star systems collecting Artifacts and uncovering the truth about the multiverse. The game's New Game+ system is unique: entering the Unity sends you to a parallel universe where you retain your skills but start fresh, with new dialogue reflecting your interdimensional nature.</p>`,
    features: [
      'Over 1,000 explorable planets across multiple star systems',
      'Deep ship builder with modular design and combat customization',
      'Outpost building system for resource extraction and manufacturing',
      'Five major faction questlines with branching story outcomes',
      'New Game+ with multiverse mechanics and unique dialogue',
      'Comprehensive crafting, base building, and resource management',
      'Space combat with power distribution and ship boarding mechanics',
      'Over 80 hours of faction and side quest content'
    ]
  },
  'diablo-4': {
    about: `<p>Diablo IV is the latest entry in Blizzard's iconic action RPG franchise, released in June 2023. Returning to the dark, gothic tone of Diablo II, the game features an open-world Sanctuary with five distinct regions, a deeply customizable character system, and a live-service seasonal model. Lilith, daughter of Mephisto, has returned to Sanctuary, and her influence corrupts everything she touches.</p>
<p>The game marks a significant evolution for the franchise with its open-world structure, shared social spaces, and seasonal content that keeps the experience fresh. Each of the five classes offers dramatically different playstyles, and the endgame systems — Helltides, Nightmare Dungeons, The Pit, and Uber Bosses — provide hundreds of hours of progression.</p>`,
    features: [
      'Five distinct classes: Sorcerer, Barbarian, Rogue, Necromancer, and Druid',
      'Open-world Sanctuary with five explorable regions',
      'Seasonal content with new mechanics every three months',
      'Deep endgame: Helltides, Nightmare Dungeons, The Pit, and Uber Bosses',
      'Extensive character customization with skill trees and paragon boards',
      'World Bosses and shared social events in the open world',
      'PvP zones in the Fields of Hatred',
      'Live-service model with regular balance updates and new content'
    ]
  },
  'palworld': {
    about: `<p>Palworld is a survival crafting game developed by Pocket Pair, released in Early Access in January 2024. Dubbed "Pokémon with guns" by the internet, the game combines creature collection with base building, automation, and survival mechanics. Players capture Pals — creatures with unique abilities and work specializations — and use them for combat, resource gathering, and base automation.</p>
<p>The game's unique selling point is its automation system. Pals assigned to your base automatically perform tasks matching their skills: mining, logging, farming, crafting, cooling, kindling, and transporting. This creates a satisfying loop where exploration feeds resources into your base, which produces better equipment for further exploration.</p>`,
    features: [
      'Over 100 capturable Pals with unique abilities and work specializations',
      'Deep base building with automated resource gathering and crafting',
      'Breeding system for trait inheritance and power breeding',
      'Boss tower encounters across the map',
      'Mount system — ride flying, ground, and water Pals',
      'Ranch system for passive resource generation from specific Pals',
      'Cooperative multiplayer for up to 4 players',
      'Survival mechanics including hunger, temperature, and base defense'
    ]
  },
  'ff7-rebirth': {
    about: `<p>Final Fantasy VII Rebirth is the second installment of Square Enix's FF7 Remake project, released in February 2024. Picking up where Remake left off, the game transitions from Midgar's linear corridors to a vast open world spanning the Grasslands, Junon, Costa del Sol, Corel, Gongaga, Cosmo Canyon, Nibelheim, and the Forgotten Capital.</p>
<p>Rebirth's combat builds on Remake's ATB system with Synergy abilities — cooperative attacks between party members that build ATB faster and extend stagger windows. The open world is packed with side content: Chocobo racing, Queen's Blood card game, VR combat simulations, piano performances, and region-specific world intel objectives.</p>`,
    features: [
      'Expansive open world with 7 distinct regions beyond Midgar',
      'Synergy combat system with cooperative attacks between party members',
      '9 playable characters with unique abilities and weapon skill trees',
      'Queen\'s Blood strategic card game with tournament progression',
      'Chocobo breeding and racing mini-game',
      'Deep materia system with new support and synergy combinations',
      'Multiple mini-games including piano, Fort Condor, and squat challenges',
      'Divergent storyline exploring alternate timelines and fate'
    ]
  },
  'palia': {
    about: `<p>Palia is a cozy community simulation MMO developed by Singularity 6, released in 2023. Set in a high-fantasy world where humans mysteriously disappeared ages ago and have only recently begun returning, the game focuses on building relationships, developing skills, and creating a home in the village of Kilima. Unlike most MMOs, Palia has no combat — the focus is entirely on gathering, crafting, cooking, and socializing.</p>
<p>The game's charm lies in its relaxed pacing and social features. You forage for ingredients, grow crops, mine ores, fish, and cook elaborate meals. The romance system lets you develop relationships with village NPCs, each with personal questlines. Multiplayer elements include visiting other players' homes and participating in community projects.</p>`,
    features: [
      'Five skill systems: Foraging, Mining, Hunting, Fishing, and Cooking',
      'Full housing system with furniture crafting and decoration',
      'Romance system with multiple eligible villagers',
      'Cozy MMO features: visiting friends, village events, community projects',
      'Garden growing system for crops and cooking ingredients',
      'Dynamic world with weather, time-of-day, and seasonal changes',
      'Deep cooking system with 50+ recipes and ingredient combinations',
      'Regular content updates with new villagers, recipes, and story chapters'
    ]
  },
  'wukong': {
    about: `<p>Black Myth: Wukong is an action RPG developed by Game Science, released in August 2024. Based on the classic Chinese novel Journey to the West, the game follows the Destined One — a monkey warrior seeking to collect the relics of Sun Wukong. It's a Souls-like experience with Chinese mythology, featuring stunning visuals built on Unreal Engine 5 and a combat system built around stance switching, spell casting, and transformations.</p>
<p>The game's combat distinguishes itself through its stance system (Smash, Pillar, and Thrust stances) and the spell/transformation mechanics. Spells like Immobilize, Ring of Fire, and Freeze create tactical openings, while boss-defeat transformations temporarily replace your moveset. The game's 80+ bosses are meticulously designed with unique mechanics inspired by Journey to the West mythology.</p>`,
    features: [
      'Stance-based combat with Smash, Pillar, and Thrust fighting styles',
      '80+ unique boss encounters inspired by Chinese mythology',
      'Spell system with Immobilize, Freeze, Ring of Fire, and more',
      'Boss-defeat transformations that replace your moveset temporarily',
      'Journey to the West storyline with mythological bosses and settings',
      'Hidden areas and secret bosses including the true final boss Erlang Shen',
      'Spirit upgrade system for spell and ability enhancement',
      'Stunning Unreal Engine 5 visuals with detailed Chinese architectural environments'
    ]
  }
};

// ═══════════════════════════════════════════════════════════════════════
// Helper
// ═══════════════════════════════════════════════════════════════════════

function guideTitle(guide) {
  const map = {
    'walkthrough':'Walkthrough','boss-guide':'Boss Guide','builds':'Builds Guide',
    'secrets':'Secrets & Hidden Areas','beginner-tips':'Beginner Tips',
    'shrines':'Shrine Guide','side-quests':'Side Quests','abilities':'Abilities Guide',
    'class-builds':'Class Builds','romance':'Romance Guide','companions':'Companions Guide',
    'spells':'Spells Guide','collectibles':'Collectibles Guide','houses':'Houses Guide',
    'ship-building':'Ship Building Guide','outposts':'Outpost Guide','factions':'Factions Guide',
    'endgame':'Endgame Guide','seasons':'Seasons Guide','pal-locations':'Pal Locations',
    'base-building':'Base Building Guide','breeding':'Breeding Guide',
    'materia':'Materia Guide','side-activities':'Side Activities','characters':'Characters Guide',
    'cooking':'Cooking Guide','crafting':'Crafting Guide'
  };
  return map[guide] || guide.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GUIDES, GAME_DETAILS, guideTitle };
}
