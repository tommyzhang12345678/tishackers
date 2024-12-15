meal_cost = float(input("How much was the meal? $"))
tip_percentage = float(input("What percentage would you like to tip? "))

tip_amount = meal_cost * (tip_percentage / 100)

print(f"Leave ${tip_amount:.2f}")
print(f"{tip_percentage}%")
