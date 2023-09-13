class Car {
    private distance: number = 0;
    private color: string;
    
    // private isHybrid: boolean;
    // constructor(private isHybri: boolean, color: string ='red') {
    //     this.isHybrid = isHybri;
    //     this.color = color;
    // }

    constructor(private isHybrid: boolean, color: string ='red') {
        this.color = color;
    }
    getConsommationEssence(): string {
        return this.isHybrid ? 'Faible Conso' : 'Forte Conso!';
    }
    drive(trajet: number): void {
        this.distance += trajet;
    }
    static immatriculation(): string {
        return 'ABCD-1234!';
    }
   get distance(): number {
        return this.distance;
    }
}