import { Injectable } from "@angular/core";
import { User } from "../app.component";
import { UserService } from "./user.service";

@Injectable()
export class UserCacheService {
    user!: User;
    constructor(private userervice: UserService) { }

    fetchCachedUser(id: number) {
        if (!this.user) {
            this.user = this.userervice.getUserById(id);
        }
        return this.user;
    }
}