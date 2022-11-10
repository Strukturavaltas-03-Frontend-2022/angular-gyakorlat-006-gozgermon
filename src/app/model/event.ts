/*`@var name {string}`, 
`@var date {string}`, 
`@var time {string}`,
`@var location {Location}`  */
import {Location} from 'src/app/model/location'

export class Event {
    name:string="";
    date:string="";
    time:string="";
    location:Location=new Location();
}
