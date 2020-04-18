import { Deserializable } from "./deserializable";
import { ProvisioningItem } from './provisioning-item';

export class Provisioning implements Deserializable {

    provisioning: ProvisioningItem[];
    count: Number;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
