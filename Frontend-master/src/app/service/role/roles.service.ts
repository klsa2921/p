import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "src/app/model/employee/employee";
import { Role } from "src/app/model/roles/role";

 

 @Injectable({
    providedIn:"root"
 })
 export class RoleService{
    getAllRoleUrl : string;
    getRoleByIdURl : string;

    constructor(private http:HttpClient){
        this.getAllRoleUrl="http://localhost:7826/roles/getAllRoles";
        this.getRoleByIdURl="http://localhost:7826/roles/getRoleById";
    }

    getRoleById(role:Role):Observable<Role[]>{
        return this.http.get<Role[]>(this.getRoleById+"/"+role.id);
    }

    getAllRoles(role:Role):Observable<Role[]>{
        return this.http.get<Role[]>(this.getAllRoleUrl)
    }
 }