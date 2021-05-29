import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakingBadCharacter } from 'src/app/shared/models/breaking-bad-character.model';

@Injectable({
    providedIn: 'root'
})
export class BreakingBadService {

    baseUrl = 'https://www.breakingbadapi.com/api/';

    constructor(private http: HttpClient) { }

    getAllCharacters(): Observable<BreakingBadCharacter[]> {
        return this.http.get<BreakingBadCharacter[]>(this.baseUrl + 'characters');
    }

    getCharacterDetails(characterId: number): Observable<BreakingBadCharacter> {
        return this.http.get<BreakingBadCharacter>(this.baseUrl + 'characters/' + characterId);
    }
}
