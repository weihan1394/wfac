import { Deserializable } from "./deserializable";

export class RequestsItem implements Deserializable {

    request_Id: string;
    svc_icon: string;
    svc_type: string;
    submittedOn: string;
    request_Status: string;
    request_Progress: number;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}