import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemonList: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 20;

  constructor(
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.fetchPokemons()
  }

  getPokemonIdLength(num: number) {
    return Math.ceil(Math.log10(num + 1));
  }

  fetchPokemons() {
    this.api.getPokemonList().subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPokemons();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPokemons();
  }
}
