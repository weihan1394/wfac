import { Deserializable } from "./deserializable";

export class ProvisioningItem implements Deserializable {
    vm_icon: String;
    vm_name: String;
    vm_os: String;
    vm_info: String;
    type: String;
    display: String;
    componenets: any;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
