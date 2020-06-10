import { Deserializable } from "./deserializable";
import { ServicesItem } from './services-item';

export class Services implements Deserializable {

    services: ServicesItem[];
    count: Number;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
