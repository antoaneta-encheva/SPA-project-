import {Ad} from "../../main/ad/model/ad.model";

export interface User{
  id:number;
  username:string;
  password?:string;
  email:string;
  role:string;
  ads?:Ad[];
  status?: string;
}
