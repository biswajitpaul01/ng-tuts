import { Component, OnInit } from '@angular/core';
import { BreakingBadService } from 'src/app/core/services/breaking-bad.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs-compat/operator/switchMap';

@Component({
    selector: 'app-async-pipe',
    templateUrl: './async-pipe.component.html',
    styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

    characters$: any = [];
    character$: any;

    constructor(
        private breakingBadService: BreakingBadService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // const characterId = Number(this.route.snapshot.paramMap.get('id'));
        let characterId;

        this.route.paramMap.subscribe((params: ParamMap) => {
            characterId = Number(params.get('id'));
            console.log('characterId: ', characterId);
        });

        this.route.params.subscribe( params =>
            console.log('param id: ', params.id)
        );

        // Or as an alternative, with slightly different execution...
        this.route.paramMap.subscribe((params: ParamMap) =>  {
            console.log( 'id: ', params.get('id') );
        });

        if (characterId) {
            this.character$ = this.breakingBadService.getCharacterDetails(characterId);
        } else {
            this.characters$ = this.breakingBadService.getAllCharacters();
        }
    }

}
