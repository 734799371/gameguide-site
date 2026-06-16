#!/usr/bin/env node
'use strict';

// game-data.js — Guide content for games 4-10
// This file is require()'d by generate-pages.js

module.exports = {
// ═════════════════════════════════════════
//  HOGWARTS LEGACY
// ═════════════════════════════════════════
"hogwarts-legacy": {
  about: `<p><strong>Hogwarts Legacy</strong>, developed by Avalanche Software and published by Warner Bros. Games, is an open-world action RPG set in the Wizarding World of Harry Potter, but in the 1800s &mdash; long before Harry's time. Released in February 2023, it became the best-selling game of that year with over 22 million copies sold.</p>
<p>You play as a fifth-year student who starts Hogwarts late due to a unique connection to <strong>Ancient Magic</strong>. As you navigate school life, learn spells, and uncover a goblin rebellion led by Ranrok, you'll explore a fully realized Hogwarts Castle, the surrounding Highlands, Hogsmeade, and the Forbidden Forest.</p>
<p>The game features over 30 spells, a deep talent tree, potion crafting, magical creature tending, and an enormous open world filled with puzzles, dungeons, and secrets.</p>`,
  walkthrough: `<h2>Your First Days at Hogwarts</h2>
<p>Your first days involve the <strong>Sorting Ceremony</strong>, introductory classes, and learning basic spells. Priority tasks:</p>
<ul>
<li>Complete all available class assignments &mdash; they unlock new spells essential for exploration</li>
<li>Attend <strong>Defence Against the Dark Arts</strong> early &mdash; Levioso and Incendio are combat fundamentals</li>
<li>Explore the castle thoroughly &mdash; Field Guide Pages are everywhere and provide XP</li>
<li>Visit <strong>Hogsmeade</strong> for gear upgrades and potion ingredients</li>
</ul>
<h2>Mid-Game &mdash; Ancient Magic &amp; Ranrok's Plot</h2>
<p>The main story intensifies as you learn about Isidora Morganach's Ancient Magic and Ranrok's goblin rebellion:</p>
<ul>
<li><strong>Pensieve memories</strong> reveal the history of Ancient Magic and its dangers</li>
<li><strong>Victor Rookwood's</strong> dark wizards ally with Ranrok &mdash; confront them in story dungeons</li>
<li>Keep pace with class assignments &mdash; new spells like Confringo and Diffindo are essential</li>
<li>Side content becomes available: <strong>Merlin Trials</strong>, <strong>Daedalian Keys</strong>, <strong>Demiguise Statues</strong></li>
</ul>
<h2>Late Game &mdash; The Final Repository</h2>
<p>The climax involves accessing the <strong>Final Repository</strong> beneath Hogwarts:</p>
<ul>
<li>Prepare with your best gear and potions before the final sequence</li>
<li>The final boss fight against Ranrok's dragon form requires strong spell combos</li>
<li>Multiple endings depend on your choices regarding Ancient Magic</li>
<li>Post-game: All side content remains accessible for completion</li>
</ul>`,
  spells: `<p>Spells are your primary tools for combat, exploration, and puzzle solving. Understanding when and how to use each one is key to mastering Hogwarts Legacy.</p>
<h2>Essential Combat Spells</h2>
<ul>
<li><strong>Levioso</strong> &mdash; Lifts enemies into the air, making them vulnerable. Your most important combo starter</li>
<li><strong>Incendio</strong> &mdash; Short-range fire spell. Deals high damage and breaks red shields</li>
<li><strong>Confringo</strong> &mdash; Long-range fire spell. Essential for hitting distant enemies and mechanisms</li>
<li><strong>Diffindo</strong> &mdash; Slashing spell that deals massive single-target damage at range</li>
<li><strong>Glacius</strong> &mdash; Freezes enemies, making them take bonus damage from follow-up attacks</li>
<li><strong>Accio</strong> &mdash; Pulls enemies toward you. Excellent for grouping mobs for AoE spells</li>
</ul>
<h2>Force &amp; Control Spells</h2>
<ul>
<li><strong>Depulso</strong> &mdash; Pushes enemies away. Useful for environmental kills (pushing off edges)</li>
<li><strong>Arresto Momentum</strong> &mdash; Slows enemies in place. Great for setting up big combos</li>
<li><strong>Transform</strong> &mdash; Turns enemies into explosive barrels. Shoot with Confringo for massive damage</li>
<li><strong>Descendo</strong> &mdash; Slams levitated enemies into the ground for heavy damage</li>
</ul>
<h2>Best Spell Combos</h2>
<ul>
<li><strong>Levioso &rarr; Basic Attack &rarr; Descendo</strong> &mdash; The bread-and-butter combo for single targets</li>
<li><strong>Accio &rarr; Incendio</strong> &mdash; Pull enemies in, then blast them at close range</li>
<li><strong>Glacius &rarr; Diffindo</strong> &mdash; Freeze for bonus damage, then slash for a kill</li>
<li><strong>Transform &rarr; Confringo</strong> &mdash; Turn enemy into barrel, then explode it</li>
</ul>
<h2>Exploration Spells</h2>
<ul>
<li><strong>Revelio</strong> &mdash; Reveals hidden objects and collectibles nearby. Spam this constantly</li>
<li><strong>Lumos</strong> &mdash; Light source for dark areas and atracts certain magical creatures</li>
<li><strong>Disillusionment</strong> &mdash; Invisibility for sneaking past enemies and accessing restricted areas</li>
<li><strong>Wingardium Leviosa</strong> &mdash; Moves and positions objects for puzzle solving</li>
</ul>`,
  collectibles: `<p>Hogwarts Legacy features an enormous number of collectibles scattered across the castle and Highlands. Here's a guide to finding the most important ones.</p>
<h2>Field Guide Pages (150+)</h2>
<p>These provide XP for leveling and are found everywhere:</p>
<ul>
<li>Use <strong>Revelio</strong> constantly &mdash; pages appear as floating golden scrolls on your minimap</li>
<li>Many require specific spells: Levioso on floating objects, Incendio on braziers, Confringo on dragon bowls</li>
<li>Hogwarts alone contains over 60 pages across all floors and secret areas</li>
</ul>
<h2>Demiguise Statues (33)</h2>
<p>Collecting these unlocks higher levels of Alohomora for locked doors:</p>
<ul>
<li>9 statues needed for Level-2 locks, all 33 for Level-3</li>
<li>Only visible at night &mdash; use the map to change time of day</li>
<li>Several are behind locked doors themselves, requiring progressive access</li>
<li>Moon behind the statue must be collected with Revelio active</li>
</ul>
<h2>Merlin Trials (95)</h2>
<p>Completing these increases your gear inventory capacity:</p>
<ul>
<li>Each trial requires <strong>Mallowsweet leaves</strong> to activate</li>
<li>Types include: stone sphere placement, moth puzzles, fire lighting, symbol matching, and platform challenges</li>
<li>10 trials = first upgrade, 20 = second, etc. Max inventory at 95 completions</li>
</ul>
<h2>Daedalian Keys (16)</h2>
<p>Follow the flying keys to their cabinets for house-specific gear:</p>
<ul>
<li>Keys fly through the castle &mdash; chase them to their matching cabinet</li>
<li>Complete all 16 for the unique house armor set</li>
</ul>`,
  houses: `<p>Your Hogwarts house choice affects your common room, some dialogue, a unique quest, and the house-specific armor from Daedalian Keys. It does <em>not</em> affect the main story ending.</p>
<h2>Gryffindor</h2>
<ul>
<li><strong>Common Room:</strong> Located in the South Wing, decorated in red and gold with roaring fireplaces</li>
<li><strong>Unique Quest:</strong> "The Hunt for the Missing Pages" &mdash; involves Nearly Headless Nick's death day party</li>
<li><strong>Traits:</strong> Courage and chivalry emphasized in dialogue options</li>
</ul>
<h2>Slytherin</h2>
<ul>
<li><strong>Common Room:</strong> In the dungeons, accessed through a wall in the lower corridors. Green and silver with underwater views</li>
<li><strong>Unique Quest:</strong> "Scrope's Last Hope" &mdash; involves a house-elf's secret in the caves</li>
<li><strong>Traits:</strong> Ambition and cunning open unique dialogue paths</li>
</ul>
<h2>Ravenclaw</h2>
<ul>
<li><strong>Common Room:</strong> In a tower accessed via a bronze knocker riddle. Blue and bronze with starry ceiling</li>
<li><strong>Unique Quest:</strong> "Ollivander's Heirloom" &mdash; a mystery involving a family wand</li>
<li><strong>Traits:</strong> Wit and wisdom are emphasized, opening intellectual dialogue options</li>
</ul>
<h2>Hufflepuff</h2>
<ul>
<li><strong>Common Room:</strong> Near the kitchens, accessed through a barrel stack. Yellow and black with plants everywhere</li>
<li><strong>Unique Quest:</strong> "Azkaban Visit" &mdash; the ONLY house that visits Azkaban prison in a unique quest</li>
<li><strong>Traits:</strong> Loyalty and fairness in dialogue options</li>
</ul>
<h2>Does House Choice Matter?</h2>
<p>For gameplay: minimally. You get the same spells, same main story, and same ending. The main differences are your common room location, one unique side quest, and dialogue flavor. Choose based on your personal preference or house affinity.</p>`,
  "beginner-tips": `<p>Starting Hogwarts Legacy can be overwhelming with its massive castle and open world. These tips will set you on the right path from day one.</p>
<h2>First Day Priorities</h2>
<ol>
<li>Complete every class assignment as soon as it becomes available &mdash; spells are your power source</li>
<li>Explore the castle thoroughly before venturing outside &mdash; Field Guide Pages provide easy XP</li>
<li>Learn <strong>Revelio</strong> and use it constantly &mdash; it reveals hidden collectibles and secrets</li>
<li>Visit <strong>Hogsmeade</strong> early for gear upgrades and potion supplies</li>
</ol>
<h2>Combat Basics</h2>
<ul>
<li><strong>Spell combos over raw damage</strong> &mdash; Combining spells (Levioso &rarr; attack &rarr; Descendo) is more effective than spamming basic attacks</li>
<li><strong>Shield colors matter</strong> &mdash; Yellow shields = Levioso, Red = Incendio/Confringo, Purple = Accio/Depulso</li>
<li><strong>Dodge frequently</strong> &mdash; You're fragile early on. Roll away from telegraphed attacks</li>
<li><strong>Ancient Magic meter</strong> &mdash; Build it through combos and unleash for massive damage when full</li>
</ul>
<h2>Exploration Strategy</h2>
<ul>
<li>Unlock <strong>Floo Flames</strong> (fast travel points) as soon as you enter a new area</li>
<li><strong>Merlin Trials</strong> increase your gear inventory &mdash; prioritize these to hold more equipment</li>
<li>Check every locked door &mdash; come back later with higher Alohomora levels</li>
<li>The Highlands contain hundreds of collection chests &mdash; use Revelio to find them</li>
</ul>
<h2>Gear &amp; Upgrades</h2>
<ul>
<li>Equip your highest-level gear &mdash; lower-level items should be sold or destroyed</li>
<li><strong>Trait upgrades</strong> at the Enchanted Loom dramatically improve combat effectiveness</li>
<li>Legendary gear (orange) isn't always better than well-traited blue gear &mdash; check stats</li>
<li>The <strong>Room of Requirement</strong> lets you grow plants and brew potions &mdash; set this up early</li>
</ul>`
},

// ═════════════════════════════════════════
//  STARFIELD
// ═════════════════════════════════════════
"starfield": {
  about: `<p><strong>Starfield</strong> is Bethesda Game Studios' first new IP in over 25 years, released in September 2023. This open-world space RPG features over 1,000 planets across 100 star systems, combining Bethesda's signature exploration-driven gameplay with deep space mechanics.</p>
<p>You play as a member of <strong>Constellation</strong>, a group of explorers investigating mysterious Artifacts scattered across the galaxy. As you collect Artifacts, you experience visions of alternate realities and uncover the truth about the <strong>Unity</strong> &mdash; a gateway to parallel universes.</p>
<p>The game features ship building, outpost construction, faction questlines, deep character customization, and <strong>New Game+</strong> that literally transports you to a new universe with different outcomes.</p>`,
  walkthrough: `<h2>Act 1 &mdash; Joining Constellation</h2>
<p>After touching your first Artifact in the Vectera mine, you're recruited by Constellation in New Atlantis. The early story establishes the core mystery:</p>
<ul>
<li>Collect initial Artifacts to build the <strong>Armilary</strong> at the Lodge</li>
<li>Meet the major companions: Sarah, Barrett, Sam, and Cora</li>
<li>Visit the major cities: <strong>New Atlantis</strong> (UC), <strong>Akila City</strong> (Freestar), <strong>Neon</strong> (Corporate)</li>
</ul>
<h2>Act 2 &mdash; The Unity Revealed</h2>
<p>As you collect more Artifacts, the visions intensify and the <strong>Starborn</strong> reveal themselves:</p>
<ul>
<li>The <strong>Hunter</strong> and the <strong>Emissary</strong> &mdash; two Starborn with opposing philosophies about the Unity</li>
<li>Each Artifact vision reveals more about the multiverse nature of reality</li>
<li>Faction questlines become available and provide essential XP and gear</li>
</ul>
<h2>Act 3 &mdash; The Unity</h2>
<p>The final confrontation at the Unity portal forces you to make a choice that defines your character's ending:</p>
<ul>
<li>Side with the Hunter, the Emissary, or forge your own path</li>
<li>Entering the Unity starts <strong>New Game+</strong> in a new universe with changes</li>
<li>Each NG+ cycle reveals more about the multiverse &mdash; up to 10 unique variants</li>
</ul>`,
  "ship-building": `<p>Ship building is one of Starfield's deepest systems. Your ship is your home, your transport, and your weapon &mdash; building it well is essential.</p>
<h2>Ship Builder Basics</h2>
<ul>
<li>Access ship builder at any spaceport technician (white ship icon on map)</li>
<li>Ships must have: <strong>Cockpit, Reactor, Engine, Grav Drive, Fuel Tank, Landing Gear, Shield, and Weapons</strong></li>
<li>Total mass determines engine requirements &mdash; heavier ships need more thrust</li>
<li>Mobility and top speed depend on engine power-to-weight ratio</li>
</ul>
<h2>Ship Classes</h2>
<ul>
<li><strong>Class A</strong> &mdash; Fastest, cheapest. Piloting Rank 1. Great for dogfighting and smuggling</li>
<li><strong>Class B</strong> &mdash; Balanced. Piloting Rank 2. The sweet spot for most players</li>
<li><strong>Class C</strong> &mdash; Largest, most modules. Piloting Rank 3. Best for capital ships and mobile bases</li>
</ul>
<h2>Best Ship Modules</h2>
<ul>
<li><strong>Reactors:</strong> Pinch 3A (Class A), Pinch 3B (Class B), Centurion (Class C)</li>
<li><strong>Engines:</strong> White Dwarf 3015 for speed, SAL 6830 for heavy ships</li>
<li><strong>Shields:</strong> Sanctuary or Conviction series for maximum protection</li>
<li><strong>Weapons:</strong> Atlatl 280A missiles + PBO-300 Auto turrets + EMP-90 for disabling</li>
</ul>
<h2>Building Tips</h2>
<ul>
<li>Use the "Check Ship" button frequently &mdash; it flags missing connections and invalid configurations</li>
<li>Landing bays and docker modules must connect properly &mdash; plan your layout first</li>
<li>Crew stations in hab modules determine how many companions can serve on your ship</li>
<li><strong>Smuggling compartments</strong> hide contraband &mdash; essential for illegal cargo runs</li>
</ul>`,
  outposts: `<p>Outposts let you establish permanent bases on planets for resource extraction, manufacturing, and storage. A well-designed outpost network becomes a passive income engine.</p>
<h2>Setting Up Your First Outpost</h2>
<ul>
<li>Find a planet with multiple resources in the same area &mdash; check the planet scan for resource hotspots</li>
<li>Place your outpost beacon in a location that covers as many resource nodes as possible</li>
<li>Start with extractors on your primary resources, then add storage containers</li>
<li>Power everything with <strong>solar panels</strong> (day side) or <strong>wind turbines</strong> (atmospheric planets)</li>
</ul>
<h2>Cargo Links</h2>
<p>Cargo Links connect outposts across different planets, enabling automated resource transportation:</p>
<ul>
<li>Build a <strong>Cargo Link pad</strong> at both outposts to connect them</li>
<li>Assign cargo containers to specific resources for automatic routing</li>
<li><strong>Inter-system Cargo Links</strong> require Helium-3 fuel &mdash; plan your supply chain</li>
</ul>
<h2>Manufacturing Chains</h2>
<ul>
<li>Raw resources &rarr; Industrial Workbench &rarr; Refined materials &rarr; Manufactured components</li>
<li>Example: <strong>Iron + Nickel &rarr; Adaptive Frame</strong> (used in ship and outpost building)</li>
<li>Higher-tier manufacturing requires multiple inputs from different outposts</li>
<li><strong>Research projects</strong> at the Research Laboratory unlock new recipes</li>
</ul>
<h2>Advanced Tips</h2>
<ul>
<li><strong>Andraphon</strong> (Narion system) has Iron, Aluminum, and Berylium &mdash; excellent starter planet</li>
<li>Assign crew with <strong>Outpost Management skills</strong> to boost production efficiency</li>
<li>Max out the <strong>Outpost Engineering skill</strong> for reduced building costs and faster extractors</li>
</ul>`,
  factions: `<p>Starfield features five major factions, each with extensive questlines, unique rewards, and different philosophies.</p>
<h2>Constellation</h2>
<p>The explorers' faction and your main story allies. Based in the Lodge, New Atlantis.</p>
<ul>
<li>Main quest faction &mdash; you join automatically</li>
<li>Companions: Sarah Morgan, Barrett, Sam Coe, Vasco</li>
<li>Rewards: Artifacts, the Armilary, and Unity access</li>
</ul>
<h2>United Colonies (UC)</h2>
<p>The dominant military power, based in New Atlantis, Jemison.</p>
<ul>
<li>Questline: "Supra et Ultra" &mdash; investigate the Terrormorph threat and UC's dark secrets</li>
<li>Join through the <strong>UC Vanguard</strong> at MAST headquarters</li>
<li>Rewards: UC citizenship, access to restricted areas, unique weapons and armor</li>
</ul>
<h2>Freestar Collective</h2>
<p>The frontier justice faction, based in Akila City, Cheyenne.</p>
<ul>
<li>Questline: "Deputized" &mdash; investigate a rogue AI and corporate conspiracy</li>
<li>Join through the <strong>Freestar Rangers</strong> at the Rock</li>
<li>Rewards: Ranger badge, unique Revolver, access to Freestar military tech</li>
</ul>
<h2>Ryujin Industries</h2>
<p>The corporate faction, based in Neon, Volii.</p>
<ul>
<li>Questline: "Back to the Grind" &mdash; rise through corporate ranks through espionage and manipulation</li>
<li>Join by applying at <strong>Ryujin Tower</strong> in Neon</li>
<li>Rewards: <strong>Manipulation implant</strong> (NPC dialogue control), unique stealth gear</li>
</ul>
<h2>Crimson Fleet</h2>
<p>The pirate faction, based in <strong>The Key</strong>, Kryx system.</p>
<ul>
<li>Questline: "Deep Cover" &mdash; infiltrate or join the Fleet (you can betray them to UC SysDef)</li>
<li>Join by getting arrested in UC space or visiting The Key</li>
<li>Rewards: Pirate ships, contraband trading, unique weapons</li>
</ul>`,
  "beginner-tips": `<p>Starfield is massive and doesn't always explain its systems well. Here's what you need to know to avoid common frustrations.</p>
<h2>Early Game Priority</h2>
<ol>
<li>Join Constellation and start the main quest for early XP</li>
<li>Get your first ship upgrade &mdash; the <strong>Frontier</strong> is serviceable but limiting</li>
<li>Invest in the <strong>Boost Pack Training</strong> skill immediately &mdash; it transforms exploration</li>
<li>Visit New Atlantis, Akila City, and Neon to unlock fast travel points</li>
</ol>
<h2>Space Combat</h2>
<ul>
<li>Assign power to <strong>engines</strong> (white) for speed, <strong>shields</strong> (blue) for defense, <strong>weapons</strong> (red/green/yellow) for offense</li>
<li>Use the <strong>target lock system</strong> &mdash; it's essential for tracking fast enemies</li>
<li>Boost away from missile locks &mdash; the flares system doesn't work like traditional games</li>
<li>Repair your ship during combat with <strong>ship repair kits</strong> (buy at any technician)</li>
</ul>
<h2>Resource Management</h2>
<ul>
<li>Don't pick up everything &mdash; mass adds up quickly and slows you down</li>
<li>Store crafting materials at your ship or outpost &mdash; don't carry them</li>
<li>Credits are tight early &mdash; do faction quests and bounty missions for income</li>
<li>Sell unnecessary weapons and gear at any vendor</li>
</ul>
<h2>Must-Have Skills</h2>
<ul>
<li><strong>Boost Pack Training</strong> (Tech) &mdash; Unlocks jetpack boosting. Essential for exploration</li>
<li><strong>Piloting</strong> (Tech) &mdash; Unlocks better ship classes. Rank 3 for Class C ships</li>
<li><strong>Security</strong> (Tech) &mdash; Lockpicking for loot. Rank 2+ for advanced locks</li>
<li><strong>Medicine</strong> (Science) &mdash; Better healing items. Keeps you alive</li>
<li><strong>Persuasion</strong> (Social) &mdash; More dialogue options. Opens alternate quest paths</li>
</ul>`
},

// ═════════════════════════════════════════
//  DIABLO IV
// ═════════════════════════════════════════
"diablo-4": {
  about: `<p><strong>Diablo IV</strong>, developed by Blizzard Entertainment, is the latest entry in the iconic action RPG franchise. Released in June 2023, it returns to the dark, gothic atmosphere of Diablo II while incorporating modern gameplay systems and an open-world structure.</p>
<p><strong>Lilith</strong>, daughter of Mephisto and co-creator of Sanctuary, has returned. Her influence spreads across five distinct regions, and your custom hero must stop her &mdash; or embrace her gift of freedom through power. The game features five classes, a shared open world with other players, seasonal content, and an ever-evolving endgame.</p>
<p>With regular seasons bringing new mechanics, items, and balance changes, Diablo IV continues to grow and refine its systems based on community feedback.</p>`,
  walkthrough: `<h2>Prologue &mdash; Kyovashad</h2>
<p>Your journey begins in Kyovashad, a village under Lilith's influence. Complete the tutorial, learn your class mechanics, and follow the road to <strong>Kyovashad</strong> &mdash; your first major hub.</p>
<h2>Act I &mdash; Fractured Peaks</h2>
<p>The snowy mountain region introduces the central conflict. Key beats include meeting <strong>Lorath</strong>, discovering Lilith's influence on the Cathedral of Light, and confronting the Priest in the Kor Valar fortress. The <strong>Donan</strong> questline is essential for the main story progression.</p>
<h2>Act II &mdash; Scosglen</h2>
<p>The druidic forests and coastal areas. The druids are fighting an inner corruption tied to Lilith's machinations. Key encounters include the <strong>Tur Dulra</strong> druidic gathering and the <strong>Astaroth</strong> boss fight.</p>
<h2>Act III &mdash; Dry Steppes</h2>
<p>The arid badlands controlled by the Temple of the Triune and bandit factions. The <strong>Light's Judgement</strong> questline reveals how Lilith manipulates faith for her own ends.</p>
<h2>Act IV &mdash; Kehjistan</h2>
<p>The desert region surrounding Caldeum. <strong>Elias</strong>, a key antagonist, operates from the capital. The <strong>Soulstone</strong> questline brings you closer to understanding how to combat Lilith directly.</p>
<h2>Act V &mdash; Hawezar</h2>
<p>The swampy, disease-ridden southern region. The final act culminates in the confrontation with Lilith at the Hell portal. The final boss fight has multiple phases requiring strong gear and awareness of mechanics.</p>
<h2>Post-Campaign</h2>
<p>After defeating Lilith, the true endgame begins: <strong>World Tier 3 and 4</strong> unlock, <strong>Capstone Dungeons</strong> become available, and the <strong>Paragon board</strong> opens up for infinite character progression.</p>`,
  "class-builds": `<p>Each class in Diablo IV has multiple viable endgame builds. Here are the most effective builds for each class as of the current season.</p>
<h2>Barbarian &mdash; Whirlwind</h2>
<p>The classic spin-to-win build remains one of the strongest farming builds in the game.</p>
<ul>
<li><strong>Core Skill:</strong> Whirlwind with <strong>Windlasher Aspect</strong> for additional tornadoes</li>
<li><strong>Key Aspects:</strong> Aspect of Berserk Ripping, Ramalini's Magnum Opus, Death Wish</li>
<li><strong>Gear Priority:</strong> Strength, Critical Strike Chance, Vulnerable Damage</li>
<li><strong>Strategy:</strong> Keep Berserking up constantly, spin through dense packs, use Wrath of the Berserker for tough elites</li>
</ul>
<h2>Sorcerer &mdash; Ball Lightning</h2>
<p>The premier screen-clear build with massive AoE damage.</p>
<ul>
<li><strong>Core Skill:</strong> Ball Lightning with <strong>Gravitational Aspect</strong> for stationary orbs</li>
<li><strong>Key Aspects:</strong> Gravitational, Aspect of Control, Esu's Heirloom</li>
<li><strong>Strategy:</strong> Stack Mana Cost Reduction, cast Ball Lightning in groups, use Teleport for repositioning</li>
</ul>
<h2>Rogue &mdash; Penetrating Shot</h2>
<p>Long-range precision build that excels in both farming and bossing.</p>
<ul>
<li><strong>Core Skill:</strong> Penetrating Shot with <strong>Trickshot Aspect</strong> for additional arrows</li>
<li><strong>Key Aspects:</strong> Trickshot, Corruption, Aspect of Eldritch Bounty</li>
<li><strong>Strategy:</strong> Apply Poison Trap and Dark Shroud, then fire Penetrating Shots through grouped enemies</li>
</ul>
<h2>Necromancer &mdash; Bone Spear</h2>
<p>The most consistent Necromancer build with excellent single-target and AoE balance.</p>
<ul>
<li><strong>Core Skill:</strong> Bone Spear with <strong>Splintering Aspect</strong> for additional projectiles</li>
<li><strong>Key Aspects:</strong> Splintering, Aspect of Exposed Flesh, Scent of Death</li>
<li><strong>Strategy:</strong> Generate corpses with Reap, spend on Bone Spear. Keep Bone Storm up for damage reduction</li>
</ul>
<h2>Druid &mdash; Pulverize Werebear</h2>
<p>A tanky, high-damage build that excels in all content.</p>
<ul>
<li><strong>Core Skill:</strong> Pulverize with <strong>Shockwave Aspect</strong> for massive AoE</li>
<li><strong>Key Aspects:</strong> Shockwave, Nighthowler's, Aspect of the Ursine Horror</li>
<li><strong>Strategy:</strong> Maintain Grizzly Rage for Werebear form, Pulverize for massive AoE, use Earthen Bulwark for defense</li>
</ul>`,
  endgame: `<p>Diablo IV's endgame offers multiple progression paths for different playstyles. Here's how to navigate the post-campaign content.</p>
<h2>World Tiers</h2>
<ul>
<li><strong>WT1 (Adventurer)</strong> &mdash; Story mode. Enemies are easy, good for leveling</li>
<li><strong>WT2 (Veteran)</strong> &mdash; Harder enemies, better drops. Switch after reaching level 50</li>
<li><strong>WT3 (Nightmare)</strong> &mdash; Unlocked via Capstone Dungeon. Sacred items drop, Helltides appear</li>
<li><strong>WT4 (Torment)</strong> &mdash; Unlocked via second Capstone. Ancestral items drop, highest difficulty</li>
</ul>
<h2>Helltides</h2>
<p>Region-wide events where areas become corrupted with enhanced enemies and special loot:</p>
<ul>
<li>Collect <strong>Aberrant Cinders</strong> from kills to open <strong>Tortured Gift</strong> chests</li>
<li>Live and die by the Helltide &mdash; dying loses half your Cinders</li>
<li>Target farm specific gear slots by opening the appropriate Gift chest type</li>
<li>Helltide bosses spawn at specific locations &mdash; coordinate with other players</li>
</ul>
<h2>Nightmare Dungeons</h2>
<p>Enhanced versions of standard dungeons with affixes that increase difficulty and rewards:</p>
<ul>
<li>Use <strong>Nightmare Sigils</strong> to activate (dropped in WT3+)</li>
<li>Higher tier sigils = harder affixes but better XP and item drops</li>
<li>Efficient farming: run tiers that you can clear in 5&ndash;8 minutes</li>
<li>Key affixes to avoid: Strombane's Wrath, Spread elementals</li>
</ul>
<h2>The Pit</h2>
<p>The ultimate endgame challenge &mdash; an infinite scaling dungeon:</p>
<ul>
<li>Enter with <strong>Artificer Stones</strong> dropped from NM Dungeons</li>
<li>Each tier increases enemy level and damage</li>
<li>Masterwork materials drop here for upgrading Ancestral items</li>
<li>Push as high as your build allows for the best rewards</li>
</ul>
<h2>Uber Bosses</h2>
<p>Endgame boss encounters requiring specific materials:</p>
<ul>
<li><strong>Duriel</strong> (Chamber of Suffering) &mdash; Drops Unique items including Uber Uniques</li>
<li><strong>Grigoire</strong> (Hall of the Penitent) &mdash; Drops specific target-farmed items</li>
<li><strong>The Beast in the Ice</strong> &mdash; Requires specific materials from The Pit</li>
</ul>`,
  seasons: `<p>Diablo IV's seasonal model brings new mechanics, items, and balance changes every ~3 months. Here's how seasons work and how to make the most of them.</p>
<h2>How Seasons Work</h2>
<ul>
<li>Each season requires creating a <strong>new Seasonal Character</strong> (fresh start)</li>
<li>Your <strong>Renown</strong> progress, <strong>Altars of Lilith</strong>, and <strong>map discovery</strong> carry over to seasonal characters</li>
<li><strong>Season Journey</strong> provides structured objectives and rewards including the Battle Pass</li>
<li>Season-specific mechanics are exclusive to the current season</li>
</ul>
<h2>Season Journey</h2>
<p>The Season Journey is your seasonal roadmap with chapters of objectives:</p>
<ul>
<li>Chapter completion grants favor for the Battle Pass and specific rewards</li>
<li>Slayer / Champion / Destroyer tiers unlock at different completion levels</li>
<li>The final tier rewards a unique cosmetic set each season</li>
<li>Completing the Journey efficiently requires focusing on one chapter at a time</li>
</ul>
<h2>Seasonal Mechanics (Rotating)</h2>
<p>Each season introduces a unique gameplay mechanic:</p>
<ul>
<li><strong>Season 1:</strong> Malignant Hearts &mdash; socketable gems with powerful effects</li>
<li><strong>Season 2:</strong> Vampiric Powers &mdash; blood-themed abilities with risk/reward mechanics</li>
<li><strong>Season 3:</strong> Constructs &mdash; companion artifacts with customizable behavior</li>
<li><strong>Season 4:</strong> Loot Reborn &mdash; complete itemization overhaul with Tempering and Masterworking</li>
<li><strong>Season 5+:</strong> New mechanics each season, keeping the game fresh</li>
</ul>
<h2>Seasonal Strategy</h2>
<ul>
<li>Level to 50 quickly through campaign skip (available after first completion) and focus on WT3+</li>
<li>Prioritize the <strong>Season Journey</strong> objectives alongside normal leveling</li>
<li>Test new season mechanics early &mdash; some define the meta for the entire season</li>
<li>Build around seasonal mechanics when they're powerful &mdash; they often outperform standard builds</li>
</ul>`,
  "beginner-tips": `<p>Diablo IV can be overwhelming for new players. These tips will help you avoid common mistakes and progress efficiently.</p>
<h2>Difficulty Selection</h2>
<ul>
<li>Start on <strong>World Tier 1</strong> (Adventurer) &mdash; WT2 isn't worth the slower kill speed for the slight XP bonus</li>
<li>Switch to WT2 around level 40&ndash;45 when your build comes online</li>
<li>Push to WT3 immediately after the <strong>Capstone Dungeon</strong> at level 50</li>
</ul>
<h2>Loot Priorities</h2>
<ul>
<li><strong>Weapon damage</strong> is the most important stat &mdash; always equip your highest-damage weapon</li>
<li><strong>Legendary Aspects</strong> are more important than item level &mdash; a good Aspect on a low-level item beats a bad high-level one</li>
<li>Don't salvage everything &mdash; check the <strong>Codex</strong> first. Only extract Aspects you don't already have stored</li>
<li>Sell items to vendors for gold early; salvage becomes more important in WT3+</li>
</ul>
<h2>Leveling Strategy</h2>
<ul>
<li>Follow the campaign for your first character &mdash; it provides consistent XP and introduces the world</li>
<li>Side dungeons grant <strong>Aspects</strong> for the Codex &mdash; complete ones relevant to your build</li>
<li><strong>Strongholds</strong> are excellent XP sources but challenging &mdash; attempt them when 2&ndash;3 levels above recommendation</li>
<li><strong>Events</strong> (blue circles on map) give bonus XP and materials &mdash; always complete nearby ones</li>
</ul>
<h2>Essential Systems</h2>
<ul>
<li><strong>Aspect extraction:</strong> Visit the Occultist to extract Legendary powers from items for later imprinting</li>
<li><strong>Gem upgrading:</strong> Combine 3 gems at the Jeweler for higher tiers &mdash; significant stat boosts</li>
<li><strong>Potion upgrades:</strong> Collect Angelbreath and visit the Alchemist every 10 levels &mdash; don't skip this</li>
<li><strong>Renown:</strong> Complete map activities for permanent stat bonuses across all characters</li>
</ul>`
},

// ═════════════════════════════════════════
//  PALWORLD
// ═════════════════════════════════════════
"palworld": {
  about: `<p><strong>Palworld</strong>, developed by Pocketpair, is a survival crafting game that combines creature collection with base building, farming, and combat. Released in Early Access in January 2024, it sold over 8 million copies in its first week &mdash; one of the fastest-selling Steam games ever.</p>
<p>In a world inhabited by <strong>Pals</strong> &mdash; creatures with unique abilities &mdash; you can capture, breed, and deploy them to automate your base, fight enemies, and explore the vast open world. The game blends cozy farming elements with darker themes, as Pals can also be used for labor, combat, and even food production.</p>
<p>With over 100 Pal species, extensive base building, multiplayer co-op, and constant updates, Palworld offers a unique blend of survival, collection, and automation gameplay.</p>`,
  walkthrough: `<h2>Your First Day</h2>
<ol>
<li>Choose a base location near the fast travel point &mdash; the starting plateau is ideal</li>
<li>Build a <strong>Palbox</strong> immediately &mdash; this claims your base territory</li>
<li>Capture <strong>Lamball</strong> (sheep Pal) for early transport and wool production</li>
<li>Build a <strong>Ranch</strong> and assign Lamball to produce Wool automatically</li>
<li>Craft a <strong>Primitive Workbench</strong> and start producing basic items</li>
</ol>
<h2>Early Game Progression</h2>
<ul>
<li>Capture <strong>Cattiva</strong> (cat Pal) for mining and carrying &mdash; they're essential workers</li>
<li>Build a <strong>Berry Plantation</strong> and assign Pals to farm &mdash; this is your food foundation</li>
<li>Unlock and build the <strong>Weapon Workbench</strong> for better gear</li>
<li>Explore nearby dungeons for technology points and rare items</li>
<li>Defeat the first <strong>Tower Boss</strong> (Zoe &amp; Grizzbolt) to progress the story</li>
</ul>
<h2>Mid-Game Expansion</h2>
<ul>
<li>Establish second and third bases for resource diversification</li>
<li>Capture mining Pals (<strong>Digtoise, Tombat</strong>) for ore automation</li>
<li>Build <strong>breeding farms</strong> to create powerful Pal combinations</li>
<li>Tackle <strong>Syndicate Towers</strong> for high-tier loot and boss encounters</li>
</ul>
<h2>Late Game</h2>
<ul>
<li>Capture legendary Pals through boss encounters and breeding chains</li>
<li>Optimize base layouts for maximum production efficiency</li>
<li>Complete the Tower Boss progression for the story ending</li>
<li>Engage with multiplayer content &mdash; raids and cooperative base building</li>
</ul>`,
  "pal-locations": `<p>Finding rare and powerful Pals requires knowing where to look. This guide covers the locations of the most sought-after Pals in each region.</p>
<h2>Starting Area Pals</h2>
<ul>
<li><strong>Lamball</strong> &mdash; Everywhere in the starting plateau. Essential for wool production</li>
<li><strong>Cattiva</strong> &mdash; Common near starting areas. Best early mining Pal</li>
<li><strong>Foxparks</strong> &mdash; Forest areas near starting plateau. Fire type, good for kindling</li>
<li><strong>Chikipi</strong> &mdash; Grasslands. Produces eggs at the Ranch</li>
</ul>
<h2>Desert Region Pals</h2>
<ul>
<li><strong>Anubis</strong> &mdash; Found in the Twilight Dunes. One of the best fighting Pals. Level 47 boss spawn</li>
<li><strong>Digtoise</strong> &mdash; Desert mining specialist. Essential for ore automation</li>
<li><strong>Reptyro</strong> &mdash; Volcanic desert areas. Fire/mine dual type</li>
</ul>
<h2>Snow Region Pals</h2>
<ul>
<li><strong>Suzaku</strong> &mdash; Ice biome flying mount. One of the fastest flyers in the game</li>
<li><strong>Frostallion</strong> &mdash; Legendary ice Pal. Found at the Pristine Snow Field landmark</li>
<li><strong>Penking</strong> &mdash; Snow/water areas. Excellent base worker for cooling and watering</li>
</ul>
<h2>Volcanic Region Pals</h2>
<ul>
<li><strong>Blazamut</strong> &mdash; Legendary fire Pal in the Volcanic Cavern. One of the strongest combat Pals</li>
<li><strong>Jormuntide</strong> &mdash; Dragon/fire type found near lava zones. Powerful late-game Pal</li>
<li><strong>Reptyro</strong> &mdash; Volcanic mining specialist with high work speed</li>
</ul>
<h2>Island &amp; Coastal Pals</h2>
<ul>
<li><strong>Azure Dragon (Jormuntide Ignis)</strong> &mdash; Rare spawn on the eastern islands</li>
<li><strong>Surfent</strong> &mdash; Water mount found along coastlines. Fast swimming</li>
<li><strong>Gobfin</strong> &mdash; Island caves. Provides player damage buff when in party</li>
</ul>`,
  "base-building": `<p>Base building in Palworld is both creative and functional &mdash; your base's layout directly impacts Pal work efficiency and resource output.</p>
<h2>Choosing a Base Location</h2>
<ul>
<li><strong>First base:</strong> Starting plateau &mdash; flat, safe, near fast travel</li>
<li><strong>Second base:</strong> Near ore nodes (desert or mountain) &mdash; critical for mid-game progression</li>
<li><strong>Third base:</strong> Near coal and sulfur &mdash; needed for advanced crafting</li>
<li>Ideal spots have: flat terrain, multiple resource nodes, and fast travel access</li>
</ul>
<h2>Essential Base Structures</h2>
<ul>
<li><strong>Palbox</strong> &mdash; Claims territory and manages base Pals. Build first, always</li>
<li><strong>Berry Plantation</strong> &mdash; Self-sustaining food source. Assign Pals to plant, water, and harvest</li>
<li><strong>Ranch</strong> &mdash; Passive resource generation from assigned Pals (wool, eggs, milk)</li>
<li><strong>Resource Box</strong> &mdash; Centralized storage. Place near workstations for Pal auto-storage</li>
<li><strong>Stone Pit / Logging Site</strong> &mdash; Infinite basic materials with assigned Pals</li>
</ul>
<h2>Pal Assignment Strategy</h2>
<ul>
<li>Match Pal skills to tasks: <strong>Kindling</strong> Pals at furnaces, <strong>Watering</strong> Pals at farms, <strong>Mining</strong> Pals at nodes</li>
<li>Assign 5&ndash;10 Pals per base &mdash; too many causes pathing issues and reduced efficiency</li>
<li>Keep at least one <strong>transport Pal</strong> per base to move items between stations</li>
<li>Pals with <strong>multiple work skills</strong> are more valuable &mdash; Penking (watering + cooling + handiwork)</li>
</ul>
<h2>Defensive Structures</h2>
<ul>
<li>Build <strong>walls and turrets</strong> around your base perimeter &mdash; raids happen regularly</li>
<li>Place <strong>traps</strong> at chokepoints leading to your Palbox and storage</li>
<li>Keep <strong>defense Pals</strong> (combat types) assigned to the base during raids</li>
<li>High-level raids can destroy structures &mdash; reinforce with stone and metal upgrades</li>
</ul>`,
  breeding: `<p>Breeding is the primary way to obtain powerful Pals with perfect stats and rare combinations. Understanding the system is essential for endgame content.</p>
<h2>Breeding Basics</h2>
<ul>
<li>Build a <strong>Breeding Farm</strong> and assign one male and one female Pal</li>
<li>Provide <strong>Cake</strong> (flour, red berries, milk, eggs, honey) &mdash; required for breeding to progress</li>
<li>Breeding time depends on the Pal rarity &mdash; common Pals breed faster</li>
<li>Offspring inherits stats from parents with some randomization</li>
</ul>
<h2>Inherited Traits</h2>
<ul>
<li>Each Pal has up to <strong>4 passive traits</strong> &mdash; these can be inherited from parents</li>
<li>Best traits: <strong>Legend, Lord, Emperor, Serenity, Musclehead, Ferocious</strong></li>
<li>Stack positive traits through selective breeding &mdash; 4 gold traits on one Pal is the goal</li>
<li>Negative traits (Clumsy, Slack, etc.) should be bred out over generations</li>
</ul>
<h2>Power Breeding Chains</h2>
<p>Some of the strongest Pals can only be obtained through specific breeding combinations:</p>
<ul>
<li><strong>Anubis</strong> = Bushi + Incineram (or several other combos). Best base worker and fighter</li>
<li><strong>Jormuntide Ignis</strong> = Jormuntide + Blazamut. One of the strongest fire Pals</li>
<li><strong>Shadowbeak</strong> = Grizzbolt + Orserk. Powerful dark-type with excellent stats</li>
<li><strong>Frostallion Noct</strong> = Frostallion + Helzephyr. Night variant of the ice legendary</li>
</ul>
<h2>Breeding Efficiency Tips</h2>
<ul>
<li>Set up a <strong>dedicated breeding base</strong> with multiple farms and cake production</li>
<li>Use Pals with <strong>high work speed</strong> to speed up cake ingredient gathering</li>
<li>Keep a <strong>spreadsheet</strong> of breeding combos &mdash; the system has over 18,000 combinations</li>
<li><strong>Condense</strong> identical Pals to boost their stats &mdash; 4 condensations = maximum power</li>
</ul>`,
  "beginner-tips": `<p>Starting Palworld can feel overwhelming with its blend of survival, crafting, and creature collection. These tips will set you on the right path.</p>
<h2>Day 1 Checklist</h2>
<ol>
<li>Build a <strong>Palbox</strong> on flat ground near the starting fast travel point</li>
<li>Capture 3&ndash;5 <strong>Lamballs</strong> for wool and transport work</li>
<li>Build a <strong>Ranch</strong> and assign Lamballs &mdash; passive wool income starts immediately</li>
<li>Construct a <strong>Berry Plantation</strong> and assign a watering Pal &mdash; food security</li>
<li>Craft a <strong>Wooden Club</strong> and <strong>Pal Sphere</strong> for better capturing</li>
</ol>
<h2>Understanding Pal Types</h2>
<ul>
<li><strong>Work Pals</strong> &mdash; High work suitability, low combat. Lamball, Cattiva, Chikipi</li>
<li><strong>Combat Pals</strong> &mdash; High attack stats, poor workers. Loupmoon, Relaxaurus</li>
<li><strong>Mount Pals</strong> &mdash; Rideable for faster travel. Rushoart (ground), Nitewing (flying)</li>
<li><strong>Utility Pals</strong> &mdash; Multiple work skills. Penking, Vanwyrm &mdash; the most valuable early Pals</li>
</ul>
<h2>Resource Priorities</h2>
<ul>
<li><strong>Stone and Wood</strong> are infinite with Pals &mdash; don't gather manually after the first hour</li>
<li><strong>Ore</strong> is the bottleneck resource &mdash; find ore nodes and build a base near them ASAP</li>
<li><strong>Sulfur and Coal</strong> unlock mid-game crafting &mdash; plan your second base around these</li>
<li>Always keep <strong>20+ Pal Spheres</strong> &mdash; you'll need them constantly</li>
</ul>
<h2>Common Mistakes</h2>
<ul>
<li>Don't build your first base on <strong>uneven terrain</strong> &mdash; Pals get stuck on slopes</li>
<li>Don't ignore the <strong>Ranch</strong> &mdash; passive resources are the backbone of progression</li>
<li>Don't neglect <strong>Pal feeding</strong> &mdash; hungry Pals stop working and lose sanity</li>
<li>Don't skip the <strong>Tower Bosses</strong> &mdash; they provide essential technology points</li>
<li>Don't spread Pals too thin &mdash; 5&ndash;10 efficient workers per base is optimal</li>
</ul>`
},

// ═════════════════════════════════════════
//  FF7 REBIRTH
// ═════════════════════════════════════════
"ff7-rebirth": {
  about: `<p><strong>Final Fantasy VII Rebirth</strong>, developed by Square Enix, is the second installment of the FFVII Remake project. Released exclusively on PlayStation 5 in February 2024, it continues Cloud's journey beyond Midgar into the vast open world of the Planet.</p>
<p>Picking up where Remake left off, Rebirth follows Cloud, Tifa, Aerith, Barret, and Red XIII as they pursue Sephiroth across multiple regions &mdash; from the grasslands of Kalm to the city of Junon, the Gold Saucer, Cosmo Canyon, and the Northern Crater. The game expands combat with <strong>Synergy Abilities</strong> and an open-world structure filled with side content.</p>
<p>With over 40 hours of main story content and 100+ hours for completionists, Rebirth is one of the most content-rich RPGs of this generation.</p>`,
  walkthrough: `<h2>Chapter 1&ndash;2: Kalm &amp; The Grasslands</h2>
<p>After escaping Midgar, the party arrives in Kalm. Cloud recounts the Nibelheim incident (interactive flashback sequence). The Grasslands introduce the open-world structure &mdash; complete <strong>Chadley's first Intel tasks</strong> to unlock fast travel and region activities.</p>
<h2>Chapter 3&ndash;4: Mythril Mines &amp; Junon</h2>
<p>Navigate the Mythril Mines with its environmental puzzles and encounter the Turks. <strong>Junon</strong> is a massive military port city &mdash; the parade sequence and dolphin riding are standout moments. The Boss fight against the <strong>Terror of the Deep</strong> guards the harbor exit.</p>
<h2>Chapter 5&ndash;6: Corel Region &amp; Gold Saucer</h2>
<p>The desert region surrounding the Gold Saucer &mdash; Final Fantasy's iconic amusement park. The <strong>speed square, G-Bike, and 3D Battler</strong> mini-games are here. The date event at the Gold Saucer depends on your relationship choices throughout the game. Don't miss the <strong>Costa del Sol</strong> beach activities.</p>
<h2>Chapter 7&ndash;8: Gongaga &amp; Cosmo Canyon</h2>
<p><strong>Gongaga</strong> is Zack's hometown &mdash; significant lore reveals here. <strong>Cosmo Canyon</strong> is Red XIII's home and the site of Bugenhagen's observatory. The planetology sequence and Red XIII's trial are among the game's most emotional moments.</p>
<h2>Chapter 9&ndash;10: Nibel Region &amp; Rocket Town</h2>
<p>Return to Nibelheim for the most pivotal story revelations. The <strong>Nibelheim Reactor</strong> sequence and Sephiroth's library contain essential plot points. <strong>Cid's rocket</strong> launch attempt adds urgency to the region's storyline.</p>
<h2>Chapter 11&ndash;12: The Northern Crater</h2>
<p>The final region and the climax of the story. The <strong>Forgotten Capital</strong> and Aerith's fate unfold in the game's most dramatic sequences. The final confrontation with Sephiroth has multiple phases and depends on your choices throughout the game.</p>`,
  materia: `<p>The <strong>Materia system</strong> is the heart of FFVII Rebirth's combat customization. Understanding how to combine Materia effectively is essential for both story progression and endgame content.</p>
<h2>Materia Types</h2>
<ul>
<li><strong>Magic Materia</strong> (Green) &mdash; Spells: Fire, Ice, Lightning, Wind, Cure, Revive, etc.</li>
<li><strong>Command Materia</strong> (Yellow) &mdash; Actions: Steal, Assess, Chakra, First Strike, etc.</li>
<li><strong>Support Materia</strong> (Blue) &mdash; Modifiers: Magnify, HP Absorb, MP Absorb, Synergy, etc.</li>
<li><strong>Complete Materia</strong> (Purple) &mdash; Passives: HP Up, MP Up, Luck Up, Gil Up, etc.</li>
<li><strong>Synergy Materia</strong> (New to Rebirth) &mdash; Triggers cooperative abilities between party members</li>
</ul>
<h2>Best Materia Combos</h2>
<ul>
<li><strong>Healing + Magnify</strong> &mdash; Cure/Pray affects entire party instead of one target. Essential for boss fights</li>
<li><strong>Fire/Ice/Lightning + MP Absorb</strong> &mdash; Recover MP with each spell cast. Sustains your magic DPS</li>
<li><strong>Elemental + Fire/Ice</strong> in weapon &mdash; Adds elemental damage to attacks</li>
<li><strong>Elemental + Fire/Ice</strong> in armor &mdash; Absorbs or resists that element</li>
<li><strong>Synergy + ATB Boost</strong> &mdash; When one character uses ATB, linked partner gets a free ability</li>
</ul>
<h2>Synergy Skills &amp; Abilities</h2>
<p>New to Rebirth, <strong>Synergy abilities</strong> are cooperative attacks that cost two characters' ATB bars:</p>
<ul>
<li>Build Synergy gauges through combat to unlock <strong>Synergy Skills</strong> (passive team bonuses)</li>
<li>Synergy Abilities deal massive damage and often include invincibility frames</li>
<li>Best pairs: <strong>Cloud + Tifa</strong> (Fierce/Heroic), <strong>Aerith + Tifa</strong> (Sorceress's Storm)</li>
<li>Some boss fights practically require Synergy Abilities for damage phases</li>
</ul>`,
  "side-activities": `<p>FFVII Rebirth is packed with side content. Here's a guide to the most rewarding activities.</p>
<h2>Queen's Blood</h2>
<p>A strategic card game played across the world. Each region has Queen's Blood players to challenge:</p>
<ul>
<li><strong>Rules:</strong> Place cards on a grid, control spaces with power values, highest score wins</li>
<li>Win matches to earn new cards &mdash; better cards unlock advanced strategies</li>
<li>Complete the Queen's Blood questline for unique rewards and the final tournament</li>
<li>Pro tip: Focus on cards with "enhance" abilities that buff adjacent cards</li>
</ul>
<h2>VR Combat Simulator</h2>
<p>Chadley's combat challenges test your party's combat proficiency:</p>
<ul>
<li>Complete each region's VR missions to unlock new Materia and combat abilities</li>
<li><strong>Party Challenges</strong> require specific character combinations</li>
<li><strong>Gilgamesh fight</strong> is the ultimate VR challenge &mdash; requires optimized builds</li>
</ul>
<h2>World Intel</h2>
<p>Each region has Chadley-assigned intel activities:</p>
<ul>
<li><strong>Tower activations</strong> &mdash; Reveal the full map and fast travel points</li>
<li><strong>Summons</strong> &mdash; Defeat summon manifestations in VR to unlock them for combat</li>
<li><strong>Combat Simulation</strong> &mdash; Clear waves for rewards</li>
<li><strong>Excavation Intel</strong> &mdash; Find buried treasures with the Chocobo sniff ability</li>
</ul>
<h2>Mini-Games</h2>
<ul>
<li><strong>Chocobo Racing</strong> &mdash; Available in each region. Win for unique Chocobo gear and abilities</li>
<li><strong>G-Bike</strong> &mdash; Motorcycle combat at the Gold Saucer</li>
<li><strong>3D Battler</strong> &mdash; Fighting game at the Gold Saucer</li>
<li><strong>Piano</strong> &mdash; Play songs at each region's piano for sheet music rewards</li>
</ul>`,
  characters: `<p>FFVII Rebirth features seven party members, each with unique combat styles, synergy abilities, and personal story arcs.</p>
<h2>Cloud Strife &mdash; Versatile DPS</h2>
<ul>
<li><strong>Combat Modes:</strong> Operator (balanced), Punisher (heavy damage), Cloud's unique stance switching</li>
<li><strong>Best Role:</strong> Primary damage dealer with flexibility to tank or DPS</li>
<li><strong>Synergy Partners:</strong> Tifa (combo damage), Aerith (magic synergy)</li>
<li><strong>Key Abilities:</strong> Focused Thrust (stagger builder), Braver (burst damage), Infinity's End (stagger punish)</li>
</ul>
<h2>Tifa Lockhart &mdash; Stagger Queen</h2>
<ul>
<li><strong>Combat Style:</strong> Fast martial arts with chi techniques. Unparalleled stagger damage</li>
<li><strong>Best Role:</strong> Stagger phase specialist &mdash; her damage multiplier during stagger is the highest in the game</li>
<li><strong>Key Abilities:</strong> Rise and Fall &rarr; Omnistrike combo (300% stagger damage), Unbridled Strength (buff stacks)</li>
<li><strong>Build:</strong> Focus on Critical Hit damage and ATB speed</li>
</ul>
<h2>Aerith Gainsborough &mdash; Magic DPS &amp; Support</h2>
<ul>
<li><strong>Combat Style:</strong> Ranged magic with Arcane Ward for spell amplification</li>
<li><strong>Best Role:</strong> Magic damage and party support. Her Arcane Ward doubles spell casts</li>
<li><strong>Key Abilities:</strong> Ray of Judgment (burst), Planet's Protection (shield), Tempest (AoE)</li>
<li><strong>Build:</strong> Maximize Magic Attack and MP efficiency</li>
</ul>
<h2>Barret Wallace &mdash; Ranged Tank</h2>
<ul>
<li><strong>Combat Style:</strong> Ranged gun-arm attacks with high durability</li>
<li><strong>Best Role:</strong> Tank and sustained ranged DPS during boss mechanics</li>
<li><strong>Key Abilities:</strong> Maximum Fury (sustained burst), Lifesaver (damage redirect), Steadfast Release (overcharge)</li>
</ul>
<h2>Red XIII &mdash; Counter Specialist</h2>
<ul>
<li><strong>Combat Style:</strong> Vengeance-based counterattacking with buffs</li>
<li><strong>Best Role:</strong> Counter tank &mdash; punishes enemy aggression</li>
<li><strong>Key Abilities:</strong> Retaliation (counter on dodge), Sentinel Stance (damage reduction + counter)</li>
</ul>
<h2>Yuffie Kisaragi &mdash; Ninja DPS</h2>
<ul>
<li><strong>Combat Style:</strong> Dual-element throwing star with Ninjutsu versatility</li>
<li><strong>Best Role:</strong> Versatile DPS that can exploit any elemental weakness</li>
<li><strong>Key Abilities:</strong> Banishment (burst based on ATB spent), Brumal Form (invincibility frames)</li>
</ul>
<h2>Cait Sith &mdash; Gambler / Support</h2>
<ul>
<li><strong>Combat Style:</strong> Unpredictable with powerful Moogle summons and fortune-based abilities</li>
<li><strong>Best Role:</strong> Support with burst damage potential from lucky rolls</li>
<li><strong>Key Abilities:</strong> Let's Ride! (Moogle mount), Dice Roll (variable damage), Moogle Knuckle (consistent)</li>
</ul>`,
  "beginner-tips": `<p>FFVII Rebirth builds on Remake's combat system with significant additions. Here's how to get up to speed quickly.</p>
<h2>Combat Fundamentals</h2>
<ul>
<li><strong>Stagger is everything</strong> &mdash; Focus on building the stagger bar (yellow), then unleashing burst damage during the stagger window (red)</li>
<li><strong>ATB management</strong> &mdash; Don't waste ATB on weak abilities. Save for Synergy and Limit Breaks</li>
<li><strong>Blocking &gt; Dodging</strong> &mdash; Blocking reduces damage by 50% and builds ATB. Dodging is situational</li>
<li><strong>Synergy Abilities</strong> &mdash; Use them frequently. They deal massive damage, provide invincibility, and build Synergy gauge</li>
</ul>
<h2>Weapon Upgrades</h2>
<ul>
<li>Each weapon has a <strong>unique skill tree</strong> &mdash; invest SP in the weapon's strengths</li>
<li>Don't spread SP thin &mdash; <strong>max out key nodes</strong> rather than unlocking everything</li>
<li><strong>Weapon proficiency:</strong> use a weapon's unique ability enough times to learn it permanently (usable with any weapon)</li>
<li>Check the <strong>weapon shop</strong> in each town for new weapons &mdash; they're usually better than found gear</li>
</ul>
<h2>Exploration Tips</h2>
<ul>
<li>Activate <strong>every tower</strong> in a region first &mdash; it reveals the full map and fast travel points</li>
<li><strong>Chocobos</strong> unlock in each region &mdash; find and catch them for faster overworld travel</li>
<li>Don't ignore <strong>side quests</strong> &mdash; they provide SP, Materia, and relationship points that affect the story</li>
<li><strong>Hard mode</strong> is locked until New Game+ &mdash; your first playthrough should focus on enjoying the story</li>
</ul>
<h2>Party Composition</h2>
<ul>
<li>Best general party: <strong>Cloud + Tifa + Aerith</strong> &mdash; covers physical, stagger, and magic</li>
<li>Swap Aerith for Barret against bosses with heavy ranged mechanics</li>
<li>Always have one <strong>healer</strong> (Aerith or a Cure Materia user) in your active party</li>
<li><strong>Assess Materia</strong> is mandatory &mdash; it reveals enemy weaknesses and stagger conditions</li>
</ul>`
},

// ═════════════════════════════════════════
//  PALIA
// ═════════════════════════════════════════
"palia": {
  about: `<p><strong>Palia</strong>, developed by Singularity 6, is a cozy community simulation MMO that blends farming, crafting, exploration, and social gameplay. Released in 2023, it offers a relaxed alternative to high-stress multiplayer games.</p>
<p>Set in the village of <strong>Kilima</strong>, you play as a human who has mysteriously reappeared in a world where humans have been gone for millennia. The Majiri &mdash; the current inhabitants &mdash; are curious and sometimes wary of your return. Through farming, cooking, crafting, and building relationships, you'll uncover the mystery of humanity's disappearance.</p>
<p>Palia is <strong>free-to-play</strong> with regular updates adding new quests, villagers, and seasonal events. Its warm art style and gentle pace make it a perfect unwind-after-work game.</p>`,
  walkthrough: `<p>Palia is a non-linear game where you progress at your own pace. This guide outlines the most efficient early-game path while respecting the game's cozy nature.</p>
<h2>Your First Days in Kilima</h2>
<ol>
<li>Complete the opening tutorial with <strong>Hekla</strong> &mdash; she teaches basic movement, crafting, and cooking</li>
<li>Set up your first <strong>home plot</strong> &mdash; place your house, then immediately build a garden</li>
<li>Plant <strong>Tomato and Onion</strong> seeds &mdash; these are your foundational cooking ingredients</li>
<li>Introduce yourself to <strong>every villager</strong> &mdash; relationship building starts immediately</li>
<li>Visit the <strong>General Store</strong> and <strong>Mining Outpost</strong> to understand the skill system</li>
</ol>
<h2>Establishing Your Routine</h2>
<p>Palia's daily loop becomes the core of your gameplay:</p>
<ul>
<li><strong>Morning:</strong> Water and harvest crops, check mail for quests, visit villagers</li>
<li><strong>Daytime:</strong> Focus on skill activities &mdash; mining, foraging, fishing, or hunting</li>
<li><strong>Evening:</strong> Cook meals with gathered ingredients, sell excess at the market</li>
<li><strong>Night:</strong> Socialize, give gifts, and attend village events</li>
</ul>
<h2>Progression Milestones</h2>
<ul>
<li>Level each skill to <strong>5</strong> to unlock the next tier of recipes and tools</li>
<li>Complete the <strong>"Temple of the Roots"</strong> questline for story progression</li>
<li>Unlock the <strong>Bahari Bay</strong> region through story advancement</li>
<li>Begin <strong>romancing</strong> your preferred villager once friendship reaches level 3+</li>
</ul>`,
  cooking: `<p>Cooking is Palia's most important skill &mdash; high-quality meals sell for significant gold and provide energy restoration essential for adventuring.</p>
<h2>Cooking Basics</h2>
<ul>
<li>Use the <strong>cooking station</strong> in your home or the communal kitchen</li>
<li>Recipes require specific ingredients in exact combinations &mdash; experiment or find recipe books</li>
<li>Meal quality depends on <strong>ingredient freshness</strong> and your cooking skill level</li>
<li><strong>Star-quality</strong> ingredients produce star-quality meals worth 50% more gold</li>
</ul>
<h2>Essential Early Recipes</h2>
<ul>
<li><strong>Garden Soup</strong> &mdash; Tomato + Onion + Carrot. Easy to grow, decent energy restoration</li>
<li><strong>Grilled Mushrooms</strong> &mdash; Any mushroom + Butter. Simple foraging-based meal</li>
<li><strong>Fish Stew</strong> &mdash; Any fish + Tomato + Spice. Higher value, uses fishing skill</li>
<li><strong>Berry Pie</strong> &mdash; Blueberry + Butter + Flour. Popular gift item for villagers</li>
</ul>
<h2>Best Money-Making Recipes</h2>
<ul>
<li><strong>Steak Dinner</strong> &mdash; Heartbeet + Meat + Spice. High value from hunting</li>
<li><strong>Sashimi</strong> &mdash; Any high-quality fish. Pure profit if you fish efficiently</li>
<li><strong>Cake</strong> &mdash; Flour + Butter + Sugar + Egg. Expensive ingredients but very profitable</li>
<li><strong>Star-Quality anything</strong> &mdash; Star ingredients in any recipe dramatically increase value</li>
</ul>
<h2>Ingredient Sources</h2>
<ul>
<li><strong>Home Garden:</strong> Tomatoes, Onions, Carrots, Potatoes, Wheat (foundational crops)</li>
<li><strong>Foraging:</strong> Mushrooms, berries, herbs, honey (daily spawns in specific locations)</li>
<li><strong>Fishing:</strong> Location-dependent. Rare fish sell for high prices raw or cooked</li>
<li><strong>Hunting:</strong> Meat from Sernuk and Chapaa. Higher hunting skill = better yields</li>
</ul>`,
  crafting: `<p>Crafting in Palia covers furniture, tools, and home decoration. As your crafting skill improves, you unlock increasingly sophisticated recipes.</p>
<h2>Tool Upgrades</h2>
<p>Better tools are the primary reason to level crafting early:</p>
<ul>
<li><strong>Standard Tools</strong> &mdash; Starting quality. Slow gathering speed</li>
<li><strong>Fine Tools</strong> &mdash; Crafted with copper bars. 25% faster gathering</li>
<li><strong>Masterwork Tools</strong> &mdash; Crafted with iron bars. 50% faster gathering + rare drop chance</li>
<li><strong>Exquisite Tools</strong> &mdash; Crafted with flow-infused bars. Maximum efficiency</li>
</ul>
<h2>Furniture Crafting</h2>
<ul>
<li>Furniture recipes unlock as you level crafting and discover new materials</li>
<li><strong>Home decoration</strong> increases your "Home Score" &mdash; higher scores attract rare visitors</li>
<li>Seasonal furniture is available during events &mdash; some items are exclusive</li>
<li>Place crafting stations, storage, and decoration to create an efficient home layout</li>
</ul>
<h2>Material Sources</h2>
<ul>
<li><strong>Wood:</strong> Trees throughout Kilima and Bahari Bay. Different trees yield different wood types</li>
<li><strong>Stone:</strong> Rocks and mining nodes. Copper, Iron, and Flow Ore from specific locations</li>
<li><strong>Textiles:</strong> Plant fibers &rarr; Fabric. Animal products from ranching</li>
<li><strong>Special:</strong> Flow-Infused items from completing temple puzzles and rare node spawns</li>
</ul>`,
  romance: `<p>Palia features a full romance system with multiple eligible villagers. Building relationships takes time, but the journey is rewarding.</p>
<h2>Romanceable Villagers</h2>
<ul>
<li><strong>Tish</strong> &mdash; The warm, artistic innkeeper. Loves home-cooked meals and artwork</li>
<li><strong>Hassian</strong> &mdash; The stoic hunter with a hidden soft side. Prefers practical gifts</li>
<li><strong>Auni</strong> &mdash; The cheerful postmaster. Enjoys foraged items and flowers</li>
<li><strong>Delaila</strong> &mdash; The elegant tailor. Appreciates fine crafted goods</li>
<li><strong>Kenli</strong> &mdash; The scholarly mayor's daughter. Loves books and rare finds</li>
</ul>
<h2>Building Friendship</h2>
<ul>
<li>Talk to villagers <strong>daily</strong> &mdash; even a brief conversation builds relationship points</li>
<li>Give <strong>gifts 1&ndash;2 times per day</strong>. Favorite gifts give 3x the friendship points</li>
<li>Complete <strong>villager-specific quests</strong> &mdash; these provide major relationship boosts</li>
<li>Attend <strong>village events</strong> and speak to your target villager during them</li>
</ul>
<h2>Gift Preferences</h2>
<ul>
<li><strong>Universal likes:</strong> Home-cooked meals (quality matters), flowers, foraged items</li>
<li><strong>Universal loves:</strong> Star-quality items, rare crafted goods, quest-specific items</li>
<li><strong>Individual preferences:</strong> Each villager has 3&ndash;4 favorite items discovered through dialogue hints</li>
<li>Wrong gifts still give points &mdash; just fewer. Don't stress about perfect gifts early on</li>
</ul>
<h2>Romance Milestones</h2>
<ul>
<li><strong>Friendship Level 2:</strong> Unlock personal quests</li>
<li><strong>Friendship Level 3:</strong> Unlock romantic dialogue options</li>
<li><strong>Friendship Level 4:</strong> Dating and relationship confirmation</li>
<li><strong>Friendship Level 5+:</strong> Deepening relationship with unique story events</li>
</ul>`,
  "beginner-tips": `<p>Palia is designed to be relaxing, but understanding its systems early helps you progress faster and enjoy the game more fully.</p>
<h2>Day 1 Priorities</h2>
<ol>
<li>Complete <strong>Hekla's tutorial</strong> &mdash; it teaches essential mechanics efficiently</li>
<li><strong>Plant your garden</strong> immediately &mdash; crops grow in real-time, so start early</li>
<li><strong>Meet every villager</strong> &mdash; you can't build relationships with people you haven't met</li>
<li>Explore <strong>Kilima Village</strong> to learn where everything is: shops, skill NPCs, cooking station</li>
</ol>
<h2>Skill Priorities</h2>
<ul>
<li><strong>Foraging</strong> (Level first) &mdash; Free daily resources, no tools needed, fuels cooking</li>
<li><strong>Gardening</strong> (Level early) &mdash; Self-sustaining ingredient supply for cooking</li>
<li><strong>Cooking</strong> (Level alongside gardening) &mdash; Converts raw ingredients into valuable meals</li>
<li><strong>Mining</strong> (Level when convenient) &mdash; Provides materials for tool upgrades</li>
<li><strong>Fishing</strong> (Level for income) &mdash; Rare fish are excellent money-makers</li>
</ul>
<h2>Economy Basics</h2>
<ul>
<li><strong>Cooked food</strong> sells for much more than raw ingredients &mdash; always cook before selling</li>
<li><strong>Star-quality items</strong> are worth 50% more &mdash; prioritize star crops and catches</li>
<li>Don't <strong>buy what you can gather</strong> &mdash; most early-game items are available for free</li>
<li>Save gold for <strong>tool upgrades</strong> &mdash; they provide the biggest quality-of-life improvement</li>
</ul>
<h2>Common Mistakes</h2>
<ul>
<li>Don't skip <strong>daily villager conversations</strong> &mdash; relationship building is time-gated</li>
<li>Don't neglect your <strong>garden</strong> &mdash; wasted growing time can't be recovered</li>
<li>Don't <strong>sell raw ingredients</strong> when you could cook them first</li>
<li>Don't <strong>spread yourself thin</strong> across all skills &mdash; focus on 2&ndash;3 until they're profitable</li>
</ul>`
},

// ═════════════════════════════════════════
//  BLACK MYTH: WUKONG
// ═════════════════════════════════════════
"wukong": {
  about: `<p><strong>Black Myth: Wukong</strong>, developed by Game Science, is an action RPG based on the classic Chinese novel <em>Journey to the West</em>. Released in August 2024, it became a global phenomenon &mdash; selling over 10 million copies in three days and becoming one of the highest-rated games of the year.</p>
<p>You play as <strong>the Destined One</strong>, a monkey warrior retracing the steps of Sun Wukong's legendary journey. Across six chapters, you'll battle gods, demons, and mythical beasts while uncovering the truth about Wukong's legacy and the celestial bureaucracy that governs the world.</p>
<p>The game features precise action combat with <strong>stance-switching</strong> mechanics, <strong>72 transformations</strong>, spell weaving, and some of the most visually spectacular boss fights in gaming history.</p>`,
  walkthrough: `<h2>Chapter 1 &mdash; Fire and Obsession</h2>
<p>The game begins in a burning forest. This chapter teaches core combat mechanics against fire-themed enemies. Key encounters:</p>
<ul>
<li><strong>Bullguard</strong> &mdash; Your first major boss. Teaches dodge timing and punish windows</li>
<li><strong>Guangzhi</strong> &mdash; The fire wolf. Tests your ability to handle elemental attacks</li>
<li><strong>Elder Jinchi</strong> &mdash; Chapter boss. Requires good stance-switching between phases</li>
</ul>
<h2>Chapter 2 &mdash; The Yellow Wind</h2>
<p>A desert region plagued by sandstorms and the Yellow Wind Sage's influence:</p>
<ul>
<li><strong>Tiger Vanguard</strong> &mdash; Fast, aggressive boss that punishes greed</li>
<li><strong>Fuban</strong> &mdash; The giant centipede requires precise dodge timing through multi-hit combos</li>
<li><strong>Yellow Wind Sage</strong> &mdash; Chapter boss with wind-based attacks that limit visibility</li>
</ul>
<h2>Chapter 3 &mdash; The Webbed Hollow</h2>
<p>A haunted forest filled with spider demons and illusions:</p>
<ul>
<li><strong>Violet Spider</strong> &mdash; Multi-phase fight with web traps and venom mechanics</li>
<li><strong>Zhudanzi</strong> &mdash; Puzzling encounter requiring specific spell usage</li>
<li><strong>Kang-Jin Star</strong> &mdash; The chapter's main boss, a celestial deity with reality-warping attacks</li>
</ul>
<h2>Chapter 4 &mdash; The Flaming Mountain</h2>
<p>Volcanic region with some of the game's hardest encounters:</p>
<ul>
<li><strong>Yin Tiger</strong> &mdash; One of the hardest optional bosses. Requires near-perfect dodge patterns</li>
<li><strong>Red Boy</strong> &mdash; Fast and aggressive with unblockable grab attacks</li>
<li><strong>Bull King</strong> &mdash; The chapter boss and one of the game's most iconic fights</li>
</ul>
<h2>Chapter 5 &mdash; The Stolen Relics</h2>
<p>The penultimate chapter reveals the conspiracy behind Wukong's original journey:</p>
<ul>
<li><strong>Scorpion Lord</strong> &mdash; Poison-based boss requiring antidote preparation</li>
<li><strong>Yellowbrow</strong> &mdash; Deceptive boss with illusion-based mechanics</li>
</ul>
<h2>Chapter 6 &mdash; The Celestial Court</h2>
<p>The final chapter takes you to the heavens for the ultimate confrontation:</p>
<ul>
<li><strong>Erlang Shen</strong> &mdash; The secret final boss, requiring all your mastered skills</li>
<li><strong>The Great Sage</strong> &mdash; The true final encounter with multiple phases</li>
</ul>`,
  "boss-guide": `<p>Black Myth: Wukong features over 80 boss encounters. This guide covers the most challenging and important fights with specific strategies.</p>
<h2>Erlang Shen &mdash; The Divine General</h2>
<h3>Chapter 6 | Secret Final Boss</h3>
<p>Widely considered the hardest boss in the game. Erlang Shen combines every mechanic you've learned into one relentless encounter.</p>
<ul>
<li><strong>Phase 1:</strong> Aggressive melee combos with a three-hit string ending in a thrust. Dodge the first two, parry the third</li>
<li><strong>Phase 2:</strong> Adds a shield that must be broken with heavy attacks before he can be damaged</li>
<li><strong>Phase 3:</strong> Heavenly form with AoE attacks &mdash; use Pillar Stance to gain height advantage</li>
<li><strong>Key:</strong> Use the <strong>Immobilize</strong> spell during his recovery frames to get free damage windows</li>
<li><strong>Recommended:</strong> Max-level gourd, Pluck of Many spell for distraction, and Ring of Fire for damage boost</li>
</ul>
<h2>Yin Tiger</h2>
<h3>Chapter 4 | Optional</h3>
<p>The hardest optional boss in the game. His attacks are fast, have minimal telegraph, and deal massive damage.</p>
<ul>
<li>Every attack chains into another &mdash; do not try to punish mid-combo</li>
<li>His leaping slam has a long wind-up but covers massive distance &mdash; dodge sideways, not backward</li>
<li>Use <strong>Ring of Fire</strong> in Smash Stance for maximum damage during his brief recovery windows</li>
<li><strong>Thrust Stance's</strong> heavy attack can interrupt some of his slower moves</li>
</ul>
<h2>Yellowbrow</h2>
<h3>Chapter 5</h3>
<p>A deceptive boss who uses illusions and golden light attacks.</p>
<ul>
<li>His <strong>golden aura</strong> reflects projectiles &mdash; don't use ranged spells during glow phases</li>
<li>When he <strong>splits into three</strong>, only the real one takes damage (watch for the one that doesn't shimmer)</li>
<li><strong>Immobilize</strong> spell is the key &mdash; use it the moment he finishes a combo string</li>
</ul>
<h2>Bull King</h2>
<h3>Chapter 4 Boss</h3>
<p>A massive, powerful boss with devastating grab attacks.</p>
<ul>
<li>His <strong>charge attack</strong> is a one-shot at lower levels &mdash; always be ready to dodge</li>
<li><strong>Second phase:</strong> his size increases and attacks gain fire damage &mdash; equip fire resistance</li>
<li><strong>Pillar Stance</strong> is ideal &mdash; his large hitbox makes high attacks extremely effective</li>
<li>Summon the <strong>Fire transformation</strong> to deal consistent damage during his recovery</li>
</ul>
<h2>General Boss Tips</h2>
<ul>
<li>Learn each boss's <strong>3-attack combo rhythm</strong> &mdash; most follow a consistent timing pattern</li>
<li>Don't mash dodge &mdash; timed dodges build Focus for your heavy attacks</li>
<li><strong>Immobilize</strong> is the most valuable spell in boss fights &mdash; use it to create 3-second damage windows</li>
<li>Always have your <strong>gourd upgraded</strong> &mdash; health recovery is limited, so every sip counts</li>
</ul>`,
  spells: `<p>The spell system in Black Myth: Wukong offers powerful abilities that complement your melee combat. Choosing the right spell for each encounter is crucial.</p>
<h2>Core Spells</h2>
<ul>
<li><strong>Immobilize</strong> &mdash; Freezes an enemy in place for ~3 seconds. Your most valuable tool for boss fights. Use during attack recoveries for free damage</li>
<li><strong>Ring of Fire</strong> &mdash; Creates a fire circle that boosts your damage and slowly heals you. Essential for prolonged boss fights</li>
<li><strong>Pluck of Many</strong> &mdash; Creates clones of yourself that attack independently. Great for distracting bosses and adding DPS</li>
<li><strong>A Pluck of Many (Upgrade)</strong> &mdash; Clones become more durable and deal more damage at higher spell levels</li>
</ul>
<h2>Transformations</h2>
<p>Defeating certain bosses grants their transformation &mdash; a powerful temporary form:</p>
<ul>
<li><strong>Guangzhi (Fire Wolf)</strong> &mdash; Fast fire attacks. Excellent against ice-themed enemies</li>
<li><strong>Yellow Loong</strong> &mdash; Lightning-based with devastating area attacks</li>
<li><strong>Red Boy</strong> &mdash; Fire transformation with a spinning attack that hits multiple times</li>
<li><strong>Yin Tiger</strong> &mdash; Dark element with fast slashes and high damage</li>
<li>Each transformation has its own <strong>health bar</strong> &mdash; it's essentially a free extra life</li>
</ul>
<h2>Combat Stances</h2>
<p>Stances determine your heavy attack style and can be switched mid-combat:</p>
<ul>
<li><strong>Smash Stance</strong> &mdash; Heavy overhead slam. Best for staggering and high single-hit damage. Standard PvE stance</li>
<li><strong>Pillar Stance</strong> &mdash; Attack from atop your staff. Ideal for tall/boss enemies. Provides evasion during attacks</li>
<li><strong>Thrust Stance</strong> &mdash; Long-range poke. Safe option for keeping distance while dealing damage</li>
</ul>
<h2>Spell Rotation for Bosses</h2>
<ol>
<li>Open with <strong>Ring of Fire</strong> for damage buff</li>
<li>Build <strong>Focus</strong> through light attacks and dodges</li>
<li>Use <strong>Immobilize</strong> during boss recovery frames</li>
<li>Unleash heavy attack combo during Immobilize window</li>
<li>Switch to transformation when low on health for a "free life"</li>
<li>Repeat cycle, using <strong>Pluck of Many</strong> for additional pressure</li>
</ol>`,
  secrets: `<p>Black Myth: Wukong is filled with hidden areas, secret bosses, and obscure items that are easy to miss on a first playthrough.</p>
<h2>Secret Bosses</h2>
<ul>
<li><strong>Yellow Loong</strong> &mdash; Found by completing the Loong questline across multiple chapters. Requires finding four Loong scales in hidden locations. One of the hardest and most rewarding fights</li>
<li><strong>Erlang Shen</strong> &mdash; The secret final boss. Requires collecting all Great Sage relics and accessing the hidden area in Chapter 6</li>
<li><strong>Duskveil</strong> &mdash; Hidden in Chapter 3's webbed area. Requires solving a bell-ringing puzzle in a specific order</li>
<li><strong>Supreme Inspector</strong> &mdash; Optional Chapter 5 boss accessible through a hidden path in the Flaming Mountain</li>
</ul>
<h2>Hidden Areas</h2>
<ul>
<li><strong>The Ancient Guanyin Temple</strong> &mdash; Chapter 1. Accessible by ringing three hidden bells in the forest area</li>
<li><strong>The Painted Realm</strong> &mdash; Chapter 3. Enter through a specific painting in the spider queen's domain</li>
<li><strong>The Cell of the Damned</strong> &mdash; Chapter 4. Hidden behind a breakable wall in the mountain passage</li>
<li><strong>The Celestial Peach Garden</strong> &mdash; Chapter 6. A peaceful hidden area with lore and upgrade materials</li>
</ul>
<h2>Missable Items</h2>
<ul>
<li><strong>Loong Scales</strong> &mdash; Four total, one per chapter. Missing any locks you out of Yellow Loong fight</li>
<li><strong>Great Sage Relics</strong> &mdash; Collect all to access Erlang Shen. Some are in easily-missed side paths</li>
<li><strong>Secret Vessels</strong> &mdash; Upgrade materials for your gourd. Several are behind environmental puzzles</li>
<li><strong>Transformation Bosses</strong> &mdash; If you defeat a boss without meeting the hidden condition, you may miss their transformation</li>
</ul>
<h2>Exploration Tips</h2>
<ul>
<li><strong>Hit suspicious walls</strong> &mdash; some breakable walls hide secret areas</li>
<li><strong>Return to earlier chapters</strong> after gaining new spells &mdash; previously inaccessible areas may open up</li>
<li><strong>Talk to NPCs</strong> multiple times &mdash; some only reveal quest information on repeated conversations</li>
<li><strong>Check every shrine's surroundings</strong> &mdash; hidden paths often branch off from shrine areas</li>
</ul>`,
  "beginner-tips": `<p>Black Myth: Wukong's combat is demanding but fair. These tips will help you master the fundamentals before facing the game's toughest challenges.</p>
<h2>Combat Fundamentals</h2>
<ul>
<li><strong>Dodge timing &gt; dodge frequency</strong> &mdash; Perfect dodges build Focus and create damage opportunities. Random dodging wastes stamina</li>
<li><strong>Focus system</strong> &mdash; Light attacks and dodges build Focus. Spend Focus on heavy attacks for massive damage</li>
<li><strong>Don't panic roll</strong> &mdash; Most attacks have clear telegraphs. Watch the wind-up, dodge the hit, then punish</li>
<li><strong>Stance switching mid-combo</strong> &mdash; Switch to Pillar when a boss is tall, Smash for stagger, Thrust for safety</li>
</ul>
<h2>Early Game Priorities</h2>
<ol>
<li>Learn the dodge timing against basic enemies before tackling bosses</li>
<li>Upgrade your <strong>gourd</strong> (healing flask) at every opportunity &mdash; health sustain is limited</li>
<li>Unlock <strong>Immobilize</strong> spell as soon as possible &mdash; it trivializes many encounters</li>
<li>Explore thoroughly &mdash; hidden areas contain upgrade materials essential for progression</li>
</ol>
<h2>Stance Guide</h2>
<ul>
<li><strong>Start with Smash Stance</strong> &mdash; It's the most intuitive and effective for 80% of encounters</li>
<li><strong>Switch to Pillar for bosses</strong> &mdash; The height advantage makes many boss attacks miss entirely</li>
<li><strong>Use Thrust for safety</strong> &mdash; When learning a boss's patterns, Thrust lets you deal damage from range</li>
<li><strong>Combo: Light &times; 4 &rarr; Stance Switch &rarr; Heavy</strong> &mdash; This combo maximizes Focus usage and damage</li>
</ul>
<h2>Resource Management</h2>
<ul>
<li><strong>Gourd sips</strong> are limited &mdash; upgrade capacity whenever you find the materials</li>
<li><strong>Spells share a cooldown</strong> &mdash; don't blow all your abilities at once</li>
<li><strong>Transformations</strong> are essentially extra lives &mdash; save them for critical moments</li>
<li><strong>Spirit skills</strong> (absorbed from enemies) provide free utility &mdash; use them between spell cooldowns</li>
</ul>
<h2>Common Mistakes</h2>
<ul>
<li>Don't <strong>button-mash</strong> &mdash; timed combos deal more damage and build Focus faster</li>
<li>Don't ignore the <strong>skill tree</strong> &mdash; stat upgrades make a significant difference in boss fights</li>
<li>Don't <strong>skip exploration</strong> &mdash; hidden items are often essential for boss preparation</li>
<li>Don't use <strong>Immobilize recklessly</strong> &mdash; save it for the most dangerous attack patterns</li>
</ul>`
}
};
