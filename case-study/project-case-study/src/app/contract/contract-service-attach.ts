import {Contract} from "./contract";
import {ServiceAttach} from "./service-attach";

export interface ContractServiceAttach {
  contract_service_id?: number;
  contract?: Contract;
  service_attach?: ServiceAttach[];
  quantity?: number[];
}
