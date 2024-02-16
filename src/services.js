
import EventRepository from "./repository";
import Event from "./models";
let fakeEvents = [
    new Event(new Date('2019-12-17T03:24:00'),new Date('2019-12-17T13:24:00'),"Hello World","Campus Numerique","This is an hello world.."),
    new Event(new Date('2018-12-17T03:24:00'),new Date('1995-12-17T03:24:00'),"First event","Campus Numerique","This is an hello world.."),
    new Event(new Date('2020-04-01T09:00:00'),new Date('2020-04-01T17:00:00'),"Unit test againt","Campus Numerique","This is an hello world..")
];
export default class EventService {

    /**
     * The event repository
     * @type {EventRepository}
     */
    _eventRepository;

    /**
     *
     * @param {EventRepository} eventRepository
     */
    constructor(eventRepository) {
        this._eventRepository = eventRepository;
    }

    /**
     * Return all events
     * @return {Event[]}
     */
    getEvents() {
        return this._eventRepository.getAll();
    }

    /**
     * Get the first upcomming event
     * @return {null | Event}
     */
    getFirstEvent() {
        let myTab = fakeEvents;
         for(let i = 0; i < fakeEvents.length; i++)
         {
            if(myTab[0]["startTime"] > fakeEvents[i]["startTime"])
            {
                myTab[0] = fakeEvents[i];
            }
         }
        return myTab[0];// Done
    }

    /**
     * Get the last upcomming event
     * @return {null | Event}
     */
    getLastEvent() {
        let myTab = fakeEvents;
        for(let i = 0; i < fakeEvents.length; i++)
        {
            if(myTab[0]["startTime"] < fakeEvents[i]["startTime"])
            {
                myTab[0] = fakeEvents[i];
            }
        }
        return myTab[0];// Done
    }

    /**
     * Get the longest event
     * @return {null | Event}
     */
    getLongestEvent() {
        let myTab = fakeEvents;
        for(let i = 0; i < fakeEvents.length; i++)
        {
            if((myTab[0]["startTime"] - myTab[0]["endTime"])  > ( fakeEvents[i]["startTime"], fakeEvents[i]["endTime"]))
            {
                myTab[0] = fakeEvents[i];
            }
        }
        return myTab[0];// Done
    }

    /**
     * get the shortest event
     * @return {null | Event}
     */
    getShortestEvent() {
        let myTab = fakeEvents;
        for(let i = 0; i < fakeEvents.length; i++)
        {
            if((myTab[0]["startTime"] - myTab[0]["endTime"])  < ( fakeEvents[i]["startTime"], fakeEvents[i]["endTime"]))
            {
                myTab[0] = fakeEvents[i];
            }
        }
        return myTab[0];// Done
    }

    // A implementer en TDD
    /**
     *
     * @param {Date} time
     * @return {Event[]}
     */
    hasEventOn(time) {
        let evts = this._eventRepository.getAll();
        return evts.filter(function (e) {
            return time >= e.getStartTime() && time <= e.getEndTime();
        });
    }

    // A implementer en TDD
    /**
     *
     * @param title
     * @return {null | Event}
     */
    getEventByTitle(title) {
        return null
    }

    // A implementer en TDD
    /**
     *
     * @param {Date} time
     */
    isLocationAvailable(time) {
    }

    /**
     * Get current events
     * @return {Event[]}
     */
    getCurrentEvents() {
        let now = Date.now();
        return this.hasEventOn(new Date(now));
    }
    
}