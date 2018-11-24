import { DatepickerViewModel } from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model";

export class ReceiptTable{
    receipt: number;
    seqno: number;
    rtr_status: string;
    date_created: Date;
    date_last_updated: Date;
    status: string;
    dependency: number;
    error: string;
}