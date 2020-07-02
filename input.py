cars = []

while True:
  v = str(input("Enter the model of the vehicle: "))
  
  if (v == "no"):
    break

  cars.append(v)

print(cars)
