import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/model/users/user";


@Injectable({
    providedIn:'root'
})
export class UserService{
    addUserUrl : string ;
    getAllUsersUrl : string ;
    deleteUserUrl : string ;
    assignRoleUrl : string ;

    constructor(private http : HttpClient){
        this.addUserUrl="http://localhost:7826/user/insertUser";
        this.assignRoleUrl="http://localhost:7826/user/assignRole";
        this.getAllUsersUrl="http://localhost:7826/user/getAllUsers"
        this.deleteUserUrl="http://localhost:7826/user/deleteRole";
    }
        addUser(user:User):Observable<User>{
            return this.http.post<User>(this.addUserUrl,user);
        }
        assignRole(user:User):Observable<User>{
            return this.http.put<User>(this.assignRoleUrl+"/"+user.id,user.role_name);
        }
        getAllUsers(user:User) : Observable<User[]>{
            return this.http.get<User[]>(this.getAllUsersUrl);
        }
        deleteUser(user:User) : Observable<User>{
            return this.http.delete<User>(this.deleteUserUrl+"/"+user.id);
        }
}