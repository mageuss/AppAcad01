import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  componentes: Componente[] = [
    {
      icone: 'imagem',
      nome: 'Dados Pessoais',
      link: '/dados-pessoais'
    },

    {
      icone: 'imagem',
      nome: 'Financeiro',
      link: '/financeiro'
    },
    {
      icone: 'imagem',
      nome: 'Notas',
      link: '/notas'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}

interface Componente {
  icone: string;
  nome: string;
  link: string
}

