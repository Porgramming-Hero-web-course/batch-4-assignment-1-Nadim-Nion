{
    class Car {
        make: string;
        model: string;
        year: number

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge() {
            if (this.year < 2024) {
                return 2024 - this.year;
            }
            else {
                return 2024;
            }
        }
    }

    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge());
}