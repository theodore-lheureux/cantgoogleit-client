import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CantgoogleitService {

  apiURL = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  async getCookie(): Promise<UserResponse> {
    return await firstValueFrom(this.http.get<UserResponse>(this.apiURL + 'get_cookie', {withCredentials: true}));
  }

  async createClassroom(): Promise<String> {
    return await firstValueFrom(this.http.post<String>(this.apiURL + 'create_classroom', {}, {withCredentials: true}));
  }

  async createPosition(classroom: string): Promise<PositionResponse> {
    return await firstValueFrom(
      this.http.get<PositionResponse>(this.apiURL + `create_position/${classroom}`, {withCredentials: true})
    );
  }

  async setUsername(name: string): Promise<void> {
    return await firstValueFrom(
      this.http.post<void>(this.apiURL + 'set_username', `name=${name}`, {withCredentials: true})
    );
  }
}

interface UserResponse {
  id: number;
  name: String;
}

interface PositionResponse {
  id: number;
  ownerId: String;
  createdAt: number;
}