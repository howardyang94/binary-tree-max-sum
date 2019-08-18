import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

// Not used
    // getAll() {
    //     return this.http.get<User[]>(`${config.apiUrl}/users`);
    // }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }
// Not used
    // delete(id: number) {
    //     return this.http.delete(`${config.apiUrl}/users/${id}`);
    // }
    maxSum(tree: string) {
        return this.http.post(`${config.apiUrl}/treeSum/sum`, {tree});
    }
}