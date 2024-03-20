import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      ID: 7,
      PrimeiroNome: 'Gabriel',
      UltimoNome: 'Gomes',
      Pronome: 'Sr.',
      Cargo: 'Desenvolvedor',
      // Foto: 'images/employees/06.png',
      NascidoEm: new Date('2004/5/17'),
      ContratadoEm: new Date('2023/12/11'),
      /* tslint:disable-next-line:max-line-length */
      Descrição: 'Gabriel é desenvolvedor fullstac pela ecosoft.\r\n\r\n',
      Endereço: 'R. Anabyr Lopes França, 111 - Santa Lucia, Vitória - ES, 29056-195'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}
