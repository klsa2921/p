import { TestBed } from "@angular/core/testing";
import { RoleService } from "./roles.service";
import { Role } from "src/app/model/roles/role";

describe('RoleService',()=>{
    let service : RoleService;
    beforeEach(()=>{
        TestBed.configureTestingModule({});
        service = TestBed.inject(RoleService);
    });
    it('should be created',()=>{
        expect(service).toBeTruthy();
    });
});