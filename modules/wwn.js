import { WwnCharacterActorSheet } from "./character-sheet.js"
import { CharacterActorSheet } from "/systems/swnr/module/actors/character-sheet.js" 

Hooks.on("init", (app, html, data) => {
    console.log("wwn | Initializing Worlds Without Number.");

    Actors.unregisterSheet("swnr", CharacterActorSheet);
    Actors.registerSheet("wwn", WwnCharacterActorSheet, {types: ["character"], makeDefault: true});
})