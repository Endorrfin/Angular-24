import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<string> {
  userRole = 'admin';

  constructor(private dataService: DataService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
    return this.dataService.getData();
  }

}
