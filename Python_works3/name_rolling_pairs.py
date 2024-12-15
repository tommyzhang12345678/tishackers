import random

rolls = []
sevens_count = 0

for _ in range(100):
    die1 = random.randint(1, 6)
    die2 = random.randint(1, 6)
    total = die1 + die2
    rolls.append(total)
    if total == 7:
        sevens_count += 1

print("Rolls:", rolls)
print("Number of times 7 was rolled:", sevens_count)