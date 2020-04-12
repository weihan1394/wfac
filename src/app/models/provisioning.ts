import { Deserializable } from "./deserializable";

export class Provisioning implements Deserializable {
    icon: string;
    name: string;
    operatingSystem: string;
    info: string;
    url: any;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
