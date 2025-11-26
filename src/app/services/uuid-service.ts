import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class UuidService {
  private storageKey = 'user_uuid';

  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  getOrCreateUUID(): string {
    if(!this.isBrowser()) {
      return uuidv4();
    }

    let uuid = localStorage.getItem(this.storageKey);

    if (!uuid) {
      uuid = uuidv4();
      localStorage.setItem(this.storageKey, uuid);
    }
    return uuid;
  }
}