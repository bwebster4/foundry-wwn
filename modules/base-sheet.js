import { BaseSheet } from "/systems/swnr/module/items/base-sheet.js"

export class WwnBaseSheet extends BaseSheet {
    get template() {
        const itemType = this.item.data.type;
        if(wwnTypes.find(type => type === itemType)){
            return `/modules/wwn/templates/items/${itemType}-sheet.html`;
        }
        return `/systems/swnr/templates/items/${itemType}-sheet.html`;
    }
}
export const sheet = WwnBaseSheet;
const wwnTypes = ['weapon', 'item', 'armor'];
export const types = wwnTypes.concat(['focus', 'power', 'skill', 'class']);