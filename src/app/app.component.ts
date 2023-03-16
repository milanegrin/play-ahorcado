import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  palabra ='BENJAMIN';
  palabraOculta = '';
  intentos = 0;

  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];




constructor(){
  const arr = ["BENJAMIN", "AGUACATE","CELULAR", "PERRO","PARALELEPIPEDO","ELECTROCARDIOGRAMA", "VENEZUELA", "CARACAS", "CACHAPA", "MIRANDA"];
  this.palabra =  arr[Math.floor(Math.random() * arr.length)];
  this.palabraOculta = '_ '.repeat(this.palabra.length);
}

    comprobar( letra: string ){
          this.existeLetra( letra )
          const palabraOcultaArr = this.palabraOculta.split(' ');

          for (let i = 0; i < this.palabra.length; i++) {

            if (this.palabra[i] === letra) {

              palabraOcultaArr[i] = letra;


            }
          }
          this.palabraOculta = palabraOcultaArr.join(' ')
          this.verificarGane();
        }

        verificarGane(){
          const palabraArr = this.palabraOculta.split(' ');
          const palabraEvaluar = palabraArr.join('');

          if (palabraEvaluar === this.palabra) {
            this.gano= true;
          }

          if (this.intentos >= 9) {
            this.perdio = true;
          }

        }



    existeLetra( letra: string ){

      if (this.palabra.indexOf(letra) >= 0 ) {

      }else{
        this.intentos ++;
      }
    }

    recargar(){
      location.reload();
    }

}
