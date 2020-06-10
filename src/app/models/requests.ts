import { Deserializable } from "./deserializable";
import { RequestsItem } from './requests-item';

export class Requests implements Deserializable {

    requests: RequestsItem[];

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
