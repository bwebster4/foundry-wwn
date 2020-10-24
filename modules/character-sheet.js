import { CharacterActorSheet } from "/systems/swnr/module/actors/character-sheet.js" 

export class WwnCharacterActorSheet extends CharacterActorSheet {
    async _onLoadSkills(event) {
        const items = skills.map(element => {
            const skillRoot = `wwn.skills.wwn.${element}.`;
            return {
                type: 'skill',
                name: game.i18n.localize(skillRoot + 'name'),
                data: {
                    rank: -1,
                    pool: 'ask',
                    description: game.i18n.localize(skillRoot + 'text'),
                    source: 'Worlds Without Number',
                    dice: "2d6"
                }
            };
        });
        this.actor.createEmbeddedEntity("OwnedItem", items);
    }
} 

const skills = [
    "administer",
    "connect",
    "convince",
    "craft",
    "exert",
    "heal",
    "know",
    "lead",
    "magic",
    "notice",
    "perform",
    "pray",
    "punch",
    "ride",
    "sail",
    "shoot",
    "sneak",
    "stab",
    "survive",
    "trade",
    "work"
]
