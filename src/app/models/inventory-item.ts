import { Deserializable } from "./deserializable";

export class InventoryItem implements Deserializable {

    inventory_Id: string;
    svc_icon: string;
    svc_type: string;
    submittedOn: string;
    createdOn: string;
    name: string;
    details: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}