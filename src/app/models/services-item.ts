import { Deserializable } from "./deserializable";

export class ServicesItem implements Deserializable {
    svc_id: String;
    svc_icon: String;
    svc_name: String;
    svc_type: String;
    svc_info: String;
    type: String;
    display: String;
    componenets: any;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
