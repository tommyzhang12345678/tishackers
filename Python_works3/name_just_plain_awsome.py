scores = []
for i in range(7):
    score = float(input(f"Enter score {i + 1}: "))
    scores.append(score)

sum_scores = sum(scores)
average_score = sum_scores / len(scores)
lowest_score = min(scores)

print(f"Sum of all scores: {sum_scores}")
print(f"Average score: {average_score}")
print(f"Lowest score: {lowest_score}")
