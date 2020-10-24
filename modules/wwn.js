import { WwnCharacterActorSheet } from "./character-sheet.js"
import { CharacterActorSheet } from "/systems/swnr/module/actors/character-sheet.js" 
import { BaseSheet } from "/systems/swnr/module/items/base-sheet.js" 
import { WwnBaseSheet, types as itemTypes } from "./base-sheet.js"

Hooks.on("init", (app, html, data) => {
    console.log("wwn | Initializing Worlds Without Number.");

    Actors.unregisterSheet("swnr", CharacterActorSheet);
    Actors.registerSheet("wwn", WwnCharacterActorSheet, {types: ["character"], makeDefault: true});

	loadTemplates(["modules/wwn/templates/items/item-base.html"]);

    Items.unregisterSheet("swnr", BaseSheet);
    Items.registerSheet("wwn", WwnBaseSheet, { makeDefault: true, types: itemTypes });
})