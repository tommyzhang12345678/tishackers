import random

def a():
    x = []
    
    for i in range(4):
        x.append(random.randint(1, 6))
    
    smallest = float('inf')
    for num in x:
        if num < smallest:
            smallest = num
    
    return sum(x) - smallest

print(f"Strength: {a()}, Dexterity: {a()}, Constitution: {a()}, Intelligence: {a()}, Wisdom: {a()}, Charisma: {a()}")