import Event from "./models"

export default class EventSerializer {
    /**
     *
     * @param {Event| Event[]} event
     * @return {string}
     */
    serialize(event){
        return JSON.stringify(event);
    }

    /**
     *
     * @return {Event | Event[]}
     * @param {string} event
     */
    unserialize(event){
        const obj = JSON.parse(event);
        return [obj]; //TODO maybe
    }
}