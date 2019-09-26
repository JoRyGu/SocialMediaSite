export interface CarItem {
  make: string;
  model: string;
  year?: number;
}

const car1: CarItem = {
  make: 'Ford',
  model: 'Mustang',
  year: 1967
};

const car2: CarItem = {
  make: 'Ferrari',
  model: 'F40'
};

export const cars = [car1, car2];
