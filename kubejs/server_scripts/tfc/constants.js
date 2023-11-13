// priority: 0

const defaultProperty = [
    "ingot"
]

const partProperty = [
    "double_ingot",
    "sheet",
    "double_sheet",
    "rod",
    "block",
    "block_stairs",
    "block_slab"
]

const armorProperty = [
    "boots",
    "greaves",
    "chestplate",
    "helmet",
    "shield",
    "unfinished_boots",
    "unfinished_chestplate",
    "unfinished_greaves",
    "unfinished_helmet",
]

const toolProperty = [
    "axe_head",
    "axe",
    "chisel_head",
    "chisel",
    "hoe_head",
    "fish_hook",
    "fishing_rod",
    "hammer_head",
    "hammer",
    "hoe",
    "hoe_head",
    "horse_armor",
    "javelin_head",
    "javelin",
    "knife_blade",
    "knife",
    "mace_head",
    "mace",
    "pickaxe_head",
    "pickaxe",
    "propick_head",
    "propick",
    "saw_blade",
    "saw",
    "scythe_blade",
    "scythe",
    "shears",
    "shovel_head",
    "shovel",
    "sword_blade",
    "sword",
    "tuyere"
]

const utilityProperty = [
    "anvil",
    "bars",
    "block",
    "block_stairs",
    "block_slab",
    "chain",
    "lamp",
    "trapdoor",
    "unfinished_lamp"
]

const itemTypeToHeat = {
    "anvil" : { heat_capacity : 40.0, useTag : false, hasGTVariant : null },
    "axe_head" : { heat_capacity : 2.857, useTag : true, hasGTVariant : "axe_head" },
    "axe" : { heat_capacity : 2.857, useTag : false, hasGTVariant : "axe" },
    "bars" : { heat_capacity : 0.714, useTag : false, hasGTVariant : null },
    "block_slab" : { heat_capacity : 0.0, useTag : false, hasGTVariant : null },
    "block_stairs" : { heat_capacity : 0.0, useTag : false, hasGTVariant : null },
    "block" : { heat_capacity : 2.857, useTag : true, hasGTVariant : "material_blocks/block" },
    "boots" : { heat_capacity : 11.429, useTag : false, hasGTVariant : null },
    "chain" : { heat_capacity : 0.171, useTag : false, hasGTVariant : null },
    "chestplate" : { heat_capacity : 22.857, useTag : false, hasGTVariant : null },
    "chisel_head" : { heat_capacity : 2.857, useTag : false, hasGTVariant : null },
    "chisel" : { heat_capacity : 2.857, useTag : false, hasGTVariant : null },
    "double_ingot" : { heat_capacity : 5.714, useTag : false, hasGTVariant : null },
    "double_sheet" : { heat_capacity : 11.429, useTag : true, hasGTVariant : "plates/double" },
    "fish_hook" : { heat_capacity : 5.714, useTag : false, hasGTVariant : null },
    "fishing_rod" : { heat_capacity : 5.714, useTag : false, hasGTVariant : null },
    "greaves" : { heat_capacity : 17.143, useTag : false, hasGTVariant : null },
    "hammer_head" : { heat_capacity : 2.857, useTag : true, hasGTVariant : "hammer_heads" },
    "hammer" : { heat_capacity : 2.857, useTag : false, hasGTVariant : "hammer" },
    "helmet" : { heat_capacity : 17.143, useTag : false, hasGTVariant : null },
    "hoe_head" : { heat_capacity : 2.857, useTag : true, hasGTVariant : "hoe_heads" },
    "hoe" : { heat_capacity : 2.857, useTag : false, hasGTVariant : "hoe" },
    "horse_armor" : { heat_capacity : 34.286, useTag : false, hasGTVariant : null },
    "ingot" : { heat_capacity : 2.857, useTag : true, hasGTVariant : "ingots" },
    "javelin_head" : { heat_capacity : 2.857, useTag : false, hasGTVariant : null },
    "javelin" : { heat_capacity : 2.857, useTag : false, hasGTVariant : null },
    "knife_blade" : { heat_capacity : 2.857, useTag : true, hasGTVariant : "knife_heads" },
    "knife" : { heat_capacity : 2.857, useTag : false, hasGTVariant : "knife" },
    "lamp" : { heat_capacity : 2.857, useTag : false, hasGTVariant : null },
    "mace_head" : { heat_capacity : 5.714, useTag : false, hasGTVariant : null },
    "mace" : { heat_capacity : 5.714, useTag : false, hasGTVariant : null },
    "pickaxe_head" : { heat_capacity : 2.857, useTag : true, hasGTVariant : "pickaxe_heads" },
    "pickaxe" : { heat_capacity : 2.857, useTag : false, hasGTVariant : "pickaxe" },
    "propick_head" : { heat_capacity :  2.857, useTag : false, hasGTVariant : null },
    "propick" : { heat_capacity : 2.857, useTag : false, hasGTVariant : null },
    "rod" : { heat_capacity : 1.429, useTag : true, hasGTVariant : "rods" },
    "saw_blade" : { heat_capacity : 2.857, useTag : true, hasGTVariant : "saw_heads" },
    "saw" : { heat_capacity : 2.857, useTag : false, hasGTVariant : "saw" },
    "scythe_blade" : { heat_capacity : 2.857, useTag : true, hasGTVariant : "scythe_heads" },
    "scythe" : { heat_capacity : 2.857, useTag : false, hasGTVariant : "scythe" },
    "shears" : { heat_capacity : 5.714, useTag : false, hasGTVariant : null },
    "sheet" : { heat_capacity : 5.714, useTag : true, hasGTVariant : "plates" },
    "shield" : { heat_capacity : 11.429, useTag : false, hasGTVariant : null },
    "shovel_head" : { heat_capacity : 2.857, useTag : true, hasGTVariant : "shovel_heads" },
    "shovel" : { heat_capacity : 2.857, useTag : false, hasGTVariant : "shovel" },
    "sword_blade" : { heat_capacity : 5.714, useTag : true, hasGTVariant : "sword_heads" },
    "sword" : { heat_capacity : 5.714, useTag : false, hasGTVariant : "sword" },
    "trapdoor" : { heat_capacity : 5.714, useTag : false, hasGTVariant : null },
    "tuyere" : { heat_capacity : 11.429, useTag : false, hasGTVariant : null },
    "unfinished_boots" : { heat_capacity : 5.714, useTag : false, hasGTVariant : null },
    "unfinished_chestplate" : { heat_capacity : 11.429, useTag : false, hasGTVariant : null },
    "unfinished_greaves" : { heat_capacity : 11.429, useTag : false, hasGTVariant : null },
    "unfinished_helmet" : { heat_capacity : 11.429, useTag : false, hasGTVariant : null },
    "unfinished_lamp" : { heat_capacity : 2.857, useTag : false, hasGTVariant : null }
}

