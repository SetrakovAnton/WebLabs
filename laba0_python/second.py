def stairs():
    st = 1
    countOfStars = '*'
    for i in range(1, 6):
        for j in range(1, st):
            countOfStars += '*'
        st += 1
        print(countOfStars)
        countOfStars = '*'

stairs()