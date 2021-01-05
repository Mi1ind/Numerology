txtInput = input()


class Numerology:
    def Chaldean(self, word):
        dict1 = {
            "A": 1,
            "B": 2,
            "C": 3,
            "D": 4,
            "E": 5,
            "F": 8,
            "G": 3,
            "H": 5,
            "I": 1,
            "J": 1,
            "K": 2,
            "L": 3,
            "M": 4,
            "N": 5,
            "O": 7,
            "P": 8,
            "Q": 1,
            "R": 2,
            "S": 3,
            "T": 4,
            "U": 6,
            "V": 6,
            "W": 6,
            "X": 5,
            "Y": 1,
            "Z": 7,
            " ": 0

        }
        word = word.upper()
        x = 0
        for i in range(len(word)):
            x += dict1[word[i]]
        return x


a = Numerology()
print(a.Chaldean(txtInput))
