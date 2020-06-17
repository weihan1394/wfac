import { Deserializable } from "./deserializable";
import { InventoryItem } from './inventory-item';

export class Inventory implements Deserializable {

    inventory: InventoryItem[];

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
