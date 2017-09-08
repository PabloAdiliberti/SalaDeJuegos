export class Juego {
    Nombre : string;
    NumeroSecreto: number;
    Gano: boolean;
    Jugador: string;
    NumeroIngresado: number;
    Inicio:number; 
    Fin:number; 
    constructor() 
    { 
    this.Nombre = "Adivina el numero";
    this.NumeroSecreto = null;
    }

    public GenerarNuevo():void
    {
    this.NumeroSecreto = Math.floor(Math.random()*100+1);
    console.info("Numero: ", this.NumeroSecreto);
    this.Inicio = new Date().getTime();   
    this.Gano = false;           
    }

    public Verificar()
    {
        if(this.NumeroIngresado==this.NumeroSecreto)
            {
                this.Gano= true;   
                this.Fin = Math.floor((new Date().getTime() - this.Inicio)/1000);         
            }
        else
            {
                this.Gano = false;
                this.NumeroIngresado = null;
            } 
    }
}
