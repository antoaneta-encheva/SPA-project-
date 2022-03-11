import {User} from "../../../auth/model/user.model";

export interface Ad{
  id?:number;
  title:string;
  description:string;
  likes?: number;
  type: string,
  category: string;
  user?:User[];
}