const metalToSpecs = {
    "bismuth" : { forging_temperature: 162, welding_temperature: 216, hasOre: true, customName: null, props: [].concat(defaultProperty, partProperty) },
    "brass" : { forging_temperature: 558, welding_temperature: 744, hasOre: false, customName: null, props: [].concat(defaultProperty, partProperty) },
    "gold" : { forging_temperature: 636, welding_temperature: 848, hasOre: true, customName: null, props: [].concat(defaultProperty, partProperty) },
    "nickel" : { forging_temperature: 872, welding_temperature: 1162, hasOre: true, customName: null, props: [].concat(defaultProperty, partProperty) },
    "rose_gold" : { forging_temperature: 576, welding_temperature: 768, hasOre: false, customName: null, props: [].concat(defaultProperty, partProperty) },
    "silver" : { forging_temperature: 577, welding_temperature: 769, hasOre: true, customName: null, props: [].concat(defaultProperty, partProperty) },
    "tin" : { forging_temperature: 138, welding_temperature: 184, hasOre: true, customName: null, props: [].concat(defaultProperty, partProperty) },
    "zinc" : { forging_temperature: 252, welding_temperature: 336, hasOre: false, customName: null, props: [].concat(defaultProperty, partProperty) },
    "sterling_silver": { forging_temperature: 570, welding_temperature: 760, hasOre: false, customName: null, props: [].concat(defaultProperty, partProperty) },
    "copper" : { forging_temperature: 648, welding_temperature: 864, hasOre: true, customName: null, props: [].concat(defaultProperty, partProperty, armorProperty, toolProperty, utilityProperty) },
    "bismuth_bronze" : { forging_temperature: 591, welding_temperature: 788, hasOre: false, customName: null, props: [].concat(defaultProperty, partProperty, armorProperty, toolProperty, utilityProperty) },
    "bronze" : { forging_temperature: 570, welding_temperature: 760, hasOre: false, customName: null, props: [].concat(defaultProperty, partProperty, armorProperty, toolProperty, utilityProperty) },
    "black_bronze" : { forging_temperature: 642, welding_temperature: 856, hasOre: false, customName: null, props: [].concat(defaultProperty, partProperty, armorProperty, toolProperty, utilityProperty) },
    "wrought_iron" : { forging_temperature: 921, welding_temperature: 1228, hasOre: false, customName: null, props: [].concat(defaultProperty, partProperty, armorProperty, toolProperty, utilityProperty) },
    "cast_iron" : { forging_temperature: 921, welding_temperature: 1228, hasOre: true, customName: "iron", props: [].concat(defaultProperty, partProperty) },
    "pig_iron" : { forging_temperature: 921, welding_temperature: 1228, hasOre: false, customName: null, props: defaultProperty},
    "steel" : { forging_temperature: 924, welding_temperature: 1232, hasOre: false, props: [].concat(defaultProperty, partProperty, armorProperty, toolProperty, utilityProperty) },
    "high_carbon_black_steel" : { forging_temperature: 924, welding_temperature: 1232, hasOre: false, customName: null, props: defaultProperty },
    "high_carbon_red_steel" : { forging_temperature: 924, welding_temperature: 1232, hasOre: false, customName: null, props: defaultProperty },
    "high_carbon_blue_steel" : { forging_temperature: 924, welding_temperature: 1232, hasOre: false, customName: null, props: defaultProperty },
    "weak_steel" : {  forging_temperature: 924, welding_temperature: 1232, hasOre: false, customName: null, props: defaultProperty },
    "weak_red_steel" : { forging_temperature: 924, welding_temperature: 1232, hasOre: false, customName: null, props: defaultProperty },
    "weak_blue_steel" : { forging_temperature: 924, welding_temperature: 1232, hasOre: false, customName: null, props: defaultProperty },
    "black_steel" : { forging_temperature: 891, welding_temperature: 1188, hasOre: false, customName: null, props: [].concat(defaultProperty, partProperty, armorProperty, toolProperty, utilityProperty) },
    "red_steel" : { forging_temperature: 924, welding_temperature: 1232, hasOre: false, customName: null, props: [].concat(defaultProperty, partProperty, armorProperty, toolProperty, utilityProperty) },
    "blue_steel" : { forging_temperature: 924, welding_temperature: 1232, hasOre: false, customName: null, props: [].concat(defaultProperty, partProperty, armorProperty, toolProperty, utilityProperty) },
    "unknown" : { forging_temperature: 240, welding_temperature: 320, hasOre: false, customName: null, props: defaultProperty },
    "cassiterite" : {forging_temperature: 138, welding_temperature: 184, hasOre: true, customName: null, props: []},
    "garnierite" : {forging_temperature: 138, welding_temperature: 184, hasOre: true, customName: null, props: []},
    "hematite" : {forging_temperature: 138, welding_temperature: 184, hasOre: true, customName: null, props: []},
    "limonite" : {forging_temperature: 138, welding_temperature: 184, hasOre: true, customName: null, props: []},
    "magnetite" : {forging_temperature: 138, welding_temperature: 184, hasOre: true, customName: null, props: []},
    "malachite" : {forging_temperature: 138, welding_temperature: 184, hasOre: true, customName: null, props: []},
    "pyrite" : {forging_temperature: 138, welding_temperature: 184, hasOre: true, customName: null, props: []},
    "sphalerite" : {forging_temperature: 138, welding_temperature: 184, hasOre: true, customName: null, props: []},
    "tetrahedrite" : {forging_temperature: 138, welding_temperature: 184, hasOre: true, customName: null, props: []}
}

const asd = [

]

const removeAllTagsItems = [
    'tfc:ore/amethyst', 
    'tfc:ore/diamond', 
    'tfc:ore/lapis_lazuli', 
    'tfc:ore/emerald', 
    'tfc:ore/pyrite', 
    'tfc:ore/opal', 
    'tfc:ore/ruby', 
    'tfc:ore/sapphire', 
    'tfc:ore/topaz',
    
    'tfc:gem/amethyst', 
    'tfc:gem/diamond', 
    'tfc:gem/lapis_lazuli', 
    'tfc:gem/emerald', 
    'tfc:gem/pyrite', 
    'tfc:gem/opal', 
    'tfc:gem/ruby', 
    'tfc:gem/sapphire', 
    'tfc:gem/topaz',

    'tfc:ore/bituminous_coal',
    'tfc:ore/lignite'
]
