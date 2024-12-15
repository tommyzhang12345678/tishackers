import random
c = 0
b = 0

for i in range(100):
    a = random.randint(1,2)
    if a == 1:
        c = c +1
    else:
        b = b +1
print(f"{c}Tail and {b}Heads")    