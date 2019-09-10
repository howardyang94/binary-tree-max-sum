import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '.././_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('http://localhost:4000/users');
    }

    register(user: User) {
        return this.http.post('http://localhost:4000/users/register', user);
    }
// Not used on front end, but is implemented in back end
    // delete(id: number) {
    //     return this.http.delete('http://localhost:4000/users/${id}');
    // }

    // note: could be moved to a separate 'treeService' file to keep it consistent with back end service structure
    maxSum(tree: string) {
        return this.http.post('http://localhost:4000/treeSum/sum', {tree});
    }
}